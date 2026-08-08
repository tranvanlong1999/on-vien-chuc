'use client';

import { useState } from 'react';
import { PedagogyScenario } from '@/data/scenarios';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, ArrowLeft, AlertTriangle, Sparkles, Loader2 } from 'lucide-react';
import type { EvaluateResponse } from '@/app/api/evaluate/route';
import {
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from './scenario-badge-helpers';

interface Props {
  scenario: PedagogyScenario;
  onBack: () => void;
}

function CollapsibleSection({
  label,
  borderColor,
  hoverBg,
  labelColor,
  chevronColor,
  open,
  onToggle,
  icon,
  children,
}: {
  label: string;
  borderColor: string;
  hoverBg: string;
  labelColor: string;
  chevronColor: string;
  open: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('bg-white border rounded-2xl overflow-hidden', borderColor)}>
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 text-left transition-colors',
          hoverBg
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className={cn('text-sm font-semibold', labelColor)}>{label}</span>
        </div>
        {open ? (
          <ChevronUp className={cn('w-4 h-4 shrink-0', chevronColor)} />
        ) : (
          <ChevronDown className={cn('w-4 h-4 shrink-0', chevronColor)} />
        )}
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

export function ScenarioPractice({ scenario, onBack }: Props) {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(
    new Array(scenario.rubric.length).fill(false)
  );
  const [legalOpen, setLegalOpen] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [mistakesOpen, setMistakesOpen] = useState(false);
  const [aiResult, setAiResult] = useState<EvaluateResponse | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [aiModelOpen, setAiModelOpen] = useState(false);

  const totalPoints = scenario.rubric.reduce((t, r) => t + r.points, 0);
  const earnedPoints = checked.reduce(
    (t, c, i) => (c ? t + scenario.rubric[i].points : t),
    0
  );
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = () => {
    setSubmitted(true);
    setLegalOpen(true);
  };

  const handleReset = () => {
    setAnswer('');
    setSubmitted(false);
    setChecked(new Array(scenario.rubric.length).fill(false));
    setLegalOpen(false);
    setOutlineOpen(false);
    setModelOpen(false);
    setMistakesOpen(false);
    setAiResult(null);
    setAiError('');
  };

  const handleAiEvaluate = async () => {
    setAiLoading(true);
    setAiError('');
    try {
      const res = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenario: scenario.scenario,
          essay: answer,
          rubric: scenario.rubric.map((r) => ({ criterion: r.criterion, points: r.points })),
          legalBasis: scenario.legalBasis,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Lỗi không xác định');
      setAiResult(data);
    } catch (e) {
      setAiError(e instanceof Error ? e.message : 'Không kết nối được AI');
    } finally {
      setAiLoading(false);
    }
  };

  const scoreColor =
    earnedPoints >= totalPoints * 0.7
      ? 'text-green-600'
      : earnedPoints >= totalPoints * 0.5
      ? 'text-yellow-600'
      : 'text-red-500';

  return (
    <div className="max-w-2xl mx-auto space-y-4 pb-8">
      {/* Back + title */}
      <div className="flex items-start gap-3">
        <button
          onClick={onBack}
          className="mt-0.5 p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-500 shrink-0"
          aria-label="Quay lại danh sách"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="space-y-1.5 min-w-0">
          <div className="flex flex-wrap gap-1.5">
            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide',
                CATEGORY_COLORS[scenario.category]
              )}
            >
              {CATEGORY_LABELS[scenario.category]}
            </span>
            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide',
                DIFFICULTY_COLORS[scenario.difficulty]
              )}
            >
              {DIFFICULTY_LABELS[scenario.difficulty]}
            </span>
          </div>
          <h2 className="font-bold text-slate-800 text-lg leading-snug">{scenario.title}</h2>
        </div>
      </div>

      {/* Scenario box */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2">
        <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">Tình huống</p>
        <p className="text-sm text-amber-900 leading-relaxed">{scenario.scenario}</p>
      </div>

      {/* Legal basis */}
      <CollapsibleSection
        label="Căn cứ pháp lý cần vận dụng"
        borderColor="border-slate-200"
        hoverBg="hover:bg-slate-50"
        labelColor="text-slate-700"
        chevronColor="text-slate-400"
        open={legalOpen}
        onToggle={() => setLegalOpen((v) => !v)}
      >
        <div className="space-y-2">
          {scenario.legalBasis.map((item, i) => (
            <div key={i} className="flex gap-2 text-sm text-slate-600">
              <span className="text-indigo-500 font-bold shrink-0">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Answer textarea — only before submit */}
      {!submitted ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-700">Bài làm của bạn</p>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={10}
            placeholder="Viết bài xử lý tình huống tại đây... (khoảng 150–250 từ)"
            className="w-full border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 leading-relaxed"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">{wordCount} từ</span>
            <button
              onClick={handleSubmit}
              disabled={answer.trim().length < 20}
              className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Nộp bài &amp; Tự chấm
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Readonly answer */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Bài làm của bạn
            </p>
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{answer}</p>
          </div>

          {/* Rubric self-grading */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-700">Tự chấm theo rubric</p>
              <span className={cn('text-lg font-bold', scoreColor)}>
                {earnedPoints}/{totalPoints}
              </span>
            </div>
            <div className="space-y-3">
              {scenario.rubric.map((r, i) => (
                <label key={i} className="flex gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={(e) => {
                      const next = [...checked];
                      next[i] = e.target.checked;
                      setChecked(next);
                    }}
                    className="mt-0.5 w-4 h-4 accent-indigo-600 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors leading-snug">
                        {r.criterion}
                      </span>
                      <span className="text-xs font-bold text-indigo-600 shrink-0">{r.points}đ</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed italic">
                      Gợi ý: {r.hint}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Model outline */}
          <CollapsibleSection
            label="Dàn ý mẫu"
            borderColor="border-indigo-100"
            hoverBg="hover:bg-indigo-50"
            labelColor="text-indigo-700"
            chevronColor="text-indigo-400"
            open={outlineOpen}
            onToggle={() => setOutlineOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              {scenario.modelOutline.map((item, i) => (
                <p key={i} className="text-sm text-slate-700 leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </CollapsibleSection>

          {/* Model answer */}
          <CollapsibleSection
            label="Bài làm mẫu"
            borderColor="border-green-100"
            hoverBg="hover:bg-green-50"
            labelColor="text-green-700"
            chevronColor="text-green-400"
            open={modelOpen}
            onToggle={() => setModelOpen((v) => !v)}
          >
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
              {scenario.modelAnswer}
            </p>
          </CollapsibleSection>

          {/* Common mistakes */}
          <CollapsibleSection
            label="Lỗi thường gặp"
            borderColor="border-red-100"
            hoverBg="hover:bg-red-50"
            labelColor="text-red-700"
            chevronColor="text-red-400"
            open={mistakesOpen}
            onToggle={() => setMistakesOpen((v) => !v)}
            icon={<AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />}
          >
            <div className="space-y-2">
              {scenario.commonMistakes.map((m, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-600">
                  <span className="text-red-500 font-bold shrink-0">!</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* AI Grading */}
          <div className="bg-white border border-violet-200 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <p className="text-sm font-bold text-violet-700">Nhờ AI chấm điểm</p>
              </div>
              {!aiResult && (
                <button
                  onClick={handleAiEvaluate}
                  disabled={aiLoading}
                  className="flex items-center gap-1.5 px-4 py-1.5 bg-violet-600 text-white rounded-lg text-xs font-bold hover:bg-violet-700 transition-colors disabled:opacity-50"
                >
                  {aiLoading ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Đang chấm...</> : 'Gửi bài cho AI →'}
                </button>
              )}
            </div>
            {aiError && <p className="text-xs text-red-500">{aiError}</p>}
            {aiResult && (
              <div className="space-y-3 animate-slide-up">
                <div className="grid grid-cols-2 gap-2">
                  {aiResult.scores.map((s, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3">
                      <p className="text-xs text-slate-500 leading-tight">{s.criterion}</p>
                      <p className="font-bold text-slate-800 text-sm mt-1">{s.score}/{s.maxPoints}đ</p>
                      <p className="text-xs text-slate-500 italic mt-0.5">{s.comment}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center py-2 bg-violet-50 rounded-xl">
                  <p className="text-2xl font-extrabold text-violet-700">{aiResult.totalScore}/10</p>
                  <p className="text-xs text-violet-500">Tổng điểm AI</p>
                </div>
                {aiResult.strength.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-green-700">✓ Điểm tốt</p>
                    {aiResult.strength.map((s, i) => <p key={i} className="text-xs text-slate-600 pl-3">• {s}</p>)}
                  </div>
                )}
                {aiResult.weakness.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-red-600">✗ Cần cải thiện</p>
                    {aiResult.weakness.map((w, i) => <p key={i} className="text-xs text-slate-600 pl-3">• {w}</p>)}
                  </div>
                )}
                <CollapsibleSection
                  label="Bài làm AI đề xuất"
                  borderColor="border-violet-100"
                  hoverBg="hover:bg-violet-50"
                  labelColor="text-violet-700"
                  chevronColor="text-violet-400"
                  open={aiModelOpen}
                  onToggle={() => setAiModelOpen((v) => !v)}
                >
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{aiResult.improvedEssay}</p>
                </CollapsibleSection>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Làm lại tình huống này
            </button>
            <button
              onClick={onBack}
              className="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors"
            >
              Làm tình huống khác
            </button>
          </div>
        </>
      )}
    </div>
  );
}
