import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../_lib/og";

/**
 * The same card the rest of the site shares. It has to be re-declared here
 * because this route sets its own `openGraph` block, which replaces the
 * layout's outright — including the image the root `opengraph-image` had
 * contributed to it. Without this file /products shares with no picture.
 */

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage();
}
