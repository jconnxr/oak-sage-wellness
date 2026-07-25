import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

type VideoEmbedProps = {
  /** YouTube/Vimeo embed URL, self-hosted mp4, or null/undefined for placeholder. */
  src?: string | null;
  /** Accessible title for the iframe/video when a real source is present. */
  title?: string;
  /** Label shown in the empty/placeholder state. */
  placeholderLabel?: string;
  className?: string;
};

function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname.startsWith("/embed/")) return url;
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube-nocookie.com") {
      return url.includes("/embed/") ? url : null;
    }
  } catch {
    return null;
  }
  return null;
}

function toVimeoEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "player.vimeo.com" && parsed.pathname.startsWith("/video/")) {
      return url;
    }

    if (host === "vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

function isMp4Url(url: string): boolean {
  try {
    const pathname = new URL(url, "https://example.com").pathname.toLowerCase();
    return pathname.endsWith(".mp4") || pathname.endsWith(".webm");
  } catch {
    return url.toLowerCase().includes(".mp4");
  }
}

/**
 * 16:9 responsive video slot. Renders an embed/player when `src` is set;
 * otherwise a design-system placeholder (no broken iframe).
 */
export function VideoEmbed({
  src,
  title = "Video",
  placeholderLabel = "Video Coming Soon — Free Body Scan Walkthrough",
  className,
}: VideoEmbedProps) {
  const youtube = src ? toYouTubeEmbedUrl(src) : null;
  const vimeo = src && !youtube ? toVimeoEmbedUrl(src) : null;
  const mp4 = src && !youtube && !vimeo && isMp4Url(src) ? src : null;
  const iframeSrc = youtube ?? vimeo;

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-foreground/10",
        className,
      )}
    >
      {iframeSrc ? (
        <iframe
          src={iframeSrc}
          title={title}
          className="absolute inset-0 size-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : mp4 ? (
        <video
          className="absolute inset-0 size-full object-cover"
          controls
          playsInline
          preload="metadata"
          title={title}
        >
          <source src={mp4} type={mp4.toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4"} />
        </video>
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"
          role="img"
          aria-label={placeholderLabel}
        >
          <span
            className="flex size-14 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-1 ring-foreground/10"
            aria-hidden
          >
            <Play className="size-6 fill-current" />
          </span>
          <p className="max-w-sm font-display text-base font-medium tracking-tight text-foreground/80 md:text-lg">
            {placeholderLabel}
          </p>
        </div>
      )}
    </div>
  );
}
