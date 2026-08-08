import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDaysUntilExam(): number {
  const exam = new Date('2026-08-15T00:00:00+07:00');
  const now = new Date();
  const diff = exam.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function getExamCountdown(): { days: number; hours: number; minutes: number; seconds: number } {
  const exam = new Date('2026-08-15T08:00:00+07:00');
  const now = new Date();
  const diff = Math.max(0, exam.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function getXPLevel(xp: number): { level: number; title: string; nextXP: number; currentXP: number } {
  const levels = [
    { xp: 0, title: 'Học viên mới' },
    { xp: 100, title: 'Học viên chăm chỉ' },
    { xp: 300, title: 'Học viên tích cực' },
    { xp: 600, title: 'Chiến binh học tập' },
    { xp: 1000, title: 'Chuyên gia pháp luật' },
    { xp: 1500, title: 'Bậc thầy viên chức' },
    { xp: Infinity, title: 'Huyền thoại' },
  ];

  let level = 0;
  for (let i = 0; i < levels.length - 1; i++) {
    if (xp >= levels[i].xp) level = i;
  }

  return {
    level: level + 1,
    title: levels[level].title,
    nextXP: levels[Math.min(level + 1, levels.length - 2)].xp,
    currentXP: levels[level].xp,
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit' });
}

export function isToday(dateStr: string): boolean {
  const date = new Date(dateStr);
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

export function isYesterday(dateStr: string): boolean {
  const date = new Date(dateStr);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.toDateString() === yesterday.toDateString();
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// SM-2 Spaced Repetition Algorithm
export function sm2(
  quality: number, // 0-5 rating
  repetitions: number,
  easeFactor: number,
  interval: number
): { repetitions: number; easeFactor: number; interval: number; nextReview: string } {
  let newReps = repetitions;
  let newEF = easeFactor;
  let newInterval = interval;

  if (quality >= 3) {
    if (repetitions === 0) newInterval = 1;
    else if (repetitions === 1) newInterval = 6;
    else newInterval = Math.round(interval * easeFactor);
    newReps = repetitions + 1;
  } else {
    newReps = 0;
    newInterval = 1;
  }

  newEF = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + newInterval);

  return {
    repetitions: newReps,
    easeFactor: newEF,
    interval: newInterval,
    nextReview: nextReview.toISOString(),
  };
}
