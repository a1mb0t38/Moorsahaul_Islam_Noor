"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Terminal } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("ERROR: All terminal fields are required.");
      return;
    }

    setIsSubmitting(true);

    /*
     * NOTE FOR DEVELOPER / USER:
     * To connect this form to an email delivery service (e.g. Resend, Formspree, SendGrid, or Next.js API Route),
     * place your fetch/API call here:
     *
     * await fetch('/api/contact', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formState)
     * });
     */

    // Simulated network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#000000] border-b border-[#1a1a1a] bg-radial-dots relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#38bdf8]">05.</span>
            <h2 className="font-mono text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#e5e2e1]">
              CONTACT ME
            </h2>
            <div className="flex-1 h-[1px] bg-[#1a1a1a] ml-4" />
          </div>
          <p className="mt-2 font-mono text-xs text-[#8a8f8d]">
            // INITIATE_COMMUNICATION: OPEN FOR FULL-STACK & CONTRACT OPPORTUNITIES
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-mono text-3xl font-bold text-[#e5e2e1] leading-tight">
                Let&apos;s Build <span className="text-[#38bdf8]">Something</span> Great.
              </h3>
              <p className="mt-3 font-sans text-sm text-[#8a8f8d] leading-relaxed">
                Whether you have an upcoming web project, a full-stack engineering role, or a technical inquiry, feel free to reach out. I respond promptly to all messages.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 font-mono text-xs">

              {/* Email */}
              <div className="terminal-card p-4 flex items-center gap-4">
                <div className="p-3 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8]">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8a8f8d] uppercase tracking-wider block">
                    EMAIL ADDRESS
                  </span>
                  {/* Code comment: Replace email with user's official email address */}
                  <a
                    href="mailto:mursahaulnur17@gmail.com"
                    className="text-sm font-bold text-[#e5e2e1] hover:text-[#38bdf8] transition-colors"
                  >
                    mursahaulnur17@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="terminal-card p-4 flex items-center gap-4">
                <div className="p-3 bg-[#131313] border border-[#1a1a1a] text-[#38bdf8]">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8a8f8d] uppercase tracking-wider block">
                    LOCATION
                  </span>
                  <span className="text-sm font-bold text-[#e5e2e1]">
                    Dhaka, Bangladesh (UTC+6)
                  </span>
                </div>
              </div>

              {/* Work Status */}
              <div className="terminal-card p-4 flex items-center gap-4">
                <div className="p-3 bg-[#131313] border border-[#1a1a1a] text-[#34d399]">
                  <Terminal className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8a8f8d] uppercase tracking-wider block">
                    AVAILABILITY STATUS
                  </span>
                  <span className="text-sm font-bold text-[#34d399]">
                    Open for Full-Time & Contract Roles
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="terminal-card">
              {/* Terminal Form Header */}
              <div className="terminal-chrome justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="terminal-dot bg-[#ff5f56]" />
                  <div className="terminal-dot bg-[#ffbd2e]" />
                  <div className="terminal-dot bg-[#27c93f]" />
                </div>
                <div className="font-mono text-xs text-[#8a8f8d]">
                  CONTACT_FORM.TSX
                </div>
                <div className="font-mono text-xs text-[#38bdf8]">POST /api/contact</div>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="py-12 text-center space-y-4 font-mono">
                    <div className="w-12 h-12 mx-auto bg-[#131313] border border-[#34d399] flex items-center justify-center text-[#34d399]">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-bold text-[#e5e2e1]">
                      [SUCCESS 200] Message Sent!
                    </h4>
                    <p className="text-xs text-[#8a8f8d] max-w-md mx-auto">
                      Thank you for contacting MD. Moorsahaul Islam Noor. Your message payload was received successfully.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-[#131313] border border-[#1a1a1a] hover:border-[#38bdf8] text-[#38bdf8] text-xs font-mono uppercase tracking-wider"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-3 bg-[#131313] border border-red-500/50 text-red-400 font-mono text-xs">
                        {errorMessage}
                      </div>
                    )}

                    {/* NAME field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs text-[#8a8f8d] uppercase tracking-wider"
                      >
                        NAME <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#131313] border border-[#1a1a1a] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-[#e5e2e1] font-mono text-sm placeholder-[#8a8f8d]/50 outline-none rounded-none transition-colors"
                      />
                    </div>

                    {/* EMAIL field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs text-[#8a8f8d] uppercase tracking-wider"
                      >
                        EMAIL ADDRESS <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full px-4 py-3 bg-[#131313] border border-[#1a1a1a] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-[#e5e2e1] font-mono text-sm placeholder-[#8a8f8d]/50 outline-none rounded-none transition-colors"
                      />
                    </div>

                    {/* MESSAGE field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block font-mono text-xs text-[#8a8f8d] uppercase tracking-wider"
                      >
                        MESSAGE <span className="text-[#38bdf8]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Describe your project, role, or message..."
                        className="w-full px-4 py-3 bg-[#131313] border border-[#1a1a1a] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-[#e5e2e1] font-mono text-sm placeholder-[#8a8f8d]/50 outline-none rounded-none transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#000000] font-mono font-bold text-xs tracking-wider uppercase transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" aria-hidden="true" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
