import type { Metadata } from "next";

import {
  BulletList,
  ContentBlock,
  StepList,
} from "@/components/service-content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { ServicePageTemplate } from "@/components/service-page-template";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Body Composition",
  description: `Advanced Body Composition Analysis at ${SITE_NAME} in ${SITE_LOCATION} — track fat, muscle, metabolism, and hydration with precision.`,
  path: "/services/body-composition",
});

const insights = [
  "Body fat percentage",
  "Muscle mass",
  "Metabolic rate",
  "Hydration levels",
] as const;

const howItWorks = [
  { title: "You stand on the analyzer and hold the handles" },
  { title: "The device uses safe, low-level electrical signals" },
  {
    title:
      "Multiple contact points (hands and feet) ensure accurate readings",
  },
  { title: "In seconds, your full body data is measured and displayed" },
] as const;

export default function BodyCompositionPage() {
  return (
    <ServicePageTemplate
      title="Body Composition"
      primaryImage="service-body-composition-1"
      secondaryImage="service-body-composition-2"
      intro={
        <p>
          At Oak and Sage, we use advanced Body Composition Analysis technology
          to give you a complete picture of your health—not just your weight.
          This detailed assessment helps us create personalized treatment plans
          and track your progress with precision.
        </p>
      }
    >
      <ContentBlock title="What Is Body Composition Analysis?">
        <p>
          Body Composition Analysis uses dual-frequency bioelectrical impedance
          (BIA) technology to measure and analyze your body in detail. Instead
          of just showing weight, it provides insights into:
        </p>
        <BulletList items={insights} />
      </ContentBlock>

      <Section className="pt-0">
        <Reveal>
          <PlaceholderImage
            slot="service-body-composition-2"
            className="rounded-xl"
          />
        </Reveal>
      </Section>

      <ContentBlock
        title="Track Your Progress Accurately"
        className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]"
      >
        <p>
          Measures 32+ key metrics including body fat, muscle mass, BMI, and
          metabolism. Results in just 30 seconds, displayed clearly on a
          high-definition touchscreen. Helps clients see real progress beyond
          the scale. Reports can be printed or synced to your phone for easy
          tracking.
        </p>
      </ContentBlock>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <PlaceholderImage
              slot="service-body-composition-3"
              className="rounded-xl"
            />
          </Reveal>
          <div className="space-y-10">
            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Personalized Guidance for Your Weight Loss
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Get simple diet and exercise tips based on your data. Track your
                progress over time to stay motivated.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Safe, Quick &amp; Comfortable
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Non-invasive, painless, and suitable for all body types.
                Dual-mode testing for accurate results in every session.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <StepList title="How It Works" steps={howItWorks} />
    </ServicePageTemplate>
  );
}
