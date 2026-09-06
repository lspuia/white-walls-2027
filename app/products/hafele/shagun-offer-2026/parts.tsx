import Image from "next/image";
import { applianceAlt, type Appliance } from "../../../_lib/hafele-shagun-2026";
import s from "./shagun.module.css";

/**
 * Pieces shared by the server-rendered combo sets and the client-rendered
 * appliance grid. No "use client" here: this file is a plain component module
 * that lands in whichever bundle imports it.
 */

/** The WhatsApp glyph used on every enquiry button and link. */
export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

/**
 * The series photograph for an appliance, or the "on request" placeholder
 * for the handful Häfele supplied no picture for. Renders the inside of a
 * `.pic` box; the caller owns the box so it can add a badge to it.
 */
export function ProductPicture({
  appliance,
  sizes,
}: {
  appliance: Appliance;
  /** The `sizes` hint for next/image — how wide this picture renders. */
  sizes: string;
}) {
  if (!appliance.image) {
    return (
      <span className={s.ph}>
        Image available
        <br />
        on request
      </span>
    );
  }

  return (
    <div className={s.picInner}>
      <Image
        className={s.picImg}
        src={appliance.image}
        alt={applianceAlt(appliance)}
        fill
        sizes={sizes}
      />
    </div>
  );
}
