import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    { icon: Mail, label: "Email", value: "sravanth6115@gmail.com", href: "mailto:sravanth6115@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7973556498", href: "tel:+917973556498" },
    { icon: Github, label: "GitHub", value: "saisravanth6115", href: "https://github.com/saisravanth6115" },
    { icon: Linkedin, label: "LinkedIn", value: "saisravanth-pentela", href: "https://www.linkedin.com/in/saisravanth-pentela" },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">05. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaboration, opportunities, or just a chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <c.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
