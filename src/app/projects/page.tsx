import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects } from "@/data/projects";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.projects.title,
  description: seo.projects.description,
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Section>
        <Eyebrow>Selected Work</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          Projects built for real businesses.
        </h1>
        <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
          These aren&apos;t tutorial projects. Each one was built for a real
          client with a real business need — from first brief to live
          deployment.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6 transition-shadow duration-base hover:shadow-md"
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
              <span className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast group-hover:text-[var(--color-accent-hover)]">
                View Full Case Study →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
