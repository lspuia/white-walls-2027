import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "./_lib/site";

/** Sizes present in public/icons — kept in sync with what is on disk. */
const ICON_SIZES = [48, 72, 96, 144, 192, 256, 384, 512];

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "White Walls",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f2f2",
    theme_color: "#f3f2f2",
    icons: ICON_SIZES.map((size) => ({
      src: `/icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    })),
  };
}
