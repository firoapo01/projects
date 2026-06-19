"use client";

import { motion } from "framer-motion";
import { footerNav, brand } from "@/data/navigation";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]"
    >
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
            {brand.name}
          </p>
          <p className="font-body text-sm text-[var(--color-text-secondary)]">
            {brand.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          {footerNav.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              {...(link.href.startsWith("http") || link.href.startsWith("mailto:")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="font-body text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-fast ease-standard"
              whileHover={{
                textShadow: "0 0 16px rgba(212,180,120,0.7)",
                color: "rgba(139,115,85,1)",
                transition: { duration: 0.2 },
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="border-t border-[var(--color-border-subtle)]">
        <p className="mx-auto max-w-xl px-5 py-4 font-body text-xs text-[var(--color-text-tertiary)] md:px-8">
          {brand.legalLine}
        </p>
      </div>
    </footer>
  );
}
