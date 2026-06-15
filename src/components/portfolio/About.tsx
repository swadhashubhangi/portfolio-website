import { motion } from "motion/react";
import { MapPin, Sparkles, Target, Quote } from "lucide-react";
import { Section } from "./Section";
import { personal, interests, currentFocus } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Curious mind, builder hands" subtitle={personal.about}>
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Sparkles size={16} className="text-primary" /> Areas of Interest
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {interests.map((i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                {i}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Target size={16} className="text-accent" /> Current Focus
          </div>
          <ul className="space-y-3">
            {currentFocus.map((f, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[image:var(--gradient-primary)] shrink-0" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin size={16} className="text-primary" /> Location
            </div>
            <div className="font-medium">{personal.location}</div>
          </div>
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            <Quote className="absolute -top-2 -right-2 h-20 w-20 text-primary/10" />
            <p className="italic text-muted-foreground relative">"{personal.tagline}"</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
