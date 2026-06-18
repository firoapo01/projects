"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";

export default function Hero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta } =
    profile.hero;

  const words = headline.split(" ");

  return (
    <Section className="py-24 md:py-32 lg:py-40">
      <div>
        <motion.p
          className="mb-3 font-body text-sm text-[var(--color-text-tertiary)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {profile.name} — {eyebrow}
        </motion.p>

        <h1 className="font-display text-3xl font-light leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.08,
                ease: "easeOut",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-sm font-body text-base text-[var(--color-text-secondary)] md:text-md lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
        >
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
            className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)]"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
