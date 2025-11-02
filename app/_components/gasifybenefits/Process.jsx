import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const cardData = [
    {
      illustration: "/illustrations/together.svg",
      title: "Build Together",
      explanation: "We focus on building together to encourage accountability on attaining our goals. ",
      buttonText: "Explore Pricing",
      buttonLink: "/pricing",
    },
    {
      illustration: "/illustrations/launch.svg",
      title: "Roll Out Together",
      explanation: "We deploy our projects to members for testing, feedback or fine tuning/improvement.",
      buttonText: "Download App",
      buttonLink: "/download",
    },
    {
      illustration: "/illustrations/resent.svg",
      title: "Demonstrate",
      explanation: "We demonstrate our projects to the co-working for clarity and to immprove our presentation skills.",
      buttonText: "Learn More",
      buttonLink: "/sustainability",
    },
  ];

const Process = () => {
  return (
    <div>
        <section className="py-4 bg-black">
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="bg-black text-center transition-transform duration-300 hover:scale-105 p-4"
          style={{ borderColor: '#F54E00', borderWidth: '1px', borderStyle: 'solid' }}
        >
          {/* Illustration */}
          <CardHeader className="text-xl inline-block font-semibold text-gray-900 mb-0">
            <h2 className="yellowbg rounded-full text-white px-3 py-2">{card.title}</h2>
          </CardHeader>

          <CardTitle>
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
  )
}

export default Process