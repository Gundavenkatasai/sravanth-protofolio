import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    { icon: Mail, label: "Email", value: "sravanth6115@gmail.com", href: "mailto:sravanth6115@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7973556498", href: "tel:+917973556498" },
    { icon: Github, label: "GitHub", value: "saisravanth6115", href: "https://github.com/saisravanth6115" },
    { icon: Linkedin, label: "LinkedIn", value: "saisravanth-pentela", href: "https://www.linkedin.com/in/saisravanth-pentela" },
    { icon: MapPin, label: "Location", value: "Andhra Pradesh, India", href: "https://maps.app.goo.gl/AP" },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing new opportunities, exciting projects, or just having a chat about technology and data science!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-xl border border-border bg-card flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Send className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Let's Build Something Together</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Feel free to reach out for collaboration, opportunities, or just a friendly conversation!
            </p>
            <a
              href="mailto:sravanth6115@gmail.com"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
