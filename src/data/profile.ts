import { ContactInfo, SkillGroup } from "../types";

export const profile = {
  name: "Abdelrahman Hassan",
  role: "Junior Frontend & WordPress Developer",
  location: "Turkey",
  shortBio:
    "Junior Frontend & WordPress Developer. Based in Turkey. Building real things, learning fast.",
  hero: {
    eyebrow: "Junior Frontend & WordPress Developer",
    headline: "Building Modern Websites with Code, WordPress & AI",
    subheadline:
      "I help businesses create fast, well-built web experiences — using WordPress, custom code, and AI-assisted workflows to deliver results that matter.",
    primaryCta: { label: "View My Projects →", href: "/projects" },
    secondaryCta: { label: "Get in Touch", href: "/contact" },
  },
  ctaBanner: {
    heading: "Ready to start? Let's build something together.",
    body: "Whether you're a business looking for a developer, or a company hiring for a junior role — I'd love to hear from you.",
    primaryCta: { label: "Get in Touch →", href: "/contact" },
    secondaryCta: { label: "View Resume", href: "/resume" },
  },
  featuredProjects: {
    eyebrow: "Selected Work",
    heading: "Real projects for real businesses.",
    body: "Three client projects built and deployed — from e-commerce stores to full branding systems.",
    footerCta: { label: "View All Projects →", href: "/projects" },
  },
  servicesPreview: {
    eyebrow: "What I Do",
    heading: "Web development that solves real business problems.",
    footerCta: { label: "See All Services →", href: "/services" },
  },
  processOverview: {
    eyebrow: "How It Works",
    heading: "A clear process from first conversation to final launch.",
    footerCta: { label: "See the Full Process →", href: "/process" },
  },
  longBio: [
    "I didn't start with a clear plan. I started with a problem to solve — a business needed a website, I figured out how to build it, and something clicked. The combination of logic, craft, and visible output made sense to me in a way that not many things had before.",
    "That first project led to more projects. Each one was slightly harder than the last. Each one required me to learn something I didn't know yet — WooCommerce configuration, responsive CSS, custom JavaScript, debugging production code under real pressure. I learned by doing, which meant I learned by making mistakes and fixing them. That's still how I learn.",
    "I'm currently working through Angela Yu's Full Stack Web Development course, building on the WordPress and frontend foundation I've developed through client work. I'm at the JavaScript and jQuery stage — adding the programmatic thinking that will eventually take me into backend development, databases, and the full stack the brand is named for. OmniStack isn't where I am yet. It's where I'm going.",
    "The three projects in my portfolio — Martal Lens, Safira Pharmacy, and Global Ecosystem — were all built for real clients with real business needs. None of them were tutorial projects. None of them had the luxury of being abandoned when they got hard. They had to work.",
    "I use AI tools — Claude and ChatGPT — as part of my development workflow. I'm transparent about this because I think it's the honest position, and because I think the ability to direct AI tools effectively is a genuine skill worth claiming. I don't use AI to avoid understanding code. I use it to build more, faster, and to explore solutions I might not have reached on my own. The judgment and the responsibility stay with me.",
    "What I'm looking for now is the next stage: a junior frontend role where I can work alongside experienced developers and grow inside a real codebase, or freelance clients who need serious web development work done by someone who takes it seriously.",
    "If either of those sounds like it might be you — I'd like to talk.",
  ],
  professionalSummary: [
    "I'm a junior frontend and WordPress developer with hands-on experience building and deploying real client projects. My work spans custom WordPress development, WooCommerce e-commerce builds, frontend implementation, and branding — with a workflow that integrates AI tools for efficiency without sacrificing code quality or ownership.",
    "I'm currently completing a Full Stack Web Development course and am actively looking for a junior frontend role where I can contribute meaningfully, learn from experienced developers, and grow inside a real codebase. I'm honest about where I am in my journey — and serious about where I'm going.",
  ],
};

export const values = [
  {
    title: "Honest about what I know",
    description:
      "I don't oversell my experience. If something is outside my current capability, I say so — and I'll tell you who might be better placed to help. I'd rather lose a project than take one I can't deliver well.",
  },
  {
    title: "Problem-first, tool-second",
    description:
      "The question is always: what does this project actually need? The technology follows from that, not the other way around. I'm not attached to any particular stack or approach — I'm attached to outcomes.",
  },
  {
    title: "Continuous improvement",
    description:
      "I'm actively learning. Not because someone told me to, but because every project surfaces gaps I want to close. The Full Stack course, the AI workflow, the deliberate case study format — they're all part of the same habit: understanding things more deeply than I need to in order to use them.",
  },
];

export const skills: SkillGroup[] = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "jQuery", "Responsive Design", "Mobile-First Development"] },
  { category: "CMS & E-commerce", items: ["WordPress", "WooCommerce", "Elementor", "PHP (fundamentals)", "Custom Theme Development", "Plugin Configuration"] },
  { category: "Design", items: ["Adobe Photoshop", "Canva", "Visual Identity", "Typography"] },
];

export const tools = {
  ai: ["Claude", "ChatGPT"],
  dev: ["Git", "VS Code", "Chrome DevTools"],
  design: ["Photoshop", "Canva"],
};

export const learningPath = {
  title: "Full Stack Web Development",
  provider: "Angela Yu · Udemy",
  status: "In progress",
  currentlyAt: "JavaScript & jQuery",
  workingToward: ["Node.js", "Express", "SQL", "MongoDB", "React"],
};

export const contactInfo: ContactInfo = {
  email: "abowael0112@gmail.com",
  linkedin: "https://www.linkedin.com/company/omnistack-web/",
  github: "https://github.com/firoapo01",
  location: "Turkey",
};

export const availability = {
  location: "Based in Turkey.",
  remote: "Available for remote work worldwide.",
  status: "Open to freelance projects and junior frontend roles.",
  responseTime: "I respond to all messages within 24 hours, usually faster.",
};
