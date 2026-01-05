import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concept Marketing Digital - Vídeos Personalizados com IA",
  description: "Transforme seu marketing com vídeos personalizados criados por Inteligência Artificial. Aumente suas conversões e engajamento com conteúdo único e impactante.",
  keywords: "vídeos IA, marketing digital, vídeos personalizados, inteligência artificial, conversão, engajamento",
  openGraph: {
    title: "Concept Marketing Digital - Vídeos Personalizados com IA",
    description: "Transforme seu marketing com vídeos personalizados criados por Inteligência Artificial",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}



