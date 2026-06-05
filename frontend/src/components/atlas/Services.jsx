import { motion } from "framer-motion";
import { Home, Building2, HardHat, TreePine, Sparkles, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "residentiel",
    title: "Nettoyage Résidentiel",
    short: "Maisons, appartements, condos",
    long: "Entretien régulier ou ponctuel de votre domicile : cuisines, salles de bain, planchers, dépoussiérage, désinfection. Un foyer impeccable, sans effort.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    span: "md:col-span-7",
  },
  {
    id: "commercial",
    title: "Nettoyage Commercial",
    short: "Bureaux, commerces, immeubles",
    long: "Service d'entretien quotidien ou périodique pour bureaux, commerces et immeubles. Image professionnelle assurée.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    span: "md:col-span-5",
  },
  {
    id: "construction",
    title: "Nettoyage Après Construction",
    short: "Chantiers, rénovations, entretien complet",
    long: "Élimination de poussière, débris, résidus de plâtre, traces de peinture. On rend votre chantier prêt à vivre.",
    icon: HardHat,
    image:
      "https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    span: "md:col-span-5",
  },
  {
    id: "jardins",
    title: "Entretien de Jardins",
    short: "Tonte, désherbage, taille, aménagement",
    long: "Embellissement et entretien complet de vos espaces verts, résidentiels ou commerciaux.",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1621272156568-7306716648df?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    span: "md:col-span-7",
  },
  {
    id: "vitres",
    title: "Lavage de Vitres",
    short: "Résidentiel et commercial",
    long: "Vitres intérieures et extérieures, miroirs, cadres. Résultat sans trace, transparence parfaite.",
    icon: Sparkles,
    image:
      "https://images.pexels.com/photos/634007/pexels-photo-634007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    span: "md:col-span-6",
  },
  {
    id: "general",
    title: "Entretien Général",
    short: "Sur mesure selon vos besoins",
    long: "Un besoin spécifique ? Forfait personnalisé : grands ménages, déménagements, locations saisonnières.",
    icon: Wrench,
    image:
      "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    span: "md:col-span-6",
  },
];

const ServiceCard = ({ s, i }) => {
  const Icon = s.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
      className={`group relative overflow-hidden bg-[#0A1128] text-white card-lift ${s.span} col-span-full min-h-[360px] md:min-h-[420px]`}
      data-testid={`service-card-${s.id}`}
    >
      <div className="absolute inset-0">
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/80 to-[#0A1128]/20" />
      </div>

      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="h-12 w-12 border border-[#A3E635] flex items-center justify-center group-hover:bg-[#A3E635] transition-colors duration-300">
            <Icon className="h-6 w-6 text-[#A3E635] group-hover:text-[#0A1128] transition-colors duration-300" />
          </div>
          <ArrowUpRight className="h-6 w-6 text-white/40 group-hover:text-[#A3E635] group-hover:rotate-12 transition-all duration-300" />
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#A3E635] mb-3">
            0{i + 1} / 06
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">
            {s.title}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed max-w-md">{s.long}</p>
          <div className="mt-5 text-xs uppercase tracking-widest text-[#A3E635]/90 font-semibold">
            {s.short}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-[#FAFAFA] py-24 md:py-32"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-6">
            <span className="divider-tag">Nos Services</span>
            <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] leading-[1.02]">
              Six expertises,
              <br />
              <span className="text-[#0A1128]/40">une seule mission&nbsp;:</span>
              <br />
              <span className="relative inline-block">
                votre tranquillité.
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#A3E635] -z-10" />
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-base md:text-lg text-[#475569] leading-relaxed">
              De l'entretien quotidien aux grands chantiers post-construction,
              ATLAS adapte chaque intervention à votre réalité. Une équipe formée,
              des produits écologiques, et le souci du détail.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
