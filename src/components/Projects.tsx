"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Pill, CalendarCheck, ShieldCheck, CreditCard, LayoutDashboard, Layers } from "lucide-react";

const PROJECTS = [
  {
    id: "medtrack",
    title: "MedTrack: Medication Tracking & Caregiver Management System",
    subtitle: "End-to-End Healthcare Adherence & Caregiver Collaboration Platform",
    description:
      "A full-stack web application designed for patients and caregivers to schedule medication routines, monitor adherence logs, and manage patient profiles with role-restricted access.",
    highlights: [
      "Role-based dashboards (patient & caregiver viewports)",
      "Automated dose scheduling & real-time adherence tracking",
      "Secure authentication & session state handling via Better Auth",
      "RESTful API architecture connected to MongoDB database",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    // NOTE FOR USER: Replace placeholder '#' with your live demo deployment URL
    demoUrl: "#",
    // NOTE FOR USER: Replace placeholder '#' with your GitHub repository URL
    githubUrl: "#",
    icon: Pill,
    filename: "medtrack_app.tsx",
  },
  {
    id: "medicare-connect",
    title: "MediCare Connect: Hospital Appointment Booking Platform",
    subtitle: "Digital Healthcare Portal & Automated Stripe Payment Integration",
    description:
      "A comprehensive medical appointment booking system enabling patients to search specialized doctors, reserve time slots, pay consultation fees securely, and manage medical appointments.",
    highlights: [
      "Doctor directory with category filtering & schedule lookup",
      "Interactive appointment booking flow with conflict resolution",
      "Stripe payment gateway integration for instant payment checkout",
      "Role-based patient and clinical staff administration dashboards",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Stripe",
    ],
    // NOTE FOR USER: Replace placeholder '#' with your live demo deployment URL
    demoUrl: "#",
    // NOTE FOR USER: Replace placeholder '#' with your GitHub repository URL
    githubUrl: "#",
    icon: CalendarCheck,
    filename: "medicare_booking.tsx",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#000000] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#38bdf8]">03.</span>
            <h2 className="font-mono text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#e5e2e1]">
              FEATURED PROJECTS
            </h2>
            <div className="flex-1 h-[1px] bg-[#1a1a1a] ml-4" />
          </div>
          <p className="mt-2 font-mono text-xs text-[#8a8f8d]">
            // REPOSITORY_SHOWCASE: REAL-WORLD FULL-STACK APPLICATIONS
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="terminal-card overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="terminal-chrome justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="terminal-dot bg-[#ff5f56]" />
                    <div className="terminal-dot bg-[#ffbd2e]" />
                    <div className="terminal-dot bg-[#27c93f]" />
                  </div>
                  <div className="font-mono text-xs text-[#8a8f8d]">
                    src/projects/{project.filename}
                  </div>
                  <div className="font-mono text-xs text-[#38bdf8]">v1.0.0</div>
                </div>

                {/* Card Content Grid */}
                <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8]">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-[#38bdf8] uppercase tracking-wider block">
                          PROJECT 0{index + 1}
                        </span>
                        <h3 className="font-mono text-xl sm:text-2xl font-bold text-[#e5e2e1]">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#8a8f8d] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-2">
                      <div className="font-mono text-xs text-[#e5e2e1] font-semibold uppercase tracking-wider">
                        KEY ARCHITECTURAL FEATURES:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 font-mono text-xs text-[#8a8f8d] bg-[#131313] p-2 border border-[#1a1a1a]"
                          >
                            <span className="text-[#38bdf8] font-bold mt-0.5">&gt;</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Tech Badges & CTAs */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#0a0a0a] lg:border-l border-[#1a1a1a] lg:pl-8 pt-4 lg:pt-0">
                    
                    {/* Tech Badges */}
                    <div className="space-y-3">
                      <div className="font-mono text-xs text-[#8a8f8d] uppercase tracking-wider">
                        TECHNOLOGY STACK:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#131313] border border-[#1a1a1a] text-[#e5e2e1] font-mono text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-4 border-t border-[#1a1a1a]">
                      {/* LIVE DEMO Button */}
                      {/* Code Comment: Replace project.demoUrl with your actual live demo deployment link */}
                      <a
                        href={project.demoUrl}
                        target={project.demoUrl === "#" ? "_self" : "_blank"}
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#000000] font-mono font-bold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        <span>LIVE DEMO</span>
                      </a>

                      {/* GITHUB Button */}
                      {/* Code Comment: Replace project.githubUrl with your actual GitHub repo link */}
                      <a
                        href={project.githubUrl}
                        target={project.githubUrl === "#" ? "_self" : "_blank"}
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#131313] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#e5e2e1] hover:text-[#38bdf8] font-mono font-semibold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                        aria-label={`View source code of ${project.title} on GitHub`}
                      >
                        <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                        <span>GITHUB REPOSITORY</span>
                      </a>
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
