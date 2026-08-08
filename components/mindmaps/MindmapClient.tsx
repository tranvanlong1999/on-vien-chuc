'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Node { id: string; label: string; details?: string; isNew?: boolean; children?: Node[] }

const mindmapsData: Record<string, { title: string; root: Node }> = {
  'tuyen-dung': {
    title: 'Quy trình tuyển dụng Viên chức 2026',
    root: {
      id: 'root', label: 'Tuyển dụng Viên chức (NĐ 259/2026)', children: [
        { id: 'vong1', label: 'Vòng 1 — Kiến thức chung', details: '60 câu trắc nghiệm / 60 phút. Đạt từ 30 câu (50%) trở lên. Thi trên máy tính.', isNew: true, children: [
          { id: 'nn', label: 'Phần Ngoại ngữ', details: '30 câu / 30 phút. Đạt từ 15 câu. Miễn thi nếu vị trí không yêu cầu ngoại ngữ.', isNew: true },
        ]},
        { id: 'vong2', label: 'Vòng 2 — Nghiệp vụ chuyên ngành', details: 'Điểm đạt từ 50/100 trở lên. Hình thức: Viết (180 phút) hoặc Phỏng vấn (30 phút) hoặc Thực hành.' },
        { id: 'uu-tien', label: 'Ưu tiên điểm (NĐ 93/2026)', details: 'Thâm niên giảng dạy ≥ 36 tháng + đóng BHXH bắt buộc → Cộng 5 điểm Vòng 2.', isNew: true },
        { id: 'nhan-viec', label: 'Nhận việc — KHÔNG còn tập sự', details: 'Ký hợp đồng trong 5 ngày làm việc. Hưởng 100% lương ngay từ ngày đầu. Chế độ tập sự BỊ BÃI BỎ hoàn toàn từ 01/07/2026.', isNew: true },
      ]
    }
  },
  'chuan-nghe-nghiep': {
    title: 'Chuẩn nghề nghiệp GV Tiểu học (TT30/2026)',
    root: {
      id: 'root', label: 'Chuẩn nghề nghiệp GV (5 tiêu chuẩn — 15 tiêu chí)', children: [
        { id: 'tc1', label: 'TC1: Phẩm chất nghề nghiệp (3 tiêu chí)', details: 'Đạo đức nghề nghiệp — Phong cách nhà giáo — Tư tưởng chính trị.' },
        { id: 'tc2', label: 'TC2: Năng lực chuyên môn (6 tiêu chí)', details: 'Kế hoạch DH — Thực hiện DH — Kiểm tra ĐG — Tư vấn HS — Sử dụng CNTT — Sử dụng Ngoại ngữ.', isNew: true, children: [
          { id: 'cntt', label: 'Ứng dụng CNTT trong dạy học', details: 'Sử dụng phần mềm tương tác, bài giảng điện tử, AI trong thiết kế nội dung học.', isNew: true },
        ]},
        { id: 'tc3', label: 'TC3: Môi trường giáo dục (3 tiêu chí)', details: 'Môi trường vật chất — Văn hóa ứng xử — Phòng chống bạo lực học đường.' },
        { id: 'tc4', label: 'TC4: Quan hệ xã hội (3 tiêu chí)', details: 'Phối hợp cha mẹ — Phối hợp cộng đồng — Phát triển đồng nghiệp.' },
        { id: 'tc5', label: 'TC5: Phát triển bản thân (3 tiêu chí)', details: 'Tự bồi dưỡng — Hoạt động chuyên môn — Nghiên cứu khoa học.' },
      ]
    }
  },
  'quyen-nghia-vu': {
    title: 'Quyền & Nghĩa vụ Nhà giáo (Luật 73/2025)',
    root: {
      id: 'root', label: 'Nhà giáo — Quyền & Nghĩa vụ', children: [
        { id: 'quyen', label: 'Quyền của nhà giáo (Điều 9)', children: [
          { id: 'q1', label: 'Tự chủ chuyên môn', details: 'Được lựa chọn phương pháp giảng dạy phù hợp với đặc điểm học sinh.' },
          { id: 'q2', label: 'Lương cao nhất', details: 'Lương xếp cao nhất bảng lương hành chính sự nghiệp + phụ cấp ưu đãi nghề.', isNew: true },
          { id: 'q3', label: 'Bảo vệ danh dự', details: 'Được tôn trọng và bảo vệ nhân phẩm, danh dự, thân thể khi làm nhiệm vụ.' },
        ]},
        { id: 'nghia-vu', label: 'Nghĩa vụ của nhà giáo (Điều 10)', children: [
          { id: 'n1', label: 'Thực hiện đúng chương trình', details: 'Không tự ý bớt xén, thay đổi chương trình GDPT đã được phê duyệt.' },
          { id: 'n2', label: 'Tôn trọng người học', details: 'Không xúc phạm danh dự, nhân phẩm, bạo hành học sinh dưới bất kỳ hình thức nào.' },
          { id: 'n3', label: 'Học tập suốt đời', details: 'Tự bồi dưỡng nâng cao chuyên môn nghiệp vụ là nghĩa vụ, không chỉ là quyền lợi.' },
        ]},
      ]
    }
  },
};

export function MindmapClient() {
  const [mapId, setMapId] = useState('tuyen-dung');
  const [selected, setSelected] = useState<Node | null>(null);
  const map = mindmapsData[mapId];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-slate-800">Sơ đồ tư duy</h1>
      <div className="flex gap-2 flex-wrap">
        {Object.entries(mindmapsData).map(([id, m]) => (
          <button key={id} onClick={() => { setMapId(id); setSelected(null); }}
            className={cn('px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors', mapId === id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200')}>
            {m.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 card p-4 max-h-[75vh] overflow-y-auto">
          <NodeTree node={map.root} depth={0} onSelect={setSelected} selected={selected} />
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

function NodeTree({ node, depth, onSelect, selected }: { node: Node; depth: number; onSelect: (n: Node) => void; selected: Node | null }) {
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
