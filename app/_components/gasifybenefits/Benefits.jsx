"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Download } from "lucide-react";

// Static content (no Supabase)
const staticContent = {
  mainTitle: "Why Gasify?",
  explanation:"Get rewarded for being a Gasify LPG customer. Access savings from your favourite brands, plus enjoy delivery discounts via the Gasify app. T&Cs apply."};

// Card data for the new section
const cardData = [
  {
    illustration: "/illustrations/discount.svg",
    title: "Affordable Pricing",
    explanation: "Get LPG at budget-friendly rates, making clean energy accessible for every Kenyan household.",
    buttonText: "Explore Pricing",
    buttonLink: "/pricing",
  },
  {
    illustration: "/illustrations/payment.svg",
    title: "App-Based Delivery",
    explanation: "Order LPG with ease through our mobile app, ensuring fast and reliable delivery to your doorstep.",
    buttonText: "Download App",
    buttonLink: "/download",
  },
  {
    illustration: "/illustrations/earth.svg",
    title: "Sustainable Energy",
    explanation: "Switch to LPG for a cleaner, greener cooking solution that supports a sustainable future.",
    buttonText: "Learn More",
    buttonLink: "/sustainability",
  },
];

const Benefits = () => {
  return (
    <div>
      {/* Existing Hero Section */}
      <section className="pt-2 pb-1 md:pt-10 md:pb-4 relative overflow-hidden">
        {/* Background with local SVG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
         
        ></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Text layout */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            
          <h3 className="text-3xl font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-1">
            {staticContent.mainTitle} <br className="hidden sm:block" />
          </h3>

        
                <p className="text-xl text-gray-700 pt-2 ">
                {staticContent.explanation}  </p>
             
           
                <div className="mt-4 flex items-center justify-center gap-x-6">
  <Link
    href="/about"
    className="clrBtn text-black px-4 py-3 rounded-full text-base font-medium transition-colors duration-200 hover:bg-gray-700 flex items-center gap-2"
  >
    <Download className="w-5 h-5" />
    Download app
  </Link>
</div>
          </div>

        
        </div>
      </section>

      {/* New Cards Section with shadcn/ui Card */}
      <section className="py-4 bg-gray-50">
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="text-center transition-transform duration-300 hover:scale-105 p-4"
        >
          {/* Illustration */}
          <CardHeader className="text-xl inline-block font-semibold text-gray-900 mb-0 ">
          <h2 className="clrBtn rounded-full px-3 py-2">{card.title}</h2>
</CardHeader>

<CardTitle >
  
  <img
    src={card.illustration}
    alt={card.title}
    className="w-50 h-50 mx-auto rounded-full mb-0"
  />
</CardTitle>

<CardContent className="p-1">
  <p className="text-muted-foreground text-lg">
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