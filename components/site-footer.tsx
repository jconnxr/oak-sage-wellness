import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { SiteLogo } from "@/components/site-logo";
import {
  footerAboutLinks,
  serviceLinks,
  siteContact,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-[color-mix(in_oklch,var(--sage),var(--cream)_88%)]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <Reveal>
          <SiteLogo height={64} className="mb-8" />
          <p className="font-display max-w-2xl text-2xl leading-snug font-medium tracking-tight text-foreground md:text-3xl">
            Advanced peptides, pain relief, and skin tightening designed to
            elevate your body from the inside out.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="About">
            <ul className="flex flex-col gap-2">
              {footerAboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Location">
            <address className="not-italic text-sm leading-relaxed text-foreground/80">
              {siteContact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-3 block space-y-1">
                {siteContact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="block transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${siteContact.email}`}
                  className="block transition-colors hover:text-primary"
                >
                  {siteContact.email}
                </a>
              </span>
            </address>
          </FooterColumn>

          <FooterColumn title="Hours">
            <ul className="flex flex-col gap-1 text-sm text-foreground/80">
              {siteContact.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <p className="mt-12 border-t border-border/70 pt-6 text-sm text-muted-foreground">
          © 2026 Oak and Sage Wellness Center
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-base font-medium tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
