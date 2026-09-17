import { useState, useMemo, useCallback } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { VideoPlayer } from '@/components/VideoPlayer';
import { SplashScreen } from '@/components/SplashScreen';
import { HomeScreen } from '@/components/HomeScreen';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { curriculum } from '@/data/curriculum';
import type { ProgressMap } from '@/types';

type AppView = 'splash' | 'home' | 'lessons';

interface Selection {
  areaId: string;
  moduleId: string;
  lessonId: string;
}

export default function App() {
  const [view, setView] = useState<AppView>('splash');
  const [progress, setProgress] = useLocalStorage<ProgressMap>('santisoft:progress', {});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [selection, setSelection] = useState<Selection | null>(() => {
    const firstArea = curriculum[0];
    const firstModule = firstArea.modules[0];
    const firstLesson = firstModule.lessons[0];
    return { areaId: firstArea.id, moduleId: firstModule.id, lessonId: firstLesson.id };
  });

  const currentArea = useMemo(
    () => curriculum.find((a) => a.id === selection?.areaId) ?? null,
    [selection],
  );
  const currentLesson = useMemo(() => {
    if (!currentArea || !selection) return null;
    const mod = currentArea.modules.find((m) => m.id === selection.moduleId);
    return mod?.lessons.find((l) => l.id === selection.lessonId) ?? null;
  }, [currentArea, selection]);

  const areaProgress = useMemo(() => {
    if (!currentArea) return { completed: 0, total: 0 };
    const allLessons = currentArea.modules.flatMap((m) => m.lessons);
    const completed = allLessons.filter((l) => progress[l.id]?.completed).length;
    return { completed, total: allLessons.length };
  }, [currentArea, progress]);

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
    setMobileSidebarOpen(false);
  }, []);

  const handleToggleComplete = useCallback(() => {
    if (!selection) return;
    setProgress((prev) => ({
      ...prev,
      [selection.lessonId]: { completed: !prev[selection.lessonId]?.completed },
    }));
  }, [selection, setProgress]);

  const handlePrev = useCallback(() => {
    if (hasPrev) setSelection(flatLessonList[currentIndex - 1]);
  }, [hasPrev, flatLessonList, currentIndex]);

  const handleNext = useCallback(() => {
    if (hasNext) setSelection(flatLessonList[currentIndex + 1]);
  }, [hasNext, flatLessonList, currentIndex]);

  const isCompleted = selection ? progress[selection.lessonId]?.completed ?? false : false;

  if (view === 'splash') {
    return <SplashScreen onFinish={() => setView('home')} />;
  }

  if (view === 'home') {
    return (
      <div className="h-screen flex flex-col bg-ink-950 overflow-hidden">
        <HomeScreen onSelectCourse={() => setView('lessons')} />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-ink-950 overflow-hidden">
      <Header
        areaName={currentArea?.name ?? null}
        lesson={currentLesson}
        area={currentArea}
        completedCount={areaProgress.completed}
        totalCount={areaProgress.total}
        onToggleSidebar={() => setMobileSidebarOpen((v) => !v)}
        onBackToHome={() => setView('home')}
      />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="hidden lg:flex">
          <Sidebar
            curriculum={curriculum}
            selectedLessonId={selection?.lessonId ?? null}
            progress={progress}
            onSelectLesson={handleSelectLesson}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
          />
        </div>

        {mobileSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="fixed left-0 top-0 bottom-0 z-50 lg:hidden">
              <Sidebar
                curriculum={curriculum}
                selectedLessonId={selection?.lessonId ?? null}
                progress={progress}
                onSelectLesson={handleSelectLesson}
                collapsed={false}
                onToggleCollapse={() => setMobileSidebarOpen(false)}
              />
            </div>
          </>
        )}

        <VideoPlayer
          lesson={currentLesson}
          isCompleted={isCompleted}
          onToggleComplete={handleToggleComplete}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>
    </div>
  );
}
