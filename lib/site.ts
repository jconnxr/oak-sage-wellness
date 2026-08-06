import type { ImageSlot } from "@/lib/images";

/** MyPeptide partner microsite — clients buy peptides here. */
export const shopOnlineUrl =
  "https://mypeptide.net/d/oakandsagewellnesscenter" as const;

export const serviceLinks = [
  {
    href: "/services/glp-3-peptides",
    label: "GLP-3 Peptides",
    image: "service-glp3-1" satisfies ImageSlot,
  },
  {
    href: "/services/body-composition",
    label: "3D Body Scan",
    image: "service-body-composition-snap" satisfies ImageSlot,
  },
  {
    href: "/services/skin-tightening",
    label: "Skin Tightening",
    image: "service-skin-tightening-1" satisfies ImageSlot,
  },
  {
    href: "/services/pain-management",
    label: "Pain Management",
    image: "service-pain-management-1" satisfies ImageSlot,
  },
] as const;

/** Services dropdown / footer — clinical services only (no ad landing routes). */
export const serviceNavLinks = [
  ...serviceLinks.map(({ href, label }) => ({ href, label })),
] as const;

export const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: shopOnlineUrl, label: "Shop Online", external: true },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerAboutLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: shopOnlineUrl, label: "Shop Online", external: true },
  { href: "/contact", label: "Contact" },
] as const;

export const siteContact = {
  addressLines: [
    "15812 N Pennsylvania Ave, Suite 3",
    "Edmond, OK 73013",
  ],
  phones: ["405-839-4934", "806-217-2775"],
  email: "support@oakandsagewellnesscenter.com",
  hours: [
    "Mon–Fri 9:00 AM – 7:00 PM",
    "Sat–Sun 9:00 AM – 9:00 PM",
  ],
} as const;
