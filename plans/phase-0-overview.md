# Library Website - Phased Build Plan

## Vision
Transform the Library markdown knowledge base into a fully functional, responsive web application that can be hosted (e.g. GitHub Pages) and accessed from any device — laptop, tablet, or phone. The site will dynamically discover, parse, and beautifully render all markdown content without a build step.

## Architecture Decision: Static SPA with Client-Side Markdown Rendering

**Why no build tools / no frameworks?**
- GitHub Pages compatible (static files only)
- Zero dependencies to maintain
- Instant deployment — just push and it works
- The knowledge base is the source of truth — no duplication

**Core idea:** A single `app.js` engine that:
1. Reads a content manifest (auto-generated or hand-maintained JSON) listing all markdown files
2. Fetches markdown files on demand via `fetch()`
3. Parses them client-side using a lightweight markdown library (marked.js ~40KB)
4. Renders into the page with syntax highlighting (highlight.js for code blocks)

---

## Phases at a Glance

| Phase | Name | Goal | Deliverable |
|-------|------|------|-------------|
| 1 | Foundation & Routing | SPA shell with hash-based routing | Navigation works, pages load |
| 2 | Markdown Engine | Fetch + parse + render markdown | Any .md file renders beautifully |
| 3 | Content Discovery | Auto-generate content manifest | All 106 files browsable from sidebar/nav |
| 4 | Responsive UI Polish | Mobile-first layout, sidebar, breadcrumbs | Works great on phone/tablet/desktop |
| 5 | Search & UX Enhancements | Client-side full-text search, dark mode | Find anything instantly |
| 6 | PWA & Offline | Service worker, installable app | Works offline, feels native |

---

## Constraints
- **No Node.js / npm required** for the end user or deployment
- **No server-side rendering** — everything runs in the browser
- **Markdown files are never modified** — they remain the single source of truth
- **Content manifest** (`content.json`) is the only generated artifact — can be regenerated with a simple script
- **Lightweight** — target < 200KB total JS (including libraries)

---

## File Structure (Target)

```
Library/
├── index.html              (SPA entry point — rewritten)
├── content.json            (Auto-generated manifest of all .md files)
├── styles/
│   ├── main.css            (Base styles — enhanced)
│   ├── markdown.css        (Rendered markdown styles)
│   └── responsive.css      (Device-specific overrides)
├── scripts/
│   ├── app.js              (SPA router + orchestrator)
│   ├── markdown-engine.js  (Fetch, parse, render pipeline)
│   ├── sidebar.js          (Navigation tree component)
│   ├── search.js           (Full-text search engine)
│   └── vendor/
│       ├── marked.min.js   (Markdown parser)
│       └── highlight.min.js (Code syntax highlighting)
├── plans/                  (This folder — build plans)
├── java/                   (Knowledge base — untouched)
├── javascript/             (Knowledge base — untouched)
├── system_analysis_and_design/ (Knowledge base — untouched)
└── ...
```

See individual phase files for detailed breakdown.
