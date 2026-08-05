import type { Metadata } from "next";

import { ResearchMetaPixel } from "@/components/research/meta-pixel";
import { RESEARCH_MEDIA } from "@/lib/research";
import { getSiteUrl, SITE_NAME } from "@/lib/seo";

const title = "Research-Grade Compounds — Oak & Sage Wellness Center";
const description =
  "77 research compounds with third-party certificate of analysis on every batch. Sourced and shipped from the United States. Research use only, not for human consumption.";
const canonicalPath = "/research";
const canonicalUrl = `${getSiteUrl()}${canonicalPath}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: RESEARCH_MEDIA.og.src,
        width: RESEARCH_MEDIA.og.width,
        height: RESEARCH_MEDIA.og.height,
        alt: RESEARCH_MEDIA.og.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [RESEARCH_MEDIA.og.src],
  },
};

/**
 * Isolated chrome for the Meta paid-ad research landing page.
 * Intentionally does NOT import SiteHeader, SiteFooter, or any main-site nav.
 */
export default function ResearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-neutral-950 text-neutral-100 antialiased">
      <ResearchMetaPixel />
      {children}
    </div>
  );
}
