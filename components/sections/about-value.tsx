import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function AboutValueSection() {
  return (
    <Section>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Our Value
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Where health is a journey, not a destination
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            We believe that true physical restoration requires a deep,
            continuous commitment to optimization. Our center blends
            medical-grade analytical testing with highly specialized therapies
            to support your systemic health, aesthetic rejuvenation, and
            physical freedom at every stage of life.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                Our Vision
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                To redefine the standards of long-term physical optimization by
                empowering individuals to live without limits through
                integrated cellular science and advanced restorative care.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                Our Mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                To deliver precise, data-driven therapies that target structural
                pain, map biological metrics, and renew cellular vitality,
                ensuring safer pathways to predictable health outcomes.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <PlaceholderImage
            slot="about-value"
            className="rounded-xl"
          />
        </Reveal>
      </div>
    </Section>
  );
}
