# Phase 6: PWA & Offline Support

## Goal
Make the Library installable as a Progressive Web App that works offline — access your knowledge base anywhere, even without internet.

## Tasks

### 6.1 Web App Manifest (`manifest.json`)
```json
{
  "name": "Knowledge Library",
  "short_name": "Library",
  "description": "Personal knowledge base",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d6efd",
  "icons": [
    { "src": "assets/icon-192.png", "sizes": "192x192" },
    { "src": "assets/icon-512.png", "sizes": "512x512" }
  ]
}
```

### 6.2 Service Worker (`sw.js`)
Caching strategy:
- **Install:** Cache the app shell (HTML, CSS, JS, vendor libs)
- **Activate:** Clean old caches
- **Fetch strategy:**
  - App shell → Cache first, network fallback
  - Markdown files → Network first, cache fallback (so you get fresh content when online)
  - Images → Cache first

### 6.3 Offline Indicator
- Show a subtle banner when offline: "You're offline — showing cached content"
- Dim or hide pages that haven't been cached yet
- Auto-dismiss when back online

### 6.4 Pre-Cache Popular Content
- Option to "Download all for offline" button
- Fetches and caches all markdown files in background
- Shows progress bar during download
- Stored in Cache API (not localStorage — better for large content)

### 6.5 App Icons & Splash Screens
- Generate icons at required sizes (192x192, 512x512)
- Apple touch icon for iOS
- Splash screen configuration

## Acceptance Criteria
- [ ] App is installable on Chrome/Edge (desktop and mobile)
- [ ] App is installable on iOS Safari (Add to Home Screen)
- [ ] Previously visited pages work offline
- [ ] "Download all" caches entire knowledge base
- [ ] Offline indicator shows when disconnected
- [ ] App updates content when back online

## Estimated Scope
~150 lines for service worker, ~50 lines for manifest, ~100 lines for offline UI.

---

## Beyond Phase 6 (Future Ideas)
- **Auto-sync:** Watch for file changes and refresh content
- **Annotations:** Personal notes/highlights on any page
- **Spaced repetition:** Flag concepts for review, get reminders
- **Export:** Generate PDF of any section
- **Multi-user:** Share your library with others
- **AI search:** Semantic search using embeddings
