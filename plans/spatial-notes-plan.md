# Spatial Notes Universe — Implementation Plan

## What changes from current approach

| Aspect | Current (vanilla) | New (prompt.md) |
|--------|-------------------|-----------------|
| Stack | Plain HTML/CSS/JS | React + Vite + Framer Motion |
| Feel | Sticky notes on grey bg | Cinematic spatial universe, dark, glowing |
| Categories | Colored circle clusters | Glowing anchor spheres (stars/suns) |
| Cards | Static mini cards with float animation | Orbiting cards with physics-like motion |
| Transitions | CSS class toggles | Framer Motion layout animations, spring transitions |
| Depth | Flat | Blur, scale, opacity, z-layers, parallax |
| Deploy | Direct static files | Vite build → GitHub Pages |

## Architecture

```
Library/
├── app/                          ← NEW: React app lives here
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Scene.jsx           (universe container, mouse parallax)
│   │   │   ├── CategoryAnchor.jsx  (glowing sphere per category)
│   │   │   ├── OrbitingCard.jsx    (mini card orbiting an anchor)
│   │   │   ├── CategoryIndexCard.jsx (lists all note titles)
│   │   │   ├── FocusedNoteCard.jsx (full rendered note, resizable)
│   │   │   ├── Launcher.jsx       (FAB + category panel)
│   │   │   └── BackgroundEffects.jsx (ambient particles/trails)
│   │   ├── engine/
│   │   │   ├── useNotes.js         (load content.json + fetch .md files)
│   │   │   ├── useLayout.js        (compute anchor positions, card orbits)
│   │   │   ├── useAppState.js      (overview → category → note state machine)
│   │   │   └── markdown.js         (marked + highlight integration)
│   │   ├── styles/
│   │   │   └── global.css
│   │   └── data/
│   │       └── (content.json copied at build time or fetched)
│   └── public/
│       └── (markdown files served from here or fetched from parent)
├── content.json                  ← existing manifest
├── javascript/                   ← existing notes (untouched)
├── java/
├── system_analysis_and_design/
└── ...
```

## State Machine

```
OVERVIEW  ──(select category)──▶  CATEGORY_SELECTED  ──(click note title)──▶  NOTE_FOCUSED
   ▲                                    │                                         │
   └──────(close / back)────────────────┘◀────────(index btn / close)─────────────┘
```

Each state transition triggers:
1. **Layout recalculation** — anchors and cards reposition
2. **Framer Motion animation** — springs, opacity, scale, blur
3. **Visual emphasis shift** — selected category foregrounds, others recede

## Phase 1: Static Scene + Anchors + Cards + Launcher

### 1a. Vite + React scaffold
- `npm create vite@latest` inside `app/`
- Install: `framer-motion`, `marked`, `highlight.js`
- Configure `vite.config.js` for GitHub Pages base path

### 1b. Scene container
- Full viewport, dark background (#0a0a12)
- Subtle radial gradient or noise texture for atmosphere
- Mouse-move listener for parallax offset (stored in context)

### 1c. Category anchors
- 4 glowing spheres positioned in a balanced layout
- Each anchor: radial gradient + box-shadow glow in category color
- Subtle pulsing animation (scale 1.0 → 1.02, opacity breathing)
- Label below each anchor

### 1d. Orbiting note cards
- Mini rectangular cards around each anchor
- Positioned on elliptical paths (parametric: x = cx + rx*cos(θ), y = cy + ry*sin(θ))
- Each card has a unique θ offset, slowly incrementing over time
- Cards have: soft shadow, slight transparency, tiny title text
- Count matches actual file count per category (capped at ~25 visible)

### 1e. Launcher (FAB)
- Fixed bottom-right circular button
- Click → Framer AnimatePresence panel slides up
- Panel lists 4 categories with colored dots + file counts

## Phase 2: Index Card + Note Focus + Transitions

### 2a. Category selection transition
- Selected anchor moves toward center, scales up slightly
- Other anchors drift back, blur, reduce opacity
- Cards of selected category spread out slightly
- Cards of other categories fade
- **Index card** appears: lists all note titles, scrollable
- Spring animation (stiffness ~120, damping ~20)

### 2b. Note focus transition
- Index card animates back (scale down, fade)
- Selected note card expands to focused size (centered, large)
- FocusedNoteCard: rendered markdown, scrollable body
- Header: [Index] [Random] [×]
- Background: other cards continue subtle drift, heavily blurred
- Resizable via drag handle

### 2c. Back transitions
- Note → Category index: reverse of 2b
- Category → Overview: reverse of 2a
- All transitions use `layoutId` for shared element morphing where possible

## Phase 3: Polish — Motion, Depth, Parallax

### 3a. Orbital motion
- Cards move along elliptical paths using requestAnimationFrame
- Speed varies slightly per card (feels organic)
- On state change, paths smoothly adjust (spring interpolation to new positions)

### 3b. Mouse parallax
- Track mouse position, apply subtle translate offset to layers
- Anchors: small offset (foreground feel)
- Cards: slightly more offset (mid-ground)
- Background gradient: opposite direction (depth illusion)

### 3c. Depth layers
- z-index + scale + blur to create 3 depth planes:
  - Far: unfocused categories (blur 2-4px, scale 0.95, opacity 0.4)
  - Mid: active category cards (no blur, full opacity)
  - Near: focused note card (slight shadow, elevated)

### 3d. Collision avoidance
- Simple repulsion: if two cards overlap, push apart
- Check on each layout pass, not every frame (performance)

### 3e. Ambient effects
- Optional: subtle floating particles (CSS-only, small dots with drift animation)
- Faint radial glow behind each anchor
- Vignette overlay on the scene edges

## Deployment
- `vite build` → `app/dist/`
- Configure vite base path for GitHub Pages
- The build output fetches markdown files from the same host
- `content.json` + all `.md` files must be in `public/` or served alongside

## What stays from current work
- `content.json` manifest + `generate-manifest.js` script
- `marked.min.js` + `highlight.min.js` (will be npm packages instead)
- `styles/markdown.css` (adapted for React)
- All markdown source files (untouched)
