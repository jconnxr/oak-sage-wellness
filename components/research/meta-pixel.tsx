"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

/** Fire Meta Pixel events. Never pass health data, conditions, or user attributes. */
export function trackResearchPixel(
  event: "PageView" | "ViewContent" | "Lead" | "CatalogClick",
  params?: Record<string, string>,
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  if (event === "CatalogClick") {
    window.fbq("trackCustom", "CatalogClick", params);
    return;
  }

  if (event === "ViewContent") {
    window.fbq("track", "ViewContent", params);
    return;
  }

  window.fbq("track", event, params);
}

/**
 * Loads Meta Pixel when NEXT_PUBLIC_META_PIXEL_ID is set.
 * // TODO: set NEXT_PUBLIC_META_PIXEL_ID in the environment
 */
export function ResearchMetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    if (!pixelId) return;
    trackResearchPixel("PageView");
    trackResearchPixel("ViewContent", { content_category: "research_catalog" });
  }, [pixelId]);

  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel-research" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
