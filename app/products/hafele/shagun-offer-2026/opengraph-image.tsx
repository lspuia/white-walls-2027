import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../../../_lib/og";

/**
 * The site's shared share card, re-declared for the same reason /products
 * re-declares it: this route sets its own `openGraph` block, which replaces
 * the layout's outright, image included.
 */

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage();
}
