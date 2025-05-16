"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock data array
const footerDataArray = [
  {
    section: "companyLinks",
    items: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
  {
    section: "contactInfo",
    items: {
      phone: "+254 787 920 047",
      email: "support@gasify.co.ke",
      hours: "8am to 7pm EAT, weekdays",
    },
  },
  {
    section: "socialMedia",
    items: [
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.802c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.195 2.238.195v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.872h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z",
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.453.41 3.352 1.511 2.252 2.611 1.972 3.933 1.914 5.21 1.856 6.49 1.842 6.899 1.842 10.158s.014 3.668.072 4.948c.058 1.277.338 2.599 1.439 3.7 1.1 1.1 2.422 1.38 3.7 1.438 1.279.058 1.688.072 4.948.072s3.668-.014 4.948-.072c1.277-.058 2.599-.338 3.7-1.438 1.1-1.1 1.38-2.422 1.438-3.7.058-1.279.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.338-2.599-1.438-3.7-1.1-1.1-2.422-1.38-3.7-1.438C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
      },
    ],
  },
  {
    section: "appStore",
    items: { href: "https://play.google.com/store", image: "/mockup/google-play.png" },
  },
  {
    section: "latestSocialPost",
    items: { platform: "Twitter", content: "Check out our latest gas deals! #GasifyKenya", href: "https://twitter.com/gasifykenya/status/latest" },
  },
];

// Mock function to track analytics
const trackEvent = (eventName, properties) => {
  console.log(`Tracking event: ${eventName}`, properties);
  // Integrate with Google Analytics, Mixpanel, etc.
};

const Footer = () => {
  // State management
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [footerData, setFooterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [showSocialPreview, setShowSocialPreview] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", message: "" });
  const [contactStatus, setContactStatus] = useState(null);
  const [timezone, setTimezone] = useState("Africa/Nairobi");

  // Load footer data from array
  useEffect(() => {
    const loadFooterData = () => {
      setIsLoading(true);
      try {
        // Transform array into a more usable object
        const data = footerDataArray.reduce((acc, { section, items }) => {
          acc[section] = items;
          return acc;
        }, {});
        if (!data.companyLinks || !data.contactInfo || !data.socialMedia) {
          throw new Error("Incomplete footer data");
        }
        setFooterData(data);
      } catch (err) {
        setError("Failed to load footer content.");
      } finally {
        setIsLoading(false);
      }
    };
    // Simulate async loading with a small delay
    const timer = setTimeout(loadFooterData, 500);
    return () => clearTimeout(timer);
  }, []);

  // Update date and time dynamically
  const updateDateTime = useCallback(() => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: timezone,
    }) + ` ${timezone.split("/")[1]}`;
    setCurrentDateTime(formattedDateTime);
  }, [timezone]);

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, [updateDateTime]);

  // Handle newsletter signup
  const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    setNewsletterStatus("submitting");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setNewsletterStatus("success");
      setNewsletterEmail("");
      trackEvent("newsletter_signup", { email: newsletterEmail });
    } catch (error) {
      setNewsletterStatus("error");
    }
  };

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("submitting");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setContactStatus("success");
      setContactForm({ name: "", message: "" });
      setShowContactModal(false);
      trackEvent("contact_form_submit", { name: contactForm.name });
    } catch (error) {
      setContactStatus("error");
    }
  };

  // Toggle social media preview
  const toggleSocialPreview = () => {
    setShowSocialPreview((prev) => !prev);
    trackEvent("social_preview_toggle", { isOpen: !showSocialPreview });
  };

  // Toggle contact modal
  const toggleContactModal = () => {
    setShowContactModal((prev) => !prev);
    trackEvent("contact_modal_toggle", { isOpen: !showContactModal });
  };

  // Track link clicks
  const handleLinkClick = (label) => {
    trackEvent("footer_link_click", { label });
  };

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Loading and error states
  if (isLoading) return <div className="text-center py-12">Loading footer...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <footer className="bg-black text-black-700">
      {/* Main Footer */}
      <div className="py-12 border-t border-amber-500">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Company Links */}
            <div>
              <h3 className="text-xl text-amber-500 font-semibold  mb-4">Gasify Kenya</h3>
              <ul className="space-y-2">
                {footerData.companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors"
                      onClick={() => handleLinkClick(link.label)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`tel:${footerData.contactInfo.phone}`}
                    className="text-white hover:text-gray-400 transition-colors"
                    onClick={() => handleLinkClick("Phone")}
                  >
                    {footerData.contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${footerData.contactInfo.email}`}
                    className=" text-white hover:text-gray-900 transition-colors"
                    onClick={() => handleLinkClick("Email")}
                  >
                    {footerData.contactInfo.email}
                  </a>
                </li>
                <li><p  className="text-white">{footerData.contactInfo.hours}</p></li>
                
              </ul>
            </div>

            {/* Column 3: App & Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
              <div className="space-y-4">
                {/* App Download Link */}
                <div>
                  <p className="mb-2 text-white">Download the Gasify App</p>
                  <a
                    href={footerData.appStore.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-500 gap-4 text-black inline-flex rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors"
                    onClick={() => handleLinkClick("App Store")}
                  >
                    <Image
                      src={footerData.appStore.image}
                      alt="Get it on Google Play"
                      width={40}
                      height={40}
                      className="h-10 hover:opacity-80 transition-opacity"
                      onError={() => console.error("Failed to load Google Play badge")}
                    />
                    <p className="float-right pt-2">Download on Playstore</p>
                  </a>
                </div>
               
               
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-black py-4 text-center text-sm text-gray-200">
        <p>Gasify © {currentYear}</p>
        <p>{currentDateTime}</p>
      </div>

     
    </footer>
  );
};

export default Footer;