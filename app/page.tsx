import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DustCanvas from "./_components/DustCanvas";
import { PHONES, SOCIAL_PROFILES } from "./_lib/site";
import { buildStructuredData, serializeJsonLd } from "./_lib/structured-data";

export const metadata: Metadata = {
  // `absolute` opts out of the layout's "%s | White Walls…" template, which
  // would otherwise duplicate the studio name already in this title.
  title: {
    absolute:
      "White Walls Interior Design Studio — Aizawl, Mizoram | Website Under Construction",
  },
  alternates: { canonical: "/" },
};

const MARQUEE_TEXT =
  "Website under construction · The studio remains open · Aizawl · Website under construction · The studio remains open · Aizawl · ";

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function UnderConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildStructuredData()),
        }}
      />

      <main className="page">
        <DustCanvas />
        <div className="frame-outer" />
        <div className="frame-inner" />

        <div className="marquee-strip">
          <div className="marquee" aria-hidden="true">
            <span>{MARQUEE_TEXT}</span>
            <span>{MARQUEE_TEXT}</span>
          </div>
        </div>

        <div className="center">
          <div className="stack">
            {/* The wordmark carries the brand visually, but a logo is an image
                — crawlers and screen readers need a real heading, so the page's
                one h1 is here and hidden rather than absent. */}
            <h1 className="visually-hidden">
              White Walls Interior Design Studio — Aizawl, Mizoram
            </h1>

            <Image
              className="logo"
              src="/images/logo.png"
              alt="White Walls — Interior Design Studio"
              width={807}
              height={428}
              priority
            />

            <div className="gold-rule" />

            <div className="kicker">A notice to our visitors</div>

            <p className="body-copy">
              While we redesign whitewalls.in, the studio remains open — drawing,
              drafting, and building beautiful interiors across Mizoram. Follow
              along as the new site takes shape.
            </p>

            <div className="socials">
              <a
                className="btn"
                href={SOCIAL_PROFILES.instagram}
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon />
                Instagram
              </a>
              <a
                className="btn"
                href={SOCIAL_PROFILES.facebook}
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon />
                Facebook
              </a>
            </div>

            <div className="contact">
              <div className="contact-row">
                <a href={`tel:${PHONES[0].dial}`}>{PHONES[0].display}</a>
                <span className="dot">·</span>
                <a href={`tel:${PHONES[1].dial}`}>{PHONES[1].display}</a>
              </div>
              <span>Tuikual South · Aizawl, Mizoram</span>
              {/* /products is otherwise reachable only from the sitemap. A page
                  no page links to is a page Google treats as an afterthought,
                  so the holding page carries the one link into it. */}
              <div className="contact-links">
                <Link className="privacy" href="/products">
                  Products
                </Link>
                <Link className="privacy" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
