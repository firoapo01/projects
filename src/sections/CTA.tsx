import Link from "next/link";
import { profile } from "@/data/profile";

export default function CTA() {
  const { heading, body, primaryCta, secondaryCta } = profile.ctaBanner;

  return (
    <section className="px-5 py-24 md:px-8">
      <h2>{heading}</h2>
      <p>{body}</p>
      <div>
        <Link href={primaryCta.href}>{primaryCta.label}</Link>
        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
      </div>
    </section>
  );
}
