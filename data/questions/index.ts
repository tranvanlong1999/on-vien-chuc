import type { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-1', docId: 'luat-nha-giao-2025', difficulty: 'easy',
    question: 'Theo Luật Nhà giáo số 73/2025/QH15, đối tượng nào sau đây được xác định là nhà giáo?',
    options: ['Người giảng dạy, giáo dục trong cơ sở giáo dục, đạt trình độ chuẩn được đào tạo.', 'Người quản lý thư viện và thiết bị thí nghiệm trong trường tiểu học công lập.', 'Cán bộ hành chính thực hiện nhiệm vụ văn thư tại các phòng giáo dục huyện.', 'Nhân viên bảo vệ và lao công hỗ trợ cơ sở vật chất cho nhà trường.'],
    correctAnswer: 0,
    explanation: 'Theo Điều 3 Luật Nhà giáo 2025, nhà giáo phải trực tiếp thực hiện nhiệm vụ giảng dạy, giáo dục trong cơ sở giáo dục và đạt trình độ chuẩn được đào tạo theo quy định.'
  },
  {
    id: 'q-2', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Chính sách tiền lương của nhà giáo được Luật Nhà giáo 2025 quy định như thế nào?',
    options: ['Xếp ngang bằng với mức lương trung bình của các bộ ngành hành chính.', 'Xếp cao nhất trong hệ thống thang bậc lương hành chính sự nghiệp của Đảng và Nhà nước.', 'Xếp thấp hơn mức lương tối thiểu vùng nhưng được bù đắp bằng phụ cấp đứng lớp.', 'Tùy thuộc vào nguồn thu xã hội hóa của từng cơ sở giáo dục tự quyết định.'],
    correctAnswer: 1,
    explanation: 'Theo Điều 27 Luật Nhà giáo 2025, lương của nhà giáo được xếp cao nhất trong hệ thống thang bậc lương hành chính sự nghiệp của Đảng và Nhà nước, cộng với phụ cấp ưu đãi nghề đặc thù.'
  },
  {
    id: 'q-3', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Quyền nào sau đây thể hiện tính độc lập chuyên môn của nhà giáo được quy định tại Luật Nhà giáo 2025?',
    options: ['Quyền tự ý bớt chương trình học nếu cảm thấy học sinh không tiếp thu kịp.', 'Quyền tự chủ chuyên môn và lựa chọn phương pháp giảng dạy phù hợp.', 'Quyền từ chối dạy các học sinh khuyết tật hòa nhập tại lớp.', 'Quyền tổ chức các lớp dạy thêm thu tiền trực tiếp tại nhà riêng không báo cáo.'],
    correctAnswer: 1,
    explanation: 'Điều 9 Luật Nhà giáo 2025 quy định nhà giáo có quyền tự chủ chuyên môn, lựa chọn phương pháp giảng dạy, giáo trình phù hợp nhằm phát triển tối đa năng lực học sinh.'
  },
  {
    id: 'q-4', docId: 'luat-vien-chuc-2025', difficulty: 'easy',
    question: 'Theo Luật Viên chức số 129/2025/QH15, viên chức là công dân nước nào?',
    options: ['Công dân của bất kỳ quốc gia nào trong khối ASEAN.', 'Bắt buộc phải là công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam.', 'Người nước ngoài cư trú hợp pháp tại Việt Nam trên 5 năm.', 'Người có 2 quốc tịch trong đó có quốc tịch Việt Nam không cư trú tại nước ngoài.'],
    correctAnswer: 1,
    explanation: 'Theo Điều 2 Luật Viên chức 2025, viên chức bắt buộc phải là công dân Việt Nam, được tuyển dụng theo vị trí việc làm và làm việc tại đơn vị sự nghiệp công lập.'
  },
  {
    id: 'q-5', docId: 'luat-vien-chuc-2025', difficulty: 'hard',
    question: 'Viên chức muốn ký hợp đồng vụ việc bên ngoài với đơn vị sự nghiệp khác thì cần điều kiện gì?',
    options: ['Chỉ cần ký xong rồi gửi thông báo bằng văn bản cho Hiệu trưởng sau 30 ngày.', 'Phải có sự đồng ý bằng văn bản của người đứng đầu đơn vị sự nghiệp công lập đang quản lý.', 'Không được phép ký trong bất kỳ hoàn cảnh nào để tránh xung đột lợi ích.', 'Được tự ý thực hiện nếu thời gian làm thêm hoàn toàn vào ngày thứ Bảy và Chủ nhật.'],
    correctAnswer: 1,
    explanation: 'Theo Điều 14 Luật Viên chức 2025, để làm việc bên ngoài dưới dạng hợp đồng vụ việc, viên chức phải bảo đảm hoàn thành nhiệm vụ và có sự đồng ý của người đứng đầu đơn vị.'
  },
  {
    id: 'q-6', docId: 'nghi-dinh-259-2026', difficulty: 'hard',
    question: 'Điểm đổi mới căn bản nhất của Nghị định số 259/2026/NĐ-CP về quá trình nhận việc của viên chức là gì?',
    options: ['Kéo dài thời gian tập sự lên mức tối đa là 24 tháng cho mọi bậc nghề nghiệp.', 'Bãi bỏ hoàn toàn chế độ tập sự; hợp đồng làm việc có giá trị thay thế quyết định tuyển dụng.', 'Yêu cầu người trúng tuyển phải thi thêm một kỳ thi sát hạch lý lịch tư pháp Vòng 3.', 'Mọi viên chức đều hưởng 85% lương chính thức trong 2 năm đầu tiên đi làm.'],
    correctAnswer: 1,
    explanation: 'Nghị định 259/2026 bãi bỏ chế độ tập sự. Đi làm nhận 100% lương chính thức ngay khi hợp đồng có hiệu lực (Điều 21).'
  },
  {
    id: 'q-7', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Theo Nghị định số 259/2026/NĐ-CP, người dự tuyển trúng tuyển Vòng 1 khi trả lời đúng bao nhiêu % số câu hỏi của mỗi phần?',
    options: ['Đúng từ 30% số câu hỏi trở lên.', 'Đúng từ 50% số câu hỏi trở lên ở từng phần.', 'Đúng từ 70% số câu hỏi trở lên tính trung bình cộng cả 2 phần.', 'Đúng 100% phần kiến thức chung và trên 50% phần ngoại ngữ.'],
    correctAnswer: 1,
    explanation: 'Điều 11 Nghị định 259/2026 quy định thí sinh phải trả lời đúng từ 50% số câu hỏi trở lên đối với từng phần thi trắc nghiệm ở Vòng 1 để được tiếp tục dự thi Vòng 2.'
  },
  {
    id: 'q-8', docId: 'nghi-dinh-259-2026', difficulty: 'hard',
    question: 'Đối với viên chức đã ký hợp đồng làm việc xác định thời hạn 02 lần trở lên tuyển dụng từ ngày 01/7/2020, Nghị định 259/2026 quy định quyền lợi chuyển đổi hợp đồng như thế nào?',
    options: ['Phải tiếp tục ký hợp đồng xác định thời hạn lần thứ 3 với thời gian ngắn hơn.', 'Được ký kết hợp đồng làm việc không xác định thời hạn nếu đơn vị còn nhu cầu và đáp ứng năng lực.', 'Bắt buộc phải thi thăng hạng hoặc chuyển ngạch thì mới được gia hạn tiếp hợp đồng.', 'Chuyển đổi sang hợp đồng lao động thời vụ không còn hưởng chế độ viên chức.'],
    correctAnswer: 1,
    explanation: 'Điều 23 Nghị định 259/2026 cho phép viên chức tuyển dụng sau năm 2020 chuyển sang ký hợp đồng làm việc không xác định thời hạn sau khi hoàn thành 02 lần ký hợp đồng xác định thời hạn.'
  },
  {
    id: 'q-9', docId: 'thong-tu-30-2026', difficulty: 'easy',
    question: 'Theo Thông tư số 30/2026/TT-BGDĐT, chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông có bao nhiêu tiêu chí?',
    options: ['5 tiêu chí', '10 tiêu chí', '15 tiêu chí', '20 tiêu chí'],
    correctAnswer: 2,
    explanation: 'Thông tư 30/2026 quy định chuẩn nghề nghiệp giáo viên gồm 5 tiêu chuẩn được cụ thể hóa thành 15 tiêu chí đánh giá.'
  },
  {
    id: 'q-10', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Tiêu chuẩn "Năng lực chuyên môn, nghiệp vụ" của giáo viên tiểu học theo Thông tư 30/2026 gồm các tiêu chí nào sau đây?',
    options: ['Xây dựng kế hoạch dạy học; Thực hiện dạy học; Kiểm tra đánh giá; Tư vấn hỗ trợ học sinh; Sử dụng CNTT; Sử dụng ngoại ngữ.', 'Tư tưởng chính trị; Đạo đức nghề nghiệp; Phong cách nhà giáo.', 'Phối hợp giữa nhà trường, gia đình và xã hội trong hoạt động giáo dục.', 'Phát triển chuyên môn bản thân thông qua sinh hoạt tổ nhóm chuyên môn.'],
    correctAnswer: 0,
    explanation: 'Tiêu chuẩn 2 quy định về năng lực chuyên môn nghiệp vụ của giáo viên bao gồm 6 tiêu chí liên quan mật thiết đến công tác thiết kế, bài giảng, đánh giá và kỹ năng thời đại số.'
  },
  {
    id: 'q-11', docId: 'thong-tu-03-2026', difficulty: 'easy',
    question: 'Hành vi nào sau đây bị nghiêm cấm trong quy tắc ứng xử của nhà giáo đối với học sinh theo Thông tư số 03/2026/TT-BGDĐT?',
    options: ['Yêu cầu học sinh làm bài tập về nhà để củng cố kiến thức.', 'Lắng nghe và giải đáp các thắc mắc về bài học của học sinh ngoài giờ học chính thức.', 'Trừng phạt thân thể, bạo lực, xúc phạm danh dự học sinh, hoặc có thái độ định kiến.', 'Khuyến khích học sinh thảo luận nhóm để tăng tính chủ động.'],
    correctAnswer: 2,
    explanation: 'Theo Điều 6 Thông tư 03/2026, các hành vi phi sư phạm như trừng phạt thân thể, bạo lực học đường, xúc phạm tinh thần và định kiến học sinh bị nghiêm cấm hoàn toàn.'
  },
  {
    id: 'q-12', docId: 'nghi-dinh-93-2026', difficulty: 'medium',
    question: 'Theo Nghị định 93/2026/NĐ-CP, giáo viên hợp đồng có thâm niên giảng dạy bao nhiêu năm được cộng điểm ưu tiên trong kỳ thi Vòng 2?',
    options: ['Từ đủ 1 năm trở lên được cộng 3 điểm.', 'Từ đủ 2 năm trở lên được cộng 5 điểm.', 'Từ đủ 3 năm (36 tháng) trở lên, có đóng BHXH bắt buộc được cộng 5 điểm.', 'Từ đủ 5 năm trở lên được cộng 10 điểm.'],
    correctAnswer: 2,
    explanation: 'Điều 6 Nghị định 93/2026 quy định: Người có thời gian giảng dạy thực tế từ đủ 36 tháng trở lên, có đóng BHXH bắt buộc phù hợp với vị trí tuyển dụng được cộng 05 điểm vào kết quả thi Vòng 2.'
  },
];
