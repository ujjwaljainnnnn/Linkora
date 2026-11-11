"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { search, introPath } from "@/lib/search";
import { ME } from "@/lib/people";

const EXAMPLES = [
  "Data scientist in Dubai with fintech experience",
  "AI governance in banking",
  "React engineer in Dubai",
  "Security analyst Riyadh",
];

export default function SearchPage() {
  const [query, setQuery] = useState(EXAMPLES[0]);
  const results = useMemo(() => search(query), [query]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">← LINKORA</Link>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mt-4 mb-2">Search the professional graph</h1>
        <p className="text-slate-600 mb-6">Describe who you need in plain English. LINKORA ranks matches and shows the shortest chain of people who can introduce you.</p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-slate-300 rounded-full px-5 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. ML engineer in Abu Dhabi"
        />
        <div className="flex flex-wrap gap-2 mt-3 mb-8">
          {EXAMPLES.map((ex) => (
            <button key={ex} onClick={() => setQuery(ex)} className="text-xs px-3 py-1 rounded-full border border-slate-300 text-slate-600 hover:bg-white">
              {ex}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 mb-3">{results.length} matches</div>
        <div className="space-y-3">
          {results.slice(0, 8).map(({ person, score, reasons }) => {
            const path = introPath(ME, person.id);
            const degree = path ? path.length - 1 : null;
            return (
              <div key={person.id} className="bg-white border rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-medium text-slate-900">{person.name}</div>
                    <div className="text-sm text-slate-500">{person.title} · {person.company} · {person.city}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-slate-500">match score</div>
                    <div className="font-semibold text-blue-600">{score.toFixed(1)}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {reasons.slice(0, 4).map((r) => (
                    <span key={r} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{r}</span>
                  ))}
                </div>
                <div className="mt-3 text-sm">
                  {path ? (
                    <span className="text-slate-700">
                      <span className="text-xs uppercase tracking-wide text-slate-400 mr-2">{degree}° · warm intro</span>
                      {path.map((p) => p.name).join(" → ")}
                    </span>
                  ) : (
                    <span className="text-slate-400">No warm path yet: cold outreach</span>
                  )}
                </div>
              </div>
            );
          })}
          {!results.length && <p className="text-slate-500 text-sm">No matches. Try a role, a skill or a city.</p>}
        </div>
      </section>
    </main>
  );
}
