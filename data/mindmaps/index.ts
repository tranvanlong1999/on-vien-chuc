import type { Mindmap } from '@/types';

export const mindmaps: Mindmap[] = [
  {
    id: 'luat-nha-giao',
    title: 'Luật Nhà giáo 73/2025/QH15',
    root: {
      id: 'root-lng',
      label: 'Luật Nhà giáo 73/2025 — Tổng quan',
      details: 'Luật Nhà giáo số 73/2025/QH15, có hiệu lực từ 01/07/2026, thay thế các quy định rải rác về nhà giáo trong nhiều luật trước đây.',
      children: [
        {
          id: 'lng-khai-niem',
          label: 'Khái niệm nhà giáo (Điều 3)',
          details: 'Nhà giáo là người làm nhiệm vụ giảng dạy, giáo dục tại cơ sở giáo dục, ký hợp đồng làm việc theo quy định của pháp luật về viên chức hoặc lao động.',
          children: [
            {
              id: 'lng-kn-dk',
              label: 'Điều kiện là nhà giáo',
              details: 'Có bằng cấp chuyên môn phù hợp, có chứng chỉ hành nghề còn hiệu lực, đang ký hợp đồng làm việc tại cơ sở giáo dục được công nhận.',
            },
            {
              id: 'lng-kn-pham-vi',
              label: 'Phạm vi áp dụng',
              details: 'Áp dụng cho nhà giáo tại cơ sở giáo dục công lập và ngoài công lập từ bậc mầm non đến đại học trên toàn quốc.',
            },
          ],
        },
        {
          id: 'lng-quyen',
          label: 'Quyền của nhà giáo (Điều 9)',
          details: 'Nhà giáo được bảo đảm các quyền về tự chủ chuyên môn, tiền lương, danh dự và thời gian nghỉ ngơi theo quy định của Luật.',
          children: [
            {
              id: 'lng-q-tu-chu',
              label: 'Tự chủ chuyên môn',
              details: 'Được quyền lựa chọn phương pháp giảng dạy phù hợp với đặc điểm học sinh và điều kiện thực tế, không bị áp đặt cứng nhắc về phương pháp.',
            },
            {
              id: 'lng-q-luong',
              label: 'Lương cao nhất bảng HCSN',
              details: 'Lương của nhà giáo được xếp cao nhất trong hệ thống bảng lương hành chính sự nghiệp, cộng thêm phụ cấp ưu đãi nghề theo từng cấp học.',
              isNew: true,
            },
            {
              id: 'lng-q-danh-du',
              label: 'Bảo vệ danh dự',
              details: 'Được tôn trọng và bảo vệ nhân phẩm, danh dự, thân thể trong và ngoài môi trường giáo dục khi thực hiện nhiệm vụ chuyên môn.',
            },
            {
              id: 'lng-q-nghi-he',
              label: 'Nghỉ hè 8 tuần',
              details: 'Nhà giáo được nghỉ hè 8 tuần/năm (tăng so với trước), được hưởng nguyên lương và phụ cấp trong thời gian nghỉ hè.',
              isNew: true,
            },
          ],
        },
        {
          id: 'lng-nghia-vu',
          label: 'Nghĩa vụ (Điều 10)',
          details: 'Nhà giáo có nghĩa vụ thực hiện đúng chương trình, tôn trọng người học, học tập suốt đời và không được dạy thêm trái phép.',
          children: [
            {
              id: 'lng-nv-ct',
              label: 'Thực hiện đúng chương trình',
              details: 'Không được tự ý bớt xén, thay đổi nội dung trong chương trình giáo dục phổ thông đã được Bộ GD&ĐT phê duyệt.',
            },
            {
              id: 'lng-nv-ton-trong',
              label: 'Tôn trọng người học',
              details: 'Không được xúc phạm danh dự, nhân phẩm, bạo hành học sinh dưới bất kỳ hình thức nào — ngôn ngữ, thể xác hay tinh thần.',
            },
            {
              id: 'lng-nv-hoc-tap',
              label: 'Học tập suốt đời',
              details: 'Tự bồi dưỡng nâng cao chuyên môn nghiệp vụ là nghĩa vụ bắt buộc, không chỉ là quyền lợi; hoàn thành đủ giờ bồi dưỡng theo quy định.',
            },
            {
              id: 'lng-nv-day-them',
              label: 'Không dạy thêm trái phép',
              details: 'Nghiêm cấm dạy thêm có thu phí đối với học sinh đang trực tiếp giảng dạy mà không được sự đồng ý của hiệu trưởng và phụ huynh.',
            },
          ],
        },
        {
          id: 'lng-cam',
          label: 'Hành vi bị nghiêm cấm (Điều 11)',
          details: 'Điều 11 quy định 5 nhóm hành vi bị nghiêm cấm đối với nhà giáo, vi phạm có thể bị xử lý kỷ luật đến buộc thôi việc và thu hồi chứng chỉ hành nghề.',
          children: [
            { id: 'lng-cam-xp', label: 'Xúc phạm học sinh', details: 'Nghiêm cấm mọi hành vi xúc phạm danh dự, nhân phẩm học sinh bằng lời nói, hành động, hoặc trên không gian mạng.' },
            { id: 'lng-cam-bh', label: 'Bạo hành', details: 'Cấm bạo hành thể xác và tinh thần học sinh dưới mọi hình thức, kể cả việc trừng phạt dưới danh nghĩa giáo dục.' },
            { id: 'lng-cam-gian-lan', label: 'Gian lận thi cử', details: 'Cấm gian lận trong kiểm tra, thi cử dưới mọi hình thức, bao gồm sửa điểm, lộ đề thi, tiếp tay cho học sinh gian lận.' },
            { id: 'lng-cam-loi-dung', label: 'Lợi dụng chức vụ', details: 'Cấm lợi dụng vị trí công tác để trục lợi cá nhân, nhận hối lộ, ép buộc phụ huynh hoặc học sinh mua dịch vụ.' },
            { id: 'lng-cam-pb', label: 'Phân biệt đối xử', details: 'Cấm phân biệt đối xử với học sinh dựa trên dân tộc, tôn giáo, giới tính, hoàn cảnh gia đình, kết quả học tập.' },
          ],
        },
        {
          id: 'lng-tuyen-dung',
          label: 'Tuyển dụng nhà giáo (Điều 15–18)',
          details: 'Luật 73/2025 quy định ưu tiên tuyển dụng người có thâm niên giảng dạy ≥36 tháng, cộng 5 điểm Vòng 2, và bãi bỏ hoàn toàn chế độ tập sự.',
          isNew: true,
          children: [
            {
              id: 'lng-td-uu-tien',
              label: 'Ưu tiên thâm niên ≥36 tháng',
              details: 'Người có thâm niên giảng dạy từ 36 tháng trở lên và đã đóng BHXH bắt buộc được cộng thêm 5 điểm vào kết quả Vòng 2 tuyển dụng.',
              isNew: true,
            },
            {
              id: 'lng-td-bo-tap-su',
              label: 'KHÔNG còn tập sự',
              details: 'Bãi bỏ hoàn toàn chế độ tập sự (trước đây 12 tháng); nhà giáo được tuyển dụng nhận việc ngay, ký hợp đồng làm việc và hưởng 100% lương từ ngày đầu.',
              isNew: true,
            },
            {
              id: 'lng-td-hinh-thuc',
              label: 'Hình thức tuyển dụng',
              details: 'Tuyển dụng qua thi tuyển hoặc xét tuyển (đối với vùng có điều kiện KT-XH đặc biệt khó khăn); quy trình gồm 2 vòng: Kiến thức chung và Nghiệp vụ.',
            },
          ],
        },
        {
          id: 'lng-chung-chi',
          label: 'Chứng chỉ hành nghề (Điều 20–21)',
          details: 'Từ 01/07/2026, nhà giáo bắt buộc phải có chứng chỉ hành nghề còn hiệu lực do Bộ GD&ĐT cấp — điều kiện tiên quyết để ký hợp đồng làm việc.',
          isNew: true,
          children: [
            {
              id: 'lng-cc-cap',
              label: 'Điều kiện và cơ quan cấp',
              details: 'Do Bộ GD&ĐT cấp; điều kiện: có bằng cử nhân sư phạm hoặc bằng cử nhân chuyên ngành + chứng chỉ nghiệp vụ sư phạm, không vi phạm kỷ luật từ cảnh cáo trở lên.',
              isNew: true,
            },
            {
              id: 'lng-cc-thoi-han',
              label: 'Thời hạn và gia hạn',
              details: 'Chứng chỉ có thời hạn nhất định (theo quy định của Nghị định hướng dẫn); cần bồi dưỡng và gia hạn định kỳ; bị thu hồi khi vi phạm nghiêm trọng.',
              isNew: true,
            },
          ],
        },
        {
          id: 'lng-dai-ngo',
          label: 'Chính sách đãi ngộ (Điều 29–33)',
          details: 'Nhà giáo được hưởng chính sách lương ưu đãi, phụ cấp thâm niên, nhà ở công vụ tại vùng khó khăn và các chính sách hỗ trợ đặc thù.',
          children: [
            { id: 'lng-dn-luong', label: 'Lương ưu đãi', details: 'Lương xếp cao nhất bảng lương HCSN, cộng phụ cấp ưu đãi nghề: 25-70% tùy cấp học và vùng công tác.' },
            { id: 'lng-dn-thamni', label: 'Phụ cấp thâm niên', details: 'Phụ cấp thâm niên được tính từ năm thứ 5 trở đi (5%), tăng 1%/năm; không bị giới hạn trần.' },
            { id: 'lng-dn-nha', label: 'Nhà ở công vụ vùng khó khăn', details: 'Nhà giáo công tác tại vùng đặc biệt khó khăn được bố trí nhà ở công vụ hoặc hỗ trợ thuê nhà theo quy định của địa phương.' },
          ],
        },
        {
          id: 'lng-ky-luat',
          label: 'Kỷ luật nhà giáo (Điều 37–39)',
          details: 'Có 4 hình thức kỷ luật nhà giáo; thời hiệu xử lý kỷ luật là 5 năm kể từ ngày vi phạm (trừ các trường hợp đặc biệt liên quan đến tham nhũng).',
          children: [
            {
              id: 'lng-kl-hinh-thuc',
              label: '4 hình thức kỷ luật',
              details: '(1) Khiển trách — (2) Cảnh cáo — (3) Hạ bậc lương (chỉ áp dụng với viên chức) — (4) Buộc thôi việc kèm thu hồi chứng chỉ hành nghề.',
            },
            {
              id: 'lng-kl-thoi-hieu',
              label: 'Thời hiệu 5 năm',
              details: 'Thời hiệu xử lý kỷ luật là 5 năm; riêng vi phạm gây hậu quả đặc biệt nghiêm trọng hoặc liên quan đến tham nhũng không có thời hiệu.',
            },
          ],
        },
      ],
    },
  },

  {
    id: 'luat-vien-chuc',
    title: 'Luật Viên chức 129/2025/QH15',
    root: {
      id: 'root-lvc',
      label: 'Luật Viên chức 129/2025 — Tổng quan',
      details: 'Luật Viên chức số 129/2025/QH15 sửa đổi, bổ sung nhiều quy định về tuyển dụng, quản lý, kỷ luật viên chức; có hiệu lực từ 01/07/2026.',
      children: [
        {
          id: 'lvc-khai-niem',
          label: 'Khái niệm (Điều 1)',
          details: 'Viên chức là công dân Việt Nam được tuyển dụng theo vị trí việc làm, làm việc tại đơn vị sự nghiệp công lập theo chế độ hợp đồng làm việc — KHÔNG phải công chức.',
          children: [
            { id: 'lvc-kn-phan-biet', label: 'Phân biệt viên chức và công chức', details: 'Viên chức làm việc tại đơn vị sự nghiệp, ký hợp đồng làm việc; công chức làm việc trong cơ quan hành chính nhà nước, được bổ nhiệm vào ngạch.' },
          ],
        },
        {
          id: 'lvc-don-vi',
          label: 'Đơn vị sự nghiệp (Điều 8)',
          details: 'Mỗi viên chức chỉ được làm việc chính thức tại MỘT đơn vị sự nghiệp công lập; không được ký hợp đồng làm việc đồng thời với nhiều đơn vị.',
          isNew: true,
          children: [
            { id: 'lvc-du-mot-don-vi', label: 'Nguyên tắc một đơn vị', details: 'Viên chức làm việc kiêm nhiệm tại đơn vị khác phải được sự đồng ý của cơ quan quản lý trực tiếp và không được tính là hợp đồng làm việc chính thức.', isNew: true },
          ],
        },
        {
          id: 'lvc-phan-loai',
          label: 'Phân loại viên chức (Điều 6–7)',
          details: 'Viên chức được phân loại theo chức danh nghề nghiệp gồm 4 hạng: Hạng I (tương đương chuyên viên cao cấp), Hạng II, Hạng III, Hạng IV.',
          children: [
            { id: 'lvc-pl-hang1', label: 'Hạng I', details: 'Yêu cầu trình độ tiến sĩ hoặc thạc sĩ + kinh nghiệm; đối với GV tiểu học là Hạng I nếu có thạc sĩ và nhiều năm kinh nghiệm.' },
            { id: 'lvc-pl-hang2', label: 'Hạng II', details: 'Yêu cầu trình độ đại học phù hợp + thời gian công tác nhất định; là hạng phổ biến nhất với GV tiểu học có bằng đại học.' },
            { id: 'lvc-pl-hang3', label: 'Hạng III–IV', details: 'Hạng III yêu cầu cao đẳng; Hạng IV yêu cầu trung cấp; áp dụng với một số vị trí hỗ trợ trong cơ sở giáo dục.' },
          ],
        },
        {
          id: 'lvc-quyen',
          label: 'Quyền của viên chức (Điều 11–14)',
          details: 'Viên chức có quyền tham gia hoạt động nghề nghiệp, được đào tạo bồi dưỡng, tham gia bầu cử và các quyền công dân khác theo pháp luật.',
          children: [
            { id: 'lvc-q-hd', label: 'Hoạt động nghề nghiệp', details: 'Được tham gia các hoạt động chuyên môn, nghiên cứu khoa học, trao đổi học thuật trong và ngoài đơn vị theo quy định.' },
            { id: 'lvc-q-dt', label: 'Đào tạo bồi dưỡng', details: 'Được tham gia đào tạo, bồi dưỡng để nâng cao trình độ; được hỗ trợ chi phí bồi dưỡng bắt buộc từ ngân sách nhà nước.' },
          ],
        },
        {
          id: 'lvc-nghia-vu',
          label: 'Nghĩa vụ (Điều 16–17)',
          details: 'Viên chức có nghĩa vụ chấp hành quyết định của cơ quan có thẩm quyền, thực hiện đúng nhiệm vụ được giao và bảo mật thông tin theo quy định.',
          children: [
            { id: 'lvc-nv-chap-hanh', label: 'Chấp hành quyết định', details: 'Phải chấp hành quyết định của người đứng đầu đơn vị; nếu có căn cứ cho rằng quyết định trái pháp luật thì phải phản ánh ngay, nhưng vẫn thực hiện.' },
            { id: 'lvc-nv-bao-mat', label: 'Bảo mật thông tin', details: 'Không được tiết lộ thông tin liên quan đến bí mật công tác, thông tin cá nhân của đồng nghiệp và người học khi chưa được phép.' },
          ],
        },
        {
          id: 'lvc-danh-gia',
          label: 'Đánh giá viên chức (Điều 24–26)',
          details: 'Viên chức được đánh giá theo 4 mức hàng năm; kết quả đánh giá là căn cứ để xét thăng hạng, khen thưởng hoặc xử lý kỷ luật.',
          children: [
            { id: 'lvc-dg-m1', label: 'Hoàn thành xuất sắc nhiệm vụ', details: 'Mức cao nhất; là cơ sở để xét thăng hạng, khen thưởng, ưu tiên trong các chính sách đãi ngộ.' },
            { id: 'lvc-dg-m2', label: 'Hoàn thành tốt nhiệm vụ', details: 'Mức phổ biến; đủ điều kiện tham gia các hoạt động bình thường, xét nâng bậc lương đúng hạn.' },
            { id: 'lvc-dg-m3', label: 'Hoàn thành nhiệm vụ (Đạt)', details: 'Hoàn thành nhiệm vụ cơ bản; không đủ điều kiện xét thăng hạng trong năm đó.' },
            { id: 'lvc-dg-m4', label: 'Không hoàn thành nhiệm vụ', details: 'Căn cứ để xem xét kỷ luật; 2 năm liên tiếp không hoàn thành có thể bị chấm dứt hợp đồng làm việc.' },
          ],
        },
        {
          id: 'lvc-ky-luat',
          label: 'Kỷ luật (Điều 35–36)',
          details: 'Có 4 hình thức kỷ luật viên chức; thời hiệu 5 năm (2 năm với vi phạm ít nghiêm trọng) và 10 năm với tham nhũng, lãng phí.',
          isNew: true,
          children: [
            { id: 'lvc-kl-hinh-thuc', label: '4 hình thức kỷ luật', details: '(1) Khiển trách — (2) Cảnh cáo — (3) Hạ bậc lương — (4) Buộc thôi việc; áp dụng tùy mức độ, tính chất vi phạm.' },
            {
              id: 'lvc-kl-thoi-hieu',
              label: 'Thời hiệu kỷ luật',
              details: 'Thời hiệu 5 năm với vi phạm thông thường; 2 năm với vi phạm ít nghiêm trọng; 10 năm với vi phạm liên quan đến tham nhũng, lãng phí — quy định mới 2026.',
              isNew: true,
            },
          ],
        },
        {
          id: 'lvc-thang-hang',
          label: 'Thăng hạng (Điều 28–29)',
          details: 'Viên chức được thăng hạng thông qua thi tuyển hoặc xét thăng hạng; điều kiện bắt buộc là có bằng cấp phù hợp với hạng muốn thăng.',
          children: [
            { id: 'lvc-th-thi', label: 'Thi thăng hạng', details: 'Tổ chức thi tập trung do cơ quan có thẩm quyền tổ chức; gồm thi kiến thức chuyên môn và năng lực quản lý (với hạng cao).' },
            { id: 'lvc-th-xet', label: 'Xét thăng hạng', details: 'Áp dụng với trường hợp đặc biệt có thành tích xuất sắc liên tục ≥3 năm; do hội đồng xét thăng hạng quyết định.' },
          ],
        },
      ],
    },
  },

  {
    id: 'nd-93-2026',
    title: 'NĐ 93/2026/NĐ-CP (hướng dẫn Luật Nhà giáo)',
    root: {
      id: 'root-nd93',
      label: 'NĐ 93/2026 — Hướng dẫn thi hành Luật Nhà giáo',
      details: 'Nghị định 93/2026/NĐ-CP của Chính phủ hướng dẫn chi tiết thi hành Luật Nhà giáo 73/2025, quy định cụ thể về tuyển dụng, chứng chỉ hành nghề và chính sách đặc thù.',
      children: [
        {
          id: 'nd93-uu-tien',
          label: 'Tuyển dụng ưu tiên (Điều 8)',
          details: 'Người có thâm niên giảng dạy ≥36 tháng và đã đóng BHXH bắt buộc được cộng thêm 5 điểm vào kết quả Vòng 2 tuyển dụng viên chức ngành giáo dục.',
          isNew: true,
          children: [
            {
              id: 'nd93-ut-dieu-kien',
              label: 'Điều kiện hưởng ưu tiên',
              details: 'Phải có hợp đồng lao động, quyết định phân công giảng dạy và sổ BHXH chứng minh thời gian tham gia BHXH liên tục ≥36 tháng tính đến ngày nộp hồ sơ.',
              isNew: true,
            },
            {
              id: 'nd93-ut-muc',
              label: 'Mức cộng điểm',
              details: 'Cộng 5 điểm vào tổng điểm Vòng 2; điểm ưu tiên này không cộng vào Vòng 1 và không thay thế điểm sàn tối thiểu 50/100.',
              isNew: true,
            },
          ],
        },
        {
          id: 'nd93-bo-tap-su',
          label: 'Bãi bỏ tập sự (Điều 16)',
          details: 'Chính thức bãi bỏ thời gian tập sự 12 tháng; nhà giáo được tuyển dụng nhận việc ngay, ký hợp đồng làm việc và hưởng 100% mức lương theo ngạch, bậc.',
          isNew: true,
          children: [
            {
              id: 'nd93-ts-ky-hd',
              label: 'Ký hợp đồng trong 5 ngày',
              details: 'Trong 5 ngày làm việc kể từ ngày có quyết định tuyển dụng, đơn vị phải ký hợp đồng làm việc; nhà giáo được hưởng 100% lương từ ngày ký hợp đồng.',
              isNew: true,
            },
          ],
        },
        {
          id: 'nd93-chung-chi',
          label: 'Chứng chỉ hành nghề (Điều 19–22)',
          details: 'Quy định chi tiết về điều kiện cấp, thời hạn hiệu lực, thủ tục gia hạn và các trường hợp bị thu hồi chứng chỉ hành nghề nhà giáo.',
          isNew: true,
          children: [
            {
              id: 'nd93-cc-dieu-kien',
              label: 'Điều kiện cấp chứng chỉ',
              details: 'Có bằng đại học sư phạm hoặc bằng đại học chuyên ngành + chứng chỉ nghiệp vụ sư phạm; không đang trong thời gian bị đình chỉ hành nghề hoặc chấp hành kỷ luật.',
              isNew: true,
            },
            {
              id: 'nd93-cc-thoi-han',
              label: 'Thời hạn và gia hạn',
              details: 'Thời hạn hiệu lực theo quy định của Bộ GD&ĐT; gia hạn phải hoàn thành chương trình bồi dưỡng bắt buộc; nộp hồ sơ gia hạn trước khi hết hạn ít nhất 30 ngày.',
              isNew: true,
            },
            {
              id: 'nd93-cc-thu-hoi',
              label: 'Thu hồi chứng chỉ',
              details: 'Bị thu hồi khi bị kỷ luật buộc thôi việc, bị tòa án kết tội liên quan đến nghề nghiệp, hoặc không đủ sức khỏe theo quy định.',
              isNew: true,
            },
          ],
        },
        {
          id: 'nd93-danh-gia',
          label: 'Đánh giá nhà giáo (Điều 25)',
          details: 'Đánh giá nhà giáo theo 4 mức cuối năm học, kết hợp chuẩn nghề nghiệp giáo viên tiểu học theo TT 30/2026/TT-BGDĐT.',
          children: [
            { id: 'nd93-dg-muc', label: '4 mức đánh giá', details: 'Tốt / Khá / Đạt / Chưa đạt; kết quả đánh giá phải thống nhất giữa tự đánh giá và đánh giá của tập thể, thủ trưởng đơn vị.' },
            { id: 'nd93-dg-chuan', label: 'Kết hợp chuẩn nghề nghiệp TT30', details: 'Kết quả đánh giá theo chuẩn nghề nghiệp TT30 là một trong những căn cứ quan trọng trong đánh giá viên chức cuối năm.' },
          ],
        },
        {
          id: 'nd93-chinh-sach',
          label: 'Chính sách đặc thù (Điều 26)',
          details: 'Nhà giáo công tác tại vùng đặc biệt khó khăn được hưởng phụ cấp vùng, nhà ở công vụ và hỗ trợ chuyển vùng khi luân chuyển.',
          children: [
            { id: 'nd93-cs-phu-cap', label: 'Phụ cấp vùng khó', details: 'Phụ cấp thu hút, phụ cấp đặc biệt từ 50-100% mức lương cơ bản; áp dụng với nhà giáo công tác tại xã đặc biệt khó khăn theo danh mục Chính phủ ban hành.' },
            { id: 'nd93-cs-nha', label: 'Nhà ở công vụ', details: 'Được bố trí nhà ở công vụ hoặc hỗ trợ thuê nhà; mức hỗ trợ tối thiểu bằng 70% tiền thuê nhà thực tế, tối đa theo quy định của UBND tỉnh.' },
            { id: 'nd93-cs-chuyen-vung', label: 'Hỗ trợ chuyển vùng', details: 'Hỗ trợ chi phí di chuyển, tạm trú khi được điều động, luân chuyển đến vùng khó khăn; thời gian luân chuyển tối thiểu 3 năm.' },
          ],
        },
      ],
    },
  },

  {
    id: 'nd-259-2026',
    title: 'NĐ 259/2026/NĐ-CP (tuyển dụng viên chức)',
    root: {
      id: 'root-nd259',
      label: 'NĐ 259/2026 — Tuyển dụng, sử dụng, quản lý Viên chức',
      details: 'Nghị định 259/2026/NĐ-CP thay thế 4 Nghị định cũ, quy định thống nhất về tuyển dụng, đào tạo, kỷ luật và quản lý viên chức từ 01/07/2026.',
      children: [
        {
          id: 'nd259-vong1',
          label: 'Vòng 1 — Kiến thức chung (Điều 14)',
          details: '60 câu trắc nghiệm / 60 phút, thi trên máy tính; đạt từ 30 câu (50%) trở lên mới được vào Vòng 2. Thi tập trung tại trung tâm thi được chứng nhận.',
          isNew: true,
          children: [
            {
              id: 'nd259-v1-ngoai-ngu',
              label: 'Phần Ngoại ngữ',
              details: '30 câu / 30 phút, đạt từ 15 câu trở lên; được miễn thi nếu vị trí việc làm không yêu cầu ngoại ngữ hoặc có chứng chỉ ngoại ngữ quốc tế được công nhận.',
              isNew: true,
            },
            {
              id: 'nd259-v1-noi-dung',
              label: 'Nội dung kiến thức chung',
              details: 'Bao gồm: kiến thức về pháp luật viên chức, hành chính nhà nước, đơn vị sự nghiệp; kiến thức về lĩnh vực chuyên ngành tổng quát.',
            },
          ],
        },
        {
          id: 'nd259-vong2',
          label: 'Vòng 2 — Nghiệp vụ (Điều 16)',
          details: 'Điểm đạt từ 50/100 trở lên; thực hiện bằng một trong ba hình thức: Viết (180 phút) hoặc Phỏng vấn (30 phút) hoặc Thực hành tùy vị trí việc làm.',
          children: [
            { id: 'nd259-v2-viet', label: 'Hình thức thi viết', details: 'Thời gian 180 phút; đề thi tự luận về chuyên môn nghiệp vụ; điểm do 2 giám khảo độc lập chấm, lấy điểm trung bình.' },
            { id: 'nd259-v2-phong-van', label: 'Hình thức phỏng vấn', details: 'Thời gian tối đa 30 phút; hội đồng phỏng vấn gồm ít nhất 3 thành viên; có chuẩn bị bài nói tối đa 5 phút trước khi phỏng vấn.' },
            { id: 'nd259-v2-thuc-hanh', label: 'Hình thức thực hành', details: 'Áp dụng cho vị trí yêu cầu kỹ năng thực tế (ví dụ: GV dạy thực nghiệm); thực hành theo bài tập tình huống được giao.' },
          ],
        },
        {
          id: 'nd259-thu-viec',
          label: 'Thời gian thử việc bãi bỏ (Điều 22–23)',
          details: 'Bãi bỏ hoàn toàn thời gian thử việc và tập sự; viên chức được tuyển dụng ký hợp đồng làm việc trong 5 ngày làm việc và hưởng 100% lương ngay từ đầu.',
          isNew: true,
          children: [
            {
              id: 'nd259-tv-ky-hd',
              label: 'Ký hợp đồng trong 5 ngày',
              details: 'Sau quyết định tuyển dụng, đơn vị sự nghiệp phải hoàn tất thủ tục và ký hợp đồng làm việc trong vòng 5 ngày làm việc; vi phạm sẽ bị xử lý hành chính.',
              isNew: true,
            },
            {
              id: 'nd259-tv-luong',
              label: 'Hưởng 100% lương ngay',
              details: 'Viên chức mới tuyển dụng hưởng 100% mức lương theo chức danh nghề nghiệp, bậc 1, cộng các phụ cấp theo quy định từ ngày ký hợp đồng làm việc.',
              isNew: true,
            },
          ],
        },
        {
          id: 'nd259-dao-tao',
          label: 'Đào tạo bồi dưỡng (Điều 30–34)',
          details: 'Viên chức bắt buộc tham gia bồi dưỡng theo yêu cầu vị trí việc làm; chi phí bồi dưỡng bắt buộc do NSNN hoặc đơn vị sự nghiệp chi trả.',
          children: [
            { id: 'nd259-dt-bat-buoc', label: 'Bồi dưỡng bắt buộc', details: 'Bao gồm: bồi dưỡng kiến thức quản lý nhà nước (theo hạng), bồi dưỡng chuyên môn nghiệp vụ (tối thiểu 40 tiết/năm), bồi dưỡng ngoại ngữ, tin học.' },
            { id: 'nd259-dt-tu-nguyen', label: 'Bồi dưỡng tự nguyện', details: 'Viên chức có thể tự đăng ký các khóa bồi dưỡng nâng cao; chi phí do viên chức tự chi trả nhưng được tính vào giờ bồi dưỡng hàng năm.' },
            { id: 'nd259-dt-chi-phi', label: 'Nguồn chi phí bồi dưỡng', details: 'Bồi dưỡng bắt buộc theo vị trí: NSNN chi trả hoặc quỹ của đơn vị sự nghiệp; bồi dưỡng nâng cao năng lực cá nhân: viên chức tự chi trả.' },
          ],
        },
        {
          id: 'nd259-ky-luat',
          label: 'Kỷ luật viên chức (Điều 40–48)',
          details: '4 hình thức kỷ luật viên chức: Khiển trách / Cảnh cáo / Hạ bậc lương / Buộc thôi việc; quy trình xử lý kỷ luật bắt buộc thành lập hội đồng kỷ luật.',
          children: [
            { id: 'nd259-kl-quy-trinh', label: 'Quy trình xử lý kỷ luật', details: 'Phải thành lập Hội đồng kỷ luật (ít nhất 5 thành viên); viên chức bị kỷ luật có quyền tự bào chữa hoặc nhờ luật sư; quyết định phải bằng văn bản.' },
            { id: 'nd259-kl-hoi-dong', label: 'Hội đồng kỷ luật', details: 'Gồm: Chủ tịch (thủ trưởng đơn vị hoặc người được ủy quyền), đại diện BCH Công đoàn, đại diện viên chức; họp trong 30 ngày kể từ khi nhận hồ sơ.' },
          ],
        },
        {
          id: 'nd259-thay-the',
          label: 'Thay thế 4 NĐ cũ (Điều 61)',
          details: 'NĐ 259/2026 thay thế và bãi bỏ 4 Nghị định cũ: NĐ 115/2020, NĐ 85/2023, NĐ 101/2017 và NĐ 89/2021 về tuyển dụng, quản lý viên chức.',
          isNew: true,
          children: [
            { id: 'nd259-tt-cu', label: 'Các NĐ bị thay thế', details: 'NĐ 115/2020 (tuyển dụng viên chức), NĐ 85/2023 (sửa đổi NĐ 115), NĐ 101/2017 (bồi dưỡng), NĐ 89/2021 (sửa đổi NĐ 101) — toàn bộ hết hiệu lực từ 01/07/2026.', isNew: true },
          ],
        },
      ],
    },
  },

  {
    id: 'tt03-ung-xu',
    title: 'TT 03/2026/TT-BGDĐT (quy tắc ứng xử)',
    root: {
      id: 'root-tt03',
      label: 'TT 03/2026 — Quy tắc ứng xử Nhà giáo',
      details: 'Thông tư 03/2026/TT-BGDĐT quy định cụ thể về chuẩn mực ứng xử của nhà giáo trong môi trường học đường và trên không gian mạng.',
      children: [
        {
          id: 'tt03-hoc-sinh',
          label: 'Ứng xử với học sinh (Điều 6)',
          details: 'Tôn trọng, công bằng, lắng nghe học sinh; sử dụng ngôn ngữ chuẩn mực, không trừng phạt thể xác dưới bất kỳ hình thức nào.',
          children: [
            { id: 'tt03-hs-ngon-ngu', label: 'Ngôn ngữ chuẩn mực', details: 'Sử dụng ngôn ngữ trong sáng, phù hợp lứa tuổi; không dùng từ ngữ mang tính xúc phạm, miệt thị, đặt biệt danh tiêu cực cho học sinh.' },
            { id: 'tt03-hs-cong-bang', label: 'Công bằng, không phân biệt', details: 'Đối xử công bằng với tất cả học sinh không phân biệt học lực, hoàn cảnh gia đình, dân tộc, giới tính, vùng miền.' },
            { id: 'tt03-hs-khong-trung-phat', label: 'Không trừng phạt thể xác', details: 'Tuyệt đối không áp dụng hình thức trừng phạt thể xác (đánh, bắt đứng nắng, bắt lao động nặng); vi phạm bị xử lý kỷ luật ngay lập tức.' },
          ],
        },
        {
          id: 'tt03-phu-huynh',
          label: 'Ứng xử với phụ huynh (Điều 7)',
          details: 'Lịch sự, tôn trọng phụ huynh; chủ động chia sẻ thông tin học tập; không nhận quà, tiền, hiện vật có giá trị lớn từ phụ huynh.',
          children: [
            { id: 'tt03-ph-thong-tin', label: 'Chia sẻ thông tin học tập', details: 'Chủ động thông báo kết quả học tập, rèn luyện của học sinh; phối hợp phụ huynh xử lý các vấn đề hành vi theo đúng quy trình.' },
            { id: 'tt03-ph-qua', label: 'Không nhận quà giá trị lớn', details: 'Không nhận tiền, quà, lợi ích vật chất có giá trị từ phụ huynh dưới bất kỳ hình thức nào; vi phạm bị xử lý theo pháp luật phòng chống tham nhũng.' },
          ],
        },
        {
          id: 'tt03-dong-nghiep',
          label: 'Ứng xử với đồng nghiệp (Điều 8)',
          details: 'Đoàn kết, hợp tác, sẵn sàng chia sẻ chuyên môn; không cạnh tranh không lành mạnh, không gây chia rẽ nội bộ.',
          children: [
            { id: 'tt03-dn-chia-se', label: 'Chia sẻ chuyên môn', details: 'Tích cực chia sẻ kinh nghiệm, tài liệu giảng dạy; tham gia sinh hoạt chuyên môn định kỳ; hỗ trợ đồng nghiệp mới vào nghề.' },
            { id: 'tt03-dn-canh-tranh', label: 'Không cạnh tranh không lành mạnh', details: 'Không tranh giành học sinh, không nói xấu đồng nghiệp trước mặt phụ huynh và học sinh; giải quyết mâu thuẫn qua kênh nội bộ.' },
          ],
        },
        {
          id: 'tt03-lanh-dao',
          label: 'Ứng xử với lãnh đạo (Điều 9)',
          details: 'Phục tùng sự phân công, điều động của lãnh đạo; phản ánh ý kiến qua đúng kênh; không nói xấu lãnh đạo; góp ý theo tinh thần xây dựng.',
          children: [
            { id: 'tt03-ld-gop-y', label: 'Góp ý xây dựng', details: 'Có quyền góp ý, phản ánh về công tác quản lý qua kênh chính thức (họp, văn bản, đường dây nóng); không phát tán nội dung chưa kiểm chứng.' },
          ],
        },
        {
          id: 'tt03-mang-xa-hoi',
          label: 'Ứng xử trên mạng XH (Điều 10)',
          details: 'Không đăng tải thông tin sai lệch, bôi nhọ nhà trường, học sinh, đồng nghiệp; chịu trách nhiệm cá nhân với mọi nội dung đăng tải công khai.',
          isNew: true,
          children: [
            {
              id: 'tt03-mxh-cam',
              label: 'Nội dung bị cấm đăng tải',
              details: 'Cấm: đăng thông tin nội bộ nhà trường khi chưa được phép; đăng hình ảnh, thông tin cá nhân học sinh khi chưa có sự đồng ý; phát biểu gây ảnh hưởng xấu đến uy tín nhà trường.',
              isNew: true,
            },
          ],
        },
        {
          id: 'tt03-cam',
          label: '5 hành vi bị nghiêm cấm (Điều 11)',
          details: 'Điều 11 liệt kê 5 nhóm hành vi bị nghiêm cấm đối với nhà giáo; vi phạm tùy mức độ bị xử lý kỷ luật đến buộc thôi việc.',
          children: [
            { id: 'tt03-cam1', label: 'Xúc phạm học sinh', details: 'Cấm tuyệt đối các hành vi xúc phạm danh dự, nhân phẩm học sinh bằng lời nói, hành động, cử chỉ hoặc trên không gian mạng.' },
            { id: 'tt03-cam2', label: 'Nhận tiền/quà từ phụ huynh', details: 'Cấm nhận tiền mặt, thẻ quà tặng, hiện vật hoặc bất kỳ lợi ích vật chất nào từ phụ huynh và học sinh dưới mọi hình thức.' },
            { id: 'tt03-cam3', label: 'Dạy thêm trái phép', details: 'Cấm dạy thêm có thu phí với chính học sinh đang trực tiếp giảng dạy mà không được phép; vi phạm bị xử lý kỷ luật và truy thu số tiền đã thu.' },
            { id: 'tt03-cam4', label: 'Gian lận trong đánh giá', details: 'Cấm sửa điểm, nhận tiền chạy điểm, tiết lộ đề thi, tiếp tay cho học sinh gian lận trong kiểm tra, đánh giá định kỳ và thi cuối kỳ.' },
            { id: 'tt03-cam5', label: 'Phân biệt đối xử', details: 'Cấm đối xử thiên vị, phân biệt học sinh dựa trên kết quả học tập, hoàn cảnh kinh tế gia đình, dân tộc, giới tính hoặc tôn giáo.' },
          ],
        },
      ],
    },
  },

  {
    id: 'tt30-chuan-nghe-nghiep',
    title: 'TT 30/2026/TT-BGDĐT (chuẩn nghề nghiệp)',
    root: {
      id: 'root-tt30',
      label: 'TT 30/2026 — Chuẩn nghề nghiệp GV Tiểu học (5 TC — 15 TC)',
      details: 'Thông tư 30/2026/TT-BGDĐT quy định chuẩn nghề nghiệp giáo viên tiểu học gồm 5 tiêu chuẩn, 15 tiêu chí; đánh giá cuối năm học theo 4 mức xếp loại.',
      children: [
        {
          id: 'tt30-tc1',
          label: 'Tiêu chuẩn 1: Phẩm chất nghề nghiệp (3 tiêu chí)',
          details: 'Đánh giá phẩm chất chính trị, đạo đức nghề nghiệp và phong cách nhà giáo — nền tảng cơ bản của người giáo viên tiểu học.',
          children: [
            { id: 'tt30-tc1-1', label: 'TC1.1: Đạo đức nghề nghiệp', details: 'Trung thực, tận tâm, gương mẫu trong cuộc sống và công việc; không vi phạm các quy định về đạo đức nhà giáo và pháp luật liên quan.' },
            { id: 'tt30-tc1-2', label: 'TC1.2: Phong cách nhà giáo', details: 'Tác phong mẫu mực, ăn mặc phù hợp, giao tiếp lịch sự; tạo hình ảnh tích cực cho nghề giáo trong cộng đồng.' },
            { id: 'tt30-tc1-3', label: 'TC1.3: Tư tưởng chính trị', details: 'Kiên định lập trường chính trị, chấp hành đường lối của Đảng và Nhà nước; không tham gia các hoạt động vi phạm pháp luật.' },
          ],
        },
        {
          id: 'tt30-tc2',
          label: 'Tiêu chuẩn 2: Năng lực chuyên môn (6 tiêu chí)',
          details: 'Bao gồm 6 tiêu chí đánh giá năng lực dạy học, kiểm tra đánh giá, tư vấn học sinh, ứng dụng CNTT và sử dụng ngoại ngữ.',
          isNew: true,
          children: [
            { id: 'tt30-tc2-1', label: 'TC2.1: Kế hoạch dạy học', details: 'Xây dựng kế hoạch bài dạy (giáo án) theo hướng phát triển năng lực học sinh; thể hiện rõ mục tiêu, hoạt động, phương pháp và đánh giá.' },
            { id: 'tt30-tc2-2', label: 'TC2.2: Thực hiện dạy học', details: 'Tổ chức các hoạt động học tập đa dạng, kích thích tư duy sáng tạo; quản lý lớp học hiệu quả, tạo môi trường học tập tích cực.' },
            { id: 'tt30-tc2-3', label: 'TC2.3: Kiểm tra — Đánh giá', details: 'Sử dụng đa dạng hình thức đánh giá (định tính, định lượng, quá trình); đảm bảo khách quan, công bằng, vì sự tiến bộ của học sinh.' },
            { id: 'tt30-tc2-4', label: 'TC2.4: Tư vấn học sinh', details: 'Hỗ trợ học sinh giải quyết khó khăn trong học tập và sinh hoạt; phát hiện sớm học sinh cần hỗ trợ đặc biệt và có biện pháp can thiệp phù hợp.' },
            {
              id: 'tt30-tc2-5',
              label: 'TC2.5: Ứng dụng CNTT (Mới 2026)',
              details: 'Sử dụng phần mềm tương tác, bài giảng điện tử, AI trong thiết kế nội dung học; khai thác kho học liệu số; đảm bảo an toàn thông tin trong dạy học.',
              isNew: true,
            },
            { id: 'tt30-tc2-6', label: 'TC2.6: Sử dụng Ngoại ngữ', details: 'Có khả năng đọc, hiểu tài liệu chuyên môn bằng tiếng Anh hoặc ngoại ngữ khác; sử dụng được các thuật ngữ chuyên ngành cơ bản trong giảng dạy.' },
          ],
        },
        {
          id: 'tt30-tc3',
          label: 'Tiêu chuẩn 3: Môi trường giáo dục (3 tiêu chí)',
          details: 'Đánh giá khả năng xây dựng môi trường vật chất lớp học, duy trì văn hóa ứng xử tích cực và phòng chống bạo lực học đường.',
          children: [
            { id: 'tt30-tc3-1', label: 'TC3.1: Môi trường vật chất', details: 'Sắp xếp không gian lớp học phù hợp hoạt động học tập; đảm bảo ánh sáng, thông gió, vệ sinh; tận dụng góc học tập, trưng bày sản phẩm học sinh.' },
            { id: 'tt30-tc3-2', label: 'TC3.2: Văn hóa ứng xử', details: 'Xây dựng quy tắc lớp học dân chủ, tôn trọng lẫn nhau; tạo bầu không khí học tập an toàn về tâm lý cho mỗi học sinh.' },
            { id: 'tt30-tc3-3', label: 'TC3.3: Phòng chống BLHĐ', details: 'Nhận diện và xử lý sớm các biểu hiện bạo lực học đường; phối hợp ban giám hiệu, phụ huynh và cơ quan chức năng khi cần thiết.' },
          ],
        },
        {
          id: 'tt30-tc4',
          label: 'Tiêu chuẩn 4: Quan hệ xã hội (3 tiêu chí)',
          details: 'Đánh giá mức độ phối hợp với cha mẹ học sinh, cộng đồng và đồng nghiệp để nâng cao chất lượng giáo dục.',
          children: [
            { id: 'tt30-tc4-1', label: 'TC4.1: Phối hợp CMHS', details: 'Thường xuyên liên lạc, cung cấp thông tin học tập; tổ chức họp phụ huynh hiệu quả; lắng nghe và xử lý phản hồi từ phụ huynh kịp thời.' },
            { id: 'tt30-tc4-2', label: 'TC4.2: Phối hợp cộng đồng', details: 'Kết nối các tổ chức, doanh nghiệp, cá nhân trong cộng đồng hỗ trợ hoạt động giáo dục; tổ chức hoạt động trải nghiệm gắn với thực tiễn địa phương.' },
            { id: 'tt30-tc4-3', label: 'TC4.3: Phát triển đồng nghiệp', details: 'Tích cực chia sẻ, hỗ trợ đồng nghiệp phát triển chuyên môn; tham gia tổ chuyên môn, dự giờ, góp ý chuyên môn một cách xây dựng.' },
          ],
        },
        {
          id: 'tt30-tc5',
          label: 'Tiêu chuẩn 5: Phát triển bản thân (3 tiêu chí)',
          details: 'Đánh giá ý thức tự bồi dưỡng, tham gia hoạt động chuyên môn và nghiên cứu khoa học của giáo viên.',
          children: [
            { id: 'tt30-tc5-1', label: 'TC5.1: Tự bồi dưỡng', details: 'Chủ động tham gia các khóa bồi dưỡng, đọc tài liệu, học online; hoàn thành đủ số giờ bồi dưỡng bắt buộc (tối thiểu 40 tiết/năm) theo quy định.' },
            { id: 'tt30-tc5-2', label: 'TC5.2: Hoạt động chuyên môn', details: 'Tham gia sinh hoạt tổ chuyên môn định kỳ; dự hội thảo, seminar chuyên đề; đóng góp sáng kiến kinh nghiệm trong phạm vi tổ/trường.' },
            { id: 'tt30-tc5-3', label: 'TC5.3: Nghiên cứu khoa học', details: 'Thực hiện đề tài nghiên cứu khoa học sư phạm ứng dụng cấp trường hoặc cao hơn; áp dụng kết quả nghiên cứu vào thực tiễn dạy học.' },
          ],
        },
        {
          id: 'tt30-xep-loai',
          label: '4 mức xếp loại — Đánh giá cuối năm học',
          details: 'Đánh giá theo 4 mức: Tốt / Khá / Đạt / Chưa đạt; thực hiện vào cuối mỗi năm học theo quy trình tự đánh giá → tập thể góp ý → thủ trưởng kết luận.',
          children: [
            { id: 'tt30-xl-tot', label: 'Mức Tốt', details: 'Tất cả 15 tiêu chí đạt mức tốt; là căn cứ xét danh hiệu GV dạy giỏi, GV xuất sắc, thăng hạng chức danh nghề nghiệp.' },
            { id: 'tt30-xl-kha', label: 'Mức Khá', details: 'Không có tiêu chí nào chưa đạt; tất cả tiêu chuẩn đạt tối thiểu mức khá; đủ điều kiện tham gia xét nâng bậc lương đúng hạn.' },
            { id: 'tt30-xl-dat', label: 'Mức Đạt', details: 'Hoàn thành các nhiệm vụ cơ bản; không có tiêu chí nào bị xếp loại chưa đạt; không đủ điều kiện thăng hạng trong năm đánh giá.' },
            { id: 'tt30-xl-chua-dat', label: 'Mức Chưa đạt', details: 'Có ít nhất 1 tiêu chuẩn hoặc từ 5 tiêu chí trở lên chưa đạt; là căn cứ để xem xét kỷ luật, không cho nâng lương và có thể bị chấm dứt hợp đồng.' },
          ],
        },
      ],
    },
  },
];
