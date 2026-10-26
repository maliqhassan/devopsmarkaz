"use client";

import Link from "next/link";
import clsx from "clsx";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

const MotionLink = motion.create(Link);

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

/** Link-styled button that is gently pulled toward the cursor. */
export function Button({ href, children, variant = "primary", className, external }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = clsx(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300",
    variant === "primary"
      ? "bg-white text-ink"
      : "border border-white/15 bg-white/[0.03] text-white backdrop-blur hover:border-white/30",
    className,
  );

  const inner = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-zinc-300 via-white to-zinc-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <MotionLink
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </MotionLink>
  );
}
