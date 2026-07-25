import Link from "next/link";

import { PlaceholderImage } from "@/components/placeholder-image";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "Locally Owned in Edmond, OK",
  "US-Sourced Peptides",
  "Real Clinic, Real Support",
] as const;

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
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-charcoal/25"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-14 md:pb-20">
        <p className="font-sans text-sm tracking-[0.2em] text-cream/85 uppercase">
          Oak and Sage Wellness Center
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-medium tracking-tight text-cream md:text-5xl lg:text-6xl">
          Oklahoma City&apos;s Local, Trusted Source for Peptides
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/85">
          We&apos;re a real wellness clinic in Edmond, OK — not an anonymous
          online seller. Order online in minutes, or visit us for the full
          experience, including a free body scan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-11 bg-cream px-6 text-charcoal hover:bg-cream/90"
          >
            <Link href="/shop">Shop Online</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 border-cream/55 bg-transparent px-6 text-cream hover:bg-cream/10 hover:text-cream"
          >
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>

        <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2.5 text-sm text-cream/90"
            >
              <span
                className="size-1.5 shrink-0 rounded-full bg-oak"
                aria-hidden
              />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
