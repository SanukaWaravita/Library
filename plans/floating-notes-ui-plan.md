# Floating Notes UI — Implementation Plan

## Concept
A living, ambient workspace where note cards float in clusters by category. No sidebar — interaction happens through a bottom-right launcher and floating note cards.

---

## Visual Breakdown

```
┌─────────────────────────────────────────────────┐
│  Navbar: Logo / Title                    simple  │
├─────────────────────────────────────────────────┤
│                                                  │
│    ┌──┐ ┌──┐                                     │
│   │    │┌──┐  ← JS cluster (purple boundary)     │
│    └──┘ └──┘                                     │
│     └──┘                                         │
│                  ┌──┐                             │
│                 │    │┌──┐ ← Java cluster (orange)│
│                  └──┘ └──┘                        │
│                                                  │
│         ┌──┐ ┌──┐┌──┐                            │
│        │    │   ││    │ ← SAD cluster (green)     │
│         └──┘ └──┘└──┘                             │
│              ┌──┐                                 │
│              └──┘                                 │
│                                           ┌────┐ │
│                                           │ ●  │ │ ← Launcher
│                                           └────┘ │
└─────────────────────────────────────────────────┘
```

When a note card is opened:
```
┌─────────────────────────────────────────────────┐
│  Navbar                                          │
├─────────────────────────────────────────────────┤
│  (floating cards still visible, dimmed)          │
│                                                  │
│       ┌─────────────────────────────┐            │
│       │ [Index] [Random]        [×] │            │
│       │─────────────────────────────│            │
│       │                             │            │
│       │  Rendered markdown content  │  ← resizable│
│       │                             │   draggable │
│       │                             │            │
│       └─────────────────────────────┘            │
│                                           ┌────┐ │
│                                           │ ●  │ │
│                                           └────┘ │
└─────────────────────────────────────────────────┘
```

---

## Architecture

### 1. Floating Cards Engine (`scripts/floating-cards.js`)
- Each markdown file = one mini card element in the DOM
- Cards grouped by category, positioned within a circular boundary
- Gentle floating animation (CSS animation with slight random offsets)
- Cards are small rectangles with subtle styling (title only, no content)
- Each category cluster has a faint colored circular backdrop
- On window resize, recalculate cluster center positions

**Positioning strategy:**
- Divide the viewport into zones (one per category)
- Each zone has a center point and a radius
- Cards within a zone are placed randomly within that radius
- CSS `animation` with random `translateX`/`translateY` keyframes for gentle bobbing

### 2. Launcher (`scripts/launcher.js`)
- Fixed bottom-right circular button
- On click: slides up a panel listing category names + icons
- Clicking a category:
  1. Highlights that cluster (others dim)
  2. Opens an "index card" — a note card listing all file titles in that group
- Panel closes after selection

### 3. Note Card (`scripts/note-card.js`)
- A single floating card component, centered on screen
- **Header:** category label, [Index] button, [Random] button, [×] close
- **Body:** rendered markdown (scrollable)
- **Resizable:** drag handle on bottom-right corner
- **Draggable:** drag from header bar
- Close button dismisses the card back into the cluster

### 4. Markdown Engine (`scripts/markdown-engine.js`)
- Same as before: fetch .md → marked.parse() → highlight.js
- Renders into the note card body

### 5. Content Manifest (`content.json`)
- Same as before — generated with `node scripts/generate-manifest.js`

---

## File Structure

```
Library/
├── index.html
├── content.json
├── styles/
│   ├── main.css              (base, navbar, background)
│   ├── floating-cards.css    (clusters, mini cards, animations)
│   ├── note-card.css         (the opened note card, resize, drag)
│   ├── launcher.css          (bottom-right button + panel)
│   ├── markdown.css          (rendered content styles)
│   └── highlight-github.min.css
├── scripts/
│   ├── app.js                (orchestrator — ties everything together)
│   ├── floating-cards.js     (background card clusters)
│   ├── launcher.js           (bottom-right menu)
│   ├── note-card.js          (opened note card component)
│   ├── markdown-engine.js    (fetch + parse + render)
│   └── vendor/
│       ├── marked.min.js
│       └── highlight.min.js
└── ...
```

---

## Implementation Order

### Step 1: HTML Shell + Navbar + Background
- Grey background, simple navbar
- Container for floating card clusters
- Launcher button (static, no logic yet)

### Step 2: Content Manifest + Floating Cards
- Load content.json
- Generate mini card elements grouped in circular clusters
- Add gentle floating CSS animation

### Step 3: Launcher Panel
- Wire up the circular button
- Show/hide the category panel
- Clicking a category highlights that cluster

### Step 4: Index Card
- When a category is selected, open a note card showing the index
- List all note titles as clickable items

### Step 5: Note Card (Markdown Rendering)
- Click a title → fetch and render the markdown
- [×] to close, [Index] to go back, [Random] for random note
- Resizable + draggable

### Step 6: Polish
- Transitions & animations (card appears, disappears)
- Mobile responsive (cards stack, launcher still works)
- Keyboard: Escape to close card
