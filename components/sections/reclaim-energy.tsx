import Link from "next/link";

import { PhotoCollage } from "@/components/photo-collage";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function ReclaimEnergySection() {
  return (
    <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_90%)]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PhotoCollage
            primary="about-clinic"
            secondary="home-who-3"
            overlap="bottom-left"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Reclaim Your Energy. Restore Your Body.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Your journey to optimal wellness starts here. We combine
              cutting-edge science with individualized medical care to build a
              customized roadmap for your health goals—from cellular metabolic
              resets to targeted structural pain relief.
            </p>
            <Button asChild size="lg" className="mt-8 h-11 px-6">
              <Link href="/services/glp-3-peptides">View Our Services</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
