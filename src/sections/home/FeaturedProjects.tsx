import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="px-5 py-24 md:px-8">
      <p>Selected Work</p>
      <h2>Real projects for real businesses.</h2>
      <p>
        Three client projects built and deployed — from e-commerce stores to
        full branding systems.
      </p>

      <div>
        {projects.map((project) => (
          <div key={project.slug}>
            <p>{project.category.join(" · ")}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href={`/projects/${project.slug}`}>View Case Study →</Link>
          </div>
        ))}
      </div>

      <Link href="/projects">View All Projects →</Link>
    </section>
  );
}
