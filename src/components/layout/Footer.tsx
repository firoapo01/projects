import Link from "next/link";
import { footerNav, brand } from "@/data/navigation";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]"
    >
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
            {brand.name}
          </p>
          <p className="font-body text-sm text-[var(--color-text-secondary)]">
            {brand.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          {footerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-fast ease-standard hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-[var(--color-border-subtle)]">
        <p className="mx-auto max-w-xl px-5 py-4 font-body text-xs text-[var(--color-text-tertiary)] md:px-8">
          {brand.legalLine}
        </p>
      </div>
    </footer>
  );
}
