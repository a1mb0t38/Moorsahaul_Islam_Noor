"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, MapPin, Briefcase, Zap, LockKeyhole, User } from "lucide-react";

const STATS = [
  {
    label: "LOCATION",
    value: "Bangladesh",
    icon: MapPin,
    detail: "Remote / Hybrid / On-site",
  },
  {
    label: "FOCUS",
    value: "Full-Stack Web Apps",
    icon: Zap,
    detail: "Next.js, React & Node.js",
  },
  {
    label: "AVAILABILITY",
    value: "Open to work",
    icon: Briefcase,
    detail: "Full-time / Contract",
  },
  {
    label: "BACKGROUND",
    value: "Security-aware",
    icon: ShieldCheck,
    detail: "Auth & Data Integrity",
  },
];

export default function About() {
  const [imgSrc, setImgSrc] = useState("/profile.png");
  const [hasError, setHasError] = useState(false);

  const handleImgError = () => {
    if (imgSrc === "/profile.png") {
      setImgSrc("/profile.jpg");
    } else if (imgSrc === "/profile.jpg") {
      setImgSrc("/profile.jpeg");
    } else {
      setHasError(true);
    }
  };

  return (
    <section id="about" className="py-24 bg-[#000000] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#38bdf8]">01.</span>
            <h2 className="font-mono text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#e5e2e1]">
              ABOUT ME
            </h2>
            <div className="flex-1 h-[1px] bg-[#1a1a1a] ml-4" />
          </div>
          <p className="mt-2 font-mono text-xs text-[#8a8f8d]">
            // SYSTEM_OVERVIEW: EDUCATION, CORE CAPABILITIES & PHILOSOPHY
          </p>
        </div>

        {/* Main Card: Left Visual + Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="terminal-card mb-12 p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Photo + Education */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Profile Image Frame */}
              <div className="bg-[#131313] border border-[#1a1a1a] p-3 text-center space-y-3 relative group">
                <div className="flex items-center justify-between px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] text-[10px] font-mono text-[#8a8f8d]">
                  <span className="flex items-center gap-1.5 text-[#38bdf8]">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                    PORTRAIT_SYS
                  </span>
                  <span>[RAW_DATA]</span>
                </div>
                
                <div className="relative w-full aspect-square bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden flex items-center justify-center group-hover:border-[#38bdf8]/50 transition-colors">
                  {!hasError ? (
                    <Image
                      src={imgSrc}
                      alt="MD. Moorsahaul Islam Noor"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={handleImgError}
                      priority
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#8a8f8d] p-4 text-center">
                      <User className="w-12 h-12 text-[#38bdf8] mb-2 opacity-80" />
                      <p className="font-mono text-xs text-[#e5e2e1] font-semibold">Drop image file to:</p>
                      <code className="font-mono text-[11px] text-[#38bdf8] bg-[#0a0a0a] px-2 py-1 rounded mt-1.5 border border-[#1a1a1a]">
                        public/profile.png
                      </code>
                    </div>
                  )}

                  {/* Terminal Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#38bdf8]" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#38bdf8]" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#38bdf8]" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#38bdf8]" />
                </div>
              </div>

              {/* Education Box */}
              <div className="bg-[#131313] border border-[#1a1a1a] p-4 text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-[#0a0a0a] border border-[#1a1a1a] flex items-center justify-center text-[#38bdf8]">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-[#e5e2e1] uppercase">
                    BSc in Software Engineering
                  </h3>
                  <p className="font-mono text-xs text-[#38bdf8] mt-0.5">
                    Daffodil International University
                  </p>
                  <p className="font-mono text-[10px] text-[#8a8f8d] mt-0.5">
                    Graduated 2024
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1a1a1a] flex justify-center gap-1.5">
                  <span className="px-2 py-0.5 bg-[#0a0a0a] border border-[#1a1a1a] font-mono text-[10px] text-[#8a8f8d]">
                    OOP & DS
                  </span>
                  <span className="px-2 py-0.5 bg-[#0a0a0a] border border-[#1a1a1a] font-mono text-[10px] text-[#8a8f8d]">
                    Web Architecture
                  </span>
                </div>
              </div>

            </div>

            {/* Right Bio & Core Content */}
            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#e5e2e1]">
                Full-Stack Developer focused on <span className="text-[#38bdf8]">scalable web architecture</span> and clean code.
              </h3>

              <div className="space-y-4 font-sans text-sm sm:text-base text-[#e5e2e1] leading-relaxed">
                <p>
                  I am a Software Engineering graduate from Daffodil International University. 
                  My engineering background drives how I build modern web applications — emphasizing performance, structural integrity, and seamless user experiences.
                </p>

                <p>
                  As a full-stack developer, I construct complete end-to-end solutions, crafting responsive frontends with <strong className="text-[#38bdf8]">React</strong> and <strong className="text-[#38bdf8]">Next.js</strong>, while building resilient RESTful backends powered by <strong className="text-[#38bdf8]">Express.js</strong> and <strong className="text-[#38bdf8]">MongoDB</strong>.
                </p>

                <p>
                  I have hands-on production experience integrating robust authentication systems using <strong className="text-[#38bdf8]">Better Auth</strong> and processing secure digital payments with the <strong className="text-[#38bdf8]">Stripe API</strong>.
                </p>

                {/* The single exact cybersecurity sentence requirement */}
                <div className="p-4 bg-[#131313] border-l-2 border-[#38bdf8] border-y border-r border-y-[#1a1a1a] border-r-[#1a1a1a] font-mono text-xs sm:text-sm text-[#8a8f8d] flex items-start gap-3">
                  <LockKeyhole className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" aria-hidden="true" />
                  <p>
                    Also spent 1.5 years studying cybersecurity fundamentals (TryHackMe, HackTheBox) before focusing on web development — it shapes how I think about auth and data handling.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4-Column Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="terminal-card p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#8a8f8d] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <Icon className="w-4 h-4 text-[#38bdf8]" aria-hidden="true" />
                </div>
                <div className="font-mono text-base font-bold text-[#e5e2e1]">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[#8a8f8d] mt-1">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
