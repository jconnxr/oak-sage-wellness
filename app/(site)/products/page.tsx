import type { Metadata } from "next";
import Link from "next/link";

import { CatalogShopCard } from "@/components/products/catalog-shop-card";
import { ProductCard } from "@/components/products/product-card";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { getImage } from "@/lib/images";
import {
  CATALOG_COMPOUND_COUNT,
  FEATURED_PRODUCTS,
  PRODUCT_CATEGORIES,
  PRODUCTS_COMPLIANCE,
} from "@/lib/products";
import { getSiteUrl, pageMetadata, SITE_NAME } from "@/lib/seo";
import { shopOnlineUrl } from "@/lib/site";

const PAGE_PATH = "/products";
const BOOK_CONSULT_HREF = "/contact";
const BOOK_SCAN_HREF = "/services/body-composition";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `Peptides & Wellness Products | ${SITE_NAME}, Edmond OK`,
    description: `Research peptides, non-prescription support formulas, and recovery products. Shop ${CATALOG_COMPOUND_COUNT} compounds online with batch documentation, or visit our Edmond, Oklahoma clinic.`,
    path: PAGE_PATH,
    absoluteTitle: true,
  }),
  robots: { index: true, follow: true },
};

function ProductsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured products",
    itemListElement: FEATURED_PRODUCTS.map((product, index) => {
      const image = getImage(product.image);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: `${getSiteUrl()}${image.src}`,
          brand: {
            "@type": "Brand",
            name: SITE_NAME,
          },
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ProductsPage() {
  return (
    <>
      <ProductsJsonLd />

      {/* A. Hero */}
      <Section className="py-16 md:py-24">
        <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
          Products
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Clinical-Quality Products, Sourced and Supported Locally
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Non-prescription support formulas available here, plus{" "}
          {CATALOG_COMPOUND_COUNT} compounds in our online catalog — shop online
          or visit our Edmond clinic.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="min-h-11 px-6">
            <a
              href={shopOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop the Full Catalog →
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-11 px-6">
            <Link href={BOOK_CONSULT_HREF}>Book a Free Consultation →</Link>
          </Button>
        </div>
      </Section>

      {/* B. Two paths */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)] pt-0 md:pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              Order Online
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
              Browse {CATALOG_COMPOUND_COUNT} compounds with third-party
              certificates of analysis on every batch. Sourced and shipped from
              the USA.
            </p>
            <Button asChild className="mt-6 min-h-11 w-full sm:w-auto">
              <a
                href={shopOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Online →
              </a>
            </Button>
          </div>

          <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              Visit the Clinic
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
              Start with a free 3D body scan, review your results with our team,
              and build a plan around what you&apos;re actually trying to do.
            </p>
            <Button asChild className="mt-6 min-h-11 w-full sm:w-auto">
              <Link href={BOOK_SCAN_HREF}>Book a Free Scan →</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* C. Featured products + catalog CTA */}
      <Section>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Featured Products
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Clinic-ready support formulas below — peptides and the rest of our{" "}
          {CATALOG_COMPOUND_COUNT} compound catalog are available online.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <CatalogShopCard />
        </div>
      </Section>

      {/* E. Category browse */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Explore the Full Catalog
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {CATALOG_COMPOUND_COUNT} research compounds and support products, all
          with batch documentation.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category) => (
            <li key={category.label}>
              <a
                href={category.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary md:text-base"
              >
                {category.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button asChild size="lg" className="min-h-11 px-6">
            <a
              href={shopOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Products →
            </a>
          </Button>
        </div>
      </Section>

      {/* G. Closing CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-base text-primary-foreground/85 md:text-lg">
            Book a free 3D body scan. We&apos;ll walk through your results and
            figure out what actually fits — no pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="min-h-11 px-6"
            >
              <Link href={BOOK_SCAN_HREF}>Book a Free Scan</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a
                href={shopOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Online
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Compliance footer */}
      <div className="border-t border-border bg-background px-6 py-8">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-muted-foreground md:text-sm">
          {PRODUCTS_COMPLIANCE}
        </p>
      </div>
    </>
  );
}
