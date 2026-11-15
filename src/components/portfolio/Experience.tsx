import { motion } from "motion/react";
import { Code2, Telescope, Music, Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

function getActivityIcon(role: string, company: string) {
  const text = `${role} ${company}`.toLowerCase();
  if (text.includes("music") || text.includes("cultural")) return Music;
  if (text.includes("nasa") || text.includes("asteroid") || text.includes("scientist") || text.includes("astronomy")) return Telescope;
  if (text.includes("software") || text.includes("develop") || text.includes("code") || text.includes("intern")) return Code2;
  return Briefcase;
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience & Activities"
      subtitle="Exposure to different environments through Hands-on participation, internship and collaborative activities."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experience.map((e, i) => {
          const Icon = getActivityIcon(e.role, e.company);
          return (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-pink-500/35 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] flex items-center justify-center text-white shadow-[0_0_15px_rgba(236,72,153,0.25)] shrink-0">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100">{e.role}</h3>

                  <p className="text-sm text-pink-400 font-medium">{e.company}</p>

                  {e.duration && (
                    <p className="text-xs text-muted-foreground mt-1 mb-3">
                      {e.duration}
                    </p>
                  )}

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {e.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[11px] rounded-md bg-[#131127]/80 border border-purple-500/20 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
