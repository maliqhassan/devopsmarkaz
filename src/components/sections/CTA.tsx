import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#6b6b6b_15%,#ffffff_30%,transparent_45%,transparent_60%,#a2a2a2_75%,transparent_90%)]"
          />
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-surface px-6 py-16 text-center md:px-16 md:py-24">
            <div aria-hidden className="absolute inset-0 bg-grid mask-radial opacity-60" />
            <div aria-hidden className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[100px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Have an idea? Let&apos;s build something <span className="text-gradient">remarkable</span> together.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted md:text-lg">
                Tell us about your project and get a free consultation and estimate within 24 hours.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact">
                  Start a Conversation <ArrowRight className="size-4" />
                </Button>
                <Button href={`mailto:${site.email}`} variant="ghost">
                  <Mail className="size-4" /> {site.email}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
