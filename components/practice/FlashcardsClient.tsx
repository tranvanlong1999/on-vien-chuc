'use client';

import { useState, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Flashcard, LawDocument } from '@/types';
import { shuffle } from '@/lib/utils';
import { ChevronLeft, ChevronRight, RotateCcw, Check, X, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props { cards: Flashcard[]; documents: LawDocument[] }

export function FlashcardsClient({ cards, documents }: Props) {
  const { masteredCards, mistakes, masterFlashcard, unmasterFlashcard, updateFlashcardSRS, addMistake, removeMistake } = useAppStore();
  const [docFilter, setDocFilter] = useState('all');
  const [mode, setMode] = useState<'review' | 'mistakes'>('review');
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [deck, setDeck] = useState(() => shuffle(cards));

  const filteredDeck = useMemo(() => {
    const base = mode === 'mistakes' ? deck.filter((c) => mistakes.includes(c.id)) : deck;
    if (docFilter === 'all') return base;
    return base.filter((c) => c.docId === docFilter);
  }, [deck, docFilter, mode, mistakes]);

  // Reset index when filter/mode changes to avoid out-of-bounds
  const safeIndex = filteredDeck.length > 0 ? Math.min(index, filteredDeck.length - 1) : 0;
  const card = filteredDeck[safeIndex];
  const isMastered = card ? masteredCards.includes(card.id) : false;

  const next = () => { setFlipped(false); setIndex((i) => (i + 1) % Math.max(1, filteredDeck.length)); };
  const prev = () => { setFlipped(false); setIndex((i) => (i - 1 + filteredDeck.length) % Math.max(1, filteredDeck.length)); };

  const handleRate = (quality: number) => {
    if (!card) return;
    updateFlashcardSRS(card.id, quality, card);
    if (quality >= 4) {
      masterFlashcard(card.id);
      if (mode === 'mistakes') removeMistake(card.id);
    } else {
      unmasterFlashcard(card.id);
      if (quality <= 2) addMistake(card.id); // "Chưa nhớ" → thêm vào câu sai
    }
    next();
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Thẻ nhớ SRS</h1>
        <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
          {(['review', 'mistakes'] as const).map((m) => (
            <button key={m} onClick={() => { setMode(m); setIndex(0); setFlipped(false); }}
              className={cn('px-3 py-1 rounded-md text-sm font-medium transition-colors', mode === m ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500')}>
              {m === 'review' ? `Ôn tập (${cards.length - masteredCards.length})` : `Câu sai (${mistakes.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => setDocFilter('all')} className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docFilter === 'all' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
          Tất cả
        </button>
        {documents.map((d) => (
          <button key={d.id} onClick={() => { setDocFilter(d.id); setIndex(0); setFlipped(false); }} className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docFilter === d.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
            {d.icon} {d.shortTitle.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      {filteredDeck.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-4xl mb-3">{mode === 'mistakes' ? '🎉' : '📚'}</p>
          <p className="font-semibold text-slate-700">{mode === 'mistakes' ? 'Không có câu sai nào!' : 'Không có thẻ nào trong bộ lọc này.'}</p>
        </div>
      ) : (
        <>
          {/* Progress */}
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{safeIndex + 1} / {filteredDeck.length}</span>
            <span className="text-green-600 font-medium">{masteredCards.length} thành thạo</span>
          </div>

          {/* Flashcard */}
          <div className="relative h-64 cursor-pointer perspective-1000" onClick={() => setFlipped((f) => !f)}>
            <div className={cn('absolute inset-0 transition-all duration-500 transform-style-3d', flipped ? 'rotate-y-180' : '')}>
              {/* Front */}
              <div className="absolute inset-0 card p-6 flex flex-col items-center justify-center text-center backface-hidden">
                <p className="text-xs font-semibold text-indigo-500 mb-3 uppercase tracking-wide">
                  {documents.find((d) => d.id === card?.docId)?.shortTitle}
                  {isMastered && <span className="ml-2 text-green-500">✓ Thành thạo</span>}
                </p>
                <p className="text-slate-800 font-semibold text-lg leading-snug">{card?.question}</p>
                {card?.hint && <p className="text-xs text-slate-400 mt-3">Gợi ý: {card.hint}</p>}
                <div className="absolute bottom-4 flex items-center gap-1 text-slate-400 text-xs">
                  <Eye className="w-3.5 h-3.5" /><span>Bấm để xem đáp án</span>
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 card p-6 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180 bg-indigo-50 border-indigo-200">
                <p className="text-xs font-bold text-indigo-600 mb-3 uppercase">Đáp án</p>
                <p className="text-slate-700 leading-relaxed">{card?.answer}</p>
              </div>
            </div>
          </div>

          {/* Rating (show after flip) */}
          {flipped && (
            <div className="flex gap-2 animate-slide-up">
              <button onClick={() => handleRate(1)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 font-medium text-sm hover:bg-red-100 transition-colors">
                <X className="w-4 h-4" />Chưa nhớ
              </button>
              <button onClick={() => handleRate(3)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-yellow-50 text-yellow-700 border border-yellow-200 font-medium text-sm hover:bg-yellow-100 transition-colors">
                <RotateCcw className="w-4 h-4" />Nhớ tạm
              </button>
              <button onClick={() => handleRate(5)} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-green-50 text-green-700 border border-green-200 font-medium text-sm hover:bg-green-100 transition-colors">
                <Check className="w-4 h-4" />Nhớ rõ
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button onClick={prev} className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />Trước
            </button>
            <button onClick={() => { setDeck(shuffle(cards)); setIndex(0); setFlipped(false); }} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
              <RotateCcw className="w-3.5 h-3.5" />Xáo bài
            </button>
            <button onClick={next} className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-colors">
              Sau<ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
