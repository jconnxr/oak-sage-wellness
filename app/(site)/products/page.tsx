import type { Metadata } from "next";
import Link from "next/link";

import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ImageSlot } from "@/lib/images";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";
import { shopOnlineUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: `${SITE_NAME} products in ${SITE_LOCATION} — natural weight loss toolkit and pain relief support without prescription injections.`,
  path: "/products",
});

const products = [
  {
    title: "GLP-3 Peptides Weight Loss Medication Toolkit",
    image: "product-toolkit" as ImageSlot,
    body: "This three-phase program combines a ketosis-support formula, an appetite-support blend, and a hunger-control supplement designed to work together. The system supports fat metabolism, helps manage cravings, and promotes steady energy to assist with consistent, sustainable weight management. The Toolkit includes clinically studied ingredients shown to support appetite control and waistline reduction in controlled trials. In one published 10-week randomized study, a key ingredient was associated with significant weight and waistline improvements. These science-based components are designed to support measurable progress without relying on prescription injections.",
    benefits: [
      "Supports Fat Metabolism",
      "Promotes Steady Energy",
      "Science-Based Ingredients",
      "Non-Prescription Approach",
    ],
  },
  {
    title: "GLP-3 Peptides Pain Relief Medication",
    image: "product-pain-relief" as ImageSlot,
    body: "This powerful product promotes the body's natural healing process from the pain that composes over 70% of all visits to a primary doctor. A natural and less dangerous alternative to opiate-based narcotics like Oxycodone.",
    benefits: [
      "Supports Natural Pain Relief",
      "Promotes Faster Recovery",
      "Natural Alternative",
      "Non-Addictive Support",
    ],
  },
] as const;

export default function ProductsPage() {
  return (
    <>
      <Section className="pb-10 md:pb-12">
        <Reveal>
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Products
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            The Natural Path to Sustainable Wellness
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Support your weight loss journey with a natural, science-based
            program designed to help manage appetite, boost energy, and promote
            long-term wellness.
          </p>
          <p className="mt-5 text-base text-foreground/85">
            Prefer to order online?{" "}
            <Link
              href={shopOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              Shop directly from our trusted source →
            </Link>
          </p>
        </Reveal>
        <Reveal className="mt-10" delay={0.08}>
          <PlaceholderImage slot="products-hero" className="rounded-xl" priority />
        </Reveal>
      </Section>

      {products.map((product, index) => (
        <Section
          key={product.title}
          className={
            index % 2 === 1
              ? "bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]"
              : undefined
          }
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={0.05}>
              <PlaceholderImage slot={product.image} className="rounded-xl" />
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {product.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {product.body}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.benefits.map((benefit) => (
                  <Card key={benefit} size="sm" className="py-3">
                    <CardHeader className="px-4 py-0">
                      <CardTitle className="text-sm font-medium">
                        {benefit}
                      </CardTitle>
                      <CardDescription className="sr-only">
                        Product benefit
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/*
                TODO — confirm whether brochure links should point to the
                franchisor's domain or be replaced with locally-hosted PDFs.
                Do not link to nuwavewellnessoc.com.
              */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="button" size="lg" className="h-11 px-6">
                  Read The Brochure
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="h-11 px-6"
                >
                  Download Brochure
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}
