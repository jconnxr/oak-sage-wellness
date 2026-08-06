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
    width: 703,
    height: 451,
    description: "Brand logo — athlete mark with Oak and Sage wordmark",
  },
  "hero-home": {
    src: "/images/hero-home.png",
    alt: "Welcoming front desk team member at Oak & Sage Wellness Center in Edmond",
    width: 1024,
    height: 558,
    description: "Full-bleed home hero — reception team / welcoming clinic atmosphere",
  },
  "home-who-1": {
    src: "/images/home-who-1.png",
    alt: "Reception desk and waiting area at Oak & Sage Wellness Center in Edmond",
    width: 768,
    height: 1024,
    description: "Who We Are — Edmond clinic reception and waiting nook",
  },
  "home-who-2": {
    src: "/images/home-who-2.png",
    alt: "Client lounge and bar area at Oak & Sage Wellness Center in Edmond",
    width: 768,
    height: 1024,
    description: "Who We Are — clinic lounge / common area",
  },
  "home-who-3": {
    src: "/images/home-who-3.png",
    alt: "Amber peptide vials lined on a wood shelf at Oak & Sage Wellness Center",
    width: 1024,
    height: 558,
    description: "Who We Are — peptide vial product photography",
  },
  "about-team": {
    src: "/images/about-team.png",
    alt: "Brick-walled lounge with bar seating at Oak & Sage Wellness Center in Edmond",
    width: 768,
    height: 1024,
    description: "About page — clinic lounge atmosphere banner",
  },
  "about-clinic": {
    src: "/images/about-clinic.png",
    alt: "Reception desk and waiting chairs in the Edmond clinic lobby at Oak & Sage Wellness Center",
    width: 768,
    height: 1024,
    description: "About / Contact — Edmond clinic lobby and reception",
  },
  "about-value": {
    src: "/images/about-value.png",
    alt: "Medi-Pep research vials — BPC-157, TB-500, and NAD — on a dark studio surface",
    width: 768,
    height: 429,
    description: "About — three-vial peptide product photography",
  },
  "service-glp3-1": {
    src: "/images/service-glp3-1.png",
    alt: "Peptide medication vial — GLP-3 Peptides at Oak & Sage Wellness Center",
    width: 1024,
    height: 682,
    description: "GLP-3 Peptides — primary medication vial product photography",
  },
  "service-glp3-2": {
    src: "/images/service-glp3-2.png",
    alt: "Gloved hands selecting peptide vials for treatment at Oak & Sage Wellness Center",
    width: 1024,
    height: 558,
    description: "GLP-3 Peptides — supporting clinical preparation detail",
  },
  "service-body-composition-snap": {
    src: "/images/fit3d/snap-cover.png",
    alt: "SNAP by Fit3D scanning station with 3D body avatar",
    width: 940,
    height: 667,
    description:
      "3D Body Scan — Fit3D SNAP cover photo (home service card)",
  },
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
    alt: "Client relaxing beside the ERIS Sculpture System during a skin tightening session at Oak & Sage Wellness Center",
    width: 1024,
    height: 1024,
    description:
      "Skin Tightening — ERIS Sculpture System treatment room photography",
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
      "Products — Non-Narcotic Relief medication",
  },
  "product-tirzepatide": {
    src: "/images/product-tirzepatide.png",
    alt: "GLP-2 60 mg research vial — Medi-Pep, for professional use only",
    width: 1000,
    height: 1000,
    description: "Products — GLP-2 60 mg vial product photography",
  },
  "contact-hero": {
    src: "/images/contact-hero.png",
    alt: "Reception desk at Oak & Sage Wellness Center in Edmond",
    width: 768,
    height: 1024,
    description:
      "Contact page — Edmond clinic reception / welcoming entry photography",
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
