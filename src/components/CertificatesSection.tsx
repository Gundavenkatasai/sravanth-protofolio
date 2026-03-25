import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  // 2025
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    org: "Tata",
    year: "2025",
    description: "Completed GenAI-powered data analytics simulation covering advanced analytics techniques and AI-driven insights.",
    link: "https://www.theforage.com/achievements",
    icon: "https://img.icons8.com/color/48/tata-group.png",
  },
  {
    name: "Cloud Computing NPTEL Certification",
    org: "NPTEL",
    year: "2025",
    description: "NPTEL certification covering cloud architecture, virtualization, distributed computing, and modern cloud service deployment.",
    link: "https://internalapp.nptel.ac.in/B2C/exam_form/candidate_login/candidate_scores.php?courseid=noc25-cs107",
    icon: "https://img.icons8.com/color/48/cloud.png",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    org: "Oracle",
    year: "2025",
    description: "Skilled in designing, training, and deploying ML models on Oracle Cloud for real-world business solutions.",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:26:116554173776615",
    icon: "https://img.icons8.com/color/48/000000/oracle-logo.png",
  },
  {
    name: "Postman API Student Expert",
    org: "Postman",
    year: "2025",
    description: "Validated API fundamentals across requests, testing, collections, and collaborative workflows for modern developer teams.",
    link: "https://www.postman.com/sravanth6115",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "English Grammar Pro (A1–C1)",
    org: "Udemy",
    year: "2025",
    description: "Comprehensive English grammar certification from beginner to advanced level covering all aspects of grammar mastery.",
    link: "https://www.udemy.com/certificate/UC-7c91b605-fc62-4f5e-89b0-ae50638860f5/",
    icon: "https://img.icons8.com/color/48/udemy.png",
  },
  {
    name: "Java Programming Certification",
    org: "LPU | iamneo",
    year: "2025",
    description: "Completed an intensive 72-hour Java programming course, gaining strong knowledge in object-oriented concepts, problem-solving, and application development.",
    icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
  },
  {
    name: "Data Structures & Algorithms",
    org: "LPU | iamneo",
    year: "2025",
    description: "Successfully completed a 72-hour course on DSA, focusing on efficient problem-solving techniques using arrays, linked lists, stacks, queues, and algorithms.",
    icon: "https://img.icons8.com/color/48/source-code.png",
  },
  // 2024
  {
    name: "AI Skills Passport",
    org: "EY & Microsoft",
    year: "2024",
    description: "Completed the AI Skills Passport program, gaining foundational knowledge in artificial intelligence, business applications, and emerging technologies.",
    icon: "https://img.icons8.com/color/48/artificial-intelligence.png",
  },
  {
    name: "Object-Oriented Programming",
    org: "LPU | iamneo",
    year: "2024",
    description: "Completed a 72-hour course in OOP, focusing on classes, inheritance, polymorphism, and encapsulation. Built a strong base for writing clean, modular code.",
    icon: "https://img.icons8.com/color/48/object.png",
  },
  // 2023
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    year: "2023",
    description: "Earned the Responsive Web Design Certification, covering HTML, CSS, Flexbox, and responsive layouts. Built multiple projects representing 300+ hours of practical work.",
    icon: "https://img.icons8.com/color/48/html-5.png",
  },
];

const years = ["All", "2025", "2024", "2023"];

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? certificates : certificates.filter(c => c.year === filter);

  return (
    <section id="certificates" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Certificates</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setFilter(y)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === y
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {y}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target={cert.link ? "_blank" : undefined}
              rel={cert.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {cert.icon ? (
                    <img src={cert.icon} alt={cert.org} className="w-8 h-8 object-contain" loading="lazy" />
                  ) : (
                    <Award className="text-primary" size={24} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-primary mt-1">{cert.org}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                {cert.link && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    View Certificate
                    <ExternalLink size={12} />
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
