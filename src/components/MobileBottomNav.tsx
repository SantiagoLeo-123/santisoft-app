import { Calendar, Play, BookOpen, Brain, FileText } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'cronograma' | 'aula' | 'questoes' | 'mentor' | 'casalmed';
  onSelectCronograma: () => void;
  onSelectVideoPlayer: () => void;
  onSelectQuestoes: () => void;
  onSelectMentor?: () => void;
  onSelectCasalMed?: () => void;
}

export function MobileBottomNav({
  activeTab,
  onSelectCronograma,
  onSelectVideoPlayer,
  onSelectQuestoes,
  onSelectMentor,
  onSelectCasalMed,
}: MobileBottomNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-ink-900/95 backdrop-blur-xl border-t border-ink-875 safe-bottom hide-on-landscape"
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

        {/* CASALMED */}
        <button
          type="button"
          onClick={onSelectCasalMed || onSelectCronograma}
          className={`flex flex-col items-center justify-center gap-1 h-full rounded-xl transition-all active:scale-95 ${
            activeTab === 'casalmed'
              ? 'text-red-500 font-bold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span className="text-[9px] tracking-tight">CasalMed</span>
        </button>
      </div>
    </nav>
  );
}
