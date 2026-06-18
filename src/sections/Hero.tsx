import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/ui/FadeIn";
import { profile } from "@/data/profile";

export default function Hero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta } =
    profile.hero;

  return (
    <Section className="py-24 md:py-32 lg:py-40">
      <FadeIn staggerChildren>
        <FadeIn>
          <p className="mb-3 font-body text-sm text-[var(--color-text-tertiary)]">
            {profile.name} — {eyebrow}
          </p>
        </FadeIn>
        <FadeIn>
          <h1 className="font-display text-3xl font-light leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
            {headline}
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="mt-6 max-w-sm font-body text-base text-[var(--color-text-secondary)] md:text-md lg:max-w-lg">
            {subheadline}
          </p>
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
              className="rounded-md border border-[var(--color-border-default)] px-6 py-3 font-body text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-fast hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)]"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </FadeIn>
      </FadeIn>
    </Section>
  );
}
