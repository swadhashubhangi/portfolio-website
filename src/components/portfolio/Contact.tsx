import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
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
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: "swadha-shubhangi", href: personal.linkedin },
    { icon: Github, label: "GitHub", value: "swadhashubhangi", href: personal.github },
    { icon: MapPin, label: "Location", value: personal.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Open to internship opportunities, collaborations, and conversations."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 lg:col-span-3 space-y-4"
        >
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="bg-white/5 border-white/10"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="bg-white/5 border-white/10"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
              rows={6}
              className="bg-white/5 border-white/10 resize-none"
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-90 w-full sm:w-auto">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-3"
        >
          {info.map(({ icon: Icon, label, value, href }) => {
            const Wrap: any = href ? "a" : "div";
            return (
              <Wrap
                key={label}
                {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                className="glass rounded-2xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="h-10 w-10 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>
              </Wrap>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
