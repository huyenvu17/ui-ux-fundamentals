import Image from "next/image";
import { ArrowRight, Fire, GitDiff } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./button";
import { Reveal } from "./reveal";
import { FloatCard } from "./float-card";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
              A practice club for designers
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 pb-1 font-display text-4xl font-semibold leading-[1.1] tracking-tighter sm:text-5xl lg:text-6xl">
              Copy good design.{" "}
              <span className="italic text-accent">On purpose.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-sub">
              Recreate real interfaces in Figma or code, compare pixel-by-pixel,
              and get feedback from a community of learners.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" href="/feed">
                Start practicing
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="secondary" href="#challenges">
                Browse challenges
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src="/hero-collab.png"
                alt="Illustration of designers collaborating around a giant artboard"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            <FloatCard className="absolute left-4 top-6 sm:left-6" delay={0.4}>
              <GitDiff size={24} weight="duotone" className="text-accent" />
              <div>
                <p className="text-xs text-mute">Overlay match</p>
                <p className="font-mono text-sm text-ink">94%</p>
              </div>
            </FloatCard>

            <FloatCard className="absolute bottom-6 right-4 sm:right-6" delay={0.7}>
              <Fire size={24} weight="duotone" className="text-accent" />
              <div>
                <p className="text-xs text-mute">Weekly practice</p>
                <p className="font-mono text-sm text-ink">+120 XP</p>
              </div>
            </FloatCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
