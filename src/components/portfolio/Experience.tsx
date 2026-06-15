import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've contributed"
      subtitle="Hands-on participation, scientific projects, and collaborative activities."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center text-primary-foreground shrink-0">
                <Briefcase size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-primary mb-3">{e.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{e.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {e.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
