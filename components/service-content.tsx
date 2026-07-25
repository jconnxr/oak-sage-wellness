import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ContentBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function ContentBlock({ title, children, className }: ContentBlockProps) {
  return (
    <Section className={className}>
      <Reveal>
        <h2 className="font-display max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </Reveal>
    </Section>
  );
}

type BulletListProps = {
  items: readonly string[];
  className?: string;
};

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn("mt-6 space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-relaxed text-foreground/85"
        >
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type FeatureCard = {
  title: string;
  body: string;
};

export function FeatureCardGrid({
  title,
  cards,
}: {
  title: string;
  cards: readonly FeatureCard[];
}) {
  return (
    <Section className="bg-[color-mix(in_oklch,var(--oak),var(--cream)_90%)]">
      <Reveal>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={0.05 * index}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-display text-xl">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {card.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

type Step = {
  title: string;
  body?: string;
  /** Optional link wrapping the step title (e.g. Free Body Scan → /body-scan). */
  href?: string;
};

export function StepList({
  title,
  steps,
}: {
  title: string;
  steps: readonly Step[];
}) {
  return (
    <Section>
      <Reveal>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      </Reveal>
      <ol className="mt-10 space-y-8">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={0.05 * index}>
            <li className="flex gap-5">
              <span className="font-display text-3xl font-medium text-primary tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                  {step.href ? (
                    <Link
                      href={step.href}
                      className="transition-colors hover:text-primary"
                    >
                      {step.title}
                    </Link>
                  ) : (
                    step.title
                  )}
                </h3>
                {step.body ? (
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                ) : null}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
