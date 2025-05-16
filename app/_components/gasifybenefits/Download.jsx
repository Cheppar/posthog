"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const staticContent = {
  tag: "Sustainable Energy",
  mainTitle: "Gasify Kenya",
  largeExplainer: "Affordable LPG at your fingertips",
  explanation:
    "Combining the expertise of Kenya's biggest energy retailer with a local touch. Delivering great service, great rates and great rewards.",
};

const Download = () => {
  return (
    <div>
      {/* New Section: App Promotion */}
      <section className="py-12 bg-black md:py-16">
        <div className="container bg-black-100 rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Merged Phone Mockup with Screenshot */}
            <div className="relative flex justify-center">
              {/* Background Circle (Static, Always Visible) */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-clrBtn rounded-full -z-10 translate-y-10 opacity-80"></div>
              {/* Animated Phone Mockup */}
              <motion.div
                className="relative pt-8 pb-8 w-56 md:w-64 lg:w-72"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="./mockup/mockup.png"
                  alt="Gasify Kenya app on phone mockup"
                  width={220}
                  height={540}
                  className="relative z-10 drop-shadow-lg"
                />
              </motion.div>
            </div>

            {/* Right: Text and Buttons */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-display font-semibold tracking-tight sm:text-4xl md:text-5xl mb-4 txtBtn">
                Order your LPG with the Gasify App
              </h2>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                <a
                  href="https://play.google.com/apps/internaltest/4701284750794841442"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Gasify Kenya app on Google Play"
                  className="flex items-center gap-2 px-4 py-2 clrBtn text-black rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Image
                    src="/mockup/google-play.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-sm text-black font-medium">Get it on Playstore</span>
                </a>
              </div>
              <p className="text-lg text-white">
                Log in to your account
                through the mobile app and manage your LPG anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;