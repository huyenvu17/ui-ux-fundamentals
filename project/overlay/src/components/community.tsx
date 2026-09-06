import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const quotes = [
  {
    body: "I recreated a Linear settings page and finally understood spacing scales. My own work stopped looking accidental.",
    name: "Mina Okafor",
    role: "Product designer",
  },
  {
    body: "The overlay compare is brutal in the best way. You think you nailed it until the slider says 61%.",
    name: "Theo Lindqvist",
    role: "Design student",
  },
  {
    body: "One challenge every lunch break. Three months in, my Figma speed roughly doubled.",
    name: "June Park",
    role: "Junior UI designer",
  },
];

export function Community() {
  return (
    <section id="community" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/community-club.png"
              alt="Illustration of a lively club of designers sharing work and feedback"
              fill
              sizes="(max-width: 1200px) 100vw, 1168px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A club, not a comments section.
            </h2>
            <p className="mt-4 max-w-[40ch] leading-relaxed text-sub">
              Feedback here is specific, kind, and fast. Post a replica, get
              three concrete pointers.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
            {quotes.map((quote, i) => (
              <Reveal key={quote.name} delay={0.08 * i}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                  <Quotes size={22} weight="duotone" className="text-accent" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-sub">
                    {quote.body}
                  </blockquote>
                  <figcaption className="mt-auto pt-5">
                    <p className="text-sm font-medium text-ink">{quote.name}</p>
                    <p className="mt-0.5 text-xs text-mute">{quote.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
