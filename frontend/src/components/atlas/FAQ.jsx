import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "Quels sont vos délais pour un devis ?",
    a: "Nous répondons habituellement sous 24 heures ouvrables. Pour les demandes urgentes, appelez directement le 514 476 0700.",
  },
  {
    q: "Apportez-vous votre propre matériel ?",
    a: "Oui, notre équipe arrive avec tout l'équipement et les produits nécessaires — incluant nos produits écologiques certifiés.",
  },
  {
    q: "Êtes-vous assurés ?",
    a: "Absolument. ATLAS et son équipe sont couverts par une assurance responsabilité civile professionnelle.",
  },
  {
    q: "Faites-vous des contrats récurrents ?",
    a: "Oui — hebdomadaire, bi-mensuel, mensuel ou sur appel. On adapte la fréquence à votre besoin réel.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Virement Interac, chèque, espèces et carte de crédit. La facturation est claire et transparente.",
  },
  {
    q: "Travaillez-vous les soirs et fins de semaine ?",
    a: "Oui, sur demande — surtout pour les commerces et bureaux qui préfèrent l'entretien hors heures d'ouverture.",
  },
  {
    q: "Que faire si je ne suis pas satisfait ?",
    a: "Nous revenons sans frais pour corriger. Notre garantie 'Excellence' est non négociable.",
  },
  {
    q: "Utilisez-vous des produits écologiques ?",
    a: "Oui — biodégradables et non toxiques. Mieux pour vous, vos animaux, vos enfants et l'environnement.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative bg-white py-24 md:py-32"
      data-testid="faq-section"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 text-center"
        >
          <span className="divider-tag">FAQ</span>
          <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] leading-[1.02]">
            Questions
            <br />
            <span className="text-[#0A1128]/40">fréquentes.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-slate-200 last:border-b-0"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="font-display font-semibold text-lg md:text-xl text-[#0A1128] pr-4 group-hover:text-[#0A1128]/80 transition-colors">
                    <span className="text-[#A3E635] mr-4 font-mono text-sm">
                      0{i + 1}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#475569] leading-relaxed pb-6 pl-10">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
