import { createDeckState } from "./deck-state.js?v=20260908-v47";
import { createSlideOverview } from "./deck-outline.js?v=20260908-v47";
import { course, sessions } from "./presentation-data.js?v=20260908-v47";
import { illustration } from "./illustrations.js?v=20260908-v47";

const deck = createDeckState(sessions);

const elements = {
  menu: document.querySelector("#sessionMenu"),
  menuToggle: document.querySelector("#menuToggle"),
  closePreview: document.querySelector("#closePreview"),
  next: document.querySelector("#nextSlide"),
  prev: document.querySelector("#prevSlide"),
  previewScrim: document.querySelector("#previewScrim"),
  progress: document.querySelector("#progressBar"),
  sessionIndicator: document.querySelector("#sessionIndicator"),
  sessionList: document.querySelector("#sessionList"),
  slideIndicator: document.querySelector("#slideIndicator"),
  slideRoot: document.querySelector("#slideRoot")
};

const slideOverview = createSlideOverview(sessions);
const partToggles = new Map(); // part number -> open/closed chosen by the user; default: the current part is open
const globalIndex = (sessionIndex, slideIndex) => sessions.slice(0, sessionIndex).reduce((count, item) => count + item.slides.length, 0) + slideIndex + 1;
const totalSlideCount = sessions.reduce((count, item) => count + item.slides.length, 0);

function applyInitialSlideFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const moduleNumber = Number(params.get("module"));
  const slideNumber = Number(params.get("slide"));

  if (!Number.isInteger(moduleNumber) || !Number.isInteger(slideNumber)) return;

  const session = sessions.find((item) => item.number === moduleNumber);
  if (!session || slideNumber < 1 || slideNumber > session.slides.length) return;

  deck.goToSession(moduleNumber);
  deck.goToSlide(slideNumber - 1);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const kindMeta = {
  cover: { icon: "school", label: "Bìa" },
  theory: { icon: "tips_and_updates", label: "Lý thuyết" },
  toc: { icon: "format_list_numbered", label: "Mục lục" },
  divider: { icon: "bookmark", label: "Mục" },
  task: { icon: "assignment", label: "Đề bài" },
  example: { icon: "lightbulb", label: "Ví dụ" },
  prompt: { icon: "smart_toy", label: "Prompt" },
  practice: { icon: "construction", label: "Thực hành" },
  audit: { icon: "fact_check", label: "Soi thành phẩm" },
  checklist: { icon: "task_alt", label: "Kết quả" },
  quiz: { icon: "quiz", label: "Tự kiểm tra" }
};

function iconFor(kind) {
  return kindMeta[kind]?.icon ?? "radio_button_checked";
}

function labelFor(kind) {
  return kindMeta[kind]?.label ?? "Slide";
}

const chain = (items, className) =>
  `<div class="${className}">${items.map((item) => `<span>${item}</span>`).join("<i></i>")}</div>`;

