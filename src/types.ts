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

export interface UserProfile {
  id: string;
  name: string;
  avatar: string; // avatar preset id or data URL
  createdAt: number;
}

export type ProfileList = UserProfile[];

export interface ProfileData {
  progress: ProgressMap;
}

export const AVATAR_PRESETS = [
  { id: 'avatar-1', color: '#dc2626', label: 'Vermelho' },
  { id: 'avatar-2', color: '#3b82f6', label: 'Azul' },
  { id: 'avatar-3', color: '#10b981', label: 'Verde' },
  { id: 'avatar-4', color: '#f59e0b', label: 'Amarelo' },
  { id: 'avatar-5', color: '#8b5cf6', label: 'Violeta' },
  { id: 'avatar-6', color: '#ec4899', label: 'Rosa' },
  { id: 'avatar-7', color: '#06b6d4', label: 'Ciano' },
  { id: 'avatar-8', color: '#f97316', label: 'Laranja' },
] as const;
