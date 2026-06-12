import PageWrapper from "@/components/layout/PageWrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-xl px-5 py-24 md:px-8">
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          OmniStack
        </h1>
      </section>
    </PageWrapper>
  );
}
