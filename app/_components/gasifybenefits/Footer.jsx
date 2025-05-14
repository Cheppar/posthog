"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // State for dynamic date and time
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Update date and time dynamically
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format: "Tuesday, May 13, 2025, 12:29 PM EAT"
      const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Africa/Nairobi", // EAT timezone
      }) + " EAT";
      setCurrentDateTime(formattedDateTime);
    };

    // Update immediately on mount
    updateDateTime();

    // Update every minute (optional, for real-time updates)
    const interval = setInterval(updateDateTime, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600">
      {/* Main Footer */}
      <div className="py-12 border-t border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Gasify Kenya</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-900 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-gray-900 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+254787920047"
                    className="hover:text-gray-900 transition-colors"
                  >
                    +254 787 920 047
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@gasifykenya.com"
                    className="hover:text-gray-900 transition-colors"
                  >
                    support@gasifykenya.com
                  </a>
                </li>
                <li>
                  Hours: 8am to 7pm EAT, weekdays (except public holidays)
                </li>
              </ul>
            </div>

            {/* Column 3: App & Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h3>
              <div className="space-y-4">
                {/* App Download Link */}
                <div>
                  <p className="mb-2">Download the Gasify App</p>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src="/mockup/google-play.png" // Replace with your actual Google Play badge
                      alt="Get it on Google Play"
                      width={30}
                      height={30}
                      className="h-10 hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.802c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.195 2.238.195v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.872h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.453.41 3.352 1.511 2.252 2.611 1.972 3.933 1.914 5.21 1.856 6.49 1.842 6.899 1.842 10.158s.014 3.668.072 4.948c.058 1.277.338 2.599 1.439 3.7 1.1 1.1 2.422 1.38 3.7 1.438 1.279.058 1.688.072 4.948.072s3.668-.014 4.948-.072c1.277-.058 2.599-.338 3.7-1.438 1.1-1.1 1.38-2.422 1.438-3.7.058-1.279.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.338-2.599-1.438-3.7-1.1-1.1-2.422-1.38-3.7-1.438C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-500">
        <p>Gasify &copy; {currentYear}</p>
        <p>{currentDateTime}</p>
      </div>
    </footer>
  );
};

export default Footer;