import { Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#1a1a1a] py-12 text-[#8a8f8d] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1a1a1a]">
          
          {/* Logo / Wordmark */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#131313] border border-[#1a1a1a] flex items-center justify-center text-[#38bdf8]">
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
            </div>
            <span className="font-mono font-bold text-base tracking-wider text-[#e5e2e1]">
              NOOR<span className="text-[#38bdf8] animate-blink">_</span>
            </span>
          </div>

          {/* Minimal Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#home" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <a href="#about" className="hover:text-[#38bdf8] transition-colors">ABOUT</a>
            <a href="#stack" className="hover:text-[#38bdf8] transition-colors">STACK</a>
            <a href="#projects" className="hover:text-[#38bdf8] transition-colors">PROJECTS</a>
            <a href="#timeline" className="hover:text-[#38bdf8] transition-colors">TIMELINE</a>
            <a href="#contact" className="hover:text-[#38bdf8] transition-colors">CONTACT</a>
          </div>

          {/* Return to Top Link */}
          <a
            href="#home"
            className="flex items-center gap-1 text-[#8a8f8d] hover:text-[#38bdf8] transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-center sm:text-left">
          <div>
            © 2026 MD. Moorsahaul Islam Noor — Built with Next.js, TypeScript, Tailwind CSS
          </div>
          <div className="text-[#8a8f8d]/80">
            Daffodil International University (BSc in Software Engineering)
          </div>
        </div>

      </div>
    </footer>
  );
}
