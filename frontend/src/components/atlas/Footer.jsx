import { Phone, Mail, MapPin } from "lucide-react";
import AtlasLogo from "./AtlasLogo";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="relative bg-[#050a1c] text-white py-20 md:py-24 border-t border-white/10"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <AtlasLogo variant="light" size="lg" showTagline />
            <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm font-light">
              Propreté · Confiance · Excellence. ATLAS Nettoyage Multiservice —
              entreprise montréalaise dédiée à votre tranquillité.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-[#A3E635]/40 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A3E635]">
                Écologique & responsable
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["services", "Services"],
                ["pourquoi", "Pourquoi nous"],
                ["processus", "Processus"],
                ["galerie", "Galerie"],
                ["faq", "FAQ"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    data-testid={`footer-link-${id}`}
                    className="link-grow text-white/80 hover:text-[#A3E635] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
              Contact direct
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+15144760700"
                  data-testid="footer-phone-1"
                  className="flex items-center gap-3 text-white hover:text-[#A3E635] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#A3E635]" />
                  514 476 0700
                </a>
              </li>
              <li>
                <a
                  href="tel:+15148673656"
                  data-testid="footer-phone-2"
                  className="flex items-center gap-3 text-white hover:text-[#A3E635] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#A3E635]" />
                  514 867 3656
                </a>
              </li>
              <li>
                <a
                  href="mailto:atlasmultiservicenettoyage@gmail.com"
                  data-testid="footer-email"
                  className="flex items-start gap-3 text-white hover:text-[#A3E635] transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-[#A3E635] mt-0.5 flex-shrink-0" />
                  atlasmultiservicenettoyage@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 text-[#A3E635]" />
                Montréal, Québec
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} ATLAS Nettoyage Multiservice. Tous droits réservés.
          </p>
          <p className="text-xs text-white/40">
            Responsable&nbsp;: Jarboui Fouad · Site conçu avec soin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
