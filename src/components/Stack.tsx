"use client";

import { motion } from "framer-motion";
import { Layout, Server, Wrench, Shield, CheckCircle2 } from "lucide-react";

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-[#000000] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#38bdf8]">02.</span>
            <h2 className="font-mono text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#e5e2e1]">
              TECH STACK
            </h2>
            <div className="flex-1 h-[1px] bg-[#1a1a1a] ml-4" />
          </div>
          <p className="mt-2 font-mono text-xs text-[#8a8f8d]">
            // TECH_INVENTORY: FRONTEND, BACKEND & DEVELOPMENT TOOLING
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 — FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="terminal-card flex flex-col justify-between"
          >
            <div>
              {/* Terminal Chrome Header */}
              <div className="terminal-chrome justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="terminal-dot bg-[#ff5f56]" />
                  <div className="terminal-dot bg-[#ffbd2e]" />
                  <div className="terminal-dot bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] text-[#8a8f8d]">01_FRONTEND.TS</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8]">
                    <Layout className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-base text-[#e5e2e1] uppercase">
                      FRONTEND
                    </h3>
                    <p className="font-mono text-xs text-[#8a8f8d]">UI/UX & Client Logic</p>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-xs">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-[#e5e2e1] p-2 bg-[#131313] border border-[#1a1a1a]">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" aria-hidden="true" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 py-3 bg-[#131313] border-t border-[#1a1a1a] text-[11px] font-mono text-[#8a8f8d]">
              Status: Production Ready
            </div>
          </motion.div>

          {/* Card 2 — BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="terminal-card flex flex-col justify-between"
          >
            <div>
              {/* Terminal Chrome Header */}
              <div className="terminal-chrome justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="terminal-dot bg-[#ff5f56]" />
                  <div className="terminal-dot bg-[#ffbd2e]" />
                  <div className="terminal-dot bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] text-[#8a8f8d]">02_BACKEND.TS</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8]">
                    <Server className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-base text-[#e5e2e1] uppercase">
                      BACKEND
                    </h3>
                    <p className="font-mono text-xs text-[#8a8f8d]">APIs, DB & Security</p>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-xs">
                  {["Node.js", "Express.js", "MongoDB", "Better Auth", "Stripe API"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-[#e5e2e1] p-2 bg-[#131313] border border-[#1a1a1a]">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" aria-hidden="true" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 py-3 bg-[#131313] border-t border-[#1a1a1a] text-[11px] font-mono text-[#8a8f8d]">
              Status: Production Ready
            </div>
          </motion.div>

          {/* Card 3 — TOOLING & OTHER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="terminal-card flex flex-col justify-between"
          >
            <div>
              {/* Terminal Chrome Header */}
              <div className="terminal-chrome justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="terminal-dot bg-[#ff5f56]" />
                  <div className="terminal-dot bg-[#ffbd2e]" />
                  <div className="terminal-dot bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] text-[#8a8f8d]">03_TOOLING.TS</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8]">
                    <Wrench className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-base text-[#e5e2e1] uppercase">
                      TOOLING & OTHER
                    </h3>
                    <p className="font-mono text-xs text-[#8a8f8d]">Workflow & Utilities</p>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-xs">
                  {["Git", "GitHub", "VS Code", "JavaScript", "HTML5/CSS3"].map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-[#e5e2e1] p-2 bg-[#131313] border border-[#1a1a1a]">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" aria-hidden="true" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                {/* Small muted tag in secondary green accent (#34d399) - Cybersecurity mention #2 */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#131313] border border-[#34d399]/30 rounded-full font-mono text-[11px] text-[#34d399]">
                    <Shield className="w-3.5 h-3.5 text-[#34d399]" aria-hidden="true" />
                    <span>[ Cybersecurity fundamentals ]</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-[#131313] border-t border-[#1a1a1a] text-[11px] font-mono text-[#8a8f8d]">
              Status: Active Workflow
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
