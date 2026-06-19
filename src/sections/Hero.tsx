"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import DesertButton from "@/components/DesertButton";
import { profile } from "@/data/profile";

const NAME = "ABDELRAHMAN";
const ARABIC_MAP = ["ع", "ب", "د", "ا", "ل", "ر", "ح", "م", "ا", "ن", ""];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const letterVariants = {
  hidden: {
    y: 80,
    opacity: 0,
    filter: "blur(8px) brightness(0.6)",
    scaleY: 0.85,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px) brightness(1)",
    scaleY: 1,
    transition: {
      delay: i * 0.07 + 0.5,
      duration: 0.9,
      ease: cubicEase,
    },
  }),
};

const arabicVariants = {
  hidden: { opacity: 0 as number },
  visible: (i: number) => ({
    opacity: [0, 0.4, 0],
    transition: {
      delay: i * 0.07 + 0.5,
      duration: 0.2,
      times: [0, 0.3, 1] as [number, number, number],
    },
  }),
};

export default function Hero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta } =
    profile.hero;

  const words = headline.split(" ");

  return (
    <Section className="py-24 md:py-32 lg:py-40">
      <div className="relative z-10">
        <motion.p
          className="mb-3 font-body text-sm text-[var(--color-text-tertiary)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0, 0, 0.58, 1] }}
        >
          {profile.name} — {eyebrow}
        </motion.p>

        <motion.div
          className="overflow-hidden"
          animate={{ letterSpacing: ["0.05em", "0.18em"] }}
          transition={{ delay: 2.2, duration: 0.8, ease: [0, 0, 0.58, 1] }}
        >
          <h1 className="font-display text-[10vw] font-light uppercase leading-none tracking-tight text-[var(--color-text-primary)] md:text-[8vw]">
            {NAME.split("").map((char, i) => (
              <span
                key={i}
                className="relative inline-block overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-amiri), 'Amiri', serif",
                    color: "rgba(139,115,85,0.6)",
                  }}
                  variants={arabicVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {ARABIC_MAP[i]}
                </motion.span>
                <motion.span
                  className="inline-block"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <h2 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-[0.25em] inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 2.5 + i * 0.08,
                ease: [0, 0, 0.58, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="mt-6 max-w-sm font-body text-base text-[var(--color-text-secondary)] md:text-md lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.2, ease: [0, 0, 0.58, 1] }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3.5, ease: [0, 0, 0.58, 1] }}
        >
          <DesertButton href={primaryCta.href}>
            {primaryCta.label}
          </DesertButton>
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
