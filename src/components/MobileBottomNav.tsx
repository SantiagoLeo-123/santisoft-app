import { Calendar, Play, Layers, BookOpen } from 'lucide-react';

const BANCO_QUESTOES_URL =
  'https://drive.google.com/drive/folders/1lPgsWzctV6GUMvwTp-yzcjbfr_DOEBc8?usp=drive_link';

interface MobileBottomNavProps {
  isCronograma: boolean;
  onSelectCronograma: () => void;
  onSelectVideoPlayer: () => void;
  onOpenDrawer: () => void;
}

export function MobileBottomNav({
  isCronograma,
  onSelectCronograma,
  onSelectVideoPlayer,
  onOpenDrawer,
}: MobileBottomNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-ink-900/95 backdrop-blur-xl border-t border-ink-875 safe-bottom"
      aria-label="Navegação móvel"
    >
      <div className="grid grid-cols-4 h-14 items-center px-1">
        {/* Cronograma */}
        <button
          type="button"
          onClick={onSelectCronograma}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            isCronograma
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Cronograma</span>
        </button>

        {/* Player de Aula */}
        <button
          type="button"
          onClick={onSelectVideoPlayer}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            !isCronograma
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Play className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Aula Atual</span>
        </button>

        {/* Disciplinas / Gaveta */}
        <button
          type="button"
          onClick={onOpenDrawer}
          className="flex flex-col items-center justify-center gap-1 h-full rounded-xl text-zinc-400 hover:text-zinc-200 transition-all active:scale-95"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Disciplinas</span>
        </button>

        {/* Questões Externas */}
        <a
          href={BANCO_QUESTOES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-full rounded-xl text-zinc-400 hover:text-red-400 transition-all active:scale-95"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Questões</span>
        </a>
      </div>
    </nav>
  );
}
