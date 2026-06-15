import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic journey"
      subtitle="Foundations laid year by year."
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent" />
        {education.map((e, i) => (
          <motion.div
            key={e.qualification}
            initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`relative mb-8 md:w-1/2 pl-12 md:pl-0 ${
              i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"
            }`}
          >
            <span
              className={`absolute top-5 h-4 w-4 rounded-full bg-[image:var(--gradient-primary)] ring-4 ring-background left-[8px] -translate-x-1/2 ${
                i % 2
                  ? "md:left-0 md:-translate-x-1/2"
                  : "md:left-auto md:right-0 md:translate-x-1/2"
              }`}
            />
            <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                <GraduationCap size={14} /> {e.year}
              </div>
              <h3 className="text-lg font-semibold">{e.qualification}</h3>
              <p className="text-sm text-muted-foreground mb-2">{e.institution}</p>
              <span className="inline-block px-3 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
                {e.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
