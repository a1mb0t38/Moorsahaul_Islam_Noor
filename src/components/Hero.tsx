"use client";

import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, Terminal, Code2, Database, Cpu, Layers } from "lucide-react";

const TECH_BADGES = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-radial-dots bg-[#000000] border-b border-[#1a1a1a] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#38bdf8]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-xs font-mono text-[#8a8f8d]">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" aria-hidden="true" />
              <span className="tracking-wider uppercase">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-extrabold tracking-tight text-[#e5e2e1] uppercase leading-tight">
              MD. MOORSAHAUL<br />ISLAM NOOR
            </h1>

            {/* Title Line with Blinking Cursor */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-[#38bdf8]">
              Full-Stack Developer
              <span className="animate-blink text-[#38bdf8]" aria-hidden="true">_</span>
            </div>

            {/* One-Line Subhead */}
            <p className="text-base sm:text-lg text-[#8a8f8d] max-w-2xl font-sans leading-relaxed">
              Building fast, secure, end-to-end web applications with React, Next.js, and Node.js.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* DOWNLOAD CV button links to public/resume.pdf */}
              {/* NOTE FOR USER: Replace 'public/resume.pdf' with your actual resume PDF file */}
              <a
                href="/resume.pdf"
                download="MD_Moorsahaul_Islam_Noor_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#000000] font-mono font-bold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:ring-offset-2 focus:ring-offset-[#000000]"
                aria-label="Download MD. Moorsahaul Islam Noor Resume PDF"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>DOWNLOAD CV</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#38bdf8] font-mono font-semibold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              >
                <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                <span>VIEW PROJECTS</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#e5e2e1] hover:text-[#38bdf8] font-mono font-semibold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-6 border-t border-[#1a1a1a]/80">
              <div className="text-xs font-mono text-[#8a8f8d] uppercase tracking-wider mb-3">
                PRIMARY CORE STACK:
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-[#131313] border border-[#1a1a1a] text-[#e5e2e1] font-mono text-xs tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Editor Mockup Visual SVG (No human photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="terminal-card shadow-2xl overflow-hidden">
              {/* Terminal Window Header Chrome */}
              <div className="terminal-chrome justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="terminal-dot bg-[#ff5f56]" />
                  <div className="terminal-dot bg-[#ffbd2e]" />
                  <div className="terminal-dot bg-[#27c93f]" />
                </div>
                <div className="font-mono text-xs text-[#8a8f8d] tracking-wider">
                  developer.tsx — NOOR-CONSOLE
                </div>
                <div className="text-xs font-mono text-[#38bdf8]">TypeScript</div>
              </div>

              {/* Terminal Content Mockup */}
              <div className="p-5 font-mono text-xs space-y-3 bg-[#0a0a0a] text-[#e5e2e1] leading-relaxed select-none">
                <div>
                  <span className="text-[#38bdf8]">const</span>{" "}
                  <span className="text-[#e5e2e1]">developer</span>{" "}
                  <span className="text-[#8a8f8d]">=</span> {"{"}
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">name:</span>{" "}
                  <span className="text-[#38bdf8]">&quot;MD. Moorsahaul Islam Noor&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">degree:</span>{" "}
                  <span className="text-[#38bdf8]">&quot;BSc in Software Engineering&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">institution:</span>{" "}
                  <span className="text-[#38bdf8]">&quot;Daffodil International University&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">role:</span>{" "}
                  <span className="text-[#38bdf8]">&quot;Full-Stack Web Developer&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">focus:</span> [
                  <span className="text-[#38bdf8]">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-[#38bdf8]">&quot;React&quot;</span>,{" "}
                  <span className="text-[#38bdf8]">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-[#38bdf8]">&quot;MongoDB&quot;</span>],
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">authAndPayments:</span> [
                  <span className="text-[#38bdf8]">&quot;Better Auth&quot;</span>,{" "}
                  <span className="text-[#38bdf8]">&quot;Stripe API&quot;</span>],
                </div>

                <div className="pl-4">
                  <span className="text-[#8a8f8d]">status:</span>{" "}
                  <span className="text-[#34d399]">&quot;Available for opportunities&quot;</span>
                </div>

                <div>{"};"}</div>

                {/* Simulated Console Command Line */}
                <div className="pt-3 border-t border-[#1a1a1a] flex items-center gap-2 text-[#8a8f8d]">
                  <span className="text-[#38bdf8]">$&gt;</span>
                  <span>node --version &amp;&amp; next dev</span>
                </div>
                <div className="text-[#34d399] text-[11px] font-mono">
                  [SUCCESS] Ready on http://localhost:3000 (0.42s)
                </div>
              </div>

              {/* Bottom Feature Micro-Badges */}
              <div className="grid grid-cols-3 border-t border-[#1a1a1a] bg-[#131313] divide-x divide-[#1a1a1a]">
                <div className="p-3 text-center">
                  <Code2 className="w-4 h-4 mx-auto text-[#38bdf8] mb-1" aria-hidden="true" />
                  <span className="block text-[10px] font-mono text-[#8a8f8d]">FRONTEND</span>
                </div>
                <div className="p-3 text-center">
                  <Database className="w-4 h-4 mx-auto text-[#38bdf8] mb-1" aria-hidden="true" />
                  <span className="block text-[10px] font-mono text-[#8a8f8d]">BACKEND</span>
                </div>
                <div className="p-3 text-center">
                  <Layers className="w-4 h-4 mx-auto text-[#38bdf8] mb-1" aria-hidden="true" />
                  <span className="block text-[10px] font-mono text-[#8a8f8d]">FULL-STACK</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
