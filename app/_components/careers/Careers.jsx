"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

const HR_EMAIL = "hr@lishailabs.com";

const ownershipTraits = [
  {
    Lead: "Bias-to-action operators.",
    Text: "You take initiative, own projects end-to-end, and autonomously make things happen. You don’t wait, you move fast, adapt, and deliver.",    
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

  useEffect(() => {
    posthog?.capture("careers_page_viewed", { path: "/careers" });
  }, [posthog]);

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-28 md:pt-32 md:pb-28">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[#d95404]">
          Hiring
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Product Builders
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-300 md:text-lg">
          <p>
            We&apos;re hiring builders to join us under an ownership model. What you work on will
            depend on your strengths, curiosity, and ability to execute—so choose your own
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
