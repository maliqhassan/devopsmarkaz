import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with DevOps Markaz Tech. Email ${site.email} or call ${site.phone} for a free consultation.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  { Icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { Icon: MapPin, label: "Visit us", value: site.location },
  { Icon: Clock, label: "Working hours", value: "Mon – Fri, 9:00 AM – 6:00 PM (PKT)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s talk about your <span className="text-gradient">next big idea</span>
          </>
        }
        text="Tell us what you're building. We'll get back to you within 24 hours with next steps and a free consultation."
      />

      <section className="container-x grid gap-8 pb-20 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-4">
          <Stagger className="space-y-4">
            {channels.map(({ Icon, label, value, href }) => {
              const content = (
                <div className="glass group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-brand-2/30">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-3 to-brand-2 text-ink transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
                    <p className="mt-1 truncate font-medium text-white">{value}</p>
                  </div>
                </div>
              );
              return (
                <StaggerItem key={label}>
                  {href ? (
                    <a href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-6">
              <p className="font-display font-semibold text-white">Prefer to chat?</p>
              <p className="mt-1 text-sm text-muted">Message us on WhatsApp or follow us on social media.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  <WhatsappIcon className="size-4" /> WhatsApp
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-brand-2/50 hover:text-brand-2"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-brand-2/50 hover:text-brand-2"
                >
                  <FacebookIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left">
          <div className="relative rounded-[2rem] border border-line bg-surface p-6 sm:p-10">
            <div aria-hidden className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-brand-2 to-transparent" />
            <h2 className="font-display text-2xl font-semibold text-white">Send us a message</h2>
            <p className="mb-8 mt-2 text-sm text-muted">We usually reply within 24 hours and never share your details.</p>
            <ContactForm />
          </div>
        </Reveal>
      </section>

      <section className="container-x py-12">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line">
            <iframe
              title="DevOps Markaz Tech location — Islamabad"
              src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
              className="h-80 w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="text-gradient">Answers.</span>
            </>
          }
          text="Can't find what you're looking for? Drop us a line and we'll get back to you quickly."
        />
        <Reveal delay={0.1}>
          <FAQ />
        </Reveal>
      </section>
    </>
  );
}
