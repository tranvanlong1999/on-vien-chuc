'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { QuizQuestion, LawDocument } from '@/types';
import { shuffle } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Zap, Trophy, RotateCcw, Timer } from 'lucide-react';

interface Props { questions: QuizQuestion[]; documents: LawDocument[] }

const SECONDS_PER_QUESTION = 10;
const QUESTIONS_PER_ROUND = 10;

export function SpeedQuizClient({ questions, documents }: Props) {
  const { gameHighScores, saveGameHighScore, addXP } = useAppStore((s) => ({
    gameHighScores: s.gameHighScores,
    saveGameHighScore: s.saveGameHighScore,
    addXP: s.addXP,
  }));

  const [docId, setDocId] = useState('all');
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [key, setKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const deck = useMemo(() => {
    const pool = docId === 'all' ? questions : questions.filter((q) => q.docId === docId);
    return shuffle(pool).slice(0, QUESTIONS_PER_ROUND);
  }, [questions, docId, key]);

  const q = deck[idx];
  const highScore = gameHighScores['speedQuiz'] ?? 0;

  const finishGame = (finalScore: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    saveGameHighScore('speedQuiz', finalScore);
    if (finalScore === QUESTIONS_PER_ROUND) addXP(30, 'speedQuizBonus');
    setDone(true);
  };

  const advanceOrFinish = (currentScore: number) => {
    if (idx + 1 >= deck.length) {
      finishGame(currentScore);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setTimeLeft(SECONDS_PER_QUESTION);
    }
  };

  useEffect(() => {
    if (!started || done || selected !== null) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setSelected(-1); // timeout = wrong
          setTimeout(() => advanceOrFinish(score), 800);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, idx, done, selected]);

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setSelected(i);
    const correct = i === q.correctAnswer;
    const newScore = correct ? score + 1 : score;
    if (correct) { setScore(newScore); addXP(5, 'correctAnswer'); }
    setTimeout(() => advanceOrFinish(newScore), 600);
  };

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIdx(0); setSelected(null); setScore(0); setDone(false);
    setTimeLeft(SECONDS_PER_QUESTION); setStarted(false); setKey((k) => k + 1);
  };

  if (!started) {
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-5 animate-slide-up">
        <div className="text-5xl">⚡</div>
        <h1 className="text-2xl font-bold text-slate-800">Thi Tốc Độ</h1>
        <p className="text-slate-500">{QUESTIONS_PER_ROUND} câu · {SECONDS_PER_QUESTION}s mỗi câu · Hết giờ tính sai</p>
        {highScore > 0 && (
          <div className="bg-indigo-50 rounded-xl px-4 py-2 inline-flex items-center gap-2 text-indigo-700 font-semibold text-sm">
            <Trophy className="w-4 h-4" />Kỷ lục: {highScore}/{QUESTIONS_PER_ROUND}
          </div>
        )}
        <div className="flex gap-2 flex-wrap justify-center">
          {[{ id: 'all', icon: '📚', label: 'Tất cả' }, ...documents.map((d) => ({ id: d.id, icon: d.icon, label: d.shortTitle }))].map((d) => (
            <button key={d.id} onClick={() => setDocId(d.id)}
              className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docId === d.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
              {d.icon} {d.label.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
        <button onClick={() => setStarted(true)} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />Bắt đầu!
        </button>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / deck.length) * 100);
    const isRecord = score >= highScore;
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <div className="text-5xl">{pct >= 80 ? '🏆' : pct >= 50 ? '⚡' : '💪'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Khá tốt!' : 'Cần luyện thêm!'}</h2>
        {isRecord && score > 0 && <div className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block">🎉 Phá kỷ lục!</div>}
        <div className="text-5xl font-bold text-indigo-600">{score}<span className="text-2xl text-slate-400">/{deck.length}</span></div>
        <p className="text-slate-500">Tốc độ: {pct}% chính xác</p>
        {highScore > 0 && <p className="text-xs text-indigo-600">Kỷ lục: {highScore}/{QUESTIONS_PER_ROUND}</p>}
        <button onClick={restart} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" />Chơi lại
        </button>
      </div>
    );
  }

  const timerPct = (timeLeft / SECONDS_PER_QUESTION) * 100;
  const timerColor = timeLeft <= 3 ? 'bg-red-500' : timeLeft <= 6 ? 'bg-amber-400' : 'bg-green-500';

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up" key={key}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" />Thi Tốc Độ</h1>
        <span className="text-sm font-semibold text-slate-500">{idx + 1}/{deck.length}</span>
      </div>

      {/* Timer bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-slate-500">
          <span>Đúng: {score}</span>
          <span className={cn('font-bold tabular-nums', timeLeft <= 3 ? 'text-red-600' : 'text-slate-600')}>
            <Timer className="w-3 h-3 inline mr-1" />{timeLeft}s
          </span>
        </div>
        <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className={cn('h-full rounded-full transition-colors', timerColor)}
            animate={{ width: `${timerPct}%` }}
            transition={{ duration: 0.5, ease: 'linear' }}
          />
        </div>
      </div>

      {q && (
        <div className="card p-5 space-y-4">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            {documents.find((d) => d.id === q.docId)?.shortTitle}
          </span>
          <p className="text-slate-800 font-medium leading-relaxed text-lg">{q.question}</p>
          <div className="space-y-2">
            <AnimatePresence>
              {q.options.map((opt, i) => {
                let cls = 'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ';
                if (selected === null) {
                  cls += 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700';
                } else if (i === q.correctAnswer) {
                  cls += 'border-green-400 bg-green-50 text-green-800';
                } else if (i === selected) {
                  cls += 'border-red-400 bg-red-50 text-red-700';
                } else {
                  cls += 'border-slate-200 text-slate-400';
                }
                return (
                  <motion.button
                    key={i}
                    className={cls}
                    onClick={() => handleSelect(i)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
          {selected === -1 && (
            <div className="rounded-xl p-3 bg-orange-50 border border-orange-200 text-sm text-orange-700 font-medium">
              ⏱ Hết giờ! Đáp án đúng: <span className="font-bold">{q.options[q.correctAnswer]}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
