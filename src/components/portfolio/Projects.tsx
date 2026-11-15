import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Section } from "./Section";
import { projects, projectCategories } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

function matchesCategory(cat: string, project: { category: string; tech: string[] }) {
  if (cat === "All") return true;
  if (cat === "C/C++") return project.tech.some((t) => t === "C" || t === "C++");
  if (cat === "Web Dev")
    return project.tech.some((t) => ["HTML", "CSS", "JavaScript", "React"].includes(t));
  return project.category === cat || project.tech.includes(cat);
}

export function Projects() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => projects.filter((p) => matchesCategory(cat, p)), [cat]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="A collection of projects built while learning and applying computer science concepts."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 text-sm rounded-full border transition-all cursor-pointer ${
              cat === c
                ? "bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] text-white border-transparent shadow-[0_2px_15px_rgba(236,72,153,0.35)] font-medium"
                : "border-purple-500/20 bg-[#121124]/60 text-slate-300 hover:text-white hover:border-pink-500/35"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden group border border-white/10 hover:border-pink-500/35 hover:shadow-[0_0_30px_rgba(236,72,153,0.18)] transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#241242] via-[#3b1259] to-[#6b1550]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <FolderGit2 className="h-16 w-16 text-pink-200/80 group-hover:scale-110 transition-transform" />
                  </div>
                )}
                <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-md bg-[#0a0818]/80 backdrop-blur-md border border-purple-500/30 text-pink-300">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{p.title}</h3>
                <p className="text-sm text-slate-300 mb-4 flex-1 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-pink-500/10 text-pink-300 border border-pink-500/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <Button asChild size="sm" variant="outline" className="glass border-white/10 hover:border-pink-500/30 text-slate-200 hover:text-white cursor-pointer">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="sm" className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] text-white shadow-[0_2px_12px_rgba(236,72,153,0.3)] hover:opacity-95 border-0 cursor-pointer">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No projects in this category yet — check back soon.
        </div>
      )}
    </Section>
  );
}
