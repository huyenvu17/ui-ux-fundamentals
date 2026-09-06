# Five Module Deck Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the UI/UX beginner presentation into a cleaner 5-module HTML deck with less cognitive load per slide.

**Architecture:** Keep the current standalone HTML/CSS/JS deck. The data layer remains in `src/presentation-data.js`, navigation state remains in `src/deck-state.js`, and rendering remains in `src/app.js`; only the course model, menu labels, and tests change.

**Tech Stack:** Plain HTML, CSS, browser JavaScript modules, Node.js built-in test runner.

## Global Constraints

- Course structure must be 5 modules: Introduction, Design Process, What Is UI/UX, Figma Basics, Product Design System Loop.
- Each module is designed for a 1-hour session rhythm: 15 min theory, 15 min questions, 30 min demo.
- Slides should be simpler than the current version: 4-6 theory slides plus one demo brief per module.
- Keep English beginner-friendly copy.
- Keep Google Material-inspired styling and current keyboard/click navigation.
- Do not add a build system or framework.

---

### Task 1: Update Tests For 5 Modules

**Files:**
- Modify: `tests/presentation.test.mjs`

**Interfaces:**
- Consumes: `course`, `sessions`, `createDeckState(sessions)`.
- Produces: test expectations for a 5-module deck.

- [ ] **Step 1: Write the failing test**

Replace the first two tests with:

```js
test("course is structured as five one-hour beginner modules", () => {
  assert.equal(course.title, "UI/UX Design with Figma");
  assert.equal(course.totalModules, 5);
  assert.equal(course.sessionDurationMinutes, 60);
  assert.deepEqual(course.rhythmMinutes, {
    theory: 15,
    questions: 15,
    demo: 30
  });

  assert.equal(sessions.length, 5);
  assert.deepEqual(
    sessions.map((session) => session.number),
    [1, 2, 3, 4, 5]
  );
});

test("each module is concise and ends with a demo brief", () => {
  for (const session of sessions) {
    const theorySlides = session.slides.filter((slide) => slide.kind !== "demo-brief");

    assert.ok(session.title.length > 0, `module ${session.number} needs a title`);
    assert.ok(session.demo.task.length > 0, `module ${session.number} needs a demo task`);
    assert.ok(session.demo.output.length > 0, `module ${session.number} needs a demo output`);
    assert.ok(
      theorySlides.length >= 4 && theorySlides.length <= 6,
      `module ${session.number} should have 4-6 theory slides`
    );

    const lastSlide = session.slides.at(-1);
    assert.equal(lastSlide.kind, "demo-brief", `module ${session.number} should end with demo brief`);
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: FAIL because `course.totalModules` is missing and `sessions.length` is still `12`.

- [ ] **Step 3: Keep the navigation test**

Update the navigation test to use module 5:

```js
deck.goToSession(5);
assert.equal(deck.currentSession().number, 5);
assert.equal(deck.currentSlideIndex, 0);

deck.previous();
assert.equal(deck.currentSession().number, 4);
assert.equal(deck.currentSlideIndex, sessions[3].slides.length - 1);

deck.next();
assert.equal(deck.currentSession().number, 5);
assert.equal(deck.currentSlideIndex, 0);
```

---

### Task 2: Replace 12 Sessions With 5 Focused Modules

**Files:**
- Modify: `src/presentation-data.js`

**Interfaces:**
- Produces: `course.totalModules: 5`.
- Produces: `sessions: Array<{ number, title, focus, demo, slides }>` with numbers `1` through `5`.

- [ ] **Step 1: Replace course metadata**

Use:

```js
export const course = {
  title: "UI/UX Design with Figma",
  subtitle: "A clean 5-module path from design basics to product design loop",
  totalModules: 5,
  sessionDurationMinutes: 60,
  rhythmMinutes: {
    theory: 15,
    questions: 15,
    demo: 30
  }
};
```

- [ ] **Step 2: Replace `sessions` with 5 modules**

Use these modules and keep each module to 5 theory slides plus 1 demo brief:

```js
[
  "Introduction",
  "Design Process",
  "What Is UI/UX",
  "Figma Basics",
  "Product Design System Loop"
]
```

Module content:
- Introduction: tutor intro, course goals, learning rhythm, UI/UX roadmap, beginner mindset.
- Design Process: why design matters, sketch, wireframe, prototype, test/iterate.
- What Is UI/UX: UX definition, UI definition, why both matter, short design evolution, design styles, main design elements, and a light introduction to design-system thinking after UI elements/components.
- Figma Basics: what Figma is, why it is used, files/pages/frames, basic tools, simple components.
- Product Design System Loop: end-to-end product design flow, mood board, brainstorming, wireframe creation, prototype creation, feedback/iteration, product handoff/ship mindset, and final beginner practice recap.

- [ ] **Step 3: Run tests**

Run: `npm test`

Expected: PASS for the structure tests after Task 1 and Task 2 are complete.

---

### Task 3: Update UI Labels From Sessions To Modules

**Files:**
- Modify: `index.html`
- Modify: `src/app.js`

**Interfaces:**
- Consumes: `course.totalModules`.
- Produces: UI text that says “module” where the deck structure is module-based.

- [ ] **Step 1: Update static labels in `index.html`**

Use these module labels:

```html
<p class="brand-kicker">5-module course</p>
<aside class="session-menu" id="sessionMenu" aria-label="Module menu">
<nav id="sessionList" class="session-list" aria-label="Modules"></nav>
```

- [ ] **Step 2: Update dynamic labels in `src/app.js`**

Change the indicator to:

```js
elements.sessionIndicator.textContent = `Module ${session.number} of ${course.totalModules}: ${session.title}`;
```

- [ ] **Step 3: Keep existing navigation names**

Do not rename `sessionList`, `goToSession`, or CSS class names in this refactor. They are internal names and changing them adds churn without improving the presentation.

---

### Task 4: Verify Rendering And Responsiveness

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `src/app.js`

**Interfaces:**
- Consumes: local server at `http://127.0.0.1:4173/`.
- Produces: verified deck with 5 accessible modules.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: 3 tests pass, 0 fail.

- [ ] **Step 2: Serve locally**

Run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Expected: `http://127.0.0.1:4173/` serves the presentation.

- [ ] **Step 3: Verify browser rendering**

Use Edge headless screenshots if available:

```powershell
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --screenshot='desktop-screenshot.png' --window-size=1440,900 http://127.0.0.1:4173/
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --screenshot='mobile-screenshot.png' --window-size=390,844 http://127.0.0.1:4173/
```

Expected:
- First slide renders with content, not a blank deck area.
- Menu shows 5 modules.
- Text does not overlap.
- Mobile view does not clip slide text.

---

## Self-Review

- Spec coverage: The plan maps the presentation back to 5 modules and preserves 1-hour teaching rhythm.
- Red-flag scan: No draft marker text.
- Type consistency: Keeps the existing `sessions` shape and `createDeckState` interface to minimize implementation risk.
