import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

import { course, sessions } from "../src/presentation-data.js";
import { illustrations } from "../src/illustrations.js";
import { createDeckState } from "../src/deck-state.js";
import { createSlideOverview } from "../src/deck-outline.js";

const allSlides = sessions.flatMap((session) => session.slides);
const slideText = (slide) => [slide.title, slide.eyebrow, slide.sectionTitle, slide.note, slide.code, ...(slide.points ?? []), JSON.stringify(slide.table ?? ""), JSON.stringify(slide.columns ?? "")].join(" ");

test("course is 'Thiết kế UI/UX' in seven Vietnamese parts: fundamentals, six process steps, AI last", () => {
  assert.equal(course.title, "Thiết kế UI/UX");
  assert.equal(course.totalModules, 7);
  assert.deepEqual(course.tutor, { name: "Huyen Vu", role: "Software Engineer" });
  assert.deepEqual(course.steps, ["Brief", "Nghiên cứu thị trường", "Khách hàng và điểm khác biệt", "Mô tả sản phẩm", "Thiết kế", "Present"]);
  assert.equal(sessions.length, 7);
  assert.deepEqual(
    sessions.map((session) => session.title),
    ["Nền tảng UI/UX", "Phân tích brief", "Nghiên cứu thị trường", "Khách hàng và điểm khác biệt", "Mô tả sản phẩm", "Thiết kế và trình bày", "Kết hợp với AI"]
  );
});

test("no product references or product screenshots remain", () => {
  for (const slide of allSlides) {
    assert.ok(!/\bACE\b/i.test(slideText(slide)), `${slide.title} mentions ACE`);
    assert.ok(!/Lotus|VietQR|pickleball|Thảo Điền/i.test(slideText(slide)), `${slide.title} mentions product details`);
    assert.notEqual(slide.visual, "image", `${slide.title} should not use a screenshot`);
  }
  for (const session of sessions) {
    assert.ok(!/ACE/.test(session.focus + session.demo.task + session.demo.output + session.demo.starterPrompt), `part ${session.number} demo mentions ACE`);
  }
  const app = readFileSync(new URL("../src/app.js", import.meta.url), "utf8");
  assert.ok(!app.includes("Figma ACE Design"));
});

test("fundamentals part opens with what UI/UX is, then design thinking, then the six steps", () => {
  const sections = sessions[0].slides.map((slide) => slide.section);
  assert.equal(sessions[0].slides[0].kind, "cover");
  assert.equal(sessions[0].slides[0].title, "Thiết kế UI/UX");
  assert.ok(sessions[0].slides[0].courseCover, "deck opens with a course cover");
  assert.equal(sessions[0].slides[0].footer, "Huyen Vu ");
  assert.equal(sessions[0].slides[0].points.length, 0, "course cover carries only the title and an illustration");
  assert.equal(sessions[0].slides[0].illo, "course");
  assert.ok(sessions[0].slides[1].toc, "slide 2 is the table of contents");
  assert.equal(sessions[0].slides[2].kind, "cover");
  assert.equal(sessions[0].slides[2].title, "Nền tảng UI/UX");
  for (const session of sessions) {
    const cover = session.slides.find((slide) => slide.kind === "cover" && !slide.courseCover);
    assert.equal(cover.points.length, 0, `part ${session.number} cover should be light: title, goal, agenda`);
    if (session.number !== 7) assert.ok(cover.goal.length <= 110, `part ${session.number} cover goal should be one short sentence`);
  }
  const order = [];
  for (const slide of sessions[0].slides.slice(3)) if (!order.includes(slide.sectionTitle)) order.push(slide.sectionTitle);
  assert.deepEqual(order, ["UI/UX là gì", "Vì sao cần UI/UX", "Sản phẩm của UI/UX", "Tư duy thiết kế", "Quy trình thiết kế", "Cơ sở thiết kế giao diện UI"]);
  assert.equal(sessions[0].slides.filter((slide) => slide.sectionTitle === "Tư duy thiết kế" && slide.kind !== "divider").length, 4, "design thinking = loop, two psychology slides, five UX principles");
  assert.ok(!sessions[0].slides.some((slide) => slide.sectionTitle === "Tâm lý thiết kế"));
  assert.deepEqual(sections.slice(3, 5), ["1.1", "1.1"]);
  assert.equal(sessions[0].slides[3].kind, "divider", "a multi-slide section opens with a title-only divider");
  for (const session of sessions) {
    for (const slide of session.slides) if (slide.kind === "divider") assert.ok(slide.visual === "none" && slide.points.length === 0 && slide.title === slide.sectionTitle);
    const singles = session.slides.filter((slide) => slide.section?.includes(".") && session.slides.filter((s) => s.section === slide.section).length === 1);
    for (const slide of singles) assert.notEqual(slide.kind, "divider", "single-slide sections do not get a divider");
  }
  assert.ok(!sessions[0].slides.some((slide) => /signifier/i.test(slide.title)));
  assert.ok(!allSlides.some((slide) => /giảng viên|tutor/i.test(slide.title)));
});

