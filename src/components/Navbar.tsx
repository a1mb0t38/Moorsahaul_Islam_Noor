"use client";

import { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "STACK", href: "#stack" },
  { name: "PROJECTS", href: "#projects" },
  { name: "TIMELINE", href: "#timeline" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-[#1a1a1a] ${
        scrolled ? "bg-[#000000]/90 backdrop-blur-md py-3" : "bg-[#000000] py-4"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:ring-offset-2 focus:ring-offset-[#000000] p-1"
          aria-label="MD. Moorsahaul Islam Noor Portfolio Home"
        >
          <div className="w-8 h-8 bg-[#131313] border border-[#1a1a1a] flex items-center justify-center text-[#38bdf8] group-hover:border-[#38bdf8] transition-colors">
            <Terminal className="w-4 h-4" aria-hidden="true" />
          </div>
          <span className="font-mono font-bold text-lg tracking-wider text-[#e5e2e1] group-hover:text-[#38bdf8] transition-colors">
            NOOR<span className="text-[#38bdf8] animate-blink">_</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 font-mono text-xs tracking-wider transition-all relative focus:outline-none focus:ring-2 focus:ring-[#38bdf8] ${
                  isActive
                    ? "text-[#38bdf8] font-semibold"
                    : "text-[#8a8f8d] hover:text-[#e5e2e1]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#38bdf8]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA & Social Icons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a
            href="https://github.com/a1mb0t38"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#8a8f8d] hover:text-[#38bdf8] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/moorsahaul-islam-noor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#8a8f8d] hover:text-[#38bdf8] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#000000] font-mono font-bold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:ring-offset-2 focus:ring-offset-[#000000]"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#0a0a0a] border border-[#1a1a1a] text-[#e5e2e1] hover:text-[#38bdf8] hover:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a] px-4 pt-3 pb-5 space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 font-mono text-sm tracking-wider border-l-2 transition-colors ${
                  isActive
                    ? "border-[#38bdf8] text-[#38bdf8] bg-[#131313]"
                    : "border-transparent text-[#8a8f8d] hover:text-[#e5e2e1] hover:bg-[#131313]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 flex items-center gap-2">
            <a
              href="https://github.com/a1mb0t38"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#131313] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#38bdf8] flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/moorsahaul-islam-noor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#131313] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#38bdf8] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#000000] font-mono font-bold text-xs tracking-wider uppercase transition-colors rounded-none"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
