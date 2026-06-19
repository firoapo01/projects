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
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(139,115,85,0.7)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
          <p className="mb-1 font-body text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
            Tools of the Craft
          </p>
          <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
            Tech Stack
          </h2>
        </div>

        <motion.div
          className="mx-auto grid w-fit grid-cols-3 gap-3 md:grid-cols-5"
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stack.map((tech) => (
            <motion.div
              key={tech.name}
              className="group relative flex h-[120px] w-[120px] cursor-default flex-col items-center justify-center rounded-2xl"
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
                  width={56}
                  height={56}
                  loading="lazy"
                />
              ) : (
                <MonitorIcon />
              )}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-[13px] text-[rgba(139,115,85,0.7)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
