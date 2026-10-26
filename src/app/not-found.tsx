import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden pt-24 text-center">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial" />
      <div className="container-x">
        <p className="text-gradient font-display text-[8rem] font-bold leading-none md:text-[12rem]">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white">This page drifted off the grid</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">
            <ArrowLeft className="size-4" /> Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
