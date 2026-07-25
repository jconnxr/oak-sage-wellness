type ImageEntry = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** What real photography belongs in this slot once assets are ready. */
  description: string;
};

function placeholder(
  width: number,
  height: number,
  label: string,
  description: string,
): ImageEntry {
  const text = encodeURIComponent(label);
  return {
    src: `https://placehold.co/${width}x${height}/4a5d3f/f5f0e6/png?text=${text}`,
    alt: description,
    width,
    height,
    description,
  };
}

/**
 * Named image slots for the site. Components must read URLs through
 * `getImage()` / `images` — never hardcode placeholder or asset paths.
 */
export const images = {
  logo: {
    src: "/images/logo.png",
    alt: "Oak and Sage Wellness Center",
    width: 182,
    height: 104,
    description: "Brand logo — athlete mark with Oak and Sage wordmark",
  },
  "hero-home": placeholder(
    1920,
    1080,
    "Home Hero",
    "Full-bleed home hero — clinic interior or wellness lifestyle",
  ),
  "home-who-1": placeholder(
    900,
    1100,
    "Lifestyle 1",
    "Who We Are — lifestyle / client vitality portrait",
  ),
  "home-who-2": placeholder(
    900,
    700,
    "Lifestyle 2",
    "Who We Are — treatment room or consultation atmosphere",
  ),
  "home-who-3": placeholder(
    900,
    700,
    "Lifestyle 3",
    "Who We Are — wellness lifestyle / movement",
  ),
  "about-team": placeholder(
    1200,
    800,
    "About Team",
    "About page — team or practitioners portrait",
  ),
  "about-clinic": placeholder(
    1200,
    800,
    "About Clinic",
    "About page — Edmond clinic interior",
  ),
  "about-value": placeholder(
    1400,
    800,
    "Our Value",
    "About — restorative care / optimization atmosphere",
  ),
  "service-glp3-1": {
    src: "/images/service-glp3-1.png",
    alt: "Peptide medication vial — GLP-3 Peptides at Oak & Sage Wellness Center",
    width: 1024,
    height: 682,
    description: "GLP-3 Peptides — primary medication vial product photography",
  },
  "service-glp3-2": placeholder(
    1000,
    750,
    "GLP-3 Detail",
    "GLP-3 Peptides — supporting detail / consultation",
  ),
  "service-body-composition-1": {
    src: "/images/service-body-composition-1.png",
    alt: "Body composition analyzer used for free scans at Oak & Sage Wellness Center",
    width: 1024,
    height: 1024,
    description:
      "Body Composition — primary analyzer product shot (white background)",
  },
  "service-body-composition-2": {
    src: "/images/service-body-composition-2.png",
    alt: "8-point contact electrode body composition technology — hand and foot sensors with bioimpedance measurement",
    width: 1024,
    height: 1024,
    description:
      "Body Composition — 8-point contact electrode / bioimpedance explainer graphic",
  },
  "service-body-composition-3": {
    src: "/images/service-body-composition-3.png",
    alt: "Human body analyzer showing 32 test values including weight, muscle, fat, BMI, and metabolism",
    width: 716,
    height: 1024,
    description:
      "Body Composition — Human Body Analyzer metrics overview graphic",
  },
  "free-scan-hero": {
    src: "/images/service-body-composition-1.png",
    alt: "Free 60-second body scan analyzer at Oak & Sage Wellness Center in Edmond",
    width: 1024,
    height: 1024,
    description:
      "Free Scan landing — body analyzer hero image (same device as Body Composition)",
  },
  "service-skin-tightening-1": {
    src: "/images/service-skin-tightening.png",
    alt: "Perfect Shape neo — skin tightening device used at Oak & Sage Wellness Center",
    width: 657,
    height: 940,
    description:
      "Skin Tightening — Perfect Shape neo device / treatment technology",
  },
  "service-skin-tightening-2": {
    src: "/images/service-skin-tightening-2.png",
    alt: "Skin tightening treatment session at Oak & Sage Wellness Center",
    width: 682,
    height: 1024,
    description:
      "Skin Tightening — in-clinic treatment / client experience photography",
  },
  "service-pain-management-1": {
    src: "/images/service-pain-management-1.png",
    alt: "Pain management care at Oak & Sage Wellness Center — therapist supporting a patient",
    width: 682,
    height: 1024,
    description:
      "Pain Management — in-clinic care / therapeutic support photography",
  },
  "products-hero": {
    src: "/images/product-toolkit.png",
    alt: "Oak & Sage GLP-1 weight loss toolkit — Ketosis Fat Burner, Hunger Alleviator, and Cravings Appetite Blocker",
    width: 1000,
    height: 1000,
    description:
      "Products hero — three-piece GLP-1 weight loss medication toolkit product shot",
  },
  "product-toolkit": {
    src: "/images/product-toolkit.png",
    alt: "Oak & Sage GLP-1 weight loss toolkit — Ketosis Fat Burner, Hunger Alleviator, and Cravings Appetite Blocker",
    width: 1000,
    height: 1000,
    description:
      "Products — GLP-3 Peptides Weight Loss Medication Toolkit product photography",
  },
  "product-pain-relief": {
    src: "/images/product-pain-relief.png",
    alt: "Non-Narcotic Relief — nonprescription pharmaceutical-grade dietary supplement, 60 capsules",
    width: 1001,
    height: 1001,
    description:
      "Products — GLP-3 Peptides Pain Relief / Non-Narcotic Relief medication",
  },
  "contact-hero": {
    src: "/images/contact-hero.png",
    alt: "In-clinic facial treatment at Oak & Sage Wellness Center in Edmond",
    width: 1024,
    height: 682,
    description:
      "Contact page — clinic treatment atmosphere / welcoming care photography",
  },
  "contact-map": placeholder(
    1200,
    800,
    "Contact Location",
    "Contact page — exterior or map of Edmond location",
  ),
  "og-default": placeholder(
    1200,
    630,
    "Oak & Sage",
    "Default Open Graph share image — replace with branded photography",
  ),
} as const satisfies Record<string, ImageEntry>;

export type ImageSlot = keyof typeof images;

export function getImage(slot: ImageSlot): ImageEntry {
  return images[slot];
}
