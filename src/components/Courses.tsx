import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import { courses } from "@/data/courses";

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Courses</h2>
          <div className="w-20 h-1 gradient-bg rounded-full mb-10" />
        </motion.div>

        <div className="space-y-4">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="mt-0.5 w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                {course.platform && (
                  <p className="text-xs text-muted-foreground">
                    {course.platform} {course.year && `· ${course.year}`}
                  </p>
                )}
                {course.description && (
                  <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
