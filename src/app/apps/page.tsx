import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { AppCard } from "@/components/sections/AppCard";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Apps",
  description:
    "Android apps designed and built by DevOps Markaz Tech — Evenly Split, Translita Offline Translator, Unbreakable App Blocker and Money Manager Expense Tracker.",
  alternates: { canonical: "/apps" },
};

/** Shows Evenly's first two store screenshots once they are added to public/apps/evenly-split/screens/. */
const evenlyScreens = [1, 2]
  .map((i) => `/apps/evenly-split/screens/screen-${i}.png`)
  .filter((f) => existsSync(path.join(process.cwd(), "public", f)));

/** Evenly isn't on Google Play yet, so it gets its own branded card. */
function EvenlyCard() {
  return (
    <Link
      href="/apps/evenly-split"
      className="group block h-full rounded-3xl border border-white/[0.08] bg-surface p-3 transition-colors duration-500 hover:border-[#BADFC6]/50"
    >
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl bg-[#26302A]">
        <div aria-hidden className="absolute -left-16 -top-16 size-64 rounded-full bg-[#BADFC6]/15 blur-[70px]" />
        <span className="absolute left-5 top-5 rounded-full bg-[#BADFC6] px-3 py-1 text-xs font-semibold text-[#26302A]">New</span>
        {evenlyScreens.length === 2 ? (
          <div className="absolute inset-x-0 bottom-0 top-8 flex items-end justify-center">
            <div className="absolute bottom-0 w-[30%] min-w-28 -translate-x-[30%] translate-y-[30px] -rotate-[8deg] overflow-hidden rounded-t-[1.4rem] border-[5px] border-b-0 border-zinc-800 bg-black opacity-70 shadow-2xl transition-transform duration-500 group-hover:-translate-x-1/2 group-hover:translate-y-[18px] group-hover:-rotate-12">
              <Image src={evenlyScreens[1]} alt="" width={1125} height={2000} sizes="200px" className="h-auto w-full" />
            </div>
            <div className="relative z-10 w-[33%] min-w-32 translate-x-[12%] translate-y-6 overflow-hidden rounded-t-[1.6rem] border-[5px] border-b-0 border-zinc-700 bg-black shadow-[0_-20px_60px_-10px_rgb(0_0_0/0.8)] transition-transform duration-500 group-hover:translate-x-[20%] group-hover:translate-y-1">
              <Image src={evenlyScreens[0]} alt="Evenly app screenshot" width={1125} height={2000} sizes="240px" className="h-auto w-full" />
            </div>
            <Image
              src="/apps/evenly-split/evenly-icon.png"
              alt="Evenly icon"
              width={56}
              height={56}
              className="absolute right-5 top-0 size-14 rounded-2xl border border-white/10 shadow-xl shadow-black/50"
            />
          </div>
        ) : (
          <div className="relative text-center">
            <Image
              src="/apps/evenly-split/evenly-icon.png"
              alt="Evenly icon"
              width={96}
              height={96}
              className="mx-auto size-24 rounded-[1.6rem] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
            />
            <p className="mt-5 font-display text-2xl font-semibold text-white">Split expenses</p>
            <p className="font-display text-2xl font-semibold text-[#BADFC6]">without the awkward maths.</p>
          </div>
        )}
      </div>
      <div className="px-3 pb-3 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#BADFC6]/30 bg-[#BADFC6]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#BADFC6]">
            Mobile App · Finance
          </span>
          <span className="hidden shrink-0 items-center gap-1 text-xs text-zinc-500 transition-colors group-hover:text-white sm:inline-flex">
            Explore app <ArrowUpRight className="size-3.5" />
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-white">Evenly Split — Shared Expenses</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Split bills with flatmates, trips and friends. Add expenses, see who owes what and settle up in a tap.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Android", "Group Expenses", "Settle Up"].map((t) => (
            <span key={t} className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

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
        text="Our own Android apps — designed, engineered and maintained by the DevOps Markaz Tech team."
      />
      <section className="container-x grid gap-6 pb-16 md:grid-cols-2">
        <Reveal>
          <EvenlyCard />
        </Reveal>
        {appProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i + 1) * 0.1}>
            <AppCard project={p} />
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
