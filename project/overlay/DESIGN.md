# Overlay - Design System Spec

> A practice club for designers. Recreate real interfaces in Figma or code,
> compare pixel-by-pixel, get feedback from the community.

**Design Read:** creative-community web app for design learners. Figma-native
dark tool-UI language, remixed with Blush-style playful illustration warmth.

**Dials:** `DESIGN_VARIANCE: 7` · `MOTION_INTENSITY: 6` · `VISUAL_DENSITY: 4`

---

## 1. Theme

**One theme, locked: dark tool-first.** The whole product lives in a
Figma-like dark canvas. Playfulness comes from illustration, motion, and
copy - never from flipping sections to light mode.

| Token | Value | Use |
|---|---|---|
| `bg-deep` | `#111114` | Page background |
| `surface` | `#1B1B1F` | Cards, panels, nav |
| `elevated` | `#242429` | Hover states, raised elements |
| `border` | `#2E2E35` | Hairlines (1px only) |
| `text-primary` | `#F4F4F5` | Headlines, body (never pure `#FFF`) |
| `text-secondary` | `#A1A1AA` | Descriptions, metadata |
| `text-muted` | `#6B6B74` | Captions, placeholders |

## 2. Accent - one, locked

Figma violet, brand-justified by the product domain. Used identically
everywhere on every page.

| Token | Value | Use |
|---|---|---|
| `accent` | `#8B5CF6` | Decorative accents, icon highlights, soft fills at 12% alpha |
| `accent-strong` | `#7C3AED` | Filled primary buttons (white text passes WCAG AA) |
| `accent-hover` | `#6D28D9` | Primary button hover |
| `accent-soft` | `#C4B5FD` | Text links on dark (high contrast) |

Secondary pops (coral `#FF6B6B`, mint `#34D399`, butter `#FBBF24`) exist
**only inside illustration artwork**, never in UI chrome.

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display | **Bricolage Grotesque** | Playful character for headlines. `tracking-tight`, never serif |
| UI / body | **Inter** | Justified: the product is a Figma-practice tool, Inter is Figma's native UI voice |
| Mono | **Geist Mono** | Code snippets, pixel-diff numbers, spec labels |

Scale: hero `text-4xl md:text-6xl tracking-tighter leading-[1.05]`,
section heads `text-3xl md:text-4xl`, body `text-base leading-relaxed`,
tool labels `text-[11px] font-medium` (Figma chrome voice).

## 4. Shape - one system, locked

Soft radius, documented rule:

- Cards and panels: `rounded-2xl` (16px)
- Buttons and inputs: `rounded-xl` (12px)
- Tags, badges, avatars: `rounded-full`
- No sharp-corner exceptions, no mixed systems.

Shadows: none by default. Hierarchy via 1px `border` + surface contrast.
Exception: floating elements (dialogs, toasts) get a violet-tinted shadow.

## 5. Signature components

- **Primary button** - `accent-strong` fill, white text, `active:scale-[0.98]`.
- **Secondary button** - transparent, 1px `border`, `text-primary`, hover `elevated`.
- **Toggle** - Figma-style pill switch, accent track when on.
- **Dropzone** - dashed `border`, centered icon + label (from the reference plugin UI).
- **Shot card** - artwork image, author row, like/comment counts, challenge tag.
- **Challenge card** - reference artwork, difficulty badge, XP reward, deadline.
- **Overlay slider** - before/after comparison handle (the product's namesake).
- **XP / streak badge** - mono numbers, no filled progress-track bars.

## 6. Motion

- `MOTION_INTENSITY: 6` - the page must actually move.
- Entry: hero copy + illustration fade/rise (`ease [0.16, 1, 0.3, 1]`).
- Scroll: `whileInView` reveals on sections (Motion, once, 30% threshold).
- Hover: cards lift `-translate-y-1`, buttons `scale-[0.98]` on active.
- No marquees on landing (reserved for challenge strip in app, max 1 total).
- Everything collapses to static under `prefers-reduced-motion`.
- Animate only `transform` and `opacity`. No `window` scroll listeners.

## 7. Iconography

`@phosphor-icons/react` only, `weight="duotone"` for decorative spots,
`weight="regular"` + `strokeWidth 1.5` in chrome. One family, no hand-rolled
icon paths. The logo mark is the single allowed custom SVG (two overlapping
rounded frames = "overlay").

## 8. Imagery

- Custom flat-doodle illustrations on charcoal (generated, Blush-style).
- Design-shot artwork: `picsum.photos` seeded placeholders in mock data.
- Avatars: DiceBear `thumbs` style (playful, illustrated, on-brand).
- No div-based fake screenshots. Real component previews only.

## 9. Voice

Playful, direct, beginner-friendly. Concrete verbs ("recreate", "compare",
"share"), no filler ("elevate", "seamless", "unlock"). No em-dashes anywhere.
Short sentences. Club energy, not enterprise energy.
