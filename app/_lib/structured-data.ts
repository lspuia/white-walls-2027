import {
  ADDRESS,
  EMAIL,
  GEO,
  MAPS_URL,
  OPENING_HOURS,
  PHONES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "./site";

/**
 * schema.org description of the studio, emitted as JSON-LD on the home page.
 *
 * This is what lets Google connect whitewalls.in to the Google Business Profile
 * for local/map results — which matters more than usual right now, because the
 * holding page has almost no crawlable copy for it to read instead.
 *
 * Every value here is transcribed from that Profile so the two records agree;
 * see _lib/site.ts. Anything the Profile does not state (price range, service
 * catalogue) stays out rather than being guessed — markup that contradicts the
 * Profile is worse than markup that is merely incomplete.
 *
 * Note there is no `aggregateRating`, despite the Profile showing 5.0 from 14
 * reviews. Google's structured data policy forbids a site from marking up
 * reviews of itself, and those stars are already shown by Google from its own
 * data. Adding them here would risk a manual action and gain nothing.
 */

const BUSINESS_ID = `${SITE_URL}/#studio`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": BUSINESS_ID,
        // "White Walls" is the name on the Business Profile; matching it
        // exactly is the point of this block, so the descriptive form of the
        // name is demoted to alternateName.
        name: "White Walls",
        alternateName: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        image: `${SITE_URL}/images/logo.png`,
        email: EMAIL,
        telephone: PHONES.map((phone) => `+91${phone.dial}`),
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        hasMap: MAPS_URL,
        openingHoursSpecification: OPENING_HOURS.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: slot.days.map((day) => `https://schema.org/${day}`),
          opens: slot.opens,
          closes: slot.closes,
        })),
        founder: {
          "@type": "Person",
          name: "Kimi Pachuau",
        },
        areaServed: [
          { "@type": "City", name: "Aizawl" },
          { "@type": "State", name: "Mizoram" },
        ],
        knowsAbout: [
          "Interior design",
          "Residential interior design",
          "Commercial interior design",
          "Interior fit-out",
        ],
        sameAs: Object.values(SOCIAL_PROFILES),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

/**
 * The products page, described as a page rather than as a shop.
 *
 * No `Product`, `Offer` or `OfferCatalog` markup here: we carry brands we have
 * not yet listed, at prices and availability the site does not state, so any
 * product markup would be a guess — and product markup that cannot be verified
 * against the page is the kind Google issues manual actions for. What is true
 * today is that this is a page about the studio's showroom stock, so that is
 * all it claims. Product entities arrive with the real brand sub-pages.
 *
 * The breadcrumb is the useful part meanwhile: it tells Google that /products
 * sits under the home page, and it is what renders in the result snippet.
 */
export function buildProductsStructuredData() {
  const pageUrl = `${SITE_URL}/products`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: "Products — Interior Hardware, Fittings & Accessories",
        description:
          "The White Walls product catalogue, brand by brand — interior hardware, fittings and accessories stocked at our showroom in Tuikual South, Aizawl. Catalogue pages are being built.",
        inLanguage: "en-IN",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl },
        ],
      },
    ],
  };
}

/**
 * `JSON.stringify` does not escape `<`, so a stray HTML tag in any of the
 * values above could break out of the script element. None of them are
 * user-supplied today, but escaping keeps that true if they ever become so.
 */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
