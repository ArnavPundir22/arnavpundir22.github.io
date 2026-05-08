# Arnav Portfolio

This repository contains the source and deployed assets for a personal portfolio site.

## Initialize locally

### 1) Prerequisites
- Node.js 20+
- npm

### 2) Install dependencies
```bash
npm ci
```

### 3) Start development server
```bash
npm run dev
```

### 4) Create a production build
```bash
npm run build
```

### 5) Preview the production build
```bash
npm run preview
```

## Scripts
- `npm run dev` — run Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview production build locally

## Deployment
GitHub Actions (`.github/workflows/deploy.yml`) installs dependencies, builds the site, and publishes built files for GitHub Pages.
