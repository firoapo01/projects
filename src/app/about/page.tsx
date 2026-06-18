import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { profile, values, skills, learningPath } from "@/data/profile";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.about.title,
  description: seo.about.description,
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: "https://omnistack.dev/about",
  },
  twitter: {
    title: seo.about.title,
    description: seo.about.description,
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          Hi, I&apos;m {profile.name.split(" ")[0]}.
        </h1>
        <p className="mt-4 font-body text-base text-[var(--color-text-secondary)] md:text-md">
          {profile.shortBio}
        </p>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          My journey into web development
        </h2>
        <div className="mt-6 flex max-w-2xl flex-col gap-5">
          {profile.longBio.map((paragraph, i) => (
            <p
              key={i}
              className="font-body text-base leading-relaxed text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <Eyebrow>Working Style</Eyebrow>
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          How I approach every project.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6"
            >
              <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
                {value.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-text-secondary)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <Eyebrow>Currently Learning</Eyebrow>
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          {learningPath.title}
        </h2>
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
      </Section>

      <Section className="pt-0 lg:pt-0">
        <Eyebrow>Tech Stack</Eyebrow>
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Tools I work with.
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-sand-700 px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast hover:bg-sand-800"
          >
            See My Projects →
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)]"
          >
            Get in Touch →
          </Link>
        </div>
      </Section>
    </PageWrapper>
  );
}
