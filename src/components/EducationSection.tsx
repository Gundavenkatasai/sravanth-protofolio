import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Cloud, Code } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    period: "Aug '23 - Present",
    detail: "CGPA: 7.13",
    description: "Specializing in Computer Science with a focus on Data Science, ML, and Full-Stack Development.",
  },
  {
    icon: BookOpen,
    title: "Intermediate (PCM)",
    institution: "Sri Chitanya Junior College, Vijayawada, AP",
    period: "Apr '22 - Mar '23",
    detail: "Percentage: 93.9%",
  },
  {
    icon: Award,
    title: "SSC",
    institution: "Venkateswara High School, Vatsavai, AP",
    period: "Apr '20 - Mar '21",
    detail: "GPA: 10.0",
  },
];

const experience = [
  {
    icon: Cloud,
    title: "Google Cloud Program Participant",
    org: "Google Arcade",
    period: "May '25 – Dec '25",
    description: "Completed intensive training on GCP services, cloud architecture, IAM security, and scalable infrastructure design.",
  },
  {
    icon: Code,
    title: "Data Structures and Algorithms",
    org: "Self-Study",
    period: "Jun '25 - Jul '25",
    description: "Built strong foundations in complexity analysis, recursion, and OOP problem solving with arrays, trees, graphs, and DP.",
  },
];

const achievements = [
  "Developed a scalable solution during HackSmart, a company-level hackathon by Battery Smart × AWS (Feb '26)",
  "Earned a Python badge on HackerRank for proven problem-solving skills (May '25)",
  "Solved 100+ LeetCode problems with consistent daily practice and strong algorithmic optimization",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">02. Education & Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {[...education.map((e, i) => ({ ...e, type: "edu" as const, idx: i })), ...experience.map((e, i) => ({ ...e, type: "exp" as const, idx: education.length + i }))].map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:pr-[52%]" : "md:pl-[52%]"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-5 z-10" />

                  {/* Card */}
                  <div className="ml-10 md:ml-0 flex-1 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {"icon" in item && <item.icon className="text-primary" size={20} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4 className="font-semibold text-sm">{item.title}</h4>
                          <span className="text-xs font-mono text-primary whitespace-nowrap">{item.period}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {"institution" in item ? item.institution : "org" in item ? item.org : ""}
                        </p>
                        {"detail" in item && item.detail && (
                          <p className="text-sm font-medium text-primary mt-1">{item.detail}</p>
                        )}
                        {"description" in item && item.description && (
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-primary text-center">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <span className="text-primary text-lg mt-0.5">🏆</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{ach}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
