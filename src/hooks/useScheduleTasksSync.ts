import { useEffect, useRef, useCallback, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { AuthUser, ProgressMap } from '@/types';

export function useScheduleTasksSync(
  user: AuthUser | null,
  progress: ProgressMap,
  setProgress: (value: ProgressMap | ((prev: ProgressMap) => ProgressMap)) => void,
) {
  const [isSyncing, setIsSyncing] = useState(false);
  const isInitialLoad = useRef(true);
  const lastSyncedRef = useRef<string>('');

  // Initial fetch from cloud
  const fetchCloudTasks = useCallback(async () => {
    if (!user || !isSupabaseConfigured()) return;
    setIsSyncing(true);

    try {
      const { data, error } = await supabase
        .from('user_schedule_tasks')
        .select('task_id, completed')
        .eq('user_id', user.id);

      if (error) {
        console.warn('Could not fetch schedule tasks from Supabase:', error.message);
        return;
      }

      if (data && data.length > 0) {
        setProgress((prev) => {
          const updated = { ...prev };
          for (const item of data) {
            if (item.completed) {
              updated[item.task_id] = { completed: true };
            }
          }
          return updated;
        });
      }
    } catch (err) {
      console.warn('Error fetching schedule tasks:', err);
    } finally {
      setIsSyncing(false);
      isInitialLoad.current = false;
    }
  }, [user, setProgress]);

  // Sync single task
  const pushTaskToCloud = useCallback(
    async (taskId: string, completed: boolean) => {
      if (!user || !isSupabaseConfigured()) return;

      try {
        await supabase.from('user_schedule_tasks').upsert(
          {
            user_id: user.id,
            user_email: user.email,
            task_id: taskId,
            completed,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,task_id' },
        );
      } catch (err) {
        console.warn('Error syncing schedule task to Supabase:', err);
      }
    },
    [user],
  );

  // Trigger initial fetch when user changes
  useEffect(() => {
    if (user) {
      isInitialLoad.current = true;
      fetchCloudTasks();
    }
  }, [user, fetchCloudTasks]);

  // Sync crono entries on change
  useEffect(() => {
    if (!user || !isSupabaseConfigured() || isInitialLoad.current) return;

    const cronoEntries = Object.entries(progress).filter(([key]) => key.startsWith('crono-'));
    const cronoStr = JSON.stringify(cronoEntries);
    if (cronoStr === lastSyncedRef.current) return;
    lastSyncedRef.current = cronoStr;

    if (cronoEntries.length === 0) return;

    const upsertBatch = cronoEntries.map(([taskId, val]) => ({
      user_id: user.id,
      user_email: user.email,
      task_id: taskId,
      completed: val.completed,
      updated_at: new Date().toISOString(),
    }));

    void (async () => {
      try {
        await supabase
          .from('user_schedule_tasks')
          .upsert(upsertBatch, { onConflict: 'user_id,task_id' });
      } catch (err) {
        console.warn('Batch schedule task sync error:', err);
      }
    })();
  }, [progress, user]);

  return {
    isSyncingSchedule: isSyncing,
    fetchCloudTasks,
    pushTaskToCloud,
  };
}
