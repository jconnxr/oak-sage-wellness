import { PhotoBanner } from "@/components/photo-banner";

export function AboutPullQuote() {
  return (
    <PhotoBanner image="about-team" overlay="charcoal">
      <blockquote className="font-display text-2xl font-medium tracking-tight md:text-3xl md:leading-snug">
        Where structural pain relief meets advanced radiance, engineered for a
        healthier tomorrow.
      </blockquote>
    </PhotoBanner>
  );
}
