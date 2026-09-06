import {
  SHARE_ALT,
  SHARE_CONTENT_TYPE,
  SHARE_SIZE,
  renderShareCard,
} from "./share-card";

/**
 * This route's own share card, unlike /products which reuses the studio's.
 * See share-card.tsx for what it draws and why.
 */

export const alt = SHARE_ALT;
export const size = SHARE_SIZE;
export const contentType = SHARE_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderShareCard();
}
