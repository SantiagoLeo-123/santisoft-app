export type VideoSource =
  | { kind: 'drive'; fileId: string }
  | { kind: 'mp4'; url: string };

export interface Lesson {
  id: string;
  number: number;
  title: string;
  duration: number; // minutes
  source: VideoSource;
  driveId?: string;
  driveUrl?: string;
  area?: string;
}

export interface Module {
  id: string;
  name: string;
  icon: string; // lucide icon name
  lessons: Lesson[];
}

export interface SubjectArea {
  id: string;
  name: string;
  icon: string;
  modules: Module[];
}

// 100% local map: { [lessonId]: boolean }
export type ProgressMap = Record<string, boolean>;

export function isLessonCompleted(progress: ProgressMap | undefined, id: string): boolean {
  if (!progress) return false;
  const val = (progress as Record<string, unknown>)[id];
  if (typeof val === 'boolean') return val;
  if (val && typeof val === 'object') {
    return !!((val as { completed?: boolean; aula?: boolean }).completed || (val as { completed?: boolean; aula?: boolean }).aula);
  }
  return false;
}
