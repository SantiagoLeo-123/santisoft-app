import { useState, useMemo } from 'react';
import {
  Calendar,
  Search,
  X,
  Video,
  CheckCircle2,
  Circle,
  Play,
} from 'lucide-react';
import {
  cronogramaData,
  AREA_COLORS,
  type AreaShort,
  type CronogramaEntry,
} from '@/data/cronograma';
import type { ProgressMap } from '@/types';
import { isLessonCompleted } from '@/types';
import { VideoModal } from '@/components/VideoModal';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export type FilterArea =
  | 'Todas'
  | 'Clínica Médica 1'
  | 'Clínica Médica 2'
  | 'Cirurgia'
  | 'GO'
  | 'Pediatria'
  | 'Preventiva';

interface CronogramaScreenProps {
  progress: ProgressMap;
  onToggleComplete: (entryId: string) => void;
}

function matchesAreaFilter(entry: CronogramaEntry, filter: FilterArea): boolean {
  if (filter === 'Todas') return true;
  const weekNum = parseInt(entry.semana.replace(/\D/g, ''), 10) || 0;
  if (filter === 'Clínica Médica 1') {
    return entry.area === 'Clínica' && weekNum <= 25;
  }
  if (filter === 'Clínica Médica 2') {
    return entry.area === 'Clínica' && weekNum > 25;
  }
  if (filter === 'Cirurgia') return entry.area === 'Cirurgia';
  if (filter === 'GO') return entry.area === 'GO';
  if (filter === 'Pediatria') return entry.area === 'Pediatria';
  if (filter === 'Preventiva') return entry.area === 'Preventiva';
  return true;
}

