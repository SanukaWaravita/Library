# Phase 5: Search & UX Enhancements

## Goal
Add client-side full-text search and quality-of-life features that make the Library a joy to use daily.

## Tasks

### 5.1 Full-Text Search Engine (`scripts/search.js`)
**Approach:** Build a search index at load time from `content.json` + fetched file contents.

- On first search, fetch all markdown files in background and build an inverted index
- Index stores: file path, title (h1), headings, and full text
- Search supports:
  - Fuzzy matching (typo tolerance)
  - Instant results as you type (debounced 200ms)
  - Highlight matching terms in results
  - Keyboard navigation (arrow keys, Enter to select)

**Search UI:**
- Search bar in the header (always visible on desktop)
- `Ctrl+K` / `Cmd+K` keyboard shortcut to focus search
- Dropdown results panel with file path, title, and snippet
- Recent searches stored in localStorage

### 5.2 Dark Mode
- Toggle button in header (sun/moon icon)
- CSS custom properties make this straightforward — swap variable values
- Respect `prefers-color-scheme` system preference
- Remember choice in localStorage
- Smooth transition when toggling

Dark mode palette:
```css
--primary-bg: #1a1a2e;
--secondary-bg: #16213e;
--text-primary: #e0e0e0;
--text-secondary: #a0a0a0;
--border-color: #2a2a4a;
/* ...etc */
```

### 5.3 Reading Progress
- Thin progress bar at top of page showing scroll position
- "Back to top" button appears after scrolling down
- Remember last read position per file (localStorage)

### 5.4 Keyboard Shortcuts
- `Ctrl+K` → Focus search
- `Esc` → Close search / sidebar
- `←` / `→` → Previous / next file in same folder
- `[` / `]` → Collapse / expand sidebar
- `?` → Show shortcuts overlay

### 5.5 Favorites / Bookmarks
- Star icon on each page to bookmark it
- Bookmarks section in sidebar
- Stored in localStorage

## Acceptance Criteria
- [ ] Search finds content across all files
- [ ] Results appear instantly as you type
- [ ] Ctrl+K opens search
- [ ] Dark mode toggles and persists
- [ ] Dark mode respects system preference on first visit
- [ ] Reading progress bar works
- [ ] Keyboard shortcuts work
- [ ] Bookmarks persist across sessions

## Estimated Scope
~400 lines for search, ~100 lines for dark mode, ~150 lines for other UX features.
