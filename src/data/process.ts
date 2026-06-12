import { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    heading: "Understanding what you actually need.",
    description:
      "Before anything gets built, I need to understand your business, your goals, your audience, and the problem you're trying to solve. This isn't a formality — it's the most important part of the process. A website built without a clear brief is just a guess.\n\nWe'll have a conversation — either a call or a written exchange — covering: what the site needs to do, who it's for, what success looks like, and any constraints (timeline, budget, existing systems).",
    purpose: "Establishes a clear brief so the project is built around real goals, not assumptions.",
    yourInvolvement: "A 30–45 minute call or a written brief. You don't need to know what you want technically — just what you want to achieve.",
    deliverable: "Project scope document — a written summary of goals, requirements, and agreed direction.",
  },
  {
    step: 2,
    title: "Planning",
    heading: "Structure before design.",
    description:
      "With a clear brief in place, I map out the site's structure — pages, content sections, user flows, and content requirements. This is where we agree on what the site contains before worrying about what it looks like.\n\nIf you have existing content, we'll inventory it. If you need to create content, we'll identify what's needed and who's responsible for it.",
    purpose: "Aligns on what the site contains before any design or development decisions are made.",
    yourInvolvement: "Review and sign off on the sitemap and content checklist. This is a quick step — usually one round of feedback.",
    deliverable: "Sitemap · Content checklist · Timeline",
  },
  {
    step: 3,
    title: "Design System",
    heading: "Visual direction before building.",
    description:
      "Before writing a line of code, I establish the visual language of the project: colours, typography, spacing, and the general look and feel. For clients without an existing brand, this is where we define one. For clients with a brand, this is where we make sure the digital implementation respects it.\n\nI present a design direction — not a complete set of mockups, but a clear visual system — and we agree on it before development begins. Changes at this stage are cheap. Changes after development has started are not.",
    purpose: "Locks in the visual direction while changes are still cheap, before development begins.",
    yourInvolvement: "Review and approve the visual direction. One or two rounds of feedback is normal.",
    deliverable: "Colour palette · Typography choices · Visual direction reference",
  },
  {
    step: 4,
    title: "Development",
    heading: "Building the thing.",
    description:
      "Development happens in stages, not in secret. I build the site section by section and share progress at agreed checkpoints — usually after major sections are complete. You can see what's being built and give feedback before everything is finished.\n\nI build mobile-first — every layout is designed to work on small screens first, then scaled up. I use AI tools where they accelerate the process, and I review everything that comes out of them before it goes into the project.",
    purpose: "Builds the site in visible stages so feedback happens before everything is finished.",
    yourInvolvement: "Staged reviews at checkpoints. Feedback is expected — that's the point. The clearer your feedback, the faster this stage goes.",
    deliverable: "Staged builds with review access · Progress updates",
  },
  {
    step: 5,
    title: "Testing",
    heading: "Making sure it works — everywhere.",
    description:
      "Before launch, the site is tested across browsers, devices, and screen sizes. I check for visual inconsistencies, broken layouts, slow load times, form functionality, and any behaviour that doesn't match the brief. For WooCommerce projects, this includes a full checkout flow test.\n\nI'll share a testing checklist with you and ask you to do a final walkthrough from a user's perspective — you'll find things I miss.",
    purpose: "Catches issues across browsers, devices, and real user flows before they reach customers.",
    yourInvolvement: "A final user review from your side. You know your users better than I do.",
    deliverable: "Cross-browser and mobile test report · Bug-fix cycle",
  },
  {
    step: 6,
    title: "Launch",
    heading: "Going live and handing over.",
    description:
      "When testing is complete and everything is approved, the site goes live. I handle the deployment and make sure the live environment matches the staging environment. After launch, I stay available for a brief period to catch anything that only becomes apparent in production.\n\nYou'll receive documentation covering how to manage your site — how to update content, add products, or make basic changes — so you're not dependent on me for day-to-day maintenance.",
    purpose: "Deploys the site and hands over the knowledge needed to run it independently.",
    yourInvolvement: "Final sign-off and go-live approval.",
    deliverable: "Live site · Admin handover documentation · Basic CMS training",
  },
];

export const processFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A straightforward WordPress site takes two to four weeks. A WooCommerce store with custom development takes four to eight weeks. Complex projects take longer — and I'll tell you that upfront, not halfway through. Timeline is always discussed and agreed during the planning stage.",
  },
  {
    question: "Do I need to provide my own content?",
    answer:
      "Generally, yes — you know your business better than I do, and content that comes from you will be more accurate and more authentic than anything I could write for you. I'll tell you exactly what content I need and when I need it, and I'll work with whatever you have, even if it's rough. If you need copywriting support, I can recommend someone.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Existing sites can often be improved rather than replaced. I can audit what you have, tell you honestly whether it's worth rebuilding or just optimising, and give you a recommendation that's in your interest rather than mine.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send me a message through the contact form. Tell me what you're building, what you're working with, and what you're trying to achieve. I'll get back to you within 24 hours. If it sounds like a good fit, we'll arrange a short call and go from there. No commitment required from either side at that stage.",
  },
];
