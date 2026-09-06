# Module Scope Document Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a clear module-scope document that expands the five-module UI/UX beginner course into update-ready teaching guidance without overloading the presentation slides.

**Architecture:** Keep the live deck concise in `src/presentation-data.js` and add the deeper teaching scope as Markdown documentation in `docs/module-scope.md`. Add a lightweight Node test that checks the scope document stays aligned with the five module names and repeated section structure used by the presentation.

**Tech Stack:** Markdown documentation, plain JavaScript modules, Node.js built-in test runner.

## Global Constraints

- Course structure must stay at 5 modules: Introduction, Design Process, What Is UI/UX, Figma Basics, Product Design System Loop.
- Scope document must help enrich slide content later without adding Q&A slides.
- Audience is absolute beginners.
- Language is English.
- Main demo tool is Figma.
- Each module should support 15 minutes of theory and a 30-minute demo.
- Do not change the current visual redesign unless needed for document access.

---

### Task 1: Add Scope Document Contract Test

**Files:**
- Modify: `tests/presentation.test.mjs`
- Create later: `docs/module-scope.md`

**Interfaces:**
- Consumes: `sessions` from `src/presentation-data.js`.
- Produces: a test that verifies `docs/module-scope.md` has one `## Module N: Title` heading for each deck module and includes the standard scope sections.

- [ ] **Step 1: Import filesystem helpers**

Add this import near the top of `tests/presentation.test.mjs`:

```js
import { readFileSync } from "node:fs";
```

- [ ] **Step 2: Add a failing scope document test**

Append this test:

```js
test("module scope document mirrors the five deck modules", () => {
  const scope = readFileSync(new URL("../docs/module-scope.md", import.meta.url), "utf8");

  for (const session of sessions) {
    assert.match(scope, new RegExp(`## Module ${session.number}: ${session.title.replace("/", "\\/")}`));
  }

  const requiredSections = [
    "Teaching Purpose",
    "Beginner Takeaways",
    "Theory Scope",
    "Slide Content Plan",
    "Demo Scope",
    "Update Notes"
  ];

  for (const section of requiredSections) {
    const matches = scope.match(new RegExp(`### ${section}`, "g")) ?? [];
    assert.equal(matches.length, sessions.length, `${section} should appear once per module`);
  }
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npm test`

Expected: FAIL with `ENOENT` because `docs/module-scope.md` does not exist yet.

---

### Task 2: Create The Module Scope Document

**Files:**
- Create: `docs/module-scope.md`

**Interfaces:**
- Produces: Markdown headings and section names required by Task 1.
- Produces: editable course-planning content for future presentation updates.

- [ ] **Step 1: Create document overview**

Start `docs/module-scope.md` with:

```md
# UI/UX Fundamentals Module Scope

This document is the editable content scope for the five-module beginner UI/UX presentation. The HTML slides should stay concise; this document holds the richer teaching intent, talking points, examples, and demo boundaries for future slide updates.
```

- [ ] **Step 2: Add Module 1 scope**

Include:

```md
## Module 1: Introduction

### Teaching Purpose
Set the course context, build trust with beginners, and show that UI/UX is a practical skill for making digital products clearer and easier to use.

### Beginner Takeaways
- UI/UX is learnable through observation, practice, and iteration.
- Beginners should focus on clarity before decoration.
- The course moves from basic concepts to a small reusable product flow.

### Theory Scope
- Tutor introduction and learning expectations.
- Course goals and what students will be able to practice.
- Simple explanation of where UI/UX skills are useful.
- Overview of the full design journey from idea to shipped product.

### Slide Content Plan
- Welcome and course promise.
- Tutor introduction.
- Course goals.
- Practical value of UI/UX skills.
- Full design journey overview.
- Demo brief.

### Demo Scope
Review familiar app or website screens and label what feels clear, confusing, useful, or trustworthy.

### Update Notes
Add local examples, tutor background, or student-relevant product screenshots here instead of adding long biography or Q&A content to slides.
```

- [ ] **Step 3: Add Module 2 scope**

Include design value, problem solving, research or idea, sketch, wireframe, prototype, test, iteration, and low-fidelity versus high-fidelity boundaries.

- [ ] **Step 4: Add Module 3 scope**

Include UX definition, UI definition, why both matter, short design history, design styles, main design elements, and the first mention of reusable component/system thinking after UI components.

- [ ] **Step 5: Add Module 4 scope**

Include what Figma is, access and installation, canvas, frames, layers, properties panel, basic tools, components, and a beginner workflow.

- [ ] **Step 6: Add Module 5 scope**

Include the end-to-end design system loop: mood board, brainstorming, wireframe, prototype, feedback, iteration, handoff/ship mindset, and final beginner practice guidance.

---

### Task 3: Verify And Refine

**Files:**
- Verify: `tests/presentation.test.mjs`
- Verify: `docs/module-scope.md`

**Interfaces:**
- Consumes: all changes from Tasks 1 and 2.
- Produces: passing tests and a document that is easy to scan.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: PASS with the existing deck tests plus the new scope document test.

- [ ] **Step 2: Read the document for scan quality**

Run:

```powershell
Get-Content -Raw docs\module-scope.md
```

Expected: The document has five modules, repeated section headings, concise bullets, and no draft-marker text.

- [ ] **Step 3: Commit if this were a git repository**

If the workspace has git initialized, run:

```bash
git add docs/module-scope.md tests/presentation.test.mjs docs/superpowers/plans/2026-08-03-module-scope-document.md
git commit -m "docs: add ui ux module scope"
```

If the workspace is not a git repository, skip commit and report that no commit was made.

---

## Self-Review

- Spec coverage: The plan creates a scope document for each of the five modules and keeps the presentation itself concise.
- Red-flag scan: No draft marker text is used.
- Type consistency: The test consumes the existing `sessions` export and verifies Markdown headings against the live deck module names.
