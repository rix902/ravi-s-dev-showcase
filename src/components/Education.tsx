import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Education</h2>
          <div className="w-20 h-1 gradient-bg rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </div>

                <div className="p-5 rounded-xl border border-border bg-card">
                  <span className="text-xs text-muted-foreground font-medium">{edu.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{edu.degree}</h3>
                  <p className="text-sm text-primary">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
