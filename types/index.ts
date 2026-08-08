export interface LawArticle {
  id: string;
  number: string;
  title: string;
  content: string;
  summary: string[];
  examFocus: string;
  isNew2026?: boolean;
}

export interface LawChapter {
  number: string;
  title: string;
  articles: LawArticle[];
}

export interface LawDocument {
  id: string;
  title: string;
  shortTitle: string;
  code: string;
  summary: string;
  icon: string;
  color: string;
  chapters: LawChapter[];
}

export interface MindmapNode {
  id: string;
  label: string;
  details?: string;
  isNew?: boolean;
  children?: MindmapNode[];
}

export interface Mindmap {
  id: string;
  title: string;
  root: MindmapNode;
}

export interface Flashcard {
  id: string;
  docId: string;
  question: string;
  answer: string;
  hint?: string;
  // SRS fields
  easeFactor?: number;
  interval?: number;
  repetitions?: number;
  nextReview?: string; // ISO date
}

export interface QuizQuestion {
  id: string;
  docId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface EssayPrompt {
  id: string;
  topic: string;
  scenario: string;
  suggestedOutline: string[];
  modelAnswer: string;
  rubric: { criterion: string; points: number }[];
}

export interface UserProgress {
  // Reading
  readingProgress: Record<string, string[]>; // docId -> articleIds[]
  // Flashcards
  masteredCards: string[];
  flashcardSRS: Record<string, Flashcard>; // cardId -> SRS state
  // Quiz
  quizScores: Record<string, number>;
  // Mistakes
  mistakes: string[];
  // Gamification
  xp: number;
  streak: number;
  lastStudyDate: string; // ISO date
  dailyXP: number;
  lastXPDate: string;
  // Planner
  plannerChecked: boolean[];
}
