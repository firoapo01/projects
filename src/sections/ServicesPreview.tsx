import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/data/services";
import { profile } from "@/data/profile";

export default function ServicesPreview() {
  const { eyebrow, heading, footerCta } = profile.servicesPreview;

  return (
    <Section>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
        {heading}
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.slug}
            className="flex flex-col gap-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6"
          >
            <h3 className="font-body text-base font-semibold text-[var(--color-text-primary)]">
              {service.title}
            </h3>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href={footerCta.href}
          className="font-body text-sm font-medium text-[var(--color-accent)] transition-colors duration-fast hover:text-[var(--color-accent-hover)]"
        >
          {footerCta.label}
        </Link>
      </div>
    </Section>
  );
}
