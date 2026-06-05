import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import AtlasLogo from "./AtlasLogo";

const navLinks = [
  { id: "services", label: "Services" },
  { id: "pourquoi", label: "Pourquoi nous" },
  { id: "processus", label: "Processus" },
  { id: "galerie", label: "Galerie" },
  { id: "zones", label: "Zones desservies" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200"
          : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="focus:outline-none"
          data-testid="header-logo-button"
          aria-label="Aller en haut"
        >
          <AtlasLogo size="md" showTagline />
        </button>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="link-grow text-[13px] font-medium tracking-wide text-[#0A1128] hover:text-[#0A1128]/80 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15144760700"
            data-testid="header-phone-cta"
            className="group inline-flex items-center gap-2 bg-[#0A1128] text-white px-5 py-3 rounded-none hover:bg-[#A3E635] hover:text-[#0A1128] transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-semibold tracking-wide">514 476 0700</span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#0A1128] p-2"
          aria-label="Ouvrir le menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  data-testid={`mobile-nav-link-${l.id}`}
                  className="text-left text-base font-medium text-[#0A1128] py-2 border-b border-slate-100"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="tel:+15144760700"
                data-testid="mobile-phone-cta"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#0A1128] text-white px-5 py-3"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">514 476 0700</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
