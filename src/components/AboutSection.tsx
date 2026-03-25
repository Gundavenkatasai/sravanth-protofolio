import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Phone, User, Rocket, GraduationCap, Target } from "lucide-react";

const aboutCards = [
  {
    icon: User,
    title: "Who I Am",
    desc: "I am Sravanth, an aspiring Data Analyst, Business Analyst, and AI Web Developer with a strong academic background in Computer Science. I am passionate about leveraging data and technology to solve real-world problems and support data-driven decision-making.",
  },
  {
    icon: Rocket,
    title: "My Expertise",
    desc: "I have hands-on experience in data analysis, visualization, and web development. I work with tools such as Power BI, Tableau, and Excel to extract insights from data. Additionally, I build responsive and scalable web applications using modern technologies.",
  },
  {
    icon: GraduationCap,
    title: "My Journey",
    desc: "Currently pursuing a B.Tech in Computer Science Engineering, I am specializing in Data Science and AI Web Development. I actively work on projects that enhance my analytical thinking and technical skills.",
  },
  {
    icon: Target,
    title: "My Mission",
    desc: "My objective is to develop innovative, data-driven solutions that address business challenges and improve operational efficiency. I aim to contribute effectively to organizations by combining analytics with technology.",
  },
];

const contactLinks = [
  { icon: Mail, label: "sravanth6115@gmail.com", href: "mailto:sravanth6115@gmail.com" },
  { icon: Phone, label: "+91 7973556498", href: "tel:+917973556498" },
  { icon: Linkedin, label: "saisravanth-pentela", href: "https://www.linkedin.com/in/saisravanth-pentela" },
  { icon: Github, label: "saisravanth6115", href: "https://github.com/saisravanth6115" },
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
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Name & contact info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 p-6 rounded-xl border border-border bg-card"
        >
          <h3 className="text-xl font-bold text-center mb-4">
            Sai Sravanth <span className="text-primary">Pentela</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <c.icon size={16} className="text-primary" />
                {c.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
