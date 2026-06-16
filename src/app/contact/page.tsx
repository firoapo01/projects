import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { contactInfo, availability } from "@/data/profile";
import { seo } from "@/data/seo";

export const metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <Section>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-4xl font-light text-[var(--color-text-primary)] md:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-4 max-w-lg font-body text-base text-[var(--color-text-secondary)] md:text-md">
          Whether you have a project you&apos;re planning, a question about my
          work, or a role you think I&apos;d be right for — send me a message.
          I respond within 24 hours.
        </p>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-body text-sm font-medium text-[var(--color-text-primary)]"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="h-10 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-sunken)] px-4 font-body text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-border-strong)] focus:outline-none focus:shadow-gold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-body text-sm font-medium text-[var(--color-text-primary)]"
              >
                Your email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-10 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-sunken)] px-4 font-body text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-border-strong)] focus:outline-none focus:shadow-gold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="font-body text-sm font-medium text-[var(--color-text-primary)]"
              >
                What&apos;s this about?
              </label>
              <select
                id="subject"
                name="subject"
                className="h-10 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-sunken)] px-4 font-body text-base text-[var(--color-text-primary)] focus:border-[var(--color-border-strong)] focus:outline-none focus:shadow-gold"
              >
                <option value="project">I have a project I&apos;d like to discuss</option>
                <option value="role">I&apos;m hiring for a junior role</option>
                <option value="question">I have a question about your work</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-body text-sm font-medium text-[var(--color-text-primary)]"
              >
                Tell me more
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you working on? What do you need?"
                required
                className="rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-sunken)] px-4 py-3 font-body text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-border-strong)] focus:outline-none focus:shadow-gold"
              />
            </div>

            <button
              type="submit"
              className="self-start rounded-md bg-sand-500 px-6 py-3 font-body text-sm font-medium tracking-wide text-sand-50 transition-colors duration-fast hover:bg-sand-600 focus-visible:outline-none focus-visible:shadow-gold"
            >
              Send Message →
            </button>
          </form>

          <aside className="flex flex-col gap-8">
            <div>
              <h2 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                Direct channels
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-body text-sm text-[var(--color-text-secondary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
                >
                  {contactInfo.email}
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-[var(--color-text-secondary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-[var(--color-text-secondary)] transition-colors duration-fast hover:text-[var(--color-accent)]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="border-t border-[var(--color-border-subtle)] pt-6">
              <h2 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                Location &amp; availability
              </h2>
              <div className="mt-4 flex flex-col gap-1">
                <p className="font-body text-sm text-[var(--color-text-secondary)]">{availability.location}</p>
                <p className="font-body text-sm text-[var(--color-text-secondary)]">{availability.remote}</p>
                <p className="font-body text-sm text-[var(--color-text-secondary)]">{availability.status}</p>
              </div>
            </div>

            <div className="border-t border-[var(--color-border-subtle)] pt-6">
              <h2 className="font-body text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                Response time
              </h2>
              <p className="mt-4 font-body text-sm text-[var(--color-text-secondary)]">
                {availability.responseTime}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </PageWrapper>
  );
}
