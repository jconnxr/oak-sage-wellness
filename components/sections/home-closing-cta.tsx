import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function HomeClosingCtaSection() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Experience Wellness that Restores Your Foundation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Ready to transform your physical health from the inside out?
            Whether you want to optimize your cellular vitality with peptide
            therapy, track your biological milestones with advanced Body
            Composition metrics, smooth and rejuvenate your skin, or target
            chronic pain at its source—our clinical experts are here to guide
            your journey.
          </p>
          <Button asChild size="lg" className="mt-8 h-11 px-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
