"use client";

import React, { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { CirclePlus } from "lucide-react";
import { motion } from "framer-motion";

// Static content (no Supabase)
const staticContent = {
  tag: "Welcome / Karibu",
  mainTitle: "Build Bout?",
  explanation:"A co-working community of builders in Nakuru, Kenya. We're looking for builders who want to build a community they'll invest in."};

// Card data for the new section


const Benefits = () => {
  const posthog = usePostHog();

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
    <div>
      {/* Existing Hero Section */}
      <section className="pt-2 pb-1 md:pt-10   md:pb-4 relative overflow-hidden">
        {/* Background with local SVG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
         
        ></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Text layout */}
          <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-6">
              <span className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white border-2 border-white bg-transparent transition-all duration-300 hover:txtWhite hover:scale-105 hover:shadow-lg hover:shadow-white/50 active:scale-95">
                {staticContent.tag}
              </span>
            </div>
            
          <h3 className="text-3xl txtBtn font-display font-semibold 
           tracking-tight sm:text-5xl md:text-6xl mb-1">
            {staticContent.mainTitle} <br className="hidden sm:block" />
          </h3>

        
                <p className="text-xl mt-8 p-10 text-white pt-2 ">
                {staticContent.explanation}  </p>
             
           
                <motion.div 
                  className="mt-4 flex items-center justify-center gap-x-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://luma.com/event/evt-sW2EKFsyBm8KDAW"
                    className="luma-checkout--button group flex items-center justify-center gap-2 md:gap-2 px-6 py-3.5 md:px-5 md:py-2.5 w-fit max-w-[280px] md:max-w-[200px] min-h-[48px] md:min-h-[40px] clrBtn rounded-full border-2 border-white hover:scale-105 hover:shadow-lg hover:shadow-white/50 hover:bg-amber-600 active:scale-95 transition-all duration-300 text-sm md:text-sm font-semibold"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-sW2EKFsyBm8KDAW"
                    onClick={() => posthog?.capture("cta_register_here_clicked", {
                      location: "benefits_section",
                      action: "open_luma_checkout"
                    })}
                  >
                    <CirclePlus className="text-white w-6 h-6 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-300" />
                    <span className="text-white font-semibold">Register Here</span>
                  </a>
                </motion.div>
          </div>

        
        </div>
      </section>

      {/* New Cards Section with shadcn/ui Card */}
  
    </div>
  );
};

export default Benefits;