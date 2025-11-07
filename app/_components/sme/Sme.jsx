"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

// Static content (no Supabase)
const staticContent = {
  mainTitle: "Build Bout",
  explanation:"Join our community of builders, creators, and innovators. We meet every two weeks to share ideas, network, and collaborate on innovative projects. Reach out via the contact form for enquiries."};

// Card data for the new section
const cardData = [
  {
    illustration: "/illustrations/together.svg",
    title: "Building Sessions",
    explanation: "Join us every two weeks for collaborative sessions where builders come together to share ideas and work on projects.",
    buttonText: "View Sessions",
    buttonLink: "/about",
  },
  {
    illustration: "/illustrations/launch.svg",
    title: "Roll Out",
    explanation: "Connect with like-minded builders, creators, and innovators. Build together and openly with accountability.",
    buttonText: "Join Us",
    buttonLink: "/about",
  },
  {
    illustration: "/illustrations/resent.svg",
    title: "Presentations",
    explanation: "Our mission is to focus on accountability by building together and openly. Turn your ideas into reality with community support.",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
];

const Benefits = () => {
  const posthog = usePostHog();
  return (
    <div>
      {/* Existing Hero Section */}
      <section className="bg-black pt-12 md:pt-10 md:pb-4 relative overflow-hidden">
        {/* Background with local SVG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
         
        ></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Text layout */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            
          <h3 className="text-3xl txtBtn  font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-1">
            {staticContent.mainTitle} <br className="hidden sm:block" />
          </h3>

        
                <p className="text-xl text-gray-200 pt-2 ">
                {staticContent.explanation}  </p>
             
           
                <div className="mt-4 flex items-center justify-center gap-x-6">
  <Link
    href="/contact"
    className="yellowbg text-black px-4 py-3 rounded-full text-base font-medium transition-colors duration-200 hover:bg-gray-700 flex items-center gap-2"
    onClick={() =>
      posthog?.capture("sme_contact_us_clicked", {
        destination: "/contact",
      })
    }
  >
    Contact us
    <Send className="w-5 h-5 " />
  </Link>
</div>
          </div>

        
        </div>
      </section>

      {/* New Cards Section with shadcn/ui Card */}
      <section className="py-4 bg-black pb-18">
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="bg-black border border-amber-500 text-center transition-transform duration-300 hover:scale-105 p-4"
        >
          {/* Illustration */}
          <CardHeader className="text-xl yelloe inline-block font-semibold text-gray-900 mb-0 ">
          <h2 className="yellowbg rounded-full px-3 py-2">{card.title}</h2>
</CardHeader>

<CardTitle >
  
  <img
    src={card.illustration}
    alt={card.title}
    className="w-50 h-50 mx-auto rounded-full mb-0"
  />
</CardTitle>

<CardContent className="p-1">
  <p className="text-white text-lg">
    {card.explanation}
  </p>
</CardContent>

          
        </Card>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Benefits;