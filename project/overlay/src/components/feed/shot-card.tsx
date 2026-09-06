import Image from "next/image";
import { BookmarkSimple, ChatCircle, Heart } from "@phosphor-icons/react/dist/ssr";
import type { Shot } from "@/lib/mock-data";

export function ShotCard({ shot }: { shot: Shot }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
        <Image
          src={shot.image}
          alt={shot.title}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src={shot.author.avatar}
            alt=""
            width={32}
            height={32}
            className="rounded-full border border-line bg-elevated"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">{shot.author.name}</p>
            <p className="truncate text-xs text-mute">
              {shot.author.handle} · {shot.author.level}
            </p>
          </div>
          <span className="ml-auto shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent-soft">
            {shot.match}% match
          </span>
        </div>

        <h3 className="mt-3 text-sm font-medium leading-snug text-ink">{shot.title}</h3>
        <p className="mt-1 text-xs text-mute">{shot.challenge}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-sub">
          <button
            type="button"
            aria-label={`Like, currently ${shot.likes} likes`}
            className="flex items-center gap-1.5 rounded-lg px-1 py-0.5 transition-colors hover:text-accent-soft"
          >
            <Heart size={18} />
            {shot.likes}
          </button>
          <button
            type="button"
            aria-label={`Comment, currently ${shot.comments} comments`}
            className="flex items-center gap-1.5 rounded-lg px-1 py-0.5 transition-colors hover:text-accent-soft"
          >
            <ChatCircle size={18} />
            {shot.comments}
          </button>
          <button
            type="button"
            aria-label="Save to collection"
            className="ml-auto rounded-lg p-1 transition-colors hover:text-accent-soft"
          >
            <BookmarkSimple size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
