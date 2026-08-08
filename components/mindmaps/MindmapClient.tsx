'use client';

import { useState, useMemo } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, Info, Search, Sparkles, BookOpen, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mindmaps } from '@/data/mindmaps';
import type { MindmapNode } from '@/types';

const mindmapsMap = Object.fromEntries(mindmaps.map((m) => [m.id, m]));

// Helper to count total nodes and new 2026 items
function countNodeStats(node: MindmapNode): { total: number; newCount: number } {
  let total = 1;
  let newCount = node.isNew ? 1 : 0;
  if (node.children) {
    for (const child of node.children) {
      const s = countNodeStats(child);
      total += s.total;
      newCount += s.newCount;
    }
  }
  return { total, newCount };
}

// Helper to check if node or any of its children match search or filter
function nodeMatchesFilter(node: MindmapNode, query: string, onlyNew: boolean): boolean {
  const matchesQuery = !query || node.label.toLowerCase().includes(query.toLowerCase()) || (node.details && node.details.toLowerCase().includes(query.toLowerCase()));
  const matchesNew = !onlyNew || Boolean(node.isNew);

  if (matchesQuery && matchesNew) return true;

  if (node.children) {
    return node.children.some((child) => nodeMatchesFilter(child, query, onlyNew));
  }
  return false;
}

