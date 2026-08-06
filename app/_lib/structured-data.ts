import {
  ADDRESS,
  EMAIL,
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
 * Only facts we can actually verify go in here. Opening hours, price range and
 * geo coordinates are deliberately absent rather than guessed: structured data
 * that contradicts the Business Profile is worse than structured data that is
 * merely incomplete.
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
        name: SITE_NAME,
        alternateName: "White Walls",
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
          addressCountry: ADDRESS.country,
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
