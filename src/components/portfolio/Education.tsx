import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const coursework = [
  "Data Structures",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Computer Graphics",
  "Theory of Computation",
  "Cryptography & Cyber Security",
  "Web Development",
];

const stats = [
  { label: "CGPA", value: "7.89" },
  { label: "Current Year", value: "3rd Year" },
  { label: "Current Semester", value: "5th" },
  { label: "Backlogs", value: "0" },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic Journey"
      subtitle="Relevant coursework and academic foundations supporting my software development journey."
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 max-w-5xl mx-auto border border-purple-500/20 hover:border-pink-500/35 hover:shadow-[0_0_30px_rgba(236,72,153,0.12)] transition-all"
      >
        {/* Degree */}
        <div className="flex items-start gap-4 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 via-[#a855f7]/20 to-[#ec4899]/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)] shrink-0">
            <GraduationCap className="text-pink-400" size={30} />
          </div>

          <div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-100">
              B.Tech in Computer Science & Engineering
            </h3>

            <p className="text-slate-300 mt-1">
              Amity University Rajasthan, Jaipur
            </p>

            <p className="text-sm text-muted-foreground">
              2024 – Present
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-purple-500/20 bg-[#131127]/60 p-5 hover:border-pink-500/30 transition-colors"
            >
              <p className="text-3xl font-bold text-white">
                {item.value}
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-purple-500/20 my-8" />
        {/* Coursework */}
        <div>
          <h4 className="text-2xl font-semibold mb-5 text-slate-100">
            Core Coursework
          </h4>

          <div className="flex flex-wrap gap-3">
            {coursework.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/10 text-xs text-pink-300 font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}