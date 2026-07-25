import Link from "next/link";

import { PhotoCollage } from "@/components/photo-collage";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/lib/site";

type WhoWeAreProps = {
  /** Optional id for in-page anchors */
  id?: string;
  /** Prioritize lifestyle images when this section is above the fold (e.g. About). */
  priorityImages?: boolean;
  /**
   * Homepage: tighter local/credibility framing with clinic address visible.
   * About and other pages keep the fuller default copy.
   */
  localFocus?: boolean;
};

export function WhoWeAreSection({
  id,
  priorityImages = false,
  localFocus = false,
}: WhoWeAreProps) {
  return (
    <Section id={id}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
              Who We Are
            </p>
            {localFocus ? (
              <>
                <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  A real Edmond clinic behind every order
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Oak &amp; Sage Wellness Center is a brick-and-mortar practice
                  in Edmond, serving the Oklahoma City metro — with a team you
                  can call, visit, and trust.
                </p>
                <p className="mt-6 text-base leading-relaxed text-foreground/85">
                  Whether you order peptides online through our verified partner
                  portal or come in for a free body scan and personalized plan,
                  you&apos;re working with the same local clinic. We combine
                  modern wellness care with clear sourcing and straightforward
                  support — no anonymous storefront, no one-size-fits-all pitch.
                </p>
                <address className="mt-6 not-italic">
                  <p className="text-sm tracking-[0.14em] text-muted-foreground uppercase">
                    Visit Us
                  </p>
                  <p className="mt-2 font-display text-lg font-medium tracking-tight text-foreground">
                    {siteContact.addressLines[0]}
                  </p>
                  <p className="text-base text-foreground/85">
                    {siteContact.addressLines[1]}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Proudly serving Edmond and the greater Oklahoma City area.
                  </p>
                </address>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-11 px-6">
                    <Link href="/shop">Shop Online</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 px-6"
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  The foundation for all your wellness goals
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Bridging the gap between advanced clinical science and
                  restorative wellness to build a stronger, more vibrant version
                  of you.
                </p>
                <p className="mt-6 text-base leading-relaxed text-foreground/85">
                  At Oak &amp; Sage Wellness Center, we believe wellness should
                  never follow a one-size-fits-all approach. We provide
                  personalized, data-driven treatments designed to support
                  performance, restore vitality, and improve overall well-being.
                  Our goal is to help every client achieve safe, sustainable,
                  and long-term results through advanced wellness care. Inspired
                  by the strength of the Oak and the healing wisdom of Sage, our
                  center combines modern therapies with compassionate patient
                  care in a premium environment. We focus on helping you feel
                  healthier, stronger, and more confident by addressing wellness
                  at its core rather than simply managing surface-level
                  concerns.
                </p>
                <Button asChild size="lg" className="mt-8 h-11 px-6">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </>
            )}
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
