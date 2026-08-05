import type { Metadata } from "next";
import Link from "next/link";

import { getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `Privacy Policy — ${SITE_NAME}` },
  description: `Privacy policy for ${SITE_NAME}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `Privacy Policy — ${SITE_NAME}`,
    description: `Privacy policy for ${SITE_NAME}.`,
    url: `${getSiteUrl()}/privacy-policy`,
    siteName: SITE_NAME,
    type: "website",
  },
};

/** Minimal privacy page — no main-site marketing chrome. */
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-full bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <p className="text-sm font-medium text-neutral-300">{SITE_NAME}</p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-medium tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-500">Last updated: August 2026</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-400">
          <p>
            Oak &amp; Sage Wellness Center (&quot;Oak &amp; Sage,&quot;
            &quot;we,&quot; &quot;us&quot;) operates websites and related online
            storefronts. This policy describes how information is collected and
            used in connection with those properties.
          </p>
          <h2 className="text-lg font-medium text-neutral-200">
            Information collected
          </h2>
          <p>
            Email addresses submitted through catalog-update forms are used to
            send catalog and batch-documentation notices. Contact forms may
            collect name, email, phone, and message content for correspondence
            only. Payment and order data on the partner storefront are processed
            by that storefront under its own policies.
          </p>
          <h2 className="text-lg font-medium text-neutral-200">
            How information is used
          </h2>
          <p>
            Information is used to respond to inquiries, deliver requested
            notices, operate and improve the site, and meet legal obligations.
            Advertising pixels may record page views and catalog interactions
            without collecting health conditions or medical attributes.
          </p>
          <h2 className="text-lg font-medium text-neutral-200">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a
              href="mailto:support@oakandsagewellnesscenter.com"
              className="text-sky-400 underline-offset-4 hover:underline"
            >
              support@oakandsagewellnesscenter.com
            </a>
          </p>
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          <Link href="/terms" className="text-sky-400 hover:underline">
            Terms
          </Link>
        </p>
      </main>
    </div>
  );
}
