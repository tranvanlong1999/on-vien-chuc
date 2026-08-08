'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { QuizQuestion } from '@/types';
import { shuffle } from '@/lib/utils';
import { Timer, Trophy, RotateCcw, CheckCircle2, FileText, ChevronRight, Sparkles, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props { questions: QuizQuestion[] }

export interface MockExamSet {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  badge: string;
  difficulty: 'Cơ bản' | 'Chuẩn' | 'Nâng cao';
  durationMinutes: number;
  filterDocId?: string;
  essayPrompt: string;
  essayRubric: { criterion: string; points: number }[];
}

export const EXAM_SETS: MockExamSet[] = [
  {
    id: 'exam-1',
    code: 'ĐỀ SỐ 01',
    title: 'Đề thi Tổng hợp Chuẩn Bộ GD&ĐT 2026',
    subtitle: 'Đề thi minh họa theo cấu trúc chuẩn bao phủ toàn bộ các Luật, Nghị định và Thông tư mới nhất.',
    badge: 'Tổng hợp',
    difficulty: 'Chuẩn',
    durationMinutes: 60,
    essayPrompt: `Tình huống: Trong giờ học Toán lớp 4, học sinh Minh liên tục nghịch ngợm, mất trật tự, ảnh hưởng đến các học sinh khác. Dù giáo viên đã nhắc nhở 2 lần nhưng Minh vẫn tái phạm.

Anh/Chị hãy đóng vai giáo viên đứng lớp, xử lý tình huống này đảm bảo tính sư phạm, đúng chuẩn mực ứng xử theo Thông tư 03/2026/TT-BGDĐT và Luật Nhà giáo 73/2025/QH15.`,
    essayRubric: [
      { criterion: 'Nhận diện vấn đề, nêu căn cứ pháp lý đúng (TT03 & Luật Nhà giáo)', points: 2 },
      { criterion: 'Biện pháp xử lý sư phạm tích cực ngay trong giờ học', points: 3 },
      { criterion: 'Biện pháp sau giờ học + phối hợp cha mẹ học sinh', points: 3 },
      { criterion: 'Rút ra bài học kinh nghiệm, liên hệ thực tiễn giảng dạy', points: 2 },
    ],
  },
  {
    id: 'exam-2',
    code: 'ĐỀ SỐ 02',
    title: 'Chuyên đề Luật Nhà giáo 73/2025 & NĐ 93/2026',
    subtitle: 'Chuyên sâu các quy định về vị thế nhà giáo, chính sách lương cao nhất, bãi bỏ tập sự và chứng chỉ hành nghề.',
    badge: 'Luật Nhà giáo',
    difficulty: 'Chuẩn',
    filterDocId: 'luat-nha-giao-2025',
    durationMinutes: 45,
    essayPrompt: `Tình huống: Thầy Hùng là giáo viên mới tuyển dụng năm 2026 có thâm niên hợp đồng 4 năm trước đó. Thầy thắc mắc về quyền lợi hưởng 100% lương ngay không phải tập sự và cộng 5 điểm Vòng 2 theo NĐ 93/2026/NĐ-CP.

Anh/Chị hãy phân tích căn cứ pháp lý để giải thích rõ quyền lợi cho thầy Hùng theo quy định mới.`,
    essayRubric: [
      { criterion: 'Nêu đúng căn cứ Điều 15-18 Luật Nhà giáo 73/2025 & Điều 8 NĐ 93/2026', points: 3 },
      { criterion: 'Giải thích chính xác quy định bãi bỏ tập sự & nhận 100% lương', points: 3 },
      { criterion: 'Phân tích điều kiện ưu tiên cộng 5 điểm Vòng 2 (thâm niên ≥36 tháng)', points: 2 },
      { criterion: 'Cách thức hướng dẫn giáo viên hoàn thiện hồ sơ minh chứng', points: 2 },
    ],
  },
  {
    id: 'exam-3',
    code: 'ĐỀ SỐ 03',
    title: 'Chuyên đề Luật Viên chức 129/2025 & NĐ 259/2026',
    subtitle: 'Tập trung các câu hỏi về tuyển dụng Vòng 1 & Vòng 2, thời hiệu kỷ luật 5 năm và đánh giá thăng hạng viên chức.',
    badge: 'Luật Viên chức',
    difficulty: 'Chuẩn',
    filterDocId: 'luat-vien-chuc-2025',
    durationMinutes: 45,
    essayPrompt: `Tình huống: Cô Mai là viên chức giáo viên tiểu học Hạng III. Năm vừa qua cô đạt mức Hoàn thành xuất sắc nhiệm vụ nhưng băn khoăn về quy trình và điều kiện xét thăng hạng lên Hạng II theo Nghị định 259/2026/NĐ-CP.

Anh/Chị hãy tư vấn cho cô Mai các điều kiện, tiêu chuẩn và hình thức thăng hạng viên chức theo quy định mới.`,
    essayRubric: [
      { criterion: 'Căn cứ pháp lý Điều 28-29 Luật Viên chức & NĐ 259/2026', points: 3 },
      { criterion: 'Nêu rõ 2 hình thức: Thi thăng hạng & Xét thăng hạng', points: 3 },
      { criterion: 'Điều kiện về bằng cấp, chứng chỉ và kết quả đánh giá hàng năm', points: 2 },
      { criterion: 'Lời khuyên lộ trình chuẩn bị hồ sơ minh chứng cụ thể', points: 2 },
    ],
  },
  {
    id: 'exam-4',
    code: 'ĐỀ SỐ 04',
    title: 'Chuyên đề Quy tắc Ứng xử (TT03) & Chuẩn Nghề nghiệp (TT30)',
    subtitle: 'Kiểm tra năng lực ứng xử với học sinh, phụ huynh, ứng dụng CNTT và 5 tiêu chuẩn 15 tiêu chí giáo viên.',
    badge: 'Ứng xử & Chuẩn NN',
    difficulty: 'Chuẩn',
    filterDocId: 'tt-03-2026-ung-xu',
    durationMinutes: 45,
    essayPrompt: `Tình huống: Giáo viên A bị phụ huynh phản ánh trên trang mạng xã hội cá nhân do bức xúc về việc thu quỹ lớp. Giáo viên A đăng tải bài viết phản bác gây tranh cãi trên Mạng xã hội.

Anh/Chị hãy đánh giá hành vi của GV A theo Điều 10 TT 03/2026/TT-BGDĐT và đề xuất quy trình xử lý khủng thâm đúng quy tắc.`,
    essayRubric: [
      { criterion: 'Phân tích vi phạm quy tắc ứng xử trên mạng xã hội theo Điều 10 TT 03/2026', points: 3 },
      { criterion: 'Đánh giá tác động tiêu cực đến hình ảnh nhà giáo và nhà trường', points: 2 },
      { criterion: 'Các bước xử lý truyền thông & đối thoại trực tiếp với phụ huynh', points: 3 },
      { criterion: 'Giải pháp phòng ngừa vi phạm ứng xử trên không gian mạng', points: 2 },
    ],
  },
  {
    id: 'exam-5',
    code: 'ĐỀ SỐ 05',
    title: 'Đề Thi Thử Nước Rút 2026 (Mức độ Nâng cao)',
    subtitle: 'Đề thi phân hóa cao với các câu hỏi tình huống thực tế phức tạp dành cho mục tiêu đạt điểm 9 - 10.',
    badge: 'Nâng cao',
    difficulty: 'Nâng cao',
    durationMinutes: 60,
    essayPrompt: `Tình huống: Trong đợt kiểm tra định kỳ, giáo viên phát hiện 2 học sinh có bài làm giống hệt nhau. Khi gọi lên làm việc, một học sinh thừa nhận đã chép bài của bạn do phụ huynh ép áp lực điểm số quá lớn.

Anh/Chị hãy xây dựng kịch bản ứng xử vừa bảo đảm kỷ luật thi cử theo Luật Nhà giáo, vừa có giải pháp tâm lý hỗ trợ học sinh và đối thoại với phụ huynh.`,
    essayRubric: [
      { criterion: 'Xử lý vi phạm gian lận kiểm tra đúng Điều 11 Luật Nhà giáo 73/2025', points: 3 },
      { criterion: 'Biện pháp giáo dục nhân văn, giúp học sinh nhận ra sai lầm không bị tổn thương', points: 3 },
      { criterion: 'Kỹ năng đối thoại hợp tác với phụ huynh giải tỏa áp lực thành tích', points: 2 },
      { criterion: 'Đề xuất giải pháp kiểm tra đánh giá vì sự tiến bộ của người học', points: 2 },
    ],
  },
  {
    id: 'exam-6',
    code: 'ĐỀ SỐ 06',
    title: 'Đề thi Ngẫu nhiên từ Ngân hàng 100+ Câu hỏi',
    subtitle: 'Tự động trích xuất ngẫu nhiên 20 câu trắc nghiệm mới mỗi lần làm bài, giúp luyện phản xạ đề thi.',
    badge: 'Ngẫu nhiên',
    difficulty: 'Cơ bản',
    durationMinutes: 60,
    essayPrompt: `Tình huống: Giáo viên chủ nhiệm phát hiện trong lớp có hiện tượng một nhóm học sinh cô lập, tẩy chay một bạn học sinh mới chuyển trường đến.

Anh/Chị hãy vận dụng Tiêu chuẩn 3 TT 30/2026 (Xây dựng môi trường giáo dục an toàn) và Quy tắc ứng xử TT 03/2026 để xử lý tình huống trên.`,
    essayRubric: [
      { criterion: 'Nhận diện hành vi bạo lực tinh thần/cô lập học đường', points: 2 },
      { criterion: 'Biện pháp can thiệp kết nối tập thể lớp tạo môi trường hòa nhập', points: 3 },
      { criterion: 'Phối hợp gia đình hai bên và bộ phận tư vấn tâm lý học đường', points: 3 },
      { criterion: 'Rút ra phương pháp xây dựng văn hóa lớp học dân chủ, tôn trọng', points: 2 },
    ],
  },
];

type Phase = 'list' | 'resume' | 'mcq' | 'essay' | 'result';

const EXAM_STORAGE_KEY = 'hvc2026-active-exam';

interface ActiveExamState {
  examSetId: string;
  deckIds: string[];
  answers: Record<number, number>;
  essay: string;
  rubricChecked: boolean[];
  examEndTime: number;
}

function loadSavedExam(): ActiveExamState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(EXAM_STORAGE_KEY);
    if (!raw) return null;
    const state: ActiveExamState = JSON.parse(raw);
    if (Date.now() >= state.examEndTime) {
      localStorage.removeItem(EXAM_STORAGE_KEY);
      return null;
    }
    return state;
  } catch {
    return null;
  }
}

