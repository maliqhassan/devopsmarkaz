import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-2">
      <span className="size-1.5 rounded-full bg-brand-2 shadow-[0_0_12px_#ffffff]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
