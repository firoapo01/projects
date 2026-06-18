import PageWrapper from "@/components/layout/PageWrapper";
import ServicesContent from "@/sections/ServicesContent";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.services.title,
  description: seo.services.description,
  openGraph: {
    title: seo.services.title,
    description: seo.services.description,
    url: "https://omnistack.dev/services",
  },
  twitter: {
    title: seo.services.title,
    description: seo.services.description,
  },
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesContent />
    </PageWrapper>
  );
}
