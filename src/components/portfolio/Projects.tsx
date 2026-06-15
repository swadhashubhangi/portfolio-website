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
      subtitle="A growing collection of hands-on work. More coming as I learn."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              cat === c
                ? "bg-[image:var(--gradient-primary)] text-primary-foreground border-transparent"
                : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[image:var(--gradient-primary)]">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <FolderGit2 className="h-16 w-16 text-white/70 group-hover:scale-110 transition-transform" />
                </div>
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-md glass">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <Button asChild size="sm" variant="outline" className="glass border-white/10">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="sm" className="bg-[image:var(--gradient-primary)] text-primary-foreground">
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
