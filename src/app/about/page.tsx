import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { profile, values, skills, learningPath } from "@/data/profile";

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <p>About</p>
        <h1>Hi, I&apos;m {profile.name.split(" ")[0]}.</h1>
        <p>{profile.shortBio}</p>
      </section>

      <section className="px-5 py-16 md:px-8">
        <h2>My journey into web development</h2>
        {profile.longBio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="px-5 py-16 md:px-8">
        <p>Working Style</p>
        <h2>How I approach every project.</h2>
        <div>
          {values.map((value) => (
            <div key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <p>Currently Learning</p>
        <h2>{learningPath.title}</h2>
        <p>{learningPath.provider}</p>
        <p>Currently at: {learningPath.currentlyAt}</p>
        <p>Working toward: {learningPath.workingToward.join(" · ")}</p>
      </section>

      <section className="px-5 py-16 md:px-8">
        <p>Tech Stack</p>
        <h2>Tools I work with.</h2>
        {skills.map((group) => (
          <div key={group.category}>
            <h3>{group.category}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 md:px-8">
        <Link href="/projects">See My Projects →</Link>
        <Link href="/contact">Get in Touch →</Link>
      </section>
    </PageWrapper>
  );
}
