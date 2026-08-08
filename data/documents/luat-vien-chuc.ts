import type { LawDocument } from '@/types';

export const luatVienChuc: LawDocument = {
  id: 'luat-vien-chuc-2025',
  title: 'Luật Viên chức số 129/2025/QH15',
  shortTitle: 'Luật Viên chức 2025',
  code: '129/2025/QH15',
  summary: 'Cập nhật toàn diện các quy định về nghĩa vụ, quyền lợi của viên chức, nâng cao tính tự chủ cho đơn vị sự nghiệp và cải cách cơ chế tuyển dụng hợp đồng.',
  icon: '⚖️',
  color: 'from-green-500 to-teal-600',
  chapters: [
    {
      number: 'Chương I',
      title: 'Những quy định chung',
      articles: [
        {
          id: 'lvc-d2',
          number: 'Điều 2',
          title: 'Viên chức là gì?',
          content: 'Viên chức là công dân Việt Nam được tuyển dụng theo vị trí việc làm, làm việc tại đơn vị sự nghiệp công lập theo chế độ hợp đồng làm việc, hưởng lương từ quỹ lương của đơn vị sự nghiệp công lập theo quy định của pháp luật.',
          summary: ['Viên chức bắt buộc phải là công dân Việt Nam.', 'Làm việc theo chế độ hợp đồng làm việc.', 'Hưởng lương từ quỹ lương của đơn vị công lập.'],
          examFocus: 'Phân biệt: Công chức làm trong cơ quan nhà nước hành chính hưởng lương từ ngân sách nhà nước. Viên chức làm tại đơn vị sự nghiệp công lập (trường học, bệnh viện) hưởng lương từ quỹ lương của đơn vị.',
        },
      ],
    },
    {
      number: 'Chương II',
      title: 'Nghĩa vụ, quyền của viên chức',
      articles: [
        {
          id: 'lvc-d14',
          number: 'Điều 14',
          title: 'Quyền hoạt động nghề nghiệp ngoài thời gian làm việc',
          content: '1. Được hoạt động nghề nghiệp ngoài thời gian làm việc ghi trong hợp đồng làm việc, trừ trường hợp pháp luật có quy định khác. 2. Được ký hợp đồng vụ việc với cơ quan, tổ chức, đơn vị khác mà pháp luật không cấm nhưng phải bảo đảm hoàn thành nhiệm vụ được giao và có sự đồng ý của người đứng đầu đơn vị sự nghiệp công lập.',
          summary: ['Được làm thêm ngoài giờ.', 'Được ký hợp đồng ngắn hạn bên ngoài nhưng phải có sự đồng ý của Hiệu trưởng.'],
          examFocus: 'Bẫy đề thi: Viên chức được làm thêm, làm kinh doanh ngoài giờ nhưng KHÔNG ĐƯỢC đứng tên thành lập doanh nghiệp hoặc tham gia quản lý điều hành doanh nghiệp tư nhân theo Luật Phòng chống tham nhũng.',
        },
      ],
    },
    {
      number: 'Chương III',
      title: 'Tuyển dụng, sử dụng viên chức',
      articles: [
        {
          id: 'lvc-d20',
          number: 'Điều 20',
          title: 'Hợp đồng làm việc đối với viên chức',
          content: '1. Hợp đồng làm việc đối với viên chức bao gồm hợp đồng xác định thời hạn và hợp đồng không xác định thời hạn. 2. Hợp đồng làm việc là thỏa thuận bằng văn bản giữa người được tuyển dụng với người đứng đầu đơn vị sự nghiệp công lập.',
          summary: ['Vẫn giữ hai loại hợp đồng làm việc.', 'Mọi giáo viên mới tuyển dụng đều ký hợp đồng làm việc trực tiếp.'],
          examFocus: 'Xem chi tiết tại Nghị định 259/2026 về việc nới lỏng ký hợp đồng không xác định thời hạn đối với viên chức đã ký hợp đồng xác định thời hạn từ 2 lần trở lên.',
        },
      ],
    },
  ],
};
