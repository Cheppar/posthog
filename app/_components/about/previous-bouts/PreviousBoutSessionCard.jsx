"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { LumaEventEmbed } from "./LumaEventEmbed";
import { resolveLumaEventId, buildLumaSimpleEmbedUrl } from "./luma";

const CARD_BORDER = { borderColor: "#d95404", borderWidth: "1px", borderStyle: "solid" };

/**
 * @param {object} props
 * @param {import("./data").PreviousBout} props.bout
 * @param {import("posthog-js").PostHog | undefined | null} props.posthog
 */
export function PreviousBoutSessionCard({ bout, posthog }) {
  const luma = (bout.luma || "").trim();
  const url = (bout.url || "").trim();
  const showUrl = url && url !== luma;
  const resolvedEventId = resolveLumaEventId(bout);
  const embedUrl = resolvedEventId ? buildLumaSimpleEmbedUrl(resolvedEventId) : null;

  return (
    <Card
      className={cn(
        "h-full gap-0 overflow-hidden bg-black py-0 text-white border border-gray-700 hover:shadow-lg transition-shadow duration-300"
      )}
      style={CARD_BORDER}
    >
      {embedUrl ? (
        <div className="w-full overflow-hidden rounded-t-lg border-b border-gray-800 bg-black">
          <LumaEventEmbed eventId={resolvedEventId} title={`${bout.event} — Luma`} />
        </div>
      ) : luma ? (
        <div className="border-b border-gray-800 bg-gray-950 px-3 py-8 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            No preview: Luma URLs like <span className="font-mono text-gray-400">luma.com/abc</span>{" "}
            don’t include <span className="font-mono text-gray-400">evt-…</span>. Open the event in
            Luma → <strong className="text-gray-400">Share → Embed</strong> and set{" "}
            <span className="font-mono text-gray-400">eventId</span> to the id in the embed URL.
          </p>
        </div>
      ) : null}
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{bout.event}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
          {luma ? (
            <a
              href={luma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm text-white hover:bg-[#d95404]/20 hover:border-[#d95404] transition-colors"
              onClick={() =>
                posthog?.capture("about_previous_bout_link_clicked", {
                  event_name: bout.event,
                  category: bout.category,
                  link_type: "luma",
                })
              }
            >
              <ExternalLink className="w-4 h-4 shrink-0 txtBtn" />
              Luma
            </a>
          ) : null}
          {showUrl ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm text-white hover:bg-[#d95404]/20 hover:border-[#d95404] transition-colors"
              onClick={() =>
                posthog?.capture("about_previous_bout_link_clicked", {
                  event_name: bout.event,
                  category: bout.category,
                  link_type: "url",
                })
              }
            >
              <ExternalLink className="w-4 h-4 shrink-0 txtBtn" />
              Link
            </a>
          ) : null}
          {!luma && !url ? (
            <p className="text-sm text-gray-500">No links added yet.</p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