export function CronogramaScreen({
  progress,
  onToggleComplete,
}: CronogramaScreenProps) {
  const [search, setSearch] = useState('');
  const [areaFilter, setAreaFilter] = useState<FilterArea>('Todas');
  const [statusFilter, setStatusFilter] = useState<'todos' | 'pendentes' | 'concluidas'>('todos');

  // Video Player Modal State
  const [activeVideoEntry, setActiveVideoEntry] = useState<CronogramaEntry | null>(null);

  // Persistent custom drive links if user adds or customizes them
  const [customDriveUrls, setCustomDriveUrls] = useLocalStorage<Record<string, string>>(
    'santisoft_custom_drive_urls',
    {},
  );

  const totalEntries = cronogramaData.length;

  // Single-status statistics (Aulas assistidas/concluídas)
  const stats = useMemo(() => {
    let completedCount = 0;
    for (const entry of cronogramaData) {
      if (isLessonCompleted(progress, entry.id)) {
        completedCount++;
      }
    }
    const pct = totalEntries > 0 ? Math.round((completedCount / totalEntries) * 100) : 0;
    return { completedCount, pct };
  }, [progress, totalEntries]);

  // Reactive counters for each specialty filter button
  const filterCounts = useMemo(() => {
    const filters: { label: string; value: FilterArea }[] = [
      { label: 'Todas', value: 'Todas' },
      { label: 'Clínica Médica 1', value: 'Clínica Médica 1' },
      { label: 'Clínica Médica 2', value: 'Clínica Médica 2' },
      { label: 'Cirurgia', value: 'Cirurgia' },
      { label: 'GO', value: 'GO' },
      { label: 'Pediatria', value: 'Pediatria' },
      { label: 'Preventiva', value: 'Preventiva' },
    ];

    return filters.map((f) => {
      const list = cronogramaData.filter((e) => matchesAreaFilter(e, f.value));
      const total = list.length;
      const completed = list.filter((e) => isLessonCompleted(progress, e.id)).length;
      return {
        ...f,
        total,
        completed,
      };
    });
  }, [progress]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return cronogramaData.filter((e) => {
      if (!matchesAreaFilter(e, areaFilter)) return false;

      const isDone = isLessonCompleted(progress, e.id);
      if (statusFilter === 'pendentes' && isDone) return false;
      if (statusFilter === 'concluidas' && !isDone) return false;

      if (!q) return true;
      return (
        e.aula.toLowerCase().includes(q) ||
        e.bonus.toLowerCase().includes(q) ||
        e.semana.toLowerCase().includes(q) ||
        e.area.toLowerCase().includes(q)
      );
    });
  }, [search, areaFilter, statusFilter, progress]);

  const handleSaveCustomDriveUrl = (lessonId: string, url: string) => {
    setCustomDriveUrls((prev) => {
      if (!url) {
        const next = { ...prev };
        delete next[lessonId];
        return next;
      }
      return {
        ...prev,
        [lessonId]: url,
      };
    });
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto scrollbar-thin animate-fade-in bg-ink-950">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-5">
        
        {/* Header Title & Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 text-red-500">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Cronograma de Estudos
              </h1>
              <p className="text-xs text-zinc-400 mt-0.5">
                Acompanhamento de Aulas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-ink-900 border border-ink-875 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <div
              className={`w-2 h-2 rounded-full ${
                stats.completedCount > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'
              }`}
            />
            <span className="text-xs text-zinc-400">
              Progresso Geral:{' '}
              <strong className="text-white font-semibold">{stats.pct}%</strong>
            </span>
          </div>
        </div>

        {/* Card Superior Único: AULAS & Progresso Geral */}
        <div className="rounded-2xl bg-ink-900 border border-ink-875 p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/15 text-red-500 border border-red-600/30">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  Aulas
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-extrabold text-white tabular-nums">
                    {stats.completedCount}
                    <span className="text-sm font-semibold text-zinc-500 ml-1">
                      /{totalEntries}
                    </span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 ml-1">
                    ({stats.pct}% concluídas)
                  </span>
                </div>
              </div>
            </div>

            {/* Barra de Progresso Geral */}
            <div className="w-full sm:w-72 space-y-1.5">
              <div className="flex justify-between text-xs text-zinc-400 font-medium">
                <span>Progresso das Aulas</span>
                <span className="text-white font-bold">{stats.pct}%</span>
              </div>
              <div className="h-2.5 bg-ink-950 rounded-full overflow-hidden border border-ink-850">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${stats.pct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search & Dynamic Specialty Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por semana, aula principal ou bônus..."
              className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-ink-900 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Status Filter */}
          <div className="flex gap-1 bg-ink-900 border border-ink-875 p-1 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setStatusFilter('todos')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === 'todos'
                  ? 'bg-ink-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setStatusFilter('pendentes')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === 'pendentes'
                  ? 'bg-ink-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Pendentes
            </button>
            <button
              onClick={() => setStatusFilter('concluidas')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === 'concluidas'
                  ? 'bg-emerald-600/30 text-emerald-300 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Concluídas
            </button>
          </div>
        </div>

        {/* 2. Interactive Specialty Filter Tabs with Dynamic Reactive Counts */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-thin pb-1">
          {filterCounts.map((f) => {
            const isActive = areaFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setAreaFilter(f.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-ink-900 text-zinc-400 hover:bg-ink-850 hover:text-white border border-ink-875'
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[11px] font-normal tabular-nums ${
                    isActive ? 'text-white/80' : 'text-zinc-500'
                  }`}
                >
                  ({f.completed}/{f.total})
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-ink-875 bg-ink-900 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-ink-925 border-b border-ink-875 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                <th className="px-4 py-3.5 w-24">Semana</th>
                <th className="px-3 py-3.5 w-28">Área</th>
                <th className="px-5 py-3.5">Aula Principal &amp; Bônus</th>
                <th className="px-5 py-3.5 text-right w-64">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-875">
              {filtered.map((entry) => {
                const colors = AREA_COLORS[entry.area as AreaShort] ?? {
                  bg: 'bg-ink-850',
                  text: 'text-zinc-400',
                  border: 'border-ink-800',
                  dot: 'bg-zinc-500',
                };
                const isDone = isLessonCompleted(progress, entry.id);

                return (
                  <tr
                    key={entry.id}
                    className={`transition-all border-l-4 ${
                      isDone
                        ? 'bg-emerald-950/20 border-l-emerald-500 hover:bg-emerald-950/30'
                        : 'bg-ink-900 hover:bg-ink-875/50 border-l-transparent'
                    }`}
                  >
                    {/* Semana */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="text-xs font-bold text-zinc-300 tabular-nums">
                        {entry.semana}
                      </span>
                    </td>

                    {/* Área */}
                    <td className="px-3 py-3.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        {entry.area}
                      </span>
                    </td>

                    {/* Aula & Bônus */}
                    <td className="px-5 py-3.5">
                      <button
                        type="button"
                        onClick={() => setActiveVideoEntry(entry)}
                        className="text-left group/title focus:outline-none"
                      >
                        <p
                          className={`text-sm font-semibold leading-snug transition-colors group-hover/title:text-red-400 ${
                            isDone ? 'text-emerald-200' : 'text-zinc-100'
                          }`}
                        >
                          {entry.aula}
                        </p>
                      </button>
                      {entry.bonus !== '-' && (
                        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                          <span className="text-zinc-600 font-medium">Bônus: </span>
                          {entry.bonus}
                        </p>
                      )}
                    </td>

                    {/* Action Controls: Assistir (Player Embutido) + Status (Pendente/Concluída) */}
                    <td className="px-5 py-3.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2 justify-end">
                        {/* Assistir Video Player Modal Button */}
                        <button
                          type="button"
                          onClick={() => setActiveVideoEntry(entry)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-600/15 text-red-400 hover:bg-red-600/25 border border-red-600/30 transition-all shadow-sm group"
                          title="Assistir aula no player integrado"
                        >
                          <Play className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" />
                          <span>Assistir</span>
                        </button>

                        {/* Toggle Status Button */}
                        <button
                          type="button"
                          onClick={() => onToggleComplete(entry.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm ${
                            isDone
                              ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
                              : 'bg-ink-950 border border-ink-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-ink-850'
                          }`}
                          title={isDone ? 'Clique para desmarcar' : 'Clique para marcar como assistida'}
                        >
                          {isDone ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                              <span>Assistida</span>
                            </>
                          ) : (
                            <>
                              <Circle className="w-3 h-3 text-zinc-500" />
                              <span>Pendente</span>
                            </>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-3">
          {filtered.map((entry) => {
            const colors = AREA_COLORS[entry.area as AreaShort] ?? {
              bg: 'bg-ink-850',
              text: 'text-zinc-400',
              border: 'border-ink-800',
              dot: 'bg-zinc-500',
            };
            const isDone = isLessonCompleted(progress, entry.id);

            return (
              <div
                key={entry.id}
                className={`rounded-2xl border p-4 transition-all border-l-4 ${
                  isDone
                    ? 'bg-emerald-950/20 border-ink-875 border-l-emerald-500'
                    : 'bg-ink-900 border-ink-875 border-l-transparent'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-300 tabular-nums">
                      {entry.semana}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {entry.area}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      isDone
                        ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-ink-950 text-zinc-500'
                    }`}
                  >
                    {isDone ? 'Assistida' : 'Pendente'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideoEntry(entry)}
                  className="text-left w-full group/mobiletitle"
                >
                  <p
                    className={`text-sm font-semibold leading-snug mb-3 group-hover/mobiletitle:text-red-400 ${
                      isDone ? 'text-emerald-200' : 'text-zinc-100'
                    }`}
                  >
                    {entry.aula}
                  </p>
                </button>

                {entry.bonus !== '-' && (
                  <div className="mb-3 p-2 rounded-xl bg-ink-950/70 border border-ink-875 text-xs text-zinc-400">
                    <span className="text-zinc-500 font-semibold uppercase text-[10px]">
                      Bônus:{' '}
                    </span>
                    {entry.bonus}
                  </div>
                )}

                {/* Mobile Action Buttons: Assistir & Marcar */}
                <div className="pt-2 border-t border-ink-875 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveVideoEntry(entry)}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 bg-red-600/15 text-red-400 hover:bg-red-600/25 border border-red-600/30 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Assistir</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleComplete(entry.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      isDone
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                        : 'bg-ink-950 border border-ink-850 text-zinc-300 hover:bg-ink-850 hover:text-white'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Assistida</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <span>Concluir</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ink-900 border border-ink-875 mb-4">
              <Search className="w-6 h-6 text-zinc-600" />
            </div>
            <p className="text-sm text-zinc-300 font-semibold mb-1">
              Nenhuma aula encontrada
            </p>
            <p className="text-xs text-zinc-500">
              Tente buscar por outro termo ou alterar o filtro de especialidade.
            </p>
          </div>
        )}
      </div>

      {/* Floating Embedded Video Modal Player */}
      <VideoModal
        isOpen={!!activeVideoEntry}
        lessonId={activeVideoEntry?.id ?? ''}
        lessonTitle={activeVideoEntry?.aula ?? ''}
        specialty={activeVideoEntry ? `${activeVideoEntry.area} • ${activeVideoEntry.semana}` : ''}
        isCompleted={activeVideoEntry ? isLessonCompleted(progress, activeVideoEntry.id) : false}
        onToggleComplete={() => activeVideoEntry && onToggleComplete(activeVideoEntry.id)}
        onClose={() => setActiveVideoEntry(null)}
        directDriveId={activeVideoEntry?.driveId}
        customDriveUrls={customDriveUrls}
        onSaveCustomDriveUrl={handleSaveCustomDriveUrl}
      />
    </div>
  );
}
