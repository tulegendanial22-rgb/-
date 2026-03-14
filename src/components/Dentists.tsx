import { motion } from "motion/react";

const dentists = [
  {
    name: "Д-р Александр Волков",
    role: "Главный врач, имплантолог",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    experience: "15 лет опыта"
  },
  {
    name: "Д-р Елена Морозова",
    role: "Стоматолог-терапевт, эндодонтист",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    experience: "10 лет опыта"
  },
  {
    name: "Д-р Игорь Кузнецов",
    role: "Ортодонт",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    experience: "12 лет опыта"
  },
  {
    name: "Д-р Анна Соколова",
    role: "Детский стоматолог",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=400",
    experience: "8 лет опыта"
  }
];

export default function Dentists() {
  return (
    <section className="py-24 bg-brand-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark mb-4"
          >
            Наши <span className="text-brand-tea-green">специалисты</span>
          </motion.h2>
          <p className="text-brand-dark/60 max-w-xl mx-auto">
            Команда профессионалов, влюбленных в свое дело. Мы постоянно совершенствуемся, чтобы дарить вам здоровые улыбки.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
                    {dentist.experience}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark mb-1">{dentist.name}</h3>
                <p className="text-brand-dark/60 text-sm mb-6">{dentist.role}</p>
                <button className="w-full py-3 rounded-2xl border-2 border-brand-tea-green text-brand-tea-green font-bold hover:bg-brand-tea-green hover:text-white transition-all">
                  Записаться
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
