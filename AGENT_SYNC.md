# Agent Sync

Last updated: 2026-05-15
Current owner: Codex
Purpose: shared working memory for Codex, Antigravity, and any other agent editing this repo.

## Read First

Before coding, read these files in order:

1. `AGENTS.md` for stable project context and coding rules
2. `AGENT_SYNC.md` for current session state
3. The specific source files you plan to edit

## Current Session Summary

The user approved adding a new `Bảo Tàng` / `museum` tab.

Chosen direction: **hybrid 3D gallery** inspired by `homemadegarbage/r3f-gallery-template`.

Implementation status: **not started**. No R3F museum code has been added yet.

Why this direction:

- Faster than a full 3D walking museum
- More creative than a plain 2D gallery
- Fits the existing React Three Fiber project
- Lets the guide/presenter be a reliable 2D overlay instead of a risky 3D character

## External Reference Checked

Repo inspected:

- `https://github.com/homemadegarbage/r3f-gallery-template`

Useful ideas from the repo:

- `Scene.jsx`: Canvas + room + pictures + modal
- `Room.jsx`: floor, ceiling, and wall planes
- `Picture.jsx`: image plane with near/click interaction
- `Player.jsx`: simple keyboard camera movement
- `pictures.json`: artwork metadata structure

Important warning:

- Do not copy dependency versions from the template. It uses newer React/R3F/Vite/Tailwind versions than this project.
- Use the template as a design/code reference only.

## Approved Museum Design

Target first version:

- Add a `museum` tab to the app.
- Render a lightweight 3D gallery room.
- Show several framed artwork planes.
- Let the user select an artwork.
- Display a guide/presenter overlay explaining the selected artwork.
- Keep artwork metadata in a small local data file.

## Ownership / Collaboration

Antigravity owns the museum UI and visual execution:

- Layout composition
- Visual styling
- Presenter/guide look and feel
- Interaction polish
- Responsive behavior

Codex should avoid implementing museum UI unless the user explicitly asks. Codex may help with architecture, R3F integration notes, data shape, or code review.

Likely files to create:

- `src/museum/MuseumPage.jsx`
- `src/museum/MuseumScene.jsx`
- `src/museum/MuseumRoom.jsx`
- `src/museum/MuseumArtwork.jsx`
- `src/museum/MuseumGuide.jsx`
- `src/museum/museumData.js`

Likely files to edit:

- `src/App.jsx`
- `src/game/sections/Navbar.jsx`
- `src/index.css`

## Current Repo Warning

At the time this sync file was written, `src/index.css` already had an uncommitted modification. Do not overwrite or revert it without checking the diff first.

## Verification So Far

No museum implementation has been written yet.

Latest verified build before this planning step:

- `npm run build` passed after earlier cleanup work.

## Next Step

Create the implementation plan for the hybrid 3D museum tab, then implement in small scoped edits.
