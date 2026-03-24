import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "Developer",
    desc: "Building full-stack applications with React, Node.js, and modern web technologies.",
  },
  {
    icon: Database,
    title: "Data Enthusiast",
    desc: "Skilled in data analysis, visualization, and extracting actionable insights from complex datasets.",
  },
  {
    icon: Brain,
    title: "ML Practitioner",
    desc: "Building predictive models using Scikit-learn, with hands-on experience in regression and classification.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "100+ LeetCode problems solved with a focus on algorithmic optimization and DSA.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">01. About</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
