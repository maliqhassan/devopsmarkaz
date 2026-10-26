import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      width={279}
      height={236}
      priority
      className={className}
    />
  );
}

/** Cube mark plus the two-tone "DEVOPS MARKAZ" wordmark from the brand logo. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={clsx("group flex items-center gap-3", className)} aria-label="DevOps Markaz Tech — Home">
      <LogoMark className="h-9 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
      <span className="font-display text-[17px] font-bold uppercase leading-none tracking-wide">
        <span className="text-brand-3">DevOps</span>
        <span className="text-white">Markaz</span>
        <span className="mt-1 block text-[9px] font-medium tracking-[0.42em] text-zinc-500">Tech Pvt. Ltd.</span>
      </span>
    </Link>
  );
}
