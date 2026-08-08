import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { EvaluateResponse } from '@/types';

interface EvaluateRequest {
  scenario: string;
  essay: string;
  rubric: { criterion: string; points: number }[];
  legalBasis: string[];
}

const SYSTEM_PROMPT = `Bạn là giám khảo chấm thi viên chức giáo viên tiểu học Việt Nam năm 2026, chuyên gia về Thông tư 03/2026/TT-BGDĐT (Quy tắc ứng xử nhà giáo) và Luật Nhà giáo 73/2025/QH15.

Nhiệm vụ: Chấm bài tự luận xử lý tình huống sư phạm theo rubric được cung cấp.

Yêu cầu trả về JSON hợp lệ với cấu trúc sau (KHÔNG có markdown code blocks):
{
  "scores": [
    { "criterion": "tên tiêu chí", "score": điểm_đạt, "maxPoints": điểm_tối_đa, "comment": "nhận xét ngắn 1-2 câu" }
  ],
  "totalScore": tổng_điểm,
  "strength": ["ưu điểm 1", "ưu điểm 2"],
  "weakness": ["thiếu sót 1", "thiếu sót 2"],
  "improvedEssay": "bài làm mẫu hoàn chỉnh đạt điểm tối đa (~200-250 từ, vận dụng đúng luật, sư phạm tích cực, nhân văn)"
}

Nguyên tắc chấm:
- Ưu tiên bài có viện dẫn đúng điều khoản pháp luật (TT03, Luật NG, Luật VC)
- Biện pháp xử lý phải SƯ PHẠM TÍCH CỰC, không bạo lực, không xúc phạm học sinh
- Cần có sự phối hợp với gia đình/đồng nghiệp/ban giám hiệu khi cần
- Nghiêm khắc với bài thiếu căn cứ pháp lý hoặc xử lý không đúng chuẩn mực`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY chưa được cấu hình. Thêm vào file .env.local.' },
      { status: 500 }
    );
  }

  let body: EvaluateRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Request body không hợp lệ' }, { status: 400 });
  }

  if (!body.essay || body.essay.trim().length < 20) {
    return NextResponse.json({ error: 'Bài làm quá ngắn để chấm điểm' }, { status: 400 });
  }

  const rubricText = body.rubric
    .map((r, i) => `${i + 1}. ${r.criterion} (${r.points} điểm)`)
    .join('\n');

  const legalText = body.legalBasis.join(', ');

  const userPrompt = `ĐỀ BÀI TÌNH HUỐNG:
${body.scenario}

CĂN CỨ PHÁP LÝ CẦN VẬN DỤNG: ${legalText}

BẢNG RUBRIC CHẤM ĐIỂM:
${rubricText}

BÀI LÀM CỦA HỌC VIÊN:
${body.essay}

Hãy chấm điểm bài làm theo đúng rubric trên và trả về JSON.`;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 2048,
      },
    });

    const result = await model.generateContent(userPrompt);
    const text = result.response.text().trim();

    // Strip markdown code blocks if model wraps in them
    const json = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    const parsed: EvaluateResponse = JSON.parse(json);

    return NextResponse.json(parsed);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Gemini error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
