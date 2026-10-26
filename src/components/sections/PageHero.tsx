"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-40 md:pb-24 md:pt-48">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
        <motion.div
          className="absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container-x text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}
