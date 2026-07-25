import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const pillars = [
  {
    title: "Advanced Peptide Therapy",
    body: "Experience the future of cellular optimization with our premium peptide protocols. We utilize cutting-edge biochemical science to naturally stimulate growth factors, enhance metabolic function, accelerate tissue repair, and elevate your overall vitality from the inside out.",
  },
  {
    title: "A True Clinical Partnership",
    body: "We match advanced medical science with dedicated support, giving you the tools, insights, and guidance needed to confidently reach your goals.",
  },
  {
    title: "Personalized Clinical Care",
    body: "We completely reject the traditional, one-size-fits-all approach to medicine. Every treatment plan at Oak & Sage is uniquely engineered around your personal health profile, lifestyle goals, and physiological metrics, ensuring safer applications and highly predictable, long-term results.",
  },
] as const;

export function WhyClientsTrustSection() {
  return (
    <Section>
      <Reveal>
        <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Why Clients Trust Our Center
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.05 * index}>
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
