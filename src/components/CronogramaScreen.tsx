import { useState, useMemo } from 'react';
import { Calendar, Search, Check, X } from 'lucide-react';
import { cronogramaData, AREA_COLORS, AREA_FILTERS, type AreaShort, type CronogramaEntry } from '@/data/cronograma';
import type { ProgressMap } from '@/types';

interface CronogramaScreenProps {
  progress: ProgressMap;
  onToggleComplete: (entryId: string) => void;
}

export function CronogramaScreen({ progress, onToggleComplete }: CronogramaScreenProps) {
  const [search, setSearch] = useState('');
  const [areaFilter, setAreaFilter] = useState<AreaShort | 'Todas'>('Todas');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return cronogramaData.filter((e) => {
      if (areaFilter !== 'Todas' && e.area !== areaFilter) return false;
      if (!q) return true;
      return (
        e.aula.toLowerCase().includes(q) ||
        e.bonus.toLowerCase().includes(q) ||
        e.semana.toLowerCase().includes(q) ||
        e.area.toLowerCase().includes(q)
      );
    });
  }, [search, areaFilter]);

  const totalEntries = cronogramaData.length;
  const completedCount = cronogramaData.filter((e) => progress[e.id]?.completed).length;
  const pct = totalEntries > 0 ? Math.round((completedCount / totalEntries) * 100) : 0;

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto scrollbar-thin animate-fade-in">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-5">
        {/* Title */}
        <div className="flex items-center gap-3 mb-1">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
            <Calendar className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Cronograma de Estudos — MEDCURSO 2026
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              {totalEntries} aulas • {completedCount} concluídas • {pct}% do cronograma
            </p>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="mt-3 mb-5">
          <div className="h-1.5 bg-ink-850 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por tema ou aula..."
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

          <div className="flex gap-1.5 overflow-x-auto scrollbar-thin pb-1">
            {AREA_FILTERS.map((f) => {
              const isActive = areaFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setAreaFilter(f.value)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-ink-900 text-zinc-400 hover:bg-ink-850 border border-ink-875'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-zinc-600 mb-3">
          {filtered.length === totalEntries
            ? `Mostrando todas as ${totalEntries} aulas`
            : `${filtered.length} resultado(s)`}
        </p>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-ink-875">
          <table className="w-full">
            <thead>
              <tr className="bg-ink-900 border-b border-ink-875">
                <th className="w-10 px-3 py-3 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider"></th>
                <th className="px-3 py-3 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Semana</th>
                <th className="px-3 py-3 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Área</th>
                <th className="px-3 py-3 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Aula Principal</th>
                <th className="px-3 py-3 text-left text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Aulas Bônus</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => (
                <DesktopRow
                  key={entry.id}
                  entry={entry}
                  isDone={!!progress[entry.id]?.completed}
                  onToggle={() => onToggleComplete(entry.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-2">
          {filtered.map((entry) => (
            <MobileCard
              key={entry.id}
              entry={entry}
              isDone={!!progress[entry.id]?.completed}
              onToggle={() => onToggleComplete(entry.id)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ink-850 mb-4">
              <Search className="w-6 h-6 text-zinc-600" />
            </div>
            <p className="text-sm text-zinc-400 mb-1">Nenhum resultado encontrado</p>
            <p className="text-xs text-zinc-600">Tente buscar por outro termo ou trocar o filtro</p>
          </div>
        )}

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-zinc-700">
          SantiSOFT © 2026 — Cronograma MEDCURSO
        </p>
      </div>
    </div>
  );
}

function DesktopRow({ entry, isDone, onToggle }: { entry: CronogramaEntry; isDone: boolean; onToggle: () => void }) {
  const colors = AREA_COLORS[entry.area];
  return (
    <tr className={`border-b border-ink-875 transition-colors ${isDone ? 'bg-ink-925 opacity-60' : 'bg-ink-925 hover:bg-ink-900'}`}>
      <td className="px-3 py-3">
        <button
          onClick={onToggle}
          className={`flex items-center justify-center w-5 h-5 rounded-md border transition-all ${
            isDone
              ? 'bg-red-600 border-red-600'
              : 'border-ink-800 hover:border-red-600'
          }`}
          aria-label={isDone ? 'Desmarcar como concluído' : 'Marcar como concluído'}
        >
          {isDone && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </button>
      </td>
      <td className="px-3 py-3 whitespace-nowrap">
        <span className="text-xs font-semibold text-zinc-300 tabular-nums">{entry.semana}</span>
      </td>
      <td className="px-3 py-3 whitespace-nowrap">
        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-semibold border ${colors.bg} ${colors.text} ${colors.border}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
          {entry.area}
        </span>
      </td>
      <td className="px-3 py-3">
        <span className={`text-sm ${isDone ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
          {entry.aula}
        </span>
      </td>
      <td className="px-3 py-3">
        <span className="text-xs text-zinc-500 leading-snug">
          {entry.bonus === '-' ? <span className="text-zinc-700">—</span> : entry.bonus}
        </span>
      </td>
    </tr>
  );
}

function MobileCard({ entry, isDone, onToggle }: { entry: CronogramaEntry; isDone: boolean; onToggle: () => void }) {
  const colors = AREA_COLORS[entry.area];
  return (
    <div className={`rounded-2xl border p-4 transition-all ${isDone ? 'bg-ink-925 border-ink-875 opacity-60' : 'bg-ink-900 border-ink-875'}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className={`flex items-center justify-center w-5 h-5 rounded-md border shrink-0 mt-0.5 transition-all ${
            isDone ? 'bg-red-600 border-red-600' : 'border-ink-800 hover:border-red-600'
          }`}
          aria-label={isDone ? 'Desmarcar' : 'Marcar'}
        >
          {isDone && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-semibold text-zinc-400 tabular-nums">{entry.semana}</span>
            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold border ${colors.bg} ${colors.text} ${colors.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              {entry.area}
            </span>
          </div>
          <p className={`text-sm font-medium leading-snug ${isDone ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
            {entry.aula}
          </p>
          {entry.bonus !== '-' && (
            <div className="mt-2 pt-2 border-t border-ink-875">
              <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider mb-1">Bônus</p>
              <p className="text-xs text-zinc-500 leading-snug">{entry.bonus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
