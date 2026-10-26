"use client";

import Image from "next/image";
import { motion } from "motion/react";

/** The cube logo floating inside slowly orbiting rings. */
export function BrandShowcase() {
  return (
    <div className="glass relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem]">
      <div aria-hidden className="absolute inset-0 bg-grid mask-radial opacity-60" />
      <div aria-hidden className="absolute size-72 rounded-full bg-white/[0.06] blur-[80px]" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-full border border-dashed border-white/10"
          style={{ width: `${46 + i * 18}%`, aspectRatio: "1" }}
          animate={{ rotate: i % 2 ? -360 : 360 }}
          transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_12px_#fff]" />
        </motion.div>
      ))}
      <motion.div
        className="relative w-[46%]"
        animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/brand/logo.png"
          alt="DevOps Markaz Tech logo"
          width={556}
          height={314}
          className="h-auto w-full drop-shadow-[0_20px_40px_rgb(0_0_0/0.6)]"
        />
      </motion.div>
    </div>
  );
}
