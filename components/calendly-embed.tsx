"use client";

import Script from "next/script";

import { CALENDLY_EVENT_URL } from "@/lib/calendly";

type CalendlyEmbedProps = {
  /** Override the default event type URL. */
  eventUrl?: string;
};

/** Inline Calendly embed for appointment booking. */
export function CalendlyEmbed({
  eventUrl = CALENDLY_EVENT_URL,
}: CalendlyEmbedProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div
        className="calendly-inline-widget min-h-[700px] w-full"
        data-url={`${eventUrl}?hide_gdpr_banner=1`}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
