export interface PedagogyScenario {
  id: string;
  title: string;
  category: 'ung-xu-hs' | 'ung-xu-ph' | 'ky-luat' | 'dong-nghiep' | 'dao-duc';
  difficulty: 'easy' | 'medium' | 'hard';
  scenario: string;
  legalBasis: string[];
  rubric: { criterion: string; points: number; hint: string }[];
  modelOutline: string[];
  modelAnswer: string;
  commonMistakes: string[];
}

export const scenarios: PedagogyScenario[] = [
  {
    id: 's1',
    title: 'Học sinh nghịch phá trong giờ',
    category: 'ung-xu-hs',
    difficulty: 'medium',
    scenario:
      'Học sinh Minh lớp 4 liên tục nói chuyện, đi lại trong giờ Toán dù đã được nhắc nhở 2 lần. Cả lớp mất tập trung, tiết học bị ảnh hưởng nghiêm trọng. Giáo viên cần xử lý ngay để duy trì nề nếp lớp học nhưng vẫn đảm bảo tính sư phạm và không xúc phạm học sinh.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 6: Chuẩn mực ứng xử của nhà giáo với người học',
      'Luật Nhà giáo 73/2025/QH15 Điều 9: Quyền của nhà giáo trong việc quản lý lớp học',
      'Luật Nhà giáo 73/2025/QH15 Điều 10: Nghĩa vụ bảo vệ nhân phẩm, danh dự người học',
      'Điều lệ Trường Tiểu học: Quy định về nội quy lớp học và biện pháp kỷ luật tích cực',
    ],
    rubric: [
      {
        criterion: 'Nêu đúng căn cứ pháp lý áp dụng (TT03, Luật Nhà giáo)',
        points: 2,
        hint: 'Trích dẫn ít nhất 1 điều khoản cụ thể của TT03/2026 hoặc Luật Nhà giáo',
      },
      {
        criterion: 'Biện pháp xử lý sư phạm tức thời trong giờ học (không xúc phạm, không phạt thể chất)',
        points: 3,
        hint: 'Nhắc nhở riêng, điều chỉnh chỗ ngồi, giao nhiệm vụ cụ thể để HS tập trung',
      },
      {
        criterion: 'Biện pháp sau giờ học: gặp riêng HS, liên hệ phụ huynh, lập kế hoạch theo dõi',
        points: 3,
        hint: 'Gặp riêng tìm hiểu nguyên nhân, thông báo PH theo hướng phối hợp (không đổ lỗi), lập phiếu theo dõi hành vi',
      },
      {
        criterion: 'Rút ra bài học kinh nghiệm và biện pháp phòng ngừa',
        points: 2,
        hint: 'Điều chỉnh phương pháp dạy học, tăng cường hoạt động tương tác để HS không nhàm chán',
      },
    ],
    modelOutline: [
      '1. Nhận diện vấn đề: Học sinh vi phạm nội quy lớp học lần thứ 3, ảnh hưởng tập thể',
      '2. Căn cứ pháp lý: TT03/2026 Điều 6 (ứng xử tôn trọng HS), Luật Nhà giáo Điều 9-10',
      '3. Biện pháp tức thời: Dừng giảng, nhắc nhở nhẹ nhàng trước lớp; nếu tái phạm → nhắc riêng không làm xấu hổ HS; có thể điều chỉnh chỗ ngồi hoặc giao nhiệm vụ cụ thể',
      '4. Sau giờ học: Gặp riêng Minh để tìm hiểu nguyên nhân (có vấn đề gia đình? bài quá khó?)',
      '5. Phối hợp phụ huynh: Thông báo và mời phụ huynh cùng tìm giải pháp (không trách phạt)',
      '6. Lập kế hoạch theo dõi: Ghi sổ theo dõi hành vi, quan tâm đặc biệt trong 2 tuần tiếp theo',
      '7. Rút kinh nghiệm: Xem lại phương pháp dạy học, tăng hoạt động nhóm để HS hứng thú hơn',
    ],
    modelAnswer:
      'Trước tình huống học sinh Minh vi phạm nội quy lần 3, căn cứ Thông tư 03/2026/TT-BGDĐT Điều 6 về chuẩn mực ứng xử với người học và Luật Nhà giáo Điều 9-10, tôi xử lý như sau:\n\nTrong giờ học: Tôi dừng giảng, nhìn về phía Minh và nhắc nhẹ: "Minh ơi, em chú ý bài nhé." Nếu Minh tiếp tục, tôi mời Minh lên bảng làm bài tập để tập trung sự chú ý, hoặc điều chỉnh chỗ ngồi ra bàn đầu. Tuyệt đối không mắng chửi, không đuổi ra ngoài, không có hành động xúc phạm danh dự học sinh.\n\nSau giờ học: Tôi gặp riêng Minh với thái độ quan tâm, hỏi thăm nguyên nhân (mệt mỏi, bài khó, có chuyện ở nhà?). Lắng nghe và ghi nhận, cùng Minh lập cam kết cải thiện. Chiều hôm đó tôi liên lạc phụ huynh, thông báo tình hình và đề xuất phối hợp theo dõi tại nhà.\n\nPhòng ngừa: Tôi lập phiếu theo dõi hành vi trong 2 tuần, tăng cường hoạt động nhóm và trò chơi học tập để tiết học sinh động hơn, giảm nguyên nhân gây mất tập trung. Đây cũng là bài học để tôi điều chỉnh phương pháp giảng dạy phù hợp hơn với đặc điểm lứa tuổi.',
    commonMistakes: [
      'La mắng, chê bai học sinh trước cả lớp — vi phạm TT03/2026 Điều 6 về nghiêm cấm xúc phạm danh dự người học',
      'Phạt thể chất hoặc bắt đứng góc lớp — vi phạm Luật Nhà giáo, có thể bị kỷ luật',
      'Chỉ xử lý bề mặt mà không tìm hiểu nguyên nhân gốc rễ dẫn đến tái phạm',
    ],
  },
  {
    id: 's2',
    title: 'Phụ huynh tặng phong bì',
    category: 'ung-xu-ph',
    difficulty: 'hard',
    scenario:
      'Cuối học kỳ I, phụ huynh em Lan mang phong bì 500.000đ đến nhà thăm hỏi thầy/cô và nói: "Cảm ơn thầy/cô đã chăm sóc con em tôi suốt học kỳ vừa rồi, nhờ thầy/cô mà cháu tiến bộ nhiều lắm." Phụ huynh thể hiện thành ý rất chân thành, không có ý định nhờ vả việc gì thêm.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 7: Chuẩn mực ứng xử với cha mẹ/người giám hộ người học',
      'Thông tư 03/2026/TT-BGDĐT Điều 11: Các hành vi nhà giáo không được làm (nhận quà, tiền của người học và cha mẹ người học)',
      'Luật Nhà giáo 73/2025/QH15 Điều 11: Nghĩa vụ liêm chính, không nhận lợi ích từ người học và gia đình',
      'Quy tắc ứng xử trong cơ sở giáo dục: Nhà giáo không được nhận tiền, quà vượt quá giá trị quy định',
    ],
    rubric: [
      {
        criterion: 'Nhận diện đúng bản chất vi phạm nếu nhận phong bì (dù phụ huynh không có ý nhờ vả)',
        points: 2,
        hint: 'TT03/2026 Điều 11 cấm nhận tiền/quà bất kể mục đích — không phụ thuộc vào ý định của phụ huynh',
      },
      {
        criterion: 'Từ chối đúng cách: lịch sự, trân trọng tình cảm, giải thích quy định rõ ràng',
        points: 3,
        hint: 'Không từ chối lạnh lùng làm phụ huynh tổn thương; phải cảm ơn trước rồi mới từ chối',
      },
      {
        criterion: 'Xử lý tiếp theo: chủ động chia sẻ thành tích của em Lan, duy trì kênh liên lạc tích cực',
        points: 3,
        hint: 'Thay vì nhận quà, chuyển thành cuộc trò chuyện chia sẻ tiến bộ của con — phụ huynh sẽ thỏa mãn hơn',
      },
      {
        criterion: 'Biện pháp phòng ngừa tương lai và xây dựng văn hóa học đường lành mạnh',
        points: 2,
        hint: 'Thông báo chính sách trường/lớp về quà tặng qua họp phụ huynh đầu năm',
      },
    ],
    modelOutline: [
      '1. Nhận diện: Dù phụ huynh có thành ý, việc nhận phong bì vẫn vi phạm TT03/2026 Điều 11',
      '2. Căn cứ: TT03/2026 Điều 7 (ứng xử với PH), Điều 11 (hành vi cấm), Luật Nhà giáo Điều 11',
      '3. Từ chối lịch sự: Cảm ơn chân thành tình cảm của phụ huynh, sau đó từ chối bằng cách nêu quy định',
      '4. Chuyển hướng tích cực: Mời phụ huynh vào nhà uống nước, chia sẻ tiến bộ cụ thể của em Lan',
      '5. Gợi ý cách thể hiện tình cảm phù hợp: Phụ huynh quan tâm nhắc nhở con học bài là đủ',
      '6. Phòng ngừa: Đầu năm học thông báo rõ chính sách không nhận quà trong họp phụ huynh',
      '7. Rút kinh nghiệm: Xây dựng mối quan hệ thầy-trò, nhà trường-gia đình dựa trên tin tưởng, không quà cáp',
    ],
    modelAnswer:
      'Trước tình huống này, tôi nhận thức rõ rằng dù phụ huynh có thành ý tốt, việc nhận phong bì vẫn vi phạm Thông tư 03/2026/TT-BGDĐT Điều 11 và Luật Nhà giáo Điều 11 về nghĩa vụ liêm chính của nhà giáo.\n\nTôi xử lý như sau: Trước tiên, tôi cảm ơn chân thành tình cảm của gia đình: "Cảm ơn anh/chị đã tin tưởng và quan tâm đến tôi. Sự ghi nhận của anh/chị là động lực lớn nhất với một giáo viên." Sau đó nhẹ nhàng từ chối: "Tuy nhiên, theo quy định của Thông tư 03 và nhà trường, giáo viên chúng tôi không được phép nhận quà hay tiền từ phụ huynh. Anh/chị thông cảm và giữ lại giúp tôi nhé."\n\nThay vì dừng lại ở đó, tôi mời phụ huynh ngồi nói chuyện, chia sẻ cụ thể những tiến bộ của em Lan trong học kỳ và đề xuất cách phụ huynh có thể hỗ trợ con tại nhà. Đây là điều phụ huynh thực sự cần hơn việc tặng phong bì.\n\nVề lâu dài, tôi sẽ thông báo rõ chính sách không nhận quà ngay trong buổi họp phụ huynh đầu năm học, xây dựng văn hóa phối hợp giáo dục dựa trên tin tưởng và tôn trọng, không phụ thuộc vào vật chất.',
    commonMistakes: [
      'Nhận phong bì với lý do "phụ huynh có thành ý, từ chối sẽ mất lòng" — đây là sai lầm nghiêm trọng, vi phạm TT03/2026',
      'Từ chối lạnh lùng, thiếu tế nhị khiến phụ huynh cảm thấy bị xúc phạm — không đúng tinh thần TT03 Điều 7',
      'Không báo cáo lên Ban giám hiệu khi phụ huynh cố tình tặng quà nhiều lần — bỏ sót trách nhiệm phòng chống tham nhũng',
    ],
  },
  {
    id: 's3',
    title: 'Học sinh bị bắt nạt',
    category: 'ung-xu-hs',
    difficulty: 'medium',
    scenario:
      'Bạn phát hiện học sinh Hùng (lớp 4) thường xuyên bị nhóm 3 học sinh trong lớp trêu chọc, đặt biệt danh xấu, giật đồ dùng học tập và không cho chơi chung. Hùng có biểu hiện sợ hãi, hay khóc, thành tích học tập giảm sút. Em không dám báo cáo vì sợ bị trả thù.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 6: Nghĩa vụ bảo vệ và tôn trọng nhân phẩm người học',
      'Luật Nhà giáo 73/2025/QH15 Điều 9: Bảo vệ quyền và lợi ích hợp pháp của người học',
      'Nghị định về Phòng chống bạo lực học đường (PCBLHĐ): Trách nhiệm phát hiện, ngăn chặn và xử lý kịp thời',
      'Luật Trẻ em: Nghĩa vụ bảo vệ trẻ em khỏi mọi hình thức bạo lực, xâm hại',
    ],
    rubric: [
      {
        criterion: 'Nhận diện đúng đây là hành vi bạo lực học đường (BLHĐ), nêu căn cứ pháp lý',
        points: 2,
        hint: 'Bắt nạt tinh thần (đặt biệt danh, cô lập) cũng là BLHĐ, không chỉ bạo lực thể chất',
      },
      {
        criterion: 'Biện pháp bảo vệ học sinh bị hại: tiếp cận riêng, lắng nghe, cam kết bảo mật',
        points: 3,
        hint: 'Không để Hùng đối mặt với nhóm bắt nạt khi chưa có biện pháp bảo vệ; tạo môi trường an toàn cho HS chia sẻ',
      },
      {
        criterion: 'Xử lý nhóm học sinh bắt nạt: gặp riêng từng em, giáo dục, phối hợp phụ huynh, báo cáo BGH',
        points: 3,
        hint: 'Không xử lý công khai trước lớp ngay; gặp riêng từng em, sau đó họp phụ huynh nếu cần thiết',
      },
      {
        criterion: 'Biện pháp lâu dài: xây dựng môi trường lớp học an toàn, giáo dục kỹ năng sống',
      points: 2,
        hint: 'Tổ chức hoạt động nhóm, bầu bạn thân thiện, dạy kỹ năng giải quyết xung đột',
      },
    ],
    modelOutline: [
      '1. Nhận diện: Đây là bạo lực học đường tinh thần — nghiêm trọng, cần xử lý khẩn cấp',
      '2. Căn cứ: TT03/2026 Điều 6, Luật Nhà giáo Điều 9, Nghị định PCBLHĐ',
      '3. Tiếp cận Hùng: Gặp riêng kín đáo, lắng nghe toàn bộ, cam kết bảo vệ và không để lộ thông tin',
      '4. Đánh giá mức độ: Xác định tần suất, hình thức bắt nạt; kiểm tra sức khỏe tâm thần của Hùng',
      '5. Xử lý nhóm bắt nạt: Gặp riêng từng em (không gặp cùng nhau), giáo dục về hậu quả BLHĐ',
      '6. Phối hợp: Báo cáo BGH, mời phụ huynh cả hai phía, có thể mời chuyên gia tâm lý học đường',
      '7. Biện pháp lâu dài: Tổ chức hoạt động gắn kết lớp, giáo dục kỹ năng sống, theo dõi định kỳ',
    ],
    modelAnswer:
      'Nhận diện được đây là hành vi bạo lực học đường tinh thần theo Nghị định PCBLHĐ và Thông tư 03/2026 Điều 6, tôi xử lý theo các bước sau:\n\nBước 1 — Bảo vệ học sinh bị hại: Tôi tìm cơ hội gặp riêng Hùng (giờ ra chơi hoặc sau buổi học) với thái độ nhẹ nhàng, quan tâm. Lắng nghe toàn bộ câu chuyện của em, cam kết bảo vệ và giữ bí mật về nguồn thông tin. Đánh giá xem em có cần hỗ trợ tâm lý không.\n\nBước 2 — Xử lý nhóm bắt nạt: Gặp riêng lần lượt từng em trong nhóm, không tổ chức đối chất ngay. Giúp các em nhận ra hậu quả của hành vi, yêu cầu cam kết dừng ngay. Theo dõi chặt trong tuần tiếp theo.\n\nBước 3 — Báo cáo và phối hợp: Báo cáo Ban giám hiệu, ghi biên bản theo quy trình PCBLHĐ của nhà trường. Mời phụ huynh hai bên họp riêng (không cho gặp nhau trực tiếp). Nếu cần, đề xuất mời chuyên gia tâm lý học đường hỗ trợ Hùng.\n\nBiện pháp lâu dài: Điều chỉnh chỗ ngồi, tổ chức hoạt động nhóm tăng gắn kết, lồng ghép bài học về tình bạn và kỹ năng giải quyết xung đột trong các tiết Đạo đức, Kỹ năng sống.',
    commonMistakes: [
      'Gọi tất cả học sinh lên xử lý cùng một lúc trước lớp — làm Hùng bị cô lập thêm và mất tin tưởng vào giáo viên',
      'Chỉ phê bình nhóm bắt nạt mà không có biện pháp bảo vệ và hỗ trợ tâm lý cho học sinh bị hại',
      'Không báo cáo BGH, tự xử lý nội bộ mà không ghi biên bản — vi phạm quy trình PCBLHĐ',
    ],
  },
  {
    id: 's4',
    title: 'Đồng nghiệp nhờ nâng điểm',
    category: 'dong-nghiep',
    difficulty: 'hard',
    scenario:
      'Đồng nghiệp thân thiết của bạn — người đã giúp bạn nhiều lần — nhờ bạn sửa điểm kiểm tra cho con họ (học sinh lớp khác mà bạn phụ trách chấm điểm chung) từ 4 lên 5 để đủ điều kiện lên lớp. Họ nói: "Chỉ là 1 điểm thôi mà, không ai biết đâu, với lại tôi đã giúp bạn rất nhiều rồi."',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 8: Chuẩn mực ứng xử với đồng nghiệp — tôn trọng nhưng không đồng lõa vi phạm',
      'Thông tư 03/2026/TT-BGDĐT Điều 11: Nghiêm cấm gian lận trong kiểm tra, đánh giá kết quả học tập',
      'Luật Nhà giáo 73/2025/QH15 Điều 11: Nghiêm cấm làm sai lệch kết quả giáo dục',
      'Thông tư 27/2020/TT-BGDĐT về đánh giá học sinh tiểu học: Nguyên tắc trung thực, khách quan trong KT-ĐG',
    ],
    rubric: [
      {
        criterion: 'Nhận diện rõ đây là hành vi gian lận trong KT-ĐG, vi phạm pháp luật nghiêm trọng',
        points: 2,
        hint: 'Dù chỉ "1 điểm", sửa điểm không đúng thực tế là gian lận, có thể bị kỷ luật sa thải',
      },
      {
        criterion: 'Từ chối kiên quyết, lịch sự; giữ được tình đồng nghiệp nhưng không thỏa hiệp',
        points: 3,
        hint: 'Không phán xét đồng nghiệp; thể hiện rằng mình từ chối vì bảo vệ cả hai, không phải vì ghét họ',
      },
      {
        criterion: 'Đề xuất hướng hỗ trợ hợp pháp: ôn tập, học hè, xem xét lại bài theo quy trình',
        points: 3,
        hint: 'Có thể đề xuất rà soát lại bài chấm theo đúng quy trình, hoặc hỗ trợ HS ôn tập thi lại',
      },
      {
        criterion: 'Xử lý tình huống giữ mối quan hệ đồng nghiệp lành mạnh lâu dài',
        points: 2,
        hint: 'Không báo cáo ngay nếu đồng nghiệp chỉ nhờ (chưa thực hiện vi phạm); giữ bí mật cuộc trò chuyện',
      },
    ],
    modelOutline: [
      '1. Nhận diện: Sửa điểm sai sự thật = gian lận trong KT-ĐG, vi phạm TT03 Điều 11 và Luật Nhà giáo',
      '2. Căn cứ: TT03/2026 Điều 8 & 11, Luật Nhà giáo Điều 11, TT27/2020 về KT-ĐG tiểu học',
      '3. Từ chối ngay, rõ ràng: Không lưỡng lự, không để mở khả năng "xem xét lại" nhằm tránh hiểu lầm',
      '4. Lý giải không phán xét: "Tôi hiểu bạn lo cho con, nhưng làm vậy sẽ hại cả hai chúng ta"',
      '5. Đề xuất thay thế hợp pháp: Kiểm tra lại bài chấm theo quy trình; nếu đúng điểm 4 thì HS học hè',
      '6. Giữ bí mật: Không kể lại với đồng nghiệp khác để tránh ảnh hưởng đến người nhờ',
      '7. Rút kinh nghiệm: Không tạo tiền lệ "nợ ân tình" có thể bị lợi dụng trong tương lai',
    ],
    modelAnswer:
      'Nhận ra đây là yêu cầu gian lận trong kiểm tra đánh giá — vi phạm nghiêm trọng Thông tư 03/2026 Điều 11 và Luật Nhà giáo Điều 11 — tôi từ chối ngay, nhưng theo cách không làm mất tình đồng nghiệp:\n\n"Bạn ơi, tôi hiểu và trân trọng tình cảm bạn dành cho tôi bấy lâu nay. Nhưng điều bạn nhờ, dù chỉ 1 điểm, thực ra là gian lận trong đánh giá kết quả học tập — vi phạm Thông tư 03 và Luật Nhà giáo. Nếu bị phát hiện, cả hai chúng ta đều có thể bị kỷ luật nặng, thậm chí buộc thôi việc. Tôi không thể làm vậy, không phải vì không quý bạn, mà chính là để bảo vệ cả hai."\n\nSau đó tôi đề xuất hướng hỗ trợ hợp pháp: "Nếu bạn muốn, chúng ta có thể rà soát lại bài chấm theo đúng quy trình xem có điểm nào chấm sót không. Nếu điểm 4 là chính xác, bạn có thể đăng ký cho con học hè và thi lại theo quy định." Tôi giữ kín cuộc trò chuyện này, không kể với ai khác trong trường.',
    commonMistakes: [
      'Đồng ý sửa điểm vì "nợ ơn" đồng nghiệp — đây là gian lận nghiêm trọng, không có lý do nào biện hộ được',
      'Từ chối nhưng hứa "sẽ xem lại" — tạo hiểu lầm và kéo dài tình huống căng thẳng không cần thiết',
      'Ngay lập tức báo cáo BGH khi đồng nghiệp mới chỉ nhờ miệng — phản ứng thái quá, phá vỡ quan hệ đồng nghiệp không cần thiết',
    ],
  },
  {
    id: 's5',
    title: 'Phụ huynh phản ánh về điểm số',
    category: 'ung-xu-ph',
    difficulty: 'easy',
    scenario:
      'Phụ huynh em Nga gọi điện vào buổi tối với thái độ rất bức xúc, phàn nàn kịch liệt về điểm kiểm tra Toán cuối kỳ của con (điểm 5/10). Phụ huynh cho rằng giáo viên chấm không công bằng, thiếu khách quan, đòi chấm lại bài ngay lập tức và đe dọa sẽ lên gặp Ban giám hiệu.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 7: Chuẩn mực ứng xử với cha mẹ/người giám hộ — bình tĩnh, lắng nghe, không tranh cãi',
      'Thông tư 27/2020/TT-BGDĐT: Nguyên tắc công khai, minh bạch trong kiểm tra đánh giá học sinh tiểu học',
      'Quy chế KT-ĐG của nhà trường: Quy trình phúc khảo bài kiểm tra theo đúng thủ tục',
    ],
    rubric: [
      {
        criterion: 'Thái độ ứng xử đúng chuẩn mực: bình tĩnh, lắng nghe, không tranh cãi, không phòng thủ',
        points: 3,
        hint: 'Bắt đầu bằng cách ghi nhận cảm xúc phụ huynh, không giải thích ngay khi PH còn đang bức xúc',
      },
      {
        criterion: 'Giải thích căn cứ chấm điểm và quy trình phúc khảo minh bạch',
        points: 3,
        hint: 'Mời phụ huynh đến trường xem bài, giải thích từng phần theo đáp án — không bảo vệ điểm số một cách mù quáng',
      },
      {
        criterion: 'Đề xuất giải pháp cụ thể, tôn trọng quyền của phụ huynh',
        points: 2,
        hint: 'Hướng dẫn thủ tục phúc khảo chính thức; nếu PH muốn lên BGH thì hỗ trợ, không cản trở',
      },
      {
        criterion: 'Rút bài học về cách thông báo điểm số hiệu quả, phòng ngừa hiểu lầm',
        points: 2,
        hint: 'Gửi kèm nhận xét cụ thể khi trả bài; trao đổi trực tiếp với PH trước khi họ thấy điểm qua sổ liên lạc',
      },
    ],
    modelOutline: [
      '1. Bình tĩnh tiếp nhận: Không phản ứng phòng thủ ngay; ghi nhận cảm xúc và mối quan tâm của PH',
      '2. Căn cứ: TT03/2026 Điều 7 (ứng xử với PH), TT27/2020 về KT-ĐG tiểu học',
      '3. Không tranh luận qua điện thoại: Hẹn gặp trực tiếp để xem bài cùng nhau',
      '4. Khi gặp: Mở bài kiểm tra, giải thích từng câu theo đáp án một cách khách quan',
      '5. Nếu phát hiện chấm sai: Sửa ngay, thành thật xin lỗi — đây là ứng xử chuyên nghiệp',
      '6. Nếu điểm chính xác: Hướng dẫn thủ tục phúc khảo chính thức theo quy chế nhà trường',
      '7. Phòng ngừa: Gửi nhận xét kèm điểm, họp PH để giải thích tiêu chí chấm điểm đầu năm',
    ],
    modelAnswer:
      'Khi nhận cuộc gọi từ phụ huynh em Nga với thái độ bức xúc, căn cứ Thông tư 03/2026/TT-BGDĐT Điều 7 về chuẩn mực ứng xử với phụ huynh, tôi giữ bình tĩnh và lắng nghe trọn vẹn mà không ngắt lời.\n\nTôi bắt đầu: "Cảm ơn anh/chị đã gọi điện phản ánh. Tôi hiểu anh/chị lo lắng cho việc học của cháu." Tôi không tranh luận qua điện thoại vì thiếu thông tin và dễ hiểu lầm. Thay vào đó, tôi hẹn gặp trực tiếp: "Ngày mai sau buổi học, anh/chị có thể đến trường để chúng ta cùng xem lại bài kiểm tra của cháu Nga không? Tôi sẽ giải thích từng phần theo đáp án để anh/chị hiểu rõ."\n\nKhi gặp trực tiếp: Tôi mở bài kiểm tra và giải thích khách quan từng câu theo đáp án chuẩn. Nếu phát hiện mình chấm sai, tôi thành thật xin lỗi và sửa ngay. Nếu điểm chính xác, tôi hướng dẫn thủ tục phúc khảo chính thức và không cản trở nếu PH muốn gặp Ban giám hiệu — đó là quyền của họ.\n\nPhòng ngừa: Từ nay khi trả bài, tôi sẽ gửi kèm nhận xét cụ thể để phụ huynh hiểu điểm số thể hiện điều gì.',
    commonMistakes: [
      'Tranh luận ngay qua điện thoại khi phụ huynh đang bức xúc — leo thang xung đột không cần thiết',
      'Bảo vệ điểm số một cách cứng nhắc mà không chịu xem lại bài — thiếu tinh thần cầu thị',
      'Từ chối hoặc cản trở phụ huynh gặp Ban giám hiệu — vi phạm quyền phụ huynh, có thể gây phản ứng tiêu cực lớn hơn',
    ],
  },
  {
    id: 's6',
    title: 'Học sinh có hoàn cảnh khó khăn',
    category: 'ung-xu-hs',
    difficulty: 'easy',
    scenario:
      'Học sinh Tuấn lớp 4 thường xuyên không có đủ đồ dùng học tập, mặc quần áo cũ rách, hay ngủ gật trong giờ và có vẻ không được ăn sáng. Qua tìm hiểu, bạn biết bố Tuấn vừa bị tai nạn lao động nặng, mẹ phải ở bệnh viện chăm sóc, gia đình lâm vào hoàn cảnh rất khó khăn.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 6: Nhà giáo quan tâm, bảo vệ quyền lợi người học',
      'Luật Nhà giáo 73/2025/QH15 Điều 9: Bảo vệ quyền và lợi ích hợp pháp của học sinh',
      'Luật Trẻ em: Quyền của trẻ em được bảo đảm các nhu cầu cơ bản về sinh hoạt, học tập',
      'Chính sách hỗ trợ học sinh có hoàn cảnh khó khăn của Bộ GD&ĐT và địa phương',
    ],
    rubric: [
      {
        criterion: 'Phát hiện kịp thời và tiếp cận nhân văn: không công khai hoàn cảnh HS, giữ kín đáo',
        points: 2,
        hint: 'Tuyệt đối không để HS khác biết hoặc thương hại Tuấn — điều này có thể làm em xấu hổ và thu mình lại',
      },
      {
        criterion: 'Hỗ trợ trực tiếp: vận động giáo viên, nhà trường hỗ trợ đồ dùng học tập, bữa sáng',
        points: 3,
        hint: 'Liên hệ Công đoàn trường, quỹ hỗ trợ HS nghèo; vận động quyên góp kín đáo trong tập thể giáo viên',
      },
      {
        criterion: 'Kết nối nguồn lực: báo cáo BGH, liên hệ chính quyền địa phương, tổ chức từ thiện',
        points: 3,
        hint: 'Báo cáo BGH để nhà trường chính thức can thiệp; UBND xã/phường có thể hỗ trợ gia đình Tuấn',
      },
      {
        criterion: 'Theo dõi lâu dài và điều chỉnh phương pháp dạy học phù hợp với tình trạng HS',
        points: 2,
        hint: 'Cho Tuấn chỗ ngồi thuận tiện, không gọi lên bảng khi em mệt, tạo điều kiện hoàn thành bài tập',
      },
    ],
    modelOutline: [
      '1. Phát hiện và xác minh: Tìm hiểu kín đáo hoàn cảnh qua phụ huynh, hàng xóm, chính quyền địa phương',
      '2. Căn cứ: TT03/2026 Điều 6, Luật Nhà giáo Điều 9, Luật Trẻ em về quyền được bảo đảm nhu cầu cơ bản',
      '3. Hỗ trợ tức thời kín đáo: Chuẩn bị đồ dùng học tập thêm trong lớp; tìm cách em có bữa sáng mà không ai biết',
      '4. Vận động tập thể giáo viên: Quyên góp quỹ hỗ trợ kín đáo, không làm em xấu hổ',
      '5. Báo cáo BGH để nhà trường chính thức hỗ trợ qua quỹ khuyến học',
      '6. Liên hệ địa phương: UBND phường/xã, hội phụ nữ, đoàn thanh niên hỗ trợ gia đình',
      '7. Theo dõi và điều chỉnh: Không gây áp lực học tập trong giai đoạn khó khăn; quan tâm sức khỏe tâm lý HS',
    ],
    modelAnswer:
      'Phát hiện hoàn cảnh khó khăn của Tuấn, căn cứ Thông tư 03/2026/TT-BGDĐT Điều 6 về nghĩa vụ quan tâm bảo vệ quyền lợi người học và Luật Nhà giáo Điều 9, tôi tiến hành hỗ trợ theo nguyên tắc kín đáo, tôn trọng nhân phẩm học sinh.\n\nTrước tiên, tôi âm thầm chuẩn bị thêm đồ dùng học tập trong lớp để Tuấn có thể dùng khi thiếu mà không ai chú ý. Tôi thu xếp để em có bữa ăn sáng mà không gây chú ý (ví dụ qua chương trình sữa học đường hoặc hỗ trợ từ Công đoàn trường).\n\nSong song đó, tôi báo cáo với Ban giám hiệu để nhà trường chính thức hỗ trợ qua quỹ khuyến học và kết nối với UBND địa phương tìm nguồn hỗ trợ cho gia đình. Tôi vận động tập thể giáo viên quyên góp kín đáo — tuyệt đối không công khai hoàn cảnh gia đình Tuấn trước lớp hay với phụ huynh khác.\n\nVề học tập: Tôi điều chỉnh kỳ vọng trong giai đoạn này — không gây áp lực điểm số, tạo điều kiện để em hoàn thành bài từ từ, quan tâm sức khỏe tâm lý. Khi gia đình ổn định hơn, tôi sẽ lập kế hoạch phụ đạo bù kiến thức cho em.',
    commonMistakes: [
      'Thông báo hoàn cảnh của Tuấn cho cả lớp biết để "mọi người cùng giúp đỡ" — làm HS xấu hổ, tổn thương lòng tự trọng',
      'Chỉ thương cảm mà không có hành động cụ thể, không báo cáo BGH để huy động nguồn lực',
      'Giảm bớt yêu cầu học tập quá nhiều mà không có kế hoạch bù đắp kiến thức sau — hại HS về lâu dài',
    ],
  },
  {
    id: 's7',
    title: 'Giáo viên bị gợi ý mở lớp học thêm',
    category: 'dao-duc',
    difficulty: 'hard',
    scenario:
      'Hiệu trưởng gặp riêng và gợi ý (không ra lệnh trực tiếp) bạn mở lớp dạy thêm buổi tối tại nhà cho học sinh lớp mình để "tăng thu nhập, và học sinh cũng được ôn luyện thêm". Nhiều phụ huynh trong lớp cũng bày tỏ mong muốn này. Áp lực từ cả cấp trên lẫn phụ huynh khiến bạn lưỡng lự.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 11: Nghiêm cấm dạy thêm học sinh của mình khi chưa được cơ quan quản lý cho phép',
      'Luật Nhà giáo 73/2025/QH15 Điều 11: Nhà giáo không được ép buộc học sinh học thêm dưới mọi hình thức',
      'Thông tư 29/2024/TT-BGDĐT về dạy thêm học thêm: Điều kiện, thủ tục cấp phép dạy thêm',
      'Nghị định về phòng chống tham nhũng: Cấm lợi dụng vị trí công tác để trục lợi',
    ],
    rubric: [
      {
        criterion: 'Nhận diện đúng: dạy thêm học sinh của mình khi chưa được phép là vi phạm pháp luật',
        points: 2,
        hint: 'TT03 Điều 11 cấm rõ — "gợi ý" của Hiệu trưởng không phải là sự cho phép hợp pháp',
      },
      {
        criterion: 'Phản hồi khéo léo với Hiệu trưởng: không đối đầu, không phục tùng, hỏi ý kiến bằng văn bản',
        points: 3,
        hint: 'Hỏi HT có thể hướng dẫn thủ tục xin phép dạy thêm không — điều này vừa thể hiện thiện chí vừa làm rõ HT có thực sự chỉ đạo không',
      },
      {
        criterion: 'Phản hồi với phụ huynh: từ chối lịch sự, giải thích quy định; đề xuất hỗ trợ học tập hợp pháp khác',
        points: 3,
        hint: 'Có thể giới thiệu trung tâm dạy thêm có phép, hoặc gợi ý PH hỗ trợ con học ở nhà theo hướng dẫn',
      },
      {
        criterion: 'Bảo vệ bản thân hợp pháp: ghi lại cuộc trò chuyện, tránh để bị áp lực về sau',
        points: 2,
        hint: 'Nếu HT tiếp tục gây áp lực, có thể báo cáo cơ quan quản lý cấp trên (Phòng GD&ĐT)',
      },
    ],
    modelOutline: [
      '1. Nhận diện: Dạy thêm HS lớp mình khi chưa xin phép = vi phạm TT03 Điều 11 và TT29/2024',
      '2. Căn cứ: TT03/2026 Điều 11, Luật Nhà giáo Điều 11, TT29/2024 về dạy thêm học thêm',
      '3. Với Hiệu trưởng: Lắng nghe, không tranh luận; hỏi thủ tục xin phép chính thức để thể hiện thiện chí',
      '4. Nếu HT tiếp tục gợi ý phi pháp: Ghi lại nội dung trao đổi (ngày, giờ, nội dung) để bảo vệ bản thân',
      '5. Với phụ huynh: Từ chối nhẹ nhàng, giải thích quy định; giới thiệu các cơ sở dạy thêm có phép',
      '6. Tự bảo vệ: Nếu áp lực kéo dài, trao đổi với Công đoàn hoặc báo cáo Phòng GD&ĐT',
      '7. Rút bài học: Sự liêm chính bảo vệ bản thân lâu dài hơn bất kỳ thu nhập ngắn hạn nào',
    ],
    modelAnswer:
      'Nhận thức rõ rằng dạy thêm học sinh của lớp mình khi chưa được cấp phép vi phạm Thông tư 03/2026 Điều 11, Luật Nhà giáo Điều 11 và Thông tư 29/2024/TT-BGDĐT về dạy thêm học thêm, tôi xử lý như sau:\n\nVới Hiệu trưởng: Tôi lắng nghe, ghi nhận ý kiến và phản hồi khéo léo: "Cảm ơn thầy/cô đã quan tâm. Tôi hiểu phụ huynh mong muốn. Nhưng theo quy định, để dạy thêm đúng pháp luật, em cần làm thủ tục xin phép theo Thông tư 29. Thầy/cô có thể hướng dẫn em quy trình được không?" Câu hỏi này vừa thể hiện thiện chí, vừa làm rõ liệu Hiệu trưởng có thực sự chỉ đạo hay chỉ gợi ý. Tôi ghi lại thời gian, nội dung cuộc trao đổi.\n\nVới phụ huynh: Tôi từ chối lịch sự qua tin nhắn nhóm: "Cảm ơn phụ huynh đã tin tưởng. Theo quy định hiện hành, giáo viên không được phép dạy thêm học sinh của lớp mình. Nếu các con cần học thêm, phụ huynh có thể tham khảo các trung tâm có phép hoặc tôi có thể gợi ý tài liệu ôn tập tại nhà."\n\nNếu áp lực từ Hiệu trưởng tiếp tục, tôi sẽ trao đổi với Công đoàn trường hoặc phản ánh lên Phòng GD&ĐT theo đúng kênh.',
    commonMistakes: [
      'Mở lớp dạy thêm vì nghĩ "Hiệu trưởng gợi ý tức là được phép" — gợi ý miệng không phải cấp phép hợp pháp',
      'Đối đầu thẳng thắn với Hiệu trưởng, gây mâu thuẫn nội bộ — không cần thiết và có thể bất lợi cho bản thân',
      'Im lặng không phản hồi phụ huynh — phụ huynh sẽ hiểu là đồng ý và tiếp tục gây áp lực',
    ],
  },
  {
    id: 's8',
    title: 'Xử lý thông tin trên mạng xã hội',
    category: 'dao-duc',
    difficulty: 'medium',
    scenario:
      'Một phụ huynh đăng bài lên nhóm Facebook "Phụ huynh lớp 4A" với nội dung chỉ trích bạn sai phương pháp dạy học, kèm ảnh chụp bài kiểm tra của con họ có điểm thấp. Nhiều phụ huynh khác bình luận tiêu cực, thậm chí có người tag tên bạn. Bài đăng này đang lan rộng và ảnh hưởng đến uy tín của bạn.',
    legalBasis: [
      'Thông tư 03/2026/TT-BGDĐT Điều 7: Nhà giáo không tranh luận gay gắt với phụ huynh trên mạng xã hội',
      'Thông tư 03/2026/TT-BGDĐT Điều 10: Sử dụng mạng xã hội đúng mực, không phát ngôn gây tổn hại đến ngành giáo dục',
      'Luật Nhà giáo 73/2025/QH15 Điều 9: Quyền danh dự, nhân phẩm của nhà giáo được pháp luật bảo vệ',
      'Luật An ninh mạng và Bộ luật Dân sự: Quyền yêu cầu gỡ thông tin sai lệch, xúc phạm danh dự',
    ],
    rubric: [
      {
        criterion: 'Thái độ phản ứng đúng đắn: không tranh luận công khai trên mạng xã hội',
        points: 2,
        hint: 'Tranh luận trên MXH luôn gây hại cho cả hai bên — im lặng chuyên nghiệp là sức mạnh, không phải yếu đuối',
      },
      {
        criterion: 'Tiếp cận phụ huynh trực tiếp: liên hệ riêng, lắng nghe, giải quyết thực chất',
        points: 3,
        hint: 'Gọi điện hoặc nhắn tin riêng mời phụ huynh gặp trực tiếp; giải quyết được vấn đề thực chất thì bài đăng tự mất ý nghĩa',
      },
      {
        criterion: 'Bảo vệ quyền danh dự hợp pháp: báo cáo BGH, yêu cầu gỡ bài nếu sai sự thật',
        points: 3,
        hint: 'Nếu bài đăng có thông tin sai lệch hoặc xúc phạm danh dự, có quyền yêu cầu gỡ xuống theo Luật AN mạng',
      },
      {
        criterion: 'Phòng ngừa: xây dựng mối quan hệ tốt với phụ huynh, kênh liên lạc chính thức',
        points: 2,
        hint: 'Đầu năm thiết lập nhóm liên lạc chính thức có quy tắc ứng xử; trả lời thắc mắc kịp thời để PH không cần lên MXH',
      },
    ],
    modelOutline: [
      '1. Nhận diện: Bài đăng ảnh hưởng đến danh dự nhà giáo; quyền được bảo vệ theo Luật Nhà giáo Điều 9',
      '2. Căn cứ: TT03/2026 Điều 7 & 10, Luật Nhà giáo Điều 9, Luật An ninh mạng',
      '3. KHÔNG tranh luận công khai: Không bình luận, không đăng bài phản bác trên nhóm Facebook',
      '4. Liên hệ phụ huynh riêng: Nhắn tin/gọi điện mời gặp mặt trực tiếp trong ngày hôm sau',
      '5. Báo cáo BGH ngay: Để nhà trường nắm tình hình, có thể phát ngôn chính thức nếu cần',
      '6. Đánh giá bài đăng: Nếu có thông tin sai lệch hoặc xúc phạm danh dự → yêu cầu phụ huynh gỡ; nếu không gỡ → báo cáo vi phạm với nền tảng MXH hoặc cơ quan chức năng',
      '7. Phòng ngừa: Thiết lập quy tắc nhóm liên lạc lớp từ đầu năm; trả lời thắc mắc phụ huynh qua kênh chính thức',
    ],
    modelAnswer:
      'Trước tình huống này, căn cứ Thông tư 03/2026/TT-BGDĐT Điều 7 và 10, Luật Nhà giáo Điều 9, tôi xử lý theo nguyên tắc: không tranh luận công khai trên mạng xã hội, giải quyết thực chất qua kênh trực tiếp.\n\nBước 1 — Bình tĩnh, không phản ứng trên mạng: Tôi không bình luận, không đăng bài phản bác trong nhóm Facebook — điều này chỉ kéo dài và leo thang xung đột.\n\nBước 2 — Liên hệ phụ huynh riêng ngay trong ngày: Tôi gọi điện hoặc nhắn tin riêng: "Anh/chị ơi, tôi đọc được bài đăng và muốn gặp trực tiếp để trao đổi về bài kiểm tra của cháu. Ngày mai sau giờ học được không?" Khi gặp, tôi lắng nghe và giải thích phương pháp đánh giá theo chuẩn TT27/2020.\n\nBước 3 — Báo cáo BGH: Tôi thông báo cho Ban giám hiệu ngay để nhà trường nắm tình hình và có thể hỗ trợ xử lý.\n\nBước 4 — Bảo vệ danh dự hợp pháp: Nếu bài đăng có thông tin sai lệch hoặc xúc phạm danh dự, tôi có quyền yêu cầu phụ huynh gỡ bài. Nếu không hợp tác, tôi có thể báo cáo vi phạm lên nền tảng hoặc cơ quan chức năng theo Luật An ninh mạng.',
    commonMistakes: [
      'Tranh luận, phản bác công khai trong nhóm Facebook — làm tình huống leo thang, ảnh hưởng thêm đến uy tín cá nhân và nhà trường',
      'Im lặng hoàn toàn không liên hệ phụ huynh — bài đăng tiếp tục lan rộng, vấn đề thực chất không được giải quyết',
      'Không báo cáo BGH — mất cơ hội nhận hỗ trợ; nếu tình hình nghiêm trọng BGH bị động, bất lợi cho nhà trường',
    ],
  },
];
