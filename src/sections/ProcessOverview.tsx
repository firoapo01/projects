import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/ui/FadeIn";
import { processSteps } from "@/data/process";
import { profile } from "@/data/profile";

export default function ProcessOverview() {
  const { eyebrow, heading, footerCta } = profile.processOverview;

  return (
    <Section>
      <FadeIn>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
          {heading}
        </h2>
      </FadeIn>

      <FadeIn className="mt-12 flex flex-wrap gap-4">
        {processSteps.map((step, index) => (
          <div key={step.step} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] font-body text-xs font-semibold text-[var(--color-accent)]">
              {String(step.step).padStart(2, "0")}
            </div>
            <span className="font-body text-sm font-medium text-[var(--color-text-primary)]">
              {step.title}
            </span>
            {index < processSteps.length - 1 && (
              <span className="hidden font-body text-[var(--color-text-tertiary)] sm:inline">
                →
              </span>
            )}
          </div>
        ))}
      </FadeIn>

      <FadeIn className="mt-10">
        <Link
          href={footerCta.href}
          className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast hover:text-[var(--color-accent-hover)]"
        >
          {footerCta.label}
        </Link>
      </FadeIn>
    </Section>
  );
}
