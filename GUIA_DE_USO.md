# 📘 Guia de Uso - Landing Page VideosIA

## 🚀 Início Rápido

### 1. Instalação
```bash
cd "/home/angelo/Área de trabalho/Projects/Web/Landings/VideosIA"
npm install
```

### 2. Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 3. Build para Produção
```bash
npm run build
npm start
```

## 🎨 Personalização

### Alterar Número do WhatsApp

Busque e substitua em todos os arquivos:
- **Número atual**: `5565981132754`
- **Formato**: `55` (país) + `65` (DDD) + `981132754` (número)

Arquivos que contêm o número:
- `app/_components/Hero.tsx`
- `app/_components/HowItWorks.tsx`
- `app/_components/FAQ.tsx`
- `app/_components/CTA.tsx`
- `app/_components/Footer.tsx`

### Alterar Conteúdo

#### Benefícios (`app/_components/Benefits.tsx`)
Edite o array `benefits`:
```typescript
const benefits = [
  {
    icon: FaChartLine,
    title: "Seu Título",
    description: "Sua descrição",
  },
  // ... adicione mais
];
```

#### Recursos (`app/_components/Features.tsx`)
Edite o array `features`:
```typescript
const features = [
  {
    icon: FaBrain,
    title: "Seu Recurso",
    description: "Descrição do recurso",
    color: "from-primary-400 to-primary-600",
  },
  // ... adicione mais
];
```

#### Depoimentos (`app/_components/Testimonials.tsx`)
Edite o array `testimonials`:
```typescript
const testimonials = [
  {
    name: "Nome do Cliente",
    role: "Cargo - Empresa",
    image: "👤", // Emoji ou URL de imagem
    rating: 5,
    text: "Depoimento aqui...",
  },
  // ... adicione mais
];
```

#### FAQ (`app/_components/FAQ.tsx`)
Edite o array `faqs`:
```typescript
const faqs = [
  {
    question: "Sua pergunta?",
    answer: "Sua resposta detalhada...",
  },
  // ... adicione mais
];
```

### Alterar Cores

Edite `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#00e600', // Cor principal
    600: '#00b300', // Hover
    // ... outros tons
  },
}
```

### Alterar Logo

1. Substitua o arquivo `public/logo.svg`
2. Ou adicione `public/logo.png` e atualize `Hero.tsx`:
```typescript
<Image
  src="/logo.png"
  alt="Concept Marketing Digital"
  width={256}
  height={256}
/>
```

### Alterar Metadados SEO

Edite `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Seu Título",
  description: "Sua descrição",
  keywords: "suas, palavras, chave",
};
```

## 📊 Analytics e Tracking

### Adicionar Google Analytics

1. Crie arquivo `app/_components/Analytics.tsx`:
```typescript
"use client";

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
```

2. Adicione em `app/layout.tsx`:
```typescript
import Analytics from "@/app/_components/Analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Rastrear Cliques no WhatsApp

Adicione aos links do WhatsApp:
```typescript
onClick={() => {
  // Google Analytics
  gtag?.('event', 'whatsapp_click', {
    'event_category': 'engagement',
    'event_label': 'hero_cta'
  });
  
  // Facebook Pixel
  fbq?.('track', 'Contact');
}}
```

## 🎯 Otimizações de Conversão

### A/B Testing de Headlines

Teste diferentes variações na Hero:
```typescript
const headlines = [
  "Vídeos Personalizados com Inteligência Artificial",
  "Crie Vídeos Profissionais em Minutos com IA",
  "Automatize Sua Produção de Vídeos com IA",
];

const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
```

### Adicionar Senso de Urgência

No CTA, adicione countdown ou oferta limitada:
```typescript
<p className="text-primary-500 font-bold">
  ⚡ Promoção válida até 31/01/2026
</p>
```

### Pop-up de Saída

Crie `app/_components/ExitIntent.tsx`:
```typescript
"use client";

import { useEffect, useState } from 'react';

