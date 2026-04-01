/**
 * Luma “simple” embed base — see Share → Embed in the Luma dashboard.
 * @see https://luma.com/embed/event/{eventId}/simple
 */
export const LUMA_SIMPLE_EMBED_ORIGIN = "https://luma.com";

const EVT_ID_PATTERN = /^evt-[a-z0-9]+$/i;

/**
 * @param {string} eventId
 * @returns {string|null}
 */
export function buildLumaSimpleEmbedUrl(eventId) {
  const id = (eventId || "").trim();
  if (!EVT_ID_PATTERN.test(id)) return null;
  return `${LUMA_SIMPLE_EMBED_ORIGIN}/embed/event/${id}/simple`;
}

/**
 * Resolves evt-… from explicit `eventId` or from a Luma / embed URL string.
 * @param {{ eventId?: string, luma?: string }} source
 * @returns {string|null}
 */
export function resolveLumaEventId(source) {
  if (!source || typeof source !== "object") return null;
  const explicit = (source.eventId || "").trim();
  if (EVT_ID_PATTERN.test(explicit)) return explicit;

  const luma = (source.luma || "").trim();
  if (!luma) return null;

  const fromEmbedPath = luma.match(/\/embed\/event\/(evt-[a-z0-9]+)/i);
  if (fromEmbedPath) return fromEmbedPath[1];

  const anywhere = luma.match(/\b(evt-[a-z0-9]+)\b/i);
  return anywhere ? anywhere[1] : null;
}
