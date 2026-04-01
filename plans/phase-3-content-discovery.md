# Phase 3: Content Discovery & Navigation

## Goal
Auto-discover all markdown files and build a navigable content tree so users can browse the entire knowledge base from a sidebar.

## Tasks

### 3.1 Create Content Manifest Generator
A small script (`scripts/generate-manifest.js`) that:
- Walks the directory tree
- Finds all `.md` files (excluding README.md, plans/, .git/)
- Outputs `content.json` with structure:

```json
{
  "categories": [
    {
      "name": "JavaScript",
      "path": "javascript",
      "icon": "javascript",
      "children": [
        {
          "name": "Notes",
          "path": "javascript/Notes",
          "children": [
            { "name": "Variables", "path": "javascript/Notes/Variables.md" },
            { "name": "Datatypes", "path": "javascript/Notes/Datatypes.md" }
          ]
        },
        { "name": "Node.js Backend", "path": "javascript/Node.js_backend.md" }
      ]
    },
    {
      "name": "Java",
      "path": "java",
      "icon": "java",
      "children": [...]
    },
    {
      "name": "System Analysis & Design",
      "path": "system_analysis_and_design",
      "icon": "system-design",
      "children": [...]
    }
  ],
  "totalFiles": 106,
  "generatedAt": "2026-04-01T00:00:00Z"
}
```

This can be run with `node scripts/generate-manifest.js` or even as a simple bash script. Only needs to be re-run when files are added/removed.

### 3.2 Build the Sidebar Component (`scripts/sidebar.js`)
A collapsible tree navigation:
- Loads `content.json` on app init
- Renders a tree with expandable folders
- Highlights the currently active page
- Remembers expanded/collapsed state in localStorage
- Collapsible on mobile (hamburger menu)

Visual design:
```
 JavaScript
  ├─ Notes
  │  ├─ Variables
  │  ├─ Datatypes
  │  ├─ String Methods
  │  └─ ...
  └─ Node.js Backend
 Java
  ├─ Notes
  │  ├─ Class
  │  └─ ...
  └─ Spring Boot
 System Analysis & Design
  ├─ 01 Foundations
  │  ├─ Intro to SAD
  │  └─ ...
  └─ ...
```

### 3.3 Build Category Landing Pages
When navigating to `#/javascript` (a category, not a file):
- Show a card grid of all files in that category
- Group by subfolder
- Show file count per subfolder
- Brief description extracted from first paragraph of each file (optional)

### 3.4 Update Home Page Dynamically
- Pull stats from `content.json` (total files, categories, etc.)
- Auto-generate category cards from the manifest instead of hardcoding

## Acceptance Criteria
- [ ] `content.json` accurately reflects all markdown files
- [ ] Sidebar shows full navigation tree
- [ ] Clicking a sidebar item navigates to the correct page
- [ ] Current page is highlighted in sidebar
- [ ] Category pages show all files in that category
- [ ] Home page stats are dynamic

## Estimated Scope
~200 lines for manifest generator, ~200 lines for sidebar, ~100 lines for category pages.
