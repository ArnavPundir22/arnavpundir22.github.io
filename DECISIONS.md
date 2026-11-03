# Technical Decisions Log (DECISIONS.md)

Record of technical decisions and architectural choices for Arnav Pundir Portfolio.

---

## 2026-10-18: XML Sitemap Cleanup & Canonical Resumes
- **Decision:** Removed all `#hash` anchor fragment URLs from `sitemap.xml` and added canonical PDF resumes.
- **Context:** Google Search Console returned "Couldn't fetch" on `/sitemap.xml`. While partly due to GSC pending state, `#hash` fragments in sitemaps violate Sitemaps.org & Google Search guidelines.
- **Alternatives Considered:** Keeping only the root URL.
- **Rationale:** Including the 3 verified PDF resumes allows Google to index them directly and award PDF badges in organic search results.

---

## 2026-10-19: Ponytail Dead Code Elimination
- **Decision:** Purged unused `LoadingScreen.jsx` component and dead imports across `App.jsx`, `Hero.jsx`, `Education.jsx`, `Contact.jsx`, and `Footer.jsx`.
- **Context:** Enforcing the Ponytail 7-Rung decision ladder ("The best code is the code you never wrote").
- **Alternatives Considered:** Leaving dead components and imports in place.
- **Rationale:** Eliminates dead bundle weight, avoids unnecessary memory retention, and fixes event listener cleanup in `App.jsx`.

---

## 2026-11-03: Multi-Tier SEO, AEO, and GEO Architecture
- **Decision:** Implemented an interconnected multi-layer discoverability stack comprising:
  1. **Traditional SEO**: Injected geographic microdata (`geo.region: IN-UT`, `geo.placename: Roorkee`, `geo.position: 29.8543;77.8880`, `ICBM: 29.8543, 77.8880`), canonical links, OpenGraph / Twitter Cards, updated XML sitemap timestamps (`2026-11-03`), and Google Image Sitemap entries for 19 WebP assets in `sitemap.xml`.
  2. **Answer Engine Optimization (AEO)**: Injected a syntax-valid 6-node Schema.org JSON-LD Knowledge Graph (`Person`, `WebSite`, `ProfilePage`, `ItemList`, `FAQPage`, `BreadcrumbList`) in `index.html`. Interconnected academic credentials, D-Coders Squad leadership, and cross-platform profile links (`sameAs`).
  3. **Generative Engine Optimization (GEO)**: Authored machine-readable documentation endpoints `/llms.txt` (conforming to the llmstxt.org specification) and `/llms-full.txt` (460+ lines of deep architectural specifications, LaTeX mathematical formulations, and quantitative benchmarks for all 18 engineered systems).
  4. **Data Parity & Accessibility**: Developed an 8-item FAQ data model in `src/data/index.js` rendered via a dark glassmorphic WAI-ARIA accessible accordion in `src/components/About.jsx`, mirroring the Schema.org `FAQPage` and semantic `<noscript>` fallback shell with 100% textual parity.
- **Context:** Modern web traffic and developer discovery are increasingly driven by conversational AI search engines (Perplexity, SearchGPT, Claude, Gemini) alongside traditional web crawlers (Google, Bing). Single-page client applications without structured metadata or non-JS fallbacks risk incomplete indexing.
- **Alternatives Considered:**
  - Relying solely on client-side React rendering: Rejected because non-JS bots, search spiders, and LLM text scrapers cannot execute dynamic lazy-loading script chunks.
  - Basic meta tags without structured data: Rejected because answer engines require explicit semantic entity graphs to generate authoritative factual citations.
  - Decoupled FAQ content across UI and metadata: Rejected because text divergence weakens answer engine confidence scores and breaks automated verification.
- **Rationale:** Establishing unified, verified structured data across UI components, JSON-LD schemas, crawler fallbacks, and machine-readable text files maximizes discoverability across all search paradigms while maintaining zero runtime bloat and adhering to the Ponytail minimalist engineering standard.

---

## 2026-11-03: Complete Elimination of Speculative Claims & .agents/ Git Exclusion
- **Decision:** Removed all mentions, implications, or references to pending intellectual property filings across all repository source code, documentation, data records, and metadata. Strictly framed BioSecure AI as an advanced production-grade biometric attendance system selected for an official COER University pilot run. Added `.agents/` to `.gitignore`.
- **Context:** Technical credibility requires that all published engineering systems and achievements are genuine, accurate, and unencumbered by unverified or speculative claims. Additionally, multi-agent collaboration metadata in `.agents/` serves internal development orchestration and must not pollute public version control or production deployments.
- **Alternatives Considered:**
  - Leaving generic disclaimer language in comments: Rejected because all ungrounded or speculative claims must be completely eliminated across the entire repository.
  - Tracking agent work directories in git: Rejected because agent scratchpads and execution logs are internal development artifacts.
- **Rationale:** Strict adherence to authentic engineering facts reinforces professional credibility with academic institutions, engineering teams, and technical recruiters. Ignoring `.agents/` maintains a clean, production-ready repository tree.
