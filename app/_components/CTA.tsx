"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaRocket } from "react-icons/fa";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const whatsappLink =
    "https://wa.me/5565981132754?text=Olá!%20Quero%20criar%20meu%20vídeo%20personalizado%20com%20IA%20agora!";

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dark-500">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-dark-300 to-dark-400 border-2 border-primary-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Pronto Para Transformar Seu{" "}
                  <span className="gradient-text glow-text">Marketing?</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Junte-se a centenas de empresas que já aumentaram suas conversões
                com vídeos criados por IA
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 glow-box"
                >
                  <FaWhatsapp className="text-3xl" />
                  <span>Criar Meu Vídeo Agora</span>
                  <FaRocket className="text-2xl group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Entrega em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Revisões Incluídas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Satisfação Garantida</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



