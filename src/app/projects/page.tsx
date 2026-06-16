"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/ui/FadeIn";
import { fadeUp } from "@/lib/motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Section>
        <FadeIn staggerChildren>
          <FadeIn>
            <Eyebrow>Selected Work</Eyebrow>
            <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
              Projects built for real businesses.
            </h1>
            <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
              These aren&apos;t tutorial projects. Each one was built for a
              real client with a real business need — from first brief to live
              deployment.
            </p>
          </FadeIn>

          <FadeIn
            staggerChildren
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6 shadow-none transition-shadow duration-base hover:shadow-md"
                >
                  <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                    {project.category.join(" · ")}
                  </p>
                  <h2 className="font-display text-xl font-light text-[var(--color-text-primary)] md:text-2xl">
                    {project.title}
                  </h2>
                  <p className="flex-1 font-body text-sm text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                  {project.outcome && (
                    <p className="font-body text-xs text-[var(--color-text-tertiary)]">
                      {project.outcome}
                    </p>
                  )}
                  <span className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast group-hover:text-[var(--color-accent-hover)]">
                    View Full Case Study →
                  </span>
                </Link>
              </motion.div>
            ))}
          </FadeIn>
        </FadeIn>
      </Section>
    </PageWrapper>
  );
}
