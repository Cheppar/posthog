"use client";

import { previousBouts } from "./data";
import { partitionPreviousBoutsByCategory } from "./utils";
import { PreviousBoutsCategorySlider } from "./PreviousBoutsCategorySlider";

/**
 * About page tab: past hackathons and build sessions (sliders + Luma embeds).
 *
 * @param {object} props
 * @param {import("posthog-js").PostHog | undefined | null} props.posthog
 */
export function PreviousBoutsSection({ posthog }) {
  const { hackathons, buildSessions } = partitionPreviousBoutsByCategory(previousBouts);
  const hasAny = previousBouts.length > 0;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
        Previous Bout Sessions
      </h2>
      <p className="text-lg text-gray-400 mb-8">
        Hackathons and build sessions we&apos;ve run — swipe or use the arrows to browse a card per
        session (Luma and other links).
      </p>

      {!hasAny ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No previous bout sessions to display yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          <PreviousBoutsCategorySlider title="Hackathons" bouts={hackathons} posthog={posthog} />
          <PreviousBoutsCategorySlider
            title="Build sessions"
            bouts={buildSessions}
            posthog={posthog}
          />
        </div>
      )}
    </div>
  );
}
