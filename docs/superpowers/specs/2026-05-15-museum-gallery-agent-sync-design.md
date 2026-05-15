# Museum Gallery + Agent Sync Design

Date: 2026-05-15
Status: Approved for planning
Audience: Codex, Antigravity, and any agent continuing this project

## Context

The project is a Vite + React 18 + React Three Fiber website for an MLN111 Marxist Philosophy presentation. Existing main tabs are `book`, `theory`, and `ai`. `AGENTS.md` already lists a planned `museum` tab, but no implementation exists yet.

The user approved adding a new **Bao Tang / Museum** tab. The goal is a creative gallery where visitors see artworks and receive guided explanations from a presenter/guide.

## Decision

Use a **hybrid 3D gallery** approach inspired by `homemadegarbage/r3f-gallery-template`.

Do not copy the template dependencies wholesale. The template uses React 19, R3F v9, Drei v10, Vite 7, and Tailwind 4, while this project uses React 18, R3F v8, Drei v9, Vite 4, and Tailwind 3.

Reuse the template conceptually:

- Walkable/simple 3D room
- Artwork planes mounted on walls
- Near/click interaction for each picture
- Detail panel for selected artwork

Adapt it to this project:

- Create `src/museum/`
- Add `MuseumPage.jsx` as the tab entry
- Add lightweight R3F components such as `MuseumScene`, `MuseumRoom`, and `MuseumArtwork`
- Store artwork metadata in a local data file, likely `src/museum/museumData.js`
- Use a 2D guide/presenter overlay for narration instead of a fully 3D guide character

## Recommended UX

The first version should prioritize speed and reliability:

- User opens the `Bảo Tàng` tab from the global navbar.
- A 3D gallery room appears with a few framed artworks.
- User can move or select artworks.
- When an artwork is selected, a guide panel appears with:
  - Artwork title
  - Short explanation
  - Connection to Marxist Philosophy / social existence / social consciousness
  - Optional Vietnam/current-life relation
- The guide can visually reuse the tone of `LeninPresenter`, but should be scoped to `src/museum`.

This gives the site a creative 3D experience without the risk of building a full first-person museum simulator under time pressure.

## Integration Points

Expected app changes when implementation starts:

- `src/App.jsx`
  - Add `{ id: "museum", label: "Bảo Tàng" }` to `TABS`
  - Import and render `<MuseumPage />`

- `src/game/sections/Navbar.jsx`
  - Add a `#museum` nav link
  - Route `museum` like `book` and `ai`

- `src/museum/`
  - New museum module lives here

- `public/museum/` or `public/images/`
  - Store artwork images here

## Agent Collaboration Rule

This project is being edited by multiple agents, especially Codex and Antigravity. Before coding, each agent should read:

1. `AGENTS.md` for stable project architecture and rules
2. `AGENT_SYNC.md` for current session status, decisions, changed files, and warnings

Agents should update `AGENT_SYNC.md` after meaningful work so the next agent knows what happened without needing access to another chat session.

## Current Handoff

Codex inspected `homemadegarbage/r3f-gallery-template` and found it suitable as a reference, not as a direct dependency upgrade.

Codex has not implemented the museum tab yet. The approved next step is to create an implementation plan for the hybrid 3D gallery, then implement it in small scoped files.
