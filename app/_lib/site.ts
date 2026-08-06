/**
 * Single source of truth for the facts search engines read about the studio:
 * canonical origin, NAP (name / address / phone) and social profiles.
 *
 * Local SEO depends on these matching, character for character, what is
 * published on Google Business Profile, Facebook and Instagram — so they live
 * here rather than being retyped into the metadata, the JSON-LD and the page.
 */

export const SITE_URL = "https://whitewalls.in";

export const SITE_NAME = "White Walls Interior Design Studio";

export const SITE_DESCRIPTION =
  "White Walls is an interior design studio in Aizawl, Mizoram. Our website is being rebuilt — the studio remains open for residential and commercial interior design.";

/**
 * Transcribed from the Google Business Profile, which is the record Google
 * matches this site against. It is deliberately fuller than the address
 * printed on the privacy policy — the visible page drops the building line,
 * the structured data keeps it so the two records still match.
 */
export const ADDRESS = {
  street: "Solomon's Cave, Ground Floor, Tuikual South",
  locality: "Aizawl",
  region: "Mizoram",
  postalCode: "796001",
  country: "IN",
} as const;

/** Place coordinates from the Business Profile's Maps entry. */
export const GEO = { latitude: 23.7275096, longitude: 92.7180279 } as const;

export const MAPS_URL =
  "https://www.google.com/maps/place/White+Walls/@23.7275096,92.7180279,17z/data=!4m6!3m5!1s0x374d958cd1f27489:0x4dfdde92fef8209!8m2!3d23.7275096!4d92.7180279!16s%2Fg%2F11f5w_vn06";

/**
 * Displayed as typed; the tel: and JSON-LD forms add the +91 country code.
 *
 * The Business Profile also lists +91 93626 63457. That line is reserved for
 * paid social campaigns and is deliberately kept out of the site and the
 * structured data.
 */
export const PHONES = [
  { display: "9654 956 742", dial: "9654956742" },
  { display: "9862 351 441", dial: "9862351441" },
] as const;

/** Business Profile hours. 24-hour times, as schema.org requires. */
export const OPENING_HOURS = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "18:00" },
  { days: ["Saturday"], opens: "09:30", closes: "19:00" },
  { days: ["Sunday"], opens: "00:00", closes: "00:00" },
] as const;

export const EMAIL = "kimi@whitewalls.in";

export const SOCIAL_PROFILES = {
  instagram: "https://www.instagram.com/whitewallsaizawl/",
  facebook: "https://www.facebook.com/WhiteWallsAizawl",
} as const;
