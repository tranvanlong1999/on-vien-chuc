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
      },

      setPlannerChecked: (checked) => {
        set({ plannerChecked: checked });
      },

      resetProgress: () => {
        set(initialProgress);
      },
    }),
    {
      name: 'hvc2026-progress',
    }
  )
);
