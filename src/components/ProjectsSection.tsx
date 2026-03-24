import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Used Car Price Prediction",
    description: "ML regression model using 4,340 records to predict vehicle selling prices with Random Forest, evaluated using R², MAE, and RMSE.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/saisravanth6115/predictive-analysis",
    period: "Jun '25 - Dec '26",
  },
  {
    title: "LPU Live - Real-Time Chat",
    description: "Secure messaging platform with JWT auth, WebSocket bidirectional communication, live presence tracking, and multi-device session sync.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC"],
    github: "https://github.com/saisravanth6115/lpulive",
    live: "https://lpulivetimepass.vercel.app/",
    period: "Aug '25 - Nov '25",
  },
  {
    title: "Process Monitoring Dashboard",
    description: "Desktop app monitoring CPU, RAM, disk, network usage in real time with graphical visualization and high-resource process identification.",
    tech: ["Python", "Psutil", "Tkinter", "Matplotlib"],
    github: "https://github.com/saisravanth6115/Real-time-process-monitoring-dashboard",
    period: "May '25 - Aug '25",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">03. Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
            >
              {/* Period */}
              <span className="text-xs font-mono text-primary mb-3">{project.period}</span>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
