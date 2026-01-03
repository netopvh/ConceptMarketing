"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPlay, FaRocket } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const whatsappLink = "https://wa.me/5565981132754?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vídeos%20personalizados%20com%20IA";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
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
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
            >
              {/* Container com efeito glow e sombra para destacar a logo */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glow-box">
                {/* Gradiente de fundo sutil para integração */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-3xl"></div>
                
                {/* Logo */}
                <Image
                  src="/images/logo.png"
                  alt="Concept Marketing Digital"
                  width={320}
                  height={320}
                  className="relative z-10 w-full h-full object-contain p-2"
                  priority
                />
                
                {/* Borda decorativa */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary-500/30"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Vídeos Personalizados com{" "}
            <span className="gradient-text glow-text">
              Inteligência Artificial
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transforme seu marketing digital com vídeos únicos e impactantes
            criados por IA. Aumente suas conversões em até{" "}
            <span className="text-primary-500 font-bold">300%</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 glow-box"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Criar Meu Vídeo Agora</span>
              <FaRocket className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => {
                document.getElementById("video-showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <FaPlay className="text-lg" />
              <span>Veja Exemplos Reais</span>
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">500+</div>
              <div className="text-sm">Vídeos Criados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">98%</div>
              <div className="text-sm">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">24h</div>
              <div className="text-sm">Entrega Rápida</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-primary-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