function saveExam(state: ActiveExamState) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(state));
}

function clearExam() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(EXAM_STORAGE_KEY);
}

export function MockExamClient({ questions }: Props) {
  const [phase, setPhase] = useState<Phase>('list');
  const [currentSet, setCurrentSet] = useState<MockExamSet>(EXAM_SETS[0]);
  const [deck, setDeck] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [examEndTime, setExamEndTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [essay, setEssay] = useState('');
  const [rubricChecked, setRubricChecked] = useState<boolean[]>([]);
  const [mcqScore, setMcqScore] = useState(0);
  const [savedExam, setSavedExam] = useState<ActiveExamState | null>(null);
  const [filterTab, setFilterTab] = useState<string>('all');

  const quizScores = useAppStore((s) => s.quizScores);
  const saveQuizScore = useAppStore((s) => s.saveQuizScore);
  const addMistake = useAppStore((s) => s.addMistake);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const [resumeRemaining, setResumeRemaining] = useState(0);

  const finishMCQ = useCallback(() => {
    clearInterval(timerRef.current);
    let correct = 0;
    deck.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
      else addMistake(q.id);
    });
    const s = Math.round((correct / Math.max(1, deck.length)) * 10);
    setMcqScore(s);
    setPhase('essay');
  }, [answers, deck, addMistake]);

  // Check for saved active exam on mount
  useEffect(() => {
    const saved = loadSavedExam();
    if (saved) {
      const timer = setTimeout(() => {
        setSavedExam(saved);
        const foundSet = EXAM_SETS.find((s) => s.id === saved.examSetId) || EXAM_SETS[0];
        setCurrentSet(foundSet);
        setResumeRemaining(Math.max(0, Math.floor((saved.examEndTime - Date.now()) / 1000)));
        setPhase('resume');
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Timer using examEndTime for accuracy
  useEffect(() => {
    if (phase !== 'mcq') return;
    timerRef.current = setInterval(() => {
      const remaining = Math.max(0, Math.floor((examEndTime - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        finishMCQ();
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase, examEndTime, finishMCQ]);

  // Auto-save on answer/essay changes
  const autoSave = useCallback((
    currentAnswers: Record<number, number>,
    currentEssay: string,
    currentRubric: boolean[],
    currentEndTime: number,
    currentDeck: QuizQuestion[],
    setId: string
  ) => {
    if (phase !== 'mcq' && phase !== 'essay') return;
    saveExam({
      examSetId: setId,
      deckIds: currentDeck.map((q) => q.id),
      answers: currentAnswers,
      essay: currentEssay,
      rubricChecked: currentRubric,
      examEndTime: currentEndTime,
    });
  }, [phase]);

  const prepareDeckForSet = useCallback((examSet: MockExamSet): QuizQuestion[] => {
    let pool = questions;
    if (examSet.filterDocId) {
      const docQuestions = questions.filter((q) => q.docId === examSet.filterDocId);
      if (docQuestions.length >= 10) {
        pool = docQuestions;
      }
    }
    return shuffle(pool).slice(0, Math.min(pool.length, 20));
  }, [questions]);

  const startNewExam = useCallback((examSet: MockExamSet) => {
    const newDeck = prepareDeckForSet(examSet);
    const durationMs = examSet.durationMinutes * 60 * 1000;
    const endTime = Date.now() + durationMs;

    setCurrentSet(examSet);
    setDeck(newDeck);
    setExamEndTime(endTime);
    setTimeLeft(durationMs / 1000);
    setAnswers({});
    setEssay('');
    setRubricChecked(new Array(examSet.essayRubric.length).fill(false));
    setPhase('mcq');

    saveExam({
      examSetId: examSet.id,
      deckIds: newDeck.map((q) => q.id),
      answers: {},
      essay: '',
      rubricChecked: new Array(examSet.essayRubric.length).fill(false),
      examEndTime: endTime,
    });
  }, [prepareDeckForSet]);

  const resumeExam = useCallback(() => {
    if (!savedExam) return;
    const savedDeck = savedExam.deckIds
      .map((id) => questions.find((q) => q.id === id))
      .filter(Boolean) as QuizQuestion[];

    const setObj = EXAM_SETS.find((s) => s.id === savedExam.examSetId) || EXAM_SETS[0];
    setCurrentSet(setObj);
    setDeck(savedDeck.length > 0 ? savedDeck : prepareDeckForSet(setObj));
    setAnswers(savedExam.answers);
    setEssay(savedExam.essay);
    setRubricChecked(savedExam.rubricChecked || new Array(setObj.essayRubric.length).fill(false));
    setExamEndTime(savedExam.examEndTime);
    setTimeLeft(Math.max(0, Math.floor((savedExam.examEndTime - Date.now()) / 1000)));
    setPhase('mcq');
  }, [savedExam, questions, prepareDeckForSet]);

  const finishEssay = () => {
    clearExam();
    const essayPoints = rubricChecked.reduce((t, c, i) => c ? t + currentSet.essayRubric[i].points : t, 0);
    const total = Math.round((mcqScore * 0.6 + (essayPoints / 10) * 10 * 0.4) * 10) / 10;
    saveQuizScore(`exam-${currentSet.id}`, Math.round(total * 10)); // Save high score
    setPhase('result');
  };

  const restartList = () => {
    clearExam();
    setPhase('list');
    setAnswers({});
    setEssay('');
  };

  const fmt = (s: number) =>
    `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const handleSetAnswers = (next: Record<number, number>) => {
    setAnswers(next);
    autoSave(next, essay, rubricChecked, examEndTime, deck, currentSet.id);
  };

  const handleSetEssay = (val: string) => {
    setEssay(val);
    autoSave(answers, val, rubricChecked, examEndTime, deck, currentSet.id);
  };

  const handleSetRubric = (next: boolean[]) => {
    setRubricChecked(next);
    autoSave(answers, essay, next, examEndTime, deck, currentSet.id);
  };

  // Filtered Exam Sets
  const filteredSets = useMemo(() => {
    if (filterTab === 'all') return EXAM_SETS;
    if (filterTab === 'tong-hop') return EXAM_SETS.filter((s) => s.badge === 'Tổng hợp' || s.badge === 'Ngẫu nhiên');
    if (filterTab === 'chuyen-de') return EXAM_SETS.filter((s) => s.filterDocId || s.badge.includes('Luật') || s.badge.includes('Ứng xử'));
    if (filterTab === 'nang-cao') return EXAM_SETS.filter((s) => s.difficulty === 'Nâng cao');
    return EXAM_SETS;
  }, [filterTab]);

  // Resume Modal Overlay
  if (phase === 'resume' && savedExam) {
    const remaining = resumeRemaining;
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl animate-slide-up">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto text-indigo-600 text-2xl font-bold">
            📋
          </div>
          <div className="text-center">
            <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded-full">
              {currentSet.code}
            </span>
            <h2 className="text-xl font-bold text-slate-800 mt-2 leading-snug">{currentSet.title}</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl text-center space-y-1 border border-slate-100">
            <p className="text-xs text-slate-500">Thời gian còn lại:</p>
            <p className="font-mono font-extrabold text-indigo-600 text-2xl">{fmt(remaining)}</p>
            <p className="text-xs text-slate-500 pt-1">
              Đã làm: <strong>{Object.keys(savedExam.answers).length} / {savedExam.deckIds.length}</strong> câu trắc nghiệm
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { setSavedExam(null); clearExam(); setPhase('list'); }}
              className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Hủy bài thi này
            </button>
            <button
              onClick={resumeExam}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Tiếp tục thi</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Phase: Exam Selection List
  if (phase === 'list') {
    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ngân hàng Đề thi thử Viên chức 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Bộ Đề thi thử Tổng hợp & Chuyên đề 2026
            </h1>
            <p className="text-indigo-100 text-xs sm:text-sm mt-2 leading-relaxed">
              Luyện đề thi thử với đồng hồ đếm ngược 60 phút, kết hợp trắc nghiệm Vòng 1 và câu hỏi tự luận tình huống sư phạm Vòng 2.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs font-medium text-indigo-200 flex-wrap">
              <span className="flex items-center gap-1"><Timer className="w-4 h-4 text-indigo-300" /> 60 Phút / Bộ đề</span>
              <span className="flex items-center gap-1"><Target className="w-4 h-4 text-indigo-300" /> 20 MCQ + 1 Tự luận</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-indigo-300" /> Tự động lưu bài làm</span>
            </div>
          </div>
          <div className="absolute right-4 bottom-0 opacity-15 pointer-events-none text-9xl font-black">
            📝
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 flex-wrap">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'Tất cả đề thi' },
              { id: 'tong-hop', label: 'Đề Thi Tổng Hợp' },
              { id: 'chuyen-de', label: 'Đề Thi Chuyên Đề' },
              { id: 'nang-cao', label: 'Mức Nâng Cao' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterTab(tab.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all duration-200',
                  filterTab === tab.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">Hiển thị {filteredSets.length} bộ đề</span>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredSets.map((set) => {
            const bestScore = quizScores[`exam-${set.id}`];
            const isCompleted = typeof bestScore === 'number';

            return (
              <div
                key={set.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all p-5 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-md">
                      {set.code}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {set.badge}
                      </span>
                      <span className={cn(
                        'text-[11px] font-bold px-2 py-0.5 rounded-md',
                        set.difficulty === 'Nâng cao' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-blue-50 text-blue-700 border border-blue-100'
                      )}>
                        {set.difficulty}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-800 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                    {set.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-2">
                    {set.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 space-y-0.5">
                    <div className="flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5 text-slate-400" />
                      <span>{set.durationMinutes} phút làm bài</span>
                    </div>
                    {isCompleted && (
                      <div className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>Đã làm: <strong>{bestScore / 10}/10 điểm</strong></span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => startNewExam(set)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs shrink-0"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>{isCompleted ? 'Thi lại' : 'Vào thi'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Phase: MCQ Questions Section
  if (phase === 'mcq') return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up">
      {/* Exam Header */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between sticky top-16 z-20">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 uppercase bg-indigo-50 px-2 py-0.5 rounded-md">
            {currentSet.code}
          </span>
          <h2 className="font-bold text-slate-800 text-sm sm:text-base leading-snug mt-0.5">{currentSet.title}</h2>
        </div>
        <div className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-sm shrink-0 border',
          timeLeft < 300 ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 'bg-slate-50 text-slate-700 border-slate-200'
        )}>
          <Timer className="w-4 h-4 text-indigo-600" />
          <span>{fmt(timeLeft)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Phần 1: Trắc nghiệm Kiến thức chung ({deck.length} câu)</span>
        <span>Đã làm: <strong className="text-indigo-600">{Object.keys(answers).length} / {deck.length}</strong></span>
      </div>

      {/* MCQ Cards */}
      <div className="space-y-4">
        {deck.map((q, qi) => (
          <div key={q.id} className="card p-4 sm:p-5 space-y-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <div className="flex items-start gap-2">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2 py-0.5 rounded-lg shrink-0 mt-0.5">
                Câu {qi + 1}
              </span>
              <p className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">{q.question}</p>
            </div>

            <div className="space-y-2 pt-1">
              {q.options.map((opt, oi) => {
                const isChosen = answers[qi] === oi;
                return (
                  <button
                    key={oi}
                    onClick={() => handleSetAnswers({ ...answers, [qi]: oi })}
                    className={cn(
                      'w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition-all duration-150 flex items-start gap-2.5',
                      isChosen
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-900 font-semibold shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                    )}
                  >
                    <span className={cn(
                      'w-5 h-5 rounded-full border text-xs flex items-center justify-center font-bold shrink-0 mt-0.5',
                      isChosen ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 text-slate-500 border-slate-300'
                    )}>
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="leading-relaxed flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Finish MCQ Navigation */}
      <div className="pt-2 pb-6 space-y-2">
        <button
          onClick={finishMCQ}
          className="w-full py-3.5 bg-indigo-600 text-white rounded-2xl font-bold text-base hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
        >
          <span>Nộp bài Phần 1 → Chuyển sang Phần 2 Tự luận</span>
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          onClick={restartList}
          className="w-full py-2 text-slate-400 hover:text-slate-600 text-xs text-center font-medium"
        >
          Tạm dừng & Thoát ra danh sách đề
        </button>
      </div>
    </div>
  );

  // Phase: Essay Section
  if (phase === 'essay') return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-2 py-0.5 rounded-md">
              {currentSet.code} — PHẦN 2: TỰ LUẬN
            </span>
            <h2 className="font-bold text-slate-800 text-base mt-1">Xử lý Tình huống Sư phạm</h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            Trắc nghiệm: {mcqScore}/10 điểm
          </span>
        </div>

        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 space-y-2">
          <h4 className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-600" />
            Đề bài tự luận tình huống:
          </h4>
          <p className="text-sm text-amber-900/90 whitespace-pre-line font-medium leading-relaxed">
            {currentSet.essayPrompt}
          </p>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Bài làm tự luận của bạn:
          </label>
          <textarea
            value={essay}
            onChange={(e) => handleSetEssay(e.target.value)}
            rows={10}
            placeholder="Nhập nội dung bài làm xử lý tình huống sư phạm của bạn tại đây..."
            className="w-full border border-slate-200 rounded-2xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 placeholder:text-slate-400 leading-relaxed"
          />
        </div>
      </div>

      {/* Rubric Evaluation */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">Tự đối chiếu & Chấm điểm theo Biểu điểm Rubric:</h3>
        <div className="space-y-2">
          {currentSet.essayRubric.map((r, i) => (
            <label key={i} className="flex items-start gap-3 p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={Boolean(rubricChecked[i])}
                onChange={(e) => {
                  const next = [...rubricChecked];
                  next[i] = e.target.checked;
                  handleSetRubric(next);
                }}
                className="w-4 h-4 accent-indigo-600 mt-0.5"
              />
              <span className="text-xs sm:text-sm text-slate-700 flex-1 leading-snug">{r.criterion}</span>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md shrink-0">
                +{r.points} điểm
              </span>
            </label>
          ))}
        </div>
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-800">
          <span>Điểm phần Tự luận:</span>
          <span className="text-indigo-600 text-base">
            {rubricChecked.reduce((t, c, i) => c ? t + currentSet.essayRubric[i].points : t, 0)} / 10 điểm
          </span>
        </div>
      </div>

      <button
        onClick={finishEssay}
        className="w-full py-3.5 bg-emerald-600 text-white rounded-2xl font-bold text-base hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100 flex items-center justify-center gap-2"
      >
        <span>Hoàn thành & Xem kết quả Tổng hợp</span>
        <CheckCircle2 className="w-5 h-5" />
      </button>
    </div>
  );

  // Phase: Result Summary
  const essayPoints = rubricChecked.reduce((t, c, i) => c ? t + currentSet.essayRubric[i].points : t, 0);
  const total = Math.round((mcqScore * 0.6 + (essayPoints / 10) * 10 * 0.4) * 10) / 10;
  const pass = total >= 5.0;

  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 text-center space-y-6 animate-slide-up">
      <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center mx-auto text-4xl shadow-inner">
        {pass ? '🏆' : '💪'}
      </div>

      <div>
        <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          {currentSet.code} — KẾT QUẢ BÀI THI
        </span>
        <h2 className="text-2xl font-extrabold text-slate-800 mt-2">{pass ? 'Chúc mừng! Bạn đã ĐẠT' : 'Cần tiếp tục ôn luyện!'}</h2>
        <p className="text-xs text-slate-500 mt-1">{currentSet.title}</p>
      </div>

      <div className={cn(
        'p-6 rounded-2xl border text-center space-y-1',
        pass ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' : 'bg-red-50/80 border-red-200 text-red-900'
      )}>
        <p className="text-xs font-bold uppercase tracking-wider opacity-75">Điểm Tổng hợp quy đổi (Thang 10)</p>
        <div className="text-5xl font-black tracking-tight">
          {total}<span className="text-2xl opacity-50">/10</span>
        </div>
        <p className="text-xs font-semibold pt-1">
          {pass ? '✓ Vượt qua ngưỡng điểm sàn ≥ 5.0' : '✗ Chưa đạt điểm sàn 5.0'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 text-left">
          <p className="text-slate-500 font-medium">Trắc nghiệm (60%)</p>
          <p className="font-extrabold text-slate-800 text-xl mt-0.5">{mcqScore} <span className="text-xs text-slate-400 font-normal">/10</span></p>
        </div>
        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 text-left">
          <p className="text-slate-500 font-medium">Tự luận (40%)</p>
          <p className="font-extrabold text-slate-800 text-xl mt-0.5">{essayPoints} <span className="text-xs text-slate-400 font-normal">/10</span></p>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={restartList}
          className="flex-1 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100"
        >
          Danh sách đề khác
        </button>
        <button
          onClick={() => startNewExam(currentSet)}
          className="py-3 px-4 rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Thi lại đề này</span>
        </button>
      </div>
    </div>
  );
}

