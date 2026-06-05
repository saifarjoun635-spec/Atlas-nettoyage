import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, Shield } from "lucide-react";

const HERO_BG =
  "https://images.pexels.com/photos/6196223/pexels-photo-6196223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0A1128] text-white grain"
      data-testid="hero-section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Équipe de nettoyage professionnel Atlas Montréal"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#0A1128]/85 to-[#0A1128]/60" />
        <div className="absolute inset-0 spotlight" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

      {/* Decorative diagonal accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
        <div className="absolute top-1/4 right-12 w-24 h-24 stripes opacity-40" />
        <div className="absolute bottom-1/3 right-1/2 w-16 h-16 stripes opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 lg:pt-44 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="divider-tag on-dark">Montréal · Québec</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl"
          data-testid="hero-title"
        >
          Propreté.
          <br />
          Confiance.
          <br />
          <span className="text-[#A3E635]">Excellence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed font-light"
          data-testid="hero-subtitle"
        >
          ATLAS Nettoyage Multiservice — Un service professionnel, fiable et sur
          lequel vous pouvez compter. Résidentiel, commercial, après-construction,
          jardins, vitres et entretien général. Écologique et responsable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            data-testid="hero-cta-quote"
            className="group inline-flex items-center gap-3 bg-[#A3E635] text-[#0A1128] px-7 py-4 font-semibold tracking-wide hover:bg-white transition-all duration-300"
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            data-testid="hero-cta-services"
            className="inline-flex items-center gap-3 border border-white/40 text-white px-7 py-4 font-semibold tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Voir nos services
          </button>
        </motion.div>

        {/* Mini trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
        >
          {[
            { icon: Leaf, title: "Écologique", desc: "Produits respectueux" },
            { icon: Shield, title: "Assurés", desc: "Équipe certifiée" },
            { icon: Sparkles, title: "Sur mesure", desc: "Selon vos besoins" },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-3 border-l-2 border-[#A3E635] pl-4"
                data-testid={`hero-badge-${i}`}
              >
                <Icon className="h-5 w-5 text-[#A3E635] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white text-sm">{b.title}</div>
                  <div className="text-xs text-white/60">{b.desc}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#A3E635] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
