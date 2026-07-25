import type { Metadata } from "next";

import { HomeClosingCtaSection } from "@/components/sections/home-closing-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeIntroStrip } from "@/components/sections/home-intro-strip";
import { ReclaimEnergySection } from "@/components/sections/reclaim-energy";
import { ServiceOfferingsSection } from "@/components/sections/service-offerings";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { WhyClientsTrustSection } from "@/components/sections/why-clients-trust";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SITE_NAME,
  description: `${SITE_NAME} in ${SITE_LOCATION} — GLP-3 peptides, body composition, skin tightening, and pain management for lasting wellness.`,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntroStrip />
      <WhoWeAreSection />
      <ServiceOfferingsSection />
      <ReclaimEnergySection />
      <WhyClientsTrustSection />
      <HomeClosingCtaSection />
    </>
  );
}
