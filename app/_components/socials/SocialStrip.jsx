"use client";

import { X, Instagram, Facebook, Mail } from "lucide-react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

const Socials = () => {
  const posthog = usePostHog();
  // Social media links (replace with your actual links)
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/chepparing", icon: X },
    { name: "Email", href: "mailto:chidi@cheppar.co.ke", icon: Mail },
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
            onClick={() =>
              posthog?.capture("social_link_clicked", {
                network: social.name.toLowerCase(),
                href: social.href,
              })
            }
          >
            <Icon className="w-5 h-5 text-black" />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;