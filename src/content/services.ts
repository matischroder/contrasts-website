/**
 * Service menu transcribed from contrasts.com.au/services.html
 * ("All prices are correct as at 1 July, 2026"). Prices in AUD, GST inclusive.
 * `from: true` = "from" price (short hair); `price: null` = POA.
 */

export type Service = { id: string; name: string; price: number | null; from: boolean };
export type ServiceGroup = { id: string; title: string; blurb: string; services: Service[] };

const s = (id: string, name: string, price: number | null, from = true): Service => ({ id, name, price, from });

export const serviceGroups: ServiceGroup[] = [
  {
    id: "cutting",
    title: "Cutting & Styling",
    blurb: "Cuts, blow-dries and men's cuts.",
    services: [
      s("style-cut", "Style Cut", 70),
      s("style-cut-blowdry", "Style Cut & Blowdry", 80),
      s("blowdry", "Blowdry", 55),
      s("mens-cut", "Men's Cut", 45),
      s("clipper-cut", "Clipper Cut", 20),
    ],
  },
  {
    id: "colour",
    title: "Colour",
    blurb: "Ammonia-free colour, from regrowth to balayage.",
    services: [s("regrowth", "Regrowth Colour", 95), s("full-colour", "Full Colour", 110), s("balayage", "Balayage", 180)],
  },
  {
    id: "foiling",
    title: "Foiling",
    blurb: "From a few foils to a full head.",
    services: [
      s("min-foils", "Minimum Foils", 50),
      s("partline", "Partline and Sides", 120),
      s("half-head", "½ Head", 150),
      s("full-head", "Full Head", 200),
    ],
  },
  {
    id: "permanent",
    title: "Permanent Styling",
    blurb: "Curls, straightening and smoothing.",
    services: [
      s("perm-curls", "Permanent Curls", 150),
      s("perm-straight", "Permanent Straightening", null),
      s("keratin", "Keratin Smoothing Treatment", 160),
    ],
  },
  {
    id: "treatments",
    title: "Treatments",
    blurb: "O&M in-salon treatments.",
    services: [s("om-smooth", "O&M SMOOTH + SHINE Treatment", 30, false), s("om-volume", "O&M VOLUME + SHINE Treatment", 30, false)],
  },
];

export const allServices = serviceGroups.flatMap((g) => g.services);

export const pricesAsAt = "1 July 2026";
export const priceNotes = [
  "Prices may vary depending on hair type and length and are subject to change without notice.",
  "Quoted prices are based on short length hair. Exact prices can be provided on application.",
  "All prices are GST inclusive.",
];

export const formatPrice = (p: Service) => (p.price === null ? "POA" : `${p.from ? "from " : ""}$${p.price}`);
