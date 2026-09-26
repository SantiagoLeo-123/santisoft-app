import {
  Menu,
  Calendar,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import { PWAInstallButton } from '@/components/PWAInstallButton';

const BANCO_QUESTOES_URL =
  'https://drive.google.com/drive/folders/1lPgsWzctV6GUMvwTp-yzcjbfr_DOEBc8?usp=drive_link';

interface HeaderProps {
  onToggleSidebar: () => void;
  onSelectCronograma: () => void;
  isCronograma: boolean;
  onResetProgress?: () => void;
}

export function Header({
  onToggleSidebar,
  onSelectCronograma,
  isCronograma,
  onResetProgress,
}: HeaderProps) {
  return (
    <header className="bg-ink-900/90 backdrop-blur-md border-b border-ink-875 px-4 sm:px-6 h-14 flex items-center justify-between gap-4 shrink-0 safe-top">
      {/* Left: Mobile Toggle & Brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-1.5 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white font-bold text-sm shadow-md shadow-red-600/20">
            S
          </div>
          <span className="font-bold text-white text-base tracking-tight leading-none">
            SantiSOFT
          </span>
        </div>
      </div>

      {/* Center: Clean Spacer (No cluttered text) */}
      <div className="flex-1" />

      {/* Right: Essential Action Controls */}
      <div className="flex items-center gap-2">
        {/* Toggle to Cronograma if in video view */}
        {!isCronograma && (
          <button
            onClick={onSelectCronograma}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-ink-850 border border-ink-800 hover:border-ink-700 transition-all"
            title="Ir para o Cronograma"
          >
            <Calendar className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">Cronograma</span>
          </button>
        )}

        {/* Questões */}
        <a
          href={BANCO_QUESTOES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-ink-850 border border-ink-800 hover:border-ink-700 transition-all"
          title="Acessar Banco de Questões no Google Drive"
        >
          <BookOpen className="w-3.5 h-3.5 text-red-500" />
          <span className="hidden sm:inline">Questões</span>
        </a>

        {/* Install PWA Button */}
        <PWAInstallButton />

        {/* Reset Local Progress */}
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
    </header>
  );
}
