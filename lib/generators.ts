import { LawArticle, LawDocument, FillBlankQuestion, MatchPair } from '@/types';

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

export function normalizeAnswer(s: string) {
  return removeAccents(s).replace(/\s+/g, ' ');
}

type ArticleWithDoc = LawArticle & { docId: string };

function flattenArticles(docs: LawDocument[]): ArticleWithDoc[] {
  return docs.flatMap((doc) =>
    doc.chapters.flatMap((ch) =>
      ch.articles.map((a) => ({ ...a, docId: doc.id }))
    )
  );
}

export function generateFillBlanks(docs: LawDocument[]): FillBlankQuestion[] {
  const results: FillBlankQuestion[] = [];
  const seen = new Set<string>();

  for (const article of flattenArticles(docs)) {
    if (!article.summary || article.summary.length === 0) continue;

    // Strategy 1: Quoted terms in examFocus or summary (e.g. "lực lượng nòng cốt")
    const quoteMatches = [
      ...(article.examFocus?.match(/"([^"]+)"/g) || []),
      ...article.summary.flatMap((s) => s.match(/"([^"]+)"/g) || []),
    ];

    let generated = false;
    for (const q of quoteMatches) {
      const term = q.replace(/"/g, '').trim();
      if (term.length < 2 || term.length > 45) continue;

      const normTerm = removeAccents(term);
      const matchingSentence = article.summary.find((s) => removeAccents(s).includes(normTerm));
      if (!matchingSentence) continue;

      // Replace matching term with ___
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      const sentence = matchingSentence.replace(regex, '___');

      if (sentence.includes('___')) {
        const id = `fb-${article.id}-q`;
        if (!seen.has(id)) {
          seen.add(id);
          results.push({
            id,
            docId: article.docId,
            sentence,
            blank: term,
            hint: article.number,
            articleRef: `${article.number} — ${article.title}`,
          });
          generated = true;
          break;
        }
      }
    }

    if (generated) continue;

    // Strategy 2: Predefined important key phrases/numbers to target in summary
    const keyCandidates = [
      'Bộ trưởng Bộ GD&ĐT', 'Bộ trưởng Bộ Giáo dục và Đào tạo', 'Chính phủ', 'Quốc hội',
      'lực lượng nòng cốt', 'vai trò quyết định', 'bình đẳng giới', 'trách nhiệm giải trình',
      'liêm chính học thuật', 'thực hành sư phạm', 'chứng chỉ hành nghề', 'nhà ở công vụ',
      'cao nhất', '20/11', '01/01/2026', '01/07/2026', '36 tháng', '12 tháng', '8 tuần',
      '5 năm', '15 năm', '10 năm', '50%', '100%', 'Vòng 1', 'Vòng 2', 'Hạng I', 'Hạng II',
    ];

    for (const term of keyCandidates) {
      const normTerm = removeAccents(term);
      const matchingSentence = article.summary.find((s) => removeAccents(s).includes(normTerm));
      if (!matchingSentence) continue;

      // Find actual case in sentence
      const normSentence = removeAccents(matchingSentence);
      const idx = normSentence.indexOf(normTerm);
      if (idx === -1) continue;

      const actualTerm = matchingSentence.slice(idx, idx + term.length);
      const sentence = matchingSentence.slice(0, idx) + '___' + matchingSentence.slice(idx + term.length);

      const id = `fb-${article.id}-${term}`;
      if (!seen.has(id)) {
        seen.add(id);
        results.push({
          id,
          docId: article.docId,
          sentence,
          blank: actualTerm,
          hint: article.number,
          articleRef: `${article.number} — ${article.title}`,
        });
        generated = true;
        break;
      }
    }

    if (generated) continue;

    // Strategy 3: Key-value pattern (Sentence with colon, e.g. "Tiêu chuẩn: Năng lực chuyên môn")
    for (const s of article.summary) {
      const colonIdx = s.indexOf(':');
      if (colonIdx > 3 && colonIdx < s.length - 4) {
        const valPart = s.slice(colonIdx + 1).trim();
        const firstPhrase = valPart.split(/[,;.–-]/)[0].trim();
        if (firstPhrase.length >= 3 && firstPhrase.length <= 35) {
          const sentence = s.replace(firstPhrase, '___');
          const id = `fb-${article.id}-kv`;
          if (!seen.has(id)) {
            seen.add(id);
            results.push({
              id,
              docId: article.docId,
              sentence,
              blank: firstPhrase,
              hint: article.number,
              articleRef: `${article.number} — ${article.title}`,
            });
            break;
          }
        }
      }
    }
  }

  return results;
}

export function generateMatchPairs(docs: LawDocument[]): MatchPair[] {
  const results: MatchPair[] = [];
  for (const article of flattenArticles(docs)) {
    if (!article.title || !article.number) continue;
    results.push({
      id: `mp-${article.id}`,
      term: article.number,
      definition: article.title,
      docId: article.docId,
    });
    for (const s of article.summary.slice(0, 2)) {
      const colonIdx = s.indexOf(':');
      if (colonIdx > 0 && colonIdx < 40) {
        const term = s.slice(0, colonIdx).trim();
        const definition = s.slice(colonIdx + 1).trim();
        if (term.length >= 3 && definition.length >= 5 && definition.length <= 80) {
          results.push({
            id: `mp-${article.id}-s`,
            term,
            definition,
            docId: article.docId,
          });
          break;
        }
      }
    }
  }
  return results;
}

export function pickDailyDeck<T extends { id: string }>(
  items: T[],
  dateKey: string,
  n: number,
  prioritize?: (item: T) => boolean
): T[] {
  const seed = dateKey.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const shuffled = [...items].sort((a, b) => {
    const ha = (seed * 31 + a.id.charCodeAt(0)) % 97;
    const hb = (seed * 31 + b.id.charCodeAt(0)) % 97;
    return ha - hb;
  });
  if (prioritize) {
    const priority = shuffled.filter(prioritize);
    const rest = shuffled.filter((i) => !prioritize(i));
    return [...priority, ...rest].slice(0, n);
  }
  return shuffled.slice(0, n);
}
