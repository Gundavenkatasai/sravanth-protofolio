import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Trophy } from "lucide-react";
import hackathonSmartAudit from "@/assets/hackathon-smartaudit.jpg";
import hackathonAria from "@/assets/hackathon-aria.jpg";

const hackathons = [
  {
    title: "Smart-Audit AI",
    badge: "Battery Smart Hackathon Finalist",
    description: "AI-powered call auditing for Battery Smart that analyzes every call, flags revenue leakage, and triggers faster coaching for support teams.",
    tech: ["React 18", "DistilBERT", "BART-MNLI", "Deepgram", "AWS Amplify"],
    github: "https://github.com/Gundavenkatasai/hacksmart",
    live: "https://main.dtpjkbvb4u68s.amplifyapp.com/",
    image: hackathonSmartAudit,
  },
  {
    title: "ARIA",
    badge: "HackGeekroom Finalist",
    description: "A fully agentic AI chatbot that brings web research, PDF Q&A, GitHub actions, Sheets access, content creation, weather, and utility tools into one chat interface.",
    tech: ["n8n", "Ollama", "Qdrant", "Cohere", "SerpAPI"],
    image: hackathonAria,
  },
];

const HackathonsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hackathons" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Hackathon <span className="gradient-text">Participation</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Two finalist builds focused on production automation, agentic workflows, and real business impact.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={hack.image} alt={hack.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={512} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                  <Trophy size={14} /> {hack.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{hack.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{hack.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {hack.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-mono border border-primary/20">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {hack.github && (
                    <a href={hack.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {hack.live && (
                    <a href={hack.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
