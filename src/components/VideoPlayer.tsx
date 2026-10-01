import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  Circle,
  ExternalLink,
  List,
  X,
} from 'lucide-react';
import type { Lesson } from '@/types';
import { extractDriveFileId } from '@/lib/driveUrls';
import { curriculum } from '@/data/curriculum';

export interface FlatLessonItem {
  areaId: string;
  moduleId: string;
  lessonId: string;
  areaName: string;
  lessonNumber: number;
  lessonTitle: string;
}

interface VideoPlayerProps {
  lesson: Lesson | null;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  flatLessonList: FlatLessonItem[];
  currentIndex: number;
  onJumpToLesson: (item: FlatLessonItem) => void;
}

export function VideoPlayer({
  lesson,
  isCompleted,
  onToggleComplete,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  flatLessonList,
  currentIndex,
  onJumpToLesson,
}: VideoPlayerProps) {
  const [showLessonList, setShowLessonList] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  // Detecção de orientação paisagem no mobile (altura reduzida <= 550px)
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const handleOrientation = () => {
      if (typeof window === 'undefined') return;
      const isLandscape =
        (window.matchMedia && window.matchMedia('(orientation: landscape)').matches) ||
        (window.innerWidth > window.innerHeight);
      const isShortScreen = window.innerHeight <= 550;
      setIsMobileLandscape(isLandscape && isShortScreen);
    };

    handleOrientation();
    window.addEventListener('resize', handleOrientation);
    window.addEventListener('orientationchange', handleOrientation);
    const mql = window.matchMedia?.('(orientation: landscape)');
    mql?.addEventListener?.('change', handleOrientation);

    return () => {
      window.removeEventListener('resize', handleOrientation);
      window.removeEventListener('orientationchange', handleOrientation);
      mql?.removeEventListener?.('change', handleOrientation);
    };
  }, []);

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
        
        {/* 2. Container envolvente do <iframe> com enquadramento 16:9 no landscape */}
        <div
          className={`w-full relative z-0 video-landscape-outer ${
            isMobileLandscape
              ? 'fixed inset-0 z-50 bg-black flex items-center justify-center p-0 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]'
              : 'px-2 sm:px-4'
          }`}
        >
          <div
            className={`overflow-hidden bg-black relative shadow-lg video-cinema-container ${
              isMobileLandscape
                ? 'w-full max-w-[calc(100dvh*16/9)] max-h-[100dvh] aspect-video relative flex items-center justify-center'
                : 'w-full h-[290px] sm:h-[360px] md:aspect-video rounded-xl my-2 flex-shrink-0'
            }`}
          >
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

          {/* Navegação Anterior, Lista e Próxima */}
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
              onClick={() => setShowLessonList(true)}
              className="min-h-[42px] h-11 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-red-600/15 hover:bg-red-600/25 border border-red-600/30 text-red-400 flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
              title="Lista de Aulas"
            >
              <List className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Aulas</span>
              <span className="text-[10px] tabular-nums">({currentIndex + 1}/{flatLessonList.length})</span>
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

      {/* Lesson Selector Drawer */}
      {showLessonList && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setShowLessonList(false)}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[70vh] flex flex-col bg-ink-900 rounded-t-2xl border-t border-ink-800 shadow-2xl animate-slide-up md:max-w-md md:left-1/2 md:-translate-x-1/2"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink-875 shrink-0">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <List className="w-4 h-4 text-red-500" />
                Lista de Aulas
              </h3>
              <button
                type="button"
                onClick={() => setShowLessonList(false)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-ink-850 transition-colors"
                aria-label="Fechar lista"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto scrollbar-thin px-2 py-2 flex-1">
              {curriculum.map((area) => {
                const areaLessons = flatLessonList.filter((l) => l.areaId === area.id);
                if (areaLessons.length === 0) return null;
                return (
                  <div key={area.id} className="mb-3">
                    <div className="px-2 py-1.5 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                      {area.name}
                    </div>
                    {areaLessons.map((item) => {
                      const itemIndex = flatLessonList.findIndex((l) => l.lessonId === item.lessonId);
                      const isActive = itemIndex === currentIndex;
                      return (
                        <button
                          key={item.lessonId}
                          type="button"
                          onClick={() => {
                            onJumpToLesson(item);
                            setShowLessonList(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2.5 min-h-[44px] rounded-xl text-left transition-all active:scale-[0.98] ${
                            isActive
                              ? 'bg-red-600/15 text-white font-medium border border-red-600/30'
                              : 'text-zinc-400 hover:text-zinc-200 hover:bg-ink-850'
                          }`}
                        >
                          <span className={`text-[10px] font-bold tabular-nums shrink-0 w-6 text-center ${
                            isActive ? 'text-red-400' : 'text-zinc-600'
                          }`}>
                            {item.lessonNumber}
                          </span>
                          <span className="text-xs leading-snug flex-1 truncate">{item.lessonTitle}</span>
                          {isActive && (
                            <Play className="w-3 h-3 text-red-500 fill-red-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
