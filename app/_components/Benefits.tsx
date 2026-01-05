"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaChartLine,
  FaClock,
  FaDollarSign,
  FaMagic,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaChartLine,
    title: "Aumente Conversões",
    description: "Vídeos personalizados convertem até 300% mais que conteúdo estático",
  },
  {
    icon: FaClock,
    title: "Economia de Tempo",
    description: "Crie vídeos profissionais em minutos, não em dias ou semanas",
  },
  {
    icon: FaDollarSign,
    title: "Redução de Custos",
    description: "Economize até 80% comparado a produção tradicional de vídeos",
  },
  {
    icon: FaMagic,
    title: "Personalização Total",
    description: "IA adapta cada vídeo para seu público e objetivos específicos",
  },
  {
    icon: FaUsers,
    title: "Maior Engajamento",
    description: "Conteúdo personalizado gera 5x mais engajamento nas redes sociais",
  },
  {
    icon: FaRocket,
    title: "Resultados Rápidos",
    description: "Veja impacto imediato nas suas métricas de marketing",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-400 to-dark-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher{" "}
            <span className="gradient-text">Vídeos com IA?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubra as vantagens que vão revolucionar seu marketing digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-dark-300/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-all duration-300">
                  <benefit.icon className="text-3xl text-primary-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



