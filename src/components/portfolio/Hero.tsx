import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import profileImg from "@/assets/Formal pic_swadha.jpeg";

export function Hero() {
  // Start with Problem Solver if present, matching the reference screenshot
  const initialIdx = Math.max(0, personal.roles.indexOf("Problem Solver"));
  const [idx, setIdx] = useState(initialIdx !== -1 ? initialIdx : 0);
  const gmailComposeUrl = `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(
    `mailto:${personal.email}`
  )}`;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % personal.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Subtle star/dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="order-2 lg:order-1">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-6 bg-[#121124]/90 border border-purple-500/25 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.12)]"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              Available for internships
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-4 tracking-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-[#9d4edd] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>

            {/* Dynamic Role / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-9 md:h-10 mb-6 overflow-hidden"
            >
              <div className="text-xl md:text-2xl font-semibold text-slate-100">
                <motion.span
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  className="inline-block"
                >
                  {personal.roles[idx]}
                </motion.span>
              </div>
            </motion.div>

            {/* Intro Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed"
            >
              {personal.intro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              {/* Primary Resume Button */}
              <Button
                asChild
                size="lg"
                className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#9333ea] to-[#ec4899] text-white font-medium hover:opacity-95 shadow-[0_4px_25px_rgba(236,72,153,0.35)] hover:shadow-[0_4px_30px_rgba(236,72,153,0.5)] transition-all cursor-pointer border-0"
              >
                <a href={personal.resume} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>

              {/* View Projects Button */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 rounded-xl bg-[#121124]/70 hover:bg-[#1c183a] text-white border border-white/10 hover:border-pink-500/30 transition-all cursor-pointer"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              {/* Contact Me Link with glowing underline */}
              <a
                href="#contact"
                className="h-12 inline-flex items-center px-4 text-pink-400 hover:text-pink-300 font-medium transition-colors relative group"
              >
                Contact Me
                <span className="absolute bottom-2.5 left-4 right-4 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-[0_0_8px_#ec4899] transition-all group-hover:shadow-[0_0_12px_#ec4899]" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: Github, href: personal.github, label: "GitHub" },
                { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
                { icon: Mail, href: gmailComposeUrl, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={
                    label === "Email"
                      ? (event) => {
                        event.preventDefault();
                        window.open(href, "_blank", "noopener,noreferrer");
                      }
                      : undefined
                  }
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#131127]/80 border border-purple-500/20 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Avatar with Concentric Rotating Dotted Celestial Orbits & Moons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center relative py-6"
          >
            <div className="relative flex items-center justify-center">
              {/* Soft cosmic diffuse background glow */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-600/20 to-indigo-600/15 blur-3xl opacity-80 pointer-events-none" />

              {/* Ring 4: Distant Faint Dotted Orbit (ultra-slow, subtle) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-18 sm:-inset-24 md:-inset-30 rounded-full pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="99"
                    fill="none"
                    stroke="rgba(168, 85, 247, 0.15)"
                    strokeWidth="0.8"
                    strokeDasharray="0.1 11"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Ring 3: Outer Dotted Orbit (slow, soothing rotation) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 105, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-13 sm:-inset-17 md:-inset-22 rounded-full pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="99"
                    fill="none"
                    stroke="rgba(192, 132, 252, 0.22)"
                    strokeWidth="0.9"
                    strokeDasharray="0.1 9.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Ring 2: Main Dotted Orbit with Orbiting Moons / Celestial Planets */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 sm:-inset-11 md:-inset-14 rounded-full pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="99"
                    fill="none"
                    stroke="rgba(236, 72, 153, 0.32)"
                    strokeWidth="1.1"
                    strokeDasharray="0.1 8"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Celestial Moon 1: Top-Right (~65° on the orbit line) */}
                <div
                  style={{ left: "70.7%", top: "5.6%" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-pink-100 shadow-[0_0_8px_2px_#ec4899,0_0_18px_4px_rgba(236,72,153,0.65)]" />
                </div>

                {/* Celestial Moon 2: Bottom-Left (~215° on the orbit line) */}
                <div
                  style={{ left: "9.8%", top: "78.1%" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-pink-100 shadow-[0_0_7px_2px_#ec4899,0_0_16px_3px_rgba(236,72,153,0.55)]" />
                </div>
              </motion.div>

              {/* Ring 1: Inner Dotted Orbit (gentle counter-drift) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 sm:-inset-6 md:-inset-7 rounded-full pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="99"
                    fill="none"
                    stroke="rgba(216, 180, 254, 0.25)"
                    strokeWidth="1"
                    strokeDasharray="0.1 6.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Main Glowing Neon Gradient Ring */}
              <div className="relative p-[3.5px] rounded-full bg-gradient-to-tr from-[#6366f1] via-[#a855f7] to-[#ec4899] shadow-[-8px_0_28px_rgba(236,72,153,0.45),8px_0_28px_rgba(139,92,246,0.35),0_0_55px_rgba(236,72,153,0.2)]">
                {/* Avatar Image Frame */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-white">
                  <img
                    src={profileImg}
                    alt={`Portrait of ${personal.name}`}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
