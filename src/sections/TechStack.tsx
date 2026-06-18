"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "jQuery",
  "WordPress",
  "WooCommerce",
  "PHP (fundamentals)",
  "Responsive Design",
  "Git",
];

export default function TechStack() {
  return (
    <Section className="py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
      >
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] text-center md:text-left">
          Tech Stack
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {stack.map((item) => (
            <motion.span
              key={item}
              className="rounded-sm border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
              style={{ filter: "grayscale(1) opacity(0.6)" }}
              whileHover={{ filter: "grayscale(0) opacity(1)", transition: { duration: 0.2 } }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
