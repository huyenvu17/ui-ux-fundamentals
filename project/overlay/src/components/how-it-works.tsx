import Image from "next/image";
import { Reveal } from "./reveal";

const steps = [
  {
    title: "Pick a challenge",
    body: "Real screens from real products, sorted by difficulty. No blank canvases.",
  },
  {
    title: "Recreate it",
    body: "Rebuild it in Figma or in code, side by side with the original.",
  },
  {
    title: "Compare and share",
    body: "Overlay your replica, see your match score, post it for feedback.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Practice that actually sticks.
            </h2>
            <p className="mt-4 max-w-[48ch] leading-relaxed text-sub">
              No blank canvases, no vague tutorials. You learn by rebuilding
              work that is already good.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={0.08 * (i + 1)}>
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-sm text-accent-soft">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-sub">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src="/how-overlay-compare.png"
                alt="Illustration of a designer tracing over a semi-transparent interface card"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
