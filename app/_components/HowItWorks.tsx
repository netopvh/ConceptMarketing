"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaComments, FaMagic, FaRocket, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaComments,
    title: "Conte Sua Necessidade",
    description:
      "Entre em contato via WhatsApp e descreva o tipo de vídeo que você precisa. Nossa equipe está pronta para ajudar.",
  },
  {
    number: "02",
    icon: FaMagic,
    title: "IA Trabalha Pra Você",
    description:
      "Nossa inteligência artificial processa suas informações e cria um vídeo único e personalizado para seu negócio.",
  },
  {
    number: "03",
    icon: FaCheckCircle,
    title: "Revisão e Ajustes",
    description:
      "Receba o vídeo, avalie e solicite ajustes se necessário. Seu sucesso é nossa prioridade.",
  },
  {
    number: "04",
    icon: FaRocket,
    title: "Receba e Publique",
    description:
      "Vídeo pronto em até 24h! Receba em alta qualidade e comece a impactar sua audiência imediatamente.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-400 to-dark-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="gradient-text">Funciona?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            4 passos simples para transformar sua estratégia de marketing
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Step Number - Left on even, Right on odd for desktop */}
                <div
                  className={`flex-shrink-0 order-1 md:order-${
                    index % 2 === 0 ? "1" : "3"
                  }`}
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center glow-box"
                    >
                      <span className="text-4xl font-bold text-white">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>
                )}

                {/* Icon */}
                <div className="flex-shrink-0 order-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-dark-300 border-2 border-primary-500 rounded-xl flex items-center justify-center"
                  >
                    <step.icon className="text-4xl text-primary-500" />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 order-3 md:order-${
                    index % 2 === 0 ? "3" : "1"
                  } text-center md:text-${index % 2 === 0 ? "left" : "right"}`}
                >
                  <div className="bg-dark-300/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5565981132754?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vídeos%20personalizados%20com%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 glow-box"
          >
            <FaComments className="text-2xl" />
            <span>Começar Agora</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}



