"use client";

import Link from "next/link";

// Static content (no Supabase)
const staticContent = {
  tag: "Welcome on Board",
  mainTitle: "Build | Bout", // Fixed "Gasify Ke" to "Gasify Kenya"
  largeExplainer: "A community of builders",
  explanation: "A co-working community in Nakuru, Kenya. Looking for builders who want a community they'll invest in."
};

const LiquidGas = () => {
  return (
    <div>
      <section className="pt-2 pb-10 md:pt-10 md:pb-4  relative overflow-hidden">
        {/* Background with local SVG from public folder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: "url('/posthog/2.png')", // Local SVG in public/bg/
          }}
        ></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Removed the LPG cylinder illustration and geometric shapes */}
          
          {/* Text layout (manual content, no Supabase) */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white border-2 border-white bg-transparent transition-all duration-300 hover:txtWhite hover:scale-105 hover:shadow-lg hover:shadow-white/50 active:scale-95">
                {staticContent.tag}
              </span>
            </div>
            <h1 className="text-4xl txtWhite  font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-6">
  {staticContent.mainTitle}
  <span className="block text-2xl txtWhite mt-4 sm:text-4xl">
    "{staticContent.largeExplainer}"
  </span>
</h1>
            <p className="mt-6 text-lg md:text-xl txtWhite max-w-2xl mx-auto">
              {staticContent.explanation}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="relative px-6 py-3 rounded-full text-base font-medium text-white border-2 border-white bg-transparent transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-white/50 active:scale-95"
              >
                Learn More
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiquidGas;