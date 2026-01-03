"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Como funciona a criação de vídeos com IA?",
    answer:
      "Nossa IA analisa suas informações, entende seu público-alvo e objetivos, e cria um vídeo personalizado com roteiro, narração, elementos visuais e música. Todo o processo é automatizado, mas com qualidade profissional.",
  },
  {
    question: "Quanto tempo leva para receber meu vídeo?",
    answer:
      "Na maioria dos casos, você recebe seu vídeo em até 24 horas. Para projetos mais complexos, o prazo pode ser de até 48 horas. Sempre comunicamos o prazo exato no início do projeto.",
  },
  {
    question: "Posso solicitar alterações no vídeo?",
    answer:
      "Sim! Oferecemos até 2 rodadas de revisão sem custo adicional. Queremos garantir que você fique 100% satisfeito com o resultado final.",
  },
  {
    question: "Quais formatos de vídeo vocês entregam?",
    answer:
      "Entregamos vídeos em MP4 (formato universal) e podemos adaptar para diferentes plataformas como Instagram (Stories, Reels, Feed), YouTube, TikTok, LinkedIn e Facebook com as dimensões ideais para cada uma.",
  },
  {
    question: "Os vídeos incluem narração?",
    answer:
      "Sim! Utilizamos vozes de IA ultra realistas em português e outros idiomas. Você também pode fornecer sua própria narração ou optar por vídeos apenas com texto e música.",
  },
  {
    question: "Qual o custo dos vídeos?",
    answer:
      "Os valores variam conforme complexidade, duração e recursos necessários. Entre em contato via WhatsApp para receber um orçamento personalizado para seu projeto. Garantimos o melhor custo-benefício do mercado!",
  },
  {
    question: "Vocês fornecem a música de fundo?",
    answer:
      "Sim! Temos acesso a uma biblioteca com milhares de músicas livres de direitos autorais. Você também pode sugerir o estilo musical que prefere ou fornecer sua própria trilha.",
  },
  {
    question: "Posso usar os vídeos comercialmente?",
    answer:
      "Absolutamente! Todos os vídeos criados são 100% seus e podem ser usados livremente em suas campanhas, redes sociais, site, anúncios e qualquer outro propósito comercial.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-400 to-dark-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-dark-300/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/50 rounded-2xl p-6 text-left transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FaChevronDown className="text-primary-500 text-xl" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-lg leading-relaxed mt-4 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <a
            href="https://wa.me/5565981132754?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20vídeos%20com%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-bold text-lg transition-colors duration-300"
          >
            Entre em contato via WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}


