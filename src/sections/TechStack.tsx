"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { staggerContainer } from "@/lib/motion";
import type { VariantMap } from "@/lib/motion";

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techGlows: Record<string, string> = {
  HTML5: "rgba(227, 79, 38, 0.25)",
  CSS3: "rgba(38, 77, 228, 0.25)",
  JavaScript: "rgba(247, 223, 30, 0.25)",
  jQuery: "rgba(18, 70, 130, 0.25)",
  WordPress: "rgba(33, 117, 155, 0.25)",
  WooCommerce: "rgba(150, 88, 138, 0.25)",
  PHP: "rgba(119, 123, 180, 0.25)",
  Responsive: "rgba(139, 115, 85, 0.25)",
  Git: "rgba(240, 80, 50, 0.25)",
};

const stack = [
  { name: "HTML5", icon: `${BASE_URL}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${BASE_URL}/css3/css3-original.svg` },
  { name: "JavaScript", icon: `${BASE_URL}/javascript/javascript-original.svg` },
  { name: "jQuery", icon: `${BASE_URL}/jquery/jquery-original.svg` },
  { name: "WordPress", icon: `${BASE_URL}/wordpress/wordpress-plain.svg` },
  { name: "WooCommerce", icon: `${BASE_URL}/woocommerce/woocommerce-original.svg` },
  { name: "PHP", icon: `${BASE_URL}/php/php-original.svg` },
  { name: "Responsive", icon: null },
  { name: "Git", icon: `${BASE_URL}/git/git-original.svg` },
];

const gridStagger = staggerContainer(0.06);

const revealEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const iconVariants: VariantMap = {
  hidden: { opacity: 0, y: 30, scale: 0.85, filter: "blur(4px)" },
  visible: {
    opacity: 0.5,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: revealEase },
  },
};

function MonitorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(139,115,85,0.7)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export default function TechStack() {
  return (
    <Section className="py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1, ease: [0, 0, 0.58, 1] }}
      >
        <div className="relative mb-6 text-center md:text-left">
          <span
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none md:left-0 md:translate-x-0"
            style={{
              fontFamily: "var(--font-amiri), 'Amiri', serif",
              fontSize: "8rem",
              lineHeight: 1,
              color: "rgba(139,115,85,0.04)",
            }}
            aria-hidden="true"
          >
            م
          </span>
          <p className="mb-1 font-body text-xs font-medium uppercase tracking-widest text-[var(--color-text-tertiary)] sm:text-sm">
            Tools of the Craft
          </p>
          <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] sm:text-4xl md:text-5xl">
            Tech Stack
          </h2>
        </div>

        <motion.div
          className="mx-auto grid w-fit grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5"
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stack.map((tech) => (
            <motion.div
              key={tech.name}
              className="group relative flex h-[80px] w-[80px] cursor-default flex-col items-center justify-center rounded-xl sm:h-[100px] sm:w-[100px] sm:rounded-2xl md:h-[120px] md:w-[120px]"
              style={{
                border: "1px solid rgba(139,115,85,0.15)",
                background: "rgba(139,115,85,0.04)",
                filter: "grayscale(1) opacity(0.5) sepia(0.2)",
              }}
              variants={iconVariants}
              whileHover={{
                filter: "grayscale(0) opacity(1) sepia(0)",
                scale: 1.15,
                y: -6,
                boxShadow: `0 0 28px 8px ${techGlows[tech.name] || "rgba(139,115,85,0.25)"}, 0 8px 24px rgba(0,0,0,0.1)`,
                backgroundColor: (techGlows[tech.name] || "rgba(139,115,85,0.25)").replace("0.25", "0.08"),
                transition: { duration: 0.25, ease: [0, 0, 0.58, 1] },
              }}
            >
              {tech.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14"
                  loading="lazy"
                />
              ) : (
                <MonitorIcon />
              )}
              <span className="mt-1.5 text-center font-body text-[10px] text-[rgba(139,115,85,0.7)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-[11px] md:text-[13px]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
