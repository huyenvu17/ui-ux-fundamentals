# Editorial Slide Visuals Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign non-cover slide illustrations and layouts so the presentation feels creative, elegant, simple, and varied while preserving the existing dark Geist/purple theme.

**Architecture:** Add optional `layout` metadata to slide objects in `src/presentation-data.js`. Update `src/app.js` to render layout-specific slide classes and richer CSS-built teaching visuals. Update `styles.css` to support editorial layout variants and visual components without changing the static HTML shell.

**Tech Stack:** Plain HTML, CSS, browser JavaScript modules, Node.js built-in test runner.

## Global Constraints

- Do not change the cover slide illustration.
- Do not add Demo Brief slides back.
- Keep the existing dark, purple, Geist, Material-symbols theme.
- Avoid making every slide a left text / right illustration split.
- Keep visuals CSS/HTML-native and lightweight.
- Keep mobile responsive and prevent text overlap.

---

### Task 1: Add Tests For Layout And Visual Variety

**Files:**
- Modify: `tests/presentation.test.mjs`

**Interfaces:**
- Consumes: `sessions` from `src/presentation-data.js`.
- Produces: assertions for slide `layout` metadata and varied non-cover visuals.

- [ ] **Step 1: Add layout variety test**

Add a test that flattens all non-cover slides and asserts:

```js
const nonCoverSlides = sessions.flatMap((session) => session.slides).filter((slide) => slide.kind !== "cover");
const layouts = new Set(nonCoverSlides.map((slide) => slide.layout));
const visuals = new Set(nonCoverSlides.map((slide) => slide.visual));

assert.ok(layouts.size >= 5);
assert.ok(visuals.size >= 12);
assert.ok(!layouts.has(undefined));
assert.ok(nonCoverSlides.every((slide) => slide.kind !== "demo-brief"));
```

- [ ] **Step 2: Run tests**

Run: `npm test`

Expected: FAIL because most slides currently have no `layout` metadata.

---

### Task 2: Add Layout Metadata And Better Visual Keys

**Files:**
- Modify: `src/presentation-data.js`

**Interfaces:**
- Produces: slide objects with optional `layout`.
- Produces: richer visual keys such as `profile-card`, `module-map`, `idea-board`, `goal-grid`, `journey-rail`, `risk-map`, `problem-flow`, `fidelity-lab`, `ux-map`, `ui-screen`, `history-stack`, `element-system`, `figma-canvas`, `setup-panel`, `layer-stack`, `tool-dock`, `workflow-loop`, `mood-wall`, `feedback-note`, and `practice-system`.

- [ ] **Step 1: Keep the `slide` helper extras support**

Use the existing `extras` argument and pass `{ layout: "..." }` per non-cover slide.

- [ ] **Step 2: Assign layout rhythm**

Use a mix of:
- `poster`
- `center`
- `wide`
- `artifact`
- `comparison`
- `canvas`
- `rail`

- [ ] **Step 3: Keep covers unchanged**

Do not change the cover slide visual for Module 1.

---

### Task 3: Render Layout Classes And Visuals

**Files:**
- Modify: `src/app.js`

**Interfaces:**
- Consumes: `slide.layout`.
- Produces: `class="slide slide-theory layout-poster"` style classes.
- Produces: visual templates for all new visual keys.

- [ ] **Step 1: Add layout class**

Change:

```js
elements.slideRoot.className = `slide slide-${slide.kind}`;
```

to:

```js
elements.slideRoot.className = `slide slide-${slide.kind} layout-${slide.layout ?? "split"}`;
```

- [ ] **Step 2: Add visual templates**

Add CSS-native visual templates for each new visual key, using existing class naming patterns.

---

### Task 4: Add Editorial Layout CSS

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: `.layout-poster`, `.layout-center`, `.layout-wide`, `.layout-artifact`, `.layout-comparison`, `.layout-canvas`, `.layout-rail`.
- Produces: varied slide arrangements and improved visual styling.

- [ ] **Step 1: Add layout variants**

Implement:
- `layout-center`: centered copy over compact visual.
- `layout-poster`: large type plus visual floated/overlapped.
- `layout-wide`: copy full-width with visual rail below.
- `layout-artifact`: visual dominant left, copy right.
- `layout-comparison`: balanced two-side analysis.
- `layout-canvas`: Figma-like workspace visual dominant.
- `layout-rail`: full-width process rail.

- [ ] **Step 2: Add visual CSS**

Add reusable CSS for curriculum cards, product artifacts, UI mini screens, flow rails, and Figma panels.

- [ ] **Step 3: Mobile behavior**

At `max-width: 900px`, collapse all layout variants to one column and keep visuals compact.

---

### Task 5: Verify

**Files:**
- Verify: `src/presentation-data.js`
- Verify: `src/app.js`
- Verify: `styles.css`
- Verify: screenshots.

**Interfaces:**
- Produces: passing tests and desktop/mobile visual checks.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: PASS, 0 failures.

- [ ] **Step 2: Capture screenshots**

Use local server `http://127.0.0.1:4173/` with cache-busting query and capture desktop/mobile screenshots.

- [ ] **Step 3: Inspect screenshots**

Expected:
- Cover remains unchanged.
- Non-cover slides do not all use the same left/right composition.
- Text is readable.
- Mobile has no incoherent overlap.

---

## Self-Review

- Spec coverage: Covers varied non-cover layouts, improved illustrations, preserved cover, no Demo Brief regression, and responsive checks.
- Red-flag scan: No draft marker text.
- Type consistency: Uses existing slide object extras and renderer class naming.
