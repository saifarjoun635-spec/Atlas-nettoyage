import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const services = [
  "Nettoyage Résidentiel",
  "Nettoyage Commercial",
  "Nettoyage Après Construction",
  "Entretien de Jardins",
  "Lavage de Vitres",
  "Entretien Général",
  "Autre / Sur mesure",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    address: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir au moins le nom, l'email et le message.");
      return;
    }
    setSubmitting(true);

    const subject = encodeURIComponent(
      `Demande de devis — ${form.service} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite obtenir un devis pour : ${form.service}.\n\n` +
        `Nom : ${form.name}\n` +
        `Email : ${form.email}\n` +
        `Téléphone : ${form.phone || "(non fourni)"}\n` +
        `Adresse / Zone : ${form.address || "(non fournie)"}\n\n` +
        `Détails du besoin :\n${form.message}\n\n` +
        `Envoyé depuis atlas-nettoyage.com`
    );

    window.location.href = `mailto:atlasmultiservicenettoyage@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success(
        "Votre client mail s'ouvre. Si rien ne se passe, écrivez-nous directement."
      );
      setSubmitting(false);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0A1128] text-white py-24 md:py-32 overflow-hidden grain"
      data-testid="contact-section"
    >
      <div className="absolute left-0 top-0 w-72 h-72 bg-[#A3E635]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-10 bottom-20 w-40 h-40 stripes opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="divider-tag on-dark">Contact</span>
          <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
            Parlons de
            <br />
            <span className="text-[#A3E635]">votre projet.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-md">
            Un appel, un courriel, un message — choisissez votre canal préféré.
            Réponse rapide et devis gratuit, sans engagement.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href="tel:+15144760700"
              data-testid="contact-phone-1"
              className="group flex items-start gap-4 hover:translate-x-1 transition-transform"
            >
              <div className="h-11 w-11 border border-[#A3E635] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3E635] transition-colors">
                <Phone className="h-5 w-5 text-[#A3E635] group-hover:text-[#0A1128]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Téléphone
                </div>
                <div className="font-display font-bold text-xl text-white mt-1">
                  514 476 0700
                </div>
              </div>
            </a>

            <a
              href="tel:+15148673656"
              data-testid="contact-phone-2"
              className="group flex items-start gap-4 hover:translate-x-1 transition-transform"
            >
              <div className="h-11 w-11 border border-[#A3E635] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3E635] transition-colors">
                <Phone className="h-5 w-5 text-[#A3E635] group-hover:text-[#0A1128]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Mobile
                </div>
                <div className="font-display font-bold text-xl text-white mt-1">
                  514 867 3656
                </div>
              </div>
            </a>

            <a
              href="mailto:atlasmultiservicenettoyage@gmail.com"
              data-testid="contact-email"
              className="group flex items-start gap-4 hover:translate-x-1 transition-transform"
            >
              <div className="h-11 w-11 border border-[#A3E635] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3E635] transition-colors">
                <Mail className="h-5 w-5 text-[#A3E635] group-hover:text-[#0A1128]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Courriel
                </div>
                <div className="font-display font-bold text-base sm:text-lg text-white mt-1 break-all">
                  atlasmultiservicenettoyage@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 border border-[#A3E635] flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-[#A3E635]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Lieu
                </div>
                <div className="font-display font-bold text-xl text-white mt-1">
                  Montréal, Québec
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                Responsable
              </div>
              <div className="font-display font-bold text-2xl text-white mt-2">
                Jarboui Fouad
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-white text-[#0A1128] p-8 md:p-12"
          data-testid="contact-form"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#0A1128]/60 mb-2">
            Formulaire de devis
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-8">
            Décrivez-nous votre besoin.
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                data-testid="form-name"
                className="w-full border border-slate-300 px-4 py-3 bg-white text-[#0A1128] focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                data-testid="form-email"
                className="w-full border border-slate-300 px-4 py-3 bg-white text-[#0A1128] focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                data-testid="form-phone"
                className="w-full border border-slate-300 px-4 py-3 bg-white text-[#0A1128] focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2">
                Service *
              </label>
              <select
                value={form.service}
                onChange={update("service")}
                data-testid="form-service"
                className="w-full border border-slate-300 px-4 py-3 bg-white text-[#0A1128] focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition"
              >
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2">
                Adresse / Zone
              </label>
              <input
                type="text"
                value={form.address}
                onChange={update("address")}
                placeholder="Quartier, ville"
                data-testid="form-address"
                className="w-full border border-slate-300 px-4 py-3 bg-white text-[#0A1128] focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest font-semibold mb-2">
                Message *
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={update("message")}
                placeholder="Décrivez la surface, la fréquence souhaitée, vos besoins spécifiques…"
                data-testid="form-message"
                className="w-full border border-slate-300 px-4 py-3 bg-white text-[#0A1128] focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={submitting}
              data-testid="form-submit"
              className="group inline-flex items-center justify-center gap-3 bg-[#0A1128] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#A3E635] hover:text-[#0A1128] transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? "Envoi…" : "Envoyer la demande"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://wa.me/15144760700?text=Bonjour%20Atlas%2C%20j'aimerais%20un%20devis%20de%20nettoyage."
              target="_blank"
              rel="noreferrer"
              data-testid="form-whatsapp"
              className="inline-flex items-center justify-center gap-3 border border-[#0A1128] text-[#0A1128] px-8 py-4 font-semibold tracking-wide hover:bg-[#0A1128] hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp direct
            </a>
          </div>

          <p className="mt-4 text-xs text-[#475569]">
            En cliquant, votre messagerie ouvre un courriel pré-rempli vers
            atlasmultiservicenettoyage@gmail.com. Aucune donnée n'est stockée sur
            ce site.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
