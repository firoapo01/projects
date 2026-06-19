"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ImageLightbox, { useLightbox } from "@/components/ImageLightbox";
import { carvingVariants, excavateVariants, artifactVariants, excavateContainer } from "@/lib/motion";
import type { Project } from "@/types";

const contentStagger = excavateContainer(0.1);
const screenshotStagger = excavateContainer(0.12);

export default function CaseStudyContent({ project }: { project: Project }) {
  const { selected, open, close } = useLightbox();

  return (
    <Section>
      <ImageLightbox image={selected} onClose={close} />
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
              <motion.figure
                key={shot.src}
                variants={artifactVariants}
                className="group"
              >
                <motion.div
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
                  style={{ cursor: "zoom-in" }}
                  whileHover={{
                    scale: 1.02,
                    filter: "brightness(1.08)",
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => open(shot.src, shot.caption)}
                >
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(212,180,120,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </motion.div>
                <figcaption className="mt-2 font-body text-sm text-[var(--color-text-tertiary)]">
                  {shot.caption}
                </figcaption>
              </motion.figure>
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
