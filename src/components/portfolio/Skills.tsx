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
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-muted-foreground"
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
