"use client";

import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { ReactNode } from "react";

/** Card with a cursor-following radial glow on hover. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgb(255 255 255 / 0.06), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, rgb(255 255 255 / 0.4), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mx.set(-400);
        my.set(-400);
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={clsx("group relative h-full rounded-3xl bg-white/[0.06] p-px", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: border }}
      />
      <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  );
}
