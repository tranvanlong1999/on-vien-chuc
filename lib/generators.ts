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
  for (const article of flattenArticles(docs)) {
    if (!article.examFocus || article.summary.length === 0) continue;
    const keyTerm = article.examFocus.split(/[,;]/)[0].trim();
    if (keyTerm.length < 2 || keyTerm.length > 40) continue;

    const normKey = removeAccents(keyTerm);
    const matchingSentence = article.summary.find((s) => removeAccents(s).includes(normKey));
    if (!matchingSentence) continue;

    const regex = new RegExp(keyTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    const sentence = matchingSentence.replace(regex, '___');
    if (!sentence.includes('___')) continue;

    results.push({
      id: `fb-${article.id}`,
      docId: article.docId,
      sentence,
      blank: keyTerm,
      hint: article.number,
      articleRef: `${article.number} — ${article.title}`,
    });
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
