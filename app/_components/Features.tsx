"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBrain,
  FaPalette,
  FaChartBar,
} from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "IA Avançada",
    description: "Tecnologia de ponta que entende seu negócio e cria conteúdo relevante",
    color: "from-primary-400 to-primary-600",
  },
  {
    icon: FaPalette,
    title: "Design Personalizado",
    description: "Vídeos que seguem sua identidade visual e mantêm consistência de marca",
    color: "from-primary-500 to-primary-700",
  },
  {
    icon: FaChartBar,
    title: "Analytics Integrado",
    description: "Acompanhe performance e otimize seus resultados",
    color: "from-primary-400 to-primary-600",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dark-500">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recursos <span className="gradient-text">Poderosos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo que você precisa para criar vídeos incríveis em um só lugar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-dark-300 to-dark-400 border border-primary-500/20 rounded-2xl p-8 h-full overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="text-3xl text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


