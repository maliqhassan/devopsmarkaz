"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

const spring = { type: "spring", stiffness: 200, damping: 20 } as const;

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18a1.5 1.5 0 0 0 .6 1.2l10.1-10.2L3.6 1.8Zm11.5 8.8L5.4 1.1l11.9 6.9-2.2 2.6Zm0 2.8 2.2 2.6-11.9 6.9 9.7-9.5Zm5.3-3.3-2.7-1.5-2.4 2.9 2.4 2.9 2.7-1.6a1.5 1.5 0 0 0 0-2.7Z" />
    </svg>
  );
}

/** Mobile app card: icon, store badge and two phone screens that fan out on hover. */
export function AppCard({ project }: { project: Project }) {
  const [front, back] = project.screens ?? [project.image];

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group block h-full rounded-3xl border border-white/[0.08] bg-surface p-3 transition-colors duration-500 hover:border-brand-2/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-ink">
        <div aria-hidden className="absolute inset-0 bg-grid mask-radial opacity-50" />
        <div aria-hidden className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[70px]" />

        {project.icon && (
          <motion.div
            variants={{ rest: { y: 0, rotate: 0 }, hover: { y: -4, rotate: -6 } }}
            transition={spring}
            className="absolute left-5 top-5 z-20 overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/50"
          >
            <Image src={project.icon} alt={`${project.title} icon`} width={56} height={56} className="size-14" />
          </motion.div>
        )}

        <div className="absolute inset-x-0 bottom-0 top-8 flex items-end justify-center">
          {back && (
            <motion.div
              variants={{ rest: { x: "-30%", rotate: -8, y: 30 }, hover: { x: "-50%", rotate: -12, y: 18 } }}
              transition={spring}
              className="absolute bottom-0 w-[30%] min-w-28 overflow-hidden rounded-t-[1.4rem] border-[5px] border-b-0 border-zinc-800 bg-black opacity-70 shadow-2xl"
            >
              <Image src={back} alt="" width={720} height={1280} sizes="200px" className="h-auto w-full" />
            </motion.div>
          )}
          <motion.div
            variants={{ rest: { x: "12%", y: 24 }, hover: { x: "20%", y: 4 } }}
            transition={spring}
            className="relative z-10 w-[33%] min-w-32 overflow-hidden rounded-t-[1.6rem] border-[5px] border-b-0 border-zinc-700 bg-black shadow-[0_-20px_60px_-10px_rgb(0_0_0/0.8)]"
          >
            <Image
              src={front}
              alt={`${project.title} app screenshot`}
              width={720}
              height={1280}
              sizes="240px"
              className="h-auto w-full"
            />
          </motion.div>
        </div>

        <span className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink shadow-lg">
          <GooglePlayIcon className="size-3.5" /> Get it on Google Play
        </span>
      </div>

      <div className="px-3 pb-3 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-brand-2/30 bg-brand-2/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand-2">
            {project.category}
          </span>
          <span className="hidden shrink-0 items-center gap-1 text-xs text-zinc-500 transition-colors group-hover:text-white sm:inline-flex">
            View on Play Store <ArrowUpRight className="size-3.5" />
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
