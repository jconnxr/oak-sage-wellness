import type { Metadata } from "next";
import Link from "next/link";

import {
  BulletList,
  ContentBlock,
  FeatureCardGrid,
  StepList,
} from "@/components/service-content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { ServicePageTemplate } from "@/components/service-page-template";
import { Button } from "@/components/ui/button";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GLP-3 Peptides",
  description: `${SITE_NAME} in ${SITE_LOCATION} offers GLP-3 Peptides — a multi-pathway peptide-inspired wellness formula supporting metabolic balance and lifestyle goals.`,
  path: "/services/glp-3-peptides",
});

const pathways = [
  "GLP-1 pathway — helps regulate appetite, digestion speed, and blood sugar balance",
  "GIP pathway — supports insulin response and nutrient metabolism",
  "Glucagon pathway — associated with increased energy use and fat metabolism",
  "Ghrelin-related component — included to potentially improve tolerance and reduce gastrointestinal discomfort",
] as const;

const whyCards = [
  {
    title: "Multi-Pathway Support",
    body: "Developed to interact with multiple metabolic signals for a more complete approach to balance",
  },
  {
    title: "Designed for Daily Tolerance",
    body: "Built with user experience in mind to support smoother integration into routines",
  },
  {
    title: "Advanced Peptide Engineering",
    body: "Crafted for those seeking a more comprehensive option beyond basic formulations",
  },
  {
    title: "Supports Energy & Balance",
    body: "Helps align natural processes related to appetite, energy use, and metabolic rhythm",
  },
] as const;

const journeySteps = [
  {
    title: "Free 3D Body Scan & Report",
    body: "A one-minute SNAP by Fit3D scan with 400+ measurements and a full-color 3D avatar — reviewed with our team.",
    href: "/services/body-composition",
  },
  {
    title: "Personalized Protocol",
    body: "Patient begins the 20-week Metabolic Reset Journey with a weekly self-injection at home.",
  },
  {
    title: "Start Feeling Better",
    body: "Oak and Sage suppresses appetite, optimizes insulin efficiency, and elevates resting metabolic rate.",
  },
] as const;

export default function Glp3PeptidesPage() {
  // TODO: COMPLIANCE REVIEW NEEDED — this page uses "self-injection" and
  // medication-like claims language, needs legal/compliance review before
  // launch since it's the primary ad landing page.
  return (
    <ServicePageTemplate
      title="GLP-3 Peptides"
      primaryImage="service-glp3-1"
      secondaryImage="service-glp3-2"
      intro={
        <p>
          Oak and Sage is a next-generation peptide-inspired wellness formula
          designed to support the body&apos;s natural balance through a
          multi-pathway approach. Built for individuals looking for a more
          comprehensive wellness option, GLP-3 Peptides focuses on helping you
          stay aligned with your daily routine, energy balance, and lifestyle
          goals.
        </p>
      }
    >
      <ContentBlock title="SIMPLEX GLP-3">
        <p>
          Oak And Sage is a patented, multi-receptor metabolic peptide
          supplement designed to support weight management and overall metabolic
          function. It is described as a quad-receptor formula, meaning it is
          designed to interact with four metabolic pathways:
        </p>
        <BulletList items={pathways} />
      </ContentBlock>

      <FeatureCardGrid title="Why Choose Oak And Sage?" cards={whyCards} />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <PlaceholderImage
              slot="about-team"
              className="rounded-xl"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      <StepList title="How To Start Your Oak And Sage Journey" steps={journeySteps} />
    </ServicePageTemplate>
  );
}
