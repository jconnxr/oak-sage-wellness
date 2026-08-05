import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const introItems = [
  {
    title: "3D Body Scan & Skin Tightening",
    body: "Track your transformation with a free SNAP by Fit3D scan and non-invasive structural skin tightening treatments.",
  },
  {
    title: "Pain Relief",
    body: "Restore physical freedom and comfort through targeted, non-invasive pain management solutions designed to get you moving again.",
  },
  {
    title: "GLP-3 Peptides Solutions",
    body: "Support your weight loss journey with advanced GLP-3 Peptide Therapy designed to help manage appetite, improve metabolism, boost energy, and promote healthier lifestyle habits through personalized wellness care.",
  },
] as const;

export function HomeIntroStrip() {
  return (
    <Section className="py-14 md:py-16">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {introItems.map((item, index) => (
          <Reveal key={item.title} delay={0.05 * index}>
            <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
