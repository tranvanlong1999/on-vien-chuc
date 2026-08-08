'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Flashcard } from '@/types';

const SWIPE_THRESHOLD = 150;
const SWIPE_UP_THRESHOLD = -100;

interface SwipeCardProps {
  card: Flashcard;
  docLabel: string;
  onRate: (quality: number) => void;
}

export function SwipeCard({ card, docLabel, onRate }: SwipeCardProps) {
  const [flipped, setFlipped] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-20, 20]);
  const rightOpacity = useTransform(x, [30, SWIPE_THRESHOLD], [0, 1]);
  const leftOpacity = useTransform(x, [-SWIPE_THRESHOLD, -30], [1, 0]);
  const upOpacity = useTransform(y, [-SWIPE_UP_THRESHOLD, SWIPE_UP_THRESHOLD], [1, 0]);

  useEffect(() => {
    setFlipped(false);
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 30 });
    animate(y, 0, { type: 'spring', stiffness: 300, damping: 30 });
  }, [card.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') { setFlipped((f) => !f); return; }
      if (e.key === 'ArrowRight') { flyOut(800, 0, () => onRate(5)); return; }
      if (e.key === 'ArrowLeft') { flyOut(-800, 0, () => onRate(1)); return; }
      if (e.key === 'ArrowUp') { flyOut(0, -600, () => onRate(3)); return; }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onRate]);

  const flyOut = (toX: number, toY: number, cb: () => void) => {
    animate(x, toX, { duration: 0.3 });
    animate(y, toY, { duration: 0.3 });
    setTimeout(cb, 280);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number } }) => {
    const ox = info.offset.x;
    const oy = info.offset.y;
    if (ox > SWIPE_THRESHOLD) {
      flyOut(800, 0, () => onRate(5));
    } else if (ox < -SWIPE_THRESHOLD) {
      flyOut(-800, 0, () => onRate(1));
    } else if (oy < SWIPE_UP_THRESHOLD) {
      flyOut(0, -600, () => onRate(3));
    } else {
      animate(x, 0, { type: 'spring', stiffness: 300, damping: 30 });
      animate(y, 0, { type: 'spring', stiffness: 300, damping: 30 });
    }
  };

  return (
    <div className="relative h-72 select-none touch-none">
      {/* Right overlay: green */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-green-500/20 border-2 border-green-400 flex items-center justify-center z-10 pointer-events-none"
        style={{ opacity: rightOpacity }}
      >
        <span className="text-green-700 font-extrabold text-2xl rotate-[-12deg]">✓ ĐÃ THUỘC</span>
      </motion.div>

      {/* Left overlay: red */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-red-500/20 border-2 border-red-400 flex items-center justify-center z-10 pointer-events-none"
        style={{ opacity: leftOpacity }}
      >
        <span className="text-red-700 font-extrabold text-2xl rotate-[12deg]">✗ CHƯA THUỘC</span>
      </motion.div>

      {/* Up overlay: yellow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center z-10 pointer-events-none"
        style={{ opacity: upOpacity }}
      >
        <span className="text-yellow-700 font-extrabold text-xl">↑ NHỚ TẠM</span>
      </motion.div>

      <motion.div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ x, y, rotate }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
          <div
            className="absolute inset-0 transition-transform duration-500"
            style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 card p-6 flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <p className="text-xs font-semibold text-indigo-500 mb-3 uppercase tracking-wide">{docLabel}</p>
              <p className="text-slate-800 font-semibold text-lg leading-snug">{card.question}</p>
              {card.hint && <p className="text-xs text-slate-400 mt-3">Gợi ý: {card.hint}</p>}
              <div className="absolute bottom-4 flex items-center gap-1 text-slate-400 text-xs">
                <Eye className="w-3.5 h-3.5" /><span>Bấm / Enter để lật thẻ</span>
              </div>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 card p-6 flex flex-col items-center justify-center text-center bg-indigo-50 border-indigo-200"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <p className="text-xs font-bold text-indigo-600 mb-3 uppercase">Đáp án</p>
              <p className="text-slate-700 leading-relaxed">{card.answer}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
