import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import profileImg from "@/assets/Formal pic_swadha.jpeg";
import heroBgImg from "@/assets/hero-bg.png";

export function Hero() {
  const [idx, setIdx] = useState(0);
  const gmailComposeUrl = `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(
    `mailto:${personal.email}`
  )}`;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % personal.roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--glow)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--glow-2)" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            >
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-9 md:h-10 mb-6 overflow-hidden"
            >
              <div className="text-xl md:text-2xl text-muted-foreground">
                <motion.span
                  key={idx}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  className="inline-block text-foreground"
                >
                  {personal.roles[idx]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8"
            >
              {personal.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 shadow-glow">
                <a href={personal.resume} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass border-white/10">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

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
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full glass hover:scale-110 hover:text-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto order-1 lg:order-2 mr-20 -mt-12"
          >
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] blur-2xl opacity-50" />
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full glass p-2 shadow-glow">
              <div className="h-full w-full rounded-full overflow-hidden bg-[image:var(--gradient-primary)]">
                <img
                  src={profileImg}
                  alt={`Portrait of ${personal.name}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
