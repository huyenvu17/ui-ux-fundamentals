import type { Metadata } from "next";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react/dist/ssr";
import { AppSidebar } from "@/components/feed/app-sidebar";
import { FeedTabs } from "@/components/feed/feed-tabs";
import { RightRail } from "@/components/feed/right-rail";
import { MobileTabBar } from "@/components/feed/mobile-tab-bar";
import { Button } from "@/components/button";
import { shots } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Feed - Overlay",
  description: "Replicas from the designers you follow.",
};

export default function FeedPage() {
  return (
    <div className="mx-auto w-full max-w-[1400px] flex-1 px-4 sm:px-6">
      <div className="grid gap-6 py-6 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_300px]">
        <AppSidebar />

        <main className="min-w-0 pb-24 lg:pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-semibold tracking-tight">
                Your feed
              </h1>
              <p className="mt-1 text-sm text-sub">
                Fresh replicas from the club. Like, compare, steal the tricks.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex h-10 items-center gap-2 rounded-xl border border-line bg-surface px-3 text-sm focus-within:border-accent/50">
                <MagnifyingGlass size={18} className="shrink-0 text-mute" />
                <span className="sr-only">Search replicas</span>
                <input
                  type="search"
                  placeholder="Search replicas"
                  className="w-36 bg-transparent text-ink placeholder:text-mute focus:outline-none sm:w-44"
                />
              </label>
              <Button href="/feed" className="gap-1.5">
                <Plus size={18} />
                New replica
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <FeedTabs shots={shots} />
          </div>
        </main>

        <RightRail />
      </div>

      <MobileTabBar />
    </div>
  );
}
