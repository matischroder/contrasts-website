import { allServices } from "@/content/services";
import { site, siteUrl } from "@/content/site";
import { week } from "@/lib/hours";

/** HairSalon structured data, using only the salon's own published details. */
export function SalonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    url: siteUrl(),
    telephone: site.phoneIntl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    sameAs: [site.facebook],
    openingHoursSpecification: week
      .filter((w) => w.hours)
      .map((w) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: w.name, opens: w.hours![0], closes: w.hours![1] })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Service menu",
      itemListElement: allServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
        ...(s.price !== null
          ? { priceSpecification: { "@type": "PriceSpecification", ...(s.from ? { minPrice: s.price } : { price: s.price }), priceCurrency: "AUD" } }
          : {}),
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
