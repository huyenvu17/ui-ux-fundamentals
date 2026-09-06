import { BracketsAngle, FigmaLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const modes = [
  {
    icon: FigmaLogo,
    title: "Figma replica",
    body: "Rebuild the reference in Figma. Auto layout, components, and color styles, checked against the original.",
    chips: ["Auto layout", "Components", "Color styles"],
    span: "md:col-span-3",
    offset: "",
  },
  {
    icon: BracketsAngle,
    title: "Code replica",
    body: "Ship the same screen in HTML, CSS, or Tailwind and diff it in the browser.",
    chips: ["HTML + CSS", "Tailwind", "React"],
    span: "md:col-span-2",
    offset: "md:mt-12",
  },
];

export function PracticeModes() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Two ways to train.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-sub">
            Copy in Figma to train your eye, or copy in code to train your
            hand. Same challenges, double the reps.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {modes.map((mode, i) => (
            <Reveal key={mode.title} delay={0.08 * i} className={mode.span}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/40 ${mode.offset}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/15 opacity-80 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent-soft">
                  <mode.icon size={26} weight="duotone" />
                </span>
                <h3 className="relative mt-6 font-display text-2xl font-semibold tracking-tight">
                  {mode.title}
                </h3>
                <p className="relative mt-3 max-w-[44ch] text-sm leading-relaxed text-sub">
                  {mode.body}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {mode.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line px-3 py-1 text-xs text-sub"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
