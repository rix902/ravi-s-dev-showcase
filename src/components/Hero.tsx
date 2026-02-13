import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(180_60%_50%/0.05)] blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-muted-foreground mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4 leading-tight"
        >
          Ravi Prajapati
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-6 font-medium"
        >
          Full Stack Developer | MERN Stack Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate BCA student with a drive for building modern web applications. 
          I love turning ideas into reality through clean code and creative problem-solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollTo("#projects")}
            className="gradient-bg text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="rounded-full px-8 py-3 border-border"
          >
            <Mail className="w-4 h-4 mr-1" />
            Contact Me
          </Button>
          <Button
            variant="ghost"
            asChild
            className="rounded-full px-8 py-3"
          >
            <a href="/resume.pdf" download>
              <FileDown className="w-4 h-4 mr-1" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
