import Link from "next/link";

import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceLinks } from "@/lib/site";

type ServiceCrossSellProps = {
  title?: string;
  description?: string;
};

export function ServiceCrossSell({
  title = "Explore Our Services",
  description = "Four focused pathways to restore vitality, track progress, and feel stronger in your body.",
}: ServiceCrossSellProps) {
  return (
    <Section className="bg-[color-mix(in_oklch,var(--sage),var(--cream)_92%)]">
      <Reveal>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
        ) : null}
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {serviceLinks.map((service, index) => (
          <Reveal key={service.href} delay={0.05 * index}>
            <Link href={service.href} className="group block h-full">
              <Card className="h-full overflow-hidden py-0 transition-shadow group-hover:shadow-md">
                <PlaceholderImage
                  slot={service.image}
                  className="aspect-[16/10] rounded-none object-cover"
                />
                <CardHeader className="py-5">
                  <CardTitle className="font-display text-xl transition-colors group-hover:text-primary">
                    {service.label}
                  </CardTitle>
                  <CardDescription>Explore this service</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
