import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/sections/Hero";
import FeaturedProjects from "@/sections/FeaturedProjects";
import ServicesPreview from "@/sections/ServicesPreview";
import ProcessOverview from "@/sections/ProcessOverview";
import CTA from "@/sections/CTA";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessOverview />
      <CTA />
    </PageWrapper>
  );
}
