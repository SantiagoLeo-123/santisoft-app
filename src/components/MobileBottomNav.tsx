import { Calendar, Play, Layers, BookOpen, Brain } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'cronograma' | 'aula' | 'questoes' | 'mentor';
  onSelectCronograma: () => void;
  onSelectVideoPlayer: () => void;
  onSelectQuestoes: () => void;
  onSelectMentor?: () => void;
  onOpenDrawer: () => void;
}

export function MobileBottomNav({
  activeTab,
  onSelectCronograma,
  onSelectVideoPlayer,
  onSelectQuestoes,
  onSelectMentor,
  onOpenDrawer,
}: MobileBottomNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-ink-900/95 backdrop-blur-xl border-t border-ink-875 safe-bottom"
      aria-label="Navegação móvel"
    >
      <div className="grid grid-cols-5 h-14 items-center px-1">
        {/* Cronograma */}
        <button
          type="button"
          onClick={onSelectCronograma}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            activeTab === 'cronograma'
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Cronograma</span>
        </button>

        {/* Player de Aula */}
        <button
          type="button"
          onClick={onSelectVideoPlayer}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            activeTab === 'aula'
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Play className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Aula</span>
        </button>

        {/* Banco de Questões */}
        <button
          type="button"
          onClick={onSelectQuestoes}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            activeTab === 'questoes'
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Questões</span>
        </button>

        {/* Mentor Inteligente */}
        <button
          type="button"
          onClick={onSelectMentor || onSelectCronograma}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            activeTab === 'mentor'
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Mentor</span>
        </button>

        {/* Disciplinas / Gaveta */}
        <button
          type="button"
          onClick={onOpenDrawer}
          className="flex flex-col items-center justify-center gap-1 h-full rounded-xl text-zinc-400 hover:text-zinc-200 transition-all active:scale-95"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">Aulas</span>
        </button>
      </div>
    </nav>
  );
}
