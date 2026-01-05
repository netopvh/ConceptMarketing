"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary-500 hover:bg-primary-600 text-dark-900 rounded-full flex items-center justify-center shadow-lg glow-box transition-all duration-300 hover:scale-110"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowUp className="text-xl" />
    </motion.button>
  );
}



