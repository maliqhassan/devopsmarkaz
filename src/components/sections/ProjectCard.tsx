"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

/** Project card with a 3D tilt that follows the cursor. */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), { stiffness: 180, damping: 18 });

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group block h-full rounded-3xl border border-white/[0.08] bg-surface p-3 transition-colors duration-500 hover:border-brand-2/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2">
        <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 bg-ink/70 px-3 py-2 backdrop-blur">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="ml-2 truncate font-mono text-[10px] text-zinc-500">{project.url.replace("https://", "")}</span>
        </div>
        <Image
          src={project.image}
          alt={`${project.title} website screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top pt-7 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute bottom-4 right-4 grid size-12 translate-y-4 scale-75 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="px-3 pb-3 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-brand-2/30 bg-brand-2/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand-2">
            {project.category}
          </span>
          <span className="text-xs text-zinc-500">Live project ↗</span>
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
