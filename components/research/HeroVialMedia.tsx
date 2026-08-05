"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { RESEARCH_MEDIA } from "@/lib/research";

/**
 * Hero vial: static image by default. Plays muted looping video when
 * /research/hero-vial.mp4 exists and the visitor has not requested reduced motion.
 */
export function HeroVialMedia() {
  const [preferReducedMotion, setPreferReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoSrc = RESEARCH_MEDIA.heroVialVideo;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPreferReducedMotion(media.matches);
    const onChange = () => setPreferReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!videoSrc || preferReducedMotion) {
      setVideoReady(false);
      return;
    }

    let cancelled = false;
    fetch(videoSrc, { method: "HEAD" })
      .then((response) => {
        if (!cancelled && response.ok) setVideoReady(true);
      })
      .catch(() => {
        if (!cancelled) setVideoReady(false);
      });

    return () => {
      cancelled = true;
    };
  }, [videoSrc, preferReducedMotion]);

  const { src, width, height, alt } = RESEARCH_MEDIA.heroVial;

  if (videoReady && videoSrc && !preferReducedMotion) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={src}
          aria-label={alt}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        sizes="(max-width: 1024px) 100vw, 560px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
