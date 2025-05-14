"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactData = [
  {
    title: "Give us a call",
    description: "We’re around from 8am to 7pm EAT weekdays, except on public holidays.",
    buttonText: "Call us",
    buttonLink: "tel:+254787920047",
    imageSrc: "./illustrations/contact/calling.svg",
  },
  {
    title: "Manage your LPG online",
    description: "Use the Gasify app to order LPG, track deliveries and pay your bills.",
    buttons: [
      { text: "Download App", link: "#download" },
    ],
    imageSrc: "/illustrations/contact/mmanage.svg",
  },
  {
    title: "Message us anytime",
    description: "Message us 24/7. Our team will get back to you during business hours.",
    buttonText: "Message us",
    buttonLink: "/contact",
    imageSrc: "/illustrations/contact/messages.svg",
  },
];

const ContactOptions = () => {
  // Animation variants for Typeform-like feel
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#f59e0b", // Slightly darker amber
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      {/* Contact Options Section */}
      <section className="py-12 bg-white md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactData.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center border-none shadow-none"
              >
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
                    <h2>{item.title}</h2>
                  </CardTitle>
                  {/* Description */}
                  <CardDescription className="text-gray-600">
                    <p>{item.description}</p>
                  </CardDescription>
                </CardContent>
                {/* Button(s) */}
                <CardFooter className="mt-auto">
                  {item.buttonText ? (
                    <motion.div variants={buttonVariants} whileHover="hover">
                      <Button asChild>
                        {item.buttonLink.startsWith("tel:") ? (
                          <a
                            href={item.buttonLink}
                            target="_self"
                            className="clrBtn"
                          >
                            {item.buttonText}
                          </a>
                        ) : (
                          <Link href={item.buttonLink} className="clrBtn">
                            {item.buttonText}
                          </Link>
                        )}
                      </Button>
                    </motion.div>
                  ) : (
                    <div className="flex gap-3">
                      {item.buttons.map((btn, btnIndex) => (
                        <motion.div
                          key={btnIndex}
                          variants={buttonVariants}
                          whileHover="hover"
                        >
                          <Button
                            asChild
                            variant={btnIndex === 0 ? "default" : "outline"}
                            className="clrBtn"
                          >
                            <Link href={btn.link}>{btn.text}</Link>
                          </Button>
                        </motion.div>
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