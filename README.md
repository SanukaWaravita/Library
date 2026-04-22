# Library

A personal knowledge base of study notes covering Java, JavaScript, and System Analysis & Design.

## Navigation

Start at **[station.md](station.md)** to browse all notes.

| Subject | Station | Notes |
|---------|---------|-------|
| Java (Core + OOP) | [java/station.md](java/station.md) | 61 notes |
| JavaScript | [javascript/station.md](javascript/station.md) | 18 notes |
| System Analysis & Design | [system_analysis_and_design/station.md](system_analysis_and_design/station.md) | 60+ notes |

Each note has a **"Back to Station"** link at the top for quick navigation back to its subject hub.

## Project Structure

```
java/                          Java notes (core + OOP + Spring Boot)
javascript/                    JavaScript notes + Node.js
system_analysis_and_design/    SAD coursework (9 modules)
website/                       React app for interactive browsing
station.md                     Main navigation hub
```

## Web App

The `website/` folder contains a React + Vite + TypeScript app for browsing notes interactively.

```bash
cd website
npm install
npm run dev
```

The app automatically syncs notes from the source folders during build.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds and deploys the web app to GitHub Pages. See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
