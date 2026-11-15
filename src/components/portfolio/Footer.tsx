import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-10 mt-10 bg-[#060510]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-400">
          © 2026 {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: personal.github, label: "GitHub" },
            { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-[#131127]/80 border border-purple-500/20 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-110 transition-transform"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
