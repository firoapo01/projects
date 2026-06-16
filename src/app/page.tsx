import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";
import FeaturedProjects from "@/sections/FeaturedProjects";
import ServicesPreview from "@/sections/ServicesPreview";
import ProcessOverview from "@/sections/ProcessOverview";
import CTA from "@/sections/CTA";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessOverview />
      <CTA />
    </PageWrapper>
  );
}
