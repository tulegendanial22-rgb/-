import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Мария С.",
    text: "Лучшая клиника, в которой я когда-либо была! Врачи очень внимательные, все объясняют. Лечение прошло абсолютно безболезненно.",
    rating: 5
  },
  {
    name: "Иван П.",
    text: "Делал имплантацию. Результат превзошел все ожидания. Теперь могу улыбаться без стеснения. Спасибо доктору Волкову!",
    rating: 5
  },
  {
    name: "Ольга К.",
    text: "Привела ребенка на первый осмотр. Доктор Соколова нашла подход сразу, дочка даже не испугалась. Теперь только сюда!",
    rating: 5
  }
];

const cases = [
  {
    title: "Эстетическая реставрация",
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400",
    description: "Исправление формы и цвета передних зубов за 2 визита."
  },
  {
    title: "Имплантация и протезирование",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1629909608135-ca29a002ce9d?auto=format&fit=crop&q=80&w=400",
    description: "Полное восстановление жевательной функции."
  }
];

export default function TestimonialsCases() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Отзывы наших <span className="text-brand-tea-green">пациентов</span></h2>
              <p className="text-brand-dark/60">Мы гордимся тем, что наши пациенты доверяют нам самое ценное — свое здоровье.</p>
            </motion.div>

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-brand-gray relative"
                >
                  <Quote className="absolute top-6 right-8 text-brand-tea-green/20" size={48} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-brand-tea-green text-brand-tea-green" />
                    ))}
                  </div>
                  <p className="text-brand-dark/80 italic mb-4 leading-relaxed">"{t.text}"</p>
                  <p className="font-bold text-brand-dark">— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cases */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Наши <span className="text-brand-tea-green">кейсы</span></h2>
              <p className="text-brand-dark/60">Реальные результаты работы наших специалистов.</p>
            </motion.div>

            <div className="space-y-12">
              {cases.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-brand-dark">{c.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-square group">
                      <img src={c.before} alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">До</div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-square group">
                      <img src={c.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-brand-tea-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase">После</div>
                    </div>
                  </div>
                  <p className="text-brand-dark/60 text-sm">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
