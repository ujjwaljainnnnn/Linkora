import { PEOPLE, Person, byId } from "./people";

const STOP = new Set(["in", "with", "at", "a", "an", "the", "and", "of", "for", "who", "experience", "people", "find", "me", "someone"]);

const SYNONYMS: Record<string, string[]> = {
  ml: ["machine learning"],
  ai: ["machine learning", "ai governance", "ai strategy", "nlp"],
  finance: ["fintech", "banking", "finance"],
  fintech: ["fintech", "payments"],
  frontend: ["react", "frontend", "typescript"],
  designer: ["ux", "figma"],
  security: ["security", "soc", "siem"],
  governance: ["governance", "ai governance", "compliance"],
};

export type Result = { person: Person; score: number; reasons: string[] };

export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9.+/ ]/g, " ")
    .split(/\s+/)
    .filter((t) => t && !STOP.has(t));
}

/** Rank people by how well they match a natural-language query. */
export function search(query: string): Result[] {
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const expanded = tokens.flatMap((t) => [t, ...(SYNONYMS[t] ?? [])]);

  return PEOPLE.filter((p) => p.id !== "me")
    .map((p) => {
      let score = 0;
      const reasons = new Set<string>();
      const title = p.title.toLowerCase();
      for (const term of expanded) {
        if (title.includes(term)) { score += 3; reasons.add(`title: ${p.title}`); }
        if (p.city.toLowerCase() === term) { score += 2; reasons.add(`based in ${p.city}`); }
        if (p.industry.includes(term)) { score += 2; reasons.add(`${p.industry} industry`); }
        for (const s of p.skills) if (s.includes(term)) { score += 1.5; reasons.add(`skill: ${s}`); }
        if (p.company.toLowerCase().includes(term)) { score += 1; reasons.add(`works at ${p.company}`); }
      }
      return { person: p, score, reasons: [...reasons] };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

/** Breadth-first search for the shortest warm-introduction chain between two people. */
export function introPath(fromId: string, toId: string): Person[] | null {
  if (fromId === toId) return [byId(fromId)!];
  const prev = new Map<string, string>();
  const queue = [fromId];
  const seen = new Set([fromId]);

  while (queue.length) {
    const cur = queue.shift()!;
    for (const next of byId(cur)?.connections ?? []) {
      if (seen.has(next)) continue;
      seen.add(next);
      prev.set(next, cur);
      if (next === toId) {
        const path = [toId];
        let step = toId;
        while (prev.has(step)) { step = prev.get(step)!; path.unshift(step); }
        return path.map((id) => byId(id)!);
      }
      queue.push(next);
    }
  }
  return null;
}
