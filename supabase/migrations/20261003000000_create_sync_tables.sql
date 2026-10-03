/*
# Create Cloud Synchronization Tables for SantiSOFT
- user_lesson_progress
- user_question_history
- user_schedule_tasks
- user_mentor_messages
*/

-- 1. User Lesson Progress
CREATE TABLE IF NOT EXISTS user_lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  user_email text,
  lesson_id text NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  progress_percent integer DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT user_lesson_unique UNIQUE (user_id, lesson_id)
);

-- 2. User Question History
CREATE TABLE IF NOT EXISTS user_question_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  user_email text,
  question_id text NOT NULL,
  area text,
  selected_option text,
  is_correct boolean NOT NULL DEFAULT false,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 3. User Schedule Tasks (Cronograma)
CREATE TABLE IF NOT EXISTS user_schedule_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  user_email text,
  task_id text NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT user_task_unique UNIQUE (user_id, task_id)
);

-- 4. User Mentor Messages
CREATE TABLE IF NOT EXISTS user_mentor_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  user_email text,
  sender text NOT NULL, -- 'user' | 'mentor' | 'system'
  message text NOT NULL,
  topic text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_ulp_user ON user_lesson_progress (user_id);
CREATE INDEX IF NOT EXISTS idx_uqh_user ON user_question_history (user_id);
CREATE INDEX IF NOT EXISTS idx_ust_user ON user_schedule_tasks (user_id);
CREATE INDEX IF NOT EXISTS idx_umm_user ON user_mentor_messages (user_id);

-- Enable RLS
ALTER TABLE user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_question_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_schedule_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_mentor_messages ENABLE ROW LEVEL SECURITY;

-- Allow anon and authenticated access for app clients
DROP POLICY IF EXISTS "allow_all_lesson_progress" ON user_lesson_progress;
CREATE POLICY "allow_all_lesson_progress" ON user_lesson_progress FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "allow_all_question_history" ON user_question_history;
CREATE POLICY "allow_all_question_history" ON user_question_history FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "allow_all_schedule_tasks" ON user_schedule_tasks;
CREATE POLICY "allow_all_schedule_tasks" ON user_schedule_tasks FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "allow_all_mentor_messages" ON user_mentor_messages;
CREATE POLICY "allow_all_mentor_messages" ON user_mentor_messages FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
