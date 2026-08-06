import type { Metadata } from "next";

import { CalendlyEmbed } from "@/components/calendly-embed";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { StepList } from "@/components/service-content";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
import { CALENDLY_EVENT_URL } from "@/lib/calendly";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";
import { getVideo } from "@/lib/videos";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Free Body Scan",
    description: `Start with a free one-minute Fit3D SNAP body scan at ${SITE_NAME} in ${SITE_LOCATION} — see your 3D avatar, review 400+ measurements with our team, and explore personalized next steps with no obligation.`,
    path: "/body-scan",
  }),
  robots: { index: false, follow: true },
};

const journeySteps = [
  {
    title: "Book Your Free Body Scan",
    body: "In about a minute, SNAP by Fit3D captures a full-color 3D avatar and 400+ measurements — including weight, body fat percentage, fat mass, lean mass, VAT mass, waist circumference, and a Body Shape Rating. It's a clear starting point most people never get to see.",
  },
  {
    title: "Review Your Results With Our Team",
    body: "We'll sit down with you, walk through your personalized report and your 3D avatar together, and talk through what your numbers mean in plain language.",
  },
  {
    title: "Build Your Personalized Plan",
    body: "If it's a good fit, we'll walk you through options tailored to your results — including our GLP-3 program, skin tightening, and pain management — with no pressure and no obligation to continue.",
  },
] as const;

const differentiators = [
  {
    title: "A 3D avatar you can see",
    body: "SNAP by Fit3D builds a visual 3D avatar of your body — not just a number on a scale — so you can see shape and proportion alongside your metrics.",
  },
  {
    title: "Track changes over time",
    body: "Return for follow-up scans and compare results across visits, so progress is measured with the same detailed picture each time.",
  },
  {
    title: "Non-invasive and about a minute",
    body: "You stand in front of a mounted tablet and turn slowly through one full rotation. Nothing touches you, there's no radiation, and the capture itself takes about a minute.",
  },
  {
    title: "Results explained in person",
    body: "Your report is reviewed with a real person on our team, not left for you to interpret alone in an app.",
  },
] as const;

/**
 * Facebook ad landing page — stripped conversion focus.
 * Do not add before/after body imagery or main-site nav chrome here.
 */
export default function BodyScanPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pb-10 md:pb-12">
        <Reveal>
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Free Body Scan
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Start With a Free Body Scan
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            See exactly where you stand with a one-minute SNAP by Fit3D scan —
            no cost, no obligation, and it&apos;s the first step most of our
            clients take before starting a personalized program.
          </p>
          <Button asChild size="lg" className="mt-8 h-11 px-6">
            <a href="#book-scan">Book Your Free Scan</a>
          </Button>
        </Reveal>
      </Section>

      {/* Explainer video */}
      <Section className="pt-0 md:pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Watch: How Your Free Scan Works
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A quick look at what happens during your free body scan appointment.
          </p>
        </Reveal>
        <Reveal className="mt-8" delay={0.05}>
          <VideoEmbed
            src={getVideo("body-scan-explainer").src}
            title="Free Body Scan Walkthrough"
          />
        </Reveal>
      </Section>

      {/* Your Journey */}
      <StepList title="Your Journey" steps={journeySteps} />

      {/* What Makes Our Scan Different */}
      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What Makes Our Scan Different
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            SNAP by Fit3D gives you a clearer picture than weight alone —
            detailed, visual, and explained with you in the room.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:gap-8">
          {differentiators.map((point, index) => (
            <Reveal key={point.title} delay={0.05 * index}>
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bundle callout — no outbound service links (ad landing stays sealed) */}
      <Section>
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-foreground/85 md:text-lg">
            Many clients pair their scan results with skin tightening or GLP-3
            programs as part of one simple plan — we can walk through options
            during your visit, with no obligation to continue.
          </p>
        </Reveal>
      </Section>

      {/* Calendly booking — same event URL as the rest of the site */}
      <Section
        id="book-scan"
        className="scroll-mt-20 bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]"
      >
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Book Your Free Scan
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Choose a time that works for you. Scheduling opens in the calendar
            below — no cost, no obligation.
          </p>
        </Reveal>
        <Reveal className="mt-8" delay={0.05}>
          <CalendlyEmbed eventUrl={CALENDLY_EVENT_URL} />
        </Reveal>
      </Section>
    </>
  );
}
