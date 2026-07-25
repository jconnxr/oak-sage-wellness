import Link from "next/link";

import { PhotoCollage } from "@/components/photo-collage";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

type WhoWeAreProps = {
  /** Optional id for in-page anchors */
  id?: string;
  /** Prioritize lifestyle images when this section is above the fold (e.g. About). */
  priorityImages?: boolean;
};

export function WhoWeAreSection({ id, priorityImages = false }: WhoWeAreProps) {
  return (
    <Section id={id}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
              Who We Are
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              The foundation for all your wellness goals
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Bridging the gap between advanced clinical science and restorative
              wellness to build a stronger, more vibrant version of you.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              At Oak &amp; Sage Wellness Center, we believe wellness should never
              follow a one-size-fits-all approach. We provide personalized,
              data-driven treatments designed to support performance, restore
              vitality, and improve overall well-being. Our goal is to help
              every client achieve safe, sustainable, and long-term results
              through advanced wellness care. Inspired by the strength of the
              Oak and the healing wisdom of Sage, our center combines modern
              therapies with compassionate patient care in a premium
              environment. We focus on helping you feel healthier, stronger, and
              more confident by addressing wellness at its core rather than
              simply managing surface-level concerns.
            </p>
            <Button asChild size="lg" className="mt-8 h-11 px-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <PhotoCollage
            primary="home-who-1"
            secondary="home-who-2"
            priority={priorityImages}
          />
        </Reveal>
      </div>
    </Section>
  );
}
