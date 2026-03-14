import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-brand-tea-green relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-turquoise/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Готовы подарить себе <br /> <span className="text-brand-green">идеальную</span> улыбку?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Запишитесь на консультацию уже сегодня и получите индивидуальный план лечения от наших экспертов.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-brand-tea-green px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-brand-gray transition-all hover:scale-105 shadow-xl">
                <Calendar size={22} />
                Записаться на прием
              </button>
              <button className="text-white font-bold text-lg flex items-center gap-2 group">
                Посмотреть все услуги
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-30" />
    </section>
  );
}
