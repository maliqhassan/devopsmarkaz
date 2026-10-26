import { techStack } from "@/lib/site";

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/40 py-6 mask-fade-x">
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= techStack.length}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-display text-sm text-zinc-300"
          >
            <span className="size-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
