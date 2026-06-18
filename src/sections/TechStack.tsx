import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "jQuery",
  "WordPress",
  "WooCommerce",
  "PHP (fundamentals)",
  "Responsive Design",
  "Git",
];

export default function TechStack() {
  return (
    <Section className="py-10 md:py-14">
      <FadeIn>
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] text-center md:text-left">
          Tech Stack
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-sm border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
