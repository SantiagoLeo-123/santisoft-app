import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { AuthUser, UserMentorMessageRecord } from '@/types';

export function useMentorMessagesSync(user: AuthUser | null) {
  const [localMessages, setLocalMessages] = useLocalStorage<UserMentorMessageRecord[]>(
    user ? `santisoft:mentor_messages:${user.id}` : 'santisoft:mentor_messages:_anon',
    [],
  );
  const [isSyncing, setIsSyncing] = useState(false);
  const isInitialLoad = useRef(true);

  // Fetch mentor messages from Supabase
  const fetchCloudMessages = useCallback(async () => {
    if (!user || !isSupabaseConfigured()) return;
    setIsSyncing(true);

    try {
      const { data, error } = await supabase
        .from('user_mentor_messages')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true });

      if (error) {
        console.warn('Could not fetch mentor messages from Supabase:', error.message);
        return;
      }

      if (data) {
        setLocalMessages(data as UserMentorMessageRecord[]);
      }
    } catch (err) {
      console.warn('Error fetching mentor messages:', err);
    } finally {
      setIsSyncing(false);
      isInitialLoad.current = false;
    }
  }, [user, setLocalMessages]);

  // Send a message
  const sendMessage = useCallback(
    async (messageText: string, sender: 'user' | 'mentor' | 'system' = 'user', topic?: string) => {
      const newMsg: UserMentorMessageRecord = {
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        user_id: user?.id || 'anon',
        user_email: user?.email,
        sender,
        message: messageText,
        topic,
        created_at: new Date().toISOString(),
      };

      setLocalMessages((prev) => [...prev, newMsg]);

      if (user && isSupabaseConfigured()) {
        try {
          await supabase.from('user_mentor_messages').insert({
            user_id: user.id,
            user_email: user.email,
            sender,
            message: messageText,
            topic,
            created_at: newMsg.created_at,
          });
        } catch (err) {
          console.warn('Error saving mentor message to Supabase:', err);
        }
      }
    },
    [user, setLocalMessages],
  );

  const clearMessages = useCallback(() => {
    setLocalMessages([]);
  }, [setLocalMessages]);

  useEffect(() => {
    if (user) {
      isInitialLoad.current = true;
      fetchCloudMessages();
    }
  }, [user, fetchCloudMessages]);

  return {
    messages: localMessages,
    sendMessage,
    clearMessages,
    fetchCloudMessages,
    isSyncingMentor: isSyncing,
  };
}
