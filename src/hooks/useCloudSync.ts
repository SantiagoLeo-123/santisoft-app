import { useState, useCallback, useMemo } from 'react';
import { useLessonProgressSync } from './useLessonProgressSync';
import { useScheduleTasksSync } from './useScheduleTasksSync';
import { useQuestionHistorySync } from './useQuestionHistorySync';
import { useMentorMessagesSync } from './useMentorMessagesSync';
import type { AuthUser, ProgressMap } from '@/types';

export function useCloudSync(
  user: AuthUser | null,
  progress: ProgressMap,
  setProgress: (value: ProgressMap | ((prev: ProgressMap) => ProgressMap)) => void,
) {
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  const {
    isSyncingLessons,
    fetchCloudProgress,
    pushProgressToCloud,
  } = useLessonProgressSync(user, progress, setProgress);

  const {
    isSyncingSchedule,
    fetchCloudTasks,
    pushTaskToCloud,
  } = useScheduleTasksSync(user, progress, setProgress);

  const {
    questionHistory,
    recordQuestion,
    fetchCloudHistory,
    isSyncingQuestions,
    stats: questionStats,
  } = useQuestionHistorySync(user);

  const {
    messages: mentorMessages,
    sendMessage: sendMentorMessage,
    clearMessages: clearMentorMessages,
    fetchCloudMessages,
    isSyncingMentor,
  } = useMentorMessagesSync(user);

  const isSyncing = useMemo(
    () => isSyncingLessons || isSyncingSchedule || isSyncingQuestions || isSyncingMentor,
    [isSyncingLessons, isSyncingSchedule, isSyncingQuestions, isSyncingMentor],
  );

  const syncAll = useCallback(async () => {
    if (!user) return;
    await Promise.allSettled([
      fetchCloudProgress(),
      fetchCloudTasks(),
      fetchCloudHistory(),
      fetchCloudMessages(),
    ]);
    setLastSyncedAt(new Date());
  }, [user, fetchCloudProgress, fetchCloudTasks, fetchCloudHistory, fetchCloudMessages]);

  return {
    isSyncing,
    lastSyncedAt,
    syncAll,
    pushProgressToCloud,
    pushTaskToCloud,
    // Questions
    questionHistory,
    recordQuestion,
    questionStats,
    // Mentor
    mentorMessages,
    sendMentorMessage,
    clearMentorMessages,
  };
}
