import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { profile, skills, tools, learningPath, contactInfo } from "@/data/profile";
import { projects } from "@/data/projects";

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <p>Resume</p>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
        <p>
          {profile.location} · Available remotely ·{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> ·{" "}
          <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a> ·{" "}
          <a href={contactInfo.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </p>
        <div>
          <a href="/resume.pdf" download>Download Resume PDF →</a>
          <Link href="/contact">Contact Me About a Role →</Link>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <h2>Professional Summary</h2>
        {profile.professionalSummary.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="px-5 py-16 md:px-8">
        <h2>Skills &amp; Technologies</h2>
        {skills.map((group) => (
          <div key={group.category}>
            <h3>{group.category}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
        <div>
          <h3>Tools &amp; AI</h3>
          <p>{[...tools.ai, ...tools.dev].join(" · ")}</p>
          <h3>Design</h3>
          <p>{tools.design.join(" · ")}</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <h2>Project Experience</h2>
        {projects.map((project) => (
          <div key={project.slug}>
            <h3>{project.title}</h3>
            <p>{project.year} · {project.technologies.join(" · ")}</p>
            <p>{project.description}</p>
            <p>Key challenge: {project.challenges[0]}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 md:px-8">
        <h2>Education &amp; Learning Path</h2>
        <h3>{learningPath.title}</h3>
        <p>{learningPath.provider} · {learningPath.status}</p>
        <p>Currently at: {learningPath.currentlyAt}</p>
        <p>Working toward: {learningPath.workingToward.join(" · ")}</p>
      </section>

      <section className="px-5 py-16 md:px-8">
        <p>Interested in working together?</p>
        <Link href="/contact">Contact Me About a Role →</Link>
        <a href="/resume.pdf" download>Download Resume PDF →</a>
      </section>
    </PageWrapper>
  );
}
