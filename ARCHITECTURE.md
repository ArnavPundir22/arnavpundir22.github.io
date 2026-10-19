# System Architecture — Arnav Pundir Portfolio

High-level structural map of the client-side portfolio application.

---

## 1. Overview & Technology Stack
- **Framework:** React 18 (SPA) with Vite build system
- **Styling:** Tailwind CSS (v3.4), PostCSS, Autoprefixer
- **Motion & Interactions:** Framer Motion (v11)
- **Icons:** Lucide React (tree-shaken imports)
- **Hosting & CI/CD:** GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy.yml`)

---

## 2. Directory Structure
```
/
├── index.html            # Entry HTML, SEO meta tags & Schema.org JSON-LD graph
├── public/               # Static assets directly served at web root
│   ├── Documents/        # Canonical PDF resumes (Comprehensive, Full-Stack, AI)
│   ├── images/           # Compressed WebP and fallback PNG project assets
│   ├── robots.txt        # Crawler directives & sitemap location
│   └── sitemap.xml       # Canonical XML sitemap with image metadata
├── src/
│   ├── components/       # Functional presentation and layout components
│   │   ├── Navbar.jsx    # Sticky navigation with mobile menu & resume dropdown
│   │   ├── Hero.jsx      # Above-the-fold display headline & CTAs (instant paint)
│   │   ├── About.jsx     # Bento grid biography, philosophy, and credentials
│   │   ├── Skills.jsx    # Interactive filtered skill categories with search
│   │   ├── Projects.jsx  # Interactive portfolio showcases with 3D coverflow
│   │   ├── Education.jsx # Experience, Education, and Certifications timeline
│   │   ├── Contact.jsx   # Interactive contact form with FormSubmit API
│   │   ├── Footer.jsx    # Back-to-top navigation & social media links
│   │   ├── MagneticButton.jsx # Spring-physics interactive button wrapper
│   │   └── ScrollPath.jsx     # Top-of-viewport reading progress indicator
│   ├── data/
│   │   └── index.js      # Centralized profile, experience, skill & project data
│   ├── App.jsx           # Root layout with lazy-loaded below-the-fold sections
│   ├── index.css         # Global utilities, fonts, and custom aurora styling
│   └── main.jsx          # React DOM root render entry point
├── package.json          # Dependency manifest
└── vite.config.js        # Vite config with manual chunking for vendor libraries
```

---

## 3. Performance & Loading Strategy
- **Above-The-Fold Priority:** `Hero.jsx` and `Navbar.jsx` are bundled directly for instant First Contentful Paint (FCP) and fast Largest Contentful Paint (LCP).
- **Below-The-Fold Lazy Loading:** `About`, `Skills`, `Projects`, `Education`, `Contact`, and `Footer` are dynamically loaded via `React.lazy()` upon user scroll or interaction triggers.
- **Rollup Manual Chunks:** Vendor libraries (`framer-motion`, `react`, `react-dom`) are partitioned into distinct cacheable chunks in `vite.config.js`.
