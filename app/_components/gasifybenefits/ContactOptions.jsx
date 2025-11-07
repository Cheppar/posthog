"use client";

import Image from "next/image";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
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
  const posthog = usePostHog();

  const handleInteraction = (action, payload = {}) => {
    posthog?.capture("contact_option_interaction", {
      action,
      ...payload,
    });
  };

  // Animation variants for Typeform-like feel
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#d97706", // Darker amber for hover
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      {/* Contact Options Section */}
      <section className="py-12 bg-black md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactData.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center bg-black border border-amber-500 shadow-none"
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
                  <CardTitle className="text-xl font-semibold text-white mb-2">
                    <h2>{item.title}</h2>
                  </CardTitle>
                  {/* Description */}
                  <CardDescription className="text-white">
                    <p>{item.description}</p>
                  </CardDescription>
                </CardContent>
                {/* Button(s) */}
                <CardFooter className="mt-auto">
                  {item.buttonText ? (
                    <motion.div variants={buttonVariants} whileHover="hover">
                      <Button
                        asChild
                        className="bg-amber-500 text-black hover:bg-amber-600"
                      >
                        {item.buttonLink.startsWith("tel:") ? (
                          <a
                            href={item.buttonLink}
                            target="_self"
                            className="text-black"
                            onClick={() =>
                              handleInteraction("call_us_clicked", {
                                destination: item.buttonLink,
                              })
                            }
                          >
                            {item.buttonText}
                          </a>
                        ) : (
                          <Link
                            href={item.buttonLink}
                            className="text-black"
                            onClick={() =>
                              handleInteraction("contact_option_clicked", {
                                destination: item.buttonLink,
                              })
                            }
                          >
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
                            className={btnIndex === 0 ? "bg-amber-500 text-white hover:bg-amber-600" : "border-amber-500 text-white hover:bg-amber-600"}
                          >
                            <Link
                              href={btn.link}
                              className="text-white"
                              onClick={() =>
                                handleInteraction("contact_secondary_action_clicked", {
                                  destination: btn.link,
                                  label: btn.text,
                                })
                              }
                            >
                              {btn.text}
                            </Link>
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