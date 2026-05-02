# Agent Workflow

This repository is a static website. Treat it as a plain HTML/CSS/JavaScript
project unless the user explicitly asks for a framework or CMS.

## Stack

- Source pages live at the repository root as `.html` files.
- CSS and JavaScript are inline in each page.
- Vite provides local dev, preview, and multi-page production builds.
- HTMLHint is the default lint/check tool.
- Prettier is available, but the existing pages are not formatted with it yet.

## Standard Commands

Run these from the repository root:

```sh
npm run dev
npm run check
npm run build
npm run preview
```

Use `npm run check` and `npm run build` before finishing code or content changes.
Use `npm run format:check` only when formatting is relevant. Do not run
`npm run format` as an incidental cleanup because it rewrites all source pages.

## Documentation Updates

- After each implementation, update relevant project documents before finishing.
- Use `PROJECT_PLAN.md` for completed decisions, launch-readiness notes, and
  backlog/status updates.
- Update `README.md` when setup, commands, structure, or user-facing project
  behavior changes.
- Update `AGENTS.md` when workflow, coding guidance, or repository conventions
  change.

## Branch Workflow

- Use `Development` as the working and integration branch.
- Create task branches from `Development`.
- Open pull requests against `Development`.
- Merge `Development` into `main` only when the live/default branch should be
  updated.

## Editing Guidance

- Preserve the existing visual direction unless the user asks for a redesign.
- Keep Swedish copy consistent across all five pages.
- Keep the shared background treatment synchronized across all five pages:
  `images/background3.jpeg` on `body::before`, `filter:brightness(.5)`, opaque
  top navigation, and semi-transparent content surfaces that do not reduce text
  opacity.
- Keep footers consistent across all five pages: logo plus the store/location
  copyright line only, with no footer navigation menu.
- Confirm the intended event time before changing `Kl 11 EM`; it currently reads
  as 11 PM in Swedish usage.
- If updating navigation, apply the change to every page.
- If updating shared styles or scripts, search all HTML files first and keep the
  duplicated blocks in sync.
- Preserve current page-specific layout decisions unless asked otherwise:
  `event.html` shows `1.jpeg` at normal brightness, `hitta-oss.html` shows
  `Öppettider` before feature cards and does not include `6.jpeg`, and
  `om-oss.html` omits the former `Kom in & häng med oss` intro panel.
- Prefer accessible native controls for interactive elements, especially the
  mobile menu trigger.
- Avoid adding large unoptimized media. If new images are needed, add reasonable
  dimensions, compression, and loading attributes.
- Keep generated output out of source edits. `dist/` and `node_modules/` are
  ignored and should not be committed.

## Review Priorities

Before launch, prioritize these known issues:

- Mobile overflow/clipping caused by `overflow-x:hidden` and fixed-width content.
- Mobile burger menu semantics, keyboard access, and ARIA state.
- Custom cursor behavior on touch devices and before the first mouse movement.
- Oversized logo and JPEG assets used at much smaller rendered sizes.
- Root `files.zip` exposure if the site is deployed directly from this folder.
