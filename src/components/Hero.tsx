import { motion } from "motion/react";
import { Calendar, Phone, ArrowRight, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-brand-dark overflow-hidden text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Left Content */}
          <div className="lg:w-2/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.1] tracking-tight">
                <span className="text-brand-turquoise">Ваш надежный</span> партнер <br />
                в стоматологии
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6">
                Более 10,000+ довольных пациентов и 15+ экспертов-стоматологов — 
                "Улыбка" это ваш доверенный выбор для качественного и безболезненного лечения.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <button className="bg-brand-tea-green text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg flex items-center gap-2">
                  <Calendar size={20} className="text-white" />
                  Записаться на прием
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Наши услуги
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Working Time */}
          <div className="lg:w-1/3 flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-right flex flex-col items-end"
            >
              <div className="flex items-center gap-2 text-brand-turquoise mb-1">
                <Clock size={16} />
                <p className="text-sm font-bold uppercase tracking-widest">Время работы:</p>
              </div>
              <p className="text-2xl md:text-3xl font-black text-brand-tea-green">9:00 — 21:00</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1629909608135-ca29a002ce9d?auto=format&fit=crop&q=80&w=800" 
              alt="Dental treatment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
              alt="Dental office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" 
              alt="Happy patient" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[100px] border-white rounded-full opacity-20" />
      </div>
    </section>
  );
}
