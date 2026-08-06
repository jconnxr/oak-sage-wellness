import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlyEmbed } from "@/components/calendly-embed";
import { Fit3dFaqAccordion } from "@/components/fit3d-faq-accordion";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CALENDLY_EVENT_URL } from "@/lib/calendly";
import {
  FIT3D_FAQS,
  FIT3D_MEDIA,
  FIT3D_METRICS,
  FIT3D_STEPS,
} from "@/lib/fit3d";
import { getSiteUrl, pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

const MEDIA = FIT3D_MEDIA;
const PAGE_PATH = "/services/body-composition";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `3D Body Scan in Edmond, OK | ${SITE_NAME}`,
    description:
      "Free one-minute 3D body scan with 400+ measurements. See body fat, lean mass, and waist circumference in a full-color 3D avatar, and track changes over time. Edmond, Oklahoma.",
    path: PAGE_PATH,
    absoluteTitle: true,
  }),
  robots: { index: true, follow: true },
};

const relatedServices = [
  {
    href: "/services/glp-3-peptides",
    title: "GLP-3 / Metabolic",
    description: "Explore metabolic program options after your baseline scan.",
  },
  {
    href: "/services/skin-tightening",
    title: "Skin Tightening",
    description: "In-clinic skin tightening treatments at our Edmond location.",
  },
  {
    href: "/services/pain-management",
    title: "Pain Management",
    description: "Non-invasive care pathways for structural discomfort.",
  },
  {
    href: "/products",
    title: "Products",
    description: "Browse supportive products available through Oak & Sage.",
  },
] as const;

function Fit3dJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3D Body Scan",
    description:
      "Free one-minute SNAP by Fit3D body scan with 400+ measurements and a full-color 3D avatar at Oak & Sage Wellness Center in Edmond, Oklahoma.",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: "15812 N Pennsylvania Ave, Suite 3",
        addressLocality: "Edmond",
        addressRegion: "OK",
        postalCode: "73013",
        addressCountry: "US",
      },
      areaServed: SITE_LOCATION,
    },
    areaServed: SITE_LOCATION,
    url: `${getSiteUrl()}${PAGE_PATH}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "First 3D body scan is free",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function BodyCompositionPage() {
  return (
    <>
      <Fit3dJsonLd />

      {/* A. Hero */}
      <Section className="pb-12 md:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
              Services
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              See Your Body in 3D
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A one-minute scan. 400+ measurements. A full-color 3D avatar you
              can compare against every scan that follows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-11 px-6">
                <a href="#book-scan">Book Your Free Scan</a>
              </Button>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                How it works ↓
              </a>
            </div>
            <p className="mt-6 flex flex-wrap items-center gap-3 text-xs tracking-wide text-muted-foreground uppercase">
              <Image
                src={MEDIA.logo.src}
                alt={MEDIA.logo.alt}
                width={MEDIA.logo.width}
                height={MEDIA.logo.height}
                className="h-5 w-auto opacity-80"
              />
              <span>Powered by SNAP by Fit3D · 5 million+ scans worldwide</span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src={MEDIA.scanning.src}
                alt={MEDIA.scanning.alt}
                width={MEDIA.scanning.width}
                height={MEDIA.scanning.height}
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* B. What your scan measures */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What Your Scan Measures
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each scan captures a shared set of core metrics — framed as
            measurements, not diagnoses.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FIT3D_METRICS.map((metric, index) => (
            <Reveal key={metric.name} delay={0.04 * index}>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase">
                  {metric.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {metric.explanation}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8" delay={0.1}>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Plus 400+ additional measurements — circumferences, lengths, widths,
            volumes, and surface areas across your whole body.
          </p>
        </Reveal>
      </Section>

      {/* C. How it works */}
      <Section id="how-it-works">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FIT3D_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={0.05 * index}>
              <li className="relative">
                <span className="font-mono text-sm font-medium tracking-wide text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* D. Progress over time */}
      <Section className="bg-cream">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            The Real Value Is the Second Scan
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A single scan is a starting point. The comparison is where it gets
              useful.
            </p>
            <p>
              Come back in four to eight weeks and your scans sit side by side —
              same angles, same measurements, same avatar — so you can see
              exactly what changed and where, including changes a bathroom scale
              would miss entirely.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <figure>
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                <Image
                  src={MEDIA.before.src}
                  alt={MEDIA.before.alt}
                  width={MEDIA.before.width}
                  height={MEDIA.before.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium tracking-wide text-red-700/90 uppercase">
                Before
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.06}>
            <figure>
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                <Image
                  src={MEDIA.after.src}
                  alt={MEDIA.after.alt}
                  width={MEDIA.after.width}
                  height={MEDIA.after.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium tracking-wide text-green-700/90 uppercase">
                After
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Sample scan comparison provided by Fit3D. Individual results vary.
        </p>
      </Section>

      {/* E. What we do with your results */}
      <Section>
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Numbers Are a Starting Point, Not a Plan
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Your scan gives us a shared, objective baseline. From there we talk
            through what you&apos;re actually trying to accomplish and which of
            our services fit — whether that&apos;s a metabolic program, skin
            tightening, pain management, or simply scanning again in six weeks
            to track where things are heading.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {relatedServices.map((service, index) => (
            <Reveal key={service.href} delay={0.04 * index}>
              <Link href={service.href} className="group block h-full">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-display text-xl transition-colors group-hover:text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* F. Accuracy */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            How Accurate Is It?
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Body composition results land within 3–5% of a DEXA scan, and
              circumference measurements are accurate to roughly half a
              centimeter. The underlying model was built on more than five
              million scans across 80 countries.
            </p>
            <p>
              It is a measurement tool, not a diagnostic device. Your scan tells
              you what your body is doing — it does not diagnose or treat any
              condition.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* G. FAQ */}
      <Section>
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal className="mt-8" delay={0.05}>
          <Fit3dFaqAccordion items={FIT3D_FAQS} />
        </Reveal>
      </Section>

      {/* H. Closing CTA + Calendly */}
      <Section
        id="book-scan"
        className="scroll-mt-20 bg-primary text-primary-foreground"
      >
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Book your free 3D body scan
            </h2>
            <p className="mt-4 text-base text-primary-foreground/85 md:text-lg">
              Edmond, OK · About 15 minutes · No cost, no obligation
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 h-11 px-6"
            >
              <a href="#calendly-embed">Book Your Free Scan</a>
            </Button>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs tracking-wide text-primary-foreground/70 uppercase">
              <Image
                src={MEDIA.logo.src}
                alt={MEDIA.logo.alt}
                width={MEDIA.logo.width}
                height={MEDIA.logo.height}
                className="h-5 w-auto brightness-0 invert opacity-80"
              />
              <span>Powered by SNAP by Fit3D</span>
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="calendly-embed" className="scroll-mt-20">
        <Reveal>
          <h2 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Choose a time
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Scheduling opens in the calendar below — same booking flow used
            across Oak &amp; Sage.
          </p>
        </Reveal>
        <Reveal className="mt-8" delay={0.05}>
          <CalendlyEmbed eventUrl={CALENDLY_EVENT_URL} />
        </Reveal>
      </Section>
    </>
  );
}
