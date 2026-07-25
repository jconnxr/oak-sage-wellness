type VideoEntry = {
  /** Embed or file URL — null until the real asset is ready. */
  src: string | null;
  /** What this slot is for once the video exists. */
  description: string;
};

/**
 * Named video slots for the site. Components must read URLs through
 * `getVideo()` / `videos` — never hardcode embed or asset paths.
 */
export const videos = {
  /**
   * TODO: replace with real video URL (YouTube, Vimeo, or self-hosted mp4)
   * once the free body scan explainer video is filmed.
   * Pass the URL into <VideoEmbed src={...} /> here.
   */
  "body-scan-explainer": {
    src: null,
    description:
      "Free body scan explainer — someone walking through what happens during the appointment",
  },
} as const satisfies Record<string, VideoEntry>;

export type VideoSlot = keyof typeof videos;

export function getVideo(slot: VideoSlot): VideoEntry {
  return videos[slot];
}
