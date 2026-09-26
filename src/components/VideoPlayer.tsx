import {
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  Circle,
  ExternalLink,
} from 'lucide-react';
import type { Lesson } from '@/types';

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

  const driveId =
    lesson.driveId ||
    (lesson.source.kind === 'drive' ? lesson.source.fileId : null);
  const isMp4 = lesson.source.kind === 'mp4' && !lesson.driveId;
  const embedUrl = isMp4
    ? lesson.source.url
    : driveId
    ? `https://drive.google.com/file/d/${driveId}/preview`
    : null;
  const externalDriveUrl = driveId
    ? `https://drive.google.com/file/d/${driveId}/view?usp=sharing`
    : null;

  return (
    /* 1. Contentor Principal: Sem h-screen ou overflow-hidden; rolagem livre com polegar */
    <div className="w-full min-h-screen overflow-y-auto pb-32 flex flex-col bg-ink-950">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        
        {/* 2. Container envolvente do <iframe> com flex-shrink-0 e 16:9 real */}
        <div className="w-full px-2 sm:px-4">
          <div className="w-full aspect-video min-h-[220px] max-h-[300px] flex-shrink-0 bg-black rounded-xl overflow-hidden relative shadow-lg my-2">
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen={true}
                title={lesson.title}
              />
            )}
          </div>
        </div>

        {/* 3. Conteúdo e Botões abaixo do vídeo: w-full flex flex-col gap-3 px-4 py-3 flex-shrink-0 */}
        <div className="w-full flex flex-col gap-3 px-4 py-3 flex-shrink-0">
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

              {externalDriveUrl && (
                <a
                  href={externalDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-ink-900 border border-ink-875 text-zinc-400 hover:text-white hover:bg-ink-850 transition-all active:scale-95"
                  title="Abrir no Google Drive externo"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Abrir no Drive</span>
                </a>
              )}
            </div>

            <h1 className="text-base sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {lesson.title}
            </h1>
          </div>

          {/* Botão Marcar como Assistida */}
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
                <span>Aula Assistida! (Toque para desmarcar)</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-red-200 shrink-0" />
                <span>Marcar como Assistida</span>
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
