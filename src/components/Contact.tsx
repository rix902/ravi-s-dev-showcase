import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Contact</h2>
          <div className="w-20 h-1 gradient-bg rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border"
            />
            <Button type="submit" className="gradient-bg text-primary-foreground rounded-full px-8">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, projects, or just a friendly chat!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:123pravikumar@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">123pravikumar@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-sm">GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
