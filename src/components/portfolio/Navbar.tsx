import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled
              ? "bg-[#090817]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
              : "bg-[#090817]/40 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Logo badge matching reference */}
          <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-lg group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] via-[#c026d3] to-[#ec4899] text-white font-bold text-base shadow-[0_0_15px_rgba(236,72,153,0.35)] transition-transform group-hover:scale-105">
              S
            </span>
            <span className="text-white font-semibold tracking-tight">Swadha</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-pink-400 font-medium"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Button with icon */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#6366f1] via-[#9333ea] to-[#ec4899] text-white font-medium rounded-xl shadow-[0_2px_15px_rgba(236,72,153,0.35)] hover:shadow-[0_2px_22px_rgba(236,72,153,0.5)] hover:opacity-95 px-4 py-2 border-0 cursor-pointer"
            >
              <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                Resume <Download className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 bg-[#0d0b1e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col shadow-2xl"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm ${
                    active === l.href.slice(1)
                      ? "text-pink-400 font-medium bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#6366f1] via-[#9333ea] to-[#ec4899] text-white font-medium rounded-xl"
                >
                  <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    Resume <Download className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
