import {
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  Circle,
  ExternalLink,
} from 'lucide-react';
import type { Lesson } from '@/types';
import { extractDriveFileId } from '@/lib/driveUrls';

interface VideoPlayerProps {
  lesson: Lesson | null;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function VideoPlayer({
  lesson,
  isCompleted,
  onToggleComplete,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: VideoPlayerProps) {
  if (!lesson) {
    return (
      <div className="w-full min-h-screen overflow-y-auto pb-32 flex flex-col items-center justify-center p-6 bg-ink-950">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-ink-850 mb-5">
            <Play className="w-10 h-10 text-zinc-700" />
          </div>
          <h2 className="text-xl font-bold text-zinc-300 mb-2">Nenhuma aula selecionada</h2>
          <p className="text-sm text-zinc-500">
            Escolha uma aula no menu de Disciplinas para começar a assistir.
          </p>
        </div>
      </div>
    );
  }

  const rawDriveRef =
    lesson.driveId ||
    (lesson.source.kind === 'drive' ? lesson.source.fileId : null) ||
    lesson.driveUrl ||
    '';
  const cleanDriveId = rawDriveRef ? extractDriveFileId(rawDriveRef) : null;
  const isMp4 = lesson.source.kind === 'mp4' && !cleanDriveId;

  const embedUrl = isMp4
    ? lesson.source.url
    : cleanDriveId
    ? `https://drive.google.com/file/d/${cleanDriveId}/preview`
    : null;

  const externalDriveUrl = cleanDriveId
    ? `https://drive.google.com/file/d/${cleanDriveId}/view`
    : null;

  return (
    /* 1. Contentor Principal: Sem h-screen ou overflow-hidden; rolagem livre com polegar */
    <div className="w-full min-h-screen overflow-y-auto pb-32 flex flex-col bg-ink-950 relative z-0">
      <div className="w-full max-w-4xl mx-auto flex flex-col relative z-0">
        
        {/* 2. Container envolvente do <iframe> com altura adaptada no mobile e cinema no landscape */}
        <div className="w-full px-2 sm:px-4 relative z-0">
          <div className="w-full h-[290px] sm:h-[360px] md:aspect-video rounded-xl overflow-hidden bg-black relative z-0 shadow-lg my-2 flex-shrink-0 video-cinema-container">
            {isMp4 ? (
              <video
                key={lesson.id}
                className="w-full h-full border-0 object-contain"
                controls
                playsInline
                preload="metadata"
                src={embedUrl ?? undefined}
              >
                <track kind="captions" />
              </video>
            ) : (
              <iframe
                key={lesson.id}
                src={embedUrl ?? ''}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title={lesson.title}
              />
            )}
          </div>

          {/* Botão de Contingência Mobile (Fallback Essencial) */}
          {externalDriveUrl && (
            <div className="w-full shrink-0 flex flex-col gap-1.5 mt-2 hide-on-landscape">
              <a
                href={externalDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-900/90 hover:bg-neutral-850 border border-red-500/30 text-neutral-100 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md group"
                title="Abrir no Google Drive (Tela Cheia)"
              >
                <Play className="w-4 h-4 fill-red-500 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-red-100">Abrir no Google Drive (Tela Cheia)</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 ml-0.5" />
              </a>
              <p className="text-[11px] text-zinc-400 text-center leading-tight">
                Se o player do Safari/iOS não reproduzir no celular, toque no botão acima para abrir em tela cheia no Google Drive nativo.
              </p>
            </div>
          )}
        </div>

        {/* 3. Conteúdo e Botões abaixo do vídeo: ocultados em modo landscape */}
        <div className="w-full flex flex-col gap-3 px-4 py-3 flex-shrink-0 hide-on-landscape">
          {/* Informações da Aula */}
          <div className="space-y-1.5 pb-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-red-600/15 text-red-400 border border-red-600/30">
                  Aula {lesson.number}
                </span>
                <span className="text-xs text-zinc-400">
                  {lesson.duration} minutos
                </span>
                {lesson.source.kind === 'drive' && (
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-blue-600/15 text-blue-400 border border-blue-600/30">
                    Google Drive
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-base sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {lesson.title}
            </h1>
          </div>

          {/* Botão Marcar como Assistido */}
          <button
            type="button"
            onClick={onToggleComplete}
            className={`w-full min-h-[46px] h-12 rounded-xl text-xs sm:text-base font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md select-none ${
              isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25'
                : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/25'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100 shrink-0" />
                <span>✓ Assistido (Toque para voltar para Pendente)</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-red-200 shrink-0" />
                <span>Marcar como Assistido</span>
              </>
            )}
          </button>

          {/* Navegação Anterior e Próxima (Lado a lado 50% cada) */}
          <div className="flex w-full justify-between items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex-1 min-h-[42px] h-11 rounded-xl text-xs sm:text-sm font-semibold bg-ink-900 hover:bg-ink-850 border border-ink-875 text-zinc-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>Anterior</span>
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="flex-1 min-h-[42px] h-11 rounded-xl text-xs sm:text-sm font-semibold bg-ink-900 hover:bg-ink-850 border border-ink-875 text-zinc-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 transition-all active:scale-95"
            >
              <span>Próxima</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
