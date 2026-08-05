import type { Metadata } from "next";
import Link from "next/link";

import { PhotoCollage } from "@/components/photo-collage";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";
import { shopOnlineUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Shop Peptides Online",
  description: `Order the same peptides used in-clinic at ${SITE_NAME} in ${SITE_LOCATION} — sourced from our trusted US lab and available online through our verified partner portal.`,
  path: "/shop",
});

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

const inPersonOptions = [
  {
    title: "Free Body Scan",
    description:
      "A quick in-clinic body composition scan to understand your baseline before you decide next steps.",
    href: "/body-scan",
  },
  {
    title: "Skin Tightening",
    description:
      "In-clinic skin tightening treatments at our Edmond location — explore options with our team.",
    href: "/services/skin-tightening",
  },
  {
    title: "Virtual Doctor Visit",
    description:
      "Talk to a licensed physician by video before starting any peptide or GLP program.",
    // TODO: build a dedicated telemedicine page once we finalize that offering's details
    href: "/contact",
  },
] as const;

function ShopNowButton({ className }: { className?: string }) {
  return (
    <Button asChild size="lg" className={className ?? "h-11 px-6"}>
      <a
        href={shopOnlineUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop Now
      </a>
    </Button>
  );
}

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pb-10 md:pb-12">
        <Reveal>
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Peptide Shop
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Order Direct From Our Trusted US Source
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            These are the same peptides used in-clinic at Oak &amp; Sage —
            sourced from the same US lab we rely on for patient care, now
            available to order online through our verified partner portal.
          </p>
          <ShopNowButton className="mt-8 h-11 px-6" />
        </Reveal>
      </Section>

      {/* Why Order Direct */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Why Order Direct
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A clear path from our clinic to your door — built around trust,
            sourcing transparency, and a real local team behind the brand.
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
          <ShopNowButton />
        </Reveal>
      </Section>

      {/* Who We Are */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
                Who We Are
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                The foundation for all your wellness goals
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Bridging the gap between advanced clinical science and
                restorative wellness to build a stronger, more vibrant version of
                you.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground/85">
                At Oak &amp; Sage Wellness Center, we believe wellness should
                never follow a one-size-fits-all approach. We provide
                personalized, data-driven treatments designed to support
                performance, restore vitality, and improve overall well-being.
                Inspired by the strength of the Oak and the healing wisdom of
                Sage, our center combines modern therapies with compassionate
                patient care in a premium environment.
              </p>
              <p className="mt-6 text-base font-medium leading-relaxed text-foreground">
                Located in Edmond, Oklahoma — proudly serving the Oklahoma City
                metro.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <PhotoCollage primary="home-who-1" secondary="home-who-2" />
          </Reveal>
        </div>
      </Section>

      {/* Prefer To Do This In Person? */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Prefer To Do This In Person?
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Online ordering is convenient — and our Edmond clinic is here when
            you want hands-on care, a scan, or a conversation first.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {inPersonOptions.map((option, index) => (
            <Reveal key={option.title} delay={0.05 * index}>
              <Link href={option.href} className="group block h-full">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-display text-xl transition-colors group-hover:text-primary">
                      {option.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed md:text-base">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Page-specific compliance disclaimer */}
      <Section className="pt-8 pb-16 md:pt-10 md:pb-20">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground md:text-sm">
            Products available through our affiliate partner are labeled for
            research use only (RUO) and are not intended to diagnose, treat,
            cure, or prevent any disease. This page is for informational purposes
            only and is not medical advice. Consult a licensed physician before
            starting any peptide or GLP program.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
