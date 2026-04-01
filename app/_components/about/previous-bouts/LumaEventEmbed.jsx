"use client";

import { buildLumaSimpleEmbedUrl } from "./luma";

const IFRAME_BORDER_STYLE = { border: "1px solid #bfcbda88", borderRadius: "4px" };

/**
 * Reusable Luma “simple” event embed (iframe).
 *
 * @param {object} props
 * @param {string} props.eventId - Luma event id (evt-…)
 * @param {string} props.title - Short label for iframe accessibility
 * @param {string} [props.className] - Wrapper div classes (default fills a fixed aspect box)
 */
export function LumaEventEmbed({ eventId, title, className }) {
  const src = buildLumaSimpleEmbedUrl(eventId);
  if (!src) return null;

  return (
    <div
      className={
        className ??
        "relative h-[min(280px,52vw)] min-h-[220px] w-full shrink-0 bg-black"
      }
    >
      <iframe
        src={src}
        width="600"
        height="450"
        className="absolute inset-0 h-full w-full border-0"
        style={IFRAME_BORDER_STYLE}
        allow="fullscreen; payment"
        allowFullScreen
        title={title}
      />
    </div>
  );
}
