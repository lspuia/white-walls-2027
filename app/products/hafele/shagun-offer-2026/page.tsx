import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  APPLIANCES,
  CATEGORY_SHORT,
  COMBOS,
  IMAGE_DIR,
  MAX_PERCENT_OFF,
  OFFER_PATH,
  WHATSAPP_DIAL,
  WHATSAPP_INTRO_URL,
  comboAppliances,
  formatInr,
  percentOff,
  whatsappLink,
  type Combo,
} from "../../../_lib/hafele-shagun-2026";
import { SITE_NAME } from "../../../_lib/site";
import {
  buildShagunOfferStructuredData,
  serializeJsonLd,
} from "../../../_lib/structured-data";
import { ApplianceGrid } from "./ApplianceGrid";
import { ProductPicture, WhatsAppIcon } from "./parts";
import s from "./shagun.module.css";

/**
 * Häfele Shagun Offer 2026 — the first brand page under /products.
 *
 * Ported from the designed handoff at handoff/hafele-shagun-offer.html. The
 * handoff was one self-contained file with every picture inlined as base64
 * and the catalogue rendered by a script; here the pictures are static files,
 * the catalogue is _lib/hafele-shagun-2026.ts, and everything except the
 * category filter is rendered on the server.
 *
 * The page keeps the handoff's own look (Jost + Cormorant Garamond, the red
 * and champagne palette) rather than the holding page's, because it is a
 * campaign landing page for the hardware shop, co-branded with Häfele.
 */

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

/**
 * Search and share metadata.
 *
 * The title is absolute — the layout's "| White Walls Interior Design Studio"
 * template would push it past 80 characters and search results cut it at
 * about 60. The description leads with what is searched for (Häfele, kitchen
 * appliances, Aizawl) and the two hooks the offer is built on. The share
 * image is this route's own card — see share-card.tsx.
 */
const PAGE_TITLE = "Häfele Shagun Offer 2026 | White Walls, Aizawl";

const PAGE_DESCRIPTION = `Häfele built-in kitchen appliances at Shagun offer prices in Aizawl, Mizoram: ${COMBOS.length} combo sets with a fifth appliance for ₹11, and up to ${MAX_PERCENT_OFF}% off MRP on hoods, hobs, ovens, microwaves and dishwashers.`;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: OFFER_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: OFFER_PATH,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/** The four series pictures tiled in the hero, in reading order. */
const HERO_TILES = [
  { src: `${IMAGE_DIR}/hero-hood.webp`, label: "Cooker hood" },
  { src: `${IMAGE_DIR}/hero-hob.webp`, label: "Hob" },
  { src: `${IMAGE_DIR}/hero-oven.webp`, label: "Oven" },
  { src: `${IMAGE_DIR}/hero-dishwasher.webp`, label: "Dishwasher" },
] as const;

const COMBO_ITEM_SIZES = "(max-width: 760px) 50vw, 200px";

/** "Teresa T-90 BLDC" → "Teresa T-90": the set title names the hood by model. */
function hoodModel(name: string) {
  return name.replace(" BLDC T-Sensor", "").replace(" BLDC", "");
}

function ComboSet({ combo }: { combo: Combo }) {
  const all = comboAppliances(combo);
  const items = all.slice(0, 4);
  const bonus = all[4];
  const total = all.reduce((sum, appliance) => sum + appliance.mrp, 0);
  const names = `${items.map((a) => a.name).join(", ")} + ${bonus.name}`;
  const title = `${hoodModel(items[0].name)} hood + ${items[1].name} hob set`;

  return (
    <article className={s.combo} id={`combo-${combo.n}`}>
      <div className={s.comboItems}>
        {items.map((appliance) => (
          <div key={appliance.code} className={s.item}>
            <div className={s.pic}>
              <ProductPicture appliance={appliance} sizes={COMBO_ITEM_SIZES} />
            </div>
            <div>
              <div className={s.nm}>{appliance.name}</div>
              <div className={s.cat}>{CATEGORY_SHORT[appliance.category]}</div>
            </div>
            <div className={s.mrp}>MRP {formatInr(appliance.mrp)}</div>
          </div>
        ))}
        <div className={`${s.item} ${s.bonus}`}>
          <div className={s.pic}>
            <ProductPicture appliance={bonus} sizes={COMBO_ITEM_SIZES} />
          </div>
          <div>
            <span className={s.badge}>Yours for ₹11</span>
            <div className={s.nm}>{bonus.name}</div>
            <div className={s.cat}>{CATEGORY_SHORT[bonus.category]}</div>
            <div className={s.mrp}>MRP {formatInr(bonus.mrp)}</div>
          </div>
        </div>
      </div>
      <div className={s.comboPrice}>
        <div>
          <div className={s.n}>Combo set {combo.n} of {COMBOS.length}</div>
          <div className={s.t}>{title}</div>
          <div className={s.price}>
            <div className={s.was}>MRP {formatInr(total)}</div>
            <div className={s.now}>
              {formatInr(combo.price)}
              <small>for all five</small>
            </div>
            <span className={s.save}>
              Save {formatInr(total - combo.price)} ·{" "}
              {percentOff(total, combo.price)}% off
            </span>
          </div>
        </div>
        <a
          className={`${s.btn} ${s.btnWa}`}
          href={whatsappLink(
            `Combo set ${combo.n} (${names}) at ${formatInr(combo.price)}`,
          )}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon /> Enquire about set {combo.n}
        </a>
      </div>
    </article>
  );
}

