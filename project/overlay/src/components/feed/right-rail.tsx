import Image from "next/image";
import Link from "next/link";
import { Clock, Trophy, UserPlus } from "@phosphor-icons/react/dist/ssr";
import { dailyChallenge, leaderboard, suggested } from "@/lib/mock-data";
import { Button } from "@/components/button";

export function RightRail() {
  return (
    <aside className="sticky top-6 hidden h-fit flex-col gap-6 xl:flex">
      <section className="rounded-2xl border border-accent/30 bg-accent/8 p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-soft">
          Daily challenge
        </p>
        <h3 className="mt-3 font-medium leading-snug text-ink">{dailyChallenge.title}</h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-mute">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            14h left
          </span>
          <span className="font-mono">{dailyChallenge.xp} XP</span>
        </div>
        <Button size="sm" href="/feed" className="mt-4 w-full">
          Start challenge
        </Button>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-5">
        <div className="flex items-center gap-2">
          <Trophy size={18} weight="duotone" className="text-accent" />
          <h3 className="text-sm font-medium text-ink">This week</h3>
        </div>
        <ol className="mt-4 flex flex-col gap-3">
          {leaderboard.map((entry, i) => (
            <li key={entry.designer.handle} className="flex items-center gap-3">
              <span className="w-5 text-center font-mono text-xs text-mute">{i + 1}</span>
              <Image
                src={entry.designer.avatar}
                alt=""
                width={28}
                height={28}
                className="rounded-full border border-line bg-elevated"
              />
              <span className="truncate text-sm text-sub">{entry.designer.name}</span>
              <span className="ml-auto font-mono text-xs text-accent-soft">
                {entry.xp} XP
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-5">
        <h3 className="text-sm font-medium text-ink">Designers to follow</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {suggested.map((designer) => (
            <li key={designer.handle} className="flex items-center gap-3">
              <Image
                src={designer.avatar}
                alt=""
                width={32}
                height={32}
                className="rounded-full border border-line bg-elevated"
              />
              <div className="min-w-0">
                <p className="truncate text-sm text-ink">{designer.name}</p>
                <p className="truncate text-xs text-mute">{designer.handle}</p>
              </div>
              <Link
                href="/feed"
                aria-label={`Follow ${designer.name}`}
                className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-line text-sub transition-colors hover:border-accent/40 hover:text-accent-soft"
              >
                <UserPlus size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
