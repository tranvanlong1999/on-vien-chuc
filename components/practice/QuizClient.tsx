'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { QuizQuestion, LawDocument } from '@/types';
import { shuffle } from '@/lib/utils';
import { CheckCircle2, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props { questions: QuizQuestion[]; documents: LawDocument[] }

export function QuizClient({ questions, documents }: Props) {
  const params = useSearchParams();
  const [docId, setDocId] = useState(params.get('doc') || 'all');
  const { quizScores, saveQuizScore, addMistake } = useAppStore();

  const deck = useMemo(() => {
    const pool = docId === 'all' ? questions : questions.filter((q) => q.docId === docId);
    return shuffle(pool).slice(0, Math.min(pool.length, 20));
  }, [questions, docId]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [key, setKey] = useState(0);

  const q = deck[idx];
  const isCorrect = selected === q?.correctAnswer;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correctAnswer) {
      setScore((s) => s + 1);
    } else {
      addMistake(q.id);
    }
  };

  const next = () => {
    if (idx + 1 >= deck.length) {
      const finalScore = Math.round(((score + (isCorrect ? 1 : 0)) / deck.length) * 10);
      saveQuizScore(docId, finalScore);
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIdx(0); setSelected(null); setScore(0); setDone(false); setKey((k) => k + 1);
  };

  if (done) {
    const finalScore = Math.round((score / deck.length) * 10);
    const pass = finalScore >= 5;
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <div className="text-5xl">{pass ? '🎉' : '💪'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{pass ? 'Đạt yêu cầu!' : 'Cần cố gắng thêm!'}</h2>
        <div className={cn('text-5xl font-bold', pass ? 'text-green-600' : 'text-red-500')}>{finalScore}<span className="text-2xl text-slate-400">/10</span></div>
        <p className="text-slate-500">Đúng {score}/{deck.length} câu</p>
        {quizScores[docId] && <p className="text-xs text-indigo-600">Điểm cao nhất: {quizScores[docId]}/10</p>}
        <button onClick={restart} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" />Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up" key={key}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Trophy className="w-5 h-5 text-indigo-600" />Luyện Trắc Nghiệm</h1>
        {quizScores[docId] && <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-semibold">Cao nhất: {quizScores[docId]}/10</span>}
      </div>

      {/* Doc filter */}
      <div className="flex gap-2 flex-wrap">
        {[{ id: 'all', icon: '📚', label: 'Tất cả' }, ...documents.map((d) => ({ id: d.id, icon: d.icon, label: d.shortTitle }))].map((d) => (
          <button key={d.id} onClick={() => { setDocId(d.id); restart(); }}
            className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docId === d.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
            {d.icon} {d.label.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Câu {idx + 1}/{deck.length}</span><span>Đúng: {score}</span></div>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${((idx) / deck.length) * 100}%` }} /></div>
      </div>

      {/* Question */}
      {q && (
        <div className="card p-5 space-y-4">
          <div>
            <span className="text-xs font-semibold text-indigo-500 uppercase">{documents.find((d) => d.id === q.docId)?.shortTitle}</span>
            {q.difficulty && <span className={cn('ml-2 text-xs px-2 py-0.5 rounded-full font-medium', q.difficulty === 'easy' ? 'bg-green-100 text-green-700' : q.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700')}>{q.difficulty === 'easy' ? 'Dễ' : q.difficulty === 'medium' ? 'Trung bình' : 'Khó'}</span>}
          </div>
          <p className="text-slate-800 font-medium leading-relaxed">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              let cls = 'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ';
              if (selected === null) cls += 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700';
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
              <div className="flex items-center gap-2 mb-1.5">
                {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-500" />}
                <span className={cn('font-semibold text-sm', isCorrect ? 'text-green-700' : 'text-red-600')}>{isCorrect ? 'Chính xác!' : 'Sai rồi!'}</span>
              </div>
              <p className="text-sm text-slate-700">{q.explanation}</p>
              <button onClick={next} className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                {idx + 1 >= deck.length ? 'Xem kết quả' : 'Câu tiếp theo →'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
