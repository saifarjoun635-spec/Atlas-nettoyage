import { motion } from "framer-motion";

export const AtlasMark = ({ className = "", color = "#0A1128", accent = "#A3E635" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="ATLAS logo"
  >
    {/* Mountains */}
    <path
      d="M6 46 L22 22 L30 32 L40 18 L58 46 Z"
      fill={color}
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    {/* Snow caps */}
    <path d="M22 22 L26 28 L18 28 Z" fill="#ffffff" />
    <path d="M40 18 L45 26 L35 26 Z" fill="#ffffff" />
    {/* Green wave (eco) */}
    <path
      d="M4 50 Q20 42 32 50 T60 50 L60 54 Q44 60 32 54 T4 54 Z"
      fill={accent}
    />
    {/* Sparkles */}
    <circle cx="14" cy="16" r="1.5" fill={accent} />
    <circle cx="50" cy="14" r="1.2" fill={accent} />
    <circle cx="32" cy="10" r="1" fill={accent} />
  </svg>
);

const AtlasLogo = ({ variant = "dark", showTagline = true, size = "md" }) => {
  const isDark = variant === "light";
  const textColor = isDark ? "text-white" : "text-[#0A1128]";
  const taglineColor = isDark ? "text-[#A3E635]" : "text-[#0A1128]/70";
  const dim = size === "lg" ? "h-12 w-12" : size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const heading = size === "lg" ? "text-3xl md:text-4xl" : size === "sm" ? "text-lg" : "text-2xl";

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3"
      data-testid="atlas-logo"
    >
      <AtlasMark className={dim} color={isDark ? "#FFFFFF" : "#0A1128"} accent="#A3E635" />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-black tracking-tight ${heading} ${textColor}`}>
          ATLAS
        </span>
        {showTagline && (
          <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.22em] mt-1 ${taglineColor}`}>
            Nettoyage Multiservice
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default AtlasLogo;
