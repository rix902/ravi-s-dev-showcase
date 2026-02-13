import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">About Me</h2>
          <div className="w-20 h-1 gradient-bg rounded-full mb-8" />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Ravi Prajapati, a BCA 6th semester student at Charans Degree College with a deep 
              passion for software development and technology. My journey in programming started with 
              curiosity and has grown into a committed pursuit of becoming a skilled full-stack developer.
            </p>
            <p>
              I thrive on solving real-world problems through code. Whether it's building a hospital 
              queue management system or designing an IoT-based plant watering solution, I enjoy 
              creating applications that make a tangible impact. My academic projects have given me 
              hands-on experience with the MERN stack, PHP, Python, and various other technologies.
            </p>
            <p>
              Beyond academics, I'm constantly learning — exploring new frameworks, contributing 
              to projects, and staying up-to-date with the latest trends in web development. My goal 
              is to leverage my skills to build innovative solutions and grow as a professional developer 
              in the tech industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
