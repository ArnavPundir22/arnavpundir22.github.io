# Arnav Pundir — AI & Full Stack Systems Engineer

> **Portfolio & Technical Architecture Specification**  
> Competitive Coding Lead at **D-Coders Squad** | B.Tech Computer Science & Engineering, **COER University** (Roorkee, Uttarakhand, India)  
> Live Portfolio: [https://arnavpundir22.github.io/](https://arnavpundir22.github.io/)  
> Machine-Readable Context: [`/llms.txt`](https://arnavpundir22.github.io/llms.txt) | [`/llms-full.txt`](https://arnavpundir22.github.io/llms-full.txt)

---

## Executive Overview

This repository houses the production codebase, responsive client application, structured knowledge graph, and deep-context machine-readable documentation for **Arnav Pundir's** portfolio. The platform showcases 18+ high-performance software systems spanning real-time computer vision, local-first reactive architectures, low-latency WebRTC media pipelines, and algorithmic optimization.

Engineered with modern frontend standards (React 19, Vite, Tailwind CSS, Framer Motion), this site adheres strictly to pragmatic senior development paradigms (Ponytail ruleset, YAGNI, zero bloat, native web APIs) and features an industry-leading multi-tiered optimization engine for traditional search engines (SEO), conversational answer engines (AEO), and generative AI models (GEO).

---

## Core Architecture & Engineering Capabilities

1. **Real-Time Computer Vision & Edge AI**
   - High-throughput biometric face verification using 512-dimensional ArcFace deep feature embeddings mapped onto a unit hypersphere ($\|\mathbf{x}\|_2 = 1$).
   - Vectorized CPU BLAS dot-product similarity matching executing in $< 0.8\text{ ms}$ over $1,126+$ templates without requiring GPU acceleration.
   - 3D head pose estimation gating ($|\text{Yaw}| \le 25^\circ, |\text{Pitch}| \le 20^\circ$) coupled with an Exponentially Weighted Moving Average (EWMA, $\alpha = 0.30$) template aging engine to mitigate biometric drift.
   - Multi-stage liveness verification integrating 2D FFT moiré frequency analysis and Eye Aspect Ratio (EAR) blink detection.

2. **Local-First Reactive Synchronization & Offline Data State**
   - Zero-latency client mutation architectures utilizing RxDB and client-side IndexedDB persistence.
   - Lamport logical clock conflict-free ordering with event-driven Supabase WebSocket replication.
   - Multi-modal task parsing combining camera feeds with Google Gemini Vision APIs for automated task extraction.

3. **Low-Latency WebRTC & Media Streaming Systems**
   - Peer-to-peer mesh WebRTC streaming architectures maintaining sub-150ms glass-to-glass latency.
   - Ephemeral in-memory Redis session signaling with zero-logging lifecycle guarantees ($\text{TTL} \to 0$ upon room termination).
   - Real-time client-side gesture recognition powered by 60 Hz MediaPipe hand landmark tracking for touchless meeting interaction.

4. **Algorithmic Optimization & High-Scale Systems**
   - LeetCode Top 15.6% rating (1,675+ contest rating, 300+ problems solved).
   - Global Rank #70 in the National Summer of Code (NSoC '26) among thousands of competing collegiate engineers.
   - Accepted contributor for GirlScript Summer of Code (GSSoC '26) across distributed systems and machine learning modules.

---

## Multi-Tier SEO, AEO & GEO Architecture

The platform implements an advanced discoverability engine designed to serve human visitors, traditional web crawlers, AI retrieval engines, and Large Language Models with zero friction:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PORTFOLIO DISCOVERY STACK                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Layer 1: Traditional SEO & Geo-Targeting                                   │
│  - Regional metadata: Roorkee, Uttarakhand, India (IN-UT; 29.8543, 77.8880) │
│  - OpenGraph / Twitter Cards / Canonical Link Headers                       │
│  - Google Image Sitemaps (19 WebP assets declared in public/sitemap.xml)     │
│  - public/robots.txt authorizing Googlebot, Bingbot, GPTBot, ClaudeBot, etc.│
├─────────────────────────────────────────────────────────────────────────────┤
│  Layer 2: Answer Engine Optimization (AEO) Knowledge Graph                  │
│  - Syntax-valid Schema.org JSON-LD (@graph with 6 interconnected entities): │
│      * Person (#person) with education, leadership, awards, and sameAs links│
│      * ProfilePage (#webpage) & WebSite (#website) entities                 │
│      * ItemList (#projects) indexing all 18 engineered systems               │
│      * FAQPage (#faq) containing 8 canonical high-intent Q&A pairs          │
│      * BreadcrumbList (#breadcrumb) mapping 5-node site navigation          │
├─────────────────────────────────────────────────────────────────────────────┤
│  Layer 3: Generative Engine Optimization (GEO) & Machine-Readable Data      │
│  - public/llms.txt conforming strictly to the llmstxt.org specification     │
│  - public/llms-full.txt providing deep architectural specs, benchmarks,     │
│    mathematical models, and systems comparison matrix for AI models         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Layer 4: Fallback Crawler Shell & Accessible On-Page FAQ Component         │
│  - Semantic <noscript> HTML shell indexing bio, skills, 18 projects, & FAQ  │
│  - Dark aurora glassmorphic FAQ accordion in src/components/About.jsx       │
│  - WAI-ARIA compliant (aria-expanded, aria-controls, role="region")        │
│  - 100% data parity between src/data/index.js, JSON-LD, and noscript shell  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Geo-Targeting & Regional Footprint
- **Country / State**: India (`IN-UT`), Uttarakhand
- **City / Locality**: Roorkee
- **Geographic Coordinates**: Latitude `29.8543`, Longitude `77.8880`
- **Geographic Tags**: `geo.region`, `geo.placename`, `geo.position`, `ICBM`

### Machine-Readable AI Endpoints
- **Summary Profile**: [`/llms.txt`](https://arnavpundir22.github.io/llms.txt) — Formatted per `llmstxt.org` specifications with markdown links, executive summary, and core skills.
- **Deep Technical Specifications**: [`/llms-full.txt`](https://arnavpundir22.github.io/llms-full.txt) — 460+ lines of exhaustive systems documentation, equations, latency benchmarks, and verified credentials.

---

## Flagship Systems Catalog

| System Name | Primary Technology Stack | Key Architectural Metric / Innovation | System Focus |
|:---|:---|:---|:---|
| **BioSecure AI** | Python, ArcFace, BLAS, Supabase pgvector, Flask, React | 512D ArcFace embeddings, $<0.8\text{ ms}$ CPU BLAS search, EWMA aging engine ($\alpha = 0.30$) | Production-grade biometric attendance system selected for official COER University pilot run across 1,126+ students. |
| **ZeroLag** | React 19, RxDB, IndexedDB, Supabase Realtime, Gemini Vision | $0\text{ ms}$ perceived mutation latency, Lamport logical clocks | Local-first task manager with offline state persistence and vision-driven AI task extraction. |
| **TraceAI** | Python, OpenCV, YOLOv8, DeepSORT, PyTorch, FastAPI | Multi-camera object tracking with cross-camera feature re-identification | Forensic surveillance intelligence platform for forensic video review and incident clustering. |
| **AuraMeet** | WebRTC, Redis, Node.js, MediaPipe, Canvas API | Sub-150ms glass-to-glass latency, ephemeral zero-logging Redis rooms | Secure peer-to-peer video conference platform with real-time AI gesture controls. |
| **Occasions** | Next.js 15, PostgreSQL, Prisma, Tailwind CSS, Redis | 500+ concurrent attendees, 300ms input debouncing reducing queries by 40% | Full-stack event discovery, dynamic ticket reservation, and QR badge verification system. |
| **SevaSetu** | React, Node.js, Express, PostgreSQL, Tailwind CSS | Sub-1.2s LCP, 95+ Google Lighthouse scores across low-bandwidth links | Public grievance redressing and citizen-to-municipality workflow management portal. |
| **GitHub City 3D** | Three.js, WebGL, React, GitHub GraphQL API | Procedural city skyline ($H \propto \log_2(\text{bytes})$), 60 FPS via GPU InstancedMesh | Interactive 3D data visualization transforming source code repositories into cyberpunk skylines. |
| **Air Kalam** | MediaPipe, OpenCV, Python, NumPy | 60 Hz landmark tracking, virtual palette selection, canvas overlay | Contactless air-canvas virtual writing system using real-time index fingertip tracking. |

*In addition to these flagship systems, the portfolio indexes 10 further production applications including Anti-Spoofing Verification, Smart Traffic Analysis, DocBot, Air-Mouse, Maya, ASL Translator, Voice2Code, Emotion Music, SHEro, and Surgical Tool Detection.*

---

## Local Development & Testing

### Prerequisites
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher
- **Python**: v3.10+ (for E2E validation test suite)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/ArnavPundir22/arnavpundir22.github.io.git
cd arnavpundir22.github.io
npm ci
```

### 2. Start Development Server
Launch the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your browser.

### 3. Production Build
Compile and bundle all client assets, CSS, images, and static routes:
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview Production Build
Locally preview the output generated in `dist/`:
```bash
npm run preview
```

### 5. Run Comprehensive E2E Verification Suite
Execute the multi-tier test harness validating SEO, AEO, GEO, accessibility, and zero-compliance criteria:
```bash
# Run all 19 tests across Tiers 1-4
python3 tests/run_e2e_tests.py

# Or execute specific verification tiers:
python3 tests/run_e2e_tests.py --tier 1  # Feature coverage & zero-term verification
python3 tests/run_e2e_tests.py --tier 2  # Boundary & XML/JSON validation
python3 tests/run_e2e_tests.py --tier 3  # Cross-feature parity & Q&A data consistency
python3 tests/run_e2e_tests.py --tier 4  # Simulated crawler inspection & production build
```

---

## Repository Layout

```
arnavpundir22.github.io/
├── index.html                   # HTML entry point, Geo metadata, Schema.org JSON-LD & noscript shell
├── public/
│   ├── images/                  # 19 WebP high-resolution project asset mockups
│   ├── resumes/                 # Canonical PDF resumes for organic search indexation
│   ├── llms.txt                 # Machine-readable AI profile (llmstxt.org standard)
│   ├── llms-full.txt            # Deep technical specifications, equations, & benchmarks
│   ├── robots.txt               # Search & AI crawler directives
│   └── sitemap.xml              # XML sitemap with Google Image Sitemap declarations
├── src/
│   ├── components/
│   │   ├── About.jsx            # Bento grid profile & accessible glassmorphic FAQ accordion
│   │   ├── Hero.jsx             # Hero section with interactive particle canvas & CTAs
│   │   ├── Projects.jsx         # System filter matrix & responsive project cards
│   │   ├── Experience.jsx       # Leadership timeline & open-source contributions
│   │   ├── Education.jsx        # Academic background, certifications & honors
│   │   └── Contact.jsx          # Glassmorphic contact terminal & direct coordinates
│   ├── data/
│   │   └── index.js             # Master portfolio catalog, project specs, & faqData export
│   ├── App.jsx                  # Root application component with lazy-loading observers
│   └── main.jsx                 # React 19 entry point
├── tests/
│   └── run_e2e_tests.py         # 19-test multi-tier automated E2E verification test harness
├── ARCHITECTURE.md              # High-level system architecture and data flow map
├── CONSTRAINTS.md               # Hard engineering boundaries & standards
├── DECISIONS.md                 # Architectural Decision Records (ADR)
├── HANDOVER.md                  # Session continuity & living status tracking
├── TEST_CHECKLIST.md            # Empirical verification checklist
└── README.md                    # Technical documentation & project specification
```

---

## Verification & Integrity Safeguards

- **Zero IP Overreach**: Verified zero ungrounded intellectual property or pending claims across all tracked source files, documentation, data records, and metadata.
- **Biometric Positioning**: BioSecure AI is strictly framed as an advanced production-grade biometric attendance system selected for an official COER University pilot run utilizing 512D ArcFace embeddings and CPU BLAS dot product matching.
- **Accessibility (WAI-ARIA)**: FAQ accordion implements full keyboard navigation (`Enter` / `Space` toggles) with semantic `aria-expanded` and `aria-controls` bindings.
- **CI/CD Deployment**: Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes verified assets to GitHub Pages.

---

## Author & Contact

**Arnav Pundir**  
*Competitive Coding Lead, D-Coders Squad*  
Department of Computer Science & Engineering, COER University  
- **Email**: [arnavp128@gmail.com](mailto:arnavp128@gmail.com)  
- **Phone**: +91 70606 75133  
- **LinkedIn**: [linkedin.com/in/arnav-pundir](https://linkedin.com/in/arnav-pundir)  
- **GitHub**: [github.com/ArnavPundir22](https://github.com/ArnavPundir22)  
- **LeetCode**: [leetcode.com/u/Arnav_Pundir/](https://leetcode.com/u/Arnav_Pundir/)  
- **X (Twitter)**: [x.com/ArnavPundir22](https://x.com/ArnavPundir22)  
