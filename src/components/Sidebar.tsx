import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Check,
  Play,
  PanelLeftClose,
  PanelLeft,
  Calendar,
  BookOpen,
} from 'lucide-react';
import type { SubjectArea, ProgressMap } from '@/types';
import { isLessonCompleted } from '@/types';
import { getIcon } from '@/lib/icons';

const BANCO_QUESTOES_URL =
  'https://drive.google.com/drive/folders/1lPgsWzctV6GUMvwTp-yzcjbfr_DOEBc8?usp=drive_link';

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
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(
    () => new Set(['pediatria', 'clinica-medica']),
  );
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    () => new Set(['aulas-ped']),
  );

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

  if (collapsed) {
    return (
      <aside className="flex flex-col items-center gap-3 bg-ink-900 border-r border-ink-875 py-4 px-2 w-14 shrink-0 h-full">
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
          title="Cronograma"
        >
          <Calendar className="w-5 h-5" />
        </button>
        <a
          href={BANCO_QUESTOES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-ink-850 transition-colors"
          title="Questões"
        >
          <BookOpen className="w-5 h-5" />
        </a>
        <div className="w-8 border-t border-ink-875 my-1" />
        <div className="flex-1 overflow-y-auto scrollbar-thin space-y-2">
          {curriculum.map((area) => {
            const Icon = getIcon(area.icon);
            return (
              <button
                key={area.id}
                onClick={() => {
                  setExpandedAreas(new Set([area.id]));
                  onToggleCollapse();
                }}
                className="p-2 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-red-500 transition-colors block"
                title={area.name}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex flex-col bg-ink-900 border-r border-ink-875 w-64 shrink-0 h-full animate-slide-in">
      {/* Sidebar Brand Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-ink-875">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white font-bold text-sm shadow-md shadow-red-600/20">
            S
          </div>
          <span className="font-bold text-white text-base tracking-tight leading-none">
            SantiSOFT
          </span>
        </div>
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors"
          aria-label="Recolher barra lateral"
        >
          <PanelLeftClose className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-2.5 py-3 space-y-1">
        {/* Navigation Buttons: Clean Icon + Direct Name */}
        <button
          onClick={onSelectCronograma}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            isCronogramaActive
              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
              : 'text-zinc-300 hover:bg-ink-850 hover:text-white'
          }`}
        >
          <Calendar
            className={`w-4 h-4 shrink-0 ${
              isCronogramaActive ? 'text-white' : 'text-red-500'
            }`}
          />
          <span className="text-left flex-1">Cronograma</span>
        </button>

        <a
          href={BANCO_QUESTOES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-ink-850 transition-all"
        >
          <BookOpen className="w-4 h-4 shrink-0 text-red-500" />
          <span className="text-left flex-1">Questões</span>
        </a>

        {/* Clean Section Divider: Áreas */}
        <div className="pt-3 pb-1.5 px-3">
          <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
            Áreas
          </span>
        </div>

        {/* 6 Grandes Áreas */}
        {curriculum.map((area) => {
          const AreaIcon = getIcon(area.icon);
          const isExpanded = expandedAreas.has(area.id);

          return (
            <div key={area.id} className="mb-0.5">
              <button
                onClick={() => toggleArea(area.id)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-ink-850 transition-colors group"
              >
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                )}
                <AreaIcon className="w-4 h-4 text-red-500 shrink-0" />
                <span className="flex-1 text-left truncate">{area.name}</span>
              </button>

              {isExpanded && (
                <div className="ml-3 pl-2.5 border-l border-ink-875 animate-fade-in space-y-0.5 my-1">
                  {area.modules.map((mod) => {
                    const ModIcon = getIcon(mod.icon);
                    const isModExpanded = expandedModules.has(mod.id);

                    return (
                      <div key={mod.id}>
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-ink-850 transition-colors"
                        >
                          {isModExpanded ? (
                            <ChevronDown className="w-3 h-3 text-zinc-600 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3 h-3 text-zinc-600 shrink-0" />
                          )}
                          <ModIcon className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span className="flex-1 text-left truncate">{mod.name}</span>
                        </button>

                        {isModExpanded && (
                          <div className="ml-3 pl-2 border-l border-ink-875 animate-fade-in space-y-0.5 my-1">
                            {mod.lessons.map((lesson) => {
                              const isSelected =
                                lesson.id === selectedLessonId &&
                                !isCronogramaActive;
                              const isDone = isLessonCompleted(progress, lesson.id);

                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() =>
                                    onSelectLesson(area.id, mod.id, lesson.id)
                                  }
                                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all text-left ${
                                    isSelected
                                      ? 'bg-red-600/15 text-white font-medium'
                                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-ink-850'
                                  }`}
                                >
                                  <div className="shrink-0 w-4 h-4 flex items-center justify-center">
                                    {isDone ? (
                                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center">
                                        <Check
                                          className="w-2.5 h-2.5 text-white"
                                          strokeWidth={3}
                                        />
                                      </div>
                                    ) : isSelected ? (
                                      <Play className="w-3 h-3 text-red-500 fill-red-500" />
                                    ) : (
                                      <span className="text-[10px] text-zinc-600 font-semibold">
                                        {lesson.number}
                                      </span>
                                    )}
                                  </div>

                                  <span className="text-xs truncate flex-1">
                                    {lesson.title}
                                  </span>
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
