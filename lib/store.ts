'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, Flashcard } from '@/types';
import { sm2, isToday, isYesterday } from './utils';

const XP_REWARDS = {
  readArticle: 10,
  completeQuiz: 50,
  correctAnswer: 5,
  masterFlashcard: 15,
  completeMockExam: 100,
  dailyLogin: 20,
};

interface AppState extends UserProgress {
  // Actions
  toggleArticleRead: (docId: string, articleId: string) => void;
  saveQuizScore: (docId: string, score: number) => void;
  addMistake: (questionId: string) => void;
  removeMistake: (questionId: string) => void;
  masterFlashcard: (cardId: string) => void;
  unmasterFlashcard: (cardId: string) => void;
  updateFlashcardSRS: (cardId: string, quality: number, card: Flashcard) => void;
  addXP: (amount: number, reason: keyof typeof XP_REWARDS) => void;
  checkAndUpdateStreak: () => void;
  setPlannerChecked: (checked: boolean[]) => void;
  resetProgress: () => void;
  syncToCloud: () => Promise<void>;
  loadFromCloud: () => Promise<void>;
}

const initialProgress: UserProgress = {
  readingProgress: {},
  masteredCards: [],
  flashcardSRS: {},
  quizScores: {},
  mistakes: [],
  xp: 0,
  streak: 0,
  lastStudyDate: '',
  dailyXP: 0,
  lastXPDate: '',
  plannerChecked: new Array(7).fill(false),
};

async function syncProgressToSupabase(state: UserProgress) {
  if (typeof window === 'undefined') return;
  try {
    const { supabase, getDeviceId } = await import('./supabase');
    const deviceId = getDeviceId();
    if (!deviceId) return;
    await supabase.from('user_progress').upsert({
      device_id: deviceId,
      xp: state.xp,
      streak: state.streak,
      last_study_date: state.lastStudyDate,
      daily_xp: state.dailyXP,
      last_xp_date: state.lastXPDate,
      mastered_cards: state.masteredCards,
      mistakes: state.mistakes,
      quiz_scores: state.quizScores,
      reading_progress: state.readingProgress,
      flashcard_srs: state.flashcardSRS,
      planner_checked: state.plannerChecked,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'device_id' });
  } catch {
    // Silently fail - localStorage is primary
  }
}

let syncTimeout: ReturnType<typeof setTimeout> | null = null;
function debouncedSync(state: UserProgress) {
  if (syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => syncProgressToSupabase(state), 3000);
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialProgress,

      toggleArticleRead: (docId, articleId) => {
        set((state) => {
          const list = state.readingProgress[docId] || [];
          const isNew = !list.includes(articleId);
          const newList = isNew ? [...list, articleId] : list.filter((id) => id !== articleId);
          if (isNew) get().addXP(XP_REWARDS.readArticle, 'readArticle');
          return { readingProgress: { ...state.readingProgress, [docId]: newList } };
        });
        debouncedSync(get());
      },

      saveQuizScore: (docId, score) => {
        set((state) => {
          const oldScore = state.quizScores[docId] || 0;
          if (score > oldScore) {
            get().addXP(XP_REWARDS.completeQuiz, 'completeQuiz');
            return { quizScores: { ...state.quizScores, [docId]: score } };
          }
          return {};
        });
        debouncedSync(get());
      },

      addMistake: (questionId) => {
        set((state) => {
          if (state.mistakes.includes(questionId)) return {};
          return { mistakes: [...state.mistakes, questionId] };
        });
      },

      removeMistake: (questionId) => {
        set((state) => ({ mistakes: state.mistakes.filter((id) => id !== questionId) }));
      },

      masterFlashcard: (cardId) => {
        set((state) => {
          if (state.masteredCards.includes(cardId)) return {};
          get().addXP(XP_REWARDS.masterFlashcard, 'masterFlashcard');
          return { masteredCards: [...state.masteredCards, cardId] };
        });
        debouncedSync(get());
      },

      unmasterFlashcard: (cardId) => {
        set((state) => ({ masteredCards: state.masteredCards.filter((id) => id !== cardId) }));
      },

      updateFlashcardSRS: (cardId, quality, card) => {
        set((state) => {
          const current = state.flashcardSRS[cardId] || {
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
          };
          const result = sm2(
            quality,
            current.repetitions || 0,
            current.easeFactor || 2.5,
            current.interval || 0
          );
          const updated: Flashcard = { ...card, ...result };
          return { flashcardSRS: { ...state.flashcardSRS, [cardId]: updated } };
        });
      },

      addXP: (amount, _reason) => {
        const today = new Date().toISOString();
        set((state) => {
          const isNewDay = !isToday(state.lastXPDate);
          return {
            xp: state.xp + amount,
            dailyXP: isNewDay ? amount : state.dailyXP + amount,
            lastXPDate: today,
          };
        });
      },

      checkAndUpdateStreak: () => {
        const today = new Date().toISOString();
        set((state) => {
          if (isToday(state.lastStudyDate)) return {};
          const newStreak = isYesterday(state.lastStudyDate) ? state.streak + 1 : 1;
          if (newStreak === 1 && !isToday(state.lastStudyDate)) {
            get().addXP(XP_REWARDS.dailyLogin, 'dailyLogin');
          }
          return { streak: newStreak, lastStudyDate: today };
        });
        debouncedSync(get());
      },

      setPlannerChecked: (checked) => {
        set({ plannerChecked: checked });
        debouncedSync(get());
      },

      resetProgress: () => {
        set(initialProgress);
      },

      syncToCloud: async () => {
        await syncProgressToSupabase(get());
      },

      loadFromCloud: async () => {
        if (typeof window === 'undefined') return;
        try {
          const { supabase, getDeviceId } = await import('./supabase');
          const deviceId = getDeviceId();
          if (!deviceId) return;
          const { data, error } = await supabase
            .from('user_progress')
            .select('*')
            .eq('device_id', deviceId)
            .single();
          if (error || !data) return;
          // Only load cloud data if it has more XP (cloud is ahead)
          const currentXP = get().xp;
          if (data.xp > currentXP) {
            set({
              xp: data.xp,
              streak: data.streak,
              lastStudyDate: data.last_study_date,
              dailyXP: data.daily_xp,
              lastXPDate: data.last_xp_date,
              masteredCards: data.mastered_cards || [],
              mistakes: data.mistakes || [],
              quizScores: data.quiz_scores || {},
              readingProgress: data.reading_progress || {},
              flashcardSRS: data.flashcard_srs || {},
              plannerChecked: data.planner_checked || new Array(7).fill(false),
            });
          }
        } catch {
          // Silently fail
        }
      },
    }),
    {
      name: 'hvc2026-progress',
    }
  )
);
