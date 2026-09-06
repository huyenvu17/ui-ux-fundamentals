import Link from "next/link";
import { House, Target, Trophy, UserCircle } from "@phosphor-icons/react/dist/ssr";

const items = [
  { label: "Feed", icon: House, active: true },
  { label: "Challenges", icon: Target, active: false },
  { label: "Ranks", icon: Trophy, active: false },
  { label: "Profile", icon: UserCircle, active: false },
];

export function MobileTabBar() {
  return (
    <nav
      aria-label="App navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-deep/90 backdrop-blur lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2.5">
        {items.map((item) => (
          <Link
            key={item.label}
            href="/feed"
            aria-current={item.active ? "page" : undefined}
            className={`flex flex-col items-center gap-1 rounded-lg px-3 py-1 text-[11px] ${
              item.active ? "text-accent-soft" : "text-mute"
            }`}
          >
            <item.icon size={22} weight={item.active ? "fill" : "regular"} />
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
