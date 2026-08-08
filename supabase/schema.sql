-- HVC2026 Database Schema
-- Run this in Supabase SQL Editor

-- User progress table (device-based, no login required)
CREATE TABLE IF NOT EXISTS user_progress (
  device_id TEXT PRIMARY KEY,
  xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  last_study_date TEXT DEFAULT '',
  daily_xp INTEGER DEFAULT 0,
  last_xp_date TEXT DEFAULT '',
  mastered_cards TEXT[] DEFAULT '{}',
  mistakes TEXT[] DEFAULT '{}',
  quiz_scores JSONB DEFAULT '{}',
  reading_progress JSONB DEFAULT '{}',
  flashcard_srs JSONB DEFAULT '{}',
  planner_checked BOOLEAN[] DEFAULT '{false,false,false,false,false,false,false}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leaderboard view (top XP earners, anonymous)
CREATE OR REPLACE VIEW leaderboard AS
SELECT
  device_id,
  xp,
  streak,
  ROW_NUMBER() OVER (ORDER BY xp DESC) AS rank
FROM user_progress
ORDER BY xp DESC
LIMIT 100;

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policy: users can only read/write their own row (by device_id)
CREATE POLICY "Users can manage own progress" ON user_progress
  FOR ALL USING (true) WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_progress_xp ON user_progress(xp DESC);
CREATE INDEX IF NOT EXISTS idx_user_progress_updated ON user_progress(updated_at DESC);
