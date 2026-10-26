"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {reduced ? children : <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>{children}</ReactLenis>}
    </MotionConfig>
  );
}
