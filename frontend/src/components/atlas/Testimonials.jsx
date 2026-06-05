import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Propriétaire — Plateau Mont-Royal",
    text: "Service impeccable. L'équipe est ponctuelle, discrète, et le résultat dépasse mes attentes à chaque visite. Je recommande sans hésiter.",
    rating: 5,
  },
  {
    name: "Karim B.",
    role: "Directeur — PME, Ville Saint-Laurent",
    text: "Atlas s'occupe de nos bureaux depuis plus d'un an. Fiabilité totale et flexibilité quand on en a besoin. Un vrai partenaire.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Résidente — Westmount",
    text: "Après ma rénovation, ils ont rendu la maison comme neuve. Aucune trace de poussière, même dans les coins difficiles.",
    rating: 5,
  },
  {
    name: "Antoine P.",
    role: "Gestionnaire d'immeubles",
    text: "Service professionnel et écologique. Mes locataires apprécient et c'est rassurant de travailler avec une équipe assurée.",
    rating: 5,
  },
  {
    name: "Laura D.",
    role: "Propriétaire — Verdun",
    text: "Tarifs justes, communication claire et équipe sympathique. Le ménage de printemps a été parfait.",
    rating: 5,
  },
  {
    name: "Mohamed K.",
    role: "Restaurateur — Ahuntsic",
    text: "Ils s'occupent de mon restaurant trois fois par semaine. Hygiène irréprochable et toujours à l'heure.",
    rating: 5,
  },
];

const TestiCard = ({ t }) => (
  <div
    className="flex-shrink-0 w-[320px] md:w-[420px] bg-white border border-slate-200 p-7 md:p-9 mr-6"
    data-testid={`testimonial-${t.name}`}
  >
    <Quote className="h-7 w-7 text-[#A3E635] mb-5" />
    <p className="text-sm md:text-base text-[#0A1128] leading-relaxed mb-6 font-light">
      "{t.text}"
    </p>
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#A3E635] text-[#A3E635]" />
      ))}
    </div>
    <div className="border-t border-slate-200 pt-4">
      <div className="font-display font-bold text-base text-[#0A1128]">
        {t.name}
      </div>
      <div className="text-xs text-[#475569] mt-1">{t.role}</div>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section
      className="relative bg-[#F5F4EE] py-24 md:py-32 overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <span className="divider-tag">Témoignages</span>
            <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] leading-[1.02]">
              Ce que disent
              <br />
              <span className="text-[#0A1128]/40">nos clients.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[#A3E635] text-[#A3E635]" />
              ))}
            </div>
            <span className="font-display font-bold text-xl text-[#0A1128]">
              4.9/5
            </span>
            <span className="text-sm text-[#475569]">· 500+ clients</span>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee w-max">
          {doubled.map((t, i) => (
            <TestiCard key={i} t={t} />
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F4EE] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F4EE] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
