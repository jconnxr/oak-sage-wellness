import Link from "next/link";

import { PlaceholderImage } from "@/components/placeholder-image";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[min(88vh,52rem)] items-end overflow-hidden">
      <PlaceholderImage
        slot="hero-home"
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/80 via-charcoal/45 to-charcoal/20"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-16 md:pb-20">
        <p className="font-sans text-sm tracking-[0.2em] text-cream/85 uppercase">
          Oak and Sage Wellness Center
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-medium tracking-tight text-cream md:text-5xl lg:text-6xl">
          Introducing New GLP-3 Peptides Quad Agonist Formula
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/85">
          Advanced Wellness Center in Edmond, Oklahoma
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 h-11 bg-cream px-6 text-charcoal hover:bg-cream/90"
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
