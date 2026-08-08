'use client';

import { useState, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Flashcard, LawDocument } from '@/types';
import { shuffle } from '@/lib/utils';
import { RotateCcw, BookX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SwipeCard } from './flashcard-swipe-card';

interface Props { cards: Flashcard[]; documents: LawDocument[] }

export function FlashcardsClient({ cards, documents }: Props) {
  const { masteredCards, mistakes, masterFlashcard, unmasterFlashcard, updateFlashcardSRS, addMistake, removeMistake } = useAppStore();
  const [docFilter, setDocFilter] = useState('all');
  const [mode, setMode] = useState<'review' | 'mistakes'>('review');
  const [index, setIndex] = useState(0);
  const [deck, setDeck] = useState(() => shuffle(cards));

  const filteredDeck = useMemo(() => {
    const base = mode === 'mistakes' ? deck.filter((c) => mistakes.includes(c.id)) : deck;
    if (docFilter === 'all') return base;
    return base.filter((c) => c.docId === docFilter);
  }, [deck, docFilter, mode, mistakes]);

  const safeIndex = filteredDeck.length > 0 ? Math.min(index, filteredDeck.length - 1) : 0;
  const card = filteredDeck[safeIndex];
  const isMastered = card ? masteredCards.includes(card.id) : false;

  const next = () => setIndex((i) => (i + 1) % Math.max(1, filteredDeck.length));

  const handleRate = (quality: number) => {
    if (!card) return;
    updateFlashcardSRS(card.id, quality, card);
    if (quality >= 4) {
      masterFlashcard(card.id);
      if (mode === 'mistakes') removeMistake(card.id);
    } else {
      unmasterFlashcard(card.id);
      if (quality <= 2) addMistake(card.id);
    }
    next();
  };

  const docLabel = documents.find((d) => d.id === card?.docId)?.shortTitle ?? '';

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Thẻ nhớ SRS</h1>
        <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
          <button onClick={() => { setMode('review'); setIndex(0); }}
            className={cn('px-3 py-1 rounded-md text-sm font-medium transition-colors', mode === 'review' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500')}>
            Ôn tập ({cards.length - masteredCards.length})
          </button>
          <button onClick={() => { setMode('mistakes'); setIndex(0); }}
            className={cn('px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center gap-1', mode === 'mistakes' ? 'bg-white text-red-700 shadow-sm' : 'text-slate-500')}>
            <BookX className="w-3.5 h-3.5" />Câu sai ({mistakes.length})
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => { setDocFilter('all'); setIndex(0); }}
          className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docFilter === 'all' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
          Tất cả
        </button>
        {documents.map((d) => (
          <button key={d.id} onClick={() => { setDocFilter(d.id); setIndex(0); }}
            className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docFilter === d.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
            {d.icon} {d.shortTitle.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      {filteredDeck.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-4xl mb-3">{mode === 'mistakes' ? '🎉' : '📚'}</p>
          <p className="font-semibold text-slate-700">
            {mode === 'mistakes' ? 'Không có câu sai nào!' : 'Không có thẻ nào trong bộ lọc này.'}
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{safeIndex + 1} / {filteredDeck.length}</span>
            <span className={cn('font-medium', isMastered ? 'text-green-600' : 'text-slate-400')}>
              {isMastered ? '✓ Thành thạo' : `${masteredCards.length} thành thạo`}
            </span>
          </div>

          {card && (
            <SwipeCard key={card.id} card={card} docLabel={docLabel} onRate={handleRate} />
          )}

          {/* Swipe hint */}
          <div className="flex justify-center gap-6 text-xs text-slate-400 pt-1">
            <span>← Chưa nhớ</span>
            <span>↑ Nhớ tạm</span>
            <span>Nhớ rõ →</span>
          </div>

          {/* Rating buttons (touch fallback / desktop) */}
          <div className="flex gap-2">
            <button onClick={() => handleRate(1)}
              className="flex-1 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 font-medium text-sm hover:bg-red-100 transition-colors">
              ✗ Chưa nhớ
            </button>
            <button onClick={() => handleRate(3)}
              className="flex-1 py-2.5 rounded-xl bg-yellow-50 text-yellow-700 border border-yellow-200 font-medium text-sm hover:bg-yellow-100 transition-colors">
              ↑ Nhớ tạm
            </button>
            <button onClick={() => handleRate(5)}
              className="flex-1 py-2.5 rounded-xl bg-green-50 text-green-700 border border-green-200 font-medium text-sm hover:bg-green-100 transition-colors">
              ✓ Nhớ rõ
            </button>
          </div>

          <button onClick={() => { setDeck(shuffle(cards)); setIndex(0); }}
            className="w-full text-xs text-slate-400 hover:text-slate-600 flex items-center justify-center gap-1 py-1">
            <RotateCcw className="w-3.5 h-3.5" />Xáo bài
          </button>
        </>
      )}
    </div>
  );
}
