import Link from "next/link";
import { services } from "@/data/services";
import { profile } from "@/data/profile";

export default function ServicesPreview() {
  const { eyebrow, heading, footerCta } = profile.servicesPreview;

  return (
    <section className="px-5 py-24 md:px-8">
      <p>{eyebrow}</p>
      <h2>{heading}</h2>

      <div>
        {services.map((service) => (
          <div key={service.slug}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <Link href={footerCta.href}>{footerCta.label}</Link>
    </section>
  );
}
