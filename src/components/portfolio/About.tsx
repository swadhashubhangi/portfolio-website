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
          className="glass rounded-2xl p-6 lg:col-span-2 border border-white/10 hover:border-purple-500/30 transition-all shadow-[0_4px_25px_-5px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 mb-4 text-sm text-pink-400 font-medium">
            <Sparkles size={16} className="text-pink-400" /> Areas of Interest
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {interests.map((i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-sm border border-purple-500/20 bg-purple-500/5 text-slate-200 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-300 transition-colors"
              >
                {i}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-4 text-sm text-purple-400 font-medium">
            <Target size={16} className="text-purple-400" /> Current Focus
          </div>
          <ul className="space-y-3">
            {currentFocus.map((f, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_6px_#ec4899] shrink-0" />
                <span className="text-slate-300">{f}</span>
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
          <div className="glass rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-2 text-sm text-pink-400 font-medium mb-2">
              <MapPin size={16} className="text-pink-400" /> Location
            </div>
            <div className="font-medium text-slate-100">{personal.location}</div>
          </div>
          <div className="glass rounded-2xl p-6 relative overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all">
            <Quote className="absolute -top-2 -right-2 h-20 w-20 text-pink-500/10 pointer-events-none" />
            <p className="italic text-slate-300 relative leading-relaxed">"{personal.tagline}"</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
