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

export const ADDRESS = {
  street: "Tuikual South",
  locality: "Aizawl",
  region: "Mizoram",
  country: "IN",
} as const;

/** Displayed as typed; the tel: and JSON-LD forms add the +91 country code. */
export const PHONES = [
  { display: "9654 956 742", dial: "9654956742" },
  { display: "9862 351 441", dial: "9862351441" },
] as const;

export const EMAIL = "kimi@whitewalls.in";

export const SOCIAL_PROFILES = {
  instagram: "https://www.instagram.com/whitewallsaizawl/",
  facebook: "https://www.facebook.com/WhiteWallsAizawl",
} as const;
