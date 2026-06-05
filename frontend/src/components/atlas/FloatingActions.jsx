import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

const FloatingActions = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
          data-testid="floating-actions"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="float-scroll-top"
            className="h-12 w-12 bg-white text-[#0A1128] border border-slate-200 flex items-center justify-center shadow-lg hover:bg-[#A3E635] hover:border-[#A3E635] transition-all duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <a
            href="https://wa.me/15144760700?text=Bonjour%20Atlas%2C%20j'aimerais%20un%20devis%20de%20nettoyage."
            target="_blank"
            rel="noreferrer"
            data-testid="float-whatsapp"
            className="h-12 w-12 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="tel:+15144760700"
            data-testid="float-phone"
            className="h-12 w-12 bg-[#0A1128] text-[#A3E635] flex items-center justify-center shadow-lg hover:bg-[#A3E635] hover:text-[#0A1128] transition-all duration-300"
            aria-label="Appeler"
          >
            <Phone className="h-5 w-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;
