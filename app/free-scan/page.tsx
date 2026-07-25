import type { Metadata } from "next";

import { CalendlyEmbed } from "@/components/calendly-embed";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CALENDLY_EVENT_URL } from "@/lib/calendly";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";
import { siteContact } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Free Body Scan",
  description: `Get your free 60-second body scan at ${SITE_NAME} in ${SITE_LOCATION} — 40 metrics, a 1-page report, and app tracking. No cost, no obligation. Book your appointment online.`,
  path: "/free-scan",
});

const valuePoints = [
  { label: "Free", detail: "No cost to you" },
  { label: "Takes 60 Seconds", detail: "In and out fast" },
  { label: "No Obligation", detail: "Just clarity on your health" },
] as const;

export default function FreeScanLandingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-10 pb-16 md:pt-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Get Your Free 60-Second Body Scan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A 60-second scan reads 40 metrics and includes a 1-page report with
          free personal app tracking — no cost, no obligation.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <PlaceholderImage
          slot="free-scan-hero"
          priority
          className="rounded-xl"
        />
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {valuePoints.map((point) => (
          <li
            key={point.label}
            className="rounded-xl border border-border bg-card px-4 py-4 text-center"
          >
            <p className="font-display text-lg font-medium tracking-tight text-foreground">
              {point.label}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{point.detail}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <h2 className="font-display mb-4 text-center text-2xl font-medium tracking-tight text-foreground">
          Book Your Free Scan
        </h2>
        <CalendlyEmbed eventUrl={CALENDLY_EVENT_URL} />
      </div>

      <section className="mt-14 border-t border-border pt-10 text-center sm:text-left">
        <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
          {SITE_NAME}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Personalized, data-driven treatments designed to support performance,
          restore vitality, and improve overall well-being — bridging advanced
          clinical science and restorative wellness in {SITE_LOCATION}.
        </p>
        <div className="mt-5 space-y-1 text-sm text-muted-foreground">
          <p>{siteContact.addressLines.join(", ")}</p>
          <p>
            <a
              href={`tel:${siteContact.phones[0].replace(/\D/g, "")}`}
              className="transition-colors hover:text-primary"
            >
              {siteContact.phones[0]}
            </a>
          </p>
          <p>{siteContact.hours.join(" · ")}</p>
        </div>
      </section>
    </div>
  );
}
