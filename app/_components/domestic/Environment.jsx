"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/events/combi.jpg",
    alt: "Seedballs prepared for environmental restoration",
    href: "https://luma.com/your-environment-event",
  },
  {
    src: "/events/farmland.png",
    alt: "Community members at the environmental activity site",
    href: "https://luma.com/your-environment-event-2",
  },
];

const AUTO_PLAY_MS = 3500;

const Environment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);

    return () => clearInterval(intervalId);
  }, []);

  const goTo = (index) => {
    const next = (index + slides.length) % slides.length;
    setActiveIndex(next);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <section className="py-8 md:py-12 relative bg-gray-900 rounded-lg">
      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        <div className="mb-4 text-center">
          <p className="text-lg md:text-xl text-gray-300">Environment highlights.</p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-gray-700">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.src} className="relative w-full flex-shrink-0">
                <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-black/80 transition-colors"
                  >
                    See more
                  </a>
                </div>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-[300px] w-full object-cover sm:h-[420px] md:h-[500px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/75 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/75 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={`${slide.src}-dot`}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#d95404]" : "bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;