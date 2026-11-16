import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { EvenlyInvite } from "@/components/apps/EvenlyInvite";
import { GooglePlayLogo } from "@/components/ui/GooglePlayBadge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

// ---- Edit these ----
/** Google Play listing; leave empty until the app is live (the APK download is shown instead). */
const PLAY_URL = ""; // e.g. "https://play.google.com/store/apps/details?id=com.evenlysplit.app"
// ---------------------

/** Files live in public/apps/evenly-split/ and are served next to this page. */
const BASE = "/apps/evenly-split";
const APK_URL = `${BASE}/evenly.apk`;
const ICON = `${BASE}/evenly-icon.png`;

/** Checked at build time, so files added later appear on the next deploy without code changes. */
const hasFile = (file: string) => existsSync(path.join(process.cwd(), "public", file));

const features = [
  { title: "Split any way", text: "Equally, by exact amounts, percentages, shares or item by item." },
  { title: "Know who owes what", text: "Green is owed to you, red is what you owe, across all your groups." },
  { title: "Settle up in a tap", text: "Record a payment; the other person confirms and balances update for everyone." },
  { title: "Made for groups", text: "Invite friends with a link or QR code and get notified when anything changes." },
];

const legal = [
  { href: `${BASE}/privacy.html`, label: "Privacy Policy" },
  { href: `${BASE}/terms.html`, label: "Terms of Use" },
  { href: `${BASE}/delete-account.html`, label: "Delete your account" },
];

export function generateMetadata(): Metadata {
  return {
    title: { absolute: "Evenly Split – Shared Expenses" },
    description: "Evenly splits bills with flatmates, trips and friends. Add expenses, see who owes what and settle up.",
    alternates: { canonical: BASE },
    openGraph: {
      title: "Evenly – Split expenses with friends",
      description: "You’re invited to split expenses on Evenly.",
      url: `${site.url}${BASE}`,
      ...(hasFile(ICON) ? { images: [`${site.url}${ICON}`] } : {}),
    },
  };
}

export default function EvenlySplitPage() {
  const hasIcon = hasFile(ICON);
  const hasApk = hasFile(APK_URL);
  const getUrl = PLAY_URL || `${site.url}${APK_URL}`;
  const legalLinks = legal.filter((l) => hasFile(l.href));

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12 pt-28 md:pt-36">
      <Reveal>
        <Link href="/apps" className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          <ArrowLeft className="size-4" /> Our Apps
        </Link>
      </Reveal>

      <EvenlyInvite getUrl={getUrl} />

      <Reveal>
        <section className="relative grid items-center gap-7 overflow-hidden rounded-[28px] bg-[#26302A] px-6 py-8 text-white md:grid-cols-[1.3fr_1fr] md:p-12">
          <div aria-hidden className="absolute -left-24 -top-24 size-80 rounded-full bg-[#BADFC6]/10 blur-[90px]" />
          <div className="relative">
            <div className="flex items-center gap-3 text-xl font-semibold">
              {hasIcon && (
                <img src={ICON} alt="" width={48} height={48} className="size-12 rounded-xl" />
              )}
              Evenly
            </div>
            <h1 className="mb-3 mt-5 font-display text-[clamp(30px,6vw,44px)] font-semibold leading-[1.08] tracking-tight">
              Split expenses without the awkward maths.
            </h1>
            <p className="mb-6 text-[17px] leading-normal text-[#AFC2B4]">
              Add a bill, choose who shared it, and Evenly keeps one clear balance per person: for flatmates, trips, couples
              and teams.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PLAY_URL ? (
                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#BADFC6] px-6 font-semibold text-[#26302A] transition hover:-translate-y-0.5"
                >
                  <GooglePlayLogo className="size-5" /> Get it on Google Play
                </a>
              ) : hasApk ? (
                <a
                  href={APK_URL}
                  download
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#BADFC6] px-6 font-semibold text-[#26302A] transition hover:-translate-y-0.5"
                >
                  <Download className="size-4" /> Download for Android
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center rounded-full px-6 font-semibold text-white/80 ring-1 ring-inset ring-white/30">
                  Coming soon to Android
                </span>
              )}
            </div>
          </div>
          <div className="relative w-full max-w-[280px] justify-self-center rounded-[22px] bg-white p-[18px] text-center">
            <img src={`${BASE}/evenly-split-qr.svg`} alt="QR code for this page" className="block h-auto w-full" />
            <p className="mt-2.5 text-[13px] text-[#5E665F]">Scan with your phone camera to get Evenly</p>
          </div>
        </section>
      </Reveal>

      <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <div className="h-full rounded-[18px] border border-[#BADFC6]/15 bg-[#1d241f] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#BADFC6]/40">
              <h3 className="font-display text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#AFC2B4]">{f.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {!PLAY_URL && hasApk && (
        <p className="mt-7 text-center text-[13px] leading-relaxed text-zinc-500">
          Downloading the APK? Android will ask you to allow installs from your browser the first time. Evenly needs Android 7
          or newer.
        </p>
      )}
      {legalLinks.length > 0 && (
        <p className="mt-4 text-center text-[13px] text-zinc-500">
          {legalLinks.map((l, i) => (
            <span key={l.href}>
              {i > 0 && " · "}
              <a href={l.href} className="underline-offset-4 hover:text-white hover:underline">
                {l.label}
              </a>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
