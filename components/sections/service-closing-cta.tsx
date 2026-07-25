import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/lib/site";

export function ServiceClosingCta() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Start Your Wellness Journey Today
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Ready to get started? Book your appointment at Oak and Sage today
            and take the first step toward a healthier, more balanced you.
          </p>

          <div className="mt-8 space-y-2 text-sm text-primary-foreground/80 md:text-base">
            {siteContact.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center gap-1 text-sm md:text-base">
            {siteContact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="text-primary-foreground transition-opacity hover:opacity-80"
              >
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${siteContact.email}`}
              className="text-primary-foreground transition-opacity hover:opacity-80"
            >
              {siteContact.email}
            </a>
          </div>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 h-11 px-6"
          >
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
