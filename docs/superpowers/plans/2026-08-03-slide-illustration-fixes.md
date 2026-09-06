# Slide Illustration Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the current slide visuals by replacing the tutor illustration with a cute 3D-style girl avatar, removing the Course Content illustration, changing the Figma Basics cover illustration to a Figma logo visual, and removing the rejected PDF export mode/artifact.

**Architecture:** Keep the static HTML/CSS/JS deck. Update slide visual metadata in `src/presentation-data.js`, rendering support in `src/app.js`, and styling in `styles.css`. Remove print-all export mode and delete `UI-UX-Design-with-Figma-v1.pdf`.

**Tech Stack:** Plain HTML, CSS, browser JavaScript modules, Node.js built-in test runner.

## Global Constraints

- Do not change the cover slide.
- Tutor Introduction must use a cute little 3D-style girl avatar.
- Course Content must remove its illustration and keep content only.
- Figma Basics module cover must use a Figma logo illustration.
- Remove the PDF export feature and version 1 PDF file.
- Keep the existing solid dark/purple Geist theme.

---

### Task 1: Update Tests

**Files:**
- Modify: `tests/presentation.test.mjs`

**Interfaces:**
- Consumes: `sessions` from `src/presentation-data.js`.
- Produces: tests for visual metadata and removal of print export mode.

- [ ] **Step 1: Add expected visual assertions**

Assert:
- Tutor Introduction visual is `girl-avatar`.
- Course Content visual is `none` and layout is `content-only`.
- Figma Basics cover visual is `figma-logo`.
- `src/app.js` no longer contains `print-deck` or `renderPrintDeck`.

- [ ] **Step 2: Run tests**

Run: `npm test`

Expected: FAIL until the implementation changes are made.

---

### Task 2: Update Slide Data

**Files:**
- Modify: `src/presentation-data.js`

**Interfaces:**
- Produces: corrected visual metadata.

- [ ] **Step 1: Update Module 1 Tutor Introduction**

Use:

```js
slide(..., "girl-avatar")
```

- [ ] **Step 2: Update Module 1 Course Content**

Use:

```js
slide(..., "none", { layout: "content-only" })
```

- [ ] **Step 3: Update Module 4 Figma Basics cover**

Use:

```js
slide("cover", "Figma Basics", "Module 04", [...], "figma-logo")
```

---

### Task 3: Update Rendering And CSS

**Files:**
- Modify: `src/app.js`
- Modify: `styles.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: visual keys `girl-avatar`, `none`, `figma-logo`.
- Consumes: `layout-content-only`.
- Removes: `?print=all` PDF export behavior.

- [ ] **Step 1: Remove print mode code**

Remove `renderPrintDeck`, `print-deck`, and `print-slide-number` rendering.

- [ ] **Step 2: Add visual templates**

Add:
- `girl-avatar`: CSS-built cute 3D-style avatar.
- `figma-logo`: Figma logo-inspired CSS shapes.
- `none`: empty string.

- [ ] **Step 3: Add CSS**

Style:
- `.girl-avatar-visual`
- `.figma-logo-visual`
- `.layout-content-only`

Remove print-specific CSS.

---

### Task 4: Verify

**Files:**
- Verify all changed files.

**Interfaces:**
- Produces: passing tests and cleaned PDF artifact.

- [ ] **Step 1: Delete PDF artifact**

Delete `UI-UX-Design-with-Figma-v1.pdf`.

- [ ] **Step 2: Run tests**

Run: `npm test`

Expected: PASS, 0 failures.

- [ ] **Step 3: Search for print/PDF leftovers**

Run:

```powershell
rg -n "print-deck|renderPrintDeck|print=all|UI-UX-Design-with-Figma-v1.pdf" src index.html styles.css tests
```

Expected: no matches.

---

## Self-Review

- Spec coverage: Covers all three slide visual fixes and removal of the rejected PDF export.
- Red-flag scan: No draft marker text.
- Type consistency: Uses existing `slide(..., visual, extras)` signature.
