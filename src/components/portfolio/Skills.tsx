import { motion } from "motion/react";
import { Code2, Database, Globe, Library, Cpu, Wrench } from "lucide-react";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

const icons = [Code2, Library, Database, Globe, Cpu, Wrench];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A growing technical toolkit"
      subtitle="The languages, libraries, and concepts I'm actively learning and applying."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 group border border-white/10 hover:border-pink-500/35 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] flex items-center justify-center text-white shadow-[0_0_15px_rgba(236,72,153,0.25)] group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-slate-100">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#131127]/80 border border-purple-500/20 text-slate-300 group-hover:border-purple-500/35 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
