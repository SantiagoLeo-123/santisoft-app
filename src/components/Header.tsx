import {
  Menu,
  Calendar,
  BookOpen,
  Brain,
  RotateCcw,
} from 'lucide-react';
import { SantiSoftLogo } from '@/components/Logo';
import { PWAInstallButton } from '@/components/PWAInstallButton';

interface HeaderProps {
  onToggleSidebar: () => void;
  onSelectCronograma: () => void;
  onSelectQuestoes: () => void;
  onSelectMentor?: () => void;
  isCronograma: boolean;
  isQuestoes: boolean;
  isMentor?: boolean;
  onResetProgress?: () => void;
}

export function Header({
  onToggleSidebar,
  onSelectCronograma,
  onSelectQuestoes,
  onSelectMentor,
  isCronograma,
  isQuestoes,
  isMentor,
  onResetProgress,
}: HeaderProps) {
  return (
    <header className="bg-ink-900/95 backdrop-blur-md border-b border-ink-875 px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2.5 sm:gap-4 shrink-0 safe-top select-none z-20">
      {/* Left: SantiSOFT Brand Logo (Stylized Medical Gradient SVG) */}
      <div className="flex items-center gap-2">
        <SantiSoftLogo size={36} showText={true} />
      </div>

      {/* Center Spacer */}
      <div className="flex-1" />

      {/* Right: Actions with comfortable, aligned spacing */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Desktop Quick Nav Controls */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={onSelectCronograma}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
              isCronograma
                ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                : 'text-zinc-300 hover:text-white bg-ink-850 border border-ink-800 hover:border-ink-700'
            }`}
            title="Ir para o Cronograma"
          >
            <Calendar className={`w-3.5 h-3.5 ${isCronograma ? 'text-white' : 'text-red-500'}`} />
            <span>Cronograma</span>
          </button>

          <button
            onClick={onSelectQuestoes}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
              isQuestoes
                ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                : 'text-zinc-300 hover:text-white bg-ink-850 border border-ink-800 hover:border-ink-700'
            }`}
            title="Abrir Banco de Questões (Estilo Medcurso)"
          >
            <BookOpen className={`w-3.5 h-3.5 ${isQuestoes ? 'text-white' : 'text-red-500'}`} />
            <span>Questões</span>
          </button>

          {onSelectMentor && (
            <button
              onClick={onSelectMentor}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                isMentor
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                  : 'text-zinc-300 hover:text-white bg-ink-850 border border-ink-800 hover:border-ink-700'
              }`}
              title="Abrir Aba do Mentor Inteligente"
            >
              <Brain className={`w-3.5 h-3.5 ${isMentor ? 'text-white' : 'text-red-500'}`} />
              <span>Mentor</span>
            </button>
          )}

          <PWAInstallButton />

          {onResetProgress && (
            <button
              onClick={onResetProgress}
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-ink-850 transition-colors"
              title="Limpar Progresso Local (Resetar)"
              aria-label="Limpar Progresso"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile Actions: PWA + Reset + Hamburger Menu (Alinhados, espaçamento confortável 40x40px) */}
        <div className="flex md:hidden items-center gap-2">
          <PWAInstallButton />

          {onResetProgress && (
            <button
              onClick={onResetProgress}
              className="w-10 h-10 rounded-xl bg-ink-850 border border-ink-800 flex items-center justify-center text-zinc-400 hover:text-zinc-200 active:bg-ink-800 active:scale-95 transition-all shadow-sm shrink-0"
              title="Limpar Progresso"
              aria-label="Limpar Progresso"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Mobile Hamburger Drawer Button */}
          <button
            onClick={onToggleSidebar}
            className="w-10 h-10 rounded-xl bg-ink-850 border border-ink-800 flex items-center justify-center text-zinc-200 hover:text-white active:bg-ink-800 active:scale-95 transition-all shadow-sm shrink-0"
            aria-label="Abrir Menu de Disciplinas"
            title="Menu"
          >
            <Menu className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
