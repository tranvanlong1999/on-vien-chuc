'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { LawDocument, LawArticle } from '@/types';
import { Search, CheckCircle2, Circle, BookOpen, Star, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props { documents: LawDocument[] }

export function StudyGuideClient({ documents }: Props) {
  const params = useSearchParams();
  const [selectedDocId, setSelectedDocId] = useState(params.get('doc') || documents[0]?.id);
  const [selectedArticle, setSelectedArticle] = useState<LawArticle | null>(null);
  const [search, setSearch] = useState('');
  const { readingProgress, toggleArticleRead } = useAppStore();

  const doc = documents.find((d) => d.id === selectedDocId) || documents[0];
  const readIds = readingProgress[doc?.id] || [];

  const filtered = useMemo(() => {
    if (!search.trim()) return doc?.chapters || [];
    const q = search.toLowerCase();
    return (doc?.chapters || []).map((ch) => ({
      ...ch,
      articles: ch.articles.filter(
        (a) => a.title.toLowerCase().includes(q) || a.content.toLowerCase().includes(q) || a.number.toLowerCase().includes(q)
      ),
    })).filter((ch) => ch.articles.length > 0);
  }, [doc, search]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2"><BookOpen className="w-5 h-5 text-indigo-600" />Đọc Điều Luật</h1>
      </div>

      {/* Doc selector */}
      <div className="flex gap-2 flex-wrap">
        {documents.map((d) => (
          <button key={d.id} onClick={() => { setSelectedDocId(d.id); setSelectedArticle(null); }}
            className={cn('px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors', selectedDocId === d.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300')}>
            {d.icon} {d.shortTitle}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm kiếm điều khoản..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* TOC */}
        <div className="md:col-span-2 space-y-3 max-h-[70vh] overflow-y-auto pr-1">
          {filtered.map((ch) => (
            <div key={ch.number} className="card p-3">
              <p className="text-xs font-bold text-slate-500 uppercase mb-2">{ch.number} — {ch.title}</p>
              <div className="space-y-1">
                {ch.articles.map((article) => {
                  const isRead = readIds.includes(article.id);
                  const isActive = selectedArticle?.id === article.id;
                  return (
                    <button key={article.id} onClick={() => setSelectedArticle(article)}
                      className={cn('w-full flex items-center gap-2 text-left px-2.5 py-1.5 rounded-lg text-sm transition-colors', isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-slate-50 text-slate-700')}>
                      {isRead ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> : <Circle className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
                      <span className="truncate">{article.number} — {article.title}</span>
                      {article.isNew2026 && <span className="badge-new shrink-0">Mới</span>}
                      <ChevronRight className="w-3 h-3 text-slate-300 shrink-0 ml-auto" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Article detail */}
        <div className="md:col-span-3">
          {selectedArticle ? (
            <ArticleView article={selectedArticle} isRead={readIds.includes(selectedArticle.id)} onToggleRead={() => toggleArticleRead(doc.id, selectedArticle.id)} />
          ) : (
            <div className="card p-8 text-center text-slate-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-slate-300" />
              <p className="font-medium">Chọn một điều khoản để đọc</p>
              <p className="text-sm mt-1">Đọc xong bấm "Đánh dấu đã đọc" để tích tiến độ</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ArticleView({ article, isRead, onToggleRead }: { article: LawArticle; isRead: boolean; onToggleRead: () => void }) {
  return (
    <div className="card p-5 space-y-4 animate-slide-up">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{article.number}</p>
          <h2 className="text-lg font-bold text-slate-800 mt-0.5">{article.title}</h2>
          {article.isNew2026 && <span className="badge-new">Mới 2026</span>}
        </div>
        <button onClick={onToggleRead}
          className={cn('shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors', isRead ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-indigo-600 text-white hover:bg-indigo-700')}>
          {isRead ? <><CheckCircle2 className="w-4 h-4" />Đã đọc</> : <><Circle className="w-4 h-4" />Đánh dấu đã đọc</>}
        </button>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">{article.content}</p>
      </div>

      {article.summary.length > 0 && (
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-xs font-bold text-blue-700 uppercase mb-2">Ý chính cần nhớ</p>
          <ul className="space-y-1.5">
            {article.summary.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-blue-800">
                <span className="text-blue-400 shrink-0 mt-0.5">•</span>{s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {article.examFocus && (
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <p className="text-xs font-bold text-amber-700 uppercase">Trọng tâm thi</p>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed">{article.examFocus}</p>
        </div>
      )}
    </div>
  );
}
