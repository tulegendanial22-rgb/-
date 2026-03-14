import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-brand-dark">
            Почему выбирают <span className="text-brand-tea-green">нас</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {/* Card 1: Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-brand-dark rounded-[40px] p-8 flex flex-col justify-between text-white relative overflow-hidden"
          >
            <div className="bg-white/20 self-start px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
              Рейтинг
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">4,9</div>
              <p className="text-sm opacity-90">Средняя оценка клиентов</p>
            </div>
          </motion.div>

          {/* Card 2: Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-brand-gray rounded-[40px] p-8 flex flex-col justify-between text-brand-dark relative overflow-hidden"
          >
            <div className="bg-white self-start px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Доверие
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-4 text-brand-tea-green">30 000 +</div>
              <p className="text-sm font-medium leading-tight">пациентов посещают наши клиники каждый год</p>
            </div>
            {/* Decorative shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-turquoise/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Card 3: Warranty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-brand-gray rounded-[40px] p-8 flex flex-col justify-between text-brand-dark relative overflow-hidden"
          >
            <div className="bg-white self-start px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Гарантия
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-brand-tea-green">3 года</div>
              <p className="text-sm font-medium">на пломбы</p>
            </div>
          </motion.div>

          {/* Card 4: Small Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 rounded-[40px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
              alt="Happy Patients"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Row 2 */}
          
          {/* Card 5: CTA Button Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 flex items-end pb-4"
          >
            <button className="w-full bg-brand-tea-green text-white py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-brand-tea-green/20">
              Узнать больше
            </button>
          </motion.div>

          {/* Card 6: Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 rounded-[40px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
              alt="Dentist at work"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Card 7: Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-1 bg-brand-gray rounded-[40px] p-8 flex flex-col justify-between text-brand-dark relative overflow-hidden"
          >
            <div className="bg-white self-start px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Команда
            </div>
            <div className="relative z-10">
              <div className="text-5xl font-bold mb-4 text-brand-dark">50+</div>
              <p className="text-sm font-medium leading-tight">специалистов из 6 клиник в разных городах</p>
            </div>
            
            <div className="absolute bottom-8 right-8 bg-brand-green w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
              <Phone size={24} />
            </div>
            
            {/* Decorative shape */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-turquoise/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
