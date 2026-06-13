import Link from "next/link";
import { processSteps } from "@/data/process";
import { profile } from "@/data/profile";

export default function ProcessOverview() {
  const { eyebrow, heading, footerCta } = profile.processOverview;

  return (
    <section className="px-5 py-24 md:px-8">
      <p>{eyebrow}</p>
      <h2>{heading}</h2>

      <div>
        {processSteps.map((step) => (
          <div key={step.step}>
            <span>{String(step.step).padStart(2, "0")}</span>
            <p>{step.title}</p>
          </div>
        ))}
      </div>

      <Link href={footerCta.href}>{footerCta.label}</Link>
    </section>
  );
}
