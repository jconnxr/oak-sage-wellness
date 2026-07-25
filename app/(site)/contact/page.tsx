import type { Metadata } from "next";

import { CalendlyEmbed } from "@/components/calendly-embed";
import { ContactForm } from "@/components/contact-form";
import { ContactMap } from "@/components/contact-map";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { CALENDLY_EVENT_URL } from "@/lib/calendly";
import { pageMetadata, SITE_LOCATION, SITE_NAME } from "@/lib/seo";
import { siteContact } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact ${SITE_NAME} in ${SITE_LOCATION} — book an appointment, call, email, or send a message.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section className="pb-10 md:pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
              Contact
            </p>
            <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Don&apos;t hesitate to contact us
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <PlaceholderImage
              slot="contact-hero"
              priority
              className="rounded-xl"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal>
            <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
              Address
            </h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground md:text-base">
              {siteContact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
              Get in Touch
            </h2>
            <div className="mt-3 space-y-1 text-sm md:text-base">
              {siteContact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${siteContact.email}`}
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                {siteContact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
              Hours
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground md:text-base">
              <li>Mon–Fri: 9:00 AM – 7:00 PM</li>
              <li>Sat–Sun: 9:00 AM – 9:00 PM</li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Find Us
          </h2>
        </Reveal>
        <Reveal className="mt-8" delay={0.05}>
          <ContactMap />
        </Reveal>
      </Section>

      <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Book Appointment
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Choose a time that works for you. Scheduling opens in the calendar
            below.
          </p>
        </Reveal>
        <Reveal className="mt-8" delay={0.05}>
          <CalendlyEmbed eventUrl={CALENDLY_EVENT_URL} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Send a Message
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Have a general question? Reach out and we&apos;ll get back to you.
            For booking, use the calendar above.
          </p>
        </Reveal>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={0.05}>
            <PlaceholderImage
              slot="about-clinic"
              className="rounded-xl"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
