import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  COMBOS,
  IMAGE_DIR,
  MAX_PERCENT_OFF,
} from "../../../_lib/hafele-shagun-2026";

/**
 * The share card behind this route's `opengraph-image` and `twitter-image`:
 * what WhatsApp, Facebook and Instagram show when the offer link is pasted.
 *
 * It is the page's hero folded into 1200×630 — both logos, the headline, the
 * three facts and the four series pictures — rather than the studio-wide card
 * in _lib/og.tsx, because a link to a sale should look like the sale. The
 * hero's supporting sentence is deliberately not repeated here: the facts row
 * below the headline already says what the offer is.
 *
 * Satori (which draws this) only decodes PNG and JPEG, so the pictures come
 * from the PNG copies in public/…/share/, and it cannot reach the fonts
 * next/font hashes into .next, so the page's two typefaces are fetched from
 * Google Fonts at build time. If that fetch fails the card still renders, in
 * Satori's default face — the fallback swaps "₹" for "Rs" because the default
 * face has no rupee glyph.
 */

export const SHARE_SIZE = { width: 1200, height: 630 };
export const SHARE_ALT =
  "Häfele Shagun Offer 2026 — built-in kitchen appliances at offer prices from White Walls, Aizawl";
export const SHARE_CONTENT_TYPE = "image/png";

const INK = "#1a1714";
const STONE = "#f3f1ec";
const LINE = "#e3dfd6";
const MUTE = "#6e6860";
const RED = "#d20037";
const CHAMPAGNE = "#c8b89a";

const PUBLIC_DIR = join(process.cwd(), "public");

async function pngDataUri(publicPath: string) {
  const buf = await readFile(join(PUBLIC_DIR, publicPath));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

/**
 * Google Fonts hands a TTF (which Satori can read, unlike woff2) to a browser
 * old enough not to support woff2. `text` subsets the file to the characters
 * the card uses, which keeps each fetch to a few kilobytes.
 */
async function googleFont(
  family: string,
  weight: number,
  italic: boolean,
  text: string,
) {
  // "&text=" subsets the file to these characters. Anything drawn but not
  // listed comes back as a blank box, so every literal on the card — the
  // rupee sign included — has to appear in the string passed here.
  const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${axis}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then((r) => r.text());
  const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`No font file in Google Fonts CSS for ${family}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

/**
 * Every character the card draws in Jost — minus the rupee sign, which Jost
 * has no glyph for (Google Fonts answers 400 for a subset containing it).
 * Noto Sans supplies that one character, which is why the sans stack below
 * lists it as a fallback.
 */
const SANS_GLYPHS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 %·,.&-—äöüÄÖÜ";

type Font = { name: string; data: ArrayBuffer; weight: 400 | 500 | 600; style: "normal" | "italic" };

async function loadFonts(): Promise<Font[] | null> {
  try {
    const [serif, serifItalic, sans, sansMedium, rupeeFont] = await Promise.all([
      googleFont("Cormorant Garamond", 600, false, "Häfele Offer 2026"),
      googleFont("Cormorant Garamond", 600, true, "Shagun"),
      googleFont("Jost", 400, false, SANS_GLYPHS),
      googleFont("Jost", 500, false, SANS_GLYPHS),
      googleFont("Noto Sans", 500, false, "₹"),
    ]);
    return [
      { name: "Cormorant", data: serif, weight: 600, style: "normal" },
      { name: "Cormorant", data: serifItalic, weight: 600, style: "italic" },
      { name: "Jost", data: sans, weight: 400, style: "normal" },
      { name: "Jost", data: sansMedium, weight: 500, style: "normal" },
      { name: "Rupee", data: rupeeFont, weight: 500, style: "normal" },
    ];
  } catch {
    return null;
  }
}

export async function renderShareCard() {
  const [fonts, wwLogo, hafeleLogo, hood, hob, oven, dishwasher] =
    await Promise.all([
      loadFonts(),
      pngDataUri(`${IMAGE_DIR}/logo-hardware-accessories.png`),
      pngDataUri(`${IMAGE_DIR}/share/hafele-logo.png`),
      pngDataUri(`${IMAGE_DIR}/share/hero-hood.png`),
      pngDataUri(`${IMAGE_DIR}/share/hero-hob.png`),
      pngDataUri(`${IMAGE_DIR}/share/hero-oven.png`),
      pngDataUri(`${IMAGE_DIR}/share/hero-dishwasher.png`),
    ]);

  // Satori trims every style value it is given, so a key must be absent
  // rather than undefined — hence the conditional spreads below.
  const rupee = fonts ? "₹" : "Rs ";
  const serif = fonts ? { fontFamily: "Cormorant" } : {};
  const sans = fonts ? { fontFamily: "Jost, Rupee" } : {};

  const facts = [
    { value: String(COMBOS.length), label: "combo sets" },
    { value: `${rupee}11`, label: "fifth appliance with every set" },
    { value: `up to ${MAX_PERCENT_OFF}%`, label: "off MRP" },
  ];

  const tiles = [hood, hob, oven, dishwasher];

  const response = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: STONE,
          color: INK,
          ...sans,
        }}
      >
        {/* The page's own white header strip, both logos on it. The White
            Walls artwork has no alpha, so a white band behind it is not a
            workaround — it is what the page does. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderBottom: `1px solid ${LINE}`,
            padding: "16px 56px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wwLogo} width={173} height={96} alt="" />
          <div
            style={{ width: 1, height: 56, background: LINE, margin: "0 28px" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hafeleLogo} width={191} height={30} alt="" />
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          {/* Left: headline and the three facts */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: 690,
              padding: "0 0 0 56px",
            }}
          >
            <div style={{ display: "flex", width: 96, height: 5, background: CHAMPAGNE }} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                ...serif,
                fontSize: 82,
                fontWeight: 600,
                lineHeight: 0.98,
                letterSpacing: -1,
                marginTop: 22,
              }}
            >
              <span>Häfele&nbsp;</span>
              <span style={{ fontStyle: "italic", color: RED }}>Shagun</span>
              <span style={{ width: "100%" }}>Offer 2026</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 38,
                marginTop: 34,
                paddingTop: 24,
                borderTop: `1px solid ${LINE}`,
              }}
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span
                    style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.1 }}
                  >
                    {fact.value}
                  </span>
                  <span style={{ fontSize: 16, color: MUTE, marginTop: 4 }}>
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: the four series pictures, as on the page */}
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 56px 0 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: 390,
                height: 390,
                background: "#fff",
                border: `1px solid ${LINE}`,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {tiles.map((src, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 194,
                    height: 194,
                    padding: 18,
                    ...(index % 2 === 0
                      ? { borderRight: `1px solid ${LINE}` }
                      : {}),
                    ...(index < 2 ? { borderBottom: `1px solid ${LINE}` } : {}),
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} width={158} height={158} alt="" />
                </div>
              ))}
              <div
                style={{
                  position: "absolute",
                  left: 13,
                  bottom: 13,
                  background: RED,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "7px 13px",
                  borderRadius: 999,
                }}
              >
                Hood · Hob · Oven · Dishwasher
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    fonts ? { ...SHARE_SIZE, fonts } : SHARE_SIZE,
  );

  // ImageResponse draws lazily while the response streams, so a drawing error
  // surfaces as a truncated response with no stack. Drawing it to a buffer
  // first turns that into a normal thrown error with the real cause.
  try {
    const png = await response.arrayBuffer();
    return new Response(png, {
      headers: { "Content-Type": SHARE_CONTENT_TYPE },
    });
  } catch (error) {
    console.error("[share-card] failed to draw", error);
    throw error;
  }
}
