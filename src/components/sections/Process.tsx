"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section className="container-x py-24">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            A proven process from <span className="text-gradient">idea to launch</span>
          </>
        }
        text="Clear milestones, transparent communication and engineering discipline at every step."
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-brand via-brand-2 to-brand-3 md:left-1/2"
        />

        <ol className="space-y-12">
          {processSteps.map(({ title, icon: Icon, text }, i) => {
            const right = i % 2 === 1;
            return (
              <li key={title} className="relative grid md:grid-cols-2 md:gap-16">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute left-6 top-1 z-10 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-brand-2/40 bg-ink text-brand-2 shadow-[0_0_30px_-8px_rgb(255_255_255/0.5)] md:left-1/2"
                >
                  <Icon className="size-5" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: right ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    right
                      ? "pl-16 md:col-start-2 md:pl-0"
                      : "pl-16 md:col-start-1 md:pl-0 md:text-right"
                  }
                >
                  <span className="font-mono text-xs text-brand-2">STEP 0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
