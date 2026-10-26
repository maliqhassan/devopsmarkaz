"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { projects, type Project } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";
import { AppCard } from "./AppCard";

const tabs = [
  { label: "All", kind: null },
  { label: "Websites", kind: "Website" },
  { label: "Web Apps", kind: "Web App" },
  { label: "Mobile Apps", kind: "Mobile App" },
] as const;

export function ProjectTile({ project, priority }: { project: Project; priority?: boolean }) {
  return project.kind === "Mobile App" ? <AppCard project={project} /> : <ProjectCard project={project} priority={priority} />;
}

export function ProjectsGallery() {
  const [active, setActive] = useState<(typeof tabs)[number]["label"]>("All");
  const kind = tabs.find((t) => t.label === active)?.kind;
  const visible = kind ? projects.filter((p) => p.kind === kind) : projects;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {tabs.map((t) => {
          const count = t.kind ? projects.filter((p) => p.kind === t.kind).length : projects.length;
          return (
            <button
              key={t.label}
              role="tab"
              aria-selected={active === t.label}
              onClick={() => setActive(t.label)}
              className={clsx(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                active === t.label ? "text-ink" : "text-zinc-400 hover:text-white",
              )}
            >
              {active === t.label && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">
                {t.label} <span className="opacity-50">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectTile project={p} priority={i < 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
