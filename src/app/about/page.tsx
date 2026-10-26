import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { site, strengths, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "DevOps Markaz Tech is an Islamabad-based software company of engineers and creative thinkers building reliable, secure and future-ready digital products since 2020.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Engineers & creators turning <span className="text-gradient">ideas into impact</span>
          </>
        }
        text="Since 2020, DevOps Markaz Tech has helped startups and enterprises design, build and scale digital products that customers love."
      />

      <section className="container-x grid items-center gap-16 py-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title={
              <>
                Built in Islamabad. <span className="text-gradient">Trusted worldwide.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                {site.legalName} was founded with a simple belief: great software comes from blending solid engineering
                with creative thinking. What started as a small team of passionate developers has grown into a full-service
                technology partner.
              </p>
              <p>
                Today our team of 25 skilled professionals delivers custom software, web and mobile applications, cloud
                infrastructure and DevOps automation for clients across the globe — always focused on software that is
                reliable, secure and ready for the future.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <Button href="/contact">
              Work with us <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <Reveal direction="left" className="relative">
          <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand/15 blur-[100px]" />
          <BrandShowcase />
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-3xl font-semibold text-white">{site.founded}</p>
              <p className="mt-1 text-sm text-muted">Founded</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-3xl font-semibold text-white">Islamabad</p>
              <p className="mt-1 text-sm text-muted">Headquarters</p>
            </div>
          </div>
        </Reveal>
      </section>

      <Stats />

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="What drives us"
          title={
            <>
              Mission, vision & <span className="text-gradient">values</span>
            </>
          }
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map(({ title, icon: Icon, text }) => (
            <StaggerItem key={title}>
              <SpotlightCard>
                <div className="flex gap-5 p-8">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand/25 to-brand-2/10 text-brand-2">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              A partner invested in <span className="text-gradient">your success</span>
            </>
          }
          text="We don't just write code — we take ownership of outcomes, from the first workshop to long after launch."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ title, icon: Icon, text }) => (
            <StaggerItem key={title}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-2/30">
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-3 to-brand-2 text-ink shadow-lg shadow-white/10 transition-transform duration-500 group-hover:rotate-6">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTA />
    </>
  );
}
