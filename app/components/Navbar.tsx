"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "The Problem", href: "#problem" },
    { name: "Platforms", href: "#platforms" },
    { name: "Collections", href: "#collections" },
    { name: "Vision", href: "#vision" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-700 ease-in-out pointer-events-auto pl-4 sm:pl-7 pr-1.5 sm:pr-2 py-1.5 sm:py-2 flex items-center justify-between shadow-lg ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-slate-200/50"
            : "bg-black/40 backdrop-blur-xl border border-white/20 shadow-black/20"
        }`}
      >
        {/* Dynamic Logo */}
        <Link href="/" className="relative h-6 sm:h-8 w-24 sm:w-28 flex items-center shrink-0">
          <Image
            src="/Uniwik-logo-white.svg"
            alt="Uniwik"
            width={120}
            height={30}
            className={`h-6 sm:h-8 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            priority
          />
          <Image
            src="/Uniwik-logo-black.svg"
            alt="Uniwik"
            width={120}
            height={30}
            className={`h-6 sm:h-8 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium px-3.5 lg:px-4 py-2 rounded-full transition-colors duration-700 ease-in-out ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <a
            href="#waitlist"
            className="text-xs sm:text-sm font-semibold bg-[#0084ff] hover:bg-[#0070d6] text-white px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-md shadow-[#0084ff]/30 shrink-0"
          >
            Join Waitlist
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors duration-700 ease-in-out cursor-pointer ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-2 mx-auto max-w-6xl rounded-3xl p-5 space-y-3 pointer-events-auto border shadow-xl animate-in fade-in zoom-in-95 duration-200 transition-colors duration-700 ease-in-out ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200 text-slate-900"
              : "bg-slate-950/95 backdrop-blur-xl border-white/20 text-white"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium px-4 py-2.5 rounded-full transition-colors duration-700 ease-in-out ${
                  isScrolled
                    ? "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200/30">
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full text-center text-sm font-semibold bg-[#0084ff] hover:bg-[#0070d6] text-white py-3 rounded-full shadow-md"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
