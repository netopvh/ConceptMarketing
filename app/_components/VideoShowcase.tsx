"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight, FaHandPointer } from "react-icons/fa";

const videos = [
  {
    id: 1,
    src: "/videos/theme1.mp4",
    title: "Exemplo 1",
    description: "Vídeo profissional criado com IA",
  },
  {
    id: 2,
    src: "/videos/theme2.mp4",
    title: "Exemplo 2",
    description: "Marketing digital automatizado",
  },
  {
    id: 3,
    src: "/videos/theme3.mp4",
    title: "Exemplo 3",
    description: "Conteúdo personalizado e impactante",
  },
  {
    id: 4,
    src: "/videos/theme4.mp4",
    title: "Exemplo 4",
    description: "Resultados incríveis garantidos",
  },
  {
    id: 5,
    src: "/videos/theme5.mp4",
    title: "Exemplo 5",
    description: "Alta qualidade e conversão",
  },
  {
    id: 6,
    src: "/videos/theme6.mp4",
    title: "Exemplo 6",
    description: "Engagement nas redes sociais",
  },
  {
    id: 7,
    src: "/videos/theme7.mp4",
    title: "Exemplo 7",
    description: "Criatividade e inovação",
  },
  {
    id: 8,
    src: "/videos/theme8.mp4",
    title: "Exemplo 8",
    description: "Narrativa envolvente",
  },
  {
    id: 9,
    src: "/videos/theme9.mp4",
    title: "Exemplo 9",
    description: "Visual moderno e atrativo",
  },
  {
    id: 10,
    src: "/videos/theme10.mp4",
    title: "Exemplo 10",
    description: "Perfeito para seu negócio",
  },
  {
    id: 11,
    src: "/videos/theme11.mp4",
    title: "Exemplo 11",
    description: "Impacto máximo com IA sob medida",
  },
];

export default function VideoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="video-showcase" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-400 to-dark-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veja <span className="gradient-text">Exemplos Reais</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Vídeos criados por nossa IA para diversos nichos e objetivos
          </p>

          {/* Indicador de arrasto */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center gap-3 text-primary-500"
          >
            <FaHandPointer className="text-2xl" />
            <span className="text-lg font-medium">
              Arraste para ver mais vídeos
            </span>
            <FaHandPointer className="text-2xl rotate-180" />
          </motion.div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Video Card */}
                    <div className="relative bg-dark-300/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300">
                      {/* Video Player */}
                      <div className="relative aspect-video bg-black">
                        <video
                          controls
                          preload="metadata"
                          className="w-full h-full object-contain"
                          poster={`${video.src}#t=0.1`}
                        >
                          <source src={video.src} type="video/mp4" />
                          Seu navegador não suporta vídeos.
                        </video>

                        {/* Overlay gradient sutil */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500/50 to-transparent pointer-events-none"></div>
                      </div>

                      {/* Video Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-400">{video.description}</p>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollPrev
                  ? "bg-primary-500 hover:bg-primary-600 text-dark-900 hover:scale-110"
                  : "bg-dark-400 text-gray-600 cursor-not-allowed"
              }`}
              aria-label="Vídeo anterior"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-8 h-3 bg-primary-500 rounded-full"
                      : "w-3 h-3 bg-dark-400 hover:bg-primary-500/50 rounded-full"
                  }`}
                  aria-label={`Ir para vídeo ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollNext
                  ? "bg-primary-500 hover:bg-primary-600 text-dark-900 hover:scale-110"
                  : "bg-dark-400 text-gray-600 cursor-not-allowed"
              }`}
              aria-label="Próximo vídeo"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Mobile hint - apenas em telas pequenas */}
          <div className="md:hidden text-center mt-6">
            <p className="text-sm text-gray-500">
              💡 Deslize com o dedo para navegar
            </p>
          </div>
        </motion.div>

        {/* CTA após os vídeos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Gostou do que viu? Crie seu próprio vídeo personalizado!
          </p>
          <a
            href="https://wa.me/5565981132754?text=Olá!%20Vi%20os%20exemplos%20e%20quero%20criar%20meu%20vídeo!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 glow-box"
          >
            <span>Quero Meu Vídeo Agora!</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

