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
  title: "Skin Tightening",
  description: `Non-surgical skin tightening at ${SITE_NAME} in ${SITE_LOCATION} — RF energy and muscle stimulation for firmer, smoother results after weight loss.`,
  path: "/services/skin-tightening",
});

const multiLayer = [
  "Strengthens and tones muscles",
  "Supports skin tightening",
  "Improves circulation",
  "Enhances the body's natural processes",
] as const;

const howItWorks = [
  { title: "Deep Skin Heating (RF Technology)" },
  { title: "Muscle Activation" },
  { title: "Natural Tightening Response" },
  { title: "Continued Improvement" },
] as const;

export default function SkinTighteningPage() {
  return (
    <ServicePageTemplate
      title="Skin Tightening"
      lead="You Lost the Weight… Now Skin Tightening"
      primaryImage="service-skin-tightening-1"
      secondaryImage="service-skin-tightening-2"
      intro={
        <>
          <p>
            Losing weight is a major accomplishment—but loose or sagging skin
            can make it harder to fully enjoy your results. At Oak and Sage, we
            provide professional skin tightening to help you achieve a firmer,
            smoother, and more confident appearance.
          </p>
          <p>
            Our non-surgical skin tightening treatments are designed to improve
            skin elasticity, enhance texture, and support a youthful
            look—without needles, surgery, or downtime. Using advanced,
            non-invasive techniques, we help clients naturally tighten and tone
            areas affected by weight loss.
          </p>
        </>
      }
    >
      <ContentBlock title="What Makes Our Skin Tightening Treatment Different?">
        <p>
          Our system combines electromagnetic muscle stimulation (EMS) with
          targeted radiofrequency (RF) energy to deliver a powerful, multi-layer
          treatment:
        </p>
        <BulletList items={multiLayer} />
      </ContentBlock>

      <Section className="pt-0">
        <Reveal>
          <PlaceholderImage
            slot="service-skin-tightening-2"
            className="mx-auto max-w-xl rounded-xl"
          />
        </Reveal>
      </Section>

      <Section className="bg-[color-mix(in_oklch,var(--oak),var(--cream)_90%)]">
        <Reveal>
          <h2 className="font-display max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Advanced Skin Tightening Technology in Edmond, Oklahoma
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
              Radiofrequency (RF) Energy
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Our RF technology gently heats the deeper layers of the skin to
              naturally stimulate rejuvenation from within, boosting natural
              collagen and elastin production, improving skin firmness and
              elasticity, and enhancing overall texture and smoothness.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
              Muscle Stimulation Technology
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We also use advanced muscle activation techniques to target deeper
              support structures beneath the skin — activating and toning
              underlying facial and body muscles, improving natural lift and
              definition, and enhancing overall tightening and contouring
              results.
            </p>
          </Reveal>
        </div>
      </Section>

      <StepList title="How It Works" steps={howItWorks} />
    </ServicePageTemplate>
  );
}
