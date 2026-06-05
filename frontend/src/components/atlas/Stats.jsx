import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Clients satisfaits" },
  { value: 6, suffix: "", label: "Services spécialisés" },
  { value: 10, suffix: " ans", label: "D'expérience" },
  { value: 100, suffix: "%", label: "Écologique" },
];

const Counter = ({ to, suffix }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min((t - start) / duration, 1);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section
      className="relative bg-[#0A1128] text-white py-16 md:py-20 overflow-hidden grain"
      data-testid="stats-section"
    >
      <div className="absolute left-0 top-0 w-1/3 h-full stripes opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center md:text-left md:border-l md:border-white/15 md:pl-6 first:md:border-l-0 first:md:pl-0"
            data-testid={`stat-${i}`}
          >
            <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#A3E635] tracking-tight">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/70">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
