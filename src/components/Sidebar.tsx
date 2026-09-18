import { useState } from 'react';
import { ChevronDown, ChevronRight, Check, Play, PanelLeftClose, PanelLeft, Calendar } from 'lucide-react';
import type { SubjectArea, Module, ProgressMap } from '@/types';
import { getIcon } from '@/lib/icons';

interface SidebarProps {
  curriculum: SubjectArea[];
  selectedLessonId: string | null;
  progress: ProgressMap;
  onSelectLesson: (areaId: string, moduleId: string, lessonId: string) => void;
  onSelectCronograma: () => void;
  isCronogramaActive: boolean;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({
  curriculum,
  selectedLessonId,
  progress,
  onSelectLesson,
  onSelectCronograma,
  isCronogramaActive,
  collapsed,
  onToggleCollapse,
}: SidebarProps) {
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(() => new Set());
  const [expandedModules, setExpandedModules] = useState<Set<string>>(() => new Set());

  const toggleArea = (areaId: string) => {
    setExpandedAreas((prev) => {
      const next = new Set(prev);
      if (next.has(areaId)) next.delete(areaId);
      else next.add(areaId);
      return next;
    });
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  };

  const moduleProgress = (lessons: Module['lessons']) => {
    const completed = lessons.filter((l) => progress[l.id]?.completed).length;
    return { completed, total: lessons.length };
  };

  if (collapsed) {
    return (
      <aside className="flex flex-col items-center gap-3 bg-ink-900 border-r border-ink-875 py-4 px-2 w-14 shrink-0">
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors"
          aria-label="Expandir barra lateral"
        >
          <PanelLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onSelectCronograma}
          className={`p-2 rounded-lg transition-colors ${
            isCronogramaActive
              ? 'bg-red-600/15 text-red-500'
              : 'text-zinc-400 hover:text-red-500 hover:bg-ink-850'
          }`}
          title="Cronograma MEDCURSO"
        >
          <Calendar className="w-5 h-5" />
        </button>
        <div className="w-8 border-t border-ink-875" />
        {curriculum.map((area) => {
          const Icon = getIcon(area.icon);
          return (
            <button
              key={area.id}
              onClick={() => {
                setExpandedAreas(new Set([area.id]));
                onToggleCollapse();
              }}
              className="p-2 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-red-500 transition-colors"
              title={area.name}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </aside>
    );
  }

  return (
    <aside className="flex flex-col bg-ink-900 border-r border-ink-875 w-72 shrink-0 h-full animate-slide-in">
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-ink-875">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white font-bold text-sm">
            S
          </div>
          <span className="font-bold text-white text-lg tracking-tight">SantiSOFT</span>
        </div>
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors"
          aria-label="Recolher barra lateral"
        >
          <PanelLeftClose className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-2 py-2">
        {/* Cronograma tab — fixed at top */}
        <button
          onClick={onSelectCronograma}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all mb-2 ${
            isCronogramaActive
              ? 'bg-red-600/10 border border-red-600/30'
              : 'border border-transparent hover:bg-ink-850'
          }`}
        >
          <Calendar className={`shrink-0 ${isCronogramaActive ? 'text-red-500' : 'text-red-600/70'}`} style={{ width: 18, height: 18 }} />
          <span className={`text-sm font-semibold flex-1 text-left ${isCronogramaActive ? 'text-white' : 'text-zinc-200'}`}>
            Cronograma MEDCURSO
          </span>
        </button>

        {/* Divider */}
        <div className="mx-3 mb-2 border-t border-ink-875" />

        {/* Curriculum areas */}
        {curriculum.map((area, areaIdx) => {
          const AreaIcon = getIcon(area.icon);
          const isExpanded = expandedAreas.has(area.id);
          const areaLessons = area.modules.flatMap((m) => m.lessons);
          const areaCompleted = areaLessons.filter((l) => progress[l.id]?.completed).length;
          const areaPct = areaLessons.length ? Math.round((areaCompleted / areaLessons.length) * 100) : 0;

          return (
            <div key={area.id} className="mb-0.5">
              <button
                onClick={() => toggleArea(area.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-ink-850 transition-colors group"
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
                )}
                <AreaIcon className="text-red-500 shrink-0" style={{ width: 18, height: 18 }} />
                <span className="text-sm font-semibold text-zinc-200 flex-1 text-left">
                  <span className="text-zinc-600 mr-1.5 tabular-nums">{areaIdx + 1}.</span>
                  {area.name}
                </span>
                <span className="text-xs text-zinc-500 tabular-nums">{areaPct}%</span>
              </button>

              {isExpanded && (
                <div className="ml-3 pl-3 border-l border-ink-875 animate-fade-in">
                  {area.modules.map((mod) => {
                    const ModIcon = getIcon(mod.icon);
                    const isModExpanded = expandedModules.has(mod.id);
                    const mp = moduleProgress(mod.lessons);

                    return (
                      <div key={mod.id} className="mt-0.5">
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-ink-850 transition-colors"
                        >
                          {isModExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                          )}
                          <ModIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                          <span className="text-sm text-zinc-300 flex-1 text-left">{mod.name}</span>
                          <span className="text-[10px] tabular-nums text-zinc-500 bg-ink-850 px-1.5 py-0.5 rounded">
                            {mp.completed}/{mp.total}
                          </span>
                        </button>

                        {isModExpanded && (
                          <div className="ml-4 pl-3 border-l border-ink-875 animate-fade-in">
                            {mod.lessons.map((lesson) => {
                              const isSelected = lesson.id === selectedLessonId && !isCronogramaActive;
                              const isDone = progress[lesson.id]?.completed;
                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() => onSelectLesson(area.id, mod.id, lesson.id)}
                                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all group ${
                                    isSelected
                                      ? 'bg-red-600/10 border border-red-600/30'
                                      : 'hover:bg-ink-850 border border-transparent'
                                  }`}
                                >
                                  <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                                    {isDone ? (
                                      <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                      </div>
                                    ) : isSelected ? (
                                      <Play className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full border border-ink-800 flex items-center justify-center">
                                        <span className="text-[9px] text-zinc-500 font-medium">{lesson.number}</span>
                                      </div>
                                    )}
                                  </div>
                                  <span
                                    className={`text-xs leading-snug flex-1 text-left line-clamp-2 ${
                                      isSelected ? 'text-white font-medium' : 'text-zinc-400 group-hover:text-zinc-200'
                                    }`}
                                  >
                                    {lesson.title}
                                  </span>
                                  <span className="text-[10px] text-zinc-600 tabular-nums shrink-0">{lesson.duration}min</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
