import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Лечение зубов",
    description: "Восстановление разрушенных или поврежденных зубов с помощью естественных, долговечных пломб, которые защищают, укрепляют и идеально сочетаются с вашей улыбкой.",
    price: "от 3 000 ₽"
  },
  {
    id: "02",
    title: "Отбеливание зубов",
    description: "Профессиональное отбеливание для достижения ослепительной белизны без вреда для эмали.",
    price: "от 15 000 ₽"
  },
  {
    id: "03",
    title: "Хирургия",
    description: "Безболезненное удаление зубов любой сложности и другие хирургические манипуляции.",
    price: "от 5 000 ₽"
  },
  {
    id: "04",
    title: "Имплантация",
    description: "Восстановление утраченных зубов с помощью современных имплантатов премиум-класса.",
    price: "от 45 000 ₽"
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="bg-white py-24 text-brand-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-tea-green">
                • НАШИ УСЛУГИ
              </span>
              <h2 className="text-5xl font-bold mb-12 leading-tight">
                Забота о вашей улыбке <br /> в каждой услуге
              </h2>

              <button className="bg-brand-tea-green text-white px-8 py-3 rounded-full font-bold mb-16 hover:opacity-90 transition-colors shadow-lg shadow-brand-tea-green/20">
                Записаться на прием
              </button>

              <div className="space-y-0">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`border-t border-brand-dark/10 py-8 cursor-pointer transition-all ${
                      activeId === service.id ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => setActiveId(service.id)}
                  >
                    <div className="flex items-start gap-8">
                      <span className="text-lg font-medium text-brand-tea-green">({service.id})</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <span className="text-lg font-semibold text-brand-tea-green">{service.price}</span>
                        </div>
                        {activeId === service.id && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="text-brand-dark/70 leading-relaxed max-w-md"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-brand-dark/10" />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000"
                alt="Dental Treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-turquoise rounded-full -z-10 blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
