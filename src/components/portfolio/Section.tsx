import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
              + {eyebrow}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient">{w}</span>
              ) : (
                <span key={i}>{w} </span>
              )
            )}
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
