"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Navigation links for the desktop
const navigation = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const navLeft = [
  { name: "Home", href: "/" }, // Updated href to "/" for Home
  { name: "Small Business", href: "/sme" }, // Updated href for clarity
];

function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 colorPrimary left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-2"
              aria-label="Gasify Kenya"
            >
              <span className="font-display font-medium text-xl tracking-tight">
                Gasify Kenya
              </span>
            </a>
            {/* Desktop navLeft navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLeft.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium relative overflow-hidden group",
                    path === item.href && item.name === "Home" && "font-semibold" // Optional: bold for Home when active
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-coffee-500 transform origin-left transition-transform duration-300",
                      path === item.href && item.name === "Home"
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  ></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop navigation (right side) */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) =>
              item.name === "About" ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-sm font-medium"
                    >
                      About
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/about">About</Link>
                    </DropdownMenuItem>
                   
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.name === "Thematic Areas" ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-sm font-medium"
                    >
                      Thematic Areas
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/programs">Ongoing Projects</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/previous-projects">Previous Projects</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium relative overflow-hidden group",
                    path === item.href && "font-semibold" // Optional: bold for active links
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-coffee-500 transform origin-left transition-transform duration-300",
                      path === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  ></span>
                </a>
              )
            )}
            {/* Login Button */}
            <Link href="/contact">
              <Button className="p-4 clrBtn text-black hover:colorPrimary rounded-full bg-black">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={cn(
                "h-6 w-6 transition-transform",
                mobileMenuOpen ? "transform rotate-90" : ""
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background/90 backdrop-blur-lg border-b transition-all duration-300 ease-in-out transform",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 container">
          {/* navLeft links in mobile menu */}
          {navLeft.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-muted",
                path === item.href && item.name === "Home" && "bg-muted font-semibold relative",
                path === item.href && item.name === "Home" && "after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-coffee-500"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* navigation links in mobile menu */}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-muted",
                path === item.href && "bg-muted font-semibold"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 w-full bg-coffee-800 hover:bg-coffee-900 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;