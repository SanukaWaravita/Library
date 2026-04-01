# Phase 4: Responsive UI Polish

## Goal
Make the UI feel great on every device — phone, tablet, and desktop — with smooth interactions and polished visual design.

## Tasks

### 4.1 Three-Panel Layout (Desktop)
```
┌──────────────────────────────────────────────┐
│  Header: Logo  |  Search Bar  |  Dark Mode   │
├──────────┬───────────────────┬───────────────┤
│ Sidebar  │    Main Content   │  Table of     │
│ (nav     │    (rendered md)  │  Contents     │
│  tree)   │                   │  (from h2/h3) │
│ 250px    │    flex-grow      │  200px        │
├──────────┴───────────────────┴───────────────┤
│  Footer                                      │
└──────────────────────────────────────────────┘
```

### 4.2 Tablet Layout (768px - 1024px)
- Sidebar becomes a slide-out drawer (hamburger toggle)
- ToC collapses into a dropdown at top of content
- Content takes full width

### 4.3 Mobile Layout (< 768px)
- Bottom navigation bar for main categories
- Hamburger menu for full sidebar
- ToC as a sticky floating button → opens overlay
- Touch-friendly tap targets (min 44px)
- Swipe gestures: left/right to navigate prev/next in a folder

### 4.4 Breadcrumb Navigation
Show the user where they are:
```
Home > JavaScript > Notes > Variables
```
- Clickable segments
- Truncated on mobile (show only last 2 segments)

### 4.5 Smooth Transitions
- Page transitions: fade-in content when switching pages
- Sidebar: slide animation on mobile
- Scroll: smooth scrolling for ToC anchor links
- Loading: skeleton screens instead of spinners

### 4.6 Typography & Reading Experience
- Optimal line length (60-80 characters) for content area
- Comfortable line height (1.7 for body text)
- Proper heading spacing
- Print-friendly styles (`@media print`)

## Acceptance Criteria
- [ ] Desktop: 3-panel layout with sidebar + ToC
- [ ] Tablet: Slide-out sidebar, collapsible ToC
- [ ] Mobile: Bottom nav, hamburger menu, readable content
- [ ] Breadcrumbs show current location
- [ ] Page transitions feel smooth
- [ ] No horizontal scroll on any device
- [ ] Text is comfortable to read on all screen sizes

## Estimated Scope
~300 lines of CSS (responsive.css), ~100 lines of JS for interactions.
