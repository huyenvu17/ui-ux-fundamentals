// Backup of the original 4-module deck data (before the v2 six-module restructure).
export const course = {
  title: "UI/UX Design with Figma",
  subtitle: "A clean 4-module path: see design, name design, run the process, build in Figma",
  totalModules: 4,
  sessionDurationMinutes: 60,
  rhythmMinutes: {
    theory: 15,
    questions: 15,
    demo: 30
  }
};

const makeDemo = (task, output, starterPrompt) => ({ task, output, starterPrompt });

const layoutByVisual = {
  "element-system": "artifact",
  "feedback-note": "artifact",
  "figma-canvas": "canvas",
  "figma-logo": "poster",
  "figma-workspace": "canvas",
  "fidelity-lab": "comparison",
  "goal-grid": "center",
  "girl-avatar": "artifact",
  "history-stack": "poster",
  "idea-board": "poster",
  "journey-rail": "rail",
  "layer-stack": "canvas",
  "module-map": "center",
  "mood-wall": "wide",
  none: "content-only",
  "practice-system": "center",
  "problem-flow": "wide",
  "process-rail": "rail",
  "product-journey": "cover",
  "profile-card": "artifact",
  "risk-map": "artifact",
  "setup-panel": "artifact",
  "tool-dock": "center",
  "ui-screen": "canvas",
  "ux-map": "wide",
  "ux-ui-balance": "comparison",
  cards: "artifact",
  checklist: "center",
  color: "artifact",
  comparison: "comparison",
  components: "canvas",
  feedback: "artifact",
  figma: "canvas",
  hero: "poster",
  hierarchy: "center",
  layers: "canvas",
  metrics: "poster",
  moodboard: "wide",
  process: "rail",
  prototype: "rail",
  style: "poster",
  theme: "center",
  timeline: "rail",
  tools: "artifact",
  typography: "poster",
  "two-columns": "comparison",
  "user-flow": "wide"
};

const slide = (kind, title, eyebrow, points, visual = "cards", extras = {}) => ({
  kind,
  title,
  eyebrow,
  points,
  visual,
  layout: extras.layout ?? layoutByVisual[visual] ?? "split",
  ...extras
});

