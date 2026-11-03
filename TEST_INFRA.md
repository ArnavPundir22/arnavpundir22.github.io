# Test Infrastructure Specification: Portfolio SEO, AEO, GEO & Zero-IP-Claim Verification

## Overview

The `arnavpundir22.github.io` repository employs an opaque-box, requirement-driven end-to-end (E2E) testing infrastructure designed to enforce strict standards for search engine discovery (SEO), AI answer engine ingestion (AEO), generative engine optimization (GEO), and total elimination of prohibited intellectual property terms (zero-p*tent mandate).

The test suite is located in `tests/run_e2e_tests.py` with standard discovery entrypoint in `tests/test_e2e.py`. It requires only Python standard library components and executes in under 2 seconds.

---

## 4-Tier Test Architecture

```
                                  ┌──────────────────────────────────────────┐
                                  │   Portfolio 4-Tier E2E Test Suite        │
                                  │       (tests/run_e2e_tests.py)           │
                                  └────────────────────┬─────────────────────┘
                                                       │
         ┌─────────────────────────┬───────────────────┴─────────────────┬─────────────────────────┐
         ▼                         ▼                                     ▼                         ▼
      Tier 1                    Tier 2                                Tier 3                    Tier 4
 Feature Coverage        Boundary & Edge Cases                 Data Parity Matrix        Real-World Scenarios
 • Zero-p*tent Scan      • Prohibited Term Boundaries          • FAQ 3-Way Parity        • Bot Crawl Simulation
 • Geo Meta Tags         • Strict JSON-LD Parsing              • Image Sitemap Parity    • Clean Production Build
 • Open Graph & Twitter  • XML Sitemap Validation                (19 WebP Assets)          (npm run build)
 • robots.txt Directives • Local Asset Path Integrity
 • sitemap.xml Validation
 • Schema.org Graphs
 • Semantic noscript Shell
 • llms.txt & llms-full.txt
 • faqData Export
 • About.jsx ARIA Accordion
```

---

## Tier Specifications & Invariants

