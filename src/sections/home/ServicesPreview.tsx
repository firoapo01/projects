import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="px-5 py-24 md:px-8">
      <p>What I Do</p>
      <h2>Web development that solves real business problems.</h2>

      <div>
        {services.map((service) => (
          <div key={service.slug}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <Link href="/services">See All Services →</Link>
    </section>
  );
}
