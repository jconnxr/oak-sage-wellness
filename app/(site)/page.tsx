import type { Metadata } from "next";

import { HomeClosingCtaSection } from "@/components/sections/home-closing-cta";
import { HomeCredibilitySection } from "@/components/sections/home-credibility";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeIntroStrip } from "@/components/sections/home-intro-strip";
import { ReclaimEnergySection } from "@/components/sections/reclaim-energy";
import { ServiceOfferingsSection } from "@/components/sections/service-offerings";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { WhyClientsTrustSection } from "@/components/sections/why-clients-trust";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SITE_NAME,
  description: `${SITE_NAME} in ${SITE_LOCATION} — Oklahoma City's local, trusted source for peptides. Order online or visit our Edmond clinic for a free body scan and personalized wellness care.`,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCredibilitySection />
      <WhoWeAreSection localFocus />
      <HomeIntroStrip />
      <ServiceOfferingsSection />
      <ReclaimEnergySection />
      <WhyClientsTrustSection />
      <HomeClosingCtaSection />
    </>
  );
}
