import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

/** Same credibility points used on /shop — surfaced on the homepage for first-visit trust. */
const trustPoints = [
  {
    title: "Same US lab our clinic uses",
    body: "The peptides available online are sourced from the same US lab we use for in-clinic care — so you are ordering from the supply chain we already trust.",
  },
  {
    title: "Transparent, US-based supply chain",
    body: "Clear sourcing and a domestic supply path you can understand before you checkout — not an anonymous overseas marketplace.",
  },
  {
    title: "Secure partner checkout",
    body: "Purchases are completed through our verified partner portal with secure checkout — a dedicated storefront connected to our clinic.",
  },
  {
    title: "Backed by a real clinic",
    body: "Oak & Sage is a brick-and-mortar wellness center in Edmond, Oklahoma — not an anonymous online seller with no face behind the brand.",
  },
] as const;

export function HomeCredibilitySection() {
  return (
    <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
      <Reveal>
        <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
          Why Order With Us
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          A credible local clinic — with a clear path to order online
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Most visitors already know what they&apos;re looking for. Here&apos;s
          why Oak &amp; Sage is a safer, clearer place to get it — online or
          in person.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 md:gap-8">
        {trustPoints.map((point, index) => (
          <Reveal key={point.title} delay={0.05 * index}>
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {point.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12" delay={0.15}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="h-11 px-6">
            <Link href="/shop">Shop Online</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-6">
            <Link href="/body-scan">Book a Free Body Scan</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
