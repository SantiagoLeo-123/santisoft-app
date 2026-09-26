import { useState, useMemo, useCallback } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { VideoPlayer } from '@/components/VideoPlayer';
import { CronogramaScreen } from '@/components/CronogramaScreen';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { curriculum } from '@/data/curriculum';
import type { ProgressMap } from '@/types';
import { isLessonCompleted } from '@/types';

interface Selection {
  areaId: string;
  moduleId: string;
  lessonId: string;
}

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  // Default directly to Cronograma
  const [showCronograma, setShowCronograma] = useState(true);

  // Default selection
  const [selection, setSelection] = useState<Selection>(() => {
    const pedArea = curriculum.find((a) => a.id === 'pediatria') ?? curriculum[0];
    const firstMod = pedArea.modules[0];
    const firstLesson = firstMod.lessons[0];
    return { areaId: pedArea.id, moduleId: firstMod.id, lessonId: firstLesson.id };
  });

  // 100% persistent in LocalStorage: { [aulaId]: boolean }
  const [progress, setProgress] = useLocalStorage<ProgressMap>(
    'santisoft_completed_lessons',
    {},
  );

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const currentArea = useMemo(
    () => curriculum.find((a) => a.id === selection?.areaId) ?? null,
    [selection],
  );

  const currentLesson = useMemo(() => {
    if (!currentArea || !selection) return null;
    const mod = currentArea.modules.find((m) => m.id === selection.moduleId);
    return mod?.lessons.find((l) => l.id === selection.lessonId) ?? null;
  }, [currentArea, selection]);

  const isCurrentCompleted = useMemo(() => {
    if (!selection) return false;
    return isLessonCompleted(progress, selection.lessonId);
  }, [selection, progress]);

  // Flat list of all lessons
  const flatLessonList = useMemo(() => {
    const list: { areaId: string; moduleId: string; lessonId: string }[] = [];
    for (const area of curriculum) {
      for (const mod of area.modules) {
        for (const lesson of mod.lessons) {
          list.push({ areaId: area.id, moduleId: mod.id, lessonId: lesson.id });
        }
      }
    }
    return list;
  }, []);

  const currentIndex = useMemo(
    () => flatLessonList.findIndex((l) => l.lessonId === selection?.lessonId),
    [flatLessonList, selection],
  );

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < flatLessonList.length - 1;

  const handleSelectLesson = useCallback((areaId: string, moduleId: string, lessonId: string) => {
    setSelection({ areaId, moduleId, lessonId });
    setShowCronograma(false);
    setMobileSidebarOpen(false);
  }, []);

  const handleSelectCronograma = useCallback(() => {
    setShowCronograma(true);
    setMobileSidebarOpen(false);
  }, []);

  // Toggle single completion status in LocalStorage
  const handleToggleComplete = useCallback(
    (id: string) => {
      setProgress((prev) => {
        const isDone = isLessonCompleted(prev, id);
        return {
          ...prev,
          [id]: !isDone,
        };
      });
    },
    [setProgress],
  );

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      setSelection(flatLessonList[currentIndex - 1]);
      setShowCronograma(false);
    }
  }, [hasPrev, flatLessonList, currentIndex]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      setSelection(flatLessonList[currentIndex + 1]);
      setShowCronograma(false);
    }
  }, [hasNext, flatLessonList, currentIndex]);

  const handleResetAllData = useCallback(() => {
    setProgress({});
    setShowResetConfirm(false);
  }, [setProgress]);

  return (
    <div className="h-screen flex flex-col bg-ink-950 overflow-hidden text-white font-sans antialiased overflow-x-hidden w-full">
      {/* Top Header */}
      <Header
        onToggleSidebar={() => setMobileSidebarOpen((v) => !v)}
        onSelectCronograma={handleSelectCronograma}
        isCronograma={showCronograma}
        onResetProgress={() => setShowResetConfirm(true)}
      />

      {/* Main Container */}
      <div className="flex flex-1 min-h-0 overflow-hidden relative overflow-x-hidden">
        {/* Desktop Sidebar (Hidden below 768px as requested: 'hidden md:flex') */}
        <div className="hidden md:flex">
          <Sidebar
            curriculum={curriculum}
            selectedLessonId={selection?.lessonId ?? null}
            progress={progress}
            onSelectLesson={handleSelectLesson}
            onSelectCronograma={handleSelectCronograma}
            isCronogramaActive={showCronograma}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
          />
        </div>

        {/* Mobile Drawer (Smooth overlay drawer without squeezing content) */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileSidebarOpen(false)}
            />
            
            {/* Drawer Content */}
            <div className="relative z-10 w-[85vw] max-w-sm h-full bg-ink-900 shadow-2xl animate-slide-in flex flex-col overflow-hidden">
              <Sidebar
                curriculum={curriculum}
                selectedLessonId={selection?.lessonId ?? null}
                progress={progress}
                onSelectLesson={handleSelectLesson}
                onSelectCronograma={handleSelectCronograma}
                isCronogramaActive={showCronograma}
                collapsed={false}
                onToggleCollapse={() => setMobileSidebarOpen(false)}
                isMobileDrawer={true}
                onCloseMobileDrawer={() => setMobileSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Center Content: Either Cronograma or VideoPlayer */}
        <main className="flex-1 flex flex-col min-h-0 min-w-0 overflow-y-auto relative overflow-x-hidden pb-14 md:pb-0">
          {showCronograma ? (
            <CronogramaScreen
              progress={progress}
              onToggleComplete={handleToggleComplete}
            />
          ) : (
            <VideoPlayer
              lesson={currentLesson}
              isCompleted={isCurrentCompleted}
              onToggleComplete={() => selection && handleToggleComplete(selection.lessonId)}
              onPrev={handlePrev}
              onNext={handleNext}
              hasPrev={hasPrev}
              hasNext={hasNext}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        isCronograma={showCronograma}
        onSelectCronograma={handleSelectCronograma}
        onSelectVideoPlayer={() => {
          setShowCronograma(false);
          setMobileSidebarOpen(false);
        }}
        onOpenDrawer={() => setMobileSidebarOpen(true)}
      />

      {/* Confirmation Modal to Reset Local Progress */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm safe-top safe-bottom">
          <div className="w-full max-w-sm rounded-2xl bg-ink-900 border border-ink-850 p-6 shadow-2xl space-y-4 animate-scale-up">
            <h3 className="text-base font-bold text-white">
              Limpar aulas concluídas?
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Todas as marcações de aulas concluídas salvas no LocalStorage do seu navegador serão resetadas.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold bg-ink-850 text-zinc-300 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleResetAllData}
                className="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/30"
              >
                Limpar Tudo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
