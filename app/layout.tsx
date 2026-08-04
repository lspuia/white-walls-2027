import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whitewalls.in"),
  title: "White Walls Interior Design Studio — Website Under Construction",
  description:
    "While we redesign whitewalls.in, the studio remains open — drawing, drafting, and building beautiful interiors across Mizoram.",
  // Icons come from the app/ file conventions: favicon.ico, icon.png, apple-icon.png
  openGraph: {
    title: "White Walls Interior Design Studio",
    description:
      "Our website is being rebuilt. The studio remains open — interior design across Aizawl, Mizoram.",
    url: "https://whitewalls.in",
    siteName: "White Walls Interior Design Studio",
    locale: "en_IN",
    type: "website",
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
    <html lang="en" className={lora.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
