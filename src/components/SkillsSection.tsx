import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Python", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Machine Learning (Scikit-learn)", level: 78 },
      { name: "Matplotlib", level: 82 },
    ],
  },
  {
    title: "Development & Frameworks",
    skills: [
      { name: "React", level: 80 },
      { name: "Node.js & Express", level: 78 },
      { name: "Java", level: 75 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 72 },
    ],
  },
  {
    title: "Tools & Platforms",
    icons: [
      { name: "VS Code", img: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { name: "Git", img: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", img: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
      { name: "Jupyter", img: "https://img.icons8.com/fluency/48/jupyter.png" },
      { name: "Power BI", img: "https://img.icons8.com/color/48/power-bi.png" },
      { name: "Figma", img: "https://img.icons8.com/color/48/figma.png" },
      { name: "Excel", img: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
      { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    title: "Soft Skills",
    tags: ["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Adaptability", "Communication"],
  },
  {
    title: "Core Concepts",
    tags: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
  },
];

const ProgressBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
        />
      </div>
    </div>
  );
};

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
          <p className="text-primary font-mono text-sm mb-2">03. Technical Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress bar categories */}
          {skillCategories.filter(c => c.skills).map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">{cat.title}</h3>
              {cat.skills!.map((skill, i) => (
                <ProgressBar key={skill.name} name={skill.name} level={skill.level} delay={catIdx * 0.15 + i * 0.08} />
              ))}
            </motion.div>
          ))}

          {/* Tools with icons */}
          {skillCategories.filter(c => c.icons).map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">{cat.title}</h3>
              <div className="grid grid-cols-4 gap-4">
                {cat.icons!.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <img src={tool.img} alt={tool.name} className="w-10 h-10 group-hover:scale-110 transition-transform" loading="lazy" />
                    <span className="text-xs text-muted-foreground text-center">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tag categories */}
          {skillCategories.filter(c => c.tags).map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 + catIdx * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.tags!.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {tag}
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
