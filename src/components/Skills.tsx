import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";
import { Code, Settings, Smile } from "lucide-react";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="section relative pt-16" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="text-center mb-16">
        <motion.div
          variants={fadeIn()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-base font-medium border border-primary/20 bg-primary/5 text-primary">
            Habilidades
          </div>
            <h2 className="section-heading">
              Combinando habilidades técnicas e interpessoais para criar soluções web inovadoras e eficientes
            </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Unindo conhecimento técnico, domínio de ferramentas modernas e habilidades interpessoais para entregar soluções completas e inovadoras.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="relative glass-card overflow-hidden"
          variants={slideInLeft()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          whileHover={{
            y: -12,
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="relative p-8 flex flex-col items-center">
            <Code size={32} className="text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Habilidades Técnicas</h3>
            <ul className="text-muted-foreground text-sm space-y-1 text-center">
              <li >Java, SpringBoot</li>
              <li>Python, Django, Flask</li>
              <li>JavaScript, Nextjs, React</li>
              <li>TypeScript, Tailwind CSS</li>
              <li>PostgreSQL, MySQL</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative glass-card overflow-hidden"
          variants={fadeIn(0.2)}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          whileHover={{
            y: -12,
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="relative p-8 flex flex-col items-center">
            <Settings size={32} className="text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Ferramentas</h3>
            <ul className="text-muted-foreground text-sm space-y-1 text-center">
              <li>Git & GitHub</li>
              <li>Docker & Docker Compose</li>
              <li>VS Code, Postman</li>
              <li>Linux, Windows</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative glass-card overflow-hidden"
          variants={slideInRight()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          whileHover={{
            y: -12,
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="relative p-8 flex flex-col items-center">
            <Smile size={32} className="text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Soft Skills</h3>
            <ul className="text-muted-foreground text-sm space-y-1 text-center">
              <li>Comunicação clara</li>
              <li>Trabalho em equipe</li>
              <li>Resolução de problemas</li>
              <li>Proatividade e aprendizado contínuo</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;