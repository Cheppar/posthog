"use client";

import { X, Instagram, Facebook, Mail } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  // Social media links (replace with your actual links)
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/gasifykenya", icon: X },
    { name: "Email", href: "mailto:support@gasify.co.ke", icon: Mail },
  ];

  return (
    <div className="flex justify-center items-center gap-4 py-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.name}
            href={social.href}
            className="clrBtn bg-white p-3 rounded-full border border-gray-600 transition-colors duration-200 hover:bg-[#F7B955]"
            aria-label={`Visit our ${social.name}`}
          >
            <Icon className="w-5 h-5 text-black" />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;