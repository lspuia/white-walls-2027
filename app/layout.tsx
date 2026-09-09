import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./_lib/site";
import "./globals.css";

/**
 * Google Analytics 4 property for whitewalls.in. A measurement ID is public —
 * it ships in the page for the browser to read — so it lives here rather than
 * in an environment variable.
 *
 * Loaded with next/script rather than @next/third-parties: that package's own
 * GoogleAnalytics component is the documented route, but it is still marked
 * experimental, and this is one script on a site with four runtime
 * dependencies. `afterInteractive` keeps it off the critical path. GA4's
 * enhanced measurement follows client-side route changes on its own via the
 * History API, so page views still count as visitors move around the site.
 */
const GA_MEASUREMENT_ID = "G-YXCFJH0CYV";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Child routes get " | White Walls Interior Design Studio" appended;
    // the home page overrides this with its own absolute title below.
    default: "White Walls Interior Design Studio — Website Under Construction",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  // Icons come from the app/ file conventions: favicon.ico, icon.png, apple-icon.png
  // Share images come from opengraph-image.tsx / twitter-image.tsx.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Our website is being rebuilt. The studio remains open — interior design across Aizawl, Mizoram.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Our website is being rebuilt. The studio remains open — interior design across Aizawl, Mizoram.",
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={lora.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
