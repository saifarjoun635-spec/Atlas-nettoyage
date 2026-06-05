import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const zones = [
  "Montréal",
  "Laval",
  "Longueuil",
  "Brossard",
  "Westmount",
  "Outremont",
  "Plateau Mont-Royal",
  "Verdun",
  "Ahuntsic",
  "Saint-Laurent",
  "Lasalle",
  "Anjou",
  "Mont-Royal",
  "Côte-des-Neiges",
  "Le Sud-Ouest",
  "Rosemont",
  "Villeray",
  "Hochelaga",
  "Pointe-Claire",
  "Dorval",
];

const Zones = () => {
  return (
    <section
      id="zones"
      className="relative bg-[#0A1128] text-white py-24 md:py-32 overflow-hidden grain"
      data-testid="zones-section"
    >
      <div className="absolute right-10 top-20 w-40 h-40 stripes opacity-10" />
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-[#A3E635]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <span className="divider-tag on-dark">Zones desservies</span>
          <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
            Montréal
            <br />
            <span className="text-[#A3E635]">et environs.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-md">
            ATLAS intervient dans toute la grande région de Montréal. Votre
            secteur n'apparaît pas ? Contactez-nous, on s'arrange.
          </p>
          <a
            href="tel:+15144760700"
            data-testid="zones-call-cta"
            className="mt-8 inline-flex items-center gap-2 text-[#A3E635] font-semibold link-grow"
          >
            <MapPin className="h-4 w-4" />
            Vérifier ma zone — 514 476 0700
          </a>
        </motion.div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/10">
          {zones.map((z, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="bg-[#0A1128] px-4 py-4 text-sm text-white/80 hover:bg-[#A3E635] hover:text-[#0A1128] transition-colors duration-300 cursor-default flex items-center gap-2"
              data-testid={`zone-${i}`}
            >
              <span className="w-1 h-1 bg-[#A3E635] rounded-full" />
              {z}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Zones;
