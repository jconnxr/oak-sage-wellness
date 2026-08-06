"use client";

import { useEffect, useState } from "react";

import { CALENDLY_EVENT_URL } from "@/lib/calendly";
import { cn } from "@/lib/utils";

type CalendlyEmbedProps = {
  /** Override the default event type URL. */
  eventUrl?: string;
  className?: string;
  title?: string;
};

function buildIframeSrc(eventUrl: string, embedDomain?: string) {
  const url = new URL(eventUrl);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("hide_gdpr_banner", "1");
  if (embedDomain) {
    url.searchParams.set("embed_domain", embedDomain);
  }
  return url.toString();
}

/**
 * Inline Calendly booking widget via iframe.
 * Uses a direct embed (not widget.js auto-scan) so it renders reliably
 * on first load and after client-side navigations in the App Router.
 */
export function CalendlyEmbed({
  eventUrl = CALENDLY_EVENT_URL,
  className,
  title = "Schedule an appointment",
}: CalendlyEmbedProps) {
  // Start without embed_domain for SSR; set host after mount to avoid hydration mismatch.
  const [src, setSrc] = useState(() => buildIframeSrc(eventUrl));

  useEffect(() => {
    setSrc(buildIframeSrc(eventUrl, window.location.host));
  }, [eventUrl]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      <iframe
        title={title}
        src={src}
        className="block min-h-[700px] w-full max-w-full border-0 bg-card"
        style={{ height: "700px" }}
        allow="payment"
      />
      <p className="border-t border-border px-4 py-3 text-center text-xs text-muted-foreground">
        Having trouble with the calendar?{" "}
        <a
          href={eventUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Open booking in a new tab
        </a>
        .
      </p>
    </div>
  );
}
