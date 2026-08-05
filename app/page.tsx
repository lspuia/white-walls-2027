import Image from "next/image";
import Link from "next/link";
import DustCanvas from "./_components/DustCanvas";

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
    <div className="page">
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
              href="https://www.instagram.com/whitewallsaizawl/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              className="btn"
              href="https://www.facebook.com/WhiteWallsAizawl"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>

          <div className="contact">
            <div className="contact-row">
              <a href="tel:9654956742">9654 956 742</a>
              <span className="dot">·</span>
              <a href="tel:9862351441">9862 351 441</a>
            </div>
            <span>Tuikual South · Aizawl, Mizoram</span>
            <Link className="privacy" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
