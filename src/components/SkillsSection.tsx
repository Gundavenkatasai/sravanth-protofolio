import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "React", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Excel", "Power BI", "Figma", "Jupyter Notebook", "VS Code", "Git", "GitHub"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.15 + i * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
