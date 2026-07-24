"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Calendar, MapPin } from "lucide-react";

const TIMELINE_ITEMS = [
  {
    period: "2020 – 2024",
    title: "BSc in Software Engineering",
    institution: "Daffodil International University",
    description:
      "Graduated with a strong foundation in core computer science principles, software architecture, object-oriented programming, data structures, algorithm design, and database systems.",
    highlights: [
      "Completed degree program in Software Engineering",
      "Focused on web application design patterns & software quality assurance",
    ],
    icon: GraduationCap,
    type: "EDUCATION",
  },
  {
    period: "2025 – Present",
    title: "Full-Stack Web Development",
    institution: "Production & Independent Engineering",
    description:
      "Building production-ready full-stack applications with React/Next.js frontends and Express/MongoDB backends, with deep focus on secure authentication (Better Auth) and payment systems (Stripe).",
    highlights: [
      "Architected complex role-based web systems (MedTrack, MediCare Connect)",
      "Implemented OAuth/Better Auth login routines & Stripe checkout APIs",
      "Crafted responsive, high-performance UI systems with Tailwind CSS & DaisyUI",
    ],
    icon: Code2,
    type: "ENGINEERING",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#000000] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#38bdf8]">04.</span>
            <h2 className="font-mono text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#e5e2e1]">
              TIMELINE & EXPERIENCE
            </h2>
            <div className="flex-1 h-[1px] bg-[#1a1a1a] ml-4" />
          </div>
          <p className="mt-2 font-mono text-xs text-[#8a8f8d]">
            // CHRONOLOGICAL_LOG: ACADEMIC MILESTONES & SOFTWARE ENGINEERING JOURNEY
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#1a1a1a] space-y-12 ml-2 sm:ml-4">
          {TIMELINE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-[#000000] border-2 border-[#38bdf8] rounded-none flex items-center justify-center group-hover:bg-[#38bdf8] transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#38bdf8] group-hover:bg-[#000000]" />
                </div>

                {/* Card Container */}
                <div className="terminal-card p-6 sm:p-8">
                  {/* Card Chrome Sub-header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1a1a1a]">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#38bdf8]">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="font-bold tracking-wider">{item.period}</span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-[#131313] border border-[#1a1a1a] font-mono text-[10px] text-[#8a8f8d]">
                      {item.type}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8] mt-1 shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-mono text-lg sm:text-xl font-bold text-[#e5e2e1]">
                          {item.title}
                        </h3>
                        <div className="font-mono text-xs text-[#38bdf8] mt-0.5">
                          {item.institution}
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-[#8a8f8d] leading-relaxed pt-2">
                      {item.description}
                    </p>

                    <div className="pt-3 space-y-1.5">
                      {item.highlights.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 font-mono text-xs text-[#e5e2e1]"
                        >
                          <span className="text-[#38bdf8]">&gt;</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
