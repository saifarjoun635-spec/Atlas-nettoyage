import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Award, Clock, Users, Heart } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Écologique & responsable",
    desc: "Produits biodégradables et méthodes respectueuses pour votre santé et la planète.",
  },
  {
    icon: ShieldCheck,
    title: "Équipe assurée",
    desc: "Personnel formé, fiable, vérifié et couvert. Vous nous confiez vos espaces en toute sérénité.",
  },
  {
    icon: Award,
    title: "Excellence garantie",
    desc: "Standards rigoureux à chaque visite. Si ce n'est pas parfait, on recommence.",
  },
  {
    icon: Clock,
    title: "Ponctualité",
    desc: "On arrive à l'heure, on respecte les délais, on confirme nos rendez-vous.",
  },
  {
    icon: Users,
    title: "Sur mesure",
    desc: "Un forfait pensé pour vous : fréquence, services, budget. Tout est ajustable.",
  },
  {
    icon: Heart,
    title: "Service local",
    desc: "Entreprise montréalaise. Disponibles, à l'écoute, et fiers de notre communauté.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="pourquoi"
      className="relative bg-[#0A1128] text-white py-24 md:py-32 overflow-hidden grain"
      data-testid="why-section"
    >
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-[#A3E635]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-20 w-24 h-24 stripes opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 max-w-4xl"
        >
          <span className="divider-tag on-dark">Pourquoi ATLAS</span>
          <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
            Le ménage, c'est un détail.
            <br />
            <span className="text-[#A3E635]">La confiance, c'est tout.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 font-light leading-relaxed">
            Plus qu'un service de nettoyage : un partenaire qui prend soin de vos
            lieux comme s'ils étaient les nôtres.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative bg-[#0A1128] p-8 md:p-10 hover:bg-[#050a1c] transition-colors duration-500"
                data-testid={`reason-${i}`}
              >
                <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-6">
                  0{i + 1}
                </div>
                <Icon className="h-9 w-9 text-[#A3E635] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{r.desc}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A3E635] group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
