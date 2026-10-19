# Project Constraints & Rules — Arnav Pundir Portfolio

Explicit architectural and coding boundaries.

---

## 1. Strict Ponytail / YAGNI Principles
- **No Speculative Abstractions:** Do not create utility wrappers or state machines unless actively needed by more than two consumers.
- **Dependency Freeze:** Do not introduce heavy third-party UI libraries (MUI, Chakra, AntD). All interactive elements must rely on Tailwind CSS + Framer Motion.
- **Zero Dead Code:** Avoid unused imports, dead components, or unrendered variables.

---

## 2. Technical SEO & Crawler Directives
- **Canonical URL Integrity:** The canonical URL is strictly `https://arnavpundir22.github.io/`.
- **Sitemap Rules:** `public/sitemap.xml` must never contain `#hash` fragment identifiers. Only root or standalone distinct assets (PDFs) are valid `<loc>` entries.
- **Image Formats:** All primary project and portrait images must default to `.webp` with explicit `width`, `height`, and `alt` attributes.

---

## 3. GitHub Pages Deployment Lock
- Any modification intended for production must build cleanly via `npm run build` without Vite/Rollup compilation errors.
- Automatic deployment to `github-pages` environment triggers exclusively upon push to the `main` branch via `.github/workflows/deploy.yml`.
