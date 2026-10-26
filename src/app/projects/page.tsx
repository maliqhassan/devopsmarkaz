import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore live websites, web apps and Android apps built by DevOps Markaz Tech — from logistics, construction and travel to AI SaaS and productivity.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Digital products that <span className="text-gradient">deliver results</span>
          </>
        }
        text="Every project is a partnership. Here's a look at live platforms we've designed and engineered for clients around the world."
      />
      <section className="container-x pb-12">
        <ProjectsGallery />
      </section>
      <Stats />
      <CTA />
    </>
  );
}
