import type { ReactNode } from "react";

import { PhotoCollage } from "@/components/photo-collage";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { ServiceClosingCta } from "@/components/sections/service-closing-cta";
import { ServiceCrossSell } from "@/components/sections/service-cross-sell";
import type { ImageSlot } from "@/lib/images";

type ServicePageTemplateProps = {
  title: string;
  /** Optional lead line under the page title (e.g. Skin Tightening intro heading). */
  lead?: string;
  intro: ReactNode;
  primaryImage: ImageSlot;
  secondaryImage: ImageSlot;
  children: ReactNode;
};

/**
 * Shared service page shell: intro → detail sections → cross-sell grid → closing CTA.
 */
export function ServicePageTemplate({
  title,
  lead,
  intro,
  primaryImage,
  secondaryImage,
  children,
}: ServicePageTemplateProps) {
  return (
    <>
      <Section className="pb-12 md:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
              Services
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            {lead ? (
              <p className="font-display mt-5 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {lead}
              </p>
            ) : null}
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <PhotoCollage
              primary={primaryImage}
              secondary={secondaryImage}
              priority
            />
          </Reveal>
        </div>
      </Section>

      {children}

      <ServiceCrossSell
        title="Explore Our Services"
        description="Continue your care with our full suite of wellness pathways."
      />
      <ServiceClosingCta />
    </>
  );
}