export function MindmapClient() {
  const [mapId, setMapId] = useState(mindmaps[0]?.id ?? '');
  const [selected, setSelected] = useState<MindmapNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyNew, setOnlyNew] = useState(false);
  const [expandAllToggle, setExpandAllToggle] = useState<boolean | null>(null);

  const map = mindmapsMap[mapId];

  const stats = useMemo(() => {
    return map ? countNodeStats(map.root) : { total: 0, newCount: 0 };
  }, [map]);

  const resetControls = () => {
    setSearchQuery('');
    setOnlyNew(false);
    setExpandAllToggle(null);
  };

  return (
    <div className="space-y-4 max-w-full overflow-hidden">
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
        <div>
          <h1 className="text-lg sm:text-2xl font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 shrink-0" />
            <span>Sơ đồ tư duy Pháp lý 2026</span>
          </h1>
          <p className="hidden sm:block text-xs sm:text-sm text-slate-500 mt-0.5">
            Hệ thống hóa các văn bản luật, nghị định, thông tư mới nhất dạng cây trực quan.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
          <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 sm:py-1 rounded-full border border-indigo-100">
            {stats.total} nội dung
          </span>
          {stats.newCount > 0 && (
            <span className="bg-amber-50 text-amber-700 px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              {stats.newCount} điểm mới 2026
            </span>
          )}
        </div>
      </div>

      {/* Horizontal Document Selection Tabs */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 snap-x scroll-smooth">
          {mindmaps.map((m) => {
            const isSelected = mapId === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setMapId(m.id);
                  setSelected(null);
                  resetControls();
                }}
                className={cn(
                  'px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all duration-200 snap-start shrink-0 flex items-center gap-1.5 shadow-xs',
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-600/20 shadow-indigo-100 font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40'
                )}
              >
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-2">
        {/* Search box */}
        <div className="relative flex-1 min-w-[150px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm từ khóa (lương, tập sự...)"
            className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <XCircle className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setOnlyNew((v) => !v)}
            className={cn(
              'px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1',
              onlyNew ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>MỚI</span>
          </button>

          <button
            onClick={() => setExpandAllToggle(true)}
            className="px-2.5 py-1.5 bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 rounded-xl text-xs font-medium transition-colors flex items-center gap-1"
            title="Mở tất cả các nhánh"
          >
            <ChevronDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mở hết</span>
          </button>

          <button
            onClick={() => setExpandAllToggle(false)}
            className="px-2.5 py-1.5 bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 rounded-xl text-xs font-medium transition-colors flex items-center gap-1"
            title="Thu gọn các nhánh"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Thu gọn</span>
          </button>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Mindmap Tree View Column */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs p-2 sm:p-4 max-h-[65vh] sm:max-h-[72vh] overflow-y-auto overflow-x-hidden">
          {map ? (
            <NodeTree
              node={map.root}
              depth={0}
              onSelect={setSelected}
              selected={selected}
              searchQuery={searchQuery}
              onlyNew={onlyNew}
              expandAllToggle={expandAllToggle}
            />
          ) : (
            <p className="text-center text-slate-400 py-10">Không tìm thấy dữ liệu sơ đồ tư duy.</p>
          )}
        </div>

        {/* Desktop Detail Panel */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-xs p-5 max-h-[72vh] overflow-y-auto sticky top-24">
          {selected ? (
            <div className="animate-slide-up space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                    Chi tiết pháp lý
                  </span>
                  {selected.isNew && <span className="badge-new">Mới 2026</span>}
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{selected.label}</h3>
              </div>

              {selected.details ? (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm text-slate-700 leading-relaxed space-y-2">
                  <p>{selected.details}</p>
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic">Không có chi tiết mô tả thêm cho mục này.</p>
              )}
            </div>
          ) : (
            <div className="text-center text-slate-400 py-12 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto text-indigo-500">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 text-sm">Xem giải thích chi tiết</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[220px] mx-auto">
                  Bấm vào bất kỳ mục nào có biểu tượng <Info className="w-3 h-3 inline text-indigo-500" /> để tra cứu chi tiết điều luật.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Sheet Modal */}
      {selected && (
        <div className="fixed inset-0 z-[60] md:hidden" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" />
        </div>
      )}
      <div
        className={cn(
          'fixed inset-x-0 bottom-0 z-[70] md:hidden bg-white rounded-t-3xl shadow-2xl border-t border-slate-200 transition-transform duration-300 ease-out max-h-[80vh] flex flex-col',
          selected ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-2.5 shrink-0" />
        <div className="flex items-start justify-between px-5 pt-3 pb-3 border-b border-slate-100 shrink-0">
          <div className="pr-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-md">
                Nội dung chi tiết
              </span>
              {selected?.isNew && <span className="badge-new">Mới 2026</span>}
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-snug">{selected?.label}</h3>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 text-lg leading-none"
          >
            ✕
          </button>
        </div>
        <div className="p-5 pb-16 overflow-y-auto text-sm text-slate-700 leading-relaxed space-y-3">
          {selected?.details ? (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-inner">
              <p className="text-slate-800 font-medium">{selected.details}</p>
            </div>
          ) : (
            <p className="text-slate-500 italic">Không có mô tả thêm cho mục này.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Tree view Node component
function NodeTree({
  node,
  depth,
  onSelect,
  selected,
  searchQuery,
  onlyNew,
  expandAllToggle,
}: {
  node: MindmapNode;
  depth: number;
  onSelect: (n: MindmapNode) => void;
  selected: MindmapNode | null;
  searchQuery: string;
  onlyNew: boolean;
  expandAllToggle: boolean | null;
}) {
  const hasChildren = Boolean(node.children && node.children.length > 0);

  // Compute if node or children match filter
  const isSelfOrChildrenMatching = useMemo(() => {
    return nodeMatchesFilter(node, searchQuery, onlyNew);
  }, [node, searchQuery, onlyNew]);

  // Open state
  const [openState, setOpenState] = useState<boolean | null>(null);

  // Determine actual open state
  const isOpen = useMemo(() => {
    if (searchQuery || onlyNew) return true; // Auto-expand when searching or filtering
    if (expandAllToggle !== null) return expandAllToggle;
    if (openState !== null) return openState;
    return depth < 2; // Default open top 2 levels
  }, [searchQuery, onlyNew, expandAllToggle, openState, depth]);

  if (!isSelfOrChildrenMatching) return null;

  const isSelected = selected?.id === node.id;

  // Highlight search term helper
  const renderLabel = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={i} className="bg-amber-200 text-amber-900 rounded-xs px-0.5 font-medium">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div
      className={cn(
        'w-full transition-all duration-150',
        depth > 0 && 'ml-1 sm:ml-3.5 pl-1.5 sm:pl-3 border-l-2 border-slate-100 hover:border-indigo-300 mt-1'
      )}
    >
      <div
        onClick={() => {
          if (hasChildren) {
            setOpenState(!isOpen);
          }
          if (node.details) {
            onSelect(node);
          }
        }}
        className={cn(
          'group flex items-start gap-2 w-full text-left py-2 px-2.5 rounded-xl text-sm transition-all duration-150 cursor-pointer border select-none',
          isSelected
            ? 'bg-indigo-50/90 text-indigo-900 border-indigo-300 shadow-xs ring-1 ring-indigo-400/20'
            : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
        )}
      >
        {/* Toggle arrow or bullet */}
        <div
          className={cn(
            'mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-lg text-slate-400 group-hover:text-indigo-600 transition-colors',
            isSelected && 'text-indigo-600 bg-indigo-100/60'
          )}
        >
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-4 h-4 text-indigo-600 shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-indigo-600" />
            )
          ) : (
            <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors shrink-0" />
          )}
        </div>

        {/* Node text label */}
        <div className="flex-1 min-w-0 pr-1">
          <span
            className={cn(
              'leading-snug break-words block',
              depth === 0
                ? 'font-bold text-base text-indigo-900'
                : depth === 1
                ? 'font-semibold text-slate-800'
                : 'font-normal text-slate-700'
            )}
          >
            {renderLabel(node.label)}
          </span>
        </div>

        {/* Badges and Info button */}
        <div className="shrink-0 flex items-center gap-1.5 self-start mt-0.5">
          {node.isNew && (
            <span className="badge-new text-[10px] px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
              MỚI
            </span>
          )}
          {node.details && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(node);
              }}
              className={cn(
                'p-1 rounded-lg transition-all shrink-0',
                isSelected ? 'text-indigo-700 bg-indigo-100' : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'
              )}
              title="Bấm để xem chi tiết"
            >
              <Info className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Render children nodes */}
      {hasChildren && isOpen && (
        <div className="space-y-0.5">
          {node.children!.map((child) => (
            <NodeTree
              key={child.id}
              node={child}
              depth={depth + 1}
              onSelect={onSelect}
              selected={selected}
              searchQuery={searchQuery}
              onlyNew={onlyNew}
              expandAllToggle={expandAllToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
