import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { AppPhones } from "@/components/apps/AppPhones";
import { ScreenGallery } from "@/components/apps/ScreenGallery";
import { FAQ } from "@/components/sections/FAQ";
import { GooglePlayBadge } from "@/components/ui/GooglePlayBadge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { apps, getApp } from "@/lib/apps";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.summary,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: { title: app.name, description: app.summary, images: [app.screens[0]] },
  };
}

function Heading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

export default async function AppDetailPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  const others = apps.filter((a) => a.slug !== app.slug);

  return (
    <div style={{ "--accent": app.accent } as CSSProperties}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-16 pt-32 md:pt-40">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
          <div className="absolute -left-40 top-20 size-[30rem] rounded-full bg-(--accent)/15 blur-[130px]" />
          <div className="absolute -right-40 bottom-0 size-[26rem] rounded-full bg-white/[0.05] blur-[120px]" />
        </div>

        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <Link href="/apps" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
                <ArrowLeft className="size-4" /> Our Apps
              </Link>
            </Reveal>
            <Reveal delay={0.05} className="mt-8 flex items-center gap-4">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={80}
                height={80}
                priority
                className="size-20 rounded-[1.4rem] border border-white/10 shadow-xl shadow-black/50"
              />
              <div>
                <p className="font-display text-lg font-semibold text-white">{app.name}</p>
                <p className="mt-1 text-sm text-(--accent)">{app.category}</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl">
                {app.headline[0]}
                <br />
                <span className="text-(--accent)">{app.headline[1]}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">{app.summary}</p>
            </Reveal>
            <Reveal delay={0.28} className="mt-10 flex flex-wrap items-center gap-5">
              <GooglePlayBadge href={app.playUrl} />
              <p className="text-sm text-zinc-400">
                Free download
                <span className="block text-zinc-500">for Android phones</span>
              </p>
            </Reveal>
          </div>

          <AppPhones screens={app.screens.slice(0, 3)} name={app.name} />
        </div>
      </section>

      {/* Highlights */}
      <section className="container-x py-10">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {app.highlights.map((h) => (
            <StaggerItem key={h.label} className="bg-ink p-8 text-center">
              <p className="whitespace-nowrap font-display text-2xl font-semibold text-(--accent) sm:text-3xl md:text-4xl">{h.value}</p>
              <p className="mt-2 text-sm text-muted">{h.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Features */}
      <section className="container-x py-24">
        <Heading
          eyebrow="Features"
          title={
            <>
              Everything you need, <span className="text-(--accent)">nothing you don&apos;t</span>
            </>
          }
        />
        <Stagger className={`mt-14 grid gap-5 sm:grid-cols-2 ${app.features.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {app.features.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-(--accent)/40">
                <div className="grid size-12 place-items-center rounded-2xl bg-(--accent)/15 text-(--accent) transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Screenshots */}
      <section className="py-16">
        <Heading eyebrow="Screenshots" title={<>Take a look inside</>} />
        <div className="mt-12">
          <ScreenGallery screens={app.screens} name={app.name} />
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-24">
        <Heading
          eyebrow="How it works"
          title={
            <>
              Up and running in <span className="text-(--accent)">three steps</span>
            </>
          }
        />
        <Stagger className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-(--accent)/50 to-transparent md:block" />
          {app.steps.map((s, i) => (
            <StaggerItem key={s.title} className="relative text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full border border-(--accent)/40 bg-ink font-display text-xl font-semibold text-(--accent) shadow-[0_0_40px_-10px_var(--accent)]">
                {i + 1}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Plans */}
      <section className="container-x py-20">
        <Heading
          eyebrow="Plans"
          title={
            <>
              Start free, <span className="text-(--accent)">upgrade anytime</span>
            </>
          }
          text="Subscriptions are managed through Google Play and can be cancelled anytime."
        />
        <Stagger
          className={`mx-auto mt-14 grid gap-5 ${app.plans.length === 3 ? "max-w-6xl lg:grid-cols-3" : "max-w-4xl md:grid-cols-2"}`}
        >
          {app.plans.map((p) => (
            <StaggerItem key={p.name}>
              <div
                className={`relative h-full rounded-3xl border p-8 ${
                  p.featured ? "border-(--accent)/50 bg-(--accent)/[0.06] shadow-[0_0_60px_-25px_var(--accent)]" : "border-line bg-surface/60"
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-zinc-500">{p.note}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">{p.name}</h3>
                <ul className="mt-6 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-(--accent)/15 text-(--accent)">
                        <Check className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Privacy */}
      <section className="container-x py-12">
        <Reveal>
          <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 overflow-hidden rounded-[2rem] border border-line bg-surface p-8 md:flex-row md:items-center md:p-12">
            <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-(--accent)/15 blur-[90px]" />
            <div className="relative grid size-16 shrink-0 place-items-center rounded-2xl bg-(--accent)/15 text-(--accent)">
              <ShieldCheck className="size-8" />
            </div>
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{app.privacy.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{app.privacy.text}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Questions about <span className="text-(--accent)">{app.name.split(/[:—]/)[0].trim()}</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-muted">
              Still need help?{" "}
              <Link href="/contact" className="text-white underline underline-offset-4 hover:text-(--accent)">
                Contact our team
              </Link>
              .
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FAQ items={app.faqs} />
        </Reveal>
      </section>

      {/* Download CTA */}
      <section className="container-x py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-(--accent)/30 bg-surface px-6 py-16 text-center md:py-20">
            <div aria-hidden className="absolute inset-0 bg-grid mask-radial opacity-50" />
            <div aria-hidden className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-(--accent)/20 blur-[110px]" />
            <div className="relative">
              <Image
                src={app.icon}
                alt=""
                width={88}
                height={88}
                className="mx-auto size-22 rounded-[1.6rem] border border-white/10 shadow-2xl shadow-black/60"
              />
              <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Get <span className="text-(--accent)">{app.name.split(/[:—]/)[0].trim()}</span> on your phone today
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted">Free to download on Google Play.</p>
              <div className="mt-9 flex justify-center">
                <GooglePlayBadge href={app.playUrl} />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* More apps + agency CTA */}
      <section className="container-x py-16">
        <div className="grid gap-5 md:grid-cols-[1fr_1fr_1.2fr]">
          {others.map((o) => (
            <Reveal key={o.slug}>
              <Link
                href={`/apps/${o.slug}`}
                className="glass group flex h-full items-center gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <Image src={o.icon} alt="" width={56} height={56} className="size-14 rounded-2xl border border-white/10" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">More from us</p>
                  <p className="mt-1 truncate font-display font-semibold text-white">{o.name}</p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-zinc-500 transition group-hover:text-white" />
              </Link>
            </Reveal>
          ))}
          <Reveal>
            <Link
              href="/contact"
              className="group flex h-full items-center justify-between gap-4 rounded-3xl bg-white p-6 text-ink transition duration-300 hover:-translate-y-1"
            >
              <span>
                <span className="block font-display text-lg font-semibold">Want an app like this?</span>
                <span className="mt-1 block text-sm text-zinc-600">DevOps Markaz Tech builds Android & iOS apps.</span>
              </span>
              <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
