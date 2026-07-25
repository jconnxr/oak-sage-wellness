"use client";

import Script from "next/script";

/**
 * Inline Calendly embed for appointment booking.
 *
 * TODO: replace with real Calendly event URL from Colby/Jason's account
 */
const DEFAULT_CALENDLY_EVENT_TYPE_URL =
  "https://calendly.com/oak-and-sage-placeholder/consultation";

type CalendlyEmbedProps = {
  /** Override the default consultation event type URL. */
  eventUrl?: string;
};

export function CalendlyEmbed({
  eventUrl = DEFAULT_CALENDLY_EVENT_TYPE_URL,
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
