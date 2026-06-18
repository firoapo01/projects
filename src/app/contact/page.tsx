import PageWrapper from "@/components/layout/PageWrapper";
import ContactContent from "@/sections/ContactContent";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  openGraph: {
    title: seo.contact.title,
    description: seo.contact.description,
    url: "https://omnistack.dev/contact",
  },
  twitter: {
    title: seo.contact.title,
    description: seo.contact.description,
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  );
}
