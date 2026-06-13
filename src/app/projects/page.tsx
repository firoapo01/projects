import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <p>Selected Work</p>
        <h1>Projects built for real businesses.</h1>
        <p>
          These aren&apos;t tutorial projects. Each one was built for a real
          client with a real business need — from first brief to live
          deployment.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <p>{project.category.join(" · ")}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>View Full Case Study →</span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