function visualTemplate(type, session, slide) {
  const title = slide.title;
  const templates = {
    hero: `<div class="visual-hero"><span class="material-symbols-rounded">design_services</span><p>${session.title}</p></div>`,
    checklist: `<div class="check-card"><span class="material-symbols-rounded">task_alt</span><span>Clear</span><span>Useful</span><span>Consistent</span></div>`,
    "two-columns": `<div class="split-visual"><div><strong>UI</strong><span>Giao diện: màn hình và nút</span></div><div><strong>UX</strong><span>Trải nghiệm: mục tiêu và luồng</span></div></div>`,
    timeline: `<div class="mini-timeline"><span></span><span></span><span></span><span></span></div>`,
    process: `<div class="process-visual"><span>Idea</span><span>Sketch</span><span>Wire</span><span>Test</span></div>`,
    "profile-card": `<div class="profile-visual"><div class="avatar-mark">HV</div><span>UI/UX</span><span>Front-end</span><p>Practice, feedback, polish</p></div>`,
    "girl-avatar": `<div class="girl-avatar-visual"><div class="girl-hair"></div><div class="girl-face"><span class="girl-eye"></span><span class="girl-eye"></span><span class="girl-smile"></span></div><div class="girl-body"></div><div class="girl-shadow"></div></div>`,
    "module-map": `<div class="module-map-visual">${["Nhìn lại", "Brief", "Research", "Market", "Flow", "Feature", "System", "Prototype", "Platform"].map((item, index) => `<span><b>${index + 1}</b>${item}</span>`).join("")}</div>`,
    none: "",
    "idea-board": `<div class="idea-board-visual"><article><small>Idea</small><span></span><span></span></article><article><small>Screen</small><span></span><button tabindex="-1">Action</button></article></div>`,
    "goal-grid": `<div class="goal-grid-visual"><span>User Value</span><span>Business Value</span><span>Feasibility</span><span>Market Context</span></div>`,
    "journey-rail": `<div class="journey-rail-visual">${["Idea", "Research", "Sketch", "UI", "Test"].map((item) => `<span>${item}</span>`).join("<i></i>")}</div>`,
    "risk-map": `<div class="risk-map-visual"><article>Màn hình đã vẽ</article><span></span><article>Thiếu brief & flow</article><article>Mất hướng</article></div>`,
    "problem-flow": `<div class="problem-flow-visual"><span>Yêu cầu</span><i></i><span>Để làm gì?</span><i></i><span>Nhu cầu thật</span></div>`,
    "process-rail": `<div class="process-rail-visual">${["Research", "Sketch", "Wireframe", "Prototype", "Test"].map((item) => `<span>${item}</span>`).join("")}</div>`,
    "fidelity-lab": `<div class="fidelity-lab-visual"><article><small>Low-fi</small><span></span><span></span><span></span></article><article><small>High-fi</small><span></span><button tabindex="-1">Continue</button></article></div>`,
    "product-journey": `
      <div class="product-journey-visual">
        <section class="journey-step journey-idea">
          <small>Brief</small>
          <span></span>
          <span></span>
        </section>
        <i></i>
        <section class="journey-step journey-wire">
          <small>Flow</small>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <i></i>
        <section class="journey-step journey-ui">
          <small>System</small>
          <span></span>
          <button type="button" tabindex="-1">Đặt sân</button>
        </section>
        <i></i>
        <section class="journey-step journey-prototype">
          <small>Prototype</small>
          <span class="material-symbols-rounded">near_me</span>
        </section>
      </div>
    `,
    cards: `<div class="card-stack"><span></span><span></span><span></span></div>`,
    "ux-map": `<div class="ux-map-visual"><span>Direct</span><i></i><span>Indirect</span><i></i><span>Substitute</span><i></i><span>Emerging</span><p>Benchmark một core flow</p></div>`,
    "ui-screen": `<div class="ui-screen-visual"><header></header><main><span></span><span></span><button tabindex="-1">Primary</button></main><footer></footer></div>`,
    "ux-ui-balance": `<div class="balance-visual"><article><b>UX</b><span>Flow</span><span>Usefulness</span></article><article><b>UI</b><span>Controls</span><span>Clarity</span></article></div>`,
    "history-stack": `<div class="history-stack-visual"><span>Print</span><span>Digital</span><span>Flat</span><span>Systems</span></div>`,
    "element-system": `<div class="element-system-visual"><span>Aa</span><span></span><span class="material-symbols-rounded">home</span><article>Button</article><article>Theme</article></div>`,
    "user-flow": `<div class="flow-visual"><span>Entry Point</span><i></i><span>Happy Path</span><i></i><span>Alternative</span><i></i><span>Error</span><i></i><span>Exit Point</span></div>`,
    metrics: `<div class="metric-visual"><b>+ clarity</b><b>+ trust</b><b>- friction</b></div>`,
    wireframe: `<div class="wireframe-visual"><span></span><span></span><span></span><span></span></div>`,
    layout: `<div class="layout-visual"><span></span><span></span><span></span><span></span></div>`,
    prototype: `<div class="prototype-visual"><span></span><i></i><span></span><i></i><span></span></div>`,
    comparison: `<div class="compare-visual"><div>Before</div><div>After</div></div>`,
    components: `<div class="component-visual"><button>Button</button><span>Input</span><article>Card</article></div>`,
    feedback: `<div class="feedback-visual"><span class="material-symbols-rounded">check_circle</span><span>${title}</span></div>`,
    style: `<div class="style-visual"><span></span><span></span><span></span></div>`,
    typography: `<div class="type-visual ace-type"><b>Aa</b><span>Tiêu đề 32 · Thân 16/24</span><p>Một font, mỗi cỡ một vai trò.</p></div>`,
    hierarchy: `<div class="hierarchy-visual"><strong>1</strong><span>2</span><small>3</small></div>`,
    color: `<div class="palette-visual"><span></span><span></span><span></span><span></span><span></span></div>`,
    accessibility: `<div class="access-visual"><span class="material-symbols-rounded">contrast</span><p>Readable for more people</p></div>`,
    symbols: `<div class="symbol-visual"><span class="material-symbols-rounded">home</span><span class="material-symbols-rounded">search</span><span class="material-symbols-rounded">favorite</span></div>`,
    theme: `<div class="theme-visual"><span>Light</span><span>Dark</span></div>`,
    platforms: `<div class="platform-visual"><span class="phone"></span><span class="tablet"></span><span class="desktop"></span></div>`,
    grid: `<div class="grid-visual">${"<span></span>".repeat(9)}</div>`,
    "figma-canvas": `<div class="figma-canvas-visual"><aside><span></span><span></span><span></span></aside><main><article></article><article></article></main><footer></footer></div>`,
    "figma-logo": `<div class="figma-logo-visual"><span></span><span></span><span></span><span></span><span></span></div>`,
    "setup-panel": `<div class="setup-panel-visual"><span class="material-symbols-rounded">language</span><span class="material-symbols-rounded">desktop_windows</span><span class="material-symbols-rounded">add_box</span></div>`,
    "figma-workspace": `<div class="workspace-visual"><aside><b>Layers</b><span></span><span></span></aside><main><article></article></main><aside><b>Design</b><span></span><span></span></aside></div>`,
    "tool-dock": `<div class="tool-dock-visual">${["near_me", "crop_square", "title", "image", "view_column"].map((icon) => `<span class="material-symbols-rounded">${icon}</span>`).join("")}</div>`,
    figma: `<div class="figma-visual"><span></span><span></span><span></span><span></span></div>`,
    layers: `<div class="layers-visual"><span>Web / Đặt lịch</span><span>Danh sách</span><span>Trống</span></div>`,
    tools: `<div class="tools-visual"><span class="material-symbols-rounded">near_me</span><span class="material-symbols-rounded">crop_square</span><span class="material-symbols-rounded">title</span></div>`,
    "mood-wall": `<div class="mood-wall-visual ace-mood"><span></span><span></span><span></span><span></span><p>Hướng trước, chi tiết sau</p></div>`,
    "feedback-note": `<div class="feedback-note-visual"><article><b>Feedback</b><span>What is clear?</span><span>What should improve?</span></article><i></i><article><b>Handoff</b><span>Ready decisions</span><span>Reusable parts</span></article></div>`,
    "practice-system": `<div class="practice-system-visual"><span>Tham khảo</span><span>Brief → Flow</span><span>Hỏi AI</span><span>Tự quyết</span><span>Dùng lại</span></div>`,
    moodboard: `<div class="mood-visual"><span></span><span></span><span></span><span></span></div>`,
    demo: `<div class="demo-visual"><span class="material-symbols-rounded">smart_display</span><p>Figma practice</p></div>`,

    // v2 visuals — design loop and process diagrams
    "design-loop": chain(["Brief", "Research", "Problem", "Opportunity", "Feature", "UX Architecture", "Design System", "Prototype"], "design-loop-visual"),
    "six-steps": chain(["Brief", "Nghiên cứu", "Khách hàng", "Mô tả SP", "Thiết kế", "Present"], "design-loop-visual steps"),
    "dt-loop": chain(["Empathize", "Define", "Ideate", "Prototype", "Test"], "design-loop-visual loop"),
    "research-chain": chain(["Objective", "Questions", "Hypothesis", "Findings", "Insights"], "design-loop-visual steps"),
    principles: `<div class="goal-grid-visual">${["Rõ ràng", "Nhất quán", "Có phản hồi", "Ít thao tác", "An toàn khi sai"].map((item) => `<span>${item}</span>`).join("")}</div>`,
    "three-phases": chain(["Figma Make", "Figma Design", "Figma Agent"], "design-loop-visual phases"),
    "ai-map": "",
    "brief-columns": "",
    "session-timeline": `<div class="session-timeline-visual">${[["20", "Khái niệm"], ["20", "Demo"], ["35", "Workshop"], ["15", "Critique"]].map(([minutes, label]) => `<span style="--w:${minutes}"><b>${minutes}'</b>${label}</span>`).join("")}</div>`,
    "data-ladder": `<div class="data-ladder-visual">${["Raw Data", "Finding", "Insight", "Problem", "Opportunity"].map((item, index) => `<span style="--i:${index}">${item}</span>`).join("")}</div>`,
    "ace-palette": `<div class="illo-visual">${illustration("tokens")}</div>`,
    "ace-roles": `
      <div class="ace-roles-visual">
        <div class="ace-roles-head"><span></span><span>Xem</span><span>Tạo</span><span>Sửa</span><span>Duyệt</span></div>
        ${[["Khách", "✓", "✓", "của mình", "–"], ["Nhân viên", "✓", "thay khách", "✓", "–"], ["Quản trị", "✓", "✓", "✓", "✓"]].map((row) => `<div class="ace-roles-row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
      </div>
    `,
    "ace-flow": `
      <div class="ace-flow-visual">
        <span class="node">Chọn mục</span><i></i>
        <span class="node">Nhập thông tin</span><i></i>
        <span class="diamond">Hợp lệ?</span><i></i>
        <span class="node">Xác nhận</span><i></i>
        <span class="diamond">Thành công?</span><i></i>
        <span class="node end">Thành công</span>
        <em class="branch b1">không → báo lỗi tại chỗ, giữ dữ liệu</em>
        <em class="branch b2">không → nói vì sao, cho thử lại</em>
      </div>
    `,
    "ace-sitemap": `
      <div class="ace-sitemap-visual">
        <div class="tree"><b>Người dùng</b>${["Trang chủ", "Tìm kiếm", "Chi tiết", "Đặt lịch", "Thanh toán", "Của tôi", "Tài khoản"].map((item) => `<span>${item}</span>`).join("")}</div>
        <div class="tree admin"><b>Quản trị</b>${["Tổng quan", "Đơn hàng", "Khách hàng", "Báo cáo", "Cài đặt"].map((item) => `<span>${item}</span>`).join("")}</div>
      </div>
    `,
    "atomic-stack": `
      <div class="atomic-stack-visual">
        <span class="level"><b>Atoms</b>Nút · Ô nhập · Badge · Icon</span>
        <span class="level"><b>Molecules</b>Ô tìm kiếm · Dòng giá · Chip lọc</span>
        <span class="level"><b>Organisms</b>Thẻ sản phẩm · Bảng · Thanh tóm tắt</span>
        <span class="level"><b>Template</b>Trang danh sách · Trang chi tiết</span>
      </div>
    `,
    image: slide.image
      ? `<figure class="image-visual"><img src="${slide.image}" alt="${escapeHtml(slide.imageAlt ?? title)}" loading="lazy"><figcaption>${escapeHtml(slide.imageAlt ?? title)}</figcaption></figure>`
      : "",
    illo: slide.illo ? `<div class="illo-visual">${illustration(slide.illo)}</div>` : ""
  };

  return templates[type] ?? templates.cards;
}

function renderColumns(columns) {
  if (!columns?.length) return "";
  return `
    <div class="slide-columns">
      ${columns
        .map(
          (column) => `
            <section class="slide-column">
              <h3>${column.title}</h3>
              <ul>${column.items.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTable(table) {
  if (!table) return "";
  return `
    <div class="slide-table-scroll">
      <table class="slide-table">
        <thead><tr>${table.head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderCode(code) {
  if (!code) return "";
  return `<pre class="slide-code"><code>${escapeHtml(code)}</code></pre>`;
}

function renderNote(note) {
  if (!note) return "";
  return `<aside class="slide-note"><span class="material-symbols-rounded" aria-hidden="true">lightbulb</span><p>${note}</p></aside>`;
}

// Cover map: where this part sits among all parts, plus the part's agenda (unique sub-sections)
function renderCoverMap(session, slide) {
  if (slide?.courseCover || slide?.figure || slide?.noAgenda) return "";
  const seen = new Set();
  const agenda = session.slides
    .filter((slide) => slide.section && slide.section.includes(".") && !seen.has(slide.section) && seen.add(slide.section))
    .map((slide) => `<li><span>${slide.section}</span>${slide.sectionTitle}</li>`)
    .join("");
  return `
    <div class="cover-map">
      ${agenda ? `<ol class="agenda" style="--rows: ${Math.ceil(seen.size / 2)}">${agenda}</ol>` : ""}
    </div>
  `;
}

// Table of contents slide: the seven parts with their sub-sections
function renderToc() {
  const rows = sessions.map((item) => {
    const seen = new Set();
    const assignment = item.slides.some((s) => s.kind === "task");
    const subs = assignment
      ? item.focus
      : item.slides.filter((s) => s.section && s.section.includes(".") && !seen.has(s.section) && seen.add(s.section)).map((s) => s.sectionTitle).join(" · ");
    return `<li><b>${item.number}</b><div><strong>${item.title}</strong><small>${subs}</small></div></li>`;
  }).join("");
  return `<ol class="toc-list" style="--rows: ${Math.ceil(sessions.length / 2)}">${rows}</ol>`;
}

// Progress dots: one per sub-section of the current part, the current one filled
function renderSectionDots(session, slide) {
  if (!slide.section || !slide.section.includes(".")) return "";
  const codes = [];
  for (const item of session.slides) if (item.section && item.section.includes(".") && !codes.includes(item.section)) codes.push(item.section);
  return `<div class="section-dots" aria-hidden="true">${codes.map((code) => `<i class="${code === slide.section ? "is-current" : ""}" title="${code}"></i>`).join("")}</div>`;
}

function renderPoints(slide) {
  if (!slide.points?.length) return "";
  if (slide.steps) {
    return `<ol class="step-list">${slide.points.map((point, index) => `<li><b>${index + 1}</b><p>${point}</p></li>`).join("")}</ol>`;
  }
  if (slide.plain) {
    return `<div class="task-block">${slide.listTitle ? `<p class="task-list-title">${slide.listTitle}</p>` : ""}<ul class="task-list">${slide.points.map((point) => `<li>${point}</li>`).join("")}</ul></div>`;
  }
  const listClass = slide.kind === "checklist" ? "point-list is-checklist" : "point-list";
  return `
    <ul class="${listClass}">
      ${slide.points.map((point) => `<li><span class="material-symbols-rounded" aria-hidden="true">${iconFor(slide.kind)}</span><p>${point}</p></li>`).join("")}
    </ul>
  `;
}

// Shrink the slide until it fits the deck area (no scrolling while presenting).
function fitSlide() {
  const area = document.querySelector(".deck-area");
  const root = elements.slideRoot;
  if (!area || !root) return;
  const available = area.clientHeight - 4 - 44; // progress track + footer
  let fit = 1;
  root.style.setProperty("--fit", fit);
  root.classList.remove("is-fitted");
  for (let i = 0; i < 14; i++) {
    // Real content height: the lowest child edge (ignoring the absolutely placed page badge) relative to the slide top,
    // plus the slide's bottom padding. The slide box itself is stretched to the deck row, so its own height never overflows.
    const top = root.getBoundingClientRect().top;
    const children = [...root.children].filter((child) => !child.classList.contains("page-number"));
    const contentBottom = Math.max(...children.map((child) => child.getBoundingClientRect().bottom));
    const height = contentBottom - top + parseFloat(getComputedStyle(root).paddingBottom) * fit;
    if (height <= available || fit <= 0.56) break;
    fit = Math.round((fit - 0.035) * 1000) / 1000;
    root.style.setProperty("--fit", fit);
  }
  root.classList.toggle("is-fitted", fit < 1);
}

let fitTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(fitTimer);
  fitTimer = setTimeout(fitSlide, 120);
});

function renderSessionList() {
  elements.sessionList.innerHTML = sessions
    .map((session) => {
      const slides = slideOverview.filter((item) => item.sessionNumber === session.number);
      const isCurrent = session.number === deck.currentSession().number;
      const isOpen = partToggles.has(session.number) ? partToggles.get(session.number) : isCurrent;
      return `
        <section class="preview-module ${isOpen ? "is-open" : "is-collapsed"}">
          <button class="session-link ${isCurrent ? "is-active" : ""}" type="button" data-session="${session.number}" data-toggle="${session.number}" aria-expanded="${isOpen}">
            <span>${String(session.number).padStart(2, "0")}</span>
            <strong>${session.title}</strong>
            <em>${session.slides.length}</em>
            <i class="material-symbols-rounded" aria-hidden="true">${isOpen ? "expand_less" : "expand_more"}</i>
          </button>
          <div class="slide-preview-list" ${isOpen ? "" : "hidden"}>
            ${slides
              .map((item, index) => {
                const slideData = session.slides[item.slideIndex];
                const previous = index > 0 ? session.slides[slides[index - 1].slideIndex] : null;
                const sectionHead = slideData.section && (!previous || previous.section !== slideData.section)
                  ? `<p class="section-head"><span>${slideData.section}</span>${slideData.sectionTitle}</p>`
                  : "";
                return `
                  ${sectionHead}
                  <button class="slide-preview ${item.sessionNumber === deck.currentSession().number && item.slideIndex === deck.currentSlideIndex ? "is-active" : ""}" type="button" data-session="${item.sessionNumber}" data-slide="${item.slideIndex}">
                    <span>${String(item.slideNumber).padStart(2, "0")}</span>
                    <strong>${item.slideTitle}</strong>
                    <small>${labelFor(item.slideKind)}</small>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function setPreviewOpen(isOpen) {
  elements.menu.classList.toggle("is-open", isOpen);
  elements.menu.setAttribute("aria-hidden", String(!isOpen));
  elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
  elements.previewScrim.hidden = !isOpen;
}

function renderSlide() {
  const session = deck.currentSession();
  const slide = deck.currentSlide();
  const slideNumber = deck.currentSlideIndex + 1;
  const totalSlides = sessions.reduce((count, item) => count + item.slides.length, 0);
  const completedBeforeSession = sessions
    .slice(0, deck.currentSessionIndex)
    .reduce((count, item) => count + item.slides.length, 0);
  const progress = ((completedBeforeSession + slideNumber) / totalSlides) * 100;
  const visualHtml = slide.visual !== "none" && slide.layout !== "content-only" ? visualTemplate(slide.visual, session, slide) : "";
  const hasVisual = visualHtml.trim().length > 0;

  elements.slideRoot.className = `slide slide-${slide.kind} layout-${slide.layout ?? "split"}${hasVisual ? "" : " no-visual"}${slide.courseCover ? " slide-course-cover" : ""}`;
  elements.slideRoot.innerHTML = `
    <div class="slide-copy">
      ${slide.courseCover ? "" : `<p class="overline overline-${slide.kind}">${slide.eyebrow}</p>`}
      ${renderSectionDots(session, slide)}
      ${slide.hideTitle ? "" : `<h2>${slide.title}</h2>`}
      ${slide.figure ? `<figure class="slide-figure" data-figure="${slide.figure}">${illustration(slide.figure)}</figure>` : ""}
      ${slide.lead ? `<div class="prose">${slide.lead.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>` : ""}
      ${slide.key ? `<p class="task-key"><span>Trọng tâm</span>${slide.key}</p>` : ""}
      ${slide.goal ? (slide.kind === "cover" ? `<p class="cover-goal">${slide.goal}</p>` : `<p class="slide-goal"><b>Mục tiêu:</b> ${slide.goal}</p>`) : ""}
      ${renderPoints(slide)}
      ${slide.toc ? renderToc() : ""}
      ${slide.kind === "cover" ? renderCoverMap(session, slide) : ""}
      ${renderColumns(slide.columns)}
      ${renderTable(slide.table)}
      ${renderCode(slide.code)}
      ${renderNote(slide.note)}
      ${slide.footer ? `<p class="slide-footer">${slide.footer}</p>` : ""}
    </div>
    ${hasVisual ? `<div class="slide-visual" aria-hidden="${slide.visual === "image" ? "false" : "true"}">${visualHtml}</div>` : ""}
  `;

  fitSlide();
  elements.progress.style.width = `${Math.max(progress, 1)}%`;
  const pageNumber = globalIndex(deck.currentSessionIndex, deck.currentSlideIndex);
  elements.sessionIndicator.textContent = `Phần ${session.number} / ${course.totalModules} · ${session.title}${slide.section ? ` · ${slide.section} ${slide.sectionTitle}` : ""}`;
  elements.slideIndicator.textContent = `${pageNumber} / ${totalSlideCount}`;
  const pageBadge = document.createElement("span");
  pageBadge.className = "page-number";
  pageBadge.textContent = `${pageNumber} / ${totalSlideCount}`;
  elements.slideRoot.appendChild(pageBadge);
  const mobileIndicator = document.querySelector("#mobileIndicator");
  if (mobileIndicator) mobileIndicator.textContent = `Phần ${session.number} · ${pageNumber}/${totalSlideCount}`;
  elements.slideRoot.scrollTop = 0;
  document.querySelector(".deck-area")?.scrollTo({ top: 0 });
  renderSessionList();
}

// Header brand: back to the first slide
document.querySelector(".brand")?.addEventListener("click", () => {
  deck.goToSession(1);
  deck.goToSlide(0);
  setPreviewOpen(false);
  renderSlide();
});

elements.sessionList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-session]");
  if (!button) return;
  if (button.dataset.toggle) {
    const number = Number(button.dataset.toggle);
    partToggles.set(number, button.getAttribute("aria-expanded") !== "true");
    renderSessionList();
    return;
  }
  deck.goToSession(Number(button.dataset.session));
  if (button.dataset.slide) {
    deck.goToSlide(Number(button.dataset.slide));
  }
  setPreviewOpen(false);
  renderSlide();
});

const mobilePrev = document.querySelector("#mobilePrev");
const mobileNext = document.querySelector("#mobileNext");
mobilePrev?.addEventListener("click", () => { deck.previous(); renderSlide(); });
mobileNext?.addEventListener("click", () => { deck.next(); renderSlide(); });

elements.next.addEventListener("click", () => {
  deck.next();
  renderSlide();
});

elements.prev.addEventListener("click", () => {
  deck.previous();
  renderSlide();
});

elements.menuToggle.addEventListener("click", () => {
  setPreviewOpen(!elements.menu.classList.contains("is-open"));
});

elements.closePreview.addEventListener("click", () => {
  setPreviewOpen(false);
});

elements.previewScrim.addEventListener("click", () => {
  setPreviewOpen(false);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    deck.next();
    renderSlide();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    deck.previous();
    renderSlide();
  }

  if (event.key === "Escape") {
    setPreviewOpen(false);
  }
});

// Touch: swipe left/right to change slides (ignore vertical scrolls and small moves)
let touchStartX = 0;
let touchStartY = 0;
elements.slideRoot.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });
elements.slideRoot.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
  if (dx < 0) deck.next(); else deck.previous();
  renderSlide();
}, { passive: true });

applyInitialSlideFromUrl();
renderSessionList();
renderSlide();

if (window.location.hash === "#preview") {
  setPreviewOpen(true);
}
