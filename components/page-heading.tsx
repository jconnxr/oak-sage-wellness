import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

type PageHeadingProps = {
  title: string;
  description?: ReactNode;
  className?: string;
};

/** Stub / page title block with Reveal animation. */
export function PageHeading({ title, description, className }: PageHeadingProps) {
  return (
    <Section className={cn("pt-12 pb-16 md:pt-16", className)}>
      <Reveal>
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Reveal>
    </Section>
  );
}
