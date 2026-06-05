import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Sparkles, RefreshCw } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Phone,
    title: "Prise de contact",
    desc: "Appelez ou écrivez-nous. On discute de vos besoins, sans engagement.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Évaluation & devis",
    desc: "Estimation détaillée et transparente, adaptée à votre espace et fréquence.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Intervention",
    desc: "Notre équipe arrive équipée. Travail soigné, du sol au plafond.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Suivi & ajustement",
    desc: "Retour qualité, ajustements, et programme d'entretien si vous le souhaitez.",
  },
];

const Process = () => {
  return (
    <section
      id="processus"
      className="relative bg-[#FAFAFA] py-24 md:py-32"
      data-testid="process-section"
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <span className="divider-tag">Notre processus</span>
          <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] leading-[1.02]">
            Simple. Transparent.
            <br />
            <span className="text-[#0A1128]/40">En quatre étapes.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-[#0A1128]">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative bg-white p-8 md:p-10 min-h-[300px] flex flex-col justify-between hover:bg-[#0A1128] transition-colors duration-500"
                data-testid={`process-step-${i}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display font-black text-5xl md:text-6xl text-[#A3E635] group-hover:text-[#A3E635] transition-colors">
                    {s.n}
                  </span>
                  <Icon className="h-6 w-6 text-[#0A1128] group-hover:text-[#A3E635] transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight text-[#0A1128] group-hover:text-white transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#475569] group-hover:text-white/70 transition-colors leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
