import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { profile, skills, tools, learningPath, contactInfo } from "@/data/profile";
import { projects } from "@/data/projects";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.resume.title,
  description: seo.resume.description,
};

export default function ResumePage() {
  return (
    <PageWrapper>
      <Section>
        <Eyebrow>Resume</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-body text-base font-medium text-[var(--color-text-secondary)]">
          {profile.role}
        </p>
        <p className="mt-3 font-body text-sm text-[var(--color-text-tertiary)]">
          {profile.location} · Available remotely ·{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-[var(--color-accent)]"
          >
            {contactInfo.email}
          </a>
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm text-[var(--color-text-tertiary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
          >
            LinkedIn ↗
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm text-[var(--color-text-tertiary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
          >
            GitHub ↗
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            download
            className="rounded-md bg-sand-500 px-6 py-3 font-body text-sm font-medium tracking-wide text-sand-50 transition-colors duration-fast hover:bg-sand-600"
          >
            Download Resume PDF →
          </a>
          <Link
            href="/contact"
            className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)]"
          >
            Contact Me About a Role →
          </Link>
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Professional Summary
        </h2>
        <div className="mt-4 flex max-w-2xl flex-col gap-4">
          {profile.professionalSummary.map((paragraph, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-[var(--color-text-secondary)]">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Skills &amp; Technologies
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                {group.category}
              </h3>
              <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
              Tools &amp; AI
            </h3>
            <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
              {[...tools.ai, ...tools.dev].join(" · ")}
            </p>
          </div>
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
              Design
            </h3>
            <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)]">
              {tools.design.join(" · ")}
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Project Experience
        </h2>
        <div className="mt-8 flex flex-col divide-y divide-[var(--color-border-subtle)]">
          {projects.map((project) => (
            <div key={project.slug} className="py-8 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
                  {project.title}
                </h3>
                <span className="font-body text-xs text-[var(--color-text-tertiary)]">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-[var(--color-text-tertiary)]">
                {project.technologies.join(" · ")}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {project.description}
              </p>
              <p className="mt-2 font-body text-sm text-[var(--color-text-tertiary)]">
                Key challenge: {project.challenges[0]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Education &amp; Learning Path
        </h2>
        <div className="mt-6">
          <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
            {learningPath.title}
          </h3>
          <p className="mt-1 font-body text-sm text-[var(--color-text-secondary)]">
            {learningPath.provider} · {learningPath.status}
          </p>
          <p className="mt-3 font-body text-sm text-[var(--color-text-secondary)]">
            Currently at:{" "}
            <span className="font-medium text-[var(--color-text-primary)]">
              {learningPath.currentlyAt}
            </span>
          </p>
          <p className="mt-1 font-body text-sm text-[var(--color-text-secondary)]">
            Working toward:{" "}
            <span className="font-mono">{learningPath.workingToward.join(" · ")}</span>
          </p>
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <p className="font-body text-base text-[var(--color-text-secondary)]">
          Interested in working together?
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-sand-500 px-6 py-3 font-body text-sm font-medium tracking-wide text-sand-50 transition-colors duration-fast hover:bg-sand-600"
          >
            Contact Me About a Role →
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)]"
          >
            Download Resume PDF →
          </a>
        </div>
      </Section>
    </PageWrapper>
  );
}
