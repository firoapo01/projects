import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-5 py-24 md:px-8">
      <h2>Ready to start? Let's build something together.</h2>
      <p>
        Whether you're a business looking for a developer, or a company hiring
        for a junior role — I'd love to hear from you.
      </p>
      <div>
        <Link href="/contact">Get in Touch →</Link>
        <Link href="/resume">View Resume</Link>
      </div>
    </section>
  );
}
