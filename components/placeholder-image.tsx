import Image, { type ImageProps } from "next/image";

import { getImage, type ImageSlot } from "@/lib/images";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height"
> & {
  slot: ImageSlot;
  alt?: string;
  width?: number;
  height?: number;
};

/**
 * Renders a named image slot from `lib/images.ts` via next/image.
 * All site imagery should go through this (or `getImage`) — no hardcoded URLs.
 */
export function PlaceholderImage({
  slot,
  className,
  alt,
  width,
  height,
  fill,
  sizes,
  ...props
}: PlaceholderImageProps) {
  const image = getImage(slot);

  if (fill) {
    return (
      <Image
        src={image.src}
        alt={alt ?? image.alt}
        fill
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
        {...props}
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={alt ?? image.alt}
      width={width ?? image.width}
      height={height ?? image.height}
      sizes={
        sizes ?? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      }
      className={cn("h-auto w-full object-cover", className)}
      {...props}
    />
  );
}
