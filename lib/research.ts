/** Research landing page — media paths and storefront URL (single source). */

export const RESEARCH_STOREFRONT_URL =
  "https://mypeptide.net/d/oakandsagewellnesscenter?utm_source=meta&utm_medium=cpc&utm_campaign=research_bridge" as const;

/**
 * Swap placehold.co URLs for local files under /public/research/ when assets are ready.
 * Keep filenames: hero-vial.jpg, coa-sample.jpg, catalog-01…08.jpg, og-research.jpg
 */
export const RESEARCH_MEDIA = {
  heroVial: {
    src: "https://placehold.co/1200x1200/0a0a0a/38bdf8?text=HERO+VIAL",
    width: 1200,
    height: 1200,
    alt: "Amber glass research vial on a dark studio background",
  },
  /** Optional looping video — set to "/research/hero-vial.mp4" when the file exists. */
  heroVialVideo: null as string | null,
  coaSample: {
    src: "https://placehold.co/1000x1400/0a0a0a/38bdf8?text=COA+SAMPLE",
    width: 1000,
    height: 1400,
    alt: "Sample certificate of analysis document for a research compound batch",
  },
  og: {
    src: "https://placehold.co/1200x630/0a0a0a/38bdf8?text=OG+IMAGE",
    width: 1200,
    height: 630,
    alt: "Oak & Sage research-grade compounds — research use only",
  },
  catalog: [
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+01",
      name: "CJC-1295",
      amount: "5 mg",
      alt: "Amber glass vial labeled CJC-1295 5 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+02",
      name: "Ipamorelin",
      amount: "5 mg",
      alt: "Amber glass vial labeled Ipamorelin 5 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+03",
      name: "BPC-157",
      amount: "5 mg",
      alt: "Amber glass vial labeled BPC-157 5 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+04",
      name: "TB-500",
      amount: "5 mg",
      alt: "Amber glass vial labeled TB-500 5 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+05",
      name: "NAD+",
      amount: "500 mg",
      alt: "Amber glass vial labeled NAD+ 500 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+06",
      name: "GHK-Cu",
      amount: "50 mg",
      alt: "Amber glass vial labeled GHK-Cu 50 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+07",
      name: "Epithalon",
      amount: "10 mg",
      alt: "Amber glass vial labeled Epithalon 10 mg",
    },
    {
      src: "https://placehold.co/800x800/0a0a0a/38bdf8?text=VIAL+08",
      name: "Selank",
      amount: "5 mg",
      alt: "Amber glass vial labeled Selank 5 mg",
    },
  ],
} as const;
