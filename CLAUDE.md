# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

V-OptimAIse Beta — a React marketing/product website for an AI-driven manufacturing optimization platform. Features product showcases (VisionAI, SmartFactory, CoPilot), a contact form via EmailJS, and animated UI sections.

## Commands

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build to /build
npm test           # Jest tests in interactive watch mode
```

ESLint is configured via `react-app` preset in package.json (no separate config file). Errors appear in the dev console during `npm start`.

## Architecture

- **Build tooling:** Create React App (react-scripts 5.0.1) with Craco. No custom craco/tailwind/postcss config files.
- **Styling:** Tailwind CSS 4 + component-scoped CSS files (each component directory has its own `.css`).
- **Routing:** React Router DOM v7 — all routes defined in `src/App.js`. No nested route layouts; each page component includes its own Navbar/Footer.
- **State:** Local React hooks only (useState). No global state management.
- **Animations:** Framer Motion for component animations, AOS for scroll-triggered effects, Swiper for carousels.

### Component Organization

Components live in `src/components/`, each in its own directory with a matching CSS file:

- **Page components** (Home, AboutUs, Team, Customers, ContactUs, NotFound) — standalone pages with their own layout
- **Product pages** under `ProductsPage/` — VisionAI.js, SmartFactory.js, CoPilot.js, ProductsPage.js
- **Shared components** — Navbar/, Footer/, ScrollToTop.jsx, StatsSection/, SolutionCards/, Timeline/, Implementation/

### Routes (src/App.js)

| Path | Component |
|------|-----------|
| `/` | Home |
| `/about` | AboutUs |
| `/team` | Team |
| `/customers` | Customers |
| `/contact` | ContactUs |
| `/productsPage` | ProductsPage |
| `/productspage/vision-ai` | VisionAI |
| `/productspage/smart-factory` | SmartFactory |
| `/productspage/copilot` | CoPilot |

### Key Libraries

| Library | Purpose |
|---------|---------|
| framer-motion / motion | Component animations |
| aos | Scroll-triggered animations |
| swiper | Touch carousels/sliders |
| @emailjs/browser + emailjs-com | Contact form email sending |
| react-countup | Animated number counters |
| react-icons + @fortawesome | Icons |

### Static Assets

Images (WebP/PNG), videos (MP4), and PDFs are in `public/images/`, `public/videos/`, and `public/pdfs/`.

## Environment Variables

EmailJS credentials are configured in `.env` as `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, and `REACT_APP_EMAILJS_USER_ID`.



## New Page Instructions
- New product or summit pages should follow existing product page patterns
- Place new product pages under src/components/ProductsPage/ OR as a standalone page if specified
- Always provide route entry for App.js
- Do not remove existing routes
