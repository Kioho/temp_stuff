# Project Plan

This document tracks planned improvements, feature ideas, and launch-readiness
work for The Crazy Candy Store website. Keep entries small enough to finish in a
focused change, and update statuses as work moves forward.

## Planning Workflow

1. Add new ideas to the backlog with a short outcome-focused description.
2. Move items into Current Priorities when they are ready to be worked on.
3. Define acceptance criteria before implementation starts.
4. Run the relevant checks before marking an item Done.
5. Record important decisions in the Decision Log so future changes have context.

## Status Values

- `Idea` - Captured, but not shaped enough for implementation.
- `Planned` - Scoped and ready to implement.
- `In Progress` - Actively being worked on.
- `Blocked` - Waiting on a decision, asset, dependency, or external input.
- `Done` - Implemented, checked, and accepted.

## Current Priorities

| Priority | Item | Status | Owner | Target | Notes |
| --- | --- | --- | --- | --- | --- |
| High | Fix mobile overflow and clipping | Planned | TBD | Pre-launch | Review fixed-width content and `overflow-x:hidden` usage across pages. |
| High | Improve mobile menu accessibility | Planned | TBD | Pre-launch | Use accessible native controls and keep ARIA state in sync. |
| Medium | Confirm event time wording | Blocked | TBD | Pre-launch | Confirm whether `Kl 11 EM` should mean 11 PM or a different time. |
| Medium | Review root `files.zip` exposure | Planned | TBD | Pre-launch | Decide whether this file should be removed or excluded from deployment. |

## Backlog

| Priority | Item | Status | Owner | Notes |
| --- | --- | --- | --- | --- |
| High | Fix mobile overflow and clipping | Planned | TBD | Check all five HTML pages for content that can exceed the viewport. |
| High | Improve mobile menu accessibility | Planned | TBD | Ensure keyboard access, focus behavior, labels, and expanded state are correct. |
| Medium | Confirm event time wording | Blocked | TBD | Swedish `Kl 11 EM` reads as 11 PM; confirm intended event time before editing copy. |
| Medium | Review custom cursor behavior | Idea | TBD | Disable or adapt custom cursor behavior on touch devices and before first mouse movement. |
| Medium | Optimize oversized image assets | Idea | TBD | Resize or compress large logo and JPEG assets used at smaller rendered dimensions. |
| Medium | Review root `files.zip` exposure | Planned | TBD | Avoid deploying the repository root if this file is not meant to be public. |
| Low | Extract shared CSS and JavaScript | Idea | TBD | Current pages intentionally duplicate inline CSS and JS; handle as a focused refactor. |

## Feature Proposal Template

Copy this section when shaping a new feature or improvement.

### Title

- Status: `Idea`
- Priority: Low / Medium / High
- Owner: TBD
- Target: TBD

### Problem

What user or maintenance problem should this solve?

### Proposed Change

What should change, and which pages or assets are affected?

### Acceptance Criteria

- [ ] The intended user-visible behavior is implemented.
- [ ] Swedish copy is consistent across affected pages.
- [ ] Navigation changes are applied to every page when relevant.
- [ ] `npm run check` passes for HTML changes.
- [ ] `npm run build` passes for code or content changes.

### Notes

Add links, screenshots, design references, implementation constraints, or open
questions here.

## Decision Log

| Date | Decision | Context |
| --- | --- | --- |
| TBD | Keep the site as plain HTML/CSS/JavaScript unless a framework or CMS is explicitly requested. | Matches the current project structure and build setup. |
| TBD | Keep CSS and JavaScript inline until shared asset extraction is planned as a dedicated refactor. | Avoids mixing feature work with broad mechanical changes. |

## Completion Checklist

Use this checklist before marking planned work as Done.

- [ ] The change matches the existing visual direction unless a redesign was requested.
- [ ] Swedish copy stays consistent across all affected pages.
- [ ] Navigation and shared page behavior are updated consistently across all five pages when relevant.
- [ ] Images are reasonably sized and include appropriate loading attributes when new media is added.
- [ ] Generated output such as `dist/` is not included in source changes.
- [ ] `npm run check` has passed when HTML files changed.
- [ ] `npm run build` has passed when code, content, or build configuration changed.