export const sessions = [
  {
    number: 1,
    title: "Introduction",
    focus: "Set the context and show the course story: see it, name it, design it, build it.",
    demo: makeDemo(
      "Look at clear and confusing product screens together.",
      "A shared list of what feels easy, hard, or trustworthy — and why.",
      "Pick one screen you use often. What is the main action? What makes it easy or hard?"
    ),
    slides: [
      slide("cover", "UI/UX Design with Figma", "Course cover", [], "product-journey", {
        footer: "Huyen Vu"
      }),
      slide("theory", "Tutor Introduction", "Meet your guide", [
        "5+ years in UI/UX design and front-end development.",
        "Mindset for this course: observe, ask, try, improve."
      ], "girl-avatar"),
      slide("theory", "Course Content", "4 modules", [
        "1. Introduction — where we start.",
        "2. UI/UX Fundamentals — learn to see and name design.",
        "3. Design Process — turn ideas into screens.",
        "4. Figma Basics — build it for real."
      ], "none", { layout: "content-only" }),
      slide("theory", "How This Course Flows", "One simple story", [
        "See it — read real screens.",
        "Name it — learn the design words.",
        "Design it — run the process loop.",
        "Build it — make it in Figma."
      ], "module-map"),
      slide("theory", "Course Goals", "What you will practice", [
        "Turn ideas into screens.",
        "Name what you see: patterns, shapes, motion.",
        "Build wireframes and prototypes.",
        "Feel at home in Figma."
      ], "goal-grid")
    ]
  },
  {
    number: 2,
    title: "UI/UX Fundamentals",
    focus: "The main module: the core UI concepts one by one — from signifiers to states — plus style names, references, and eye training.",
    demo: makeDemo(
      "Open a real app screen and spot the concepts: signifiers, hierarchy, spacing, states, style.",
      "One labeled screen plus a mini reference board: 3 similar screens found by searching the style name.",
      "Pick a favorite app. Where are the signifiers? What states do its buttons have? What style is it?"
    ),
    slides: [
      slide("cover", "UI/UX Fundamentals", "Module 02", [
        "UX = how it works.",
        "UI = what you see.",
        "Core concepts, one screen at a time."
      ], "two-columns"),
      slide("theory", "Signifiers", "The UI explains itself", [
        "Visual cues that say: you can touch this.",
        "Button look, underline, highlight, tooltip.",
        "No manual needed — the screen teaches itself.",
        "Test: can you tell what is clickable at a glance?"
      ], "ui-screen"),
      slide("theory", "Visual Hierarchy", "Guide the eye", [
        "Size, position, color, contrast guide attention.",
        "Most important = most visible.",
        "Plan the first, second, third read."
      ], "hierarchy"),
      slide("theory", "Grids And Layouts", "Invisible structure", [
        "12-column grid for pages.",
        "4-point spacing: 4, 8, 16, 24, 32.",
        "Grids keep repeating content tidy.",
        "Align first — break the grid only on purpose."
      ], "grid", { layout: "center" }),
      slide("theory", "White Space", "Empty is a tool", [
        "Room to breathe = easier to read.",
        "Space groups related things.",
        "Cluttered feels cheap, spacious feels calm.",
        "When in doubt, add space — not lines."
      ], "layout", { layout: "artifact" }),
      slide("theory", "Typography", "One font, few sizes", [
        "One good sans-serif is enough.",
        "Few sizes, each with a role.",
        "Body 16px, line height 1.5.",
        "Letter spacing and line height = the polish.",
        "Icons match the text size next to them."
      ], "typography"),
      slide("theory", "Color With Meaning", "Color has a job", [
        "Start from one brand color.",
        "60-30-10: background, support, action.",
        "Semantic colors: green = success, red = danger, blue = info.",
        "Never decorate — every color answers 'why?'."
      ], "color"),
      slide("theory", "Dark Mode And Shadows", "Depth, done quietly", [
        "Dark mode is not inverted colors.",
        "Dim saturation, lighten cards for depth.",
        "Shadows: subtle in light, softer in dark.",
        "If you notice the shadow first, it is too strong."
      ], "theme"),
      slide("theory", "Buttons, Inputs, And States", "One part, many moods", [
        "Button: default, hover, pressed, disabled.",
        "Input: focus, error, warning.",
        "Ghost button for secondary actions.",
        "Design the states, not just the happy look."
      ], "components"),
      slide("theory", "Micro-Interactions And Motion", "Feedback for every action", [
        "Small feedback: hover, press, loading, success.",
        "Fade, slide, push, spring — say it in words.",
        "Motion confirms: it worked.",
        "Subtle beats spectacular."
      ], "prototype"),
      slide("theory", "Overlays", "Text over images", [
        "Text on a photo needs help.",
        "Add a dark gradient or a blur behind it.",
        "Keep the image visible, keep the text readable.",
        "The glass panels on these slides are overlays."
      ], "mood-wall"),
      slide("theory", "Styles Have Names", "Say the look, then search it", [
        "Minimalism — space, focus. Flat — no shadows.",
        "Glassmorphism — frosted glass, like these slides.",
        "Neumorphism — soft 3D. Brutalism — raw and loud.",
        "Bento — one screen, many neat boxes.",
        "Know the name — find 100 examples in one search."
      ], "style", { layout: "artifact" }),
      slide("theory", "References And Practice", "Train your eye", [
        "Dribbble, Behance — showcases. Mobbin — real apps.",
        "Search by style name: \"glassmorphism dashboard\".",
        "Daily: name 5 things on any screen.",
        "Weekly: save 3 screens, rebuild 1 in Figma.",
        "Always ask: signifiers, hierarchy, spacing, states."
      ], "practice-system")
    ]
  },
  {
    number: 3,
    title: "Design Process",
    focus: "Use the vocabulary in a working loop: find ideas, sketch, wireframe, prototype, get feedback.",
    demo: makeDemo(
      "Turn a rough idea into a simple wireframe, then connect 2-3 screens into a flow.",
      "A small flow with a clear purpose, one main action per screen, and reused parts.",
      "Design a booking, food-ordering, or habit-tracking flow. Say who the user is first."
    ),
    slides: [
      slide("cover", "Design Process", "Module 03", [
        "You know the words. Now use them.",
        "One loop: idea, screen, feedback, repeat."
      ], "hero"),
      slide("theory", "Why Design Matters Before Building", "Reduce risk", [
        "Understand the problem first.",
        "Make ideas visible early.",
        "Find issues before code is written."
      ], "risk-map"),
      slide("theory", "Think Like a Designer", "Design thinking loop", [
        "Empathize — know the user.",
        "Define — name the problem.",
        "Ideate — sketch many options.",
        "Prototype — make it clickable.",
        "Test — watch, learn, improve."
      ], "user-flow"),
      slide("theory", "Where Do Design Ideas Come From?", "Inspiration habit", [
        "Ideas are collected, not waited for.",
        "Browse Dribbble, Behance, Mobbin weekly.",
        "Save screens, name what you like.",
        "Mood board: pick colors and fonts from it.",
        "Remix what you saved."
      ], "moodboard"),
      slide("theory", "Core Process", "From idea to test", ["Idea.", "Sketch.", "Wireframe.", "Prototype.", "Test and repeat."], "process-rail"),
      slide("theory", "Low Fidelity vs High Fidelity", "Know the difference", [
        "Low-fi = structure and flow.",
        "High-fi = visual polish.",
        "Start rough while ideas change."
      ], "fidelity-lab"),
      slide("theory", "Feedback, Iteration, And Handoff", "Improve and ship", [
        "Ask: what is this screen for?",
        "What would you tap first?",
        "Improve step by step.",
        "Hand off clean, reusable parts."
      ], "feedback-note")
    ]
  },
  {
    number: 4,
    title: "Figma Basics",
    focus: "Introduce Figma workspace and tools, then close the course with a practice plan.",
    demo: makeDemo(
      "Build one screen in Figma with your own colors and fonts.",
      "One clean screen: clear hierarchy, small palette, saved styles, one reusable part.",
      "Build a simple welcome or profile screen with one primary action."
    ),
    slides: [
      slide("cover", "Figma Basics", "Module 04", ["Figma helps designers create, organize, prototype, and share product screens."], "figma-logo"),
      slide("theory", "What Is Figma?", "Design tool", [
        "Browser-based design tool.",
        "Screens, components, prototypes.",
        "Solo practice and team work."
      ], "figma-canvas"),
      slide("theory", "How To Access Figma", "Setup", [
        "Browser or desktop app.",
        "Create a free account.",
        "Start one practice file."
      ], "setup-panel"),
      slide("theory", "Interface Overview", "Workspace", [
        "Canvas — where designs live.",
        "Frames — screens.",
        "Layers — objects in order.",
        "Properties — size, color, text."
      ], "figma-workspace"),
      slide("theory", "Basic Tools", "Starter kit", ["Move.", "Frame.", "Shape.", "Text.", "Image.", "Components."], "tool-dock"),
      slide("theory", "Beginner Workflow", "Simple path", [
        "Frame.",
        "Text and buttons.",
        "Align and group.",
        "Apply your colors and fonts.",
        "Save styles, reuse parts."
      ], "process-rail"),
      slide("theory", "How Beginners Should Practice", "After the course", [
        "Collect and name designs you like.",
        "Rebuild simple screens.",
        "Create small flows.",
        "Ask for feedback.",
        "Reuse and grow your system."
      ], "practice-system")
    ]
  }
];
