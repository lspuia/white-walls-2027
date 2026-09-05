"use client";

import { useState } from "react";
import {
  CATEGORIES,
  CATEGORY_SHORT,
  formatInr,
  percentOff,
  whatsappLink,
  type Appliance,
  type Category,
} from "../../../_lib/hafele-shagun-2026";
import { ProductPicture, WhatsAppIcon } from "./parts";
import s from "./shagun.module.css";

/**
 * "All appliances": the category filter and the card grid under it.
 *
 * The only interactive part of the page, so the only Client Component. The
 * full list arrives as a prop from the server page and is rendered in the
 * HTML with "All" selected, so crawlers and no-JS visitors see every card.
 */

type Filter = Category | "All";

const FILTERS: readonly Filter[] = ["All", ...CATEGORIES];

const CARD_SIZES = "(max-width: 760px) 50vw, (max-width: 1024px) 33vw, 300px";

export function ApplianceGrid({
  appliances,
}: {
  appliances: readonly Appliance[];
}) {
  const [active, setActive] = useState<Filter>("All");

  const list =
    active === "All"
      ? appliances
      : appliances.filter((appliance) => appliance.category === active);

  const count = `${list.length} appliance${list.length === 1 ? "" : "s"}${
    active === "All" ? " in the offer" : ` · ${active}`
  }`;

  return (
    <>
      <div
        className={s.filters}
        role="group"
        aria-label="Filter by category"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={filter === active}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={s.count} aria-live="polite">
        {count}
      </div>

      <div className={s.grid}>
        {list.map((appliance) => (
          <article key={appliance.code} className={s.card}>
            <div className={s.pic}>
              <span className={s.off}>
                {percentOff(appliance.mrp, appliance.price)}% off
              </span>
              <ProductPicture appliance={appliance} sizes={CARD_SIZES} />
            </div>
            <div className={s.body}>
              <div className={s.series}>
                {CATEGORY_SHORT[appliance.category]} · {appliance.series}
              </div>
              <h3>{appliance.name}</h3>
              <div className={s.spec}>{appliance.spec}</div>
              <div className={s.code}>Art. {appliance.code}</div>
              <div className={s.p}>
                <span className={s.now}>{formatInr(appliance.price)}</span>
                <span className={s.was}>MRP {formatInr(appliance.mrp)}</span>
              </div>
              <a
                className={s.wa}
                href={whatsappLink(
                  `${appliance.name} (Art. ${appliance.code}) at ${formatInr(appliance.price)}`,
                )}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon /> Ask about this
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
