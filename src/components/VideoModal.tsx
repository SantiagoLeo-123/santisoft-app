import { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
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
  const { embedUrl, externalUrl } = resolveLessonDriveUrls(
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
    /* Modal Backdrop e Centralização */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto video-modal-backdrop-landscape">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10 hide-on-landscape" onClick={onClose} />

      {/* Caixa do Modal: w-[96vw] max-w-full no mobile, max-w-xl em telas maiores */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-[96vw] max-w-full sm:max-w-xl p-3.5 sm:p-5 max-h-[92vh] overflow-y-auto flex flex-col gap-3 relative shadow-2xl video-modal-landscape-wrapper">
        
        {/* Botão flutuante para fechar durante landscape / tela cheia automática */}
        <button
          type="button"
          onClick={onClose}
          className="landscape-cinema-close w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white/90 hover:text-white items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all"
          aria-label="Fechar videoaula"
          title="Fechar (ESC)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Topo do Modal: Especialidade, Título e Botão Fechar (X) */}
        <div className="flex items-start justify-between gap-3 shrink-0 hide-on-landscape">
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

        {/* Container do Vídeo: altura confortável portrait e modo cinema no landscape */}
        <div className="w-full h-[290px] sm:h-[360px] md:aspect-video rounded-xl overflow-hidden bg-black flex-shrink-0 relative shadow-lg video-cinema-container">
          <iframe
            key={embedUrl}
            src={embedUrl}
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title={lessonTitle}
          />
        </div>

        {/* Botão de Contingência Mobile (Fallback Essencial) */}
        {externalUrl && (
          <div className="w-full shrink-0 flex flex-col gap-1.5 hide-on-landscape">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-800/90 hover:bg-neutral-800 border border-red-500/30 text-neutral-100 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md group"
              title="Abrir no Google Drive (Tela Cheia)"
            >
              <Play className="w-4 h-4 fill-red-500 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-red-100">Abrir no Google Drive (Tela Cheia)</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 ml-0.5" />
            </a>
            <p className="text-[11px] text-neutral-400 text-center leading-tight">
              Se o player do Safari/iOS não iniciar, toque no botão acima para reproduzir no Google Drive nativo.
            </p>
          </div>
        )}

        {/* Organização dos Botões de Ação */}
        <div className="w-full flex flex-col shrink-0 gap-2 hide-on-landscape">
          {/* Ação principal: Botão "Marcar como Assistido" ocupando toda a largura */}
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
                <span>✓ Assistido (Toque para voltar para Pendente)</span>
              </>
            ) : (
              <>
                <Circle className="w-5 h-5 text-red-200" />
                <span>Marcar como Assistido</span>
              </>
            )}
          </button>

          {/* Navegação: APENAS "Anterior" e "Próxima" lado a lado (50% cada) */}
          <div className="flex w-full gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev || !onPrev}
              className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext || !onNext}
              className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm"
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