test("no audit-style framing remains", () => {
  const text = allSlides.map(slideText).join(" ");
  for (const phrase of ["Soi thành phẩm", "Định vị thành phẩm", "Bạn đang ở đâu", "thành phẩm của bạn"]) {
    assert.ok(!text.includes(phrase), `deck should not contain '${phrase}'`);
  }
});

test("every part has numbered sub-sections, practice and outputs slides; AI only in part 7", () => {
  for (const session of sessions) {
    assert.equal(session.slides[0].kind, "cover");
    if (session.number !== 7) assert.ok(session.slides.find((slide) => slide.kind === "cover" && !slide.courseCover).goal?.length > 0);
    assert.ok(session.slides.length >= 3 && session.slides.length <= 34, `part ${session.number} should have 3-34 slides`);
    for (const slide of session.slides.slice(1)) {
      if (slide.kind === "cover" || slide.toc) continue;
      assert.match(slide.section, new RegExp(`^${session.number}(\\.\\d+)?$`), `${slide.title} needs a section code`);
    }
    if (session.number >= 2 && session.number <= 6) {
      const kinds = new Set(session.slides.map((slide) => slide.kind));
      assert.equal(session.slides.length, 3, `part ${session.number} is cover + Đề bài + board illustration`);
      const task = session.slides.find((slide) => slide.kind === "task");
      const boardSlide = session.slides.find((slide) => slide.figure && slide.kind !== "cover");
      assert.ok(task?.lead?.length === 1 && task.key && task.listTitle && task.points.length >= 4, `part ${session.number} Đề bài: one lead paragraph, a key sentence, a list title and the required items`);
      assert.ok(task.note, `part ${session.number} Đề bài carries a mindset note`);
      assert.ok(!/không cần (viết dài|trình bày đẹp|vẽ ngay)/i.test(task.lead.join(" ")), `part ${session.number} lead should not say what is not needed`);
      assert.ok(boardSlide && illustrations[boardSlide.figure], `part ${session.number} has a board illustration`);
      assert.ok(/^processMap[1-5]$/.test(session.slides[0].figure), `part ${session.number} cover shows the roadmap with its step highlighted`);
      assert.ok(boardSlide.note?.includes("Kết hợp với AI"));
      assert.ok(!session.slides.some((slide) => slide.title === "Kết quả cần nộp"));
      assert.ok(!kinds.has("prompt"), `part ${session.number} should not contain prompt slides`);
    }
  }
  assert.ok(sessions[6].slides.filter((slide) => slide.kind === "prompt").length >= 5);
});

test("slides are concise Vietnamese and every illustration resolves", () => {
  const app = readFileSync(new URL("../src/app.js", import.meta.url), "utf8");
  const text = allSlides.map(slideText).join(" ");
  assert.ok(/[ăâđêôơưàảãáạ]/i.test(text));
  for (const slide of allSlides) {
    assert.ok(slide.points.length <= 7, `${slide.title} has too many points`);
    if (slide.table) for (const row of slide.table.rows) assert.equal(row.length, slide.table.head.length, `${slide.title} table row mismatch`);
    if (slide.visual === "illo") assert.ok(illustrations[slide.illo], `${slide.title} uses unknown illustration ${slide.illo}`);
    if (slide.figure) assert.ok(illustrations[slide.figure], `${slide.title} uses unknown figure ${slide.figure}`);
    else if (slide.visual !== "none") assert.ok(app.includes(`"${slide.visual}"`) || app.includes(`${slide.visual}:`), `app.js should render visual ${slide.visual}`);
  }
  for (const [name, svgText] of Object.entries(illustrations)) {
    assert.ok(svgText.startsWith("<svg") && svgText.trim().endsWith("</svg>"), `illustration ${name} must be an SVG`);
  }
  assert.ok(app.includes("section-head"));
  assert.ok(app.includes("renderCoverMap") && app.includes("renderSectionDots"), "covers carry a map and slides carry section dots");
});

test("deck state and overview work across seven parts", () => {
  const deck = createDeckState(sessions);
  deck.goToSession(7);
  deck.previous();
  assert.equal(deck.currentSession().number, 6);
  const overview = createSlideOverview(sessions);
  assert.equal(overview.length, allSlides.length);
});

test("module scope document mirrors the seven parts and mentions no product", () => {
  const scope = readFileSync(new URL("../docs/module-scope.md", import.meta.url), "utf8");
  for (const session of sessions) {
    assert.ok(scope.includes(`## Module ${session.number}: ${session.title}`), `scope should include module ${session.number}`);
  }
  for (const section of ["Teaching Purpose", "Beginner Takeaways", "Theory Scope", "Slide Content Plan", "Demo Scope", "Update Notes"]) {
    assert.equal((scope.match(new RegExp(`### ${section}`, "g")) ?? []).length, sessions.length);
  }
  assert.ok(!/\bACE\b/.test(scope.split("## Module 1")[1]), "module sections should not reference ACE");
  assert.ok(existsSync(new URL("../docs/ace-project-workbook.md", import.meta.url)), "tutor demo workbook stays as a separate file");
});
