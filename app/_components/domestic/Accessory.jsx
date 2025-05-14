"use client";

import Link from "next/link";
import Image from "next/image";

const staticContent = {
  tag: "Generator Accessory",
  mainTitle: "LPG Generator Converter",
  headline: "Power Your Generator with LPG",
  description:
    "Transform your petrol generator into an eco-friendly, cost-effective LPG-powered machine with our premium conversion kit. Enjoy cleaner energy and lower running costs.",
};

const Accessory = () => {
  return (
    <div>
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative">
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-opacity-20 bg-black"></div>

        <div className="container max-w-7xl mx-auto relative z-10 px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Image of LPG Converter */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/lpg-converter.jpg"
                  alt="LPG Generator Converter Kit with conversion components"
                  width={600}
                  height={320}
                  className="w-full h-64 sm:h-80 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span
                  className="absolute bottom-4 left-4 text-sm font-medium text-white"
                  aria-hidden="true"
                >
                  LPG Conversion Kit
                </span>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:w-1/2 text-left">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-amber-500 text-gray-900 rounded-full">
                {staticContent.tag}
              </span>
              <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">
                {staticContent.mainTitle}
              </h1>
              <p className="mt-3 text-xl font-medium text-amber-200">
                {staticContent.headline}
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-300 max-w-lg">
                {staticContent.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products/converter"
                  className="inline-block px-8 py-3 text-base font-medium bg-amber-500 text-gray-900 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  href="/learn/converter"
                  className="inline-block px-8 py-3 text-base font-medium border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500/10 transition-colors duration-300"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessory;