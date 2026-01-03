import Hero from "@/app/_components/Hero";
import Benefits from "@/app/_components/Benefits";
import HowItWorks from "@/app/_components/HowItWorks";
import Features from "@/app/_components/Features";
import VideoShowcase from "@/app/_components/VideoShowcase";
import Testimonials from "@/app/_components/Testimonials";
import FAQ from "@/app/_components/FAQ";
import CTA from "@/app/_components/CTA";
import Footer from "@/app/_components/Footer";
import ScrollToTop from "@/app/_components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <Benefits />
      <Features />
      <VideoShowcase />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

