# 🎯 Exemplos Avançados de Código

## 📊 Analytics e Tracking

### Google Analytics 4 com Event Tracking

```typescript
// app/_components/Analytics.tsx
"use client";

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Hook para rastrear eventos
export function useAnalytics() {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  return { trackEvent };
}

// Uso nos componentes
const { trackEvent } = useAnalytics();

<a
  href={whatsappLink}
  onClick={() => trackEvent('whatsapp_click', {
    location: 'hero',
    button: 'primary_cta'
  })}
>
  Falar no WhatsApp
</a>
```

### Facebook Pixel

```typescript
// app/_components/FacebookPixel.tsx
"use client";

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}

// Rastrear conversões
const trackConversion = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};
```

## 🎨 Componentes Avançados

### Video Player Modal

```typescript
// app/_components/VideoModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevenir scroll quando modal aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes className="text-white text-xl" />
            </button>
            
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Uso
const [showVideo, setShowVideo] = useState(false);

<button onClick={() => setShowVideo(true)}>
  Ver Demonstração
</button>

<VideoModal
  isOpen={showVideo}
  onClose={() => setShowVideo(false)}
  videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
/>
```

### Exit Intent Popup

```typescript
// app/_components/ExitIntentPopup.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaGift } from "react-icons/fa";

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Só ativa se mouse sair pelo topo e ainda não mostrou
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setShowPopup(false)}
      >
        <motion.div
          initial={{ scale: 0.8, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: -50 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-dark-300 border-2 border-primary-500 rounded-3xl p-8 md:p-12 max-w-2xl w-full"
        >
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-white rounded-full flex items-center justify-center transition-all"
          >
            <FaTimes />
          </button>

          <div className="text-center">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-6"
            >
              <FaGift className="inline text-primary-500" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Espere! <span className="gradient-text">Oferta Especial</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8">
              Fale conosco agora e ganhe <strong className="text-primary-500">15% OFF</strong> no seu primeiro vídeo!
            </p>

            <a
              href="https://wa.me/5565981132754?text=Olá!%20Vi%20a%20oferta%20especial%20de%2015%25%20OFF!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowPopup(false)}
              className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold text-xl px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 glow-box"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Quero Meu Desconto!</span>
            </a>

            <p className="text-sm text-gray-500 mt-6">
              Válido apenas para novos clientes
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
```

### Countdown Timer

```typescript
// app/_components/CountdownTimer.tsx
"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-4 min-w-[80px]">
            <div className="text-4xl font-bold text-primary-500">
              {String(value).padStart(2, '0')}
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-2 capitalize">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

// Uso
<CountdownTimer targetDate={new Date('2026-02-01')} />
```

### Contact Form com Validação

```typescript
// app/_components/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaExclamationCircle } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    const phoneRegex = /^\d{10,11}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    try {
      // Aqui você enviaria para sua API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Redirecionar para WhatsApp como fallback
        setTimeout(() => {
          window.open(
            `https://wa.me/5565981132754?text=Olá!%20Meu%20nome%20é%20${formData.name}`,
            '_blank'
          );
        }, 1500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 bg-dark-400 border ${
              errors.name ? 'border-red-500' : 'border-primary-500/30'
            } rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors`}
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
              <FaExclamationCircle /> {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 bg-dark-400 border ${
              errors.email ? 'border-red-500' : 'border-primary-500/30'
            } rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
              <FaExclamationCircle /> {errors.email}
            </p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 bg-dark-400 border ${
              errors.phone ? 'border-red-500' : 'border-primary-500/30'
            } rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors`}
            placeholder="(65) 98113-2754"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
              <FaExclamationCircle /> {errors.phone}
            </p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className={`w-full px-4 py-3 bg-dark-400 border ${
              errors.message ? 'border-red-500' : 'border-primary-500/30'
            } rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors resize-none`}
            placeholder="Conte-nos sobre seu projeto..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
              <FaExclamationCircle /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all ${
            status === 'success'
              ? 'bg-green-600 text-white'
              : status === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-primary-500 hover:bg-primary-600 text-dark-900'
          }`}
        >
          {status === 'loading' && (
            <div className="w-6 h-6 border-3 border-dark-900 border-t-transparent rounded-full animate-spin" />
          )}
          {status === 'success' && <FaCheck />}
          {status === 'error' && <FaExclamationCircle />}
          {status === 'idle' && <FaPaperPlane />}
          
          <span>
            {status === 'loading' && 'Enviando...'}
            {status === 'success' && 'Enviado com Sucesso!'}
            {status === 'error' && 'Erro. Tente Novamente'}
            {status === 'idle' && 'Enviar Mensagem'}
          </span>
        </motion.button>
      </div>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-primary-500"
        >
          Recebemos sua mensagem! Em breve entraremos em contato.
        </motion.p>
      )}
    </form>
  );
}
```

## 🔧 Utilitários

### Local Storage Hook

```typescript
// app/_hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// Uso
const [hasSeenPopup, setHasSeenPopup] = useLocalStorage('hasSeenPopup', false);
```

### Debounce Hook

```typescript
// app/_hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Uso
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
  // Fazer busca com debouncedSearch
}, [debouncedSearch]);
```

Esses exemplos cobrem casos de uso avançados que você pode adicionar conforme necessário! 🚀


