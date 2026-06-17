import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  const title = `${project.title} — Case Study | OmniStack`;
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      url: `https://omnistack.dev/projects/${project.slug}`,
    },
    twitter: {
      title,
      description: project.description,
    },
  };
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <PageWrapper>
      <Section>
        <Link
          href="/projects"
          className="mb-10 inline-block font-body text-sm text-[var(--color-text-tertiary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
        >
          ← Back to Projects
        </Link>

        <Eyebrow>{project.category.join(" · ")}</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 font-body text-base text-[var(--color-text-secondary)] md:text-md">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-6 border-y border-[var(--color-border-subtle)] py-5">
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
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
                The Problem
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
                {project.problem}
              </p>
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            {project.lessonsLearned ? (
              <div>
                <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
                  Lessons Learned
                </h2>
                <p className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {project.lessonsLearned}
                </p>
              </div>
            ) : null}

            <div>
              <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
                Results
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
                {project.results}
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-10">
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
          </aside>
        </div>

        {project.screenshots?.length ? (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
              Screenshots
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.screenshots.map((shot) => (
                <figure key={shot.src}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 font-body text-xs text-[var(--color-text-tertiary)]">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-16 border-t border-[var(--color-border-subtle)] pt-12 text-center">
          <p className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
            Have a similar project?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-sand-500 px-8 py-3 font-body text-sm font-medium tracking-wide text-sand-50 transition-colors duration-fast hover:bg-sand-600"
          >
            Start a Conversation →
          </Link>
        </div>
      </Section>
    </PageWrapper>
  );
}
