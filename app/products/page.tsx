import type { Metadata } from "next";
import Link from "next/link";
import {
  ADDRESS,
  MAPS_URL,
  OPENING_HOURS,
  PHONES,
  SITE_NAME,
} from "../_lib/site";
import {
  buildProductsStructuredData,
  serializeJsonLd,
} from "../_lib/structured-data";

/**
 * The catalogue's landing page, live before the catalogue is.
 *
 * It is a "coming soon" page in the same sense the home page is: nothing is
 * being sold here yet, but the page is indexable and carries real copy, because
 * a route that ships empty and is filled in later starts from zero every time.
 * Crawled now, /products accrues age and a breadcrumb position that the brand
 * sub-pages inherit when they arrive underneath it.
 */

const PAGE_DESCRIPTION =
  "Interior hardware, fittings and accessories stocked at the White Walls showroom in Tuikual South, Aizawl. Our full product catalogue — brand by brand — is being built.";

export const metadata: Metadata = {
  // The layout's template appends the studio name, which is where "White Walls"
  // and "Aizawl" enter the title — repeating them here would only truncate it.
  title: "Products — Interior Hardware, Fittings & Accessories",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Products — Interior Hardware, Fittings & Accessories | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/products",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Products | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

/**
 * What the brand sub-pages will be grouped under. Kept as headings-in-waiting:
 * each of these becomes a section of the catalogue, so the wording here should
 * match the wording used there once the brands are listed.
 */
const CATEGORIES = [
  {
    title: "Door and cabinet hardware",
    body: "Handles, knobs, hinges, locks and latches — the fittings that decide how a door or a shutter feels every day, not just how it looks on the drawing.",
  },
  {
    title: "Kitchen and wardrobe fittings",
    body: "Drawer systems, runners, hinges, baskets, lift-up and pull-out mechanisms: the working parts behind a modular kitchen or a fitted wardrobe.",
  },
  {
    title: "Finishing hardware and accessories",
    body: "Profiles, trims, fasteners and the smaller pieces that finish a fit-out cleanly — the ones usually specified last and found hardest locally.",
  },
  {
    title: "Brands we carry",
    body: "Each brand stocked in the showroom gets its own page here — what the range covers, where it is best used, and what we keep on the shelf in Aizawl.",
  },
] as const;

/** "09:30" → "9.30 am". Times are stored 24-hour because schema.org wants them. */
function formatTime(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  const suffix = hours < 12 ? "am" : "pm";
  const hour = hours % 12 === 0 ? 12 : hours % 12;
  return minutes === 0
    ? `${hour} ${suffix}`
    : `${hour}.${String(minutes).padStart(2, "0")} ${suffix}`;
}

/**
 * Read off the same OPENING_HOURS the JSON-LD uses, so the hours a visitor sees
 * and the hours Google reads cannot drift apart. A slot that opens and closes
 * at the same time is schema.org's way of saying closed.
 */
const HOURS = OPENING_HOURS.map((slot) => ({
  days:
    slot.days.length === 1
      ? slot.days[0]
      : `${slot.days[0]} – ${slot.days[slot.days.length - 1]}`,
  time:
    slot.opens === slot.closes
      ? "Closed"
      : `${formatTime(slot.opens)} – ${formatTime(slot.closes)}`,
}));

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildProductsStructuredData()),
        }}
      />

      <main className="prose-page">
        <Link className="back back-top" href="/">
          ← Back
        </Link>

        <div className="kicker">Catalogue coming soon</div>

        <h1>Products</h1>
        <p className="lede">
          White Walls is a design studio and a showroom. Alongside the interiors
          we draw and build across Mizoram, we keep a shop at Tuikual South,
          Aizawl, stocking interior hardware, fittings and accessories from the
          brands we carry.
        </p>

        <div className="gold-rule" />

        <p>
          We are putting that stock online, brand by brand, with a page for each
          of the names we hold in the showroom. Until those pages are published,
          here is what the catalogue will cover — and how to see any of it in
          person in the meantime.
        </p>

        <h2>What the catalogue will cover</h2>
        <ul className="category-list">
          {CATEGORIES.map((category) => (
            <li key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.body}</p>
            </li>
          ))}
        </ul>

        <h2>Why buy hardware in Aizawl</h2>
        <p>
          Most interior hardware sold in Mizoram is ordered sight-unseen from
          outside the state — which is fine until a hinge is the wrong throw, a
          runner the wrong length, or a finish nothing like the photograph. We
          stock what we specify on our own projects, so you can hold it, work
          it, and take it home the same day rather than waiting on a courier.
        </p>
        <p>
          The showroom is open to everyone: homeowners fitting out a single
          kitchen, contractors buying by the box, and architects and designers
          working on projects that are not ours. You do not have to be a studio
          client to buy from us.
        </p>

        <h2>Visit the showroom</h2>
        <p>
          Until the catalogue is online, the quickest way to see what we stock
          is to come in — or to call and ask, and we will tell you plainly
          whether we have it.
        </p>

        <div className="showroom">
          <address>
            <strong>{SITE_NAME}</strong>
            <br />
            {ADDRESS.street}
            <br />
            {ADDRESS.locality}, {ADDRESS.region} {ADDRESS.postalCode}
          </address>

          <dl className="hours">
            {HOURS.map((slot) => (
              <div key={slot.days}>
                <dt>{slot.days}</dt>
                <dd>{slot.time}</dd>
              </div>
            ))}
          </dl>

          <p className="showroom-contact">
            {PHONES.map((phone, index) => (
              <span key={phone.dial}>
                {index > 0 && <span className="dot"> · </span>}
                <a href={`tel:+91${phone.dial}`}>{phone.display}</a>
              </span>
            ))}
          </p>

          <a
            className="btn"
            href={MAPS_URL}
            target="_blank"
            rel="noopener"
          >
            Get directions
          </a>
        </div>

        <Link className="back" href="/">
          ← Back
        </Link>
      </main>
    </>
  );
}
