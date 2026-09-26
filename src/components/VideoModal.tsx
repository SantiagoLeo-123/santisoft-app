import { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { resolveLessonDriveUrls } from '@/lib/driveUrls';

interface VideoModalProps {
  isOpen: boolean;
  lessonId: string;
  lessonTitle: string;
  specialty: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  directDriveId?: string;
  customDriveUrls?: Record<string, string>;
  onSaveCustomDriveUrl?: (lessonId: string, url: string) => void;
}

export function VideoModal({
  isOpen,
  lessonId,
  lessonTitle,
  specialty,
  isCompleted,
  onToggleComplete,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  directDriveId,
  customDriveUrls,
}: VideoModalProps) {
  const { embedUrl } = resolveLessonDriveUrls(
    lessonId,
    customDriveUrls,
    directDriveId,
  );

  // Fechar com tecla ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    /* 3. Rolagem do Modal */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm overflow-y-auto">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Caixa interna com max-h-[90vh] e overflow-y-auto */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-xl p-4 max-h-[90vh] overflow-y-auto flex flex-col gap-3 relative shadow-2xl">
        
        {/* Topo do Modal: Especialidade, Título e Botão Fechar (X) */}
        <div className="flex items-start justify-between gap-3 shrink-0">
          <div className="min-w-0 flex-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-600/15 border border-red-600/30 px-2 py-0.5 rounded-md inline-block mb-1">
              {specialty}
            </span>
            <h2 className="text-sm sm:text-base font-bold text-white leading-snug truncate">
              {lessonTitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Fechar"
            title="Fechar (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Tamanho do Vídeo: 16:9 estrito com min-h-[220px] e flex-shrink-0 */}
        <div className="w-full aspect-video min-h-[220px] bg-black rounded-lg overflow-hidden flex-shrink-0">
          <iframe
            key={embedUrl}
            src={embedUrl}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen={true}
            title={lessonTitle}
          />
        </div>

        {/* 2. Organização dos Botões (Eliminando a quebra e botão solto) */}
        <div className="w-full flex flex-col shrink-0">
          {/* Linha 1 (Ação principal): Botão "Marcar como Assistida" ocupando toda a largura */}
          <button
            type="button"
            onClick={onToggleComplete}
            className={`w-full py-3 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md select-none ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-100" />
                <span>Aula Assistida! (Toque para desmarcar)</span>
              </>
            ) : (
              <>
                <Circle className="w-5 h-5 text-red-200" />
                <span>Marcar como Assistida</span>
              </>
            )}
          </button>

          {/* Linha 2 (Navegação): APENAS "Anterior" e "Próxima" lado a lado (50% cada) */}
          <div className="flex w-full gap-2 mt-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev || !onPrev}
              className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext || !onNext}
              className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Próxima</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
