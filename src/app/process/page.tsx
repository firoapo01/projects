import PageWrapper from "@/components/layout/PageWrapper";
import ProcessContent from "@/sections/ProcessContent";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.process.title,
  description: seo.process.description,
  openGraph: {
    title: seo.process.title,
    description: seo.process.description,
    url: "https://omnistack.dev/process",
  },
  twitter: {
    title: seo.process.title,
    description: seo.process.description,
  },
};

export default function ProcessPage() {
  return (
    <PageWrapper>
      <ProcessContent />
    </PageWrapper>
  );
}