export default function ShagunOfferPage() {
  // Sanity-check the sets against the table at render time, so a typo in the
  // data file fails the build rather than printing a broken set.
  COMBOS.forEach((combo) => comboAppliances(combo));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildShagunOfferStructuredData()),
        }}
      />

      <div className={`${s.page} ${jost.variable} ${cormorant.variable}`}>
        <header className={s.header}>
          <div className={`${s.wrap} ${s.bar}`}>
            <div className={s.brands}>
              <Link className={s.ww} href="/" aria-label="White Walls">
                <Image
                  src={`${IMAGE_DIR}/logo-hardware-accessories.png`}
                  alt="White Walls — Hardware & Accessories"
                  width={800}
                  height={445}
                  preload
                />
              </Link>
              <span className={s.sep} aria-hidden="true" />
              <span className={s.hf}>
                <Image
                  src={`${IMAGE_DIR}/hafele-logo.webp`}
                  alt="Häfele"
                  width={400}
                  height={63}
                />
              </span>
            </div>
            <nav className={s.nav} aria-label="Sections">
              <a href="#combos">Combo sets</a>
              <a href="#appliances">All appliances</a>
              <a href="#terms">Offer terms</a>
            </nav>
            <a
              className={`${s.btn} ${s.btnWa}`}
              href={WHATSAPP_INTRO_URL}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
        </header>

        {/* Mobile only. The desktop nav is hidden at this width, and the ten
            combo sets sit between the top of the page and the appliance grid,
            so the sections need reaching without scrolling past them. This bar
            sticks instead of the header — a sticky header carrying the full
            logo would hold on to a sixth of a phone screen. */}
        <nav className={s.jump} aria-label="Jump to a section">
          <a href="#combos">Combo sets</a>
          <a className={s.jumpPrimary} href="#appliances">
            All {APPLIANCES.length} appliances
          </a>
          <a href="#terms">Offer terms</a>
        </nav>

        <main>
          <div className={s.hero}>
            <div className={s.wrap}>
              <div>
                <h1 className={s.serif}>
                  Häfele <em>Shagun</em>
                  <br />
                  Offer 2026
                </h1>
                {/* Mizo, on an en-IN page: tagged so screen readers switch
                    voice rather than reading it as English. */}
                <p className={s.lead} lang="lus">
                  Häfele Kitchen Appliances hovah Festive Offer tha tak kan pe
                  thei e.{" "}
                  {/* The number is the studio line held in WHATSAPP_DIAL, so
                      the href follows it if that ever changes. Linked for the
                      call: WhatsApp already has its own button below. */}
                  <a className={s.leadTel} href={`tel:+${WHATSAPP_DIAL}`}>
                    98623 51441
                  </a>{" "}
                  ah whatsapp leh phone call in kan biak thei reng e !
                </p>
                <div className={s.cta}>
                  <a
                    className={`${s.btn} ${s.btnWa}`}
                    href={WHATSAPP_INTRO_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    <WhatsAppIcon />
                    Get a quote on WhatsApp
                  </a>
                  <a className={`${s.btn} ${s.btnLine}`} href="#combos">
                    See the combo sets
                  </a>
                </div>
                <div className={s.facts}>
                  <div>
                    <b>{COMBOS.length}</b>combo sets
                  </div>
                  <div>
                    <b>₹11</b>fifth appliance with every set
                  </div>
                  <div>
                    <b>up to {MAX_PERCENT_OFF}%</b>off MRP
                  </div>
                </div>
              </div>
              <div className={s.heroVisual} aria-hidden="true">
                {HERO_TILES.map((tile) => (
                  <div key={tile.src} className={s.heroTile}>
                    <div className={s.picInner}>
                      <Image
                        className={s.picImg}
                        src={tile.src}
                        alt=""
                        fill
                        sizes="(max-width: 760px) 50vw, 300px"
                        loading="eager"
                      />
                    </div>
                  </div>
                ))}
                <span className={s.tag}>
                  {HERO_TILES.map((tile) => tile.label).join(" · ")}
                </span>
              </div>
            </div>
          </div>

          <section id="combos" className={s.section}>
            <div className={s.wrap}>
              <div className={s.champ} />
              <div className={s.secHead}>
                <div>
                  <h2>Combo sets</h2>
                  <p>
                    Four appliances at one Shagun price. The fifth piece — a
                    dishwasher or induction hob — is added to your set for ₹11.
                  </p>
                </div>
              </div>
              {COMBOS.map((combo) => (
                <ComboSet key={combo.n} combo={combo} />
              ))}
            </div>
          </section>

          <div className={s.why}>
            <div className={s.wrap}>
              <div>
                <h3>Bought locally, installed by Häfele</h3>
                <p>
                  White Walls is an authorised Häfele reseller in Aizawl: you
                  buy here, and we handle the delivery. Installation is carried
                  out by Häfele&apos;s own service centre.
                </p>
              </div>
              <div>
                <h3>Fits your kitchen plan</h3>
                <p>
                  Kim, our principal interior designer, can check cut-outs,
                  ducting routes and cabinet clearances before you commit, so
                  appliances sit right in the carcass.
                </p>
              </div>
              <div>
                <h3>Häfele warranty, registered for you</h3>
                <p>
                  Every appliance carries Häfele India&apos;s manufacturer
                  warranty. We register your purchase so warranty and service
                  requests are simple.
                </p>
              </div>
            </div>
          </div>

          <section id="appliances" className={s.section}>
            <div className={s.wrap}>
              <div className={s.champ} />
              <div className={s.secHead}>
                <div>
                  <h2>All appliances</h2>
                  <p>
                    Every Häfele appliance in the Shagun offer, with MRP and
                    offer price. Images show the series; sizes are noted on
                    each card.
                  </p>
                </div>
              </div>
              <ApplianceGrid appliances={APPLIANCES} />
            </div>
          </section>
        </main>

        <footer className={s.footer}>
          <div className={`${s.wrap} ${s.footerCols}`}>
            <div>
              <h4>White Walls — Hardware &amp; Accessories</h4>
              <p>H.No.141/3, Tuikual South, Aizawl, Mizoram 796001</p>
              <p>
                Interior design studio and authorised dealer for Häfele,
                Hettich, Brassage and VMZINC. Founded 2017.
              </p>
            </div>
            <div>
              <h4>Talk to us</h4>
              <p>
                <a href={`https://wa.me/${WHATSAPP_DIAL}`}>
                  +91 98623 51441 (WhatsApp)
                </a>
              </p>
              <p>
                <a href="tel:+919654956742">+91 96549 56742</a>
              </p>
              <p>
                <a href="mailto:kimi@whitewalls.in">kimi@whitewalls.in</a>
              </p>
              <p>
                <Link href="/">whitewalls.in</Link>
              </p>
            </div>
            <div>
              <h4>Follow</h4>
              <p>
                <a
                  href="https://www.instagram.com/whitewallsaizawl_products"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram — @whitewallsaizawl_products
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/whitewallsaizawlproducts/"
                  target="_blank"
                  rel="noopener"
                >
                  Facebook — White Walls Products
                </a>
              </p>
            </div>
          </div>
          <div className={s.wrap}>
            <div className={s.terms} id="terms">
              <strong>Offer terms.</strong> Prices shown are Häfele India MRP
              and Shagun offer prices in Indian Rupees, inclusive of GST. Offer
              valid for a limited period and while stocks last. Combo sets must
              be purchased together; the ₹11 appliance is available only with
              the full set. Installation is carried out by the Häfele service
              centre and is charged separately, as are delivery, ducting,
              chimney extensions and any civil work. Product images are
              representative of the series; finishes and sizes as per the model
              name. Warranty as per Häfele India&apos;s warranty policy. Häfele
              and the Häfele logo are trademarks of Häfele SE &amp; Co KG.
              Conditions apply.
            </div>
          </div>
        </footer>

        <a
          className={`${s.btn} ${s.btnWa} ${s.mobCta}`}
          href={WHATSAPP_INTRO_URL}
          target="_blank"
          rel="noopener"
        >
          Get a quote on WhatsApp
        </a>
      </div>
    </>
  );
}
