import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import CaseStudyContent from "@/sections/CaseStudyContent";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  const title = `${project.title} — Case Study | OmniStack`;
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      url: `https://omnistack.dev/projects/${project.slug}`,
    },
    twitter: {
      title,
      description: project.description,
    },
  };
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <PageWrapper>
      <CaseStudyContent project={project} />
    </PageWrapper>
  );
}
