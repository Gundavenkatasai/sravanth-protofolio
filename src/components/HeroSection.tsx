import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const PROFILE_IMG = "https://drive.google.com/thumbnail?id=1YDzx6oV6A4M2rQdFADRCe1yHrMEmxsRN&sz=w800";
const CV_URL = "https://drive.google.com/uc?export=download&id=1DDlYUs3BNLoQMUVMos0yk73jJVqVryWV";

const marqueeItems = ["Python", "Data Science", "Machine Learning", "AI", "React", "Node.js", "SQL", "Power BI", "Cloud Computing", "Analytics"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Sai Sravanth{" "}
              <span className="gradient-text">Pentela</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              B.Tech CSE Student &{" "}
              <span className="text-primary">Aspiring Data Scientist</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Passionate about building intelligent solutions using Machine Learning, Data Analytics, and Full-Stack Development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all"
              >
                View Projects
              </a>
              <a
                href={CV_URL}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-all"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/saisravanth6115", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saisravanth-pentela", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sravanth6115@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+917973556498", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-glow" />
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={PROFILE_IMG}
                  alt="Sai Sravanth Pentela"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-float" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-border bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-sm text-muted-foreground font-mono">
              {item}
              <span className="ml-6 text-primary/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
