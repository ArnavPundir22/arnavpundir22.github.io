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
