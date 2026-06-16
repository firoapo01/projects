import PageWrapper from "@/components/layout/PageWrapper";
import { contactInfo, availability } from "@/data/profile";

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="px-5 py-24 md:px-8">
        <p>Contact</p>
        <h1>Let&apos;s talk.</h1>
        <p>
          Whether you have a project you&apos;re planning, a question about my
          work, or a role you think I&apos;d be right for — send me a message.
          I respond within 24 hours.
        </p>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div>
          <form>
            <div>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div>
              <label htmlFor="email">Your email address</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div>
              <label htmlFor="subject">What&apos;s this about?</label>
              <select id="subject" name="subject">
                <option value="project">I have a project I&apos;d like to discuss</option>
                <option value="role">I&apos;m hiring for a junior role</option>
                <option value="question">I have a question about your work</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message">Tell me more</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you working on? What do you need?"
                required
              />
            </div>

            <button type="submit">Send Message →</button>
          </form>

          <aside>
            <h2>Direct channels</h2>
            <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p>LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></p>
            <p>GitHub: <a href={contactInfo.github} target="_blank" rel="noreferrer">GitHub ↗</a></p>

            <p>{availability.location}</p>
            <p>{availability.remote}</p>
            <p>{availability.status}</p>
            <p>{availability.responseTime}</p>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
}
