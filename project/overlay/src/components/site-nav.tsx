"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./logo";
import { Button } from "./button";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#challenges", label: "Challenges" },
  { href: "#community", label: "Community" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-deep/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Overlay home">
          <Logo />
          <span className="font-display text-lg font-semibold tracking-tight">Overlay</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-sub transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" href="/feed">
            Sign in
          </Button>
          <Button href="/feed">Start practicing</Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl text-sub transition-colors hover:bg-elevated hover:text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-deep px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-sub transition-colors hover:bg-elevated hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button variant="secondary" href="/feed" className="flex-1">
                Sign in
              </Button>
              <Button href="/feed" className="flex-1">
                Start practicing
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
