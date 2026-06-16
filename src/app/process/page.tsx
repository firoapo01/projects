import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { processSteps, processFaqs } from "@/data/process";

export default function ProcessPage() {
  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <p>How It Works</p>
        <h1>A clear, collaborative process — from first conversation to final launch.</h1>
        <p>
          Working with a developer shouldn&apos;t feel like handing something
          over and hoping for the best. Here&apos;s exactly what working with
          me looks like.
        </p>
      </section>

      <section className="px-5 py-16 md:px-8">
        {processSteps.map((step) => (
          <div key={step.step}>
            <span>{String(step.step).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <h3>{step.heading}</h3>
            <p>{step.description}</p>
            <p>Your involvement: {step.yourInvolvement}</p>
            <p>Deliverable: {step.deliverable}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 md:px-8">
        <h2>Common questions.</h2>
        {processFaqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 md:px-8">
        <p>The first step is a conversation.</p>
        <Link href="/contact">Let&apos;s Talk About Your Project →</Link>
      </section>
    </PageWrapper>
  );
}
