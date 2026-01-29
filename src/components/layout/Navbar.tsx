"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/#industries" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-lg py-2 md:py-3"
          : "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.06)] py-2 md:py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0 lg:flex-1 lg:max-w-none max-w-[70%]">
            <Image
              src="/logo.svg"
              alt="Khan's HVAC Logo"
              width={30}
              height={30}
              className="object-contain flex-shrink-0 md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px]"
            />
            <div className="flex flex-col min-w-0 overflow-hidden flex-1">
              <span className={`font-bold text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-xl tracking-tight leading-tight truncate ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                <span className="sm:hidden">KHAN'S HVAC</span>
                <span className="hidden sm:inline whitespace-nowrap">KHAN'S Authentic HVAC Systems</span>
              </span>
              <span className={`hidden md:block text-[8px] md:text-[9px] lg:text-xs tracking-wider leading-tight whitespace-nowrap ${scrolled ? "text-gray-600" : "text-white/80"}`}>
                Complete Air-Conditioning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 flex-shrink-0 rounded-md transition-colors ${scrolled ? 'hover:bg-gray-100' : 'bg-white/10 hover:bg-white/20'}`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'}`} />
              <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'}`} />
              <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl mt-2">
            <div className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mx-6 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center font-semibold rounded-sm transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET QUOTE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
