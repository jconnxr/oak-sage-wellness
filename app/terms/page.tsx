import type { Metadata } from "next";
import Link from "next/link";

import { getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `Terms — ${SITE_NAME}` },
  description: `Terms of use for ${SITE_NAME}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms — ${SITE_NAME}`,
    description: `Terms of use for ${SITE_NAME}.`,
    url: `${getSiteUrl()}/terms`,
    siteName: SITE_NAME,
    type: "website",
  },
};

/** Minimal terms page — no main-site marketing chrome. */
export default function TermsPage() {
  return (
    <div className="min-h-full bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <p className="text-sm font-medium text-neutral-300">{SITE_NAME}</p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-medium tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-sm text-neutral-500">Last updated: August 2026</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-400">
          <p>
            Access to Oak &amp; Sage Wellness Center websites and related
            materials is subject to these terms. By using the site, visitors
            agree to these terms.
          </p>
          <h2 className="text-lg font-medium text-neutral-200">
            Research materials
          </h2>
          <p>
            Materials offered through the research catalog are supplied strictly
            for laboratory research purposes. They are not for human
            consumption, veterinary use, diagnostic, or therapeutic application.
            Statements on research pages have not been evaluated by the Food and
            Drug Administration. Materials are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
          <h2 className="text-lg font-medium text-neutral-200">
            Partner storefront
          </h2>
          <p>
            Purchases completed on the partner storefront are governed by that
            storefront&apos;s terms, payment processor policies, and shipping
            practices.
          </p>
          <h2 className="text-lg font-medium text-neutral-200">Contact</h2>
          <p>
            Questions:{" "}
            <a
              href="mailto:support@oakandsagewellnesscenter.com"
              className="text-sky-400 underline-offset-4 hover:underline"
            >
              support@oakandsagewellnesscenter.com
            </a>
          </p>
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          <Link
            href="/privacy-policy"
            className="text-sky-400 hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </main>
    </div>
  );
}
