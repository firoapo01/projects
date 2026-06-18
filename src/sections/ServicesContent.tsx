"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { carvingVariants, excavateVariants, artifactVariants, excavateContainer } from "@/lib/motion";
import { services } from "@/data/services";

const serviceStagger = excavateContainer(0.12);

export default function ServicesContent() {
  return (
    <>
      <Section>
        <motion.div
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
            Web development built around your business goals.
          </h1>
          <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
            I specialise in WordPress, WooCommerce, and custom frontend
            development — delivered with clean code, honest communication, and
            AI-assisted efficiency.
          </p>
        </motion.div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <motion.div
          className="flex flex-col divide-y divide-[var(--color-border-subtle)]"
          variants={serviceStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={excavateVariants} className="py-12 first:pt-0">
              <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 font-body text-base text-[var(--color-text-secondary)] md:text-md">
                {service.description}
              </p>

              <motion.div
                className="mt-8 grid gap-8 md:grid-cols-3"
                variants={excavateContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.div variants={artifactVariants}>
                  <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    What it includes
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.whatItIncludes.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm text-[var(--color-text-secondary)]"
                      >
                        — {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={artifactVariants}>
                  <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    Ideal for
                  </h3>
                  <p className="mt-3 font-body text-sm text-[var(--color-text-secondary)]">
                    {service.idealClients}
                  </p>
                </motion.div>

                <motion.div variants={artifactVariants}>
                  <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                    Deliverables
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm text-[var(--color-text-secondary)]"
                      >
                        — {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {service.benefits ? (
                <motion.p
                  className="mt-6 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5 font-body text-sm italic text-[var(--color-text-secondary)]"
                  variants={excavateVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {service.benefits}
                </motion.p>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 border-t border-[var(--color-border-subtle)] pt-12"
          variants={excavateVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-body text-base text-[var(--color-text-secondary)]">
            Not sure which service fits your project?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md bg-sand-700 px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast hover:bg-sand-800"
          >
            Tell Me About Your Project →
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
