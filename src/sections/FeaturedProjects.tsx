import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function FeaturedProjects() {
  const { eyebrow, heading, body, footerCta } = profile.featuredProjects;

  return (
    <Section>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
        {heading}
      </h2>
      <p className="mt-4 font-body text-base text-[var(--color-text-secondary)] md:text-md">
        {body}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col gap-3 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6 transition-shadow duration-base hover:shadow-md"
          >
            <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
              {project.category.join(" · ")}
            </p>
            <h3 className="font-display text-xl font-light text-[var(--color-text-primary)] md:text-2xl">
              {project.title}
            </h3>
            <p className="flex-1 font-body text-sm text-[var(--color-text-secondary)]">
              {project.description}
            </p>
            <span className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast group-hover:text-[var(--color-accent-hover)]">
              View Case Study →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href={footerCta.href}
          className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast hover:text-[var(--color-accent-hover)]"
        >
          {footerCta.label}
        </Link>
      </div>
    </Section>
  );
}
