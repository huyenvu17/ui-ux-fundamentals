import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./button";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Your first replica is 20 minutes away.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-sub">
            Pick a beginner challenge, open Figma, and start copying. The club
            is waiting.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" href="/feed">
              Start practicing
              <ArrowRight size={18} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
