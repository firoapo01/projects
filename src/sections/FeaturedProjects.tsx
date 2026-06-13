import Link from "next/link";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function FeaturedProjects() {
  const { eyebrow, heading, body, footerCta } = profile.featuredProjects;

  return (
    <section className="px-5 py-24 md:px-8">
      <p>{eyebrow}</p>
      <h2>{heading}</h2>
      <p>{body}</p>

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

      <Link href={footerCta.href}>{footerCta.label}</Link>
    </section>
  );
}
