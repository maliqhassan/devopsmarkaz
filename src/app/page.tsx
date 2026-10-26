import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectTile } from "@/components/sections/ProjectsGallery";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { TechMarquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { projects, strengths } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Stats />

      {/* About teaser */}
      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who we are"
            title={
              <>
                Empowering businesses with <span className="text-gradient">technology & creativity</span>
              </>
            }
            text="At DevOps Markaz Tech, we're passionate about transforming ideas into powerful digital products. Our team of engineers and creative thinkers work together to design, develop and deliver software that drives growth."
          />
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {["Custom Software Solutions", "Cloud & DevOps Services", "Web & Mobile Applications"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-200">
                  <span className="grid size-6 place-items-center rounded-full bg-brand-2/15 text-brand-2">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <Button href="/about" variant="ghost">
              More about us <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {strengths.map(({ title, icon: Icon, text }, i) => (
            <StaggerItem key={title} className={i % 2 === 1 ? "sm:translate-y-10" : ""}>
              <div className="glass h-full rounded-3xl p-6 transition-colors duration-500 hover:border-brand-2/30">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-3 to-brand-2 text-ink shadow-lg shadow-white/10">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Services */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              End-to-end services to <span className="text-gradient">build & scale</span> your product
            </>
          }
          text="From the first line of code to cloud infrastructure that never sleeps — we cover the full product lifecycle."
        />
        <ServicesGrid />
      </section>

      {/* Featured projects */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-brand-3/10 blur-[140px]" />
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured work"
              title={
                <>
                  Projects we&apos;re <span className="text-gradient">proud of</span>
                </>
              }
              text="A selection of live products we've designed and engineered for clients across industries."
            />
            <Reveal>
              <Button href="/projects" variant="ghost">
                All projects <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.filter((p) => p.featured).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.12}>
                <ProjectTile project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
