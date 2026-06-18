import PageWrapper from "@/components/layout/PageWrapper";
import AboutContent from "@/sections/AboutContent";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.about.title,
  description: seo.about.description,
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: "https://omnistack.dev/about",
  },
  twitter: {
    title: seo.about.title,
    description: seo.about.description,
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  );
}
