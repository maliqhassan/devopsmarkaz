import clsx from "clsx";

export function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#00d7fe" d="M3.61 1.81 13.79 12 3.61 22.19A1.5 1.5 0 0 1 3 20.98V3.02c0-.49.23-.93.61-1.21Z" />
      <path fill="#00f076" d="m16.81 8.98-3.02 3.02L3.61 1.81c.42-.31 1-.38 1.53-.1l11.67 7.27Z" />
      <path fill="#ff3a44" d="M16.81 15.02 5.14 22.29c-.53.28-1.11.21-1.53-.1L13.79 12l3.02 3.02Z" />
      <path fill="#ffd400" d="m20.4 10.7-3.59-1.72L13.79 12l3.02 3.02 3.59-1.72a1.5 1.5 0 0 0 0-2.6Z" />
    </svg>
  );
}

/** "Get it on Google Play" download button. */
export function GooglePlayBadge({ href, className }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black px-5 py-3 text-white shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-white/40",
        className,
      )}
    >
      <GooglePlayLogo className="size-7 transition-transform duration-500 group-hover:scale-110" />
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium uppercase tracking-wider text-zinc-300">Get it on</span>
        <span className="mt-1 block font-display text-xl font-semibold tracking-tight">Google Play</span>
      </span>
    </a>
  );
}
