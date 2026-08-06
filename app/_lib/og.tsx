import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * The share card behind both `opengraph-image` and `twitter-image`.
 *
 * Deliberately plain: Satori only supports flexbox and a subset of CSS, and it
 * has no access to the Lora webfont next/font hashes into .next, so this leans
 * on the logo artwork and the brand palette rather than on brand type.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "White Walls Interior Design Studio — Aizawl, Mizoram";
export const OG_CONTENT_TYPE = "image/png";

const BG = "#f3f2f2";
const GOLD = "#b68235";
const TEXT = "#4c4a46";

export async function renderOgImage() {
  // process.cwd() is the project root, so the logo is read straight from public/.
  const logo = await readFile(
    join(process.cwd(), "public", "images", "logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: BG,
        }}
      >
        {/* The double rule that frames the live page */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: `1px solid ${GOLD}`,
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 44,
            right: 44,
            bottom: 44,
            border: `1px solid ${GOLD}`,
            opacity: 0.28,
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={620} height={329} alt="" />

        <div
          style={{ width: 120, height: 1, background: GOLD, marginTop: 12 }}
        />

        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            letterSpacing: 8,
            color: TEXT,
            textTransform: "uppercase",
          }}
        >
          Interior Design · Aizawl, Mizoram
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
