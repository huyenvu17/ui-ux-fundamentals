"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";

const START_POS = 62;

function matchFor(pos: number) {
  return Math.round(35 + pos * 0.59);
}

export function CompareSlider() {
  const frameRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);
  const dragging = useRef(false);

  const apply = (pct: number) => {
    if (clipRef.current) {
      clipRef.current.style.clipPath = `inset(0 0 0 ${pct}%)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${pct}%`;
    }
    if (readoutRef.current) {
      readoutRef.current.textContent = `match ~${matchFor(pct)}%`;
    }
  };

  const updateFromClientX = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    apply(pct);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Drag the handle. Feel the difference.
          </h2>
          <p className="mt-4 leading-relaxed text-sub">
            This is the overlay compare. Your replica on one side, the original
            on the other.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div
            ref={frameRef}
            className="relative aspect-[8/5] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-line bg-surface"
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
            onPointerCancel={() => {
              dragging.current = false;
            }}
          >
            <Image
              src="https://picsum.photos/seed/overlay-compare/1280/800"
              alt="Original interface reference"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              draggable={false}
            />
            <div
              ref={clipRef}
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${START_POS}%)` }}
            >
              <Image
                src="https://picsum.photos/seed/overlay-compare/1280/800?grayscale"
                alt="Your replica attempt"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
                draggable={false}
              />
            </div>

            <div
              ref={handleRef}
              className="absolute inset-y-0 z-10 w-px bg-white/80"
              style={{ left: `${START_POS}%` }}
            >
              <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/90 text-accent-soft shadow-[0_8px_24px_rgb(0_0_0/0.4)] backdrop-blur">
                <ArrowsLeftRight size={20} />
              </span>
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            defaultValue={START_POS}
            aria-label="Comparison position"
            className="sr-only"
            onChange={(e) => apply(Number(e.target.value))}
          />

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-sub">Original</span>
            <span ref={readoutRef} className="font-mono text-accent-soft">
              match ~{matchFor(START_POS)}%
            </span>
            <span className="text-sub">Your replica</span>
          </div>
        </div>
      </div>
    </section>
  );
}
