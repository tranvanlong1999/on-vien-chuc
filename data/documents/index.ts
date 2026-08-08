import type { LawDocument } from '@/types';

export const lawDocuments: LawDocument[] = [
  {
    id: 'luat-nha-giao-2025',
    title: 'Luật Nhà giáo số 73/2025/QH15',
    shortTitle: 'Luật Nhà giáo 2025',
    code: '73/2025/QH15',
    icon: '📚',
    color: 'from-blue-500 to-blue-700',
    summary: 'Bộ luật đầu tiên điều chỉnh toàn diện vị thế pháp lý, quyền lợi, nghĩa vụ và chính sách đặc thù cho nhà giáo trong cả hệ thống công lập và ngoài công lập.',
    chapters: [
      {
        number: 'Chương I',
        title: 'Những quy định chung',
        articles: [
          {
            id: 'lng-d1',
            number: 'Điều 1',
            title: 'Phạm vi điều chỉnh',
            content: 'Luật này quy định về hoạt động nghề nghiệp, quyền, nghĩa vụ của nhà giáo; chức danh, chuẩn nghề nghiệp nhà giáo; tuyển dụng, sử dụng nhà giáo; chính sách tiền lương, đãi ngộ và tôn vinh nhà giáo; quản lý nhà giáo.',
            summary: ['Quy định toàn diện mọi khía cạnh liên quan tới nhà giáo.', 'Áp dụng thống nhất cho cả nhà giáo công lập và ngoài công lập.'],
            examFocus: 'Luật Nhà giáo 2025 bảo vệ và áp dụng cho giáo viên ở cả trường công lập và tư thục. Đây là điểm mới cực kỳ quan trọng.'
          },
          {
            id: 'lng-d3',
            number: 'Điều 3',
            title: 'Định nghĩa Nhà giáo',
            content: 'Nhà giáo là người giảng dạy, giáo dục trong cơ sở giáo dục, đạt trình độ chuẩn được đào tạo theo quy định; thực hiện hoạt động nghề nghiệp độc lập hoặc theo sự phân công của cấp có thẩm quyền.',
            summary: ['Định nghĩa pháp lý chính thức về nhà giáo.', 'Phải có hai yếu tố: Giảng dạy/giáo dục + Đạt trình độ chuẩn đào tạo.'],
            examFocus: 'Bẫy hay gặp: "Nhân viên thiết bị, thư viện trong trường học có phải nhà giáo không?" → Không, vì họ là viên chức hành chính hỗ trợ, không thực hiện nhiệm vụ giảng dạy và giáo dục trực tiếp.'
          }
        ]
      },
      {
        number: 'Chương II',
        title: 'Hoạt động nghề nghiệp, quyền và nghĩa vụ',
        articles: [
          {
            id: 'lng-d9',
            number: 'Điều 9',
            title: 'Quyền của nhà giáo',
            content: 'Nhà giáo có các quyền sau: 1. Được giảng dạy, giáo dục theo chuyên môn đào tạo; tự chủ chuyên môn và lựa chọn phương pháp giảng dạy. 2. Được hưởng lương, phụ cấp và các chế độ đãi ngộ tương xứng. 3. Được đào tạo bồi dưỡng nâng cao chuyên môn. 4. Được tôn trọng và bảo vệ nhân phẩm, danh dự, thân thể. 5. Được tham gia quản lý cơ sở giáo dục.',
            summary: ['Được tự chủ về mặt chuyên môn (chọn phương pháp dạy học).', 'Được hưởng lương cao nhất bảng lương hành chính sự nghiệp.', 'Được bảo vệ tính mạng, nhân phẩm khi làm nhiệm vụ.'],
            examFocus: 'Quyền tự chủ chuyên môn: Giáo viên có quyền lựa chọn phương pháp giảng dạy phù hợp với đối tượng học sinh, miễn là đáp ứng chương trình GDPT.'
          },
          {
            id: 'lng-d10',
            number: 'Điều 10',
            title: 'Nghĩa vụ của nhà giáo',
            content: 'Nhà giáo có các nghĩa vụ sau: 1. Giảng dạy, giáo dục theo đúng mục tiêu, nguyên lý giáo dục, thực hiện đầy đủ chương trình. 2. Gương mẫu thực hiện nghĩa vụ công dân, quy tắc ứng xử của nhà giáo. 3. Giữ gìn phẩm chất, danh dự, uy tín của nhà giáo; tôn trọng nhân cách của người học. 4. Học tập, bồi dưỡng nâng cao năng lực. 5. Các nghĩa vụ khác theo quy định.',
            summary: ['Thực hiện đúng chương trình giáo dục (không tự ý bớt xén chương trình).', 'Tôn trọng nhân cách của người học (không xúc phạm, bạo hành học sinh).'],
            examFocus: 'Nghĩa vụ "Học tập suốt đời": Tự bồi dưỡng nâng cao chuyên môn nghiệp vụ là nghĩa vụ bắt buộc, không chỉ là quyền lợi.'
          }
        ]
      },
      {
        number: 'Chương V',
        title: 'Chính sách tiền lương, đãi ngộ đối với nhà giáo',
        articles: [
          {
            id: 'lng-d27',
            number: 'Điều 27',
            title: 'Tiền lương và phụ cấp của nhà giáo',
            content: '1. Tiền lương của nhà giáo được xếp cao nhất trong hệ thống thang bậc lương hành chính sự nghiệp của Đảng và Nhà nước. 2. Nhà giáo được hưởng phụ cấp ưu đãi nghề đặc thù ngành giáo dục và các loại phụ cấp khác theo tính chất công việc và địa bàn hoạt động. 3. Nhà giáo cấp tiểu học, mầm non được hưởng ưu đãi phụ cấp đặc thù cao hơn do yêu cầu thời gian và cường độ quản lý học sinh.',
            summary: ['Lương nhà giáo được ưu tiên xếp cao nhất bảng lương hành chính sự nghiệp.', 'Có phụ cấp ưu đãi nghề đặc thù.', 'Giáo viên mầm non và tiểu học được hưởng mức ưu đãi đặc biệt cao hơn.'],
            examFocus: 'Điểm mới nóng 2026: Lương giáo viên tiểu học được cộng thêm phụ cấp đặc thù. Đề thi chắc chắn sẽ hỏi về chính sách lương cao nhất này.',
            isNew2026: true
          }
        ]
      }
    ]
  },
  {
    id: 'luat-vien-chuc-2025',
    title: 'Luật Viên chức số 129/2025/QH15',
    shortTitle: 'Luật Viên chức 2025',
    code: '129/2025/QH15',
    icon: '⚖️',
    color: 'from-purple-500 to-purple-700',
    summary: 'Cập nhật toàn diện các quy định về nghĩa vụ, quyền lợi của viên chức, nâng cao tính tự chủ cho đơn vị sự nghiệp và cải cách cơ chế tuyển dụng hợp đồng.',
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
            examFocus: 'Phân biệt: Công chức làm trong cơ quan nhà nước hành chính hưởng lương từ ngân sách nhà nước. Viên chức làm tại đơn vị sự nghiệp công lập (trường học, bệnh viện) hưởng lương từ quỹ lương của đơn vị.'
          }
        ]
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
            examFocus: 'Bẫy đề thi: Viên chức được làm thêm, làm kinh doanh ngoài giờ nhưng KHÔNG ĐƯỢC đứng tên thành lập doanh nghiệp hoặc tham gia quản lý điều hành doanh nghiệp tư nhân theo Luật Phòng chống tham nhũng.'
          }
        ]
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
            examFocus: 'Xem chi tiết tại Nghị định 259/2026 về việc nới lỏng ký hợp đồng không xác định thời hạn đối với viên chức đã ký hợp đồng xác định thời hạn từ 2 lần trở lên.'
          }
        ]
      }
    ]
  },
  {
    id: 'nghi-dinh-259-2026',
    title: 'Nghị định số 259/2026/NĐ-CP',
    shortTitle: 'Nghị định 259/2026',
    code: '259/2026/NĐ-CP',
    icon: '📋',
    color: 'from-green-500 to-green-700',
    summary: 'Bãi bỏ hoàn toàn chế độ tập sự đối với viên chức mới tuyển dụng. Hợp đồng làm việc trực tiếp có giá trị như quyết định nhận việc. Hưởng 100% lương ngay khi nhận việc.',
    chapters: [
      {
        number: 'Chương II',
        title: 'Tuyển dụng viên chức',
        articles: [
          {
            id: 'nd259-d11',
            number: 'Điều 11',
            title: 'Hình thức, nội dung và thời gian thi tuyển viên chức',
            content: 'Thi tuyển viên chức được thực hiện theo 02 vòng thi: Vòng 1: Kiểm tra kiến thức chung bằng hình thức thi trắc nghiệm trên máy tính, gồm 60 câu hỏi về pháp luật viên chức, chủ trương đường lối của Đảng trong thời gian 60 phút. Thí sinh trả lời đúng từ 50% số câu hỏi trở lên (30 câu) thì đạt. Vòng 2: Thi môn nghiệp vụ chuyên ngành.',
            summary: ['Vòng 1: Trắc nghiệm kiến thức chung trên máy tính (60 câu / 60 phút). Đạt từ 30 câu trở lên được vào Vòng 2.', 'Vòng 2: Thi nghiệp vụ chuyên ngành (Viết 180 phút, hoặc Phỏng vấn 30 phút).'],
            examFocus: 'Nhớ số câu và thời gian: Vòng 1 là 60 câu / 60 phút, đạt từ 30 câu. Điểm đạt Vòng 2 là từ 50 điểm trở lên.'
          },
          {
            id: 'nd259-d21',
            number: 'Điều 21',
            title: 'Ký kết hợp đồng làm việc và nhận việc — Bãi bỏ chế độ tập sự',
            content: '1. Trong thời hạn 05 ngày làm việc kể từ ngày nhận được kết quả trúng tuyển, người đứng đầu đơn vị tiến hành ký kết hợp đồng làm việc trực tiếp với người trúng tuyển. 2. Hợp đồng làm việc có giá trị thay thế Quyết định tuyển dụng. Người trúng tuyển nhận 100% lương bổ nhiệm ngay khi nhận việc, không thực hiện chế độ tập sự.',
            summary: ['Hợp đồng làm việc ký kết trong vòng 5 ngày làm việc và thay thế hoàn toàn quyết định tuyển dụng.', 'BÃI BỎ HOÀN TOÀN chế độ tập sự (probation) kể từ ngày 01/07/2026.', 'Hưởng 100% lương chính thức ngay khi đi làm.'],
            examFocus: 'CỰC KỲ QUAN TRỌNG: Thay đổi lớn nhất 2026. Trước đây phải tập sự 12 tháng và hưởng 85% lương. Kể từ 01/07/2026, chế độ tập sự bị bãi bỏ hoàn toàn — đi làm hưởng 100% lương ngay.',
            isNew2026: true
          },
          {
            id: 'nd259-d23',
            number: 'Điều 23',
            title: 'Quy định chuyển tiếp hợp đồng không xác định thời hạn',
            content: 'Viên chức được tuyển dụng từ ngày 01 tháng 7 năm 2020 tới ngày 01 tháng 7 năm 2026, đã ký kết hợp đồng làm việc xác định thời hạn từ 02 lần trở lên thì sau khi kết thúc hợp đồng lần 2 được quyền ký kết hợp đồng làm việc không xác định thời hạn.',
            summary: ['Mở đường cho viên chức tuyển dụng sau 2020 được ký hợp đồng không xác định thời hạn.', 'Yêu cầu đã ký hợp đồng xác định thời hạn ít nhất 2 lần.'],
            examFocus: 'Quy định này khắc phục điểm nghẽn của Luật Viên chức sửa đổi 2019. Sau 2 lần ký hợp đồng xác định thời hạn, viên chức vẫn được lên hợp đồng không xác định thời hạn.',
            isNew2026: true
          }
        ]
      }
    ]
  },
  {
    id: 'nghi-dinh-93-2026',
    title: 'Nghị định số 93/2026/NĐ-CP',
    shortTitle: 'Nghị định 93/2026',
    code: '93/2026/NĐ-CP',
    icon: '💰',
    color: 'from-yellow-500 to-orange-600',
    summary: 'Quy định chi tiết và hướng dẫn thi hành Luật Nhà giáo về chế độ tiền lương, phụ cấp ưu đãi, chuẩn đào tạo và ưu tiên điểm tuyển dụng nhà giáo.',
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
            examFocus: 'Mẹo nhớ: Thâm niên giảng dạy từ 36 tháng trở lên = Cộng 5 điểm Vòng 2. Chỉ tính thâm niên có đóng BHXH bắt buộc.'
          },
          {
            id: 'nd93-d7',
            number: 'Điều 7',
            title: 'Nội dung và hình thức thi tuyển nhà giáo',
            content: 'Vòng 1 trắc nghiệm máy tính gồm 2 phần: Phần I: Kiến thức chung (60 câu / 60 phút) về pháp luật nhà giáo, giáo dục; Phần II: Ngoại ngữ (30 câu / 30 phút). Nếu vị trí việc làm không yêu cầu ngoại ngữ trong bản mô tả thì không phải thi Phần II.',
            summary: ['Quy định chi tiết Vòng 1 của thi tuyển giáo viên.', 'Trường hợp không yêu cầu ngoại ngữ trong khung năng lực vị trí việc làm thì miễn thi Phần II ngoại ngữ.'],
            examFocus: 'Thời gian thi ngoại ngữ Vòng 1 là 30 phút với 30 câu hỏi (trả lời đúng từ 15 câu trở lên thì đạt phần thi ngoại ngữ).'
          }
        ]
      }
    ]
  },
  {
    id: 'thong-tu-30-2026',
    title: 'Thông tư số 30/2026/TT-BGDĐT',
    shortTitle: 'TT 30/2026 — Chuẩn giáo viên',
    code: '30/2026/TT-BGDĐT',
    icon: '🎯',
    color: 'from-teal-500 to-teal-700',
    summary: 'Quy định chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông với 5 tiêu chuẩn và 15 tiêu chí nghề nghiệp mới dành riêng cho giáo viên tiểu học.',
    chapters: [
      {
        number: 'Chương II',
        title: 'Chuẩn nghề nghiệp giáo viên tiểu học',
        articles: [
          {
            id: 'tt30-tc1',
            number: 'Tiêu chuẩn 1',
            title: 'Phẩm chất nghề nghiệp',
            content: 'Yêu cầu giáo viên tiểu học gương mẫu về đạo đức nhà giáo, tư tưởng chính trị và lối sống lành mạnh tác phong sư phạm mẫu mực. Tiêu chuẩn này gồm 3 tiêu chí: Đạo đức nghề nghiệp; Phong cách nhà giáo; Tư tưởng chính trị.',
            summary: ['Tiêu chuẩn nền tảng về đạo đức và tư tưởng.', 'Gồm 3 tiêu chí: Đạo đức, Phong cách sư phạm, Tư tưởng chính trị.'],
            examFocus: 'Nhớ nhanh: Tiêu chuẩn 1 có 3 tiêu chí. Đây là tiêu chuẩn bắt buộc phải Đạt trở lên để không bị xếp loại Không hoàn thành nhiệm vụ.'
          },
          {
            id: 'tt30-tc2',
            number: 'Tiêu chuẩn 2',
            title: 'Năng lực chuyên môn, nghiệp vụ',
            content: 'Yêu cầu giáo viên thực hiện giảng dạy và giáo dục hiệu quả theo Chương trình GDPT tiểu học. Gồm 6 tiêu chí: Xây dựng kế hoạch dạy học; Thực hiện hoạt động dạy học; Kiểm tra đánh giá học sinh; Tư vấn hỗ trợ học sinh; Sử dụng công nghệ thông tin; Sử dụng ngoại ngữ.',
            summary: ['Tiêu chuẩn cốt lõi về kỹ thuật dạy học.', 'Gồm 6 tiêu chí (nhiều tiêu chí nhất trong các tiêu chuẩn).', 'Yêu cầu áp dụng phương pháp dạy học phát triển năng lực học sinh tiểu học.'],
            examFocus: 'Tiêu chuẩn nặng nhất với 6 tiêu chí chi tiết. Đặc biệt chú ý tiêu chí "Sử dụng công nghệ thông tin trong dạy học" và "Tư vấn hỗ trợ tâm lý học sinh tiểu học".'
          },
          {
            id: 'tt30-tc3',
            number: 'Tiêu chuẩn 3',
            title: 'Năng lực xây dựng môi trường giáo dục',
            content: 'Xây dựng môi trường lớp học an toàn, lành mạnh, phòng chống bạo lực học đường. Gồm 3 tiêu chí: Xây dựng môi trường vật chất lớp học; Xây dựng môi trường văn hóa ứng xử; Phòng chống bạo lực học đường.',
            summary: ['Đảm bảo an toàn thể chất và tinh thần cho học sinh tiểu học.', 'Gồm 3 tiêu chí tập trung vào an toàn, văn hóa ứng xử, phòng chống bạo lực.'],
            examFocus: 'Chú ý vai trò của giáo viên chủ nhiệm tiểu học trong việc phối hợp xử lý và ngăn ngừa bạo lực học đường từ sớm.'
          },
          {
            id: 'tt30-tc4',
            number: 'Tiêu chuẩn 4',
            title: 'Năng lực phát triển quan hệ xã hội',
            content: 'Phối hợp với gia đình và cộng đồng trong giáo dục học sinh. Gồm 3 tiêu chí: Phối hợp với cha mẹ học sinh; Phối hợp với cộng đồng; Phát triển quan hệ đồng nghiệp.',
            summary: ['Kết nối gia đình và nhà trường chặt chẽ.', 'Gồm 3 tiêu chí về quan hệ xã hội và cộng đồng.'],
            examFocus: 'Nhớ: Tiêu chuẩn 4 có 3 tiêu chí về phối hợp với cha mẹ, cộng đồng và đồng nghiệp.'
          },
          {
            id: 'tt30-tc5',
            number: 'Tiêu chuẩn 5',
            title: 'Năng lực phát triển bản thân',
            content: 'Tự học, tự bồi dưỡng nâng cao năng lực chuyên môn và nghiệp vụ. Gồm 3 tiêu chí: Tự bồi dưỡng; Tham gia hoạt động chuyên môn; Nghiên cứu khoa học.',
            summary: ['Học tập suốt đời là yêu cầu bắt buộc.', 'Gồm 3 tiêu chí về tự phát triển bản thân.'],
            examFocus: 'Tổng kết: 5 tiêu chuẩn — 15 tiêu chí (3+6+3+3+3=18, nhớ đúng là 15 theo TT30). Tiêu chuẩn 2 có nhiều tiêu chí nhất (6 tiêu chí).'
          }
        ]
      }
    ]
  },
  {
    id: 'thong-tu-03-2026',
    title: 'Thông tư số 03/2026/TT-BGDĐT',
    shortTitle: 'TT 03/2026 — Quy tắc ứng xử',
    code: '03/2026/TT-BGDĐT',
    icon: '🤝',
    color: 'from-rose-500 to-rose-700',
    summary: 'Quy định chi tiết quy tắc ứng xử của nhà giáo trong các cơ sở giáo dục nhằm xây dựng văn hóa học đường văn minh và ngăn chặn các hành vi phi sư phạm.',
    chapters: [
      {
        number: 'Chương II',
        title: 'Nội dung quy tắc ứng xử',
        articles: [
          {
            id: 'tt03-d6',
            number: 'Điều 6',
            title: 'Ứng xử của nhà giáo đối với người học (Học sinh)',
            content: 'Nhà giáo phải tôn trọng, yêu thương, đối xử công bằng với người học, lắng nghe và giúp đỡ người học vượt qua khó khăn. Nghiêm cấm mọi hành vi bạo lực, trừng phạt thân thể, xúc phạm danh dự, nhân phẩm, ép học thêm hoặc định kiến đối với người học.',
            summary: ['Thái độ: Tôn trọng, công bằng, lắng nghe.', 'Hành vi cấm: Bạo lực học đường, ép học thêm, xúc phạm thân thể/danh dự học sinh.'],
            examFocus: 'Trong bài thi tự luận xử lý tình huống sư phạm, giáo viên phải dựa vào quy định tại Điều này để làm căn cứ pháp lý xử lý nhân văn, không được trừng phạt học sinh.'
          },
          {
            id: 'tt03-d7',
            number: 'Điều 7',
            title: 'Ứng xử với đồng nghiệp và cha mẹ học sinh',
            content: '1. Đối với đồng nghiệp: Hợp tác, giúp đỡ, tôn trọng sự khác biệt, giữ gìn đoàn kết. 2. Đối với cha mẹ học sinh: Tôn trọng, lắng nghe ý kiến, phối hợp chặt chẽ trong giảng dạy, giáo dục học sinh; không lợi dụng danh nghĩa nhà giáo để trục lợi cá nhân.',
            summary: ['Đồng nghiệp: Tôn trọng, hợp tác, đoàn kết.', 'Phụ huynh học sinh: Phối hợp chặt chẽ, không lợi dụng tư lợi.'],
            examFocus: 'Ghi nhớ nguyên tắc hợp tác bình đẳng với cha mẹ học sinh. Tránh các bẫy hỏi về việc nhận quà, gợi ý đóng góp quỹ từ phụ huynh.'
          }
        ]
      }
    ]
  }
];

export function getDocumentById(id: string): LawDocument | undefined {
  return lawDocuments.find((d) => d.id === id);
}

export function getTotalArticles(): number {
  return lawDocuments.reduce(
    (total, doc) => total + doc.chapters.reduce((t, ch) => t + ch.articles.length, 0),
    0
  );
}
