"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { carvingVariants, excavateVariants, artifactVariants, excavateContainer } from "@/lib/motion";
import type { Project } from "@/types";

const contentStagger = excavateContainer(0.1);
const screenshotStagger = excavateContainer(0.12);

export default function CaseStudyContent({ project }: { project: Project }) {
  return (
    <Section>
      <motion.div
        variants={excavateVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Link
          href="/projects"
          className="mb-10 inline-block font-body text-sm text-[var(--color-text-tertiary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
        >
          ← Back to Projects
        </Link>
      </motion.div>

      <motion.div
        variants={carvingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Eyebrow>{project.category.join(" · ")}</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 font-body text-base text-[var(--color-text-secondary)] md:text-md">
          {project.description}
        </p>
      </motion.div>

      <motion.div
        className="mt-6 flex flex-wrap gap-6 border-y border-[var(--color-border-subtle)] py-5"
        variants={excavateVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div>
          <p className="font-body text-xs uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">Client</p>
          <p className="mt-1 font-body text-sm font-medium text-[var(--color-text-primary)]">{project.client}</p>
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">Year</p>
          <p className="mt-1 font-body text-sm font-medium text-[var(--color-text-primary)]">{project.year}</p>
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">Stack</p>
          <p className="mt-1 font-mono text-xs text-[var(--color-text-secondary)]">
            {project.technologies.join(" · ")}
          </p>
        </div>
        {project.links?.map((link) =>
          link.url ? (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="self-end font-body text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              {link.label} ↗
            </a>
          ) : null
        )}
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <motion.div
          className="flex flex-col gap-10"
          variants={contentStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={excavateVariants}>
            <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
              The Problem
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
              {project.problem}
            </p>
          </motion.div>

          <motion.div variants={excavateVariants}>
            <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
              The Solution
            </h2>
            {project.solution.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]"
              >
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div variants={excavateVariants}>
            <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
              Challenges
            </h2>
            <div className="mt-3 flex flex-col gap-4">
              {project.challenges.map((challenge) => (
                <p
                  key={challenge}
                  className="font-body text-base leading-relaxed text-[var(--color-text-secondary)]"
                >
                  {challenge}
                </p>
              ))}
            </div>
          </motion.div>

          {project.lessonsLearned ? (
            <motion.div variants={excavateVariants}>
              <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
                Lessons Learned
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
                {project.lessonsLearned}
              </p>
            </motion.div>
          ) : null}

          <motion.div variants={excavateVariants}>
            <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
              Results
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
              {project.results}
            </p>
          </motion.div>
        </motion.div>

        <motion.aside
          className="flex flex-col gap-6 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-10"
          variants={excavateVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
              Technologies
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="inline-block rounded-sm border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      {project.screenshots?.length ? (
        <motion.div
          className="mt-16"
          variants={carvingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
            Screenshots
          </h2>
          <motion.div
            className="mt-6 grid gap-6 md:grid-cols-2"
            variants={screenshotStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {project.screenshots.map((shot) => (
              <motion.div key={shot.src} variants={artifactVariants}>
                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                  <Image src={shot.src} alt={shot.caption} fill className="object-cover" />
                </div>
                <p className="mt-2 font-body text-xs text-[var(--color-text-tertiary)]">{shot.caption}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ) : null}

      <motion.div
        className="mt-16 border-t border-[var(--color-border-subtle)] pt-12 text-center"
        variants={excavateVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Have a similar project?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-sand-700 px-8 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast hover:bg-sand-800"
        >
          Start a Conversation →
        </Link>
      </motion.div>
    </Section>
  );
}
