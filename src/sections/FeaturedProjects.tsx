"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/ui/FadeIn";
import { fadeUp } from "@/lib/motion";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function FeaturedProjects() {
  const { eyebrow, heading, body, footerCta } = profile.featuredProjects;

  return (
    <Section>
      <FadeIn>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 font-body text-base text-[var(--color-text-secondary)] md:text-md">
          {body}
        </p>
      </FadeIn>

      <FadeIn staggerChildren className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] transition-shadow duration-base hover:shadow-md"
            >
              {project.thumbnail && (
                <div className="relative h-[240px] w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {project.category.join(" · ")}
              </p>
              <h3 className="font-display text-xl font-light text-[var(--color-text-primary)] md:text-2xl">
                {project.title}
              </h3>
              <p className="flex-1 font-body text-sm text-[var(--color-text-secondary)]">
                {project.description}
              </p>
              {project.outcome && (
                <p className="font-body text-xs text-[var(--color-text-tertiary)]">
                  {project.outcome}
                </p>
              )}
              <span className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast group-hover:text-[var(--color-accent-hover)]">
                View Case Study →
              </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </FadeIn>

      <FadeIn className="mt-10">
        <Link
          href={footerCta.href}
          className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast hover:text-[var(--color-accent-hover)]"
        >
          {footerCta.label}
        </Link>
      </FadeIn>
    </Section>
  );
}
