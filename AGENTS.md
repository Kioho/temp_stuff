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

## Editing Guidance

- Preserve the existing visual direction unless the user asks for a redesign.
- Keep Swedish copy consistent across all five pages.
- Confirm the intended event time before changing `Kl 11 EM`; it currently reads
  as 11 PM in Swedish usage.
- If updating navigation, apply the change to every page.
- If updating shared styles or scripts, search all HTML files first and keep the
  duplicated blocks in sync.
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
