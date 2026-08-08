'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { QuizQuestion, LawDocument } from '@/types';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, Flame, Trophy, RotateCcw } from 'lucide-react';

interface Props {
  questions: QuizQuestion[];
  documents: LawDocument[];
  dateKey: string;
}

export function DailyChallengeClient({ questions, documents, dateKey }: Props) {
  const { dailyChallengeCompleted, completeDailyChallenge, addMistake, addXP } = useAppStore((s) => ({
    dailyChallengeCompleted: s.dailyChallengeCompleted,
    completeDailyChallenge: s.completeDailyChallenge,
    addMistake: s.addMistake,
    addXP: s.addXP,
  }));

  const alreadyDone = dailyChallengeCompleted[dateKey] ?? false;

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(alreadyDone);

  const q = questions[idx];
  const isCorrect = selected === q?.correctAnswer;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.correctAnswer;
    if (correct) {
      setScore((s) => s + 1);
      addXP(5, 'correctAnswer');
    } else {
      addMistake(q.id);
    }
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      completeDailyChallenge(dateKey);
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  if (alreadyDone || done) {
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <div className="text-5xl">🔥</div>
        <h2 className="text-2xl font-bold text-slate-800">Thử thách hôm nay hoàn thành!</h2>
        <p className="text-slate-500">Bạn đã nhận <span className="font-bold text-amber-600">+50 XP</span> thưởng hôm nay.</p>
        {!alreadyDone && (
          <div className="text-3xl font-bold text-amber-500">{score}<span className="text-lg text-slate-400">/{questions.length}</span></div>
        )}
        <p className="text-sm text-slate-400">Quay lại vào ngày mai để nhận thử thách mới!</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-lg mx-auto card p-12 text-center">
        <p className="text-4xl mb-3">📭</p>
        <p className="font-semibold text-slate-700">Không có câu hỏi cho hôm nay.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />Thử Thách Ngày
        </h1>
        <span className="text-xs bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full font-semibold">
          🎁 +50 XP khi hoàn thành
        </span>
      </div>

      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>Câu {idx + 1}/{questions.length}</span><span>Đúng: {score}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill bg-orange-500" style={{ width: `${(idx / questions.length) * 100}%` }} />
      </div>

      {q && (
        <div className="card p-5 space-y-4">
          <span className="text-xs font-semibold text-orange-600 uppercase">
            {documents.find((d) => d.id === q.docId)?.shortTitle}
          </span>
          <p className="text-slate-800 font-medium leading-relaxed">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              let cls = 'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ';
              if (selected === null) cls += 'border-slate-200 hover:border-orange-300 hover:bg-orange-50 text-slate-700';
              else if (i === q.correctAnswer) cls += 'border-green-400 bg-green-50 text-green-800 font-medium';
              else if (i === selected) cls += 'border-red-400 bg-red-50 text-red-700';
              else cls += 'border-slate-200 text-slate-400';
              return (
                <button key={i} className={cls} onClick={() => handleSelect(i)}>
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className={cn('rounded-xl p-4 border animate-slide-up', isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200')}>
              <div className="flex items-center gap-2 mb-1">
                {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-500" />}
                <span className={cn('font-semibold text-sm', isCorrect ? 'text-green-700' : 'text-red-600')}>
                  {isCorrect ? 'Chính xác!' : 'Sai rồi!'}
                </span>
              </div>
              <p className="text-sm text-slate-700">{q.explanation}</p>
              <button onClick={next} className="mt-3 w-full py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                {idx + 1 >= questions.length ? '🎉 Nhận phần thưởng' : 'Câu tiếp →'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
