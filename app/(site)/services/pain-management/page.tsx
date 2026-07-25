import type { Metadata } from "next";

import {
  BulletList,
  ContentBlock,
  StepList,
} from "@/components/service-content";
import { ServicePageTemplate } from "@/components/service-page-template";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pain Management",
  description: `Non-prescription, non-invasive pain management at ${SITE_NAME} in ${SITE_LOCATION} — reduce discomfort and move easier.`,
  path: "/services/pain-management",
});

const conditions = [
  "Muscle tension and stiffness",
  "Joint discomfort",
  "Back, neck, and shoulder pain",
  "General aches and fatigue",
] as const;

const benefits = [
  { title: "Reduced discomfort and tension" },
  { title: "Improved mobility and flexibility" },
  { title: "Relaxation and stress relief" },
  { title: "Non-invasive, non-prescription approach" },
] as const;

export default function PainManagementPage() {
  return (
    <ServicePageTemplate
      title="Pain Management"
      primaryImage="service-pain-management-1"
      secondaryImage="product-pain-relief"
      intro={
        <p>
          At Oak and Sage, we offer effective, non-prescription pain management
          designed to help you feel better, move easier, and get back to your
          daily routine. Our wellness center provides natural, non-invasive
          solutions focused on reducing discomfort and supporting overall
          wellness.
        </p>
      }
    >
      <ContentBlock title="Natural Pain Relief">
        <p>
          Our pain management services focus on addressing everyday discomfort
          without the need for prescriptions or invasive procedures. Whether
          you&apos;re dealing with muscle tension, soreness, or general aches,
          our treatments are designed to promote relief and recovery in a safe,
          supportive environment.
        </p>
      </ContentBlock>

      <ContentBlock
        title="Conditions We Help Support"
        className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]"
      >
        <BulletList items={conditions} className="mt-0" />
      </ContentBlock>

      <StepList
        title="Benefits of Our Pain Management Services"
        steps={benefits}
      />
    </ServicePageTemplate>
  );
}
