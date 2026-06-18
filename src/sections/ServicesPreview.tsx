"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { carvingVariants, artifactVariants, excavateVariants, excavateContainer } from "@/lib/motion";
import { services } from "@/data/services";
import { profile } from "@/data/profile";

const cardStagger = excavateContainer(0.12);

export default function ServicesPreview() {
  const { eyebrow, heading, footerCta } = profile.servicesPreview;

  return (
    <Section>
      <motion.div
        variants={carvingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
          {heading}
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service) => (
          <motion.div
            key={service.slug}
            variants={artifactVariants}
            className="flex flex-col gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6"
          >
            <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
              {service.title}
            </h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10"
        variants={excavateVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
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
