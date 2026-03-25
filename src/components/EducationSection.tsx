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
    description: "Specializing in Computer Science with a focus on Data Science, ML, and Full-Stack Development. Actively participating in hackathons, coding contests, and building real-world projects.",
  },
  {
    icon: BookOpen,
    title: "Intermediate (PCM)",
    institution: "Sri Chitanya Junior College, Vijayawada, AP",
    period: "Apr '22 - Mar '23",
    detail: "Percentage: 93.9%",
    description: "Completed intermediate education with Physics, Chemistry, and Mathematics. Achieved excellent scores with a strong foundation in analytical and quantitative skills.",
  },
  {
    icon: Award,
    title: "SSC",
    institution: "Venkateswara High School, Vatsavai, AP",
    period: "Apr '20 - Mar '21",
    detail: "GPA: 10.0",
    description: "Achieved perfect GPA with distinction in all subjects, demonstrating consistent academic excellence and strong fundamentals.",
  },
];

const experience = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    org: "Oracle",
    period: "2025",
    description: "Successfully earned the Oracle Cloud Infrastructure Data Science Professional certification, gaining hands-on experience in designing and implementing data science solutions on cloud platforms. Developed skills in building, training, and deploying machine learning models, and utilizing data-driven insights to solve real-world business problems.",
  },
  {
    icon: Code,
    title: "Tata Data Visualisation Virtual Experience",
    org: "Tata Consultancy Services (TCS)",
    period: "Aug '25",
    description: "Completed a comprehensive virtual experience program focused on data analysis and visualization techniques. Gained practical knowledge in creating dashboards and reports using tools like Power BI, enabling effective communication of insights.",
  },
  {
    icon: Cloud,
    title: "Google Cloud Program Participant",
    org: "Google Arcade",
    period: "May '25 – Dec '25",
    description: "Completed intensive training on GCP services, cloud architecture, IAM security, and scalable infrastructure design. Implemented and deployed cloud-based solutions on GCP.",
  },
  {
    icon: Code,
    title: "Data Structures and Algorithms",
    org: "Self-Study",
    period: "Jun '25 - Jul '25",
    description: "Built strong foundations in complexity analysis, recursion, and OOP problem solving with arrays, trees, graphs, and dynamic programming.",
  },
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold mb-8 text-primary flex items-center gap-2">
            <GraduationCap size={22} />
            Education
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-8">
              {education.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:pr-[52%]" : "md:pl-[52%]"}`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-5 z-10" />
                    <div className="ml-10 md:ml-0 flex-1 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="text-primary" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h4 className="font-semibold text-sm">{item.title}</h4>
                            <span className="text-xs font-mono text-primary whitespace-nowrap">{item.period}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.institution}</p>
                          <p className="text-sm font-medium text-primary mt-1">{item.detail}</p>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Experience & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-primary flex items-center gap-2">
            <Award size={22} />
            Experience & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-primary">{item.org}</span>
                      <span className="text-xs text-muted-foreground font-mono">• {item.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
