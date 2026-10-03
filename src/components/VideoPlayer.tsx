import { Check, ChevronLeft, ChevronRight, Play } from 'lucide-react';
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

function buildEmbedUrl(lesson: Lesson): string | null {
  if (lesson.source.kind === 'mp4') {
    return lesson.source.url;
  }
  return `https://drive.google.com/file/d/${lesson.source.fileId}/preview`;
}

export function VideoPlayer({ lesson, isCompleted, onToggleComplete, onPrev, onNext, hasPrev, hasNext }: VideoPlayerProps) {
  if (!lesson) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
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

  const embedUrl = buildEmbedUrl(lesson);
  const isMp4 = lesson.source.kind === 'mp4';

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 min-h-0 overflow-y-auto scrollbar-thin">
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-ink-875 shadow-2xl shadow-black/50">
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
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title={lesson.title}
            />
          )}
        </div>

        <div className="mt-5 flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug text-balance">
            {lesson.title}
          </h2>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-medium bg-ink-850 text-zinc-300 hover:bg-ink-825 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Aula Anterior</span>
            </button>

            <button
              onClick={onToggleComplete}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                isCompleted
                  ? 'bg-red-600/15 text-red-400 border border-red-600/30 hover:bg-red-600/25'
                  : 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 animate-pulse-glow'
              }`}
            >
              <Check className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
              <span>{isCompleted ? 'Aula Concluída' : 'Concluir Aula'}</span>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-medium bg-ink-850 text-zinc-300 hover:bg-ink-825 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <span>Próxima Aula</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
