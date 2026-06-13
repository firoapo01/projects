import Link from "next/link";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <Link href="/projects">← Back to Projects</Link>

        <p>{project.category.join(" · ")}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div>
          <p>Client: {project.client}</p>
          <p>Type: {project.category.join(", ")}</p>
          <p>Year: {project.year}</p>
          {project.links?.map((link) =>
            link.url ? (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ) : null
          )}
        </div>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2>The Problem</h2>
            <p>{project.problem}</p>

            <h2>The Solution</h2>
            <p>{project.solution}</p>

            <h2>Challenges</h2>
            {project.challenges.map((challenge) => (
              <p key={challenge}>{challenge}</p>
            ))}

            {project.lessonsLearned ? (
              <>
                <h2>Lessons Learned</h2>
                <p>{project.lessonsLearned}</p>
              </>
            ) : null}

            <h2>Results</h2>
            <p>{project.results}</p>
          </div>

          <aside>
            <h3>Technologies</h3>
            <ul>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div>
          <p>Have a similar project? Let&apos;s talk.</p>
          <Link href="/contact">Start a Conversation →</Link>
        </div>
      </section>
    </PageWrapper>
  );
}
