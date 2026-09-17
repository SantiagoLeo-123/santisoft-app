export type VideoSource =
  | { kind: 'drive'; fileId: string }
  | { kind: 'mp4'; url: string };

export interface Lesson {
  id: string;
  number: number;
  title: string;
  duration: number; // minutes
  source: VideoSource;
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

export interface LessonProgress {
  completed: boolean;
}

export type ProgressMap = Record<string, LessonProgress>;
