import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Users } from "@phosphor-icons/react/dist/ssr";
import { challenges } from "@/lib/mock-data";
import { Reveal } from "./reveal";

const difficultyStyles: Record<string, string> = {
  Beginner: "border-line text-sub",
  Intermediate: "border-accent/40 text-accent-soft",
  Advanced: "border-accent bg-accent text-white",
};

const offsets = ["", "md:mt-10", "md:mt-20"];

export function ChallengesPreview() {
  const featured = challenges.slice(0, 3);

  return (
    <section id="challenges" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
            Challenges
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Fresh screens to copy, every Monday.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-sub">
            One screen, one deadline, one match score. Post your replica and
            see how the club solved the same problem.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((challenge, i) => (
            <Reveal key={challenge.id} delay={0.08 * i}>
              <Link
                href="/feed"
                className={`group block overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${offsets[i]}`}
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-elevated">
                  <Image
                    src={challenge.image}
                    alt={challenge.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent-soft">
                      {challenge.mode}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs ${difficultyStyles[challenge.difficulty]}`}
                    >
                      {challenge.difficulty}
                    </span>
                    <span className="ml-auto font-mono text-xs text-sub">
                      {challenge.xp} XP
                    </span>
                  </div>
                  <h3 className="mt-3 font-medium leading-snug text-ink">
                    {challenge.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-mute">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {challenge.daysLeft} days left
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {challenge.entries} entries
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/feed"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-accent"
          >
            Browse all challenges
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
