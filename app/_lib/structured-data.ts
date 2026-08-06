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
 * `JSON.stringify` does not escape `<`, so a stray HTML tag in any of the
 * values above could break out of the script element. None of them are
 * user-supplied today, but escaping keeps that true if they ever become so.
 */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
