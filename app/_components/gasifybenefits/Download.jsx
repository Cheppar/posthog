"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CirclePlus, GitMerge } from "lucide-react";

const staticContent = {
  tag: "Sustainable Energy",
  mainTitle: "Gasify Kenya",
  largeExplainer: "Affordable LPG at your fingertips",
  explanation:
    "Combining the expertise of Kenya's biggest energy retailer with a local touch. Delivering great service, great rates and great rewards.",
};

const Download = () => {
  useEffect(() => {
    // Load Luma checkout script if not already loaded
    if (!document.getElementById('luma-checkout')) {
      const script = document.createElement('script');
      script.id = 'luma-checkout';
      script.src = 'https://embed.lu.ma/checkout-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-black">
      {/* New Section: App Promotion */}
      <section className="py-8 md:py-16">
        <div className="container rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center">
            {/* Left: Merged Phone Mockup with Screenshot */}
            <div className="relative flex justify-center order-2 md:order-1 mb-8 md:mb-0">
              {/* Background Circle (Static, Always Visible) */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-clrBtn rounded-full -z-10 translate-y-8 md:translate-y-10 opacity-80"></div>
              {/* Animated Phone Mockup */}
              <motion.div
                className="relative pt-6 pb-6 md:pt-8 md:pb-8 w-full max-w-[280px] sm:max-w-[320px] md:w-64 lg:w-72"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="./mockup/build.png"
                  alt="Build Bout Sessions"
                  width={420}
                  height={940}
                  className="relative z-10 drop-shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>

            {/* Right: Text and Buttons */}
            <div className="text-center md:text-left order-1 md:order-2 px-2 md:px-0">
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 txtBtn leading-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Come join us!
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg text-white mb-8 md:mb-6 mx-auto md:mx-0 max-w-full md:w-3/4 leading-relaxed"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We'll be glad to host you in our next event. Join us and be part of the community.
                <br/><br/>
                We focus on building together, thus encouraging accountability on attaining our goals.
              </motion.p>
              <motion.div 
                className="flex flex-col justify-center md:justify-start gap-4 mb-6 w-full md:w-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://luma.com/event/evt-sW2EKFsyBm8KDAW"
                  className="luma-checkout--button group flex items-center justify-center gap-2 md:gap-2 px-8 py-4 md:px-5 md:py-2.5 w-full md:w-fit md:max-w-[200px] min-h-[52px] md:min-h-[40px] clrBtn rounded-full border-2 border-white hover:scale-105 hover:shadow-lg hover:shadow-white/50 hover:bg-amber-600 active:scale-95 transition-all duration-300 text-base md:text-sm font-semibold"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-sW2EKFsyBm8KDAW"
                >
                  <CirclePlus className="text-white w-6 h-6 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-white font-semibold">Join Us</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;