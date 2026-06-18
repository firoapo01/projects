import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { processSteps, processFaqs } from "@/data/process";
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
      <Section>
        <Eyebrow>How It Works</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          A clear, collaborative process — from first conversation to final
          launch.
        </h1>
        <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
          Working with a developer shouldn&apos;t feel like handing something
          over and hoping for the best. Here&apos;s exactly what working with
          me looks like.
        </p>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <div className="flex flex-col gap-0">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="grid gap-6 border-t border-[var(--color-border-subtle)] py-10 md:grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] font-body text-sm font-semibold text-[var(--color-accent)]">
                {String(step.step).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-1 font-body text-base font-light italic text-[var(--color-text-secondary)]">
                  {step.heading}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {step.description.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                      Your involvement
                    </p>
                    <p className="mt-1 font-body text-sm text-[var(--color-text-secondary)]">
                      {step.yourInvolvement}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                      Deliverable
                    </p>
                    <p className="mt-1 font-body text-sm text-[var(--color-text-secondary)]">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <h2 className="font-display text-2xl font-light text-[var(--color-text-primary)] md:text-3xl">
          Common questions.
        </h2>
        <div className="mt-8 flex flex-col divide-y divide-[var(--color-border-subtle)]">
          {processFaqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
                {faq.question}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <p className="font-body text-base text-[var(--color-text-secondary)]">
          The first step is a conversation.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-md bg-sand-500 px-6 py-3 font-body text-sm font-medium tracking-wide text-sand-50 transition-colors duration-fast hover:bg-sand-600"
        >
          Get in Touch About Your Project →
        </Link>
      </Section>
    </PageWrapper>
  );
}
