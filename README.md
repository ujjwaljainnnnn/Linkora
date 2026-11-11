# LINKORA — AI-Powered Professional Graph

> **Find the right people. Instantly.** Describe who you need in plain English. LINKORA ranks the best matches and shows the shortest chain of people who can introduce you.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)

## The problem

Professional networks are searched with rigid filters (title = X, location = Y). Real needs sound like *"a data scientist in Dubai with fintech experience who I can actually get an intro to."* Cold messages get ignored, and warm introductions work, but nobody knows which of their connections is the right bridge.

## What it does

| Feature | How it works |
|---|---|
| **Natural-language search** | The query is tokenized, stop-words are removed, and terms are expanded with a synonym map (`ml → machine learning`, `finance → fintech/banking`). |
| **Weighted ranking** | Each profile is scored across title (×3), city (×2), industry (×2), skills (×1.5) and company (×1), and the result shows *why* each person matched. |
| **Warm-intro path** | **Breadth-first search** over the connection graph finds the shortest introduction chain from you to each result (e.g. `You → Aarav Patel → Lina Farouk`). |

## Run it locally

```bash
git clone https://github.com/ujjwaljainnnnn/Linkora.git
cd Linkora
npm install
npm run dev     # open http://localhost:3000 → "Try the live demo"
```

## Project structure

```
src/
├── app/
│   ├── page.tsx          # landing page
│   └── search/page.tsx   # interactive search + intro paths
└── lib/
    ├── people.ts         # demo graph (fictional profiles + connections)
    └── search.ts         # tokenizer, scorer, BFS intro-path
```

## Roadmap

- [ ] Replace keyword scoring with embedding search (vector similarity)
- [ ] LLM query parsing → structured filters (role, seniority, location, industry)
- [ ] Weighted edges (relationship strength) → Dijkstra instead of BFS
- [ ] Auth + importing real connections

## Author

**Ujjwal Jain**, Computing & IT, RIT Dubai · [GitHub](https://github.com/ujjwaljainnnnn)
