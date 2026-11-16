import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AppCard } from "@/components/sections/AppCard";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Apps",
  description:
    "Android apps designed and built by DevOps Markaz Tech — Translita Offline Translator, Unbreakable App Blocker, Money Manager Expense Tracker and Evenly Split.",
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  const appProjects = projects.filter((p) => p.kind === "Mobile App");

  return (
    <>
      <PageHero
        eyebrow="Our apps"
        title={
          <>
            Apps we build, <span className="text-gradient">ship & grow</span>
          </>
        }
        text="Our own Android apps on Google Play — designed, engineered and maintained by the DevOps Markaz Tech team."
      />
      <section className="container-x grid gap-6 pb-16 md:grid-cols-2">
        {appProjects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1}>
            <AppCard project={p} />
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
