import type { Metadata } from "next";

export const SITE_NAME = "Oak & Sage Wellness Center";
export const SITE_LOCATION = "Edmond, Oklahoma";

/** Public site origin for canonical/OG URLs. Override via NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.oakandsage.com"
  );
}

const defaultOgImage = {
  url: "/images/og-default.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} in ${SITE_LOCATION}`,
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use a full document title without the "| Oak & Sage…" template. */
  absoluteTitle?: boolean;
};

/** Per-page title, description, canonical, and Open Graph / Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = `${getSiteUrl()}${path}`;
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}
