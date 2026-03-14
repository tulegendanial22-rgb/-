import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Dentists from "./components/Dentists";
import TestimonialsCases from "./components/TestimonialsCases";
import CTA from "./components/CTA";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-tea-green selection:text-brand-dark">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-tea-green z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-brand-gray py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}>
              Улыбка<span className="text-brand-tea-green">.</span>
            </span>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${
            isScrolled ? "text-brand-dark/70" : "text-white/80"
          }`}>
            <a href="#services" className="hover:text-brand-tea-green transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-brand-tea-green transition-colors">Преимущества</a>
            <a href="#dentists" className="hover:text-brand-tea-green transition-colors">Врачи</a>
            <a href="#cases" className="hover:text-brand-tea-green transition-colors">Кейсы</a>
          </div>

          <button className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
            isScrolled 
              ? "bg-brand-dark text-white hover:bg-brand-dark/90" 
              : "bg-white text-brand-dark hover:bg-white/90"
          }`}>
            Записаться
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="advantages">
          <Advantages />
        </div>
        <div id="dentists">
          <Dentists />
        </div>
        <div id="cases">
          <TestimonialsCases />
        </div>
        <CTA />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <span className="text-lg font-bold">Улыбка<span className="text-brand-tea-green">.</span></span>
            </div>
            
            <div className="text-sm text-white/50">
              © 2026 Стоматология "Улыбка". Все права защищены.
            </div>

            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-brand-tea-green transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-brand-tea-green transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
