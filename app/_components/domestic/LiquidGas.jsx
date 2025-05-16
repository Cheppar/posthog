"use client";

import Link from "next/link";

// Static content (no Supabase)
const staticContent = {
  tag: "Sustainable Energy",
  mainTitle: "Gasify Kenya", // Fixed "Gasify Ke" to "Gasify Kenya"
  largeExplainer: "Affordable LPG at your fingertips",
  explanation: "Combining the expertise of Kenya's biggest energy retailer with a local touch. Delivering great service, great rates and great rewards."
};

const LiquidGas = () => {
  return (
    <div>
      <section className="pt-2 pb-10 md:pt-10 md:pb-4  relative overflow-hidden">
        {/* Background with local SVG from public folder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/bg/shape.svg')", // Local SVG in public/bg/
          }}
        ></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Removed the LPG cylinder illustration and geometric shapes */}
          
          {/* Text layout (manual content, no Supabase) */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium clrBtn text-black">
                <p>{staticContent.tag}</p>
              </span>
            </div>
            <h1 className="text-4xl font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-6">
  {staticContent.mainTitle}
  <span className="block text-2xl text-coffee-500 sm:text-4xl">
    "{staticContent.largeExplainer}"
  </span>
</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {staticContent.explanation}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="clrBtn text-black px-6 py-3 rounded-full text-base font-medium transition-colors duration-200 hover:bg-gray-700"
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