import { useState } from 'react';
import { Calendar, ChevronDown, ChevronRight, CheckCircle2, Circle, Play, BookOpen } from 'lucide-react';
import { cronograma } from '@/data/cronograma';
import { curriculum } from '@/data/curriculum';
import { getIcon } from '@/lib/icons';
import type { ProgressMap } from '@/types';

interface CronogramaScreenProps {
  progress: ProgressMap;
  onSelectLesson: (areaId: string, moduleId: string, lessonId: string) => void;
}

export function CronogramaScreen({ progress, onSelectLesson }: CronogramaScreenProps) {
  const [activeTab, setActiveTab] = useState(cronograma[0].areaId);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    initial.add(`${cronograma[0].areaId}-1`);
    return initial;
  });

  const toggleWeek = (key: string) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const activeArea = cronograma.find((a) => a.areaId === activeTab) ?? cronograma[0];
  const curriculumArea = curriculum.find((a) => a.id === activeTab);

  const totalTopics = activeArea.weeks.reduce((sum, w) => sum + w.topics.length, 0);
  const completedLessons = activeArea.weeks.reduce((sum, w) => {
    if (!w.lessonIds) return sum;
    return sum + w.lessonIds.filter((id) => progress[id]?.completed).length;
  }, 0);
  const totalLessons = activeArea.weeks.reduce((sum, w) => sum + (w.lessonIds?.length ?? 0), 0);

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto scrollbar-thin animate-fade-in">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-5">
        {/* Title */}
        <div className="flex items-center gap-3 mb-1">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
            <Calendar className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Cronograma de Estudos — MEDCURSO 2026
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Planejamento completo das 5 grandes áreas para residência
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mt-5 mb-4 overflow-x-auto scrollbar-thin pb-1">
          {cronograma.map((area) => {
            const AreaIcon = getIcon(curriculum.find((c) => c.id === area.areaId)?.icon ?? 'BookOpen');
            const isActive = area.areaId === activeTab;
            return (
              <button
                key={area.areaId}
                onClick={() => setActiveTab(area.areaId)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                    : 'bg-ink-900 text-zinc-400 hover:bg-ink-850 hover:text-zinc-200 border border-ink-875'
                }`}
              >
                <AreaIcon className="w-4 h-4 shrink-0" />
                {area.areaName}
              </button>
            );
          })}
        </div>

        {/* Progress summary */}
        <div className="flex items-center gap-4 mb-5 px-4 py-3 rounded-xl bg-ink-900 border border-ink-875">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-zinc-500" />
            <span className="text-xs text-zinc-400">
              <span className="text-white font-semibold">{activeArea.weeks.length}</span> semanas
            </span>
          </div>
          <div className="w-px h-4 bg-ink-875" />
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">
              <span className="text-white font-semibold">{totalTopics}</span> temas
            </span>
          </div>
          {totalLessons > 0 && (
            <>
              <div className="w-px h-4 bg-ink-875" />
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400">
                  <span className="text-red-500 font-semibold">{completedLessons}</span>/{totalLessons} aulas concluídas
                </span>
              </div>
            </>
          )}
        </div>

        {/* Weekly list */}
        <div className="space-y-2">
          {activeArea.weeks.map((week, idx) => {
            const weekKey = `${activeArea.areaId}-${week.week}`;
            const isExpanded = expandedWeeks.has(weekKey);
            const weekLessons = week.lessonIds ?? [];
            const weekCompleted = weekLessons.filter((id) => progress[id]?.completed).length;
            const weekPct = weekLessons.length > 0 ? Math.round((weekCompleted / weekLessons.length) * 100) : 0;

            return (
              <div
                key={weekKey}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? 'bg-ink-900 border-ink-850'
                    : 'bg-ink-925 border-ink-875 hover:border-ink-850'
                }`}
              >
                {/* Week header */}
                <button
                  onClick={() => toggleWeek(weekKey)}
                  className="w-full flex items-center gap-3 px-4 py-3.5"
                >
                  <div className={`flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-colors ${
                    isExpanded ? 'bg-red-600/15 text-red-500' : 'bg-ink-850 text-zinc-500'
                  }`}>
                    <span className="text-xs font-bold tabular-nums">{String(week.week).padStart(2, '0')}</span>
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider">
                        Semana {week.week}
                      </span>
                      {weekPct === 100 && weekLessons.length > 0 && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-100 truncate mt-0.5">
                      {week.title}
                    </h3>
                  </div>

                  {weekLessons.length > 0 && (
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="hidden sm:flex items-center gap-1.5">
                        <div className="w-16 h-1 bg-ink-850 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600 rounded-full transition-all duration-500"
                            style={{ width: `${weekPct}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-zinc-500 tabular-nums w-8 text-right">{weekPct}%</span>
                      </div>
                    </div>
                  )}

                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-zinc-600 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0" />
                  )}
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-4 animate-fade-in">
                    {/* Topics */}
                    <div className="ml-12 mb-3">
                      <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider mb-2">
                        Temas de estudo
                      </p>
                      <ul className="space-y-1.5">
                        {week.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                            <Circle className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Linked lessons */}
                    {weekLessons.length > 0 && (
                      <div className="ml-12 pt-3 border-t border-ink-875">
                        <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider mb-2">
                          Aulas vinculadas
                        </p>
                        <div className="space-y-1">
                          {weekLessons.map((lessonId) => {
                            const lesson = findLesson(lessonId);
                            if (!lesson) return null;
                            const isDone = progress[lessonId]?.completed;

                            return (
                              <button
                                key={lessonId}
                                onClick={() => onSelectLesson(week.areaId, lesson.moduleId, lessonId)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-ink-850 transition-colors group"
                              >
                                <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                                  {isDone ? (
                                    <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                                      <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                  ) : (
                                    <Play className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-500 transition-colors" />
                                  )}
                                </div>
                                <span className={`text-xs flex-1 text-left leading-snug ${
                                  isDone ? 'text-zinc-500' : 'text-zinc-300 group-hover:text-white'
                                }`}>
                                  {lesson.title}
                                </span>
                                <span className="text-[10px] text-zinc-600 tabular-nums shrink-0">{lesson.duration}min</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-zinc-700">
          SantiSOFT © 2026 — Cronograma MEDCURSO
        </p>
      </div>
    </div>
  );
}

// Helper to find a lesson by ID across the curriculum
function findLesson(lessonId: string): { title: string; duration: number; moduleId: string } | null {
  for (const area of curriculum) {
    for (const mod of area.modules) {
      const lesson = mod.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        return { title: lesson.title, duration: lesson.duration, moduleId: mod.id };
      }
    }
  }
  return null;
}
