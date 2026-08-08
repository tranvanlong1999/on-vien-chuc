import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function getDeviceId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('hvc2026-device-id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('hvc2026-device-id', id);
  }
  return id;
}

export type SupabaseProgress = {
  device_id: string;
  xp: number;
  streak: number;
  last_study_date: string;
  daily_xp: number;
  last_xp_date: string;
  mastered_cards: string[];
  mistakes: string[];
  quiz_scores: Record<string, number>;
  reading_progress: Record<string, string[]>;
  flashcard_srs: Record<string, unknown>;
  planner_checked: boolean[];
  updated_at?: string;
};
