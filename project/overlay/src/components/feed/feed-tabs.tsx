"use client";

import { useState } from "react";
import type { Shot } from "@/lib/mock-data";
import { ShotCard } from "./shot-card";
import { Reveal } from "@/components/reveal";

const tabs = ["Latest", "Popular", "Following"] as const;
type Tab = (typeof tabs)[number];

const followingHandles = new Set(["@minadraws", "@junepixels", "@noorh"]);

export function FeedTabs({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState<Tab>("Latest");

  const visible =
    active === "Popular"
      ? [...shots].sort((a, b) => b.likes - a.likes)
      : active === "Following"
        ? shots.filter((s) => followingHandles.has(s.author.handle))
        : shots;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Feed filters"
        className="inline-flex gap-1 rounded-xl border border-line bg-surface p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`rounded-lg px-4 py-1.5 text-sm transition-colors ${
              active === tab
                ? "bg-accent/15 font-medium text-accent-soft"
                : "text-sub hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {visible.map((shot, i) => (
          <Reveal key={`${active}-${shot.id}`} delay={Math.min(i, 4) * 0.05}>
            <ShotCard shot={shot} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-line bg-surface p-12 text-center">
          <p className="font-medium text-ink">Nothing here yet</p>
          <p className="mt-1 text-sm text-sub">
            Follow a few designers and their replicas will show up here.
          </p>
        </div>
      )}
    </div>
  );
}
