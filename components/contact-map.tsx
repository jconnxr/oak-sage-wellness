import { siteContact } from "@/lib/site";

const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=15812%20N%20Pennsylvania%20Ave%2C%20Suite%203%2C%20Edmond%2C%20OK%2073013&z=15&output=embed";

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted">
      <iframe
        title={`Map to ${siteContact.addressLines.join(", ")}`}
        src={MAPS_EMBED_SRC}
        className="aspect-[4/3] w-full border-0 md:aspect-[16/10]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
