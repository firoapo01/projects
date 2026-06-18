import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { profile, contactInfo } from "@/data/profile";

export default function CTA() {
  const { heading, body, primaryCta, secondaryCta } = profile.ctaBanner;

  return (
    <Section className="bg-[var(--color-bg-surface)]">
      <FadeIn staggerChildren>
        <FadeIn>
          <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
            {heading}
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
            {body}
          </p>
        </FadeIn>
        <FadeIn>
          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-4 inline-block font-mono text-sm text-[var(--color-text-secondary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
          >
            {contactInfo.email}
          </a>
        </FadeIn>
        <FadeIn>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="rounded-md bg-sand-700 px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast hover:bg-sand-800"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)]"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </FadeIn>
      </FadeIn>
    </Section>
  );
}
