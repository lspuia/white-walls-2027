import type { NextConfig } from "next";

/**
 * Routes from the old site, removed when it was replaced by the holding page.
 * These are expected back after the redesign, so the redirects are temporary
 * (307) — a permanent 308 would be cached by browsers indefinitely and keep
 * visitors off the real pages once they return.
 */
const RETIRED_ROUTES = [
  "/contact-us",
  "/interior-design-service-aizawl-mizoram",
  "/shop-interior-hardware-accessories",
];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_ROUTES.map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

export default nextConfig;
