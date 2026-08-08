'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mindmaps } from '@/data/mindmaps';
import type { MindmapNode } from '@/types';

const mindmapsMap = Object.fromEntries(mindmaps.map((m) => [m.id, m]));

export function MindmapClient() {
  const [mapId, setMapId] = useState(mindmaps[0]?.id ?? '');
  const [selected, setSelected] = useState<MindmapNode | null>(null);
  const map = mindmapsMap[mapId];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-slate-800">Sơ đồ tư duy</h1>
      <div className="flex gap-2 flex-wrap">
        {mindmaps.map((m) => (
          <button key={m.id} onClick={() => { setMapId(m.id); setSelected(null); }}
            className={cn('px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors', mapId === m.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
            {m.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 card p-4 max-h-[75vh] overflow-y-auto">
          {map && <NodeTree node={map.root} depth={0} onSelect={setSelected} selected={selected} />}
        </div>
        <div className="card p-5">
          {selected ? (
            <div className="animate-slide-up space-y-3">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-indigo-600" />
                <h3 className="font-bold text-slate-800 text-sm">{selected.label}</h3>
                {selected.isNew && <span className="badge-new">Mới 2026</span>}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{selected.details || 'Bấm vào các nút có biểu tượng thông tin để xem chi tiết.'}</p>
            </div>
          ) : (
            <div className="text-center text-slate-400 py-8">
              <Info className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm">Chọn một nút trong sơ đồ để xem chi tiết pháp lý</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NodeTree({ node, depth, onSelect, selected }: { node: MindmapNode; depth: number; onSelect: (n: MindmapNode) => void; selected: MindmapNode | null }) {
  const [open, setOpen] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selected?.id === node.id;

  return (
    <div className={cn('ml-0', depth > 0 && 'ml-4 border-l border-slate-100 pl-3 mt-1')}>
      <button onClick={() => { if (hasChildren) setOpen((o) => !o); if (node.details) onSelect(node); }}
        className={cn('flex items-center gap-2 w-full text-left py-1.5 px-2 rounded-lg text-sm transition-colors group', isSelected ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50')}>
        {hasChildren ? (open ? <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />) : <span className="w-3.5 h-3.5 shrink-0 rounded-full bg-slate-200 inline-block" />}
        <span className={cn('font-medium', depth === 0 && 'font-bold text-indigo-700')}>{node.label}</span>
        {node.isNew && <span className="badge-new">Mới</span>}
        {node.details && <Info className="w-3 h-3 text-slate-300 group-hover:text-indigo-400 shrink-0 ml-auto" />}
      </button>
      {hasChildren && open && node.children!.map((child) => (
        <NodeTree key={child.id} node={child} depth={depth + 1} onSelect={onSelect} selected={selected} />
      ))}
    </div>
  );
}
