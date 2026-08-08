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
    explanation: 'Theo Điều 23 Luật Nhà giáo 2025, lương của nhà giáo được xếp cao nhất trong hệ thống thang bậc lương hành chính sự nghiệp của Đảng và Nhà nước, cộng với phụ cấp ưu đãi nghề đặc thù.'
  },
  {
    id: 'q-3', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Quyền nào sau đây thể hiện tính độc lập chuyên môn của nhà giáo được quy định tại Luật Nhà giáo 2025?',
    options: ['Quyền tự ý bớt chương trình học nếu cảm thấy học sinh không tiếp thu kịp.', 'Quyền tự chủ chuyên môn và lựa chọn phương pháp giảng dạy phù hợp.', 'Quyền từ chối dạy các học sinh khuyết tật hòa nhập tại lớp.', 'Quyền tổ chức các lớp dạy thêm thu tiền trực tiếp tại nhà riêng không báo cáo.'],
    correctAnswer: 1,
    explanation: 'Điều 8 Luật Nhà giáo 2025 quy định nhà giáo có quyền tự chủ chuyên môn, lựa chọn phương pháp giảng dạy, giáo trình phù hợp nhằm phát triển tối đa năng lực học sinh.'
  },
  {
    id: 'q-4', docId: 'luat-vien-chuc-2025', difficulty: 'easy',
    question: 'Theo Luật Viên chức số 129/2025/QH15, viên chức là công dân nước nào?',
    options: ['Công dân của bất kỳ quốc gia nào trong khối ASEAN.', 'Bắt buộc phải là công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam.', 'Người nước ngoài cư trú hợp pháp tại Việt Nam trên 5 năm.', 'Người có 2 quốc tịch trong đó có quốc tịch Việt Nam không cư trú tại nước ngoài.'],
    correctAnswer: 1,
    explanation: 'Theo Điều 1 Luật Viên chức 2025, viên chức bắt buộc phải là công dân Việt Nam, được tuyển dụng theo vị trí việc làm và làm việc tại đơn vị sự nghiệp công lập.'
  },
  {
    id: 'q-5', docId: 'luat-vien-chuc-2025', difficulty: 'hard',
    question: 'Viên chức muốn ký hợp đồng vụ việc bên ngoài với đơn vị sự nghiệp khác thì cần điều kiện gì?',
    options: ['Chỉ cần ký xong rồi gửi thông báo bằng văn bản cho Hiệu trưởng sau 30 ngày.', 'Phải có sự đồng ý bằng văn bản của người đứng đầu đơn vị sự nghiệp công lập đang quản lý.', 'Không được phép ký trong bất kỳ hoàn cảnh nào để tránh xung đột lợi ích.', 'Được tự ý thực hiện nếu thời gian làm thêm hoàn toàn vào ngày thứ Bảy và Chủ nhật.'],
    correctAnswer: 1,
    explanation: 'Theo Điều 13 Luật Viên chức 2025, để làm việc bên ngoài dưới dạng hợp đồng lao động/dịch vụ, viên chức phải bảo đảm không xung đột lợi ích và có sự đồng ý bằng văn bản của người đứng đầu đơn vị nếu hợp đồng làm việc chưa có thỏa thuận.'
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
  {
    id: 'q-13', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Viên chức bị kỷ luật buộc thôi việc trong trường hợp nào mà không cần qua hội đồng kỷ luật?',
    options: ['Bị xếp loại "không hoàn thành nhiệm vụ" 2 năm liên tiếp.', 'Bị Tòa án kết án phạt tù không được hưởng án treo hoặc bị kết án về tội tham nhũng.', 'Tự ý bỏ việc quá 5 ngày liên tục mà không có lý do chính đáng.', 'Bị phụ huynh học sinh tập thể khiếu nại về vi phạm sư phạm.'],
    correctAnswer: 1,
    explanation: 'Khoản 3 Điều 35 Luật Viên chức 2025: Viên chức bị Tòa án kết án tù không hưởng án treo hoặc kết án tội tham nhũng thì đương nhiên bị buộc thôi việc kể từ ngày bản án có hiệu lực pháp luật.'
  },
  {
    id: 'q-14', docId: 'luat-vien-chuc-2025', difficulty: 'hard',
    question: 'Theo Luật Viên chức 2025, hành vi nào sau đây KHÔNG thuộc phạm vi "những việc viên chức không được làm"?',
    options: ['Tham gia đình công tại đơn vị sự nghiệp.', 'Đăng tải thông tin sai lệch làm ảnh hưởng uy tín đơn vị lên mạng xã hội.', 'Ký hợp đồng lao động ngoài giờ với tổ chức tư nhân được Hiệu trưởng đồng ý bằng văn bản.', 'Phân biệt đối xử với học sinh khuyết tật khi thực hiện nhiệm vụ dạy học.'],
    correctAnswer: 2,
    explanation: 'Khoản 1 Điều 10 cấm tham gia đình công và đăng thông tin sai lệch. Khoản 5 cấm phân biệt đối xử khuyết tật. Riêng việc ký hợp đồng ngoài giờ được Hiệu trưởng đồng ý là được phép theo khoản 1 Điều 13 Luật Viên chức 2025.'
  },
  {
    id: 'q-15', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Viên chức được kiến nghị về kết quả xếp loại chất lượng trong thời hạn bao nhiêu ngày?',
    options: ['03 ngày làm việc kể từ ngày công khai kết quả xếp loại.', '05 ngày kể từ ngày công khai kết quả xếp loại chất lượng.', '10 ngày làm việc kể từ ngày nhận được thông báo kết quả.', '15 ngày kể từ ngày kết thúc năm học.'],
    correctAnswer: 1,
    explanation: 'Khoản 2 Điều 27 Luật Viên chức 2025: Thời hạn kiến nghị là 05 ngày kể từ ngày công khai kết quả xếp loại chất lượng. Cơ quan có thẩm quyền phải giải quyết trong 10 ngày làm việc.'
  },
  {
    id: 'q-16', docId: 'nghi-dinh-93-2026', difficulty: 'easy',
    question: 'Điều kiện để một giáo viên tiểu học được thi thăng hạng từ hạng III lên hạng II theo Nghị định 93/2026 là gì?',
    options: ['Phải có ít nhất 3 năm kinh nghiệm dạy học và bằng cử nhân sư phạm.', 'Phải đạt yêu cầu nhiệm vụ của hạng III; hoàn thành bồi dưỡng; xếp loại Hoàn thành tốt trở lên 2 năm liên tiếp.', 'Chỉ cần được Hiệu trưởng đề cử và có ý kiến đồng ý của Phòng Giáo dục.', 'Phải có bằng Thạc sĩ chuyên ngành giáo dục tiểu học.'],
    correctAnswer: 1,
    explanation: 'Theo Nghị định 93/2026, điều kiện thăng hạng: đáp ứng yêu cầu nhiệm vụ hạng hiện tại; hoàn thành chương trình bồi dưỡng theo yêu cầu; được xếp loại hoàn thành tốt nhiệm vụ trở lên trong 2 năm liên tiếp gần nhất.'
  },
  {
    id: 'q-17', docId: 'thong-tu-30-2026', difficulty: 'hard',
    question: 'Thông tư 30/2026/TT-BGDĐT thay thế văn bản pháp lý nào và có hiệu lực từ khi nào?',
    options: ['Thay thế Thông tư 14/2011 và có hiệu lực từ ngày 01/01/2026.', 'Thay thế Thông tư 20/2018/TT-BGDĐT và có hiệu lực từ ngày 14/4/2026.', 'Thay thế Thông tư 06/2019/TT-BGDĐT và có hiệu lực từ ngày 30/6/2026.', 'Thay thế Thông tư 25/2015/TT-BGDĐT và có hiệu lực từ ngày 01/9/2026.'],
    correctAnswer: 1,
    explanation: 'Thông tư 30/2026/TT-BGDĐT ban hành ngày 14/4/2026, có hiệu lực từ ngày ban hành, thay thế Thông tư số 20/2018/TT-BGDĐT ngày 22/8/2018 quy định chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông.'
  },
  {
    id: 'q-18', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Nhà giáo vi phạm quy tắc ứng xử theo Thông tư 03/2026 có thể bị xử lý như thế nào?',
    options: ['Chỉ bị nhắc nhở nội bộ trong phạm vi trường học, không có biện pháp chính thức.', 'Bị xử lý theo quy định về kỷ luật viên chức tương ứng với mức độ vi phạm.', 'Chỉ bị phạt tiền từ 500.000 đồng đến 3.000.000 đồng không kèm hình thức khác.', 'Bị tự động chuyển sang làm nhân viên hành chính không thực hiện nhiệm vụ giảng dạy.'],
    correctAnswer: 1,
    explanation: 'Vi phạm quy tắc ứng xử nhà giáo được xử lý theo các hình thức kỷ luật viên chức: khiển trách, cảnh cáo, cách chức (viên chức quản lý), buộc thôi việc tùy theo tính chất và mức độ vi phạm.'
  },
  {
    id: 'q-19', docId: 'luat-nha-giao-2025', difficulty: 'hard',
    question: 'Theo Luật Nhà giáo 2025, điều kiện nào là bắt buộc để trở thành nhà giáo trong cơ sở giáo dục công lập?',
    options: ['Phải có bằng Tiến sĩ chuyên ngành và kinh nghiệm nghiên cứu khoa học trên 3 năm.', 'Phải đạt trình độ chuẩn được đào tạo theo quy định, có phẩm chất và năng lực sư phạm.', 'Phải là công dân Việt Nam, không vi phạm pháp luật và đóng BHXH liên tục 5 năm.', 'Phải tốt nghiệp trường sư phạm đặc cách theo danh sách Bộ Giáo dục và Đào tạo công nhận.'],
    correctAnswer: 1,
    explanation: 'Luật Nhà giáo 2025 quy định nhà giáo phải đạt trình độ chuẩn được đào tạo (chuẩn trình độ đào tạo theo từng cấp học) và có đủ phẩm chất, năng lực sư phạm theo quy định.'
  },
  {
    id: 'q-20', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Theo Luật Viên chức 2025, viên chức được xếp loại "Không hoàn thành nhiệm vụ" thì sẽ bị xử lý như thế nào?',
    options: ['Tự động bị buộc thôi việc ngay sau kỳ đánh giá năm.', 'Phải thi lại bài kiểm tra nghiệp vụ trong vòng 30 ngày để duy trì hợp đồng.', 'Cơ quan có thẩm quyền xem xét bố trí vào vị trí thấp hơn hoặc cho thôi việc.', 'Chỉ bị cắt thưởng cuối năm, không ảnh hưởng đến hợp đồng làm việc.'],
    correctAnswer: 2,
    explanation: 'Khoản 2c Điều 26 Luật Viên chức 2025: Căn cứ kết quả đánh giá xếp loại, cơ quan có thẩm quyền xem xét, bố trí vào vị trí việc làm phù hợp ở trình độ thấp hơn hoặc cho thôi việc đối với trường hợp không hoàn thành nhiệm vụ - không phải tự động buộc thôi việc.'
  },

  // ===== LUẬT NHÀ GIÁO 73/2025 — câu 21–30 =====
  {
    id: 'q-21', docId: 'luat-nha-giao-2025', difficulty: 'easy',
    question: 'Theo Luật Nhà giáo số 73/2025/QH15, nhà giáo được nghỉ hè bao nhiêu tuần mỗi năm?',
    options: ['4 tuần', '6 tuần', '8 tuần', '10 tuần'],
    correctAnswer: 2,
    explanation: 'Điều 16 (khoản 3) Luật Nhà giáo 2025 quy định chế độ làm việc của nhà giáo, trong đó thời gian nghỉ hè hàng năm được bố trí phù hợp theo từng cấp học theo quy định của Chính phủ. Thời gian nghỉ hè 8 tuần được thực hiện theo văn bản hướng dẫn của Chính phủ và được tính vào thời gian làm việc.'
  },
  {
    id: 'q-22', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Thời hiệu xử lý kỷ luật nhà giáo vi phạm thông thường theo Luật Nhà giáo 2025 là bao lâu?',
    options: ['2 năm kể từ thời điểm phát hiện vi phạm.', '3 năm kể từ thời điểm xảy ra vi phạm.', '5 năm kể từ thời điểm xảy ra vi phạm.', '10 năm đối với mọi hành vi vi phạm.'],
    correctAnswer: 2,
    explanation: 'Nhà giáo là viên chức nên thời hiệu xử lý kỷ luật áp dụng theo Luật Viên chức 2025 (Điều 33): 2 năm với vi phạm ít nghiêm trọng, 5 năm với vi phạm nghiêm trọng, 10 năm đối với vi phạm về tham nhũng hoặc gây hậu quả đặc biệt nghiêm trọng.'
  },
  {
    id: 'q-23', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Luật Nhà giáo 2025 quy định có bao nhiêu hình thức kỷ luật đối với nhà giáo?',
    options: ['2 hình thức: cảnh cáo và buộc thôi việc.', '3 hình thức: khiển trách, cảnh cáo, buộc thôi việc.', '4 hình thức: khiển trách, cảnh cáo, hạ bậc lương, buộc thôi việc.', '5 hình thức: khiển trách, cảnh cáo, hạ bậc lương, cách chức, buộc thôi việc.'],
    correctAnswer: 2,
    explanation: 'Điều 35 Luật Nhà giáo 2025 quy định xử lý kỷ luật nhà giáo; theo đó nhà giáo không giữ chức vụ quản lý có 4 hình thức kỷ luật: (1) Khiển trách; (2) Cảnh cáo; (3) Hạ bậc lương; (4) Buộc thôi việc. Nhà giáo giữ chức vụ quản lý còn có thêm hình thức cách chức.'
  },
  {
    id: 'q-24', docId: 'luat-nha-giao-2025', difficulty: 'easy',
    question: 'Theo Luật Nhà giáo 2025, chứng chỉ hành nghề nhà giáo do cơ quan nào cấp?',
    options: ['Ủy ban nhân dân tỉnh/thành phố nơi nhà giáo công tác.', 'Sở Giáo dục và Đào tạo địa phương.', 'Bộ Giáo dục và Đào tạo.', 'Hội đồng nhân dân tỉnh theo phân cấp.'],
    correctAnswer: 2,
    explanation: 'Luật Nhà giáo 2025 quy định Bộ Giáo dục và Đào tạo là cơ quan có thẩm quyền cấp chứng chỉ hành nghề nhà giáo trên toàn quốc, đảm bảo tính thống nhất trong quản lý chất lượng nhà giáo.'
  },
  {
    id: 'q-25', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Hành vi nào sau đây bị nghiêm cấm đối với nhà giáo theo Luật Nhà giáo 2025?',
    options: ['Yêu cầu học sinh làm bài tập nâng cao ngoài chương trình chuẩn.', 'Tổ chức hoạt động ngoại khóa tự nguyện ngoài giờ học chính thức.', 'Xúc phạm danh dự, bạo hành, gian lận trong kiểm tra đánh giá học sinh.', 'Liên hệ với phụ huynh học sinh qua mạng xã hội để trao đổi về kết quả học tập.'],
    correctAnswer: 2,
    explanation: 'Điều 11 Luật Nhà giáo 2025 nghiêm cấm nhà giáo xúc phạm danh dự, nhân phẩm, bạo hành học sinh; gian lận trong kiểm tra, đánh giá, thi cử; thu tiền trái quy định và các hành vi phi đạo đức nghề nghiệp khác.'
  },
  {
    id: 'q-26', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Theo Luật Nhà giáo 2025, lương của nhà giáo được xếp như thế nào trong hệ thống thang bảng lương?',
    options: ['Ngang bằng với mức lương trung bình của cán bộ công chức nhà nước.', 'Cao nhất trong hệ thống thang bảng lương hành chính sự nghiệp, cộng với phụ cấp ưu đãi nghề đặc thù.', 'Thấp hơn lương công chức nhưng được bù đắp toàn bộ bằng phụ cấp thâm niên.', 'Do mỗi địa phương tự quyết định dựa trên nguồn thu ngân sách.'],
    correctAnswer: 1,
    explanation: 'Điều 23 Luật Nhà giáo 2025 quy định: Lương của nhà giáo được xếp cao nhất trong hệ thống thang bảng lương hành chính sự nghiệp của Đảng và Nhà nước, đồng thời được hưởng phụ cấp ưu đãi nghề và các chính sách đặc thù khác.'
  },
  {
    id: 'q-27', docId: 'luat-nha-giao-2025', difficulty: 'easy',
    question: 'Theo Luật Nhà giáo 2025, nhà giáo có quyền gì liên quan đến hoạt động chuyên môn?',
    options: ['Quyền tự ý thay đổi chương trình giáo dục quốc gia không cần phê duyệt.', 'Quyền tự chủ chuyên môn và lựa chọn phương pháp giảng dạy phù hợp với học sinh.', 'Quyền từ chối thực hiện nhiệm vụ được phân công nếu không phù hợp chuyên ngành đào tạo.', 'Quyền tự cấp chứng chỉ học tập cho học sinh theo tiêu chí riêng của giáo viên.'],
    correctAnswer: 1,
    explanation: 'Điều 8 Luật Nhà giáo 2025 ghi nhận quyền tự chủ chuyên môn của nhà giáo: được lựa chọn phương pháp, hình thức tổ chức dạy học, giáo dục phù hợp với đối tượng học sinh trong khuôn khổ chương trình giáo dục quốc gia.'
  },
  {
    id: 'q-28', docId: 'luat-nha-giao-2025', difficulty: 'hard',
    question: 'Nhà giáo vi phạm có thể bị đình chỉ giảng dạy tối đa bao lâu theo Luật Nhà giáo 2025?',
    options: ['Tối đa 3 tháng trong thời gian chờ xử lý kỷ luật.', 'Tối đa 6 tháng và được xem xét gia hạn thêm 6 tháng.', 'Tối đa 12 tháng trong thời gian xem xét, xử lý kỷ luật.', 'Không giới hạn thời gian đình chỉ nếu vi phạm đặc biệt nghiêm trọng.'],
    correctAnswer: 2,
    explanation: 'Theo Điều 36 Luật Nhà giáo 2025, nhà giáo vi phạm có thể bị tạm đình chỉ giảng dạy trong thời gian xem xét, xử lý kỷ luật. Thời gian cụ thể và mức lương trong thời gian đình chỉ áp dụng theo pháp luật về viên chức đối với nhà giáo công lập.'
  },
  {
    id: 'q-29', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Luật Nhà giáo 2025 quy định nghĩa vụ bắt buộc nào mà nhà giáo phải thực hiện liên quan đến phát triển bản thân?',
    options: ['Phải có bằng Thạc sĩ trở lên trong vòng 5 năm đầu công tác.', 'Học tập suốt đời, thực hiện đúng chương trình và chuẩn nghề nghiệp nhà giáo.', 'Tham dự tối thiểu 200 tiết bồi dưỡng chuyên môn mỗi năm học.', 'Xuất bản ít nhất 1 bài báo khoa học mỗi năm trong các tạp chí giáo dục.'],
    correctAnswer: 1,
    explanation: 'Điều 9 Luật Nhà giáo 2025 quy định nghĩa vụ của nhà giáo bao gồm: học tập, bồi dưỡng nâng cao trình độ chuyên môn, nghiệp vụ suốt đời; thực hiện đúng chương trình giáo dục và chuẩn nghề nghiệp; không ngừng nâng cao năng lực sư phạm.'
  },
  {
    id: 'q-30', docId: 'luat-nha-giao-2025', difficulty: 'hard',
    question: 'Từ thời điểm nào nhà giáo không phải thực hiện chế độ tập sự khi mới vào nghề theo Luật Nhà giáo 2025?',
    options: ['Từ ngày 01/01/2026.', 'Từ ngày 01/4/2026.', 'Từ ngày 01/7/2026.', 'Từ ngày 01/9/2026 (đầu năm học mới).'],
    correctAnswer: 2,
    explanation: 'Theo Nghị định 93/2026/NĐ-CP hướng dẫn thi hành Luật Nhà giáo, từ ngày 01/7/2026 bãi bỏ hoàn toàn chế độ tập sự đối với nhà giáo. Nhà giáo mới tuyển dụng được hưởng 100% lương và thực hiện nhiệm vụ đầy đủ ngay từ khi ký hợp đồng.'
  },

  // ===== LUẬT VIÊN CHỨC 129/2025 — câu 31–40 =====
  {
    id: 'q-31', docId: 'luat-vien-chuc-2025', difficulty: 'easy',
    question: 'Điểm khác biệt căn bản nhất phân biệt viên chức với công chức theo Luật Viên chức 2025 là gì?',
    options: ['Viên chức không được nghỉ phép năm, công chức được nghỉ phép năm.', 'Viên chức làm việc theo hợp đồng làm việc tại đơn vị sự nghiệp công lập, công chức làm việc theo quyết định tại cơ quan hành chính nhà nước.', 'Viên chức không phải đóng BHXH bắt buộc, còn công chức phải đóng đầy đủ.', 'Viên chức chỉ được tuyển dụng theo hình thức xét tuyển, không được thi tuyển.'],
    correctAnswer: 1,
    explanation: 'Điều 1 Luật Viên chức 2025: Viên chức là công dân Việt Nam được tuyển dụng theo vị trí việc làm, làm việc tại đơn vị sự nghiệp công lập theo chế độ hợp đồng làm việc. Khác với công chức làm việc theo quyết định hành chính tại cơ quan nhà nước.'
  },
  {
    id: 'q-32', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Theo Luật Viên chức 2025 (sửa đổi), mỗi viên chức được ký hợp đồng làm việc tại bao nhiêu đơn vị sự nghiệp công lập cùng lúc?',
    options: ['Tối đa 2 đơn vị nếu được cả hai cơ quan chủ quản đồng ý.', 'Chỉ được ký hợp đồng làm việc chính thức tại 1 đơn vị sự nghiệp công lập.', 'Không giới hạn số lượng đơn vị nếu thời gian công tác không chồng chéo.', 'Tối đa 3 đơn vị trong cùng một hệ thống ngành dọc (ví dụ: giáo dục).'],
    correctAnswer: 1,
    explanation: 'Điều 8 khoản 5 Luật Viên chức 2025 quy định viên chức chỉ được ký kết hợp đồng làm việc chính thức với 01 đơn vị sự nghiệp công lập. Đây là điểm quan trọng nhằm chống kiêm nhiệm không minh bạch và đảm bảo chất lượng công việc.'
  },
  {
    id: 'q-33', docId: 'luat-vien-chuc-2025', difficulty: 'easy',
    question: 'Theo Luật Viên chức 2025, có bao nhiêu mức đánh giá xếp loại chất lượng viên chức hàng năm?',
    options: ['2 mức: Hoàn thành và Không hoàn thành.', '3 mức: Tốt, Đạt và Không hoàn thành.', '4 mức: Xuất sắc, Tốt, Đạt, Không hoàn thành nhiệm vụ.', '5 mức: Xuất sắc, Tốt, Khá, Đạt, Không hoàn thành.'],
    correctAnswer: 2,
    explanation: 'Điều 25 Luật Viên chức 2025 quy định 4 mức xếp loại chất lượng viên chức: (1) Hoàn thành xuất sắc nhiệm vụ; (2) Hoàn thành tốt nhiệm vụ; (3) Hoàn thành nhiệm vụ; (4) Không hoàn thành nhiệm vụ.'
  },
  {
    id: 'q-34', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Hình thức kỷ luật nặng nhất có thể áp dụng đối với viên chức theo Luật Viên chức 2025 là gì?',
    options: ['Hạ bậc lương và đình chỉ công tác 12 tháng.', 'Cách chức tất cả các chức vụ đang đảm nhiệm.', 'Buộc thôi việc.', 'Chuyển vùng công tác đến vùng đặc biệt khó khăn.'],
    correctAnswer: 2,
    explanation: 'Điều 30 Luật Viên chức 2025 quy định các hình thức kỷ luật: (1) Khiển trách; (2) Cảnh cáo; (3) Cách chức (áp dụng với viên chức giữ chức vụ quản lý); (4) Buộc thôi việc. Buộc thôi việc là hình thức kỷ luật nặng nhất.'
  },
  {
    id: 'q-35', docId: 'luat-vien-chuc-2025', difficulty: 'hard',
    question: 'Thời hiệu xử lý kỷ luật viên chức có hành vi tham nhũng theo Luật Viên chức 2025 là bao lâu?',
    options: ['5 năm kể từ thời điểm xảy ra vi phạm.', '7 năm kể từ khi phát hiện vi phạm.', '10 năm kể từ thời điểm xảy ra vi phạm.', 'Không có thời hiệu — có thể xử lý bất cứ lúc nào.'],
    correctAnswer: 2,
    explanation: 'Khoản 3 Điều 33 Luật Viên chức 2025: Thời hiệu xử lý kỷ luật là 10 năm đối với hành vi vi phạm pháp luật về tham nhũng, thực hành tiết kiệm chống lãng phí và các hành vi gây hậu quả đặc biệt nghiêm trọng. Vi phạm thông thường là 5 năm (2 năm nếu ít nghiêm trọng).'
  },
  {
    id: 'q-36', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Thời hiệu xử lý kỷ luật đối với vi phạm thông thường của viên chức theo Luật Viên chức 2025 là bao nhiêu?',
    options: ['1 năm với vi phạm ít nghiêm trọng, 3 năm với vi phạm nghiêm trọng.', '2 năm với vi phạm ít nghiêm trọng, 5 năm với vi phạm nghiêm trọng hơn.', '3 năm đồng nhất cho mọi mức độ vi phạm thông thường.', '5 năm đồng nhất không phân biệt mức độ vi phạm.'],
    correctAnswer: 1,
    explanation: 'Điều 33 Luật Viên chức 2025: Thời hiệu xử lý kỷ luật là 2 năm đối với vi phạm ít nghiêm trọng; 5 năm đối với vi phạm nghiêm trọng hơn nhưng chưa đến mức tham nhũng hoặc gây hậu quả đặc biệt nghiêm trọng.'
  },
  {
    id: 'q-37', docId: 'luat-vien-chuc-2025', difficulty: 'medium',
    question: 'Theo Điều 13 Luật Viên chức 2025, viên chức có được góp vốn vào cơ sở giáo dục ngoài công lập (trường tư) không?',
    options: ['Không được phép vì tạo xung đột lợi ích với vai trò nhà giáo công lập.', 'Được phép góp vốn và tham gia quản lý, điều hành (trừ trường hợp pháp luật phòng chống tham nhũng có quy định khác).', 'Chỉ được góp vốn nếu nhận được sự chấp thuận của Bộ Giáo dục và Đào tạo.', 'Hoàn toàn không có quy định cụ thể, do đó tùy từng trường hợp.'],
    correctAnswer: 1,
    explanation: 'Điều 13 khoản 3 Luật Viên chức 2025 cho phép viên chức được góp vốn, tham gia quản lý, điều hành doanh nghiệp, hợp tác xã, bệnh viện, cơ sở giáo dục ngoài công lập, trừ trường hợp pháp luật về phòng chống tham nhũng hoặc pháp luật chuyên ngành có quy định khác.'
  },
  {
    id: 'q-38', docId: 'luat-vien-chuc-2025', difficulty: 'easy',
    question: 'Theo Luật Viên chức 2025, bốn mức đánh giá xếp loại viên chức theo thứ tự từ cao đến thấp là gì?',
    options: ['Giỏi / Khá / Trung bình / Yếu.', 'Xuất sắc / Tốt / Hoàn thành / Không hoàn thành nhiệm vụ.', 'Tốt / Khá / Đạt / Không đạt.', 'Hoàn thành xuất sắc / Hoàn thành tốt / Hoàn thành / Không hoàn thành nhiệm vụ.'],
    correctAnswer: 3,
    explanation: 'Điều 25 Luật Viên chức 2025 quy định 4 mức xếp loại theo thứ tự: (1) Hoàn thành xuất sắc nhiệm vụ; (2) Hoàn thành tốt nhiệm vụ; (3) Hoàn thành nhiệm vụ; (4) Không hoàn thành nhiệm vụ. Đây là cơ sở để bình xét thi đua, khen thưởng và xem xét ký tiếp hợp đồng.'
  },
  {
    id: 'q-39', docId: 'luat-vien-chuc-2025', difficulty: 'hard',
    question: 'Điều kiện nào là bắt buộc để viên chức được xét thăng hạng chức danh nghề nghiệp theo Luật Viên chức 2025?',
    options: ['Chỉ cần được Hiệu trưởng đề xuất và Phòng Giáo dục đồng ý.', 'Phải thi hoặc xét thăng hạng và có bằng cấp chuyên môn phù hợp với hạng được thăng.', 'Phải có thâm niên giảng dạy tối thiểu 10 năm và danh hiệu Giáo viên dạy giỏi cấp tỉnh.', 'Tự động thăng hạng sau mỗi 5 năm nếu không bị kỷ luật.'],
    correctAnswer: 1,
    explanation: 'Điều 32 Luật Viên chức 2025: Thăng hạng chức danh nghề nghiệp thực hiện thông qua thi hoặc xét theo quy định, viên chức phải đáp ứng tiêu chuẩn của hạng được thăng (bằng cấp chuyên môn, chứng chỉ bồi dưỡng, xếp loại đánh giá và thời gian giữ hạng hiện tại).'
  },
  {
    id: 'q-40', docId: 'luat-vien-chuc-2025', difficulty: 'easy',
    question: 'Theo Luật Viên chức 2025, viên chức có được thực hiện quyền bầu cử, ứng cử không?',
    options: ['Không được ứng cử vào cơ quan dân cử vì đang là viên chức nhà nước.', 'Chỉ được bầu cử, không được ứng cử vào các cơ quan dân cử.', 'Được thực hiện đầy đủ quyền bầu cử và ứng cử theo quy định của pháp luật.', 'Phải xin phép Hiệu trưởng trước khi thực hiện quyền bầu cử.'],
    correctAnswer: 2,
    explanation: 'Điều 9 Luật Viên chức 2025 quy định viên chức có quyền của công dân theo Hiến pháp và pháp luật, bao gồm quyền bầu cử và ứng cử vào Quốc hội, Hội đồng nhân dân các cấp và các cơ quan khác theo quy định.'
  },

  // ===== NĐ 93/2026 — câu 41–50 =====
  {
    id: 'q-41', docId: 'nghi-dinh-93-2026', difficulty: 'medium',
    question: 'Điều kiện nào để giáo viên hợp đồng được cộng 5 điểm ưu tiên vào kết quả thi Vòng 2 kỳ tuyển dụng theo Nghị định 93/2026?',
    options: ['Có thâm niên giảng dạy từ đủ 12 tháng trở lên và được Hiệu trưởng xác nhận.', 'Có thâm niên giảng dạy từ đủ 24 tháng và tốt nghiệp đại học loại khá trở lên.', 'Có thâm niên giảng dạy từ đủ 36 tháng (3 năm) trở lên và có đóng BHXH bắt buộc.', 'Có thâm niên giảng dạy từ đủ 60 tháng (5 năm) tại vùng đặc biệt khó khăn.'],
    correctAnswer: 2,
    explanation: 'Điều 6 Nghị định 93/2026/NĐ-CP: Người có thời gian thực tế giảng dạy từ đủ 36 tháng (3 năm) trở lên tại cơ sở giáo dục công lập hoặc dân lập/tư thục, có đóng BHXH bắt buộc phù hợp với vị trí dự tuyển, được cộng 05 điểm vào kết quả thi Vòng 2.'
  },
  {
    id: 'q-42', docId: 'nghi-dinh-93-2026', difficulty: 'hard',
    question: 'Theo Nghị định 93/2026/NĐ-CP, từ ngày nào bãi bỏ chế độ tập sự đối với nhà giáo mới được tuyển dụng?',
    options: ['Từ ngày 31/3/2026 — ngày Nghị định 93 có hiệu lực.', 'Từ ngày 01/4/2026.', 'Từ ngày 01/7/2026.', 'Từ ngày 01/9/2026 — đầu năm học mới 2026-2027.'],
    correctAnswer: 2,
    explanation: 'Điều 37 Nghị định 93/2026/NĐ-CP quy định chế độ tập sự đối với nhà giáo bị bãi bỏ từ ngày 01/7/2026. Từ thời điểm này, nhà giáo mới tuyển dụng được nhận việc và hưởng đầy đủ lương ngay khi hợp đồng có hiệu lực, không phải qua giai đoạn tập sự.'
  },
  {
    id: 'q-43', docId: 'nghi-dinh-93-2026', difficulty: 'medium',
    question: 'Theo Nghị định 93/2026/NĐ-CP, nhà giáo mới được tuyển dụng nhận việc sẽ được hưởng bao nhiêu phần trăm lương?',
    options: ['75% lương chính thức trong 6 tháng đầu thử việc.', '85% lương chính thức trong 12 tháng tập sự.', '100% lương chính thức ngay khi hợp đồng có hiệu lực, không có chế độ tập sự.', '90% lương trong năm đầu, đủ 100% từ năm thứ hai trở đi.'],
    correctAnswer: 2,
    explanation: 'Điều 21 Nghị định 93/2026 quy định: Từ ngày 01/7/2026, nhà giáo trúng tuyển được ký hợp đồng làm việc và hưởng 100% lương ngay từ ngày đầu nhận việc. Chế độ tập sự (85% lương) bị bãi bỏ hoàn toàn.'
  },
  {
    id: 'q-44', docId: 'nghi-dinh-93-2026', difficulty: 'easy',
    question: 'Nghị định 93/2026/NĐ-CP hướng dẫn chi tiết thi hành những nội dung liên quan đến luật nào?',
    options: ['Luật Viên chức số 129/2025/QH15 về tuyển dụng viên chức.', 'Luật Nhà giáo số 73/2025/QH15 về tuyển dụng, quản lý và chính sách nhà giáo.', 'Luật Giáo dục 2019 về tiêu chuẩn trình độ đào tạo giáo viên.', 'Luật Lao động 2019 về hợp đồng làm việc và chế độ BHXH giáo viên.'],
    correctAnswer: 1,
    explanation: 'Nghị định 93/2026/NĐ-CP được ban hành để hướng dẫn chi tiết thi hành một số điều của Luật Nhà giáo số 73/2025/QH15, quy định cụ thể về tuyển dụng, ký hợp đồng, bổ nhiệm, chứng chỉ hành nghề và các chính sách đặc thù cho nhà giáo.'
  },
  {
    id: 'q-45', docId: 'nghi-dinh-93-2026', difficulty: 'hard',
    question: 'Chứng chỉ hành nghề nhà giáo theo Nghị định 93/2026 có quy định cụ thể về thời hạn như thế nào?',
    options: ['Có giá trị vĩnh viễn, không cần gia hạn trong suốt quá trình hành nghề.', 'Có giá trị 5 năm, phải gia hạn định kỳ sau mỗi 5 năm.', 'Có thời hạn theo quy định của Bộ Giáo dục và Đào tạo, có thể gia hạn khi đáp ứng điều kiện.', 'Hết hạn khi nhà giáo chuyển công tác sang địa phương khác.'],
    correctAnswer: 2,
    explanation: 'Điều 18 Nghị định 93/2026: Thời hạn của chứng chỉ hành nghề nhà giáo do Bộ Giáo dục và Đào tạo quy định cụ thể. Nhà giáo có thể được gia hạn chứng chỉ khi đáp ứng điều kiện bồi dưỡng, cập nhật kiến thức và không vi phạm đạo đức nghề nghiệp.'
  },
  {
    id: 'q-46', docId: 'nghi-dinh-93-2026', difficulty: 'medium',
    question: 'Theo Nghị định 93/2026/NĐ-CP, thời hạn để nhà giáo trúng tuyển ký hợp đồng làm việc sau khi có quyết định tuyển dụng là bao nhiêu?',
    options: ['Trong vòng 3 ngày làm việc kể từ ngày có quyết định tuyển dụng.', 'Trong vòng 5 ngày làm việc kể từ ngày có quyết định tuyển dụng.', 'Trong vòng 15 ngày kể từ ngày có quyết định tuyển dụng.', 'Trong vòng 30 ngày kể từ ngày nhận được thông báo trúng tuyển.'],
    correctAnswer: 1,
    explanation: 'Điều 20 Nghị định 93/2026 quy định: Sau khi có quyết định tuyển dụng, người trúng tuyển và đơn vị phải hoàn thành ký kết hợp đồng làm việc trong vòng 5 ngày làm việc. Nếu quá thời hạn mà không có lý do chính đáng, quyết định tuyển dụng có thể bị hủy.'
  },
  {
    id: 'q-47', docId: 'nghi-dinh-93-2026', difficulty: 'medium',
    question: 'Nhà giáo muốn được bổ nhiệm vào chức vụ quản lý trường tiểu học (Hiệu trưởng/Phó Hiệu trưởng) cần có điều kiện gì liên quan đến thời gian giảng dạy?',
    options: ['Phải có ít nhất 3 năm giảng dạy và danh hiệu Giáo viên dạy giỏi cấp huyện.', 'Phải có thời gian giảng dạy theo quy định, đạt chuẩn nghề nghiệp và hoàn thành bồi dưỡng quản lý.', 'Chỉ cần có bằng Thạc sĩ Quản lý Giáo dục mà không cần kinh nghiệm dạy học.', 'Phải có ít nhất 15 năm kinh nghiệm giảng dạy tại cùng một trường.'],
    correctAnswer: 1,
    explanation: 'Điều 25 Nghị định 93/2026 quy định: Điều kiện bổ nhiệm vào chức vụ quản lý trường tiểu học gồm thời gian giảng dạy theo quy định (thường 5 năm trở lên), đạt chuẩn nghề nghiệp mức Tốt trở lên và hoàn thành chương trình bồi dưỡng quản lý trường học.'
  },
  {
    id: 'q-48', docId: 'nghi-dinh-93-2026', difficulty: 'easy',
    question: 'Nhà giáo công tác tại vùng đặc biệt khó khăn được hưởng hỗ trợ gì theo quy định đặc thù tại Nghị định 93/2026?',
    options: ['Được miễn toàn bộ học phí cho con em khi học tại cơ sở giáo dục công lập.', 'Được cấp nhà công vụ, hưởng phụ cấp vùng và các chính sách thu hút đặc thù.', 'Được tuyển thẳng vào hạng chức danh cao hơn mà không cần qua thi thăng hạng.', 'Được làm việc từ xa (remote) tại thành phố trong 3 tháng mỗi năm.'],
    correctAnswer: 1,
    explanation: 'Điều 30 Nghị định 93/2026 quy định chính sách đặc thù cho nhà giáo vùng khó khăn: được bố trí nhà công vụ hoặc hỗ trợ thuê nhà; hưởng phụ cấp vùng, phụ cấp thu hút và các hỗ trợ di chuyển, ổn định cuộc sống theo quy định của Chính phủ.'
  },
  {
    id: 'q-49', docId: 'nghi-dinh-93-2026', difficulty: 'easy',
    question: 'Cơ quan nào có thẩm quyền cấp chứng chỉ hành nghề nhà giáo theo Nghị định 93/2026?',
    options: ['Sở Giáo dục và Đào tạo tỉnh/thành phố nơi nhà giáo đăng ký hành nghề.', 'Phòng Giáo dục và Đào tạo huyện/quận nơi trường học đóng trụ sở.', 'Bộ Giáo dục và Đào tạo.', 'Ủy ban nhân dân tỉnh/thành phố trực thuộc trung ương.'],
    correctAnswer: 2,
    explanation: 'Điều 16 Nghị định 93/2026 quy định rõ: Bộ Giáo dục và Đào tạo là cơ quan duy nhất có thẩm quyền cấp chứng chỉ hành nghề nhà giáo trên phạm vi cả nước, đảm bảo tính thống nhất và tiêu chuẩn quốc gia trong quản lý chất lượng nhà giáo.'
  },
  {
    id: 'q-50', docId: 'nghi-dinh-93-2026', difficulty: 'hard',
    question: 'Nghị định 93/2026/NĐ-CP có hiệu lực thi hành từ ngày nào?',
    options: ['Từ ngày 01/01/2026.', 'Từ ngày 28/02/2026.', 'Từ ngày 31/3/2026.', 'Từ ngày 01/7/2026 cùng lúc với bãi bỏ chế độ tập sự.'],
    correctAnswer: 2,
    explanation: 'Điều 40 Nghị định 93/2026/NĐ-CP quy định Nghị định này có hiệu lực thi hành từ ngày 31/3/2026. Tuy nhiên, một số điều khoản cụ thể (như bãi bỏ chế độ tập sự) có lộ trình riêng, có hiệu lực từ ngày 01/7/2026.'
  },

  // ===== NĐ 259/2026 — câu 51–60 =====
  {
    id: 'q-51', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Vòng 1 thi tuyển viên chức theo Nghị định 259/2026 gồm bao nhiêu câu trắc nghiệm và thời gian làm bài là bao lâu?',
    options: ['40 câu / 40 phút.', '60 câu / 60 phút.', '80 câu / 90 phút.', '100 câu / 120 phút.'],
    correctAnswer: 1,
    explanation: 'Điều 11 Nghị định 259/2026/NĐ-CP quy định Vòng 1 (thi trắc nghiệm kiến thức chung) gồm 60 câu hỏi trắc nghiệm, thời gian làm bài 60 phút. Phần Ngoại ngữ: số lượng câu hỏi do Hội đồng tuyển dụng quyết định, thời gian thi tối đa 60 phút.'
  },
  {
    id: 'q-52', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Điểm tối thiểu để thí sinh đạt yêu cầu Vòng 1 thi tuyển viên chức theo Nghị định 259/2026 là bao nhiêu câu trả lời đúng?',
    options: ['Trả lời đúng ít nhất 20 câu (33,3%) trên tổng số 60 câu.', 'Trả lời đúng ít nhất 30 câu (50%) ở từng phần thi.', 'Trả lời đúng ít nhất 40 câu (66,7%) trên tổng số 60 câu.', 'Trả lời đúng ít nhất 45 câu (75%) trên tổng số 60 câu.'],
    correctAnswer: 1,
    explanation: 'Điều 11 Nghị định 259/2026: Thí sinh đạt Vòng 1 khi trả lời đúng từ 50% số câu hỏi trở lên ở từng phần thi (kiến thức chung và ngoại ngữ). Tức là phải đúng ít nhất 30/60 câu kiến thức chung và 15/30 câu ngoại ngữ.'
  },
  {
    id: 'q-53', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Điểm tối thiểu đạt yêu cầu Vòng 2 thi tuyển viên chức theo Nghị định 259/2026 là bao nhiêu?',
    options: ['Đạt tối thiểu 40/100 điểm bài thi Vòng 2.', 'Đạt tối thiểu 50/100 điểm bài thi Vòng 2.', 'Đạt tối thiểu 60/100 điểm bài thi Vòng 2.', 'Đạt tối thiểu 70/100 điểm bài thi Vòng 2.'],
    correctAnswer: 1,
    explanation: 'Điều 14 Nghị định 259/2026 quy định: Thí sinh đạt yêu cầu Vòng 2 khi đạt từ 50 điểm trở lên trên tổng số 100 điểm của bài thi Vòng 2 (thi viết, phỏng vấn hoặc thực hành).'
  },
  {
    id: 'q-54', docId: 'nghi-dinh-259-2026', difficulty: 'hard',
    question: 'Nghị định 259/2026/NĐ-CP thay thế bao nhiêu nghị định cũ về tuyển dụng và đào tạo, bồi dưỡng viên chức?',
    options: ['2 nghị định cũ.', '3 nghị định cũ.', '4 nghị định cũ.', '5 nghị định cũ.'],
    correctAnswer: 2,
    explanation: 'Điều 58 Nghị định 259/2026 quy định bãi bỏ và thay thế 4 nghị định: NĐ 115/2020/NĐ-CP về tuyển dụng viên chức; NĐ 85/2023/NĐ-CP sửa đổi NĐ 115; NĐ 101/2017/NĐ-CP về đào tạo bồi dưỡng cán bộ công chức viên chức; NĐ 89/2021/NĐ-CP sửa đổi NĐ 101.'
  },
  {
    id: 'q-55', docId: 'nghi-dinh-259-2026', difficulty: 'hard',
    question: 'Bốn nghị định bị thay thế bởi Nghị định 259/2026 là những nghị định nào?',
    options: ['NĐ 29/2012, NĐ 161/2018, NĐ 45/2020, NĐ 138/2020.', 'NĐ 115/2020, NĐ 85/2023, NĐ 101/2017, NĐ 89/2021.', 'NĐ 06/2010, NĐ 29/2012, NĐ 115/2020, NĐ 101/2017.', 'NĐ 24/2010, NĐ 36/2013, NĐ 55/2015, NĐ 90/2020.'],
    correctAnswer: 1,
    explanation: 'Nghị định 259/2026 bãi bỏ và thay thế: (1) NĐ 115/2020/NĐ-CP về tuyển dụng, sử dụng, quản lý viên chức; (2) NĐ 85/2023/NĐ-CP sửa đổi NĐ 115; (3) NĐ 101/2017/NĐ-CP về đào tạo, bồi dưỡng cán bộ, công chức, viên chức; (4) NĐ 89/2021/NĐ-CP sửa đổi NĐ 101.'
  },
  {
    id: 'q-56', docId: 'nghi-dinh-259-2026', difficulty: 'hard',
    question: 'Nghị định 259/2026/NĐ-CP có hiệu lực thi hành từ ngày nào?',
    options: ['Từ ngày 01/01/2026.', 'Từ ngày 31/3/2026.', 'Từ ngày 01/6/2026.', 'Từ ngày 01/7/2026.'],
    correctAnswer: 3,
    explanation: 'Điều 60 Nghị định 259/2026/NĐ-CP quy định Nghị định này có hiệu lực thi hành từ ngày 01/7/2026, thay thế đồng loạt 4 nghị định cũ về tuyển dụng và đào tạo, bồi dưỡng viên chức. Đây cũng là thời điểm bãi bỏ chế độ tập sự nhà giáo.'
  },
  {
    id: 'q-57', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Bài thi Vòng 2 thi tuyển viên chức theo Nghị định 259/2026 kéo dài bao lâu?',
    options: ['60 phút (1 tiếng).', '120 phút (2 tiếng).', '180 phút (3 tiếng).', '240 phút (4 tiếng).'],
    correctAnswer: 2,
    explanation: 'Điều 11 Nghị định 259/2026 quy định: Bài thi Vòng 2 (thi viết) có thời gian làm bài là 180 phút (3 tiếng). Đối với hình thức phỏng vấn, thời gian chuẩn bị không quá 15 phút và phỏng vấn tối đa 30 phút.'
  },
  {
    id: 'q-58', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Theo Nghị định 259/2026, sau khi có quyết định trúng tuyển, viên chức phải ký hợp đồng làm việc trong vòng bao lâu?',
    options: ['Trong vòng 3 ngày làm việc.', 'Trong vòng 5 ngày làm việc.', 'Trong vòng 10 ngày làm việc.', 'Trong vòng 15 ngày kể từ ngày nhận thông báo.'],
    correctAnswer: 1,
    explanation: 'Điều 21 Nghị định 259/2026: Trong thời hạn 5 ngày làm việc kể từ ngày quyết định tuyển dụng có hiệu lực, người đứng đầu đơn vị sự nghiệp công lập và người trúng tuyển phải hoàn thành ký kết hợp đồng làm việc.'
  },
  {
    id: 'q-59', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Vòng 2 thi tuyển viên chức theo Nghị định 259/2026 gồm những hình thức thi nào?',
    options: ['Chỉ có hình thức thi viết luận văn chuyên môn.', 'Lựa chọn 1 trong 2 hình thức: Thực hành; hoặc kết hợp thi viết và phỏng vấn.', 'Phải thi đủ cả 3 hình thức: viết, phỏng vấn và thực hành.', 'Thi trắc nghiệm chuyên sâu kết hợp thuyết trình giáo án.'],
    correctAnswer: 1,
    explanation: 'Điều 11 Nghị định 259/2026 quy định hình thức thi Vòng 2 lựa chọn 1 trong 2 hình thức: (1) Thực hành; hoặc (2) Kết hợp thi viết và phỏng vấn. Không có hình thức thi viết đơn thuần hay phỏng vấn đơn thuần.'
  },
  {
    id: 'q-60', docId: 'nghi-dinh-259-2026', difficulty: 'hard',
    question: 'Phần thi Ngoại ngữ trong Vòng 1 tuyển dụng viên chức theo Nghị định 259/2026 gồm bao nhiêu câu và thời gian làm bài là bao lâu?',
    options: ['Cố định 20 câu / thời gian 20 phút.', 'Cố định 30 câu / thời gian 30 phút.', 'Số câu do Hội đồng tuyển dụng quyết định, thời gian tối đa 60 phút.', 'Cố định 60 câu / thời gian 60 phút (giống phần kiến thức chung).'],
    correctAnswer: 2,
    explanation: 'Điều 11 Nghị định 259/2026: Phần thi Ngoại ngữ trong Vòng 1 có số lượng câu hỏi do Hội đồng tuyển dụng quyết định, thời gian thi tối đa 60 phút. Thí sinh trả lời đúng từ 50% số câu trở lên là đạt. Có thể được miễn nếu có chứng chỉ ngoại ngữ đạt chuẩn.'
  },

  // ===== TT 03/2026 ỨNG XỬ — câu 61–70 =====
  {
    id: 'q-61', docId: 'thong-tu-03-2026', difficulty: 'easy',
    question: 'Thông tư số 03/2026/TT-BGDĐT quy định về vấn đề gì liên quan đến nhà giáo?',
    options: ['Chuẩn trình độ đào tạo và chương trình bồi dưỡng nhà giáo.', 'Quy tắc ứng xử của nhà giáo trong cơ sở giáo dục mầm non, phổ thông và giáo dục thường xuyên.', 'Chế độ làm việc và định mức tiết dạy của giáo viên tiểu học.', 'Tổ chức và hoạt động của tổ chuyên môn trong nhà trường.'],
    correctAnswer: 1,
    explanation: 'Thông tư 03/2026/TT-BGDĐT do Bộ GD&ĐT ban hành, quy định về quy tắc ứng xử của nhà giáo trong các cơ sở giáo dục mầm non, giáo dục phổ thông và giáo dục thường xuyên, nhằm xây dựng môi trường giáo dục lành mạnh, chuyên nghiệp.'
  },
  {
    id: 'q-62', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Khi nhận được quà tặng từ phụ huynh học sinh, nhà giáo phải xử lý như thế nào theo Thông tư 03/2026?',
    options: ['Được nhận tất cả quà tặng vì đây là tình cảm tự nguyện của phụ huynh.', 'Phải từ chối hoặc trả lại quà tặng có giá trị lớn, báo cáo lãnh đạo nếu cần thiết.', 'Được nhận quà dưới 500.000 đồng, từ chối nếu quà trên 500.000 đồng.', 'Chỉ được nhận quà hiện vật, không được nhận tiền mặt.'],
    correctAnswer: 1,
    explanation: 'Điều 8 Thông tư 03/2026 quy định: Nhà giáo không được nhận tiền, tài sản hoặc lợi ích vật chất từ người học, gia đình người học. Khi nhận được quà tặng, nhà giáo phải từ chối hoặc trả lại; nếu không thể trả lại ngay, phải báo cáo lãnh đạo và nộp lại đơn vị xử lý theo quy định.'
  },
  {
    id: 'q-63', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Theo Thông tư 03/2026, nhà giáo được đăng tải loại thông tin nào lên mạng xã hội?',
    options: ['Bất kỳ thông tin cá nhân nào vì đây là quyền tự do ngôn luận của công dân.', 'Chỉ được đăng thông tin đúng sự thật, không ảnh hưởng đến uy tín nhà trường và ngành giáo dục.', 'Được chia sẻ mọi thông tin liên quan đến học sinh để phụ huynh tiện theo dõi.', 'Được đăng thông tin về học sinh miễn là không kèm hình ảnh nhận dạng.'],
    correctAnswer: 1,
    explanation: 'Điều 10 Thông tư 03/2026 quy định: Nhà giáo chỉ được đăng tải, chia sẻ thông tin đúng sự thật trên mạng xã hội; không được đăng thông tin sai lệch, không chính xác hoặc có nội dung gây ảnh hưởng xấu đến uy tín của nhà trường, ngành giáo dục và Nhà nước.'
  },
  {
    id: 'q-64', docId: 'thong-tu-03-2026', difficulty: 'easy',
    question: 'Hành vi nào sau đây bị cấm khi nhà giáo ứng xử với học sinh theo Thông tư 03/2026?',
    options: ['Nhắc nhở học sinh khi nói chuyện riêng trong giờ học.', 'Yêu cầu học sinh ở lại sau giờ học để phụ đạo bài.', 'Xúc phạm nhân phẩm, trừng phạt thể xác và phân biệt đối xử học sinh.', 'Liên lạc với phụ huynh khi học sinh có kết quả học tập giảm sút.'],
    correctAnswer: 2,
    explanation: 'Điều 6 Thông tư 03/2026 nghiêm cấm nhà giáo: xúc phạm danh dự, nhân phẩm học sinh; trừng phạt thể xác dưới mọi hình thức; có thái độ phân biệt đối xử về giới tính, dân tộc, tôn giáo, hoàn cảnh gia đình. Đây là 3 trong 5 nhóm hành vi bị cấm.'
  },
  {
    id: 'q-65', docId: 'thong-tu-03-2026', difficulty: 'hard',
    question: 'Thông tư 03/2026/TT-BGDĐT có hiệu lực thi hành từ ngày nào?',
    options: ['Từ ngày 01/01/2026.', 'Từ ngày 30/01/2026.', 'Từ ngày 01/3/2026.', 'Từ ngày 01/9/2026.'],
    correctAnswer: 1,
    explanation: 'Thông tư 03/2026/TT-BGDĐT được Bộ Giáo dục và Đào tạo ban hành ngày 30/01/2026 và có hiệu lực từ ngày ban hành 30/01/2026. Đây là thời điểm bắt đầu áp dụng quy tắc ứng xử mới trong các cơ sở giáo dục phổ thông trên toàn quốc.'
  },
  {
    id: 'q-66', docId: 'thong-tu-03-2026', difficulty: 'hard',
    question: 'Thông tư 03/2026 quy định bao nhiêu nhóm hành vi bị cấm đối với nhà giáo?',
    options: ['3 nhóm hành vi cấm.', '4 nhóm hành vi cấm.', '5 nhóm hành vi cấm.', '7 nhóm hành vi cấm.'],
    correctAnswer: 2,
    explanation: 'Thông tư 03/2026 quy định 5 nhóm hành vi bị nghiêm cấm: (1) Vi phạm đạo đức nghề nghiệp; (2) Xúc phạm, trừng phạt, phân biệt đối xử học sinh; (3) Dạy thêm trái quy định; (4) Nhận quà, tiền từ phụ huynh, học sinh; (5) Đăng thông tin sai lệch, gây ảnh hưởng xấu trên mạng xã hội.'
  },
  {
    id: 'q-67', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Theo Thông tư 03/2026, nhà giáo ứng xử với đồng nghiệp phải đảm bảo nguyên tắc gì?',
    options: ['Chỉ cần lịch sự trong giao tiếp hằng ngày, không cần hợp tác trong chuyên môn.', 'Đoàn kết, hợp tác, tôn trọng lẫn nhau và không cạnh tranh không lành mạnh.', 'Phải giữ bí mật về phương pháp giảng dạy riêng của bản thân.', 'Được phép từ chối tham gia sinh hoạt chuyên môn nếu bận công việc cá nhân.'],
    correctAnswer: 1,
    explanation: 'Điều 7 Thông tư 03/2026 quy định chuẩn mực ứng xử với đồng nghiệp: Nhà giáo phải đoàn kết, hợp tác, tôn trọng, chia sẻ kinh nghiệm; không ganh đua, cạnh tranh không lành mạnh; hỗ trợ đồng nghiệp mới và cùng nhau nâng cao chất lượng giáo dục.'
  },
  {
    id: 'q-68', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Khi học sinh có vấn đề khó khăn về tâm lý hoặc học tập, nhà giáo cần làm gì theo chuẩn mực ứng xử tại Thông tư 03/2026?',
    options: ['Chuyển ngay học sinh sang lớp khác hoặc đề nghị nhà trường can thiệp.', 'Lắng nghe, tư vấn kịp thời và phối hợp với gia đình để hỗ trợ học sinh.', 'Báo cáo với cơ quan chức năng ngay khi phát hiện học sinh có dấu hiệu bất thường.', 'Không can thiệp vì đây là trách nhiệm của cha mẹ học sinh và nhà tâm lý.'],
    correctAnswer: 1,
    explanation: 'Điều 6 Thông tư 03/2026 quy định: Nhà giáo có trách nhiệm lắng nghe, quan tâm, tư vấn và hỗ trợ kịp thời khi học sinh gặp khó khăn; phối hợp chặt chẽ với gia đình để cùng giải quyết vấn đề, đảm bảo quyền lợi tốt nhất cho người học.'
  },
  {
    id: 'q-69', docId: 'thong-tu-03-2026', difficulty: 'hard',
    question: 'Theo Thông tư 03/2026, khi không đồng ý với quyết định của lãnh đạo, nhà giáo nên xử lý như thế nào?',
    options: ['Được công khai phản đối qua mạng xã hội để tạo sức ép buộc lãnh đạo thay đổi quyết định.', 'Phản ánh đúng kênh, góp ý xây dựng theo quy trình nội bộ hoặc qua các kênh hợp pháp.', 'Từ chối thực hiện quyết định cho đến khi lãnh đạo giải thích thỏa đáng.', 'Liên hệ trực tiếp với cơ quan quản lý cấp trên mà không cần thông báo cho lãnh đạo trực tiếp.'],
    correctAnswer: 1,
    explanation: 'Điều 9 Thông tư 03/2026 quy định: Khi không đồng ý với quyết định của lãnh đạo, nhà giáo phải phản ánh theo đúng kênh nội bộ (họp tổ chuyên môn, gặp lãnh đạo trực tiếp, kiến nghị bằng văn bản) hoặc qua các tổ chức đoàn thể, tuyệt đối không được gây áp lực bằng dư luận hay mạng xã hội.'
  },
  {
    id: 'q-70', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Theo Thông tư 03/2026, hoạt động dạy thêm trái quy định của nhà giáo được xác định là hành vi như thế nào?',
    options: ['Được chấp nhận nếu học sinh tự nguyện và phụ huynh đồng ý.', 'Chỉ bị nhắc nhở lần đầu, bị phạt tiền nếu tái phạm lần thứ hai.', 'Bị nghiêm cấm và có thể bị xử lý kỷ luật tùy theo mức độ vi phạm.', 'Không có quy định cụ thể trong Thông tư 03/2026.'],
    correctAnswer: 2,
    explanation: 'Thông tư 03/2026 xác định dạy thêm trái quy định là 1 trong 5 nhóm hành vi bị nghiêm cấm đối với nhà giáo. Vi phạm sẽ bị xử lý theo quy định về kỷ luật viên chức: từ khiển trách, cảnh cáo đến buộc thôi việc tùy mức độ, và có thể bị xử phạt hành chính theo quy định của Chính phủ.'
  },

  // ===== TT 30/2026 CHUẨN NGHỀ NGHIỆP — câu 71–80 =====
  {
    id: 'q-71', docId: 'thong-tu-30-2026', difficulty: 'easy',
    question: 'Thông tư 30/2026/TT-BGDĐT quy định chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông gồm bao nhiêu tiêu chuẩn?',
    options: ['3 tiêu chuẩn', '4 tiêu chuẩn', '5 tiêu chuẩn', '6 tiêu chuẩn'],
    correctAnswer: 2,
    explanation: 'Điều 4 Thông tư 30/2026/TT-BGDĐT quy định chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông gồm 5 tiêu chuẩn: (1) Phẩm chất nhà giáo; (2) Năng lực chuyên môn nghiệp vụ; (3) Năng lực xây dựng môi trường giáo dục; (4) Năng lực phát triển mối quan hệ; (5) Năng lực phát triển bản thân và tổ chức.'
  },
  {
    id: 'q-72', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Tổng số tiêu chí trong chuẩn nghề nghiệp giáo viên tiểu học theo Thông tư 30/2026 là bao nhiêu?',
    options: ['10 tiêu chí', '12 tiêu chí', '15 tiêu chí', '20 tiêu chí'],
    correctAnswer: 2,
    explanation: 'Thông tư 30/2026/TT-BGDĐT quy định chuẩn nghề nghiệp giáo viên tiểu học gồm 5 tiêu chuẩn được cụ thể hóa thành 15 tiêu chí: Tiêu chuẩn 1 có 3 tiêu chí, Tiêu chuẩn 2 có 6 tiêu chí, Tiêu chuẩn 3 có 2 tiêu chí, Tiêu chuẩn 4 có 2 tiêu chí, Tiêu chuẩn 5 có 2 tiêu chí.'
  },
  {
    id: 'q-73', docId: 'thong-tu-30-2026', difficulty: 'easy',
    question: 'Đánh giá chuẩn nghề nghiệp giáo viên theo Thông tư 30/2026 có mấy mức xếp loại?',
    options: ['2 mức: Đạt và Chưa đạt.', '3 mức: Tốt, Khá và Đạt.', '4 mức: Tốt, Khá, Đạt và Chưa đạt.', '5 mức: Xuất sắc, Tốt, Khá, Đạt và Chưa đạt.'],
    correctAnswer: 2,
    explanation: 'Điều 7 Thông tư 30/2026 quy định 4 mức xếp loại kết quả đánh giá chuẩn nghề nghiệp giáo viên: (1) Tốt; (2) Khá; (3) Đạt; (4) Chưa đạt. Kết quả đánh giá là cơ sở để xem xét bổ nhiệm, thăng hạng, khen thưởng và các chính sách khác.'
  },
  {
    id: 'q-74', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Tiêu chuẩn 2 về Năng lực chuyên môn nghiệp vụ trong Thông tư 30/2026 có bao nhiêu tiêu chí?',
    options: ['3 tiêu chí', '4 tiêu chí', '5 tiêu chí', '6 tiêu chí'],
    correctAnswer: 3,
    explanation: 'Tiêu chuẩn 2 về Năng lực chuyên môn nghiệp vụ trong Thông tư 30/2026 gồm 6 tiêu chí: (1) Xây dựng kế hoạch dạy học; (2) Thực hiện dạy học; (3) Kiểm tra đánh giá kết quả học tập; (4) Tư vấn, hỗ trợ học sinh; (5) Ứng dụng CNTT và phương tiện dạy học; (6) Sử dụng ngoại ngữ trong dạy học.'
  },
  {
    id: 'q-75', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Trong chuẩn nghề nghiệp giáo viên tiểu học theo Thông tư 30/2026, tiêu chuẩn nào quy định về ứng dụng công nghệ thông tin?',
    options: ['Tiêu chuẩn 1 — Phẩm chất nhà giáo.', 'Tiêu chuẩn 2 — Năng lực chuyên môn nghiệp vụ.', 'Tiêu chuẩn 3 — Năng lực xây dựng môi trường giáo dục.', 'Tiêu chuẩn 5 — Năng lực phát triển bản thân.'],
    correctAnswer: 1,
    explanation: 'Tiêu chuẩn 2 (Năng lực chuyên môn nghiệp vụ) của Thông tư 30/2026 bao gồm tiêu chí 2.5 về "Ứng dụng công nghệ thông tin và sử dụng phương tiện dạy học hiệu quả". Đây là tiêu chí phản ánh yêu cầu về năng lực số trong thời đại 4.0.'
  },
  {
    id: 'q-76', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Theo Thông tư 30/2026, đánh giá chuẩn nghề nghiệp giáo viên được thực hiện vào thời điểm nào trong năm?',
    options: ['Vào đầu năm học (tháng 9) khi lên kế hoạch công tác.', 'Vào giữa năm học (tháng 12-1) kết hợp với sơ kết học kỳ I.', 'Vào cuối năm học sau khi kết thúc năm học chính thức.', 'Bất kỳ thời điểm nào trong năm theo quyết định của Hiệu trưởng.'],
    correctAnswer: 2,
    explanation: 'Điều 8 Thông tư 30/2026 quy định: Đánh giá chuẩn nghề nghiệp giáo viên được thực hiện vào cuối năm học, gắn với đánh giá xếp loại chất lượng viên chức hàng năm. Kết quả đánh giá chuẩn nghề nghiệp là một trong các căn cứ để đánh giá xếp loại viên chức.'
  },
  {
    id: 'q-77', docId: 'thong-tu-30-2026', difficulty: 'easy',
    question: 'Thông tư 30/2026/TT-BGDĐT thay thế thông tư nào về chuẩn nghề nghiệp giáo viên?',
    options: ['Thông tư 14/2011/TT-BGDĐT.', 'Thông tư 20/2018/TT-BGDĐT.', 'Thông tư 06/2019/TT-BGDĐT.', 'Thông tư 25/2015/TT-BGDĐT.'],
    correctAnswer: 1,
    explanation: 'Điều 12 Thông tư 30/2026/TT-BGDĐT quy định: Thông tư này thay thế Thông tư số 20/2018/TT-BGDĐT ngày 22/8/2018 của Bộ trưởng Bộ Giáo dục và Đào tạo ban hành quy định chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông.'
  },
  {
    id: 'q-78', docId: 'thong-tu-30-2026', difficulty: 'hard',
    question: 'Giáo viên bị xếp loại "Chưa đạt" chuẩn nghề nghiệp 2 năm liên tiếp theo Thông tư 30/2026 sẽ bị xử lý như thế nào?',
    options: ['Chỉ bị hạ bậc lương và bổ sung kế hoạch bồi dưỡng cá nhân.', 'Tự động bị chấm dứt hợp đồng làm việc ngay sau kỳ đánh giá.', 'Xem xét chấm dứt hợp đồng làm việc theo quy định của pháp luật về viên chức.', 'Bắt buộc học lại chương trình đại học sư phạm và thi lại chứng chỉ hành nghề.'],
    correctAnswer: 2,
    explanation: 'Điều 9 Thông tư 30/2026 quy định: Giáo viên xếp loại "Chưa đạt" chuẩn nghề nghiệp 2 năm liên tiếp, cơ quan có thẩm quyền xem xét chấm dứt hợp đồng làm việc theo quy định của Luật Viên chức 2025. Đây không phải tự động chấm dứt mà phải qua quy trình xem xét.'
  },
  {
    id: 'q-79', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Tiêu chuẩn 1 về Phẩm chất nhà giáo trong Thông tư 30/2026 có bao nhiêu tiêu chí?',
    options: ['2 tiêu chí', '3 tiêu chí', '4 tiêu chí', '5 tiêu chí'],
    correctAnswer: 1,
    explanation: 'Tiêu chuẩn 1 (Phẩm chất nhà giáo) trong Thông tư 30/2026 gồm 3 tiêu chí: (1.1) Đạo đức nghề nghiệp; (1.2) Phong cách nhà giáo; (1.3) Tư tưởng chính trị và trách nhiệm công dân. Đây là nền tảng phẩm chất mà mọi giáo viên phải đạt được.'
  },
  {
    id: 'q-80', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Thông tư 30/2026/TT-BGDĐT về chuẩn nghề nghiệp áp dụng cho đối tượng nào?',
    options: ['Chỉ áp dụng cho giáo viên tiểu học tại các trường công lập thành phố lớn.', 'Áp dụng cho giáo viên, giảng viên tại tất cả các cấp học từ mầm non đến đại học.', 'Áp dụng cho giáo viên cơ sở giáo dục phổ thông công lập trên toàn quốc.', 'Chỉ áp dụng cho giáo viên mới được tuyển dụng sau ngày Thông tư có hiệu lực.'],
    correctAnswer: 2,
    explanation: 'Điều 1 Thông tư 30/2026/TT-BGDĐT quy định phạm vi áp dụng: Chuẩn nghề nghiệp áp dụng cho giáo viên đang giảng dạy tại các cơ sở giáo dục phổ thông công lập (gồm tiểu học, THCS, THPT và trường phổ thông nhiều cấp học) trên phạm vi toàn quốc.'
  },

  // ===== Nghị quyết 71-NQ/TW (2025) =====
  {
    id: 'q-81', docId: 'nq-71-2025', difficulty: 'easy',
    question: 'Nghị quyết 71-NQ/TW ngày 28/8/2025 của Bộ Chính trị đặt ra mục tiêu gì về giáo dục đến năm 2030?',
    options: ['Giáo dục Việt Nam đứng top 50 thế giới', 'Đột phá phát triển giáo dục và đào tạo đáp ứng yêu cầu phát triển đất nước trong kỷ nguyên mới', 'Phổ cập giáo dục THPT toàn quốc trước năm 2027', 'Xóa bỏ hoàn toàn hệ thống trường ngoài công lập'],
    correctAnswer: 1,
    explanation: 'NQ 71-NQ/TW xác định mục tiêu tổng quát: Đột phá phát triển giáo dục và đào tạo đáp ứng yêu cầu phát triển đất nước trong kỷ nguyên mới, đưa giáo dục Việt Nam đạt trình độ tiên tiến trong khu vực.'
  },
  {
    id: 'q-82', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'Nghị quyết 71-NQ/TW xác định vai trò của nhà giáo như thế nào?',
    options: ['Là công chức nhà nước thực hiện nhiệm vụ hành chính', 'Là lực lượng nòng cốt, quyết định chất lượng giáo dục', 'Là người hỗ trợ học sinh trong quá trình tự học', 'Là người quản lý chương trình học theo chỉ đạo của Bộ'],
    correctAnswer: 1,
    explanation: 'NQ 71-NQ/TW khẳng định nhà giáo là lực lượng nòng cốt, quyết định chất lượng giáo dục. Nghị quyết nhấn mạnh phải xây dựng đội ngũ nhà giáo đủ về số lượng, đảm bảo chất lượng, đồng bộ về cơ cấu.'
  },
  {
    id: 'q-83', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'NQ 71-NQ/TW đề ra chủ trương gì về lương nhà giáo?',
    options: ['Giữ nguyên mức lương hiện tại, bổ sung phụ cấp đặc thù', 'Lương nhà giáo phải được xếp cao nhất trong hệ thống thang bậc lương', 'Thực hiện khoán lương theo kết quả giảng dạy', 'Chuyển hoàn toàn sang cơ chế trả lương theo thị trường'],
    correctAnswer: 1,
    explanation: 'NQ 71-NQ/TW chủ trương lương nhà giáo được xếp cao nhất trong hệ thống thang bậc lương của Đảng và Nhà nước, kèm phụ cấp ưu đãi nghề đặc thù — đây là điểm đột phá quan trọng thể hiện sự trân trọng đội ngũ nhà giáo.'
  },
  {
    id: 'q-84', docId: 'nq-71-2025', difficulty: 'hard',
    question: 'Nghị quyết 71 yêu cầu đổi mới căn bản điều gì trong giáo dục phổ thông?',
    options: ['Bỏ hệ thống thi cử, chuyển sang đánh giá quá trình', 'Chuyển từ truyền thụ kiến thức sang phát triển năng lực và phẩm chất người học', 'Tăng số giờ học lên 8 tiếng/ngày để tăng chất lượng', 'Thống nhất một bộ sách giáo khoa duy nhất cho toàn quốc'],
    correctAnswer: 1,
    explanation: 'NQ 71-NQ/TW yêu cầu đổi mới căn bản, toàn diện giáo dục theo hướng chuyển từ truyền thụ kiến thức sang phát triển năng lực và phẩm chất người học — phù hợp với Chương trình GDPT 2018.'
  },
  {
    id: 'q-85', docId: 'nq-71-2025', difficulty: 'easy',
    question: 'NQ 71-NQ/TW được Bộ Chính trị ban hành vào ngày nào?',
    options: ['15/7/2025', '28/8/2025', '01/9/2025', '22/12/2025'],
    correctAnswer: 1,
    explanation: 'Nghị quyết số 71-NQ/TW được Bộ Chính trị ban hành ngày 28/8/2025 về đột phá phát triển giáo dục và đào tạo đáp ứng yêu cầu phát triển đất nước trong kỷ nguyên mới.'
  },
  {
    id: 'q-86', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'NQ 71 đề ra mục tiêu cụ thể nào về tỷ lệ đào tạo đại học đến 2030?',
    options: ['50% dân số trong độ tuổi có bằng đại học', 'Ít nhất 40% lực lượng lao động qua đào tạo có bằng cấp, chứng chỉ', '100% học sinh THPT vào đại học', 'Xóa hoàn toàn hệ đào tạo cao đẳng nghề'],
    correctAnswer: 1,
    explanation: 'NQ 71-NQ/TW đề ra mục tiêu đến năm 2030: ít nhất 40% lực lượng lao động qua đào tạo có bằng cấp, chứng chỉ, nâng cao chất lượng nguồn nhân lực đáp ứng yêu cầu phát triển kinh tế - xã hội.'
  },
  {
    id: 'q-87', docId: 'nq-71-2025', difficulty: 'hard',
    question: 'Theo NQ 71, trách nhiệm của cấp ủy, chính quyền địa phương đối với giáo dục là gì?',
    options: ['Không can thiệp vào hoạt động chuyên môn của nhà trường', 'Chịu trách nhiệm trực tiếp về chất lượng giáo dục trên địa bàn', 'Chỉ chịu trách nhiệm về cơ sở vật chất, không phải chất lượng dạy học', 'Giao toàn quyền cho ngành giáo dục tự quản lý'],
    correctAnswer: 1,
    explanation: 'NQ 71 xác định cấp ủy, chính quyền địa phương các cấp chịu trách nhiệm trực tiếp về chất lượng giáo dục trên địa bàn, tạo ra cơ chế trách nhiệm rõ ràng trong hệ thống quản lý giáo dục.'
  },
  {
    id: 'q-88', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'NQ 71 yêu cầu xây dựng môi trường giáo dục như thế nào?',
    options: ['Tuyệt đối an toàn, không có bất kỳ áp lực học tập nào', 'Dân chủ, kỷ cương, nhân ái, khuyến khích sáng tạo', 'Cạnh tranh cao để thúc đẩy học sinh phát triển', 'Tập trung vào kết quả thi cử và thành tích học tập'],
    correctAnswer: 1,
    explanation: 'NQ 71 yêu cầu xây dựng môi trường giáo dục dân chủ, kỷ cương, nhân ái, khuyến khích sáng tạo — môi trường này tạo điều kiện để học sinh phát triển toàn diện về đức, trí, thể, mỹ.'
  },
  {
    id: 'q-89', docId: 'nq-71-2025', difficulty: 'easy',
    question: 'NQ 71-NQ/TW đặt giáo dục ở vị trí nào trong chiến lược phát triển quốc gia?',
    options: ['Ngành dịch vụ công quan trọng', 'Quốc sách hàng đầu, ưu tiên phát triển', 'Lĩnh vực kinh tế - xã hội thứ yếu', 'Trách nhiệm của từng gia đình, không phải nhà nước'],
    correctAnswer: 1,
    explanation: 'NQ 71 tiếp tục khẳng định giáo dục là quốc sách hàng đầu, phát triển giáo dục và đào tạo là ưu tiên hàng đầu trong chiến lược phát triển đất nước trong kỷ nguyên mới.'
  },
  {
    id: 'q-90', docId: 'nq-71-2025', difficulty: 'hard',
    question: 'Giải pháp đột phá nào về hội nhập quốc tế được NQ 71 đề ra?',
    options: ['Chỉ dùng chương trình học của các nước phát triển', 'Tăng cường hợp tác quốc tế, học hỏi kinh nghiệm tốt, xây dựng nền giáo dục tiên tiến mang bản sắc dân tộc', 'Đưa toàn bộ học sinh đi du học nước ngoài', 'Mời chuyên gia nước ngoài thay thế giáo viên Việt Nam'],
    correctAnswer: 1,
    explanation: 'NQ 71 đề ra giải pháp tăng cường hợp tác quốc tế trong giáo dục, học hỏi kinh nghiệm tốt từ các nền giáo dục tiên tiến, đồng thời xây dựng nền giáo dục tiên tiến, hiện đại, mang bản sắc dân tộc.'
  },

  // ===== Nghị quyết 57-NQ/TW (2024) =====
  {
    id: 'q-91', docId: 'nq-57-2024', difficulty: 'easy',
    question: 'Nghị quyết 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về nội dung gì?',
    options: ['Phát triển nông nghiệp bền vững', 'Đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia', 'Cải cách hành chính nhà nước giai đoạn 2025-2030', 'Phát triển kinh tế biển Việt Nam'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia — đây là nền tảng quan trọng cho sự phát triển của giáo dục trong kỷ nguyên số.'
  },
  {
    id: 'q-92', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'NQ 57 xác định chuyển đổi số trong giáo dục cần đạt mục tiêu gì?',
    options: ['Xóa bỏ hoàn toàn phương pháp dạy truyền thống', 'Ứng dụng công nghệ số để nâng cao chất lượng và mở rộng cơ hội tiếp cận giáo dục', 'Thay thế giáo viên bằng hệ thống AI hoàn toàn', 'Chỉ áp dụng chuyển đổi số ở bậc đại học và sau đại học'],
    correctAnswer: 1,
    explanation: 'NQ 57 xác định ứng dụng công nghệ số trong giáo dục nhằm nâng cao chất lượng dạy và học, mở rộng cơ hội tiếp cận giáo dục, không thay thế vai trò của giáo viên mà hỗ trợ giáo viên hiệu quả hơn.'
  },
  {
    id: 'q-93', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'Theo NQ 57, trách nhiệm của giáo viên trong chuyển đổi số là gì?',
    options: ['Không cần biết về công nghệ số, chỉ cần dạy chuyên môn', 'Chủ động học tập, ứng dụng công nghệ số trong giảng dạy và quản lý học tập', 'Phó thác hoàn toàn việc ứng dụng công nghệ cho nhân viên kỹ thuật', 'Từ chối sử dụng công nghệ nếu không được tập huấn đầy đủ'],
    correctAnswer: 1,
    explanation: 'NQ 57 yêu cầu giáo viên chủ động học tập, cập nhật và ứng dụng công nghệ số trong giảng dạy, kiểm tra đánh giá và quản lý học tập — đây là năng lực bắt buộc trong kỷ nguyên chuyển đổi số.'
  },
  {
    id: 'q-94', docId: 'nq-57-2024', difficulty: 'hard',
    question: 'NQ 57 đề ra mục tiêu gì về hạ tầng số trong giáo dục đến 2030?',
    options: ['100% trường học có kết nối internet tốc độ cao và thiết bị số đầy đủ', '50% trường học sử dụng hệ thống quản lý học tập trực tuyến', 'Xây dựng 10 trung tâm dữ liệu lớn cho ngành giáo dục', 'Tất cả học sinh phải có máy tính cá nhân do nhà nước cấp'],
    correctAnswer: 0,
    explanation: 'NQ 57 đặt mục tiêu đến 2030: 100% trường học có kết nối internet băng thông rộng, thiết bị số đầy đủ để triển khai dạy học kết hợp (blended learning) và quản lý giáo dục trên nền tảng số.'
  },
  {
    id: 'q-95', docId: 'nq-57-2024', difficulty: 'easy',
    question: 'NQ 57 xác định AI có vai trò gì trong giáo dục?',
    options: ['AI sẽ thay thế hoàn toàn giáo viên trong tương lai gần', 'AI là công cụ hỗ trợ cá nhân hóa học tập và nâng cao hiệu quả giảng dạy', 'AI chỉ dùng trong kiểm tra, thi cử, không dùng trong dạy học', 'AI không phù hợp với văn hóa giáo dục Việt Nam'],
    correctAnswer: 1,
    explanation: 'NQ 57 xác định AI là công cụ hỗ trợ quan trọng trong giáo dục: cá nhân hóa lộ trình học tập, hỗ trợ giáo viên đánh giá học sinh, và nâng cao hiệu quả quản lý — giáo viên vẫn giữ vai trò trung tâm.'
  },
  {
    id: 'q-96', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'Theo NQ 57, giáo viên cần phát triển năng lực số nào là quan trọng nhất?',
    options: ['Lập trình phần mềm và thiết kế website', 'Sử dụng thành thạo các công cụ số trong dạy học, đánh giá và giao tiếp với phụ huynh', 'Quản trị hệ thống mạng máy tính của nhà trường', 'Thiết kế phần cứng và hệ thống máy chủ'],
    correctAnswer: 1,
    explanation: 'NQ 57 nhấn mạnh giáo viên cần phát triển năng lực số thiết thực: sử dụng thành thạo các công cụ dạy học trực tuyến, hệ thống LMS, công cụ đánh giá số, và kênh giao tiếp số với phụ huynh và học sinh.'
  },
  {
    id: 'q-97', docId: 'nq-57-2024', difficulty: 'hard',
    question: 'NQ 57 đề xuất giải pháp gì để đảm bảo an toàn dữ liệu học sinh trong chuyển đổi số?',
    options: ['Không lưu trữ dữ liệu học sinh trên hệ thống điện tử', 'Xây dựng khung pháp lý bảo vệ dữ liệu cá nhân và tăng cường an ninh mạng trong giáo dục', 'Chỉ dùng phần mềm nước ngoài có uy tín', 'Giao cho phụ huynh tự quản lý dữ liệu của con'],
    correctAnswer: 1,
    explanation: 'NQ 57 yêu cầu xây dựng khung pháp lý bảo vệ dữ liệu cá nhân người học, tăng cường an ninh mạng trong hệ thống giáo dục, đảm bảo quyền riêng tư và an toàn thông tin cho học sinh và giáo viên.'
  },
  {
    id: 'q-98', docId: 'nq-57-2024', difficulty: 'easy',
    question: 'NQ 57-NQ/TW được ban hành ngày tháng năm nào?',
    options: ['01/01/2024', '22/12/2024', '28/8/2025', '15/7/2024'],
    correctAnswer: 1,
    explanation: 'Nghị quyết 57-NQ/TW được Bộ Chính trị ban hành ngày 22/12/2024 về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia.'
  },

  // ===== Luật Giáo dục 43/2019/QH14 (sửa đổi bởi 123/2025/QH15) =====
  {
    id: 'q-99', docId: 'luat-giao-duc-2019', difficulty: 'easy',
    question: 'Theo Luật Giáo dục 2019, hệ thống giáo dục quốc dân Việt Nam gồm mấy bậc?',
    options: ['3 bậc: Tiểu học, THCS, THPT', '4 bậc: Mầm non, Phổ thông, Giáo dục nghề nghiệp, Giáo dục đại học', '5 bậc: Mầm non, Tiểu học, THCS, THPT, Đại học', '2 bậc: Giáo dục phổ thông và Giáo dục chuyên nghiệp'],
    correctAnswer: 1,
    explanation: 'Điều 6 Luật Giáo dục 2019 quy định hệ thống giáo dục quốc dân gồm 4 bậc: Giáo dục mầm non (nhà trẻ và mẫu giáo), Giáo dục phổ thông (tiểu học, THCS, THPT), Giáo dục nghề nghiệp, và Giáo dục đại học.'
  },
  {
    id: 'q-100', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Luật Giáo dục 2019 quy định mục tiêu của giáo dục tiểu học là gì?',
    options: ['Hình thành nhân cách và trang bị kỹ năng tư duy bậc cao', 'Hình thành và phát triển ở học sinh những yếu tố căn bản đặt nền móng cho sự phát triển hài hòa về thể chất và tinh thần, phẩm chất và năng lực', 'Trang bị kiến thức khoa học tự nhiên và xã hội cơ bản', 'Chuẩn bị học sinh sẵn sàng cho kỳ thi tuyển sinh THCS'],
    correctAnswer: 1,
    explanation: 'Điều 30 Luật Giáo dục 2019 quy định giáo dục tiểu học nhằm hình thành và phát triển những yếu tố căn bản đặt nền móng cho sự phát triển hài hòa về thể chất và tinh thần, phẩm chất và năng lực; định hướng chính vào giáo dục về giá trị bản thân, gia đình, cộng đồng.'
  },
  {
    id: 'q-101', docId: 'luat-giao-duc-2019', difficulty: 'easy',
    question: 'Theo Luật Giáo dục 2019, trình độ chuẩn được đào tạo của giáo viên tiểu học là gì?',
    options: ['Trung cấp sư phạm', 'Cao đẳng sư phạm hoặc có bằng cao đẳng trở lên và có chứng chỉ bồi dưỡng nghiệp vụ sư phạm', 'Đại học sư phạm hoặc có bằng đại học và chứng chỉ bồi dưỡng nghiệp vụ sư phạm tiểu học', 'Thạc sĩ chuyên ngành giáo dục tiểu học'],
    correctAnswer: 2,
    explanation: 'Theo Luật Giáo dục 2019 (sửa đổi), trình độ chuẩn của giáo viên tiểu học là tốt nghiệp đại học sư phạm, hoặc tốt nghiệp đại học và có chứng chỉ bồi dưỡng nghiệp vụ sư phạm tiểu học — nâng từ cao đẳng lên đại học.'
  },
  {
    id: 'q-102', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Luật Giáo dục 2019 quy định quyền của người học trong cơ sở giáo dục bao gồm?',
    options: ['Chỉ có quyền được học và thi cử', 'Được học tập, rèn luyện; được đảm bảo điều kiện học tập; được tôn trọng nhân phẩm; được tham gia các hoạt động của cơ sở giáo dục', 'Quyền từ chối tham gia các hoạt động ngoại khóa', 'Quyền tự chọn chương trình học phù hợp sở thích'],
    correctAnswer: 1,
    explanation: 'Điều 83 Luật Giáo dục 2019 quy định người học có nhiều quyền, trong đó quan trọng: được học tập, rèn luyện, được cung cấp thông tin về việc học tập rèn luyện; được tôn trọng và bảo vệ nhân phẩm, danh dự; được tham gia các hoạt động của cơ sở giáo dục.'
  },
  {
    id: 'q-103', docId: 'luat-giao-duc-2019', difficulty: 'hard',
    question: 'Luật số 123/2025/QH15 sửa đổi Luật Giáo dục 2019 có hiệu lực từ ngày nào?',
    options: ['01/01/2025', '01/7/2025', '01/01/2026', '01/7/2026'],
    correctAnswer: 3,
    explanation: 'Luật số 123/2025/QH15 sửa đổi, bổ sung một số điều của Luật Giáo dục có hiệu lực từ ngày 01 tháng 7 năm 2026, thực hiện đồng bộ với các luật về nhà giáo và viên chức có hiệu lực cùng thời điểm.'
  },
  {
    id: 'q-104', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Theo Luật Giáo dục, nhà nước có trách nhiệm gì đối với giáo viên vùng khó khăn?',
    options: ['Không có chính sách đặc thù nào', 'Có chính sách ưu đãi, hỗ trợ về lương, phụ cấp, nhà công vụ, điều kiện làm việc', 'Bắt buộc giáo viên thành phố luân chuyển về vùng khó', 'Chỉ hỗ trợ phương tiện đi lại, không hỗ trợ lương'],
    correctAnswer: 1,
    explanation: 'Luật Giáo dục quy định nhà nước có chính sách ưu đãi, hỗ trợ giáo viên công tác ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn: phụ cấp thu hút, nhà công vụ, hỗ trợ chi phí đi lại, ưu tiên trong đề bạt, bổ nhiệm.'
  },
  {
    id: 'q-105', docId: 'luat-giao-duc-2019', difficulty: 'easy',
    question: 'Giáo dục tiểu học theo Luật Giáo dục được thực hiện trong bao nhiêu năm?',
    options: ['4 năm (lớp 1 đến lớp 4)', '5 năm (lớp 1 đến lớp 5)', '6 năm (lớp 1 đến lớp 6)', '3 năm (lớp 1 đến lớp 3)'],
    correctAnswer: 1,
    explanation: 'Luật Giáo dục quy định giáo dục tiểu học được thực hiện trong 5 năm học, từ lớp 1 đến lớp 5. Đây là bậc học bắt buộc trong giáo dục bắt buộc 9 năm theo quy định.'
  },
  {
    id: 'q-106', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Theo Luật Giáo dục 2019, cơ sở giáo dục tiểu học được tổ chức theo mấy loại hình?',
    options: ['Chỉ 1 loại: công lập', '2 loại: công lập và tư thục (ngoài công lập)', '3 loại: công lập, bán công và tư thục', '4 loại: công lập, bán công, dân lập, tư thục'],
    correctAnswer: 1,
    explanation: 'Luật Giáo dục 2019 quy định cơ sở giáo dục tiểu học được tổ chức theo 2 loại hình: công lập (do nhà nước đầu tư, bảo đảm điều kiện hoạt động) và tư thục/ngoài công lập (do tổ chức, cá nhân đầu tư). Loại hình bán công, dân lập đã được xóa bỏ.'
  },
  {
    id: 'q-107', docId: 'luat-giao-duc-2019', difficulty: 'hard',
    question: 'Điều khoản nào trong Luật Giáo dục quy định về học phí và miễn, giảm học phí?',
    options: ['Điều 95', 'Điều 97', 'Điều 99', 'Điều 101'],
    correctAnswer: 1,
    explanation: 'Điều 97 Luật Giáo dục quy định về học phí, chi phí trong cơ sở giáo dục; Điều 98 quy định về học bổng và trợ cấp xã hội. Học sinh tiểu học trường công lập không phải đóng học phí theo chính sách hiện hành.'
  },
  {
    id: 'q-108', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Theo Luật Giáo dục, nhà trường có được từ chối nhận học sinh có hoàn cảnh khó khăn không đủ điều kiện tài chính không?',
    options: ['Được, nếu trường đã đủ chỉ tiêu tuyển sinh', 'Không được, phải tạo điều kiện và báo cáo cơ quan quản lý để hỗ trợ', 'Được, đây là quyền tự chủ của nhà trường', 'Chỉ được từ chối nếu Hiệu trưởng quyết định'],
    correctAnswer: 1,
    explanation: 'Luật Giáo dục nghiêm cấm từ chối nhận học sinh vì lý do kinh tế. Nhà trường có trách nhiệm tạo điều kiện, phối hợp với cơ quan quản lý tìm nguồn hỗ trợ cho học sinh có hoàn cảnh khó khăn được đến trường.'
  },
  {
    id: 'q-109', docId: 'luat-giao-duc-2019', difficulty: 'easy',
    question: 'Luật Giáo dục quy định giáo dục bắt buộc áp dụng cho độ tuổi nào?',
    options: ['Từ 3 đến 14 tuổi', 'Từ 6 đến 15 tuổi (cấp tiểu học và THCS)', 'Từ 6 đến 18 tuổi (toàn bộ giáo dục phổ thông)', 'Chỉ cấp tiểu học, từ 6 đến 11 tuổi'],
    correctAnswer: 1,
    explanation: 'Luật Giáo dục quy định giáo dục bắt buộc 9 năm, áp dụng cho trẻ em từ 6 tuổi đến 15 tuổi (hoàn thành bậc THCS). Nhà nước, gia đình và xã hội có trách nhiệm bảo đảm quyền học tập bắt buộc của trẻ em.'
  },

  // ===== LUẬT NHÀ GIÁO 73/2025 — câu 110 =====
  {
    id: 'q-110', docId: 'luat-nha-giao-2025', difficulty: 'medium',
    question: 'Theo Luật Nhà giáo 2025, nhà giáo trong cơ sở giáo dục ngoài công lập có được hưởng các chính sách hỗ trợ của Nhà nước không?',
    options: ['Không, chính sách chỉ áp dụng cho nhà giáo công lập.', 'Có, Nhà nước có chính sách hỗ trợ nhà giáo ngoài công lập tương tự công lập về bồi dưỡng và chứng chỉ hành nghề.', 'Chỉ nhận hỗ trợ khi dạy ở vùng đặc biệt khó khăn.', 'Tùy theo thỏa thuận giữa cơ sở giáo dục ngoài công lập và nhà giáo.'],
    correctAnswer: 1,
    explanation: 'Điều 2 Luật Nhà giáo 2025 quy định Luật áp dụng cho nhà giáo trong cả cơ sở giáo dục công lập và ngoài công lập. Nhà nước có chính sách hỗ trợ về bồi dưỡng, phát triển chuyên môn và cấp chứng chỉ hành nghề cho tất cả nhà giáo trong hệ thống giáo dục quốc dân.',
    articleRef: 'Điều 2, Luật Nhà giáo 73/2025/QH15',
    isNew2026: true,
  },

  // ===== THÔNG TƯ 30/2026 CHUẨN NGHỀ NGHIỆP — câu 111–112 =====
  {
    id: 'q-111', docId: 'thong-tu-30-2026', difficulty: 'hard',
    question: 'Theo Thông tư 30/2026/TT-BGDĐT, ai là người chịu trách nhiệm chính trong việc đánh giá chuẩn nghề nghiệp giáo viên hàng năm?',
    options: ['Phòng Giáo dục và Đào tạo huyện/quận tổ chức đánh giá tập trung.', 'Hiệu trưởng là người chịu trách nhiệm đánh giá, kết hợp tự đánh giá của giáo viên và góp ý của tổ chuyên môn.', 'Sở Giáo dục và Đào tạo tổ chức đánh giá định kỳ qua thanh tra chuyên môn.', 'Bộ Giáo dục và Đào tạo tổ chức kiểm tra và cấp chứng nhận đạt chuẩn hằng năm.'],
    correctAnswer: 1,
    explanation: 'Theo Điều 8 Thông tư 30/2026, quy trình đánh giá chuẩn nghề nghiệp gồm 3 bước: (1) Giáo viên tự đánh giá; (2) Tổ chuyên môn góp ý; (3) Hiệu trưởng đánh giá, xếp loại và chịu trách nhiệm về kết quả. Kết quả được báo cáo lên cơ quan quản lý cấp trên.',
    articleRef: 'Điều 8, Thông tư 30/2026/TT-BGDĐT',
    isNew2026: true,
  },
  {
    id: 'q-112', docId: 'thong-tu-30-2026', difficulty: 'medium',
    question: 'Theo Thông tư 30/2026, tiêu chuẩn nào của chuẩn nghề nghiệp giáo viên liên quan đến quan hệ với phụ huynh và cộng đồng?',
    options: ['Tiêu chuẩn 2 — Năng lực chuyên môn nghiệp vụ.', 'Tiêu chuẩn 3 — Năng lực xây dựng môi trường giáo dục.', 'Tiêu chuẩn 4 — Năng lực phát triển mối quan hệ giữa nhà trường, gia đình và xã hội.', 'Tiêu chuẩn 5 — Năng lực phát triển bản thân và tổ chức.'],
    correctAnswer: 2,
    explanation: 'Tiêu chuẩn 4 (Năng lực phát triển mối quan hệ giữa nhà trường, gia đình và xã hội) trong Thông tư 30/2026 gồm 2 tiêu chí: (4.1) Phối hợp với cha mẹ/người giám hộ trong giáo dục học sinh; (4.2) Phối hợp với các tổ chức, cá nhân trong và ngoài nhà trường để hỗ trợ hoạt động giáo dục.',
    articleRef: 'Điều 4, Tiêu chuẩn 4, Thông tư 30/2026/TT-BGDĐT',
    isNew2026: true,
  },

  // ===== NĐ 259/2026 — câu 113–114 =====
  {
    id: 'q-113', docId: 'nghi-dinh-259-2026', difficulty: 'easy',
    question: 'Nghị định 259/2026/NĐ-CP hướng dẫn thi hành những nội dung liên quan đến luật nào?',
    options: ['Luật Nhà giáo số 73/2025/QH15 về tuyển dụng nhà giáo.', 'Luật Viên chức số 129/2025/QH15 về tuyển dụng, sử dụng và quản lý viên chức.', 'Luật Giáo dục số 43/2019/QH14 về cơ sở giáo dục.', 'Luật Lao động 2019 về hợp đồng làm việc.'],
    correctAnswer: 1,
    explanation: 'Nghị định 259/2026/NĐ-CP được ban hành để hướng dẫn chi tiết thi hành Luật Viên chức số 129/2025/QH15, quy định cụ thể về quy trình tuyển dụng, hội đồng thi tuyển, điều kiện dự tuyển, nội dung và hình thức thi tuyển/xét tuyển viên chức nói chung, trong đó có nhà giáo.',
    articleRef: 'Điều 1, Nghị định 259/2026/NĐ-CP',
    isNew2026: true,
  },
  {
    id: 'q-114', docId: 'nghi-dinh-259-2026', difficulty: 'medium',
    question: 'Theo Nghị định 259/2026, trường hợp nào được miễn phần thi Ngoại ngữ trong Vòng 1 tuyển dụng viên chức?',
    options: ['Người có tuổi đời từ 45 tuổi trở lên không cần thi ngoại ngữ.', 'Người có chứng chỉ ngoại ngữ theo khung năng lực ngoại ngữ Việt Nam đạt chuẩn quy định.', 'Người đã làm việc tại cơ quan nhà nước trên 3 năm được miễn.', 'Người tốt nghiệp đại học loại giỏi được miễn phần thi ngoại ngữ.'],
    correctAnswer: 1,
    explanation: 'Điều 10 Nghị định 259/2026 quy định: Thí sinh có chứng chỉ ngoại ngữ theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam đạt mức tương đương với yêu cầu của vị trí tuyển dụng được miễn thi phần Ngoại ngữ ở Vòng 1. Chứng chỉ phải còn hiệu lực tại thời điểm nộp hồ sơ.',
    articleRef: 'Điều 10, Nghị định 259/2026/NĐ-CP',
    isNew2026: true,
  },

  // ===== THÔNG TƯ 03/2026 ỨNG XỬ — câu 115–117 =====
  {
    id: 'q-115', docId: 'thong-tu-03-2026', difficulty: 'easy',
    question: 'Thông tư 03/2026/TT-BGDĐT áp dụng cho những đối tượng nhà giáo ở bậc học nào?',
    options: ['Chỉ áp dụng cho giáo viên tiểu học và THCS.', 'Áp dụng cho nhà giáo trong cơ sở giáo dục mầm non, giáo dục phổ thông và giáo dục thường xuyên.', 'Áp dụng cho toàn bộ nhà giáo từ mầm non đến đại học.', 'Chỉ áp dụng cho giáo viên trong trường công lập, không áp dụng cho trường tư thục.'],
    correctAnswer: 1,
    explanation: 'Điều 1 Thông tư 03/2026/TT-BGDĐT quy định phạm vi áp dụng: Quy tắc ứng xử áp dụng cho nhà giáo đang giảng dạy tại các cơ sở giáo dục mầm non, giáo dục phổ thông (tiểu học, THCS, THPT) và giáo dục thường xuyên — không bao gồm giáo dục đại học và giáo dục nghề nghiệp.',
    articleRef: 'Điều 1, Thông tư 03/2026/TT-BGDĐT',
    isNew2026: true,
  },
  {
    id: 'q-116', docId: 'thong-tu-03-2026', difficulty: 'medium',
    question: 'Theo Thông tư 03/2026, khi giao tiếp với phụ huynh học sinh, nhà giáo cần tuân thủ nguyên tắc ứng xử nào?',
    options: ['Chỉ trao đổi qua ứng dụng quản lý học sinh chính thức, không dùng điện thoại cá nhân.', 'Lịch sự, tôn trọng, cởi mở; cung cấp thông tin trung thực về tình hình học tập và rèn luyện của học sinh.', 'Tránh gặp mặt trực tiếp với phụ huynh để không bị hiểu nhầm, chỉ trao đổi qua văn bản.', 'Ưu tiên trao đổi theo nhóm phụ huynh, không gặp riêng từng phụ huynh.'],
    correctAnswer: 1,
    explanation: 'Điều 8 Thông tư 03/2026 quy định chuẩn mực ứng xử với cha mẹ/người giám hộ học sinh: Nhà giáo phải lịch sự, tôn trọng, cởi mở; cung cấp đầy đủ, trung thực thông tin về tình hình học tập, rèn luyện và sức khỏe của học sinh; không có thái độ kỳ thị hoặc yêu cầu trái quy định từ phụ huynh.',
    articleRef: 'Điều 8, Thông tư 03/2026/TT-BGDĐT',
    isNew2026: true,
  },
  {
    id: 'q-117', docId: 'thong-tu-03-2026', difficulty: 'hard',
    question: 'Theo Thông tư 03/2026, nhà giáo có trách nhiệm gì khi phát hiện học sinh có dấu hiệu bị xâm hại hoặc bạo lực?',
    options: ['Tự xử lý trong phạm vi lớp học, không báo cáo để bảo vệ danh dự học sinh.', 'Báo cáo ngay cho ban giám hiệu và phối hợp với gia đình, cơ quan có thẩm quyền để bảo vệ học sinh.', 'Chờ học sinh tự báo cáo, không chủ động can thiệp vào chuyện riêng tư.', 'Chỉ ghi chú vào học bạ và thông báo cho phụ huynh vào cuối học kỳ.'],
    correctAnswer: 1,
    explanation: 'Điều 6 Thông tư 03/2026 quy định: Khi phát hiện học sinh có dấu hiệu bị xâm hại, bạo lực hoặc có nguy cơ gặp nguy hiểm, nhà giáo có trách nhiệm báo cáo ngay cho ban giám hiệu, phối hợp với gia đình và cơ quan bảo vệ trẻ em, công an để bảo vệ kịp thời quyền lợi và an toàn của học sinh.',
    articleRef: 'Điều 6, Thông tư 03/2026/TT-BGDĐT',
    isNew2026: true,
  },

  // ===== NĐ 93/2026 — câu 118–120 =====
  {
    id: 'q-118', docId: 'nghi-dinh-93-2026', difficulty: 'medium',
    question: 'Theo Nghị định 93/2026/NĐ-CP, điều kiện nào bắt buộc để một người được cấp chứng chỉ hành nghề nhà giáo?',
    options: ['Phải có bằng Thạc sĩ và thâm niên giảng dạy tối thiểu 2 năm.', 'Phải đạt trình độ chuẩn đào tạo, có năng lực sư phạm và không đang bị kỷ luật cấm hành nghề.', 'Phải thi và đạt điểm chứng chỉ hành nghề do Bộ GD&ĐT tổ chức hàng năm.', 'Chỉ cần nộp hồ sơ đăng ký, không cần thi hay kiểm tra năng lực.'],
    correctAnswer: 1,
    explanation: 'Điều 16 Nghị định 93/2026 quy định điều kiện cấp chứng chỉ hành nghề nhà giáo: (1) Đạt trình độ chuẩn được đào tạo theo quy định của Luật Nhà giáo 2025; (2) Có phẩm chất, năng lực sư phạm phù hợp; (3) Không đang trong thời gian bị kỷ luật, cấm hành nghề hoặc truy cứu trách nhiệm hình sự.',
    articleRef: 'Điều 16, Nghị định 93/2026/NĐ-CP',
    isNew2026: true,
  },
  {
    id: 'q-119', docId: 'nghi-dinh-93-2026', difficulty: 'hard',
    question: 'Theo Nghị định 93/2026, trong trường hợp nào chứng chỉ hành nghề nhà giáo bị thu hồi?',
    options: ['Khi nhà giáo nghỉ hưu theo đúng quy định tuổi nghỉ hưu.', 'Khi nhà giáo bị xử lý kỷ luật buộc thôi việc hoặc bị kết án hình sự liên quan đến hành nghề.', 'Khi nhà giáo chuyển sang làm việc tại cơ sở giáo dục ngoài công lập.', 'Khi nhà giáo không hoàn thành chương trình bồi dưỡng bắt buộc trong 1 năm.'],
    correctAnswer: 1,
    explanation: 'Điều 19 Nghị định 93/2026 quy định chứng chỉ hành nghề nhà giáo bị thu hồi trong các trường hợp: bị kỷ luật buộc thôi việc; bị Tòa án kết án hình sự bằng bản án có hiệu lực liên quan đến hành nghề giáo dục; giả mạo hồ sơ để được cấp chứng chỉ; hoặc không còn đủ điều kiện hành nghề theo quy định.',
    articleRef: 'Điều 19, Nghị định 93/2026/NĐ-CP',
    isNew2026: true,
  },
  {
    id: 'q-120', docId: 'nghi-dinh-93-2026', difficulty: 'easy',
    question: 'Theo Nghị định 93/2026, kỳ tuyển dụng nhà giáo tại các trường công lập được tổ chức theo chu kỳ nào?',
    options: ['Chỉ một lần duy nhất, vào đầu mỗi năm học mới (tháng 8-9).', 'Theo nhu cầu thực tế của đơn vị, có thể tổ chức bất kỳ thời điểm nào trong năm khi có chỉ tiêu.', 'Bắt buộc 2 lần/năm vào tháng 1 và tháng 6.', 'Chỉ tổ chức vào tháng 12 hằng năm theo kế hoạch của Bộ GD&ĐT.'],
    correctAnswer: 1,
    explanation: 'Điều 9 Nghị định 93/2026 quy định: Tuyển dụng nhà giáo được thực hiện theo nhu cầu thực tế của đơn vị sử dụng và chỉ tiêu được giao. Cơ quan có thẩm quyền tổ chức tuyển dụng khi có nhu cầu, không bắt buộc theo chu kỳ cố định, nhưng phải thông báo công khai và thực hiện đúng quy trình theo quy định.',
    articleRef: 'Điều 9, Nghị định 93/2026/NĐ-CP',
    isNew2026: true,
  },

  // ===== LUẬT GIÁO DỤC 2019 — câu 121–124 =====
  {
    id: 'q-121', docId: 'luat-giao-duc-2019', difficulty: 'easy',
    question: 'Theo Luật Giáo dục 2019, nền giáo dục Việt Nam mang những tính chất nào?',
    options: ['Toàn diện, hiện đại, tiên tiến và hội nhập quốc tế.', 'Nhân dân, dân tộc, khoa học và hiện đại.', 'Công bằng, dân chủ và xã hội chủ nghĩa.', 'Phổ cập, bắt buộc, miễn phí và toàn quốc.'],
    correctAnswer: 1,
    explanation: 'Điều 3 Luật Giáo dục 2019 quy định nền giáo dục Việt Nam là nền giáo dục xã hội chủ nghĩa có 4 tính chất: (1) Nhân dân; (2) Dân tộc; (3) Khoa học; (4) Hiện đại — lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng. Đây là câu hỏi hay xuất hiện trong đề thi.',
    articleRef: 'Điều 3, Luật Giáo dục 43/2019/QH14',
    isNew2026: false,
  },
  {
    id: 'q-122', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Theo Luật Giáo dục, mục tiêu của giáo dục đại học là gì?',
    options: ['Đào tạo người lao động có tay nghề cao cho thị trường trong nước.', 'Đào tạo nhân lực trình độ cao; sáng tạo tri thức, ứng dụng khoa học công nghệ để giải quyết vấn đề của xã hội và đất nước.', 'Cấp bằng cử nhân và thạc sĩ đạt chuẩn quốc tế trong 5 năm.', 'Thực hiện hướng nghiệp và chuẩn bị nghề nghiệp cho học sinh tốt nghiệp THPT.'],
    correctAnswer: 1,
    explanation: 'Điều 39 Luật Giáo dục 2019 quy định mục tiêu giáo dục đại học: Đào tạo nhân lực trình độ cao, bồi dưỡng nhân tài; nghiên cứu khoa học, sáng tạo và ứng dụng công nghệ; cung cấp nguồn nhân lực chất lượng cao đáp ứng yêu cầu phát triển kinh tế - xã hội, hội nhập quốc tế và xây dựng đất nước.',
    articleRef: 'Điều 39, Luật Giáo dục 43/2019/QH14',
    isNew2026: false,
  },
  {
    id: 'q-123', docId: 'luat-giao-duc-2019', difficulty: 'medium',
    question: 'Theo Luật Giáo dục, phương pháp giáo dục phổ thông phải đảm bảo yêu cầu gì?',
    options: ['Tập trung truyền đạt kiến thức hàn lâm, giúp học sinh ghi nhớ và tái hiện chính xác.', 'Phát huy tính tích cực, tự giác, chủ động, sáng tạo của học sinh; phù hợp đặc trưng môn học, đặc điểm đối tượng, điều kiện của từng lớp học.', 'Dạy đồng loạt theo phương pháp thuyết trình của giáo viên là chính.', 'Chủ yếu dựa vào sách giáo khoa và bài kiểm tra định kỳ cuối học kỳ.'],
    correctAnswer: 1,
    explanation: 'Điều 31 Luật Giáo dục 2019 quy định phương pháp giáo dục phổ thông phải: phát huy tính tích cực, tự giác, chủ động, tư duy sáng tạo của học sinh; phù hợp với đặc trưng môn học, đặc điểm lứa tuổi và điều kiện của từng lớp học; bồi dưỡng năng lực tự học, kỹ năng vận dụng kiến thức vào thực tiễn.',
    articleRef: 'Điều 31, Luật Giáo dục 43/2019/QH14',
    isNew2026: false,
  },
  {
    id: 'q-124', docId: 'luat-giao-duc-2019', difficulty: 'hard',
    question: 'Theo Luật Giáo dục, giáo dục mẫu giáo 5 tuổi có đặc điểm bắt buộc nào?',
    options: ['Bắt buộc và học sinh phải đóng học phí theo mức quy định của địa phương.', 'Bắt buộc và không thu học phí — Nhà nước bảo đảm kinh phí cho giáo dục mẫu giáo 5 tuổi.', 'Không bắt buộc nhưng khuyến khích, học phí do phụ huynh tự nguyện đóng góp.', 'Bắt buộc ở thành thị, khuyến khích ở nông thôn và miễn học phí toàn quốc.'],
    correctAnswer: 1,
    explanation: 'Điều 14 Luật Giáo dục 2019 quy định: Giáo dục mẫu giáo 5 tuổi là bắt buộc và không thu học phí. Nhà nước bảo đảm kinh phí để thực hiện giáo dục mẫu giáo 5 tuổi tại các cơ sở giáo dục công lập và hỗ trợ kinh phí cho các cơ sở giáo dục ngoài công lập thực hiện nhiệm vụ này.',
    articleRef: 'Điều 14, Luật Giáo dục 43/2019/QH14',
    isNew2026: false,
  },

  // ===== NGHỊ QUYẾT 71-NQ/TW (2025) — câu 125–129 =====
  {
    id: 'q-125', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'NQ 71-NQ/TW xác định chỉ tiêu gì về ngân sách nhà nước chi cho giáo dục và đào tạo đến năm 2030?',
    options: ['Đạt tối thiểu 15% tổng chi ngân sách nhà nước.', 'Đạt tối thiểu 20% tổng chi ngân sách nhà nước.', 'Đạt tối thiểu 25% tổng chi ngân sách nhà nước.', 'Không quy định tỷ lệ cụ thể, do Quốc hội quyết định hàng năm.'],
    correctAnswer: 1,
    explanation: 'NQ 71-NQ/TW đề ra chỉ tiêu cụ thể đến năm 2030: Ngân sách nhà nước chi cho giáo dục và đào tạo đạt tối thiểu 20% tổng chi ngân sách nhà nước. Đây là cam kết chính trị mạnh mẽ về đầu tư cho giáo dục, cao hơn mức thực tế hiện nay.',
    articleRef: 'Phần III, Mục tiêu cụ thể, NQ 71-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-126', docId: 'nq-71-2025', difficulty: 'easy',
    question: 'NQ 71-NQ/TW xác định mục tiêu tỷ lệ đi học đúng độ tuổi ở bậc tiểu học đến năm 2030 là bao nhiêu?',
    options: ['Đạt 90% trở lên.', 'Đạt 95% trở lên.', 'Đạt 100%.', 'Đạt 98% trở lên.'],
    correctAnswer: 2,
    explanation: 'NQ 71 đề ra chỉ tiêu đến năm 2030: Tỉ lệ đi học đúng độ tuổi bậc tiểu học đạt 100% — đây là mục tiêu phổ cập giáo dục tiểu học bắt buộc toàn quốc. Bậc THCS đạt trên 95% và THPT đạt trên 85%.',
    articleRef: 'Phần III, Mục tiêu cụ thể, NQ 71-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-127', docId: 'nq-71-2025', difficulty: 'hard',
    question: 'Theo NQ 71-NQ/TW, mốc thời gian sơ kết và tổng kết thực hiện Nghị quyết là những năm nào?',
    options: ['Sơ kết năm 2027, tổng kết năm 2030.', 'Sơ kết năm 2028, tổng kết năm 2031.', 'Sơ kết năm 2030, tổng kết năm 2035.', 'Không quy định mốc sơ kết, tổng kết vào năm 2045.'],
    correctAnswer: 1,
    explanation: 'Phần V NQ 71-NQ/TW quy định: Sơ kết thực hiện Nghị quyết vào năm 2028 (sau 3 năm triển khai) và tổng kết vào năm 2031. Ban Tuyên giáo Trung ương theo dõi, kiểm tra; các bộ, ngành, địa phương báo cáo kết quả hàng năm.',
    articleRef: 'Phần V, Mục 2, NQ 71-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-128', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'NQ 71 đặt mục tiêu đến năm 2030 có bao nhiêu cơ sở giáo dục đại học Việt Nam vào top 500 thế giới?',
    options: ['Ít nhất 2 cơ sở.', 'Ít nhất 3 cơ sở.', 'Ít nhất 5 cơ sở.', 'Ít nhất 10 cơ sở.'],
    correctAnswer: 2,
    explanation: 'NQ 71-NQ/TW đề ra chỉ tiêu cụ thể đến năm 2030: Có ít nhất 5 cơ sở giáo dục đại học Việt Nam lọt vào top 500 thế giới theo các bảng xếp hạng đại học uy tín quốc tế (QS, THE, ARWU). Đây là chỉ tiêu thể hiện quyết tâm nâng cao chất lượng giáo dục đại học.',
    articleRef: 'Phần III, Mục tiêu cụ thể, NQ 71-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-129', docId: 'nq-71-2025', difficulty: 'medium',
    question: 'Theo NQ 71, cơ quan nào chủ trì xây dựng Chương trình hành động thực hiện Nghị quyết?',
    options: ['Ban Tuyên giáo Trung ương chủ trì, phối hợp Bộ GD&ĐT.', 'Bộ Giáo dục và Đào tạo chủ trì xây dựng Chương trình hành động.', 'Văn phòng Chính phủ chủ trì, tổng hợp từ các bộ ngành.', 'Ủy ban Giáo dục Quốc hội chủ trì và giám sát thực hiện.'],
    correctAnswer: 1,
    explanation: 'Phần V NQ 71-NQ/TW quy định rõ: Bộ Giáo dục và Đào tạo chủ trì xây dựng Chương trình hành động thực hiện Nghị quyết. Ban Tuyên giáo Trung ương chủ trì tổ chức học tập, quán triệt Nghị quyết; UBND các cấp tổ chức thực hiện tại địa phương.',
    articleRef: 'Phần V, Mục 1, NQ 71-NQ/TW',
    isNew2026: true,
  },

  // ===== NGHỊ QUYẾT 57-NQ/TW (2024) — câu 130–136 =====
  {
    id: 'q-130', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'NQ 57-NQ/TW xác định ba trụ cột chính của chuyển đổi số quốc gia là gì?',
    options: ['Hạ tầng số, dữ liệu số và công nghệ số.', 'Kinh tế số, xã hội số và chính phủ số.', 'An ninh mạng, dữ liệu quốc gia và trí tuệ nhân tạo.', 'Giáo dục số, y tế số và hành chính số.'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW xác định ba trụ cột không thể tách rời của chuyển đổi số quốc gia: (1) Kinh tế số — ứng dụng công nghệ vào sản xuất kinh doanh; (2) Xã hội số — số hóa các dịch vụ xã hội; (3) Chính phủ số — cung cấp dịch vụ công trực tuyến 24/7. Đây là nội dung cốt lõi nhất của NQ 57.',
    articleRef: 'Phần IV, Giải pháp 5, NQ 57-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-131', docId: 'nq-57-2024', difficulty: 'hard',
    question: 'Theo NQ 57, mục tiêu chi đầu tư cho khoa học và công nghệ đến năm 2030 là bao nhiêu phần trăm GDP?',
    options: ['Đạt tối thiểu 1% GDP.', 'Đạt tối thiểu 2% GDP, trong đó từ khu vực tư nhân đạt trên 60%.', 'Đạt tối thiểu 3% GDP.', 'Đạt tối thiểu 5% GDP theo tiêu chuẩn OECD.'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW đề ra chỉ tiêu đến năm 2030: Chi đầu tư cho khoa học và công nghệ đạt tối thiểu 2% GDP, trong đó chi từ khu vực tư nhân đạt trên 60% (tức là nhà nước chi dưới 40%). Đây là sự dịch chuyển từ phụ thuộc vào ngân sách nhà nước sang huy động nguồn lực xã hội.',
    articleRef: 'Phần III, Mục tiêu cụ thể, NQ 57-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-132', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'NQ 57 đề ra mục tiêu số lượng doanh nghiệp công nghệ số đến năm 2030 là bao nhiêu?',
    options: ['500.000 doanh nghiệp công nghệ số.', '1 triệu doanh nghiệp công nghệ số.', '2 triệu doanh nghiệp công nghệ số.', '100.000 doanh nghiệp công nghệ số quy mô vừa và lớn.'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW đề ra chỉ tiêu đến năm 2030: Số lượng doanh nghiệp công nghệ số đạt 1 triệu doanh nghiệp. Đây là lực lượng nòng cốt để phát triển kinh tế số, đặt mục tiêu từ khoảng 70.000 doanh nghiệp công nghệ số hiện tại cần tăng gấp hơn 14 lần.',
    articleRef: 'Phần III, Mục tiêu cụ thể, NQ 57-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-133', docId: 'nq-57-2024', difficulty: 'hard',
    question: 'NQ 57 xác định mục tiêu tỷ lệ kinh tế số trong GDP đến năm 2030 và tầm nhìn 2045 là bao nhiêu?',
    options: ['20% GDP (2030) và 40% GDP (2045).', '30% GDP (2030) và 50% GDP (2045).', '25% GDP (2030) và 45% GDP (2045).', '35% GDP (2030) và 60% GDP (2045).'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW đề ra mục tiêu: Kinh tế số chiếm 30% GDP vào năm 2030 và 50% GDP theo tầm nhìn 2045. Đây là hai con số quan trọng hay xuất hiện trong đề thi. Cùng với mục tiêu xếp hạng GII (Chỉ số đổi mới sáng tạo toàn cầu) vào top 40 nước dẫn đầu năm 2030.',
    articleRef: 'Phần III, Mục tiêu tổng quát, NQ 57-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-134', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'NQ 57 xác định vai trò của doanh nghiệp trong hệ thống đổi mới sáng tạo quốc gia là gì?',
    options: ['Doanh nghiệp đóng vai trò hỗ trợ, Nhà nước là trung tâm nghiên cứu khoa học.', 'Doanh nghiệp là trung tâm, là chủ thể chính của đổi mới sáng tạo; Nhà nước đóng vai trò dẫn dắt, kiến tạo môi trường.', 'Doanh nghiệp và Nhà nước có vai trò ngang nhau trong đổi mới sáng tạo.', 'Doanh nghiệp chủ yếu đầu tư vốn, còn nghiên cứu KH do viện và trường đại học thực hiện.'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW xác định phân vai rõ ràng trong hệ thống đổi mới sáng tạo: Nhà nước đóng vai trò dẫn dắt, kiến tạo môi trường thuận lợi; Doanh nghiệp là trung tâm, chủ thể chính của đổi mới sáng tạo; Viện nghiên cứu và trường đại học là chủ thể nghiên cứu và chuyển giao công nghệ; Nhà khoa học là lực lượng nòng cốt.',
    articleRef: 'Phần II, Quan điểm 2, NQ 57-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-135', docId: 'nq-57-2024', difficulty: 'hard',
    question: 'NQ 57 đề ra chính sách đột phá nào về xử lý sai phạm trong nghiên cứu khoa học?',
    options: ['Tăng hình phạt để ngăn chặn gian lận trong nghiên cứu khoa học.', 'Không hình sự hóa các sai phạm trong nghiên cứu khoa học nếu không có yếu tố vụ lợi cá nhân.', 'Tất cả sai phạm trong nghiên cứu KH đều phải xử lý hành chính nghiêm khắc.', 'Giao cho Hội đồng KH chuyên ngành tự xử lý sai phạm, không có sự can thiệp của pháp luật.'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW có điểm đột phá quan trọng về tư duy: không hình sự hóa các sai phạm trong nghiên cứu khoa học nếu không có yếu tố vụ lợi cá nhân. Đây là chính sách bảo vệ người dám nghĩ, dám làm và tạo môi trường an toàn cho đổi mới sáng tạo. Kết hợp với cơ chế sandbox cho phép thử nghiệm công nghệ, mô hình kinh doanh mới.',
    articleRef: 'Phần II, Quan điểm 3; Phần IV, Giải pháp 1, NQ 57-NQ/TW',
    isNew2026: true,
  },
  {
    id: 'q-136', docId: 'nq-57-2024', difficulty: 'medium',
    question: 'Theo NQ 57, 5 lĩnh vực công nghệ mũi nhọn được ưu tiên phát triển nhân lực là những lĩnh vực nào?',
    options: ['Điện, điện tử, cơ khí, hóa chất và vật liệu xây dựng.', 'Trí tuệ nhân tạo (AI), bán dẫn, công nghệ sinh học, năng lượng mới và vật liệu mới.', 'Nông nghiệp công nghệ cao, thủy sản, lâm nghiệp, chế biến thực phẩm và dệt may.', 'Tài chính ngân hàng, logistics, du lịch, y tế và giáo dục.'],
    correctAnswer: 1,
    explanation: 'NQ 57-NQ/TW xác định 5 lĩnh vực công nghệ chiến lược cần ưu tiên đào tạo nhân lực: (1) Trí tuệ nhân tạo (AI); (2) Công nghệ bán dẫn (chip); (3) Công nghệ sinh học; (4) Năng lượng mới; (5) Vật liệu mới. Đây là các lĩnh vực quyết định năng lực cạnh tranh công nghệ của Việt Nam trong tương lai.',
    articleRef: 'Phần IV, Giải pháp 3, NQ 57-NQ/TW',
    isNew2026: true,
  },
];
