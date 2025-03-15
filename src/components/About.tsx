
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import { Code, Database, Server } from 'lucide-react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const skills = [
    { icon: <Server className="h-5 w-5" />, text: "APIs RESTful" },
    { icon: <Database className="h-5 w-5" />, text: "Banco de Dados" },
    { icon: <Code className="h-5 w-5" />, text: "Microsserviços" },
    { icon: <Server className="h-5 w-5" />, text: "Java / Spring" },
    { icon: <Database className="h-5 w-5" />, text: "Node.js" },
    { icon: <Code className="h-5 w-5" />, text: "Python" },
    { icon: <Server className="h-5 w-5" />, text: "Docker" },
    { icon: <Database className="h-5 w-5" />, text: "PostgreSQL" },
    { icon: <Code className="h-5 w-5" />, text: "MongoDB" },
  ];

  return (
    <section id="about" className="section relative pt-16" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
        <motion.div 
          className="lg:pr-12"
          variants={slideInLeft()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-sm font-medium border border-primary/20 bg-primary/5 text-primary">
            Sobre Mim
          </div>
          
          <h2 className="section-heading">Criando a infraestrutura que sustenta aplicações modernas</h2>
          
          <p className="text-muted-foreground mb-6">
            Minha jornada na programação começou com a curiosidade sobre como os sistemas funcionam por trás das interfaces. Essa curiosidade me levou a me especializar no desenvolvimento back-end, onde posso criar soluções robustas que sustentam aplicações de grande escala.
          </p>
          
          <p className="text-muted-foreground mb-8">
            Atualmente, estou focado em arquiteturas de microsserviços, APIs REST e GraphQL, além de estar sempre estudando novas tecnologias como Kubernetes, mensageria com Kafka e arquiteturas serverless para expandir minhas habilidades e entregar soluções cada vez mais modernas e eficientes.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white shadow-subtle hover:shadow-md px-3 py-1.5 rounded-full text-sm transition-all duration-300 ease-in-out hover:bg-primary/5 hover:-translate-y-1"
                variants={fadeIn(0.1 * index)}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                <span className="text-primary mr-1.5">{skill.icon}</span>
                <span>{skill.text}</span>
              </motion.div>
            ))}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Busco oportunidades como:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <span>Desenvolvedor Back-End Sênior</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <span>Arquiteto de Soluções</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <span>Especialista em Microsserviços</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={slideInRight()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg blur-3xl opacity-20"></div>
          <div className="relative glass-card overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-blue-400/50"></div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-col space-y-8">
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mr-4">
                    <Server size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Desenvolvimento Back-End</h3>
                    <p className="text-muted-foreground text-sm">
                      Especializado em criar APIs e serviços altamente performáticos e escaláveis usando Java, Node.js e Python.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mr-4">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bancos de Dados</h3>
                    <p className="text-muted-foreground text-sm">
                      Experiência com modelagem e otimização de bancos relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mr-4">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Arquitetura de Software</h3>
                    <p className="text-muted-foreground text-sm">
                      Desenho e implementação de arquiteturas escaláveis, desde monolitos até microsserviços e sistemas distribuídos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
