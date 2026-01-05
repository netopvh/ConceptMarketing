"use client";

import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-600 border-t border-primary-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold gradient-text">Concept</div>
              <div className="text-xs text-gray-400 tracking-widest">
                MARKETING DIGITAL
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando negócios através de vídeos personalizados criados
              com Inteligência Artificial
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5565981132754"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/5565981132754?text=Olá!%20Gostaria%20de%20ver%20alguns%20exemplos%20de%20vídeos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Exemplos
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5565981132754?text=Olá!%20Gostaria%20de%20saber%20sobre%20preços"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://wa.me/5565981132754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaWhatsapp className="text-primary-500" />
                  (65) 98113-2754
                </a>
              </li>
              <li>
                <p className="text-sm">
                  Atendimento: Segunda a Sexta
                  <br />
                  Das 9h às 18h
                </p>
              </li>
              <li className="pt-4">
                <a
                  href="https://wa.me/5565981132754?text=Olá!%20Preciso%20de%20ajuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-300"
                >
                  <FaWhatsapp />
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-500/20 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Concept Marketing Digital. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com 💚 e Inteligência Artificial
          </p>
        </div>
      </div>
    </footer>
  );
}



