"use client";

import React from 'react';
import Link from 'next/link';
import { usePostHog } from "posthog-js/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const posthog = usePostHog();
  const faqData = [
    {
      question: "What is Build Bout?",
      answer: "Build Bout is a co-working community of builders in Nakuru, Kenya. We provide a collaborative space for builders who want to create and invest in a community together.",
    },
    {
      question: "How can I join?",
      answer: (
        <>
          Register for our sessions from our{" "}
          <Link
            href="/about?tab=upcoming"
            className="txtBtn hover:text-amber-400 underline transition-colors"
            onClick={() =>
              posthog?.capture("faq_events_link_clicked", {
                destination: "/about",
                tab: "upcoming",
              })
            }
          >
            Events
          </Link>{" "}
          page. Builders need to have a clear vision and desire to make an impact locally.
        </>
      ),
    },
    {
      question: "What is Build Bout's goal?",
      answer: "To encourage more accountability in building anything. An app, business,writing a song, hardware project, etc.",
    },
    {
      question: "What is in for us?",
      answer: "Simply building together. All sessions are meant to be collaborative and supportive. No marketing / recruiting",
    },
    {
      question: "What amenities does Build Bout offer?",
      answer: "A comfortable work space with high-speed internet, a collaborative environment designed to foster innovation and refreshments.",
    },
    {
      question: "What makes Build Bout different from other co-working groups?",
      answer: "Build Bout is specifically designed for builders who want to invest in their community. We focus on creating meaningful connections, fostering collaboration, and supporting builders who are committed to building something significant together.",
    },
  ];
  return (
    <section className="py-16 bg-black">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about Build Bout
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`}
              className="border border-gray-700 rounded-lg px-4 bg-black"
            >
              <AccordionTrigger className="text-left text-white hover:txtBtn transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
