"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const lines = [
  { prompt: true, text: "git push origin main" },
  { prompt: false, text: "✓ Tests passed (248/248)", color: "text-emerald-400" },
  { prompt: true, text: "docker build -t markaz/app:latest ." },
  { prompt: false, text: "✓ Image built in 12.4s", color: "text-emerald-400" },
  { prompt: true, text: "kubectl apply -f k8s/production" },
  { prompt: false, text: "deployment.apps/app configured", color: "text-zinc-300" },
  { prompt: false, text: "🚀 Live at https://your-product.com", color: "text-white" },
];

/** Typing terminal that loops through a CI/CD deploy. */
export function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 3200);
      return () => clearTimeout(t);
    }
    const line = lines[lineIndex];
    if (!line.prompt) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 450);
      return () => clearTimeout(t);
    }
    if (charIndex < line.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 38);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 380);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex]);

  return (
    <div className="glass overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="size-3 rounded-full bg-zinc-500" />
        <span className="size-3 rounded-full bg-zinc-600" />
        <span className="size-3 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-xs text-zinc-500">markaz@devops: ~/deploy</span>
      </div>
      <div className="h-[244px] space-y-1.5 p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
        {lines.slice(0, Math.min(lineIndex + 1, lines.length)).map((line, i) => {
          const isCurrent = i === lineIndex;
          const text = isCurrent && line.prompt ? line.text.slice(0, charIndex) : line.text;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.prompt ? "text-zinc-200" : line.color}
            >
              {line.prompt && <span className="mr-2 text-brand-2">❯</span>}
              {text}
              {isCurrent && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-brand-2" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
