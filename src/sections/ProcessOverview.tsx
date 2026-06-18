"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { scrollReveal, staggerContainer } from "@/lib/motion";
import { processSteps } from "@/data/process";
import { profile } from "@/data/profile";

const stepStagger = staggerContainer(0.06);

export default function ProcessOverview() {
  const { eyebrow, heading, footerCta } = profile.processOverview;

  return (
    <Section>
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
          {heading}
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 flex flex-wrap gap-4"
        variants={stepStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {processSteps.map((step, index) => (
          <motion.div key={step.step} variants={scrollReveal} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] font-body text-xs font-semibold text-[var(--color-accent)]">
              {String(step.step).padStart(2, "0")}
            </div>
            <span className="font-body text-sm font-medium text-[var(--color-text-primary)]">
              {step.title}
            </span>
            {index < processSteps.length - 1 && (
              <span className="hidden font-body text-[var(--color-text-tertiary)] sm:inline">
                →
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10"
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Link
          href={footerCta.href}
          className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast hover:text-[var(--color-accent-hover)]"
        >
          {footerCta.label}
        </Link>
      </motion.div>
    </Section>
  );
}
