import Link from "next/link";
import { Logo } from "./logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Challenges", href: "/feed" },
      { label: "Feed", href: "/feed" },
      { label: "Overlay compare", href: "/feed" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Practice modes", href: "#how" },
      { label: "Community", href: "#community" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 sm:px-6 md:flex-row md:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Overlay home">
            <Logo size={24} />
            <span className="font-display text-base font-semibold tracking-tight">Overlay</span>
          </Link>
          <p className="mt-3 max-w-[28ch] text-sm text-mute">
            Built for practice, not portfolios.
          </p>
        </div>

        <div className="flex gap-16">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-ink">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-sub transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
