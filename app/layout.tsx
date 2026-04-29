import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "White Walls Interior Design",
  description: "Interior design consultancy based in Aizawl, Mizoram. Creative & functional design solutions for residential & commercial interior design projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      </head>
      <body className="page">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
