import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { getSiteUrl, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} in ${SITE_LOCATION} — boutique medical wellness for GLP-3 peptides, body composition, skin tightening, and pain management.`,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: `${SITE_NAME} in ${SITE_LOCATION} — peptides, body composition, skin tightening, and pain management.`,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} in ${SITE_LOCATION}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: `${SITE_NAME} in ${SITE_LOCATION} — peptides, body composition, skin tightening, and pain management.`,
    images: ["/images/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