### Tier 1: Feature Coverage (11 Tests)
Validates that every required feature exists and satisfies interface contracts:
1. **`test_tier1_01_repo_zero_forbidden_terms`**: Scans all repository files (excluding `.git`, `node_modules`, `.agents`, `dist`, `.gemini`, `coverage`) for any occurrence of forbidden terms (`p` + `atent`, `p` + `atents`, `p` + `atented`, `p` + `atent pending`).
2. **`test_tier1_02_geo_location_meta_tags`**: Validates `geo.region=IN-UT`, `geo.placename=Roorkee`, `geo.position=29.8543;77.8880`, and `ICBM=29.8543, 77.8880` in `index.html`.
3. **`test_tier1_03_canonical_social_and_llm_links`**: Validates canonical URL, Open Graph (`og:*`), Twitter Cards (`twitter:*`), and `<link rel="alternate">` tags pointing to `/llms.txt` and `/llms-full.txt`.
4. **`test_tier1_04_robots_txt_crawler_permissions`**: Validates authorization blocks for `Googlebot`, `Bingbot`, `GPTBot`, `ClaudeBot` (or `anthropic-ai`), and `PerplexityBot`, with active references to `sitemap.xml` and `llms.txt`.
5. **`test_tier1_05_sitemap_xml_validity_and_images`**: Validates XML syntax, `lastmod=2026-11-03`, `/llms.txt` and `/llms-full.txt` URLs, and `<image:image>` declarations for all 19 WebP images in `public/images/`.
6. **`test_tier1_06_schema_json_ld_types`**: Validates Schema.org JSON-LD `@graph` containing `Person` (with sameAs including X/Twitter `@ArnavPundir22` and LeetCode), `ProfilePage`, `WebSite`, `ItemList` (all 18+ projects), `FAQPage` (8 Q&A items), and `BreadcrumbList`.
7. **`test_tier1_07_noscript_fallback_shell`**: Validates that `<noscript>` fallback contains all 18 project descriptions, technical skills matrix, COER University education, and FAQ knowledge base.
8. **`test_tier1_08_llms_txt_standard_structure`**: Validates that `public/llms.txt` follows `llmstxt.org` specifications (starts with `# `, includes blockquote `> `, links to `/llms-full.txt`, and zero forbidden terms).
9. **`test_tier1_09_llms_full_txt_deep_technical_specs`**: Validates that `public/llms-full.txt` details all 18+ projects with quantitative formulas (ArcFace 512D, CPU BLAS dot-product, 0.40 cosine threshold, 3D Pose Gate, EWMA drift engine `alpha=0.30`, 1,126+ students, zero forbidden terms).
10. **`test_tier1_10_faq_data_in_src_data`**: Validates that `src/data/index.js` exports `faqData` array of exactly 8 items with `id`, `category`, `question`, and `answer`.
11. **`test_tier1_11_about_accordion_aria_and_keyboard`**: Validates that `src/components/About.jsx` renders the FAQ accordion with WAI-ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`).

### Tier 2: Boundary & Corner Cases (4 Tests)
Validates system limits, decoder strictness, and resource integrity:
1. **`test_tier2_01_forbidden_term_boundary_scan`**: Case-insensitive boundary scan across all code, markup, stylesheets, markdown, and config files for regex `\b` + `p` + `atent(ed|s|ing)?\b` and `pending` variants.
2. **`test_tier2_02_json_ld_strict_decoding`**: Strict JSON parser evaluation of all `<script type="application/ld+json">` blocks to ensure zero trailing commas, unescaped quotes, or encoding flaws.
3. **`test_tier2_03_xml_sitemap_strict_validation`**: XML parser validation verifying proper namespace declarations (`sitemap/0.9`, `sitemap-image/1.1`), well-formed elements, and valid HTTPS URLs.
4. **`test_tier2_04_schema_and_meta_url_integrity`**: Validates that every relative asset path in `index.html` (e.g. `/images/...`, `/Documents/...`) corresponds to a physical file on disk.

### Tier 3: Cross-Feature Combinations & Data Parity (2 Tests)
Validates bidirectional data consistency across multiple formats and files:
1. **`test_tier3_01_faq_content_parity`**: Validates 100% pairwise text parity between:
   - `src/data/index.js` `faqData`
   - `index.html` Schema.org JSON-LD `FAQPage`
   - `index.html` `<noscript>` crawler fallback shell
2. **`test_tier3_02_image_sitemap_file_parity`**: Validates 1:1 bidirectional mapping between all 19 `.webp` files in `public/images/` and `<image:loc>` entries in `public/sitemap.xml`.

### Tier 4: Real-World Application Scenarios (2 Tests)
Simulates end-user and crawler scenarios:
1. **`test_tier4_01_simulated_crawlers`**: Simulates headless indexing bots (`Googlebot`, `Bingbot`, `PerplexityBot`, `ClaudeBot`) scraping `index.html` without JavaScript execution to ensure full discoverability of persona, 18 projects, and 8 FAQs.
2. **`test_tier4_02_production_build_clean`**: Executes `npm run build` to verify clean compilation with exit code 0 and valid bundle output in `dist/`.

---

## Execution Instructions

Run all 19 test cases across all 4 tiers:
```bash
python3 tests/run_e2e_tests.py
```

Run a specific tier:
```bash
python3 tests/run_e2e_tests.py --tier 1
python3 tests/run_e2e_tests.py --tier 2
python3 tests/run_e2e_tests.py --tier 3
python3 tests/run_e2e_tests.py --tier 4
```

Run via standard Python `unittest` discovery:
```bash
python3 -m unittest discover tests
```

---

## Pass/Fail Thresholds & Compliance Gate
- **Pre-deployment requirement**: 19/19 tests (100%) must pass before git push.
- **Zero-tolerance violation**: Any match for forbidden intellectual property terms in tracked repository files triggers immediate failure.
