import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-5 py-24 md:px-8">
      <p>Junior Frontend & WordPress Developer</p>
      <h1>Building Modern Websites with Code, WordPress & AI</h1>
      <p>
        I help businesses create fast, well-built web experiences — using
        WordPress, custom code, and AI-assisted workflows to deliver results
        that matter.
      </p>
      <div>
        <Link href="/projects">View My Projects →</Link>
        <Link href="/contact">Contact Me</Link>
      </div>
    </section>
  );
}
