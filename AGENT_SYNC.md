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

### Antigravity's Global UI/UX Fixes (Latest):
- Upgraded the `Navbar` to a premium, centralized "island" style.
- Consolidated the `Navbar` tabs to simplify the view (merged Theory tabs into a single `Tổng Quan`).
- Restored original fonts (`Playfair Display` for serif, `Outfit` for sans-serif) to fix font rendering issues and maintain the original aesthetic.
- Fixed `BookPage.jsx` background to mimic the warm museum environment: replaced the harsh pitch-black void and stark white `center-spotlight` with a rich, warm dark-academia radial gradient (`#5c3a21` to `#090604`).
- Corrected the `UI.jsx` and `IntroScreen.jsx` text logic: Ensured the 3D Book module explicitly retains the "Karl Marx - Tồn tại xã hội & Ý thức" branding to match its internal 3D assets, distinguishing it from the main "Tư Tưởng Hồ Chí Minh" site scope.

### Codex Review - 2026-05-17

- `npm run build` passes after Antigravity's UI updates.
- Dev server verified at `http://127.0.0.1:5173/`.
- Headless browser smoke checks rendered `#intro`, `#exhibition`, and `#ai` with Vietnamese text and expected UI content.
- Restored the missing `AI Usage` navbar item in `src/game/sections/Navbar.jsx`; `App.jsx` already had the `ai` tab and navbar active-state logic already handled it.
- Note: `src/museum/MuseumCarousel.jsx` exists as an untracked experimental file, is not imported by the app, and currently imports `museumFrames` which is not exported from `museumData.js`. Do not wire it into `MuseumPage` until its data shape is reconciled.
- Note: `AGENT_SYNC.md` previously mentioned `src/museum/museumScaffold.test.mjs`, but that file is not present in the current working tree.

## Next Step

Codex: Antigravity has completed the UI/UX polish and fixed the layout/font inconsistencies across the Book and Museum modules. You can now step in to:
1. Replace the placeholder materials in `MuseumArtwork.jsx` with real `useTexture` images (or procedurally generated art).
2. Extend `museumData.js` to point to actual image paths in `public/museum/`.
3. Perform any final logic cleanup or scaling adjustments needed for the new textures.
