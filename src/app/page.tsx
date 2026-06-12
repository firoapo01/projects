import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/sections/home/Hero";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import ServicesPreview from "@/sections/home/ServicesPreview";
import ProcessOverview from "@/sections/home/ProcessOverview";
import CtaBanner from "@/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessOverview />
      <CtaBanner />
    </PageWrapper>
  );
}
