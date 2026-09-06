import {
  SHARE_ALT,
  SHARE_CONTENT_TYPE,
  SHARE_SIZE,
  renderShareCard,
} from "./share-card";

/** The same card as `opengraph-image`, for the twitter:image tags. */

export const alt = SHARE_ALT;
export const size = SHARE_SIZE;
export const contentType = SHARE_CONTENT_TYPE;

export default function TwitterImage() {
  return renderShareCard();
}
