# Phase 1: Foundation & Routing

## Goal
Set up the SPA (Single Page Application) shell with hash-based routing so that URLs like `#/javascript/Notes/Variables` load the corresponding markdown file.

## Why Hash-Based Routing?
- Works on any static host (GitHub Pages, Netlify, local file server)
- No server config needed (no `.htaccess`, no redirects)
- Browser back/forward buttons work naturally
- Bookmarkable URLs

## Tasks

### 1.1 Create the SPA HTML Shell
Rewrite `index.html` to be the single entry point:
- A `<div id="app">` container for dynamic content
- Persistent header with logo + navigation
- A `<div id="sidebar">` for the navigation tree (populated later)
- A `<div id="content">` for rendered markdown
- A `<div id="home">` for the landing page (current hero + cards)
- Footer

### 1.2 Build the Router (`scripts/app.js`)
A minimal hash router:
```
#/                          → Home page (landing)
#/javascript/Notes/Variables → Fetch & render javascript/Notes/Variables.md
#/java/Notes/Class          → Fetch & render java/Notes/Class.md
```

Logic:
- Listen to `hashchange` event
- Parse the hash into a file path
- If `/` → show home view
- Otherwise → pass path to markdown engine (Phase 2)
- Update active state in sidebar navigation
- Update document title and breadcrumbs

### 1.3 Create Base Script Structure
```
scripts/
├── app.js              (Router + app initialization)
├── markdown-engine.js  (Stub — just logs the requested path for now)
└── vendor/             (Empty — libraries added in Phase 2)
```

### 1.4 Update Navigation Links
Convert all existing `<a href="...">` links to use hash-based routing:
- `href="javascript/index.html"` → `href="#/javascript"`
- `href="index.md"` → `href="#/index"`

## Acceptance Criteria
- [ ] Navigating to `#/` shows the landing page
- [ ] Navigating to `#/javascript/Notes/Variables` shows a placeholder ("Loading Variables.md...")
- [ ] Browser back/forward works
- [ ] URL is bookmarkable and shareable
- [ ] No page reloads when navigating

## Estimated Scope
~150 lines of JS, HTML restructure, minor CSS additions.
