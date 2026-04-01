"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PreviousBoutSessionCard } from "./PreviousBoutSessionCard";
import { getPreviousBoutStableKey } from "./utils";

const SLIDER_BORDER = { borderColor: "#d95404", borderWidth: "1px", borderStyle: "solid" };

/**
 * Horizontal snap scroll of session cards for one category.
 *
 * @param {object} props
 * @param {string} props.title - Section heading
 * @param {import("./data").PreviousBout[]} props.bouts
 * @param {import("posthog-js").PostHog | undefined | null} props.posthog
 */
export function PreviousBoutsCategorySlider({ title, bouts, posthog }) {
  const scrollRef = useRef(null);

  const scrollByDir = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.querySelector("[data-bout-slide]");
    const gap = 16;
    const step = first ? first.getBoundingClientRect().width + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div
      className="space-y-3 rounded-lg border border-gray-700 bg-black p-4"
      style={SLIDER_BORDER}
    >
      <div className="flex items-center justify-between gap-2 border-b border-gray-800 pb-3">
        <h3 className="text-lg font-display font-semibold text-white txtBtn">{title}</h3>
        <span className="text-sm tabular-nums text-gray-500">{bouts.length}</span>
      </div>
      {bouts.length === 0 ? (
        <p className="text-sm text-gray-500 py-4">No {title.toLowerCase()} listed yet.</p>
      ) : (
        <div className="relative">
          {bouts.length > 1 ? (
            <>
              <button
                type="button"
                aria-label={`Previous ${title} slide`}
                onClick={() => scrollByDir(-1)}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-600 bg-black/90 p-2 text-white shadow-md hover:border-[#d95404] hover:bg-[#d95404]/20 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 txtBtn" aria-hidden />
              </button>
              <button
                type="button"
                aria-label={`Next ${title} slide`}
                onClick={() => scrollByDir(1)}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-600 bg-black/90 p-2 text-white shadow-md hover:border-[#d95404] hover:bg-[#d95404]/20 transition-colors"
              >
                <ChevronRight className="h-5 w-5 txtBtn" aria-hidden />
              </button>
            </>
          ) : null}
          <div
            ref={scrollRef}
            className={cn(
              "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              bouts.length > 1 && "px-11"
            )}
          >
            {bouts.map((bout, index) => (
              <div
                key={getPreviousBoutStableKey(bout, index)}
                data-bout-slide
                className="snap-center shrink-0 w-[min(100%,20rem)] sm:w-[24rem]"
              >
                <PreviousBoutSessionCard bout={bout} posthog={posthog} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
