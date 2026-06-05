import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    title: "Cuisine impeccable",
  },
  {
    url: "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    title: "Bureau professionnel",
  },
  {
    url: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    title: "Désinfection",
  },
  {
    url: "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    title: "Salle de bain",
  },
  {
    url: "https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    title: "Vitres parfaites",
  },
  {
    url: "https://images.unsplash.com/photo-1621272156568-7306716648df?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    title: "Jardin entretenu",
  },
  {
    url: "https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    title: "Planchers brillants",
  },
  {
    url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    title: "Salon résidentiel",
  },
];

const Gallery = () => {
  return (
    <section
      id="galerie"
      className="relative bg-white py-24 md:py-32"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="divider-tag">Galerie</span>
            <h2 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A1128] leading-[1.02] max-w-2xl">
              Le résultat,
              <br />
              <span className="text-[#0A1128]/40">en images.</span>
            </h2>
          </div>
          <p className="text-base text-[#475569] max-w-md">
            Quelques aperçus de nos interventions récentes à Montréal et environs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden bg-[#0A1128] ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#A3E635] mb-1">
                  Atlas
                </div>
                <div className="text-white font-display font-bold text-lg">
                  {img.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
