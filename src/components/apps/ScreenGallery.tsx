"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Horizontally scrolling strip of phone screenshots with arrow controls. */
export function ScreenGallery({ screens, name }: { screens: string[]; name: string }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={track}
        data-lenis-prevent
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100vw-80rem)/2+2rem))] pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {screens.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10 }}
            className="w-56 shrink-0 snap-center overflow-hidden rounded-[2rem] border-[6px] border-zinc-800 bg-black shadow-2xl shadow-black/60 sm:w-64"
          >
            <Image src={src} alt={`${name} screenshot ${i + 1}`} width={720} height={1280} sizes="256px" className="h-auto w-full" />
          </motion.div>
        ))}
      </div>
      <div className="container-x flex justify-end gap-2">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scroll(dir)}
            aria-label={dir === 1 ? "Next screenshots" : "Previous screenshots"}
            className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-(--accent) hover:text-(--accent)"
          >
            {dir === 1 ? <ChevronRight className="size-5" /> : <ChevronLeft className="size-5" />}
          </button>
        ))}
      </div>
    </div>
  );
}
