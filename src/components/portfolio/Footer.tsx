import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
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
              className="h-9 w-9 inline-flex items-center justify-center rounded-full glass hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground hover:scale-110 transition-transform"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
