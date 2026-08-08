import type { LawDocument } from '@/types';

export const nd93: LawDocument = {
  id: 'nghi-dinh-93-2026',
  title: 'Nghị định số 93/2026/NĐ-CP',
  shortTitle: 'Nghị định 93/2026',
  code: '93/2026/NĐ-CP',
  summary: 'Quy định chi tiết và hướng dẫn thi hành Luật Nhà giáo về chế độ tiền lương, phụ cấp ưu đãi, chuẩn đào tạo và ưu tiên điểm tuyển dụng nhà giáo.',
  icon: '📋',
  color: 'from-purple-500 to-violet-600',
  chapters: [
    {
      number: 'Chương III',
      title: 'Tuyển dụng và ưu tiên đối với nhà giáo',
      articles: [
        {
          id: 'nd93-d6',
          number: 'Điều 6',
          title: 'Chính sách ưu tiên điểm trong tuyển dụng nhà giáo',
          content: 'Người có thời gian giảng dạy thực tế từ đủ 03 năm (36 tháng) trở lên, có đóng bảo hiểm xã hội bắt buộc phù hợp với vị trí tuyển dụng được cộng 05 điểm vào kết quả thi Vòng 2.',
          summary: ['Giáo viên hợp đồng có thâm niên từ 3 năm (36 tháng) trở lên được ưu tiên.', 'Cộng trực tiếp 5 điểm vào kết quả thi Vòng 2 chuyên ngành.'],
          examFocus: 'Mẹo nhớ: Thâm niên giảng dạy từ 36 tháng trở lên = Cộng 5 điểm Vòng 2. Chỉ tính thâm niên có đóng BHXH bắt buộc.',
        },
        {
          id: 'nd93-d7',
          number: 'Điều 7',
          title: 'Nội dung và hình thức thi tuyển nhà giáo',
          content: 'Vòng 1 trắc nghiệm máy tính gồm 2 phần: Phần I: Kiến thức chung (60 câu / 60 phút) về pháp luật nhà giáo, giáo dục; Phần II: Ngoại ngữ (30 câu / 30 phút). Nếu vị trí việc làm không yêu cầu ngoại ngữ trong bản mô tả thì không phải thi Phần II.',
          summary: ['Quy định chi tiết Vòng 1 của thi tuyển giáo viên.', 'Trường hợp không yêu cầu ngoại ngữ trong khung năng lực vị trí việc làm thì miễn thi Phần II ngoại ngữ.'],
          examFocus: 'Thời gian thi ngoại ngữ Vòng 1 là 30 phút với 30 câu hỏi (trả lời đúng từ 15 câu trở lên thì đạt phần thi ngoại ngữ).',
        },
      ],
    },
  ],
};
