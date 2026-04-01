Build a static notes-library web app inspired by the spatial feel of Napkin, but do not copy its branding or exact UI. The app is for my personal study notes, grouped into 4 high-level categories. Right now I have categories like SAD, JavaScript, Java, and one more placeholder category for future notes.

## Core concept

This should feel like an interactive spatial note universe, not a traditional dashboard.

When the site first opens, the user sees:

* a dark immersive background
* 4 large glowing anchor spheres/stars/suns distributed across the scene
* each anchor represents one major category
* note cards orbit or cluster around their category anchor
* the number of visible cards around each anchor should reflect the number of notes in that category
* the cards should be arranged in a way that feels organized but slightly random, like a living system

The overall effect should feel cinematic, ambient, and intelligent — not chaotic, not game-like, and not like a kanban board.

## Interaction model

### State 1: Overview mode

* Show all category anchors in the background
* Show note cards orbiting or drifting around each category
* Cards should slowly move in subtle motion loops
* Motion should be smooth and continuous, with depth and parallax feeling
* The background layout should feel alive even when idle

### State 2: Category panel

* There should be a floating action button in the bottom-right corner
* Clicking it opens a popup/panel showing the 4 major categories
* This panel should feel elegant and minimal, not like a standard sidebar

### State 3: Category selected

* Clicking a category should bring forward a special “index card” for that category
* The index card should list all note titles inside that category
* While this happens, the rest of the scene should reorganize smoothly in the background
* Non-focused categories should drift back slightly, blur slightly, or reduce emphasis
* The selected category should feel more centered/active

### State 4: Note focused

* Clicking a note title inside the category index card should animate the index card back into the swarm/background
* The selected note card should come forward into focus
* This focused card should be highly readable and become the main visual object
* The background cards and category anchors should continue moving subtly in an organized, responsive way
* The whole scene should feel like the system is rebalancing around the selected note

## Motion behavior

This is critical:
I do not want random floating cards only. I want a controlled generative layout.

The background cards and category anchors should:

* re-arrange themselves when a category is selected
* re-arrange again when a note is focused
* maintain spatial harmony
* avoid overlap collisions
* preserve a feeling of “organized randomness”
* use smooth interpolation/tweening, not abrupt jumps

Possible motion ideas:

* orbit paths
* elliptical drift paths
* spring transitions
* slow repositioning based on current active state
* soft parallax based on mouse movement
* background cards moving on invisible circular or arc-based tracks

## Visual style

* dark theme
* elegant glowing spheres / stars / suns for category anchors
* note cards are rectangular and minimal
* cards should have soft shadows, subtle glow, and layered depth
* background should feel atmospheric, not empty
* use blur, scale, opacity, and z-depth to separate foreground and background
* visual aesthetic should feel premium, futuristic, thoughtful, and study-oriented

## Technical requirements

* build this as a static site that can be deployed to GitHub Pages
* use React + Vite
* use Framer Motion for transitions and animated state changes
* store notes in local JSON files for now
* no backend required
* no Firebase required
* no login/auth needed
* architecture should support adding more categories and more notes later

## Data model

Use a simple notes data structure like:

* id
* category
* title
* summary
* tags
* content

## Components to build

* Scene / Universe container
* CategoryAnchor
* OrbitingNoteCard
* FocusedNoteCard
* CategoryIndexCard
* FloatingActionButton
* CategoryPanel
* BackgroundParticles / OrbitTrails

## Important design goals

* prioritize spatial interaction and motion quality over conventional UI
* make the system feel like a living note constellation
* transitions between overview, category selection, and note focus must feel intentional
* do not make this look like a dashboard, kanban board, or plain notes app
* the design should be elegant enough to act as a personal portfolio-like knowledge space

## Deliverables

Please generate:

1. the project structure
2. React components
3. a sample local notes dataset
4. animation/state logic
5. styling
6. instructions for deploying the built app to GitHub Pages

Also explain which parts are placeholders and which parts can be tuned later for better motion/visual polish.

----

# Important note about Napkin-like feel

Tell Claude this too, conceptually:

- What you like is not just:

    - dark background
    - floating cards
    - glowing circles

- What you like is:

- spatial hierarchy
- calm motion
- focus transitions
- cards behaving like members of a system
- foreground/background rebalancing

---

# Practical development advice

- Start in phases.

## Phase 1

- Build:

    - static scene
    - 4 category anchors
    - cards around each anchor
    - bottom-right launcher
    - category panel
    - Phase 2

- Add:

    - category index card
    - note focus card
    - smooth state transitions

## Phase 3

- Add polish:

    - background motion
    - orbital paths
    - blur/depth
    - subtle parallax
    - collision avoidance
    - improved typography and spacing