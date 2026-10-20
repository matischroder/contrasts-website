/** Business details, as published on the salon's current website (contrasts.com.au). */
export const site = {
  name: "Contrasts Hair Studio",
  shortName: "Contrasts",
  tagline: "Organic concept salon",
  address: { street: "82 Days Road", suburb: "Grange", state: "QLD", postcode: "4051", country: "AU" },
  phone: "(07) 3356 4433",
  phoneIntl: "+61733564433",
  email: "info@contrasts.com.au",
  facebook: "https://www.facebook.com/Contrastshairstudio",
  abn: "92 134 923 763",
  /** Opening hours by weekday (0 = Sunday), 24h, Brisbane time. null = closed. */
  hours: [null, null, ["09:00", "21:00"], ["09:00", "17:00"], ["09:00", "21:00"], ["08:00", "17:00"], ["08:00", "14:30"]] as const satisfies readonly (
    | readonly [string, string]
    | null
  )[],
  /** Keep the concept out of search results while the current site is live. */
  isPreview: true,
};

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;
export const telHref = `tel:${site.phoneIntl}`;
export const mailHref = `mailto:${site.email}?subject=${encodeURIComponent("Booking enquiry")}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name} ${fullAddress}`)}`;

export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return vercel ? `https://${vercel}` : "http://localhost:3000";
}