export default function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      {/* Conteúdo do popup */}
    </div>
  );
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie conta em https://vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático!

```bash
# Ou via CLI
npm i -g vercel
vercel
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`

### Docker

Crie `Dockerfile`:
```dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build e run:
```bash
docker build -t landing-videosια .
docker run -p 3000:3000 landing-videosια
```

## 🔒 Variáveis de Ambiente

Crie `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5565981132754
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL=XXXXXXXXXX
```

Use no código:
```typescript
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
```

## 📱 PWA (Progressive Web App)

### Adicionar Manifest

Crie `public/manifest.json`:
```json
{
  "name": "Concept Marketing Digital",
  "short_name": "Concept",
  "description": "Vídeos Personalizados com IA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#070b07",
  "theme_color": "#00e600",
  "icons": [
    {
      "src": "/logo.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

Adicione em `app/layout.tsx`:
```typescript
<head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#00e600" />
</head>
```

## 🐛 Troubleshooting

### Erro: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animações não funcionam
- Verifique se Framer Motion está instalado
- Certifique-se que componente tem `"use client"`

### Estilos não aplicam
```bash
npm run dev
# Limpe cache do navegador (Ctrl+Shift+R)
```

### Build falha
```bash
npm run build -- --debug
# Verifique erros de TypeScript
npx tsc --noEmit
```

## 📈 Melhorias Futuras

### Adicionar Blog
1. Crie `app/blog/page.tsx`
2. Use MDX para conteúdo
3. Melhora SEO

### Adicionar Formulário
```typescript
// app/_components/ContactForm.tsx
"use client";

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Enviar para API ou email
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos do formulário */}
    </form>
  );
}
```

### Adicionar Chat ao Vivo
- Integrar Tawk.to
- Integrar Crisp
- Integrar Intercom

### Galeria de Vídeos
```typescript
// app/_components/VideoGallery.tsx
"use client";

const videos = [
  { id: 1, url: "https://youtube.com/...", thumb: "..." },
  // ...
];

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {videos.map(video => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}
```

## 💡 Dicas Profissionais

1. **Performance**
   - Use `next/image` sempre
   - Lazy load componentes pesados
   - Minimize JavaScript

2. **SEO**
   - Títulos descritivos (H1, H2, H3)
   - Meta descriptions únicas
   - Alt text em imagens
   - URLs amigáveis

3. **Conversão**
   - CTA acima da dobra
   - Contraste forte nos botões
   - Formulários curtos
   - Prova social visível

4. **Mobile**
   - Teste em dispositivos reais
   - Botões grandes (min 44px)
   - Texto legível (min 16px)
   - Loading rápido (< 3s)

## 🆘 Suporte

Para dúvidas sobre o código:
1. Revise a documentação
2. Verifique logs do console
3. Use debugger do navegador
4. Consulte docs oficiais:
   - Next.js: https://nextjs.org/docs
   - Framer Motion: https://www.framer.com/motion
   - Tailwind: https://tailwindcss.com/docs

## ✅ Checklist de Launch

Antes de colocar no ar:

- [ ] Testar todos os CTAs do WhatsApp
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar em diferentes navegadores
- [ ] Verificar velocidade (Google PageSpeed)
- [ ] Configurar Analytics
- [ ] Adicionar Facebook Pixel
- [ ] Testar formulários (se houver)
- [ ] Verificar meta tags SEO
- [ ] Adicionar sitemap.xml
- [ ] Configurar robots.txt
- [ ] Testar em 4G/3G
- [ ] Verificar acessibilidade
- [ ] Revisar todos os textos
- [ ] Otimizar imagens
- [ ] Configurar domínio customizado
- [ ] Configurar SSL/HTTPS
- [ ] Fazer backup do código

## 🎉 Conclusão

Sua landing page está pronta para converter! Lembre-se de:
- Monitorar métricas constantemente
- Fazer testes A/B
- Ouvir feedback dos usuários
- Iterar e melhorar continuamente

Boa sorte com suas vendas! 🚀💚




