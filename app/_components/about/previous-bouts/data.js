import { PREVIOUS_BOUT_CATEGORY } from "./constants";

/**
 * Luma preview (iframe “image”) only appears when `eventId` is set to evt-… from:
 * Luma event → Share → Embed → copy from src=…/embed/event/evt-XXXX/simple
 *
 * Short links like https://luma.com/abc123 do NOT contain evt-…; you must add `eventId` yourself.
 */

/**
 * @typedef {Object} PreviousBout
 * @property {string} event - Session title shown on the card
 * @property {string} category - Use {@link PREVIOUS_BOUT_CATEGORY} values
 * @property {string} [eventId] - Luma id from embed URL (evt-…); required for iframe preview when `luma` has no evt
 * @property {string} [luma] - Public Luma event page URL
 * @property {string} [url] - Optional extra link (e.g. recap, social)
 */

/**
 * Past sessions — append rows here. Embed preview uses `eventId` or evt-… inside `luma`.
 * @type {PreviousBout[]}
 */
export const previousBouts = [
  {
    event: "Halloween Hackathon",
    category: PREVIOUS_BOUT_CATEGORY.HACKATHONS,
    eventId: "evt-5Yy61YthMuashkF",
    luma: "https://luma.com/3pvzgvu6",
    url: "https://x.com/chepparing/status/1981032705572602358?s=20",
  },
  {
    event: "Vercel Buildathon (Egerton)",
    category: PREVIOUS_BOUT_CATEGORY.HACKATHONS,
    eventId: "evt-k8bCdi5TJ2HEqKi",
    luma: "https://luma.com/i80728ln",
    url: "",
  },
  {
    event: "BuildBout Valentine Hackathon",
    category: PREVIOUS_BOUT_CATEGORY.HACKATHONS,
    eventId: "evt-D6ZwXkuz5HE9po7",
    luma: "https://luma.com/s8ilh9kq",
    url: "https://x.com/chepparing/status/2025050393823023283?s=20",
  },
  {
    event: "BuildBout X HackEgerton ",
    category: PREVIOUS_BOUT_CATEGORY.HACKATHONS,
    eventId: "https://luma.com/event/evt-D6ZwXkuz5HE9po7",
    luma: "",
    url: "https://x.com/chepparing/status/2039207378529243258?s=20",
  },
  {
    event: "Build Bout v1.1",
    category: PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS,
    eventId: "evt-w2aq4eWXSkje7ux",
    luma: "https://lu.ma/your-build-session",
    url: "",
  },
  {
    event: "Build Bout v1.2",
    category: PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS,
    eventId: "evt-w2aq4eWXSkje7ux",
    luma: "https://luma.com/4wh8571f",
    url: "https://x.com/chepparing/status/1986728882402181303?s=20",
  },
  {
    event: "Build Bout v2.1",
    category: PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS,
    eventId: "evt-w2aq4eWXSkje7ux",
    luma: "https://luma.com/4wh8571f",
    url: "https://x.com/chepparing/status/1986728882402181303?s=20",
  },
  {
    event: "Build Bout v2.2",
    category: PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS,
    eventId: "evt-kaSOO8HDVqUavPz",
    luma: "https://luma.com/ujx1t4tl",
    url: "https://x.com/chepparing/status/1986728882402181303?s=20",
  },
  {
    event: "Build Bout IoT v2.3",
    category: PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS,
    eventId: "evt-w2aq4eWXSkje7ux",
    luma: "",
    url: "",
  },
  {
    event: "Build Bout v2.4",
    category: PREVIOUS_BOUT_CATEGORY.BUILD_SESSIONS,
    eventId: "evt-w2aq4eWXSkje7ux",
    luma: "",
    url: "",
  },
];
