"use client";

import Link from "next/link";
import Image from "next/image";

// Static content for Oxygen services
const staticContent = {
  tag: "Medical Oxygen",
  mainTitle: "Oxygen Kenya",
  headline: "Reliable Medical Oxygen Solutions",
  description: "Providing high-quality medical oxygen with seamless delivery and exceptional care. Empowering healthcare facilities and patients across Kenya."
};

const Oxygen = () => {
  return (
    <div>
      <section className="py-12 md:py-16 relative bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Background with subtle gradient and no SVG */}
        <div className="absolute inset-0 bg-opacity-10 bg-blue-200"></div>

        <div className="container max-w-6xl mx-auto relative z-10 px-4">
          {/* Text and content layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="text-left">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-blue-600 rounded-full">
                {staticContent.tag}
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
                {staticContent.mainTitle}
              </h1>
              <p className="mt-2 text-2xl font-medium text-blue-700">
                {staticContent.headline}
              </p>
              <p className="mt-4 text-base text-gray-600 md:text-lg max-w-md">
                {staticContent.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about-oxygen"
                  className="inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Discover More
                </Link>
                <Link
                  href="/products/oxygen"
                  className="inline-block px-6 py-3 text-base font-medium text-blue-900 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right: Decorative Element (Optional Image or Placeholder) */}
            <div className="hidden md:block">
              <div className="relative w-full h-64 bg-blue-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-blue-900 text-lg font-medium">
                    <Image
                        src="/illustrations/sustainable.svg" // Placeholder image
                        alt="Oxygen Services"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg opacity-80" 
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oxygen;