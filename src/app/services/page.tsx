import PageWrapper from "@/components/layout/PageWrapper";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <p>Services</p>
        <h1>Web development built around your business goals.</h1>
        <p>
          I specialise in WordPress, WooCommerce, and custom frontend
          development — delivered with clean code, honest communication, and
          AI-assisted efficiency.
        </p>

        <div>
          {services.map((service) => (
            <div key={service.slug}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <h3>What it includes</h3>
              <ul>
                {service.whatItIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3>Ideal for</h3>
              <p>{service.idealClients}</p>

              <h3>Deliverables</h3>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {service.benefits ? (
                <>
                  <h3>About this service</h3>
                  <p>{service.benefits}</p>
                </>
              ) : null}
            </div>
          ))}
        </div>

        <div>
          <p>Not sure which service fits your project?</p>
          <a href="/contact">Tell Me About Your Project →</a>
        </div>
      </section>
    </PageWrapper>
  );
}
