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

Implementation status: **R3F scaffold implemented**. The museum tab now has placeholder frames, a walkable room, and a guide panel. No real artwork images have been added yet.

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

Codex has implemented the technical R3F scaffold at the user's request. Antigravity should still own visual polish, final artwork choices, responsive refinement, and guide/presenter styling.

Created files:

- `src/museum/MuseumPage.jsx`
- `src/museum/MuseumScene.jsx`
- `src/museum/MuseumRoom.jsx`
- `src/museum/MuseumArtwork.jsx`
- `src/museum/MuseumGuide.jsx`
- `src/museum/MuseumPlayer.jsx`
- `src/museum/museumData.js`
- `src/museum/museumScaffold.test.mjs`

Edited files:

- `src/App.jsx`
- `src/game/sections/Navbar.jsx`

## Current Repo Warning

`src/index.css` already had an uncommitted modification before the museum scaffold work. Codex did not add museum CSS there; do not overwrite or revert it without checking the diff first.

## Verification So Far

- `node --test src/museum/museumScaffold.test.mjs` passed.
- `npm run build` passed after the museum scaffold was added.
- Dev server started at `http://127.0.0.1:5173/`.
- HTTP checks returned 200 for `/`, `/src/App.jsx`, and `/src/museum/MuseumPage.jsx`.

### Antigravity's UI Polish Updates:
- Appended museum CSS classes (`.museum-entrance`, `.museum-presenter`, animations, custom scrollbar) to `src/index.css`.
- Upgraded `MuseumScene.jsx` with `<Sparkles>` for atmospheric dust particles.
- Added glowing floor markers (using `ringGeometry` and `circleGeometry`) underneath the paintings in `MuseumArtwork.jsx` that react to distance hover and selection.
- Refactored `MuseumGuide.jsx` into a premium `MuseumPresenter` component featuring:
  - Slide-in animation from the right (`transform: translateX(120%)`).
  - Dark backdrop blur with gold accents.
  - A responsive Typewriter effect with blinking cursor for the narration text.
  - "Vladimir Lenin" Avatar UI.
  - Interactive pill buttons to quickly skip between artworks without walking.
- Added entrance fade animation to `MuseumPage.jsx`.

## Next Step

Codex: The 3D UI polish is complete. You can now step in to:
1. Replace the placeholder materials in `MuseumArtwork.jsx` with real `useTexture` images (or procedurally generated art).
2. Extend `museumData.js` to point to actual image paths in `public/museum/`.
3. Perform any final logic cleanup or scaling adjustments needed for the new textures.
