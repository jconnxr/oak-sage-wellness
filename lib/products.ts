import type { ImageSlot } from "@/lib/images";
import { shopOnlineUrl } from "@/lib/site";

/** Featured products for /products — grid stays ready for more cards. */
export type FeaturedProduct = {
  id: string;
  name: string;
  /** One-line teaser shown on the card face. */
  teaser: string;
  /** Full description behind Learn more. */
  description: string;
  benefits: readonly string[];
  image: ImageSlot;
};

/** In-clinic / non-prescription featured products (peptides live in the online catalog). */
export const FEATURED_PRODUCTS: readonly FeaturedProduct[] = [
  {
    id: "weight-loss-toolkit",
    name: "Weight Loss Medication Toolkit",
    teaser:
      "Three-phase non-prescription system for appetite and metabolism support.",
    description:
      "A three-phase, non-prescription system: a ketosis-support formula, an appetite-support blend, and a hunger-control supplement designed to be used together.",
    benefits: [
      "Ketosis Support",
      "Appetite Support",
      "Hunger Control",
    ],
    image: "product-toolkit",
  },
  {
    id: "non-narcotic-relief",
    name: "Non-Narcotic Relief",
    teaser:
      "Non-prescription, pharmaceutical-grade recovery support in a 60-capsule formula.",
    description:
      "A non-prescription, pharmaceutical-grade formula for everyday recovery support. 60 capsules. Gluten free, vegan, GMO free.",
    benefits: [
      "Non-Prescription",
      "Pharmaceutical Grade",
      "Gluten Free, Vegan, GMO Free",
    ],
    image: "product-pain-relief",
  },
] as const;

export const CATALOG_COMPOUND_COUNT = "59+" as const;

export const PRODUCT_CATEGORIES = [
  { label: "Metabolic Support", href: shopOnlineUrl },
  { label: "Recovery & Repair", href: shopOnlineUrl },
  { label: "Peptide Blends", href: shopOnlineUrl },
  { label: "Dissolvable Melts", href: shopOnlineUrl },
  { label: "Longevity & NAD+", href: shopOnlineUrl },
  { label: "Supplies & Consumables", href: shopOnlineUrl },
] as const;

export const PRODUCTS_COMPLIANCE =
  "Products are provided for informational purposes only. These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.";
