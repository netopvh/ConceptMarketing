"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO - Loja Virtual Fashion",
    image: "👩‍💼",
    rating: 5,
    text: "Os vídeos com IA transformaram completamente nossa estratégia de marketing. Aumentamos as vendas em 250% no primeiro mês!",
  },
  {
    name: "João Santos",
    role: "Gerente de Marketing - Tech Solutions",
    image: "👨‍💼",
    rating: 5,
    text: "Qualidade profissional com entrega rápida. A personalização é impressionante e nosso engajamento nas redes sociais triplicou!",
  },
  {
    name: "Ana Costa",
    role: "Fundadora - Beauty Care",
    image: "👩‍🦰",
    rating: 5,
    text: "Economizei tempo e dinheiro. Antes gastava milhares com produtora, agora tenho vídeos incríveis por uma fração do custo!",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor - Academia Fitness Pro",
    image: "👨‍🏫",
    rating: 5,
    text: "A IA entendeu perfeitamente nosso público. Os vídeos são tão personalizados que parecem feitos manualmente!",
  },
  {
    name: "Juliana Oliveira",
    role: "Influenciadora Digital",
    image: "👩‍🎤",
    rating: 5,
    text: "Meu conteúdo nunca foi tão profissional. A qualidade dos vídeos me destacou da concorrência!",
  },
  {
    name: "Roberto Lima",
    role: "Proprietário - Restaurante Gourmet",
    image: "👨‍🍳",
    rating: 5,
    text: "Os vídeos atraem clientes como nunca vi. Nossa reserva aumentou 180% em apenas duas semanas!",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative bg-dark-300/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 h-full hover:border-primary-500/50 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-primary-500/20 text-4xl">
                  <FaQuoteLeft />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary-500 text-xl" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-3xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-2xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


