import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { services } from "@/lib/site";

export function ServicesGrid() {
  return (
    <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ slug, title, icon: Icon, summary }, i) => (
        <StaggerItem key={slug}>
          <Link href={`/services#${slug}`} className="block h-full">
            <SpotlightCard>
              <div className="flex h-full flex-col p-7 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand/25 to-brand-2/10 text-brand-2 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors group-hover:text-brand-2">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </SpotlightCard>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
