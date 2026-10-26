import { Counter } from "@/components/ui/Counter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="container-x py-20">
      <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <StaggerItem key={s.label} className="group relative bg-ink p-8 text-center md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="font-display text-4xl font-semibold text-white md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
