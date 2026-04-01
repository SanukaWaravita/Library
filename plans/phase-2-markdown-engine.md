# Phase 2: Markdown Engine

## Goal
Build the core engine that fetches markdown files, parses them to HTML, and renders them beautifully with syntax-highlighted code blocks.

## Tasks

### 2.1 Add Vendor Libraries
Download and include (no CDN — works offline):
- **marked.js** (~40KB minified) — fast markdown-to-HTML parser
- **highlight.js** (~30KB + language packs) — syntax highlighting for code blocks
  - Include: javascript, java, html, css, sql, bash, json, xml

### 2.2 Build the Markdown Engine (`scripts/markdown-engine.js`)
Core pipeline:
```
URL hash → file path → fetch(.md) → marked.parse() → highlight code → inject into #content
```

Features:
- **Fetch with caching:** Use a simple in-memory cache so revisited pages don't re-fetch
- **Error handling:** Show a friendly "Page not found" if fetch returns 404
- **Loading state:** Show a skeleton/spinner while fetching
- **Image path resolution:** Rewrite relative image paths in markdown to be correct from root
- **Link interception:** Convert markdown links (`[text](other-file.md)`) to hash links (`#/path/to/other-file`)

### 2.3 Create Markdown Styles (`styles/markdown.css`)
Style the rendered HTML for a great reading experience:
- **Headings:** Clear hierarchy with spacing (h1 through h6)
- **Code blocks:** Syntax-highlighted with background, border-radius, horizontal scroll
- **Inline code:** Distinct background, monospace font
- **Tables:** Bordered, striped rows, responsive horizontal scroll
- **Lists:** Proper indentation, bullet/number styles
- **Blockquotes:** Left border accent, italic styling
- **Images:** Max-width 100%, centered, optional captions
- **Links:** Accent color, underline on hover
- **Horizontal rules:** Subtle dividers

### 2.4 Add a Table of Contents Generator
For each rendered page:
- Scan for h2/h3 headings
- Generate a floating/collapsible ToC on the side (desktop) or top (mobile)
- Clicking a ToC item smooth-scrolls to that heading
- Add `id` attributes to headings for anchor linking

## Acceptance Criteria
- [ ] Any markdown file in the repo renders correctly when navigated to
- [ ] Code blocks have syntax highlighting with correct language detection
- [ ] Images display correctly with proper paths
- [ ] Links between markdown files work (converted to hash links)
- [ ] Table of contents generates from headings
- [ ] Loading and error states work
- [ ] Pages load fast (< 500ms for cached, < 1s for first load)

## Estimated Scope
~250 lines of JS, ~200 lines of CSS, 2 vendor libraries.
