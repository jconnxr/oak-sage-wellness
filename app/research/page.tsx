import Image from "next/image";
import Link from "next/link";
import { FileCheck, MapPin, Snowflake } from "lucide-react";

import { ComplianceBanner } from "@/components/research/ComplianceBanner";
import { EmailCapture } from "@/components/research/EmailCapture";
import { HeroVialMedia } from "@/components/research/HeroVialMedia";
import { SpecCard } from "@/components/research/SpecCard";
import { StorefrontCTA } from "@/components/research/StorefrontCTA";
import { RESEARCH_MEDIA } from "@/lib/research";

const MEDIA = RESEARCH_MEDIA;

const specs = [
  { value: "≥98%", label: "Verified Purity" },
  { value: "77", label: "Research Compounds" },
  { value: "24 hr", label: "Domestic Dispatch" },
  { value: "Every Batch", label: "Certificate of Analysis" },
] as const;

const shippingPoints = [
  {
    icon: FileCheck,
    title: "Certificate of Analysis",
    body: "Third-party analytical documentation traceable to the specific batch in the shipment. Purity, identity, and mass spectrometry confirmation.",
  },
  {
    icon: Snowflake,
    title: "Lyophilized & Sealed",
    body: "Supplied as a lyophilized powder in sealed vials. Stability-preserving packaging for laboratory storage and handling.",
  },
  {
    icon: MapPin,
    title: "Domestic Sourcing",
    body: "Sourced and shipped within the United States. No transshipment, no repackaging in transit.",
  },
] as const;

export default function ResearchPage() {
  return (
    <>
      {/* A. Minimal sticky header */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/research"
            className="inline-flex items-center"
            aria-label="Oak & Sage Wellness Center — Research"
          >
            <Image
              src="/images/logo.png"
              alt="Oak & Sage Wellness Center"
              width={77}
              height={44}
              priority
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-xs tracking-wide text-neutral-400 sm:text-sm">
            Edmond, OK
          </p>
        </div>
      </header>

      {/* B. Compliance banner — directly beneath header, always in first viewport */}
      <ComplianceBanner />

      <main>
        {/* C. Hero */}
        <section className="border-b border-neutral-900 py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl lg:leading-tight">
                Research-Grade Compounds. Documented, Verified, Shipped From the
                USA.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                77 research compounds. Third-party certificate of analysis on
                every batch. Sourced and dispatched domestically.
              </p>
              <div className="mt-8">
                <StorefrontCTA label="View Full Catalog →" variant="primary" />
              </div>
              <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-500">
                Materials supplied for laboratory research purposes only. Not
                intended for human or veterinary use.
              </p>
            </div>
            <HeroVialMedia />
          </div>
        </section>

        {/* D. Spec strip */}
        <section
          aria-label="Product specifications"
          className="border-b border-neutral-900 py-12 lg:py-16"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 lg:grid-cols-4 lg:gap-4">
            {specs.map((spec) => (
              <SpecCard key={spec.label} value={spec.value} label={spec.label} />
            ))}
          </div>
        </section>

        {/* E. What ships with every order */}
        <section className="border-b border-neutral-900 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-medium tracking-tight text-neutral-100 sm:text-3xl">
              What ships with every order
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {shippingPoints.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon
                    className="size-7 text-sky-400"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-medium tracking-tight text-neutral-100">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F. COA explainer */}
        <section className="border-b border-neutral-900 py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 lg:mx-0">
              <Image
                src={MEDIA.coaSample.src}
                alt={MEDIA.coaSample.alt}
                width={MEDIA.coaSample.width}
                height={MEDIA.coaSample.height}
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 380px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-neutral-100 sm:text-3xl">
                Every Batch Is Documented
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-400">
                <p>
                  A certificate of analysis is the analytical record for a
                  specific production batch. It reports the measured purity of
                  the material, confirms molecular identity by mass
                  spectrometry, and ties both results to a traceable batch
                  identifier.
                </p>
                <p>
                  Documentation is available for the compounds in the catalog.
                  If a supplier cannot produce batch-level analytical data for
                  the material shipped, that material is undocumented.
                </p>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-neutral-500">
                Analytical documentation describes material composition and
                purity only. It is not a statement of suitability for any use in
                humans or animals.
              </p>
            </div>
          </div>
        </section>

        {/* G. Catalog preview */}
        <section className="border-b border-neutral-900 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-medium tracking-tight text-neutral-100 sm:text-3xl">
              77 Compounds. One Documented Source.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
              The catalog spans research peptides, blends, and laboratory
              consumables — from single-compound vials to multi-component
              research preparations.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {MEDIA.catalog.map((item) => (
                <li key={item.name}>
                  <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={800}
                      loading="lazy"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 font-mono text-xs tracking-wide text-neutral-300">
                    {item.name}{" "}
                    <span className="text-neutral-500">{item.amount}</span>
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <StorefrontCTA
                label="Browse the Full Catalog →"
                variant="secondary"
              />
            </div>
          </div>
        </section>

        {/* H. Email capture */}
        <section className="border-b border-neutral-900 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-2xl font-medium tracking-tight text-neutral-100 sm:text-3xl">
              Batch documentation and catalog updates
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
              Enter an email address to receive catalog updates and new batch
              documentation notices.
            </p>
            <div className="mt-8">
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* I. Final CTA band */}
        <section className="border-b border-neutral-900 bg-neutral-900 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-2xl font-medium tracking-tight text-neutral-100 sm:text-3xl">
              View the full catalog
            </h2>
            <div className="mt-8">
              <StorefrontCTA label="Go to Catalog →" variant="primary" />
            </div>
            <p className="mt-5 text-xs tracking-wide text-neutral-500 uppercase">
              Research Use Only. Not for human consumption.
            </p>
          </div>
        </section>
      </main>

      {/* J. Minimal legal footer */}
      <footer className="py-12 lg:py-14">
        <div className="mx-auto max-w-6xl space-y-6 px-6 text-center text-sm text-neutral-500 sm:text-left">
          <p className="text-neutral-400">
            Oak &amp; Sage Wellness Center · 15812 N Pennsylvania Ave, Suite 3,
            Edmond, OK 73013
          </p>
          <p>
            <a
              href="mailto:support@oakandsagewellnesscenter.com"
              className="text-neutral-400 transition-colors hover:text-sky-300"
            >
              support@oakandsagewellnesscenter.com
            </a>
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-neutral-500">
            All materials are supplied strictly for laboratory research
            purposes. Not for human consumption, veterinary use, diagnostic, or
            therapeutic application. These statements have not been evaluated by
            the Food and Drug Administration. These materials are not intended
            to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:justify-start">
            <Link
              href="/privacy-policy"
              className="text-neutral-400 underline-offset-4 hover:text-sky-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-400 underline-offset-4 hover:text-sky-300 hover:underline"
            >
              Terms
            </Link>
          </p>
          <p className="text-xs text-neutral-600">
            © 2026 Oak &amp; Sage Wellness Center
          </p>
        </div>
      </footer>
    </>
  );
}
