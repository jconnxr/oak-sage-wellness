/** Research landing page — media paths and storefront URL (single source). */

export const RESEARCH_STOREFRONT_URL =
  "https://mypeptide.net/d/oakandsagewellnesscenter/products?utm_source=meta&utm_medium=cpc&utm_campaign=research_bridge" as const;

/**
 * Swap placehold.co URLs for local files under /public/research/ when assets are ready.
 * Keep filenames: hero-vial.jpg, coa-sample.jpg, catalog-01…08.jpg, og-research.jpg
 */
export const RESEARCH_MEDIA = {
  heroVial: {
    src: "/research/hero-vial.jpg",
    width: 768,
    height: 429,
    alt: "Three Medi-Pep research vials — BPC-157, TB-500, and NAD — on a dark studio surface",
  },
  /** Optional looping video — set to "/research/hero-vial.mp4" when the file exists. */
  heroVialVideo: null as string | null,
  coaSample: {
    src: "/research/coa-sample.png",
    width: 795,
    height: 1024,
    alt: "Certificate of analysis for BPC-157 10 mg research compound — Freedom Diagnostics laboratory report",
  },
  og: {
    src: "https://placehold.co/1200x630/0a0a0a/38bdf8?text=OG+IMAGE",
    width: 1200,
    height: 630,
    alt: "Oak & Sage research-grade compounds — research use only",
  },
  catalog: [
    {
      src: "/research/catalog-01.png",
      name: "CJC-1295 / Ipamorelin",
      amount: "5 mg / 5 mg",
      alt: "Glass research vial labeled CJC-1295 / Ipamorelin 5 mg / 5 mg with green cap",
    },
    {
      src: "/research/catalog-02.png",
      name: "Ipamorelin",
      amount: "10 mg",
      alt: "Glass research vial labeled Ipamorelin 10 mg with green cap",
    },
    {
      src: "/research/catalog-03.png",
      name: "BPC-157",
      amount: "10 mg",
      alt: "Glass research vial labeled BPC-157 10 mg with green cap",
    },
    {
      src: "/research/catalog-04.png",
      name: "TB-500",
      amount: "10 mg",
      alt: "Glass research vial labeled TB-500 10 mg with green cap",
    },
    {
      src: "/research/catalog-05.png",
      name: "NAD+",
      amount: "1000 mg",
      alt: "Glass research vial labeled NAD 1000 mg 10 mL with green cap",
    },
    {
      src: "/research/catalog-06.png",
      name: "GHK-Cu",
      amount: "100 mg",
      alt: "Glass research vial labeled GHK-Cu 100 mg with green cap",
    },
    {
      src: "/research/catalog-07.png",
      name: "Epithalon",
      amount: "50 mg",
      alt: "Glass research vial labeled Epithalon 50 mg with green cap",
    },
    {
      src: "/research/catalog-08.png",
      name: "Selank",
      amount: "10 mg",
      alt: "Glass research vial labeled Selank 10 mg with green cap",
    },
  ],
} as const;
