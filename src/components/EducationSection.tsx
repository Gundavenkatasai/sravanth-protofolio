import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    period: "Aug '23 - Present",
    detail: "CGPA: 7.13",
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

const certifications = [
  { name: "GenAI Powered Data Analytics Job Simulation", org: "Tata", link: "https://www.theforage.com/achievements" },
  { name: "Cloud Computing NPTEL Certification", org: "NPTEL", link: "https://internalapp.nptel.ac.in/B2C/exam_form/candidate_login/candidate_scores.php?courseid=noc25-cs107" },
  { name: "OCI 2025 Data Science Professional", org: "Oracle", link: "https://catalog-education.oracle.com/apex/f?p=1010:26:116554173776615" },
  { name: "API Student Expert", org: "Postman", link: "https://www.postman.com/sravanth6115" },
  { name: "English Grammar Pro (A1–C1)", org: "Udemy", link: "https://www.udemy.com/certificate/UC-7c91b605-fc62-4f5e-89b0-ae50638860f5/" },
];

const training = [
  {
    title: "Google Cloud Program Participant",
    org: "Google Arcade",
    period: "May '25 – Dec '25",
    desc: "Completed intensive training on GCP services, cloud architecture, IAM security, and scalable infrastructure design.",
  },
  {
    title: "Data Structures and Algorithms",
    org: "Self-Study",
    period: "Jun '25 - Jul '25",
    desc: "Built strong foundations in complexity analysis, recursion, and OOP problem solving with arrays, trees, graphs, and DP.",
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
          <p className="text-primary font-mono text-sm mb-2">04. Background</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-primary">Education</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <edu.icon className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold">{edu.title}</h4>
                    <span className="text-xs font-mono text-primary">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm font-medium text-primary mt-1">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-primary">Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {training.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-xl border border-border bg-card"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sm">{t.title}</h4>
                  <span className="text-xs font-mono text-primary whitespace-nowrap ml-2">{t.period}</span>
                </div>
                <p className="text-xs text-primary mb-2">{t.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-primary">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="group p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
              >
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-primary">Achievements</h3>
          <div className="space-y-3">
            {[
              "Developed a scalable solution during HackSmart, a company-level hackathon by Battery Smart × AWS (Feb '26)",
              "Earned a Python badge on HackerRank for proven problem-solving skills (May '25)",
              "Solved 100+ LeetCode problems with consistent daily practice and strong algorithmic optimization",
            ].map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
              >
                <span className="text-primary mt-0.5">▹</span>
                <p className="text-sm text-muted-foreground">{ach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
