import Link from "next/link";
import { processSteps } from "@/data/process";

export default function ProcessOverview() {
  return (
    <section className="px-5 py-24 md:px-8">
      <p>How It Works</p>
      <h2>A clear process from first conversation to final launch.</h2>

      <div>
        {processSteps.map((step) => (
          <div key={step.step}>
            <span>{String(step.step).padStart(2, "0")}</span>
            <p>{step.title}</p>
          </div>
        ))}
      </div>

      <Link href="/process">See the Full Process →</Link>
    </section>
  );
}
