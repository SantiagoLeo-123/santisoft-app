import { Menu, Activity, Home } from 'lucide-react';
import type { SubjectArea, Lesson } from '@/types';

interface HeaderProps {
  areaName: string | null;
  lesson: Lesson | null;
  area: SubjectArea | null;
  completedCount: number;
  totalCount: number;
  onToggleSidebar: () => void;
  onBackToHome: () => void;
}

export function Header({ areaName, lesson, area, completedCount, totalCount, onToggleSidebar, onBackToHome }: HeaderProps) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="bg-ink-900/80 backdrop-blur-md border-b border-ink-875 px-4 sm:px-6 py-3 flex items-center gap-4 shrink-0 safe-top">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2.5 shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white">
          <Activity className="w-5 h-5" />
        </div>
        <span className="font-bold text-white text-lg tracking-tight hidden sm:block">SantiSOFT</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-0.5">
          {areaName && <span className="truncate">{areaName}</span>}
          {lesson && (
            <>
              <span className="text-ink-800">/</span>
              <span className="text-zinc-400">Aula {lesson.number}</span>
            </>
          )}
        </div>
        <h1 className="text-sm sm:text-base font-semibold text-white truncate leading-tight">
          {lesson ? lesson.title : 'Selecione uma aula para começar'}
        </h1>
      </div>

      {area && totalCount > 0 && (
        <div className="flex items-center gap-3 shrink-0 w-32 sm:w-44">
          <div className="flex-1">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 mb-1">
              <span>Área</span>
              <span className="tabular-nums font-medium text-zinc-300">{pct}%</span>
            </div>
            <div className="h-1.5 bg-ink-850 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <div className="text-[10px] text-zinc-500 tabular-nums hidden sm:block">
            {completedCount}/{totalCount}
          </div>
        </div>
      )}

      <button
        onClick={onBackToHome}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-ink-850 transition-colors shrink-0"
        aria-label="Voltar aos cursos"
        title="Voltar aos cursos"
      >
        <Home className="w-4 h-4" />
        <span className="hidden md:inline">Cursos</span>
      </button>
    </header>
  );
}
