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
      <div className="flex-1 flex items-center justify-center p-8 bg-ink-950">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-ink-850 mb-5">
            <Play className="w-10 h-10 text-zinc-700" />
          </div>
          <h2 className="text-xl font-bold text-zinc-300 mb-2">Nenhuma aula selecionada</h2>
          <p className="text-sm text-zinc-500">
            Escolha uma aula na barra lateral para começar a assistir.
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
    <div className="flex-1 flex flex-col p-4 sm:p-6 min-h-0 overflow-y-auto scrollbar-thin bg-ink-950">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        
        {/* Video Player Frame */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-ink-875 shadow-2xl shadow-black/60">
          {isMp4 ? (
            <video
              key={lesson.id}
              className="w-full h-full"
              controls
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
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title={lesson.title}
            />
          )}
        </div>

        {/* Lesson Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-ink-875">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-red-600/15 text-red-400 border border-red-600/30">
                Aula {lesson.number}
              </span>
              <span className="text-xs text-zinc-500">
                {lesson.duration} minutos
              </span>
              {lesson.source.kind === 'drive' && (
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-600/15 text-blue-400 border border-blue-600/30">
                  Google Drive
                </span>
              )}
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {lesson.title}
            </h1>
          </div>

          <div className="flex items-center flex-wrap gap-2 shrink-0">
            {externalDriveUrl && (
              <a
                href={externalDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-ink-900 border border-ink-875 text-zinc-400 hover:text-white hover:bg-ink-850 transition-all"
                title="Abrir no Google Drive externo"
              >
                <ExternalLink className="w-4 h-4 text-zinc-400" />
                <span className="hidden sm:inline">Abrir no Drive</span>
              </a>
            )}

            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-ink-900 border border-ink-875 text-zinc-300 hover:bg-ink-850 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            {/* Status Button: Pendente / Concluída */}
            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
                  : 'bg-ink-900 border border-ink-875 text-zinc-300 hover:text-white hover:bg-ink-850'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>Assistida</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-zinc-500" />
                  <span>Marcar como Assistida</span>
                </>
              )}
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-ink-900 border border-ink-875 text-zinc-300 hover:bg-ink-850 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
