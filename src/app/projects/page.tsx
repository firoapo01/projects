"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { carvingVariants, artifactVariants, excavateContainer } from "@/lib/motion";
import { projects } from "@/data/projects";

const cardStagger = excavateContainer(0.1);

export default function ProjectsPage() {
  return (
    <PageWrapper>
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
            ع
          </span>
          <Eyebrow>Selected Work</Eyebrow>
          <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
            Projects built for real businesses.
          </h1>
          <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
            These aren&apos;t tutorial projects. Each one was built for a
            real client with a real business need — from first brief to live
            deployment.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={artifactVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: [0, 0, 0.58, 1] } }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] shadow-none transition-all duration-base hover:shadow-md hover:border-[rgba(176,154,90,0.6)]"
              >
                {project.thumbnail && (
                  <motion.div
                    className="relative h-[240px] w-full overflow-hidden rounded-t-xl"
                    whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] } }}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-6">
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
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </PageWrapper>
  );
}
