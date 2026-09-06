import Link from "next/link";
import {
  Fire,
  GraduationCap,
  House,
  Target,
  Trophy,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/logo";
import { streakDays } from "@/lib/mock-data";

const navItems = [
  { label: "Feed", icon: House, href: "/feed", active: true },
  { label: "Challenges", icon: Target, href: "/feed", active: false },
  { label: "Learn", icon: GraduationCap, href: "/feed", active: false },
  { label: "Leaderboard", icon: Trophy, href: "/feed", active: false },
  { label: "Profile", icon: UserCircle, href: "/feed", active: false },
];

export function AppSidebar() {
  return (
    <aside className="sticky top-6 hidden h-[calc(100dvh-3rem)] flex-col lg:flex">
      <Link href="/" className="flex items-center gap-2.5 px-2" aria-label="Overlay home">
        <Logo />
        <span className="font-display text-lg font-semibold tracking-tight">Overlay</span>
      </Link>

      <nav className="mt-8 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
              item.active
                ? "bg-accent/12 font-medium text-accent-soft"
                : "text-sub hover:bg-elevated hover:text-ink"
            }`}
          >
            <item.icon size={20} weight={item.active ? "fill" : "regular"} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-line bg-surface p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15">
            <Fire size={22} weight="duotone" className="text-accent" />
          </span>
          <div>
            <p className="font-mono text-sm text-ink">{streakDays} day streak</p>
            <p className="text-xs text-mute">Practice today to keep it</p>
          </div>
        </div>
        <Link
          href="/feed"
          className="mt-4 block rounded-xl bg-accent-strong py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Daily challenge
        </Link>
      </div>
    </aside>
  );
}
