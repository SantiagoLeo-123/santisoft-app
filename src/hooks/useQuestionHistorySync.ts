import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { AuthUser, UserQuestionHistoryRecord } from '@/types';

export function useQuestionHistorySync(user: AuthUser | null) {
  const [localHistory, setLocalHistory] = useLocalStorage<UserQuestionHistoryRecord[]>(
    user ? `santisoft:question_history:${user.id}` : 'santisoft:question_history:_anon',
    [],
  );
  const [isSyncing, setIsSyncing] = useState(false);
  const isInitialLoad = useRef(true);

  // Fetch question history from Supabase
  const fetchCloudHistory = useCallback(async () => {
    if (!user || !isSupabaseConfigured()) return;
    setIsSyncing(true);

    try {
      const { data, error } = await supabase
        .from('user_question_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Could not fetch question history from Supabase:', error.message);
        return;
      }

      if (data) {
        // Merge cloud with local
        setLocalHistory((prev) => {
          const cloudRecords = data as UserQuestionHistoryRecord[];
          const cloudIds = new Set(cloudRecords.map((d) => d.id));
          const unsyncedLocal = prev.filter((p) => p.id && !cloudIds.has(p.id));
          return [...unsyncedLocal, ...cloudRecords];
        });
      }
    } catch (err) {
      console.warn('Error fetching question history:', err);
    } finally {
      setIsSyncing(false);
      isInitialLoad.current = false;
    }
  }, [user, setLocalHistory]);

  // Record a new question answer
  const recordQuestion = useCallback(
    async (record: {
      question_id: string;
      area?: string;
      selected_option?: string;
      is_correct: boolean;
      notes?: string;
    }) => {
      const newRecord: UserQuestionHistoryRecord = {
        id: `q-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        user_id: user?.id || 'anon',
        user_email: user?.email,
        question_id: record.question_id,
        area: record.area,
        selected_option: record.selected_option,
        is_correct: record.is_correct,
        notes: record.notes,
        created_at: new Date().toISOString(),
      };

      setLocalHistory((prev) => [newRecord, ...prev]);

      if (user && isSupabaseConfigured()) {
        try {
          await supabase.from('user_question_history').insert({
            user_id: user.id,
            user_email: user.email,
            question_id: record.question_id,
            area: record.area,
            selected_option: record.selected_option,
            is_correct: record.is_correct,
            notes: record.notes,
            created_at: newRecord.created_at,
          });
        } catch (err) {
          console.warn('Error saving question history to Supabase:', err);
        }
      }
    },
    [user, setLocalHistory],
  );

  useEffect(() => {
    if (user) {
      isInitialLoad.current = true;
      fetchCloudHistory();
    }
  }, [user, fetchCloudHistory]);

  const stats = useMemo(() => {
    const total = localHistory.length;
    const correct = localHistory.filter((q) => q.is_correct).length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { total, correct, accuracy };
  }, [localHistory]);

  return {
    questionHistory: localHistory,
    recordQuestion,
    fetchCloudHistory,
    isSyncingQuestions: isSyncing,
    stats,
  };
}
