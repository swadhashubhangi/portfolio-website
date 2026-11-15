import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personal } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const gmailComposeUrl = `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(
    `mailto:${personal.email}`
  )}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  const info = [
    { icon: Mail, label: "Email", value: personal.email, href: gmailComposeUrl },
    { icon: Linkedin, label: "LinkedIn", value: "swadha-shubhangi", href: personal.linkedin },
    { icon: Github, label: "GitHub", value: "swadhashubhangi", href: personal.github },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Open to internships, collaborations, and meaningful conversations about technology."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 lg:col-span-3 space-y-4 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          <div>
            <label className="text-sm text-slate-300 mb-1.5 block">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="bg-[#121026]/80 border-purple-500/20 focus:border-pink-500/50 text-white placeholder:text-slate-500"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm text-slate-300 mb-1.5 block">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="bg-[#121026]/80 border-purple-500/20 focus:border-pink-500/50 text-white placeholder:text-slate-500"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm text-slate-300 mb-1.5 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
              rows={6}
              className="bg-[#121026]/80 border-purple-500/20 focus:border-pink-500/50 text-white placeholder:text-slate-500 resize-none"
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="bg-gradient-to-r from-[#6366f1] via-[#9333ea] to-[#ec4899] text-white font-medium hover:opacity-95 shadow-[0_4px_25px_rgba(236,72,153,0.35)] hover:shadow-[0_4px_30px_rgba(236,72,153,0.5)] w-full sm:w-auto border-0 cursor-pointer">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex flex-col justify-center gap-5 sm:gap-6"
        >
          {info.map(({ icon: Icon, label, value, href }) => {
            const Wrap: any = href ? "a" : "div";
            return (
              <Wrap
                key={label}
                {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                className="glass rounded-2xl p-5 sm:p-6 flex items-center gap-5 border border-white/10 hover:border-pink-500/35 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition-all group"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] flex items-center justify-center text-white shadow-[0_0_15px_rgba(236,72,153,0.25)] group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-pink-400 font-medium mb-1">{label}</div>
                  <div className="text-sm sm:text-base font-medium truncate text-slate-100">{value}</div>
                </div>
              </Wrap>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
