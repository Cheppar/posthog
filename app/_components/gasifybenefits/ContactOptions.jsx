"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactData = [
  {
    title: "Give us a call",
    description: "We’re around from 8am to 7pm EAT weekdays, except on public holidays.",
    buttonText: "Call us",
    buttonLink: "tel:+254787920047",
    imageSrc: "/illustrations/contact/calling.svg", 
  },
  {
    title: "Manage your LPG online",
    description: "Use the Gasify app to order LPG, track deliveries and pay your bills.",
    buttons: [
      { text: "Compare plans", link: "/login" }, 
      { text: "Pay bills", link: "/pay-bills" }, 
    ],
    imageSrc: "/illustrations/contact/mmanage.svg", 
  },
  {
    title: "Message us anytime",
    description: "Message us 24/7. Our team will get back to you during business hours.",
    buttonText: "Message us",
    buttonLink: "/contact#message", 
    imageSrc: "/illustrations/contact/messages.svg", 
  },
];

const ContactOptions = () => {
  return (
    <div>
      {/* Contact Options Section */}
      <section className="py-12 bg-white md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactData.map((item, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                {/* Image */}
                <CardHeader>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </CardHeader>
                {/* Title */}
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    <h2>{item.title} </h2>
                  </CardTitle>
                  {/* Description */}
                  <CardDescription className="text-gray-600">
                   <p>{item.description}</p> 
                  </CardDescription>
                </CardContent>
                {/* Button(s) */}
                <CardFooter className="mt-auto">
                  {item.buttonText ? (
                    <Button asChild>
                      <a
                        href={item.buttonLink}
                        target={item.buttonLink.startsWith("tel:") ? "_self" : "_blank"}
                        rel={item.buttonLink.startsWith("tel:") ? undefined : "noopener noreferrer"}
                        className="clrBtn"
                      >
                        {item.buttonText}
                      </a>
                    </Button>
                  ) : (
                    <div className="flex gap-3">
                      {item.buttons.map((btn, btnIndex) => (
                        <Button key={btnIndex} asChild variant={btnIndex === 0 ? "default" : "outline"} className="clrBtn">
                          <a href={btn.link} target="_blank" rel="noopener noreferrer">
                            {btn.text}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactOptions;