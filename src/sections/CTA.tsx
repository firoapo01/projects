"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { carvingVariants, excavateVariants, excavateContainer } from "@/lib/motion";
import { profile, contactInfo } from "@/data/profile";

const ctaStagger = excavateContainer(0.1);

export default function CTA() {
  const { heading, body, primaryCta, secondaryCta } = profile.ctaBanner;

  return (
    <Section className="bg-[var(--color-bg-surface)]">
      <motion.div
        variants={ctaStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={carvingVariants}>
          <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
            {heading}
          </h2>
        </motion.div>
        <motion.div variants={excavateVariants}>
          <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
            {body}
          </p>
        </motion.div>
        <motion.div variants={excavateVariants}>
          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-4 inline-block font-mono text-sm text-[var(--color-text-secondary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
          >
            {contactInfo.email}
          </a>
        </motion.div>
        <motion.div variants={excavateVariants}>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href={primaryCta.href}
              className="rounded-md bg-sand-700 px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast hover:bg-sand-800"
              whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(180, 150, 80, 0.3)" }}
              whileTap={{ y: 0, boxShadow: "none" }}
              transition={{ duration: 0.2 }}
            >
              {primaryCta.label}
            </motion.a>
            <Link
              href={secondaryCta.href}
              className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)]"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
