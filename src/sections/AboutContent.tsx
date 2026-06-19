"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import DesertButton from "@/components/DesertButton";
import { carvingVariants, excavateVariants, artifactVariants, excavateContainer } from "@/lib/motion";
import { profile, values, skills, learningPath } from "@/data/profile";

const valuesStagger = excavateContainer(0.1);
const skillsStagger = excavateContainer(0.08);

function StoneDivider() {
  return (
    <motion.div
      className="mx-auto my-8 h-px w-full bg-gradient-to-r from-transparent via-sand-300 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ originX: "50%" }}
    />
  );
}

export default function AboutContent() {
  return (
    <>
      <Section>
        <motion.div
          className="relative"
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span
            className="pointer-events-none absolute -top-10 right-0 select-none"
            style={{
              fontFamily: "var(--font-amiri), 'Amiri', serif",
              fontSize: "10rem",
              lineHeight: 1,
              color: "rgba(139,115,85,0.04)",
            }}
            aria-hidden="true"
          >
            ح
          </span>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
          </h1>
          <p className="mt-4 font-body text-base text-[var(--color-text-secondary)] md:text-md">
            {profile.shortBio}
          </p>
        </motion.div>
      </Section>

      <StoneDivider />

      <Section className="pt-0 lg:pt-0">
        <motion.div
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
            My journey into web development
          </h2>
        </motion.div>
        <motion.div
          className="mt-6 flex max-w-2xl flex-col gap-5"
          variants={excavateContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {profile.longBio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={excavateVariants}
              className="font-body text-base leading-relaxed text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      <StoneDivider />

      <Section className="pt-0 lg:pt-0">
        <motion.div
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Eyebrow>Working Style</Eyebrow>
          <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
            How I approach every project.
          </h2>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={valuesStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={artifactVariants}
              className="flex flex-col gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6"
            >
              <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
                {value.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-text-secondary)]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <StoneDivider />

      <Section className="pt-0 lg:pt-0">
        <motion.div
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Eyebrow>Currently Learning</Eyebrow>
          <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
            {learningPath.title}
          </h2>
        </motion.div>
        <motion.div
          variants={excavateVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
            {learningPath.provider} · {learningPath.status}
          </p>
          <p className="mt-4 font-body text-sm text-[var(--color-text-secondary)]">
            Currently at:{" "}
            <span className="font-medium text-[var(--color-text-primary)]">
              {learningPath.currentlyAt}
            </span>
          </p>
          <p className="mt-1 font-body text-sm text-[var(--color-text-secondary)]">
            Working toward:{" "}
            <span className="font-mono">{learningPath.workingToward.join(" · ")}</span>
          </p>
        </motion.div>
      </Section>

      <StoneDivider />

      <Section className="pt-0 lg:pt-0">
        <motion.div
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Eyebrow>Tech Stack</Eyebrow>
          <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
            Tools I work with.
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={skillsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={artifactVariants}>
              <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                {group.category}
              </h3>
              <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
                {group.items.join(" · ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <StoneDivider />

      <Section className="pt-0 lg:pt-0">
        <motion.div
          className="flex flex-wrap gap-4"
          variants={excavateVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <DesertButton href="/projects">
            See My Projects →
          </DesertButton>
          <Link
            href="/contact"
            className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)]"
          >
            Get in Touch →
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
