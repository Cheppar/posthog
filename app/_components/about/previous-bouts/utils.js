import { PREVIOUS_BOUT_CATEGORY } from "./constants";

/**
 * @param {string} [category]
 * @returns {string}
 */
export function normalizePreviousBoutCategory(category) {
  const c = (category || "").trim().toLowerCase();
  if (
    c === "hackathons" ||
    c === "hacckathons" ||
    c === "hackathon" ||
    c.includes("hackathon")
  ) {
    return PREVIOUS_BOUT_CATEGORY.HACKATHONS;
  }
  if (c === "build sessions" || c === "build session" || c.startsWith("build")) {
    return PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS;
  }
  return c;
}

/**
 * @param {import("./data").PreviousBout[]} bouts
 * @returns {{ hackathons: import("./data").PreviousBout[], buildSessions: import("./data").PreviousBout[] }}
 */
export function partitionPreviousBoutsByCategory(bouts) {
  const list = Array.isArray(bouts) ? bouts : [];
  const hackathons = list.filter(
    (b) => normalizePreviousBoutCategory(b.category) === PREVIOUS_BOUT_CATEGORY.HACKATHONS
  );
  const buildSessions = list.filter(
    (b) => normalizePreviousBoutCategory(b.category) !== PREVIOUS_BOUT_CATEGORY.HACKATHONS
  );
  return { hackathons, buildSessions };
}

/**
 * @param {import("./data").PreviousBout} bout
 * @param {number} index
 * @returns {string}
 */
export function getPreviousBoutStableKey(bout, index) {
  return `${normalizePreviousBoutCategory(bout.category)}-${bout.event || "session"}-${index}`;
}
