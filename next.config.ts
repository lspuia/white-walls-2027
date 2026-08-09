import type { NextConfig } from "next";

/**
 * Routes from the old site, removed when it was replaced by the holding page.
 *
 * Two of them still point at `/` and stay temporary (307): the pages they name
 * are expected back after the redesign, and a permanent 308 would be cached by
 * browsers indefinitely and keep visitors off the real pages once they return.
 *
 * The old shop URL is the exception. /products is its successor and is already
 * live at the path the catalogue will keep, so that redirect is permanent —
 * which is what tells Google to fold the old URL's history and inbound links
 * into the new page rather than treat it as a page that has merely stepped out.
 */
const RETIRED_ROUTES = [
  { source: "/contact-us", destination: "/", permanent: false },
  {
    source: "/interior-design-service-aizawl-mizoram",
    destination: "/",
    permanent: false,
  },
  {
    source: "/shop-interior-hardware-accessories",
    destination: "/products",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_ROUTES;
  },
};

export default nextConfig;
