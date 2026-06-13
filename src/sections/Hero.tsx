import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta } = profile.hero;

  return (
    <section className="px-5 py-24 md:px-8">
      <p>{eyebrow}</p>
      <h1>{headline}</h1>
      <p>{subheadline}</p>
      <div>
        <Link href={primaryCta.href}>{primaryCta.label}</Link>
        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
      </div>
    </section>
  );
}
