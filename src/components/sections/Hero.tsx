"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Cloud, CodeXml, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Terminal } from "./Terminal";

const ease = [0.22, 1, 0.36, 1] as const;
const headline = ["We", "Build", "Innovative", "Software,"];
const rotating = ["Scalable Systems", "Digital Products", "Cloud Platforms"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgb(255 255 255 / 0.07), transparent 60%)`;

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial" />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <motion.div
          className="absolute -left-40 top-10 size-[32rem] rounded-full bg-brand/25 blur-[120px]"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-0 size-[30rem] rounded-full bg-brand-2/[0.07] blur-[120px]"
          animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 size-[22rem] rounded-full bg-brand-3/10 blur-[120px]"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container-x grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-xs text-zinc-300 backdrop-blur"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-3 to-brand-2 px-2.5 py-1 font-semibold text-ink">
              <Sparkles className="size-3" /> New
            </span>
            Software · Cloud · DevOps · Design
          </motion.div>

          <h1 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
            <span className="sr-only">We Build Innovative Software, Scalable Systems, Digital Products and Cloud Platforms</span>
            <span aria-hidden>
              {headline.map((word, i) => (
                <span key={word} className="inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span
                    className="inline-block pr-[0.25em]"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <RotatingWords />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            DevOps Markaz Tech turns ideas into powerful digital products. Our engineers and creative thinkers design,
            develop and deliver software that is reliable, secure and ready for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact">
              Start Your Project <ArrowRight className="size-4" />
            </Button>
            <Button href="/projects" variant="ghost">
              View Our Work
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.95 } } }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400"
          >
            {[
              { Icon: CodeXml, label: "Custom Software" },
              { Icon: Cloud, label: "Cloud & DevOps" },
              { Icon: ShieldCheck, label: "Secure & Scalable" },
            ].map(({ Icon, label }) => (
              <motion.li
                key={label}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2"
              >
                <Icon className="size-4 text-brand-2" />
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          style={{ perspective: 1200 }}
          className="relative"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Terminal />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
            transition={{ opacity: { delay: 1.2 }, scale: { delay: 1.2 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="glass absolute -bottom-8 -left-4 rounded-2xl px-5 py-4 sm:-left-10"
          >
            <p className="font-display text-2xl font-semibold text-white">99.9%</p>
            <p className="text-xs text-muted">Uptime on deployments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ opacity: { delay: 1.4 }, scale: { delay: 1.4 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
            className="glass absolute -right-3 -top-8 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-6"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-zinc-200">CI/CD pipeline passing</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/70"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function RotatingWords() {
  return (
    <span className="relative block h-[1.25em] overflow-hidden text-[0.82em]">
      {rotating.map((word, i) => (
        <motion.span
          key={word}
          className="text-gradient absolute left-0 top-0 whitespace-nowrap"
          initial={{ y: "140%" }}
          animate={{ y: ["140%", "0%", "0%", "-140%"] }}
          transition={{
            duration: 3.6,
            times: [0, 0.12, 0.88, 1],
            delay: 0.55 + i * 3.6,
            repeat: Infinity,
            repeatDelay: 3.6 * (rotating.length - 1),
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
