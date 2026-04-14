"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

const HR_EMAIL = "hr@lishailabs.com";

/** Last calendar day we accept applications (local time). */
const APPLICATION_CLOSE = { year: 2026, monthIndex: 3, day: 24 };

function getApplicationWindow() {
  const now = new Date();
  const postedLabel = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const closeCalStart = new Date(
    APPLICATION_CLOSE.year,
    APPLICATION_CLOSE.monthIndex,
    APPLICATION_CLOSE.day
  );
  const closeLabel = closeCalStart.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msPerDay = 1000 * 60 * 60 * 24;
  const calendarDaysUntilClose = Math.round(
    (closeCalStart.getTime() - startOfToday.getTime()) / msPerDay
  );
  const isClosed = startOfToday.getTime() > closeCalStart.getTime();
  const daysLeft = isClosed ? 0 : calendarDaysUntilClose + 1;
  return { postedLabel, closeLabel, daysLeft, isClosed };
}

const ownershipTraits = [
  {
    lead: "Bias-to-action operators.",
    text: "You take initiative, own projects end-to-end, and autonomously make things happen. You don’t wait, you move fast, adapt, and deliver.",
  },
  {
    lead: "Resilient builders.",
    text: "You tackle scaling, rapid execution, and uncertainty with resilience and continuous iteration.",
  },
  {
    lead: "Mature professionals.",
    text: "You’re respectful, own your responsibility, collaborative, and accountable.",
  },
  {
    lead: "Ownership mindset.",
    text: "You don’t just complete tasks,you own outcomes. From idea to deployment, you’re responsible for impact.",
  },
  {
    lead: "Full-stack ownership.",
    text: "You build end-to-end and ship independently, owning the core UX while adhering to design system principles.",
  },
  {
    lead: "AI-native thinkers.",
    text: "You can use AI tools to move faster, automate workflows, and enhance how you build.",
  },
  {
    lead: "Data-driven.",
    text: "You track metrics, understand performance, and use insights to guide decisions.",
  },
];

export default function Careers() {
  const posthog = usePostHog();
  const { postedLabel, closeLabel, daysLeft, isClosed } = useMemo(
    () => getApplicationWindow(),
    []
  );

  useEffect(() => {
    posthog?.capture("careers_page_viewed", { path: "/careers" });
  }, [posthog]);

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-28 md:pt-32 md:pb-28">
        <div className="mb-8 rounded-2xl bg-white px-5 py-5 text-gray-900 shadow-xl shadow-black/25 ring-1 ring-gray-200/90 md:px-6 md:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <span className="inline-flex items-center rounded-full bg-[#d95404] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Hiring
              </span>
              <p className="pt-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Posted:</span> {postedLabel}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Applications close:</span>{" "}
                {closeLabel}
              </p>
            </div>
            <div
              className={`shrink-0 rounded-xl px-4 py-3 text-center sm:min-w-[9.5rem] ${
                isClosed ? "bg-gray-100 text-gray-600" : "bg-gray-900 text-white"
              }`}
            >
              {isClosed ? (
                <p className="text-sm font-semibold">Applications closed</p>
              ) : (
                <>
                  <p className="font-display text-3xl font-bold leading-none text-[#d95404]">
                    {daysLeft}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-300">
                    {daysLeft === 1 ? "day left" : "days left"} to apply
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Product Builders
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-300 md:text-lg">
          <p>
            We&apos;re hiring builders to join us under an ownership model. What you work on will
            depend on your strengths, curiosity, and ability to execute so choose your own
            adventure.
          </p>

          <p className="text-white">
            In general, we&apos;re looking for{" "}
            <strong className="txtBtn font-semibold">Product Builders</strong> who are:
          </p>

          <ul className="list-none space-y-5 border-l-2 border-[#d95404]/60 pl-6">
            {ownershipTraits.map(({ lead, text }) => (
              <li key={lead}>
                <strong className="font-extrabold text-white">{lead}</strong> {text}
              </li>
            ))}
          </ul>

          <h2 className="pt-4 font-display text-xl font-bold text-white md:text-2xl txtBtn">
            Core requirements
          </h2>
          <ul className="list-disc space-y-3 pl-5 marker:text-[#d95404]">
            <li>
              <strong className="text-white">FullStack experience.</strong> Comfortable with using
              modern technologies (e.g. React, a preferred server-side language, and
              handling data is a bonus).
            </li>
            <li>
              <strong className="text-white">Idea-to-impact drivers.</strong> You&apos;ve taken a project
              from idea to something real and impressive in your portfolio.
            </li>
            <li>
              <strong className="text-white">Strong communication.</strong> You can document code. Clearly express ideas, write well, and make persuasive
              arguments.
            </li>
          </ul>

          <h2 className="pt-4 font-display text-xl font-bold text-white md:text-2xl txtBtn">
            Compensation model
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-[#d95404]">
            <li>Retainer fee for consistency</li>
            <li>Performance based earnings (percentage of the project value based on your contributions)</li>
            <li>Direct upside tied to your impact</li>
          </ul>

          <h2 className="pt-4 font-display text-xl font-bold text-white md:text-2xl txtBtn">
            Requirements to apply
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-[#d95404]">
            <li>A portfolio of what you&apos;ve built</li>
            <li>
              A brief introduction (under 150 words): who you are, what you&apos;ve built, and why
              you fit.
            </li>
          </ul>

          <h2 className="pt-4 font-display text-xl font-bold text-white md:text-2xl txtBtn">
            How to apply
          </h2>
          <p>
            Send your portfolio link and short introduction to{" "}
            <a
              href={`mailto:${HR_EMAIL}`}
              className="font-medium text-[#d95404] underline decoration-[#d95404]/40 underline-offset-4 hover:decoration-[#d95404]"
              onClick={() =>
                posthog?.capture("careers_apply_email_clicked", { email: HR_EMAIL })
              }
            >
              {HR_EMAIL}
            </a>
            .
          </p>

          <p className="text-sm text-gray-500">
            We are committed to a fair and accessible process. 
          </p>

          <p className="pt-6 font-display text-lg font-semibold tracking-wide text-white md:text-xl">
            Build it. Own it. Earn from it.
          </p>

          <p className="pt-8 text-sm text-gray-500">
            <Link href="/" className="text-[#d95404] hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
