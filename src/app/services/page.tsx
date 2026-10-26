import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TechMarquee } from "@/components/ui/Marquee";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web & mobile apps, Cloud & DevOps, UI/UX design, e-commerce and technology consulting by DevOps Markaz Tech.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Everything you need to <span className="text-gradient">launch, grow & scale</span>
          </>
        }
        text="One partner for strategy, design, engineering and cloud operations — so your product moves from idea to impact without the hand-offs."
      />

      <section className="container-x space-y-8 pb-16">
        {services.map(({ slug, title, icon: Icon, description, features, tech }, i) => (
          <Reveal key={slug}>
            <div id={slug} className="scroll-mt-28">
              <SpotlightCard>
                <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-3 to-brand-2 text-ink shadow-lg shadow-white/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                        <Icon className="size-6" />
                      </div>
                      <span className="font-mono text-sm text-zinc-600">0{i + 1} / 0{services.length}</span>
                    </div>
                    <h2 className="mt-7 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {tech.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="grid content-center gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-zinc-200 transition-colors duration-300 hover:border-brand-2/30 hover:bg-brand-2/[0.04]"
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-2/15 text-brand-2">
                          <Check className="size-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        ))}
      </section>

      <TechMarquee />
      <Process />
      <CTA />
    </>
  );
}
