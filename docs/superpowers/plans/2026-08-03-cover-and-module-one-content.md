# Cover And Module One Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the first presentation pass with a simpler cover, tutor introduction, course content slide, and clearer Module 1 curriculum scope.

**Architecture:** Keep slide content in `src/presentation-data.js`, curriculum detail in `docs/module-scope.md`, and visual rendering in `src/app.js` plus `styles.css`. Add tests to lock the new cover title, author line, five-module content slide, and Module 1 slide sequence.

**Tech Stack:** Plain HTML, CSS, JavaScript modules, Markdown, Node.js built-in test runner.

## Global Constraints

- Cover title must be `UI/UX Design with Figma`.
- Cover must not use the previous subtitle sentence.
- Cover should include a small author line at the bottom.
- Cover visual direction is product design journey: idea note, wireframe, UI screen, prototype connection.
- First content slides should be: cover, tutor introduction, course content, then Module 1 content.
- Module 1 covers: what is this course about, goals, and the full design journey.
- Keep content simple, fun, and clear in a Material Design content style.

---

### Task 1: Add Tests For First Pass Content

**Files:**
- Modify: `tests/presentation.test.mjs`

**Interfaces:**
- Consumes: `course` and `sessions` from `src/presentation-data.js`.
- Produces: tests that verify the cover and first module structure.

- [ ] **Step 1: Add content expectations**

Add a test that expects:

```js
assert.equal(course.title, "UI/UX Design with Figma");
assert.equal(sessions[0].slides[0].title, "UI/UX Design with Figma");
assert.equal(sessions[0].slides[0].visual, "product-journey");
assert.ok(sessions[0].slides[0].footer.includes("Prepared by"));
assert.deepEqual(
  sessions[0].slides.slice(0, 6).map((slide) => slide.title),
  [
    "UI/UX Design with Figma",
    "Tutor Introduction",
    "Course Content",
    "What Is This Course About?",
    "Course Goals",
    "The Full Design Journey"
  ]
);
```

- [ ] **Step 2: Run tests**

Run: `npm test`

Expected: FAIL because the current course title and Module 1 slide sequence still use the old content.

---

### Task 2: Update Slide Data

**Files:**
- Modify: `src/presentation-data.js`

**Interfaces:**
- Produces: slide objects that may include optional `footer`.
- Produces: Module 1 opening slides matching Task 1.

- [ ] **Step 1: Extend the `slide` helper**

Change the helper to accept optional extras:

```js
const slide = (kind, title, eyebrow, points, visual = "cards", extras = {}) => ({
  kind,
  title,
  eyebrow,
  points,
  visual,
  ...extras
});
```

- [ ] **Step 2: Update course metadata**

Set `course.title` to `UI/UX Design with Figma`.

- [ ] **Step 3: Update Module 1 slides**

Use these first slides:

```js
slide("cover", "UI/UX Design with Figma", "Course cover", [], "product-journey", {
  footer: "Huyen Vu"
})
slide("theory", "Tutor Introduction", "Meet your guide", [
  "Who I am and how I work with design.",
  "What I will help you practice.",
  "How we learn: observe, ask, try, improve."
])
slide("theory", "Course Content", "5 modules", [
  "1. Introduction",
  "2. Design Process",
  "3. What Is UI/UX",
  "4. Figma Basics",
  "5. Product Design System Loop"
])
slide("theory", "What Is This Course About?", "Simple answer", [
  "Learning how digital product ideas become screens.",
  "Using Figma to make ideas visible.",
  "Practicing clear, useful, reusable design decisions."
])
slide("theory", "Course Goals", "What you will practice", [
  "Read screens like a designer.",
  "Explain basic UI and UX decisions.",
  "Create simple wireframes and prototypes.",
  "Build confidence using Figma."
])
slide("theory", "The Full Design Journey", "From idea to product", [
  "Idea and research.",
  "Sketch and wireframe.",
  "UI design and prototype.",
  "Feedback, improve, and ship."
])
```

---

### Task 3: Render Cover Footer And Illustration

**Files:**
- Modify: `src/app.js`
- Modify: `styles.css`

**Interfaces:**
- Consumes: optional `slide.footer`.
- Consumes: `visual === "product-journey"`.
- Produces: visible footer text and CSS-built cover illustration.

- [ ] **Step 1: Render optional footer**

In `renderSlide`, render `slide.footer` after points when present:

```js
${slide.footer ? `<p class="slide-footer">${slide.footer}</p>` : ""}
```

- [ ] **Step 2: Add product journey visual**

Add a case in `renderVisual` for `product-journey` that returns markup for four visual stops:

```html
<div class="product-journey-visual" aria-hidden="true">
  ...
</div>
```

- [ ] **Step 3: Add CSS**

Style the visual with compact panels representing idea, wireframe, UI, and prototype connection.

---

### Task 4: Update Scope Document

**Files:**
- Modify: `docs/module-scope.md`

**Interfaces:**
- Produces: course curriculum documentation for the new first pass.

- [ ] **Step 1: Update title and course principles**

Rename the document heading to `UI/UX Design with Figma Module Scope` and mention that the writing should be simple, fun, clear, and slide-ready.

- [ ] **Step 2: Expand Module 1**

Update Module 1 with curriculum-style content for:
- what the course is about
- goals
- full design journey
- tutor introduction
- course content slide

---

### Task 5: Verify

**Files:**
- Verify: all changed files.

**Interfaces:**
- Produces: passing tests and checked source text.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: PASS, 0 failures.

- [ ] **Step 2: Search for old cover subtitle**

Run:

```powershell
rg -n "Old beginner fundamentals title|Rejected long cover subtitle|Old welcome sentence" src docs tests index.html styles.css
```

Expected: no matches for old cover title or rejected subtitle.

---

## Self-Review

- Spec coverage: Covers the approved cover direction, author line, first content slides, Module 1 content, and product journey illustration.
- Red-flag scan: No draft marker text.
- Type consistency: Uses the existing slide object shape with one optional `footer` field.
