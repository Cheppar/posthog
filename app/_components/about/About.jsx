"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

// Static content for the About page
const staticContent = {
  mainTitle: "Empowering Energy Access",
  leftText: "We’re a startup revolutionizing energy access with affordable, sustainable solutions powered by digital tools.",
  rightText: "Our mission is to make clean energy simple and accessible for all through innovative technology and partnerships.",
};

// Team data
const teamData = [
  
  {
    name: "Reyna",
    role: "Operations",
    image: "/team/michael-mabeya.jpg",
    email: "michael@energyco.com",
    phone: "+123-456-7891",
  },
  {
    name: "Cheps",
    role: "CTO",
    image: "/team/cto.jpg",
    email: "godfrey@energyco.com",
    phone: "+123-456-7890",
  },
  {
    name: "Yvonne",
    role: "Customer Support ",
    image: "/team/michael-mabeya.jpg",
    email: "michael@energyco.com",
    phone: "+123-456-7891",
  },
  {
    name: "Ben",
    role: "Logistics",
    image: "/team/ben.jpg",
    email: "ben@energyco.com",
    phone: "+123-456-7892",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Centered Card and Left/Right Text */}
      <section className="pt-12 pb-16 relative bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Left Text (Hidden on small screens, shown on large) */}
            <div className="hidden lg:block lg:w-1/3 text-right">
              <p className="text-lg clrBtn px-4 py-4 rounded-lg leading-relaxed">
                {staticContent.leftText}
              </p>
            </div>

            {/* Centered Card */}
            <Card className="w-full max-w-md shadow-xl rounded-2xl border-none">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-gray-900">
                  <h1>{staticContent.mainTitle}</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/illustrations/sustainable.svg"
                  alt="Energy Solution"
                  className="w-full h-100 object-cover rounded-lg mb-4"
                />
                {/* Left Text (Shown on small screens) */}
                <p className="lg:hidden  text-base leading-relaxed mb-4">
                  {staticContent.leftText}
                </p>
                {/* Right Text (Shown on small screens) */}
                <p className="lg:hidden text-gray-600 text-base leading-relaxed mb-4">
                  {staticContent.rightText}
                </p>
                <div className="flex justify-center gap-4">
                 
                </div>
              </CardContent>
            </Card>

            {/* Right Text (Hidden on small screens, shown on large) */}
            <div className="hidden clrBtn px-4 py-4 rounded-lg lg:block lg:w-1/3 text-left">
              <p className="text-lg  text-gray-600 leading-relaxed">
                {staticContent.rightText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 mb-12 clrBtn rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <Card
                key={index}
                className="text-center border-none bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="mx-auto rounded-full object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;