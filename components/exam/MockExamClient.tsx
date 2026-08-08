'use client';

import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { QuizQuestion } from '@/types';
import { shuffle } from '@/lib/utils';
import { Timer, Trophy, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props { questions: QuizQuestion[] }

type Phase = 'intro' | 'mcq' | 'essay' | 'result';

const ESSAY_PROMPT = `Tình huống: Trong giờ học Toán lớp 4, học sinh Minh liên tục nghịch ngợm, mất trật tự, ảnh hưởng đến các học sinh khác. Dù giáo viên đã nhắc nhở 2 lần nhưng Minh vẫn tái phạm.

Anh/Chị hãy đóng vai giáo viên đứng lớp, xử lý tình huống này đảm bảo tính sư phạm, đúng chuẩn mực ứng xử theo Thông tư 03/2026/TT-BGDĐT và Luật Nhà giáo 73/2025/QH15.`;

const RUBRIC = [
  { criterion: 'Nhận diện vấn đề, nêu căn cứ pháp lý đúng', points: 2 },
  { criterion: 'Biện pháp xử lý sư phạm tích cực trong giờ học', points: 3 },
  { criterion: 'Biện pháp sau giờ học + phối hợp phụ huynh', points: 3 },
  { criterion: 'Rút ra bài học, liên hệ thực tiễn', points: 2 },
];

export function MockExamClient({ questions }: Props) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [deck] = useState(() => shuffle(questions).slice(0, Math.min(questions.length, 20)));
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [essay, setEssay] = useState('');
  const [rubricChecked, setRubricChecked] = useState<boolean[]>(new Array(RUBRIC.length).fill(false));
  const [mcqScore, setMcqScore] = useState(0);
  const { saveQuizScore, addMistake } = useAppStore();
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (phase === 'mcq') {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) { clearInterval(timerRef.current); finishMCQ(); return 0; }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const finishMCQ = () => {
    let correct = 0;
    deck.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
      else addMistake(q.id);
    });
    const s = Math.round((correct / deck.length) * 10);
    setMcqScore(s);
    setPhase('essay');
  };

  const finishEssay = () => {
    const essayPoints = rubricChecked.filter(Boolean).reduce((t, _, i) => rubricChecked[i] ? t + RUBRIC[i].points : t, 0);
    const total = Math.round((mcqScore * 0.6 + (essayPoints / 10) * 10 * 0.4) * 10) / 10;
    saveQuizScore('mock', Math.round(total));
    setPhase('result');
  };

  const restart = () => {
    setPhase('intro'); setAnswers({}); setTimeLeft(3600); setEssay('');
    setRubricChecked(new Array(RUBRIC.length).fill(false));
  };

  const fmt = (s: number) => `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  if (phase === 'intro') return (
    <div className="max-w-lg mx-auto card p-8 text-center space-y-5">
      <div className="text-5xl">📝</div>
      <h1 className="text-2xl font-bold text-slate-800">Thi Thử Tổng Hợp</h1>
      <div className="text-left space-y-2 bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
        <p>✦ <strong>Phần 1:</strong> {deck.length} câu trắc nghiệm — 60 phút</p>
        <p>✦ <strong>Phần 2:</strong> Tự luận xử lý tình huống sư phạm</p>
        <p>✦ Điểm đạt: <strong>≥ 5.0/10</strong></p>
      </div>
      <button onClick={() => setPhase('mcq')} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors">
        Bắt đầu thi →
      </button>
    </div>
  );

  if (phase === 'mcq') return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up">
      <div className="flex items-center justify-between sticky top-16 bg-slate-50 py-2 z-10">
        <h2 className="font-bold text-slate-700">Phần 1: Trắc nghiệm ({deck.length} câu)</h2>
        <div className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-sm', timeLeft < 300 ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700')}>
          <Timer className="w-4 h-4" />{fmt(timeLeft)}
        </div>
      </div>
      <div className="space-y-4">
        {deck.map((q, qi) => (
          <div key={q.id} className="card p-4 space-y-3">
            <p className="font-medium text-slate-800 text-sm"><span className="text-indigo-600 font-bold">Câu {qi + 1}.</span> {q.question}</p>
            <div className="space-y-1.5">
              {q.options.map((opt, oi) => (
                <button key={oi} onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                  className={cn('w-full text-left px-3 py-2 rounded-lg text-sm border transition-colors', answers[qi] === oi ? 'border-indigo-500 bg-indigo-50 text-indigo-800 font-medium' : 'border-slate-200 text-slate-700 hover:bg-slate-50')}>
                  {String.fromCharCode(65 + oi)}. {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={finishMCQ} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
        Nộp bài Phần 1 → Sang Phần 2
      </button>
    </div>
  );

  if (phase === 'essay') return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up">
      <div className="card p-5">
        <h2 className="font-bold text-slate-700 mb-1">Phần 2: Tự luận</h2>
        <p className="text-xs text-slate-500 mb-4">Đọc kỹ đề bài và viết bài làm bên dưới</p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-amber-900 whitespace-pre-line font-medium">{ESSAY_PROMPT}</p>
        </div>
        <textarea value={essay} onChange={(e) => setEssay(e.target.value)} rows={12}
          placeholder="Viết bài làm của bạn tại đây..."
          className="w-full border border-slate-200 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      </div>
      <div className="card p-5 space-y-3">
        <h3 className="font-semibold text-slate-700">Tự chấm bài theo rubric</h3>
        {RUBRIC.map((r, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={rubricChecked[i]} onChange={(e) => {
              const next = [...rubricChecked]; next[i] = e.target.checked; setRubricChecked(next);
            }} className="w-4 h-4 accent-indigo-600" />
            <span className="text-sm text-slate-700 flex-1">{r.criterion}</span>
            <span className="text-xs font-bold text-indigo-600">{r.points} điểm</span>
          </label>
        ))}
        <p className="text-sm font-semibold text-slate-700">Tự luận: {rubricChecked.reduce((t, c, i) => c ? t + RUBRIC[i].points : t, 0)}/10 điểm</p>
      </div>
      <button onClick={finishEssay} className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors">
        Xem kết quả tổng hợp
      </button>
    </div>
  );

  const essayPoints = rubricChecked.reduce((t, c, i) => c ? t + RUBRIC[i].points : t, 0);
  const total = Math.round((mcqScore * 0.6 + (essayPoints / 10) * 10 * 0.4) * 10) / 10;
  const pass = total >= 5;

  return (
    <div className="max-w-lg mx-auto card p-8 text-center space-y-5 animate-slide-up">
      <div className="text-5xl">{pass ? '🏆' : '💪'}</div>
      <h2 className="text-2xl font-bold text-slate-800">{pass ? 'Đạt yêu cầu!' : 'Cần ôn thêm!'}</h2>
      <div className={cn('text-5xl font-bold', pass ? 'text-green-600' : 'text-red-500')}>{total}<span className="text-2xl text-slate-400">/10</span></div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-slate-50 rounded-xl p-3"><p className="text-slate-500">Trắc nghiệm (60%)</p><p className="font-bold text-xl text-slate-800">{mcqScore}/10</p></div>
        <div className="bg-slate-50 rounded-xl p-3"><p className="text-slate-500">Tự luận (40%)</p><p className="font-bold text-xl text-slate-800">{essayPoints}/10</p></div>
      </div>
      <button onClick={restart} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
        <RotateCcw className="w-4 h-4" />Thi lại
      </button>
    </div>
  );
}
