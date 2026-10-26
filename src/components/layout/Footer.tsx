import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/SocialIcons";
import { navLinks, services, site } from "@/lib/site";

const socials = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.whatsapp, label: "WhatsApp", Icon: WhatsappIcon },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-surface/50">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            We build innovative software, scalable solutions and digital experiences that help businesses grow.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:-translate-y-1 hover:border-brand-2/50 hover:text-brand-2"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-muted transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-muted transition hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-2" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 text-muted transition hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-2" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-2" />
              {site.location}
            </li>
          </ul>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="container-x relative">
        <p
          aria-hidden
          className="select-none bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-center font-display text-[16vw] font-bold leading-none tracking-tighter text-transparent lg:text-[11rem]"
        >
          MARKAZ
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Crafted with care in Islamabad, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
