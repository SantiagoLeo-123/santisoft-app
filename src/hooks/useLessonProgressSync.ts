import { useEffect, useRef, useCallback, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { AuthUser, ProgressMap } from '@/types';

export function useLessonProgressSync(
  user: AuthUser | null,
  progress: ProgressMap,
  setProgress: (value: ProgressMap | ((prev: ProgressMap) => ProgressMap)) => void,
) {
  const [isSyncing, setIsSyncing] = useState(false);
  const isInitialLoad = useRef(true);
  const lastSyncedRef = useRef<string>('');

  // Initial fetch from cloud when user logs in
  const fetchCloudProgress = useCallback(async () => {
    if (!user || !isSupabaseConfigured()) return;
    setIsSyncing(true);

    try {
      const { data, error } = await supabase
        .from('user_lesson_progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id);

      if (error) {
        // Table might not exist or network error
        console.warn('Could not fetch lesson progress from Supabase:', error.message);
        return;
      }

      if (data && data.length > 0) {
        setProgress((prev) => {
          const updated = { ...prev };
          for (const item of data) {
            if (item.completed) {
              updated[item.lesson_id] = { completed: true };
            }
          }
          return updated;
        });
      }
    } catch (err) {
      console.warn('Error fetching lesson progress:', err);
    } finally {
      setIsSyncing(false);
      isInitialLoad.current = false;
    }
  }, [user, setProgress]);

  // Sync to cloud when progress changes
  const pushProgressToCloud = useCallback(
    async (lessonId: string, completed: boolean) => {
      if (!user || !isSupabaseConfigured()) return;

      try {
        await supabase.from('user_lesson_progress').upsert(
          {
            user_id: user.id,
            user_email: user.email,
            lesson_id: lessonId,
            completed,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,lesson_id' },
        );
      } catch (err) {
        console.warn('Error syncing lesson progress to Supabase:', err);
      }
    },
    [user],
  );

  // Trigger initial fetch when user changes
  useEffect(() => {
    if (user) {
      isInitialLoad.current = true;
      fetchCloudProgress();
    }
  }, [user, fetchCloudProgress]);

  // Push local updates
  useEffect(() => {
    if (!user || !isSupabaseConfigured() || isInitialLoad.current) return;

    const progressStr = JSON.stringify(progress);
    if (progressStr === lastSyncedRef.current) return;
    lastSyncedRef.current = progressStr;

    // Filter only lesson progress (exclude crono- items which are handled by schedule sync)
    const lessonEntries = Object.entries(progress).filter(([key]) => !key.startsWith('crono-'));
    if (lessonEntries.length === 0) return;

    const upsertBatch = lessonEntries.map(([lessonId, val]) => ({
      user_id: user.id,
      user_email: user.email,
      lesson_id: lessonId,
      completed: val.completed,
      updated_at: new Date().toISOString(),
    }));

    void (async () => {
      try {
        await supabase
          .from('user_lesson_progress')
          .upsert(upsertBatch, { onConflict: 'user_id,lesson_id' });
      } catch (err) {
        console.warn('Batch lesson sync error:', err);
      }
    })();
  }, [progress, user]);

  return {
    isSyncingLessons: isSyncing,
    fetchCloudProgress,
    pushProgressToCloud,
  };
}
