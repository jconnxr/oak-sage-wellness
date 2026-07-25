import type { Metadata } from "next";

import { AboutPullQuote } from "@/components/sections/about-pull-quote";
import { AboutValueSection } from "@/components/sections/about-value";
import { ReclaimEnergySection } from "@/components/sections/reclaim-energy";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { WhyClientsTrustSection } from "@/components/sections/why-clients-trust";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `Learn about ${SITE_NAME} in ${SITE_LOCATION} — personalized, data-driven wellness care inspired by the strength of oak and the wisdom of sage.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <WhoWeAreSection priorityImages />
      <AboutPullQuote />
      <AboutValueSection />
      <ReclaimEnergySection />
      <WhyClientsTrustSection />
    </>
  );
}
