"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Three fanned phone screens that tilt toward the cursor. */
export function AppPhones({ screens, name }: { screens: string[]; name: string }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 120, damping: 20 });
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 120, damping: 20 });
  const [center, left, right] = screens;

  const phone = "absolute overflow-hidden rounded-[2.2rem] border-[7px] border-zinc-800 bg-black shadow-2xl shadow-black/70";

  return (
    <div
      className="relative mx-auto aspect-[5/6] w-full max-w-[34rem]"
      style={{ perspective: 1400 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      <div aria-hidden className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--accent)/25 blur-[90px]" />
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative size-full">
        {left && (
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 0 }}
            animate={{ opacity: 0.85, x: 0, rotate: -9 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className={`${phone} left-[4%] top-[14%] w-[38%]`}
          >
            <Image src={left} alt="" width={720} height={1280} sizes="220px" className="h-auto w-full" />
          </motion.div>
        )}
        {right && (
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: 0 }}
            animate={{ opacity: 0.85, x: 0, rotate: 9 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className={`${phone} right-[4%] top-[14%] w-[38%]`}
          >
            <Image src={right} alt="" width={720} height={1280} sizes="220px" className="h-auto w-full" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: [0, -14, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className={`${phone} left-1/2 top-0 z-10 w-[46%] -translate-x-1/2`}
        >
          <Image src={center} alt={`${name} screenshot`} width={720} height={1280} priority sizes="280px" className="h-auto w-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
