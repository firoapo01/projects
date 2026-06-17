import { Project, ProjectScreenshot } from "../types";

export const projects: Project[] = [
  {
    id: "martal-lens",
    slug: "martal-lens",
    title: "Martal Lens",
    client: "Martal Lens",
    year: "2024",
    category: ["E-commerce", "WordPress", "WooCommerce", "AI-Assisted"],
    description:
      "A custom WooCommerce store for a contact lens retail business — built with AI-assisted development and refined by hand.",
    outcome:
      "Built and deployed a fully functional WooCommerce store from scratch.",
    thumbnail: "/images/projects/martal-hero.png",
    screenshots: [
      { src: "/images/projects/martal-hero.png", caption: "Homepage — hero section and product discovery" },
      { src: "/images/projects/martal-market.png", caption: "Shop page — product grid with filtering" },
      { src: "/images/projects/martal-cart.png", caption: "Cart — order summary and checkout flow" },
      { src: "/images/projects/martal-favorite.png", caption: "Wishlist — saved products page" },
    ],
    problem:
      "Martal Lens needed more than an off-the-shelf store. They required a professional, branded e-commerce experience where customers could browse, filter, and purchase contact lenses with confidence. The existing digital presence wasn't doing justice to the product or the business.",
    solution:
      "I built a custom WordPress and WooCommerce solution that gave the client a fully managed online store: product catalogues, variation handling for lens types and prescriptions, a clean checkout flow, and a responsive design that worked on every device.\n\nAI-assisted development — specifically Claude — played a meaningful role in accelerating the build. I used it to generate structural code, refine component logic, and explore layout approaches faster than I could have from scratch. Every piece of generated code was reviewed, tested, and adapted to fit the project's specific requirements. The AI didn't build the site — it made me a faster, more thorough developer.",
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "Claude (AI-Assisted)"],
    challenges: [
      "Managing AI-generated code at scale. Working with AI-assisted workflows introduced a specific challenge: the volume and variability of generated code. A function might work in isolation but behave unpredictably when integrated into a larger system. I developed a discipline of reviewing each block carefully — understanding it before using it, not just running it and hoping.",
      "WooCommerce customisation depth. Getting WooCommerce to behave exactly as the client needed required going beyond the default settings — custom CSS overrides, conditional logic for product variations, and checkout flow adjustments that weren't part of any plugin's default configuration.",
    ],
    lessonsLearned:
      "This project clarified something important: AI assistance raises the ceiling of what a developer can produce in a given time, but it also raises the responsibility floor. The quality of the output depends entirely on the judgment of the person directing the tool. I came out of this project with a much clearer understanding of how to use AI tools professionally — as a workflow accelerant, not a replacement for thinking.",
    results:
      "The client received a live, fully functional e-commerce store — a professional online presence that matches the quality of the product they sell. The store handles product management, customer orders, and responsive presentation across mobile and desktop.",
    links: [{ label: "View Live Site", url: "" }],
  },
  {
    id: "safira-pharmacy",
    slug: "safira-pharmacy",
    title: "Safira Pharmacy",
    client: "Safira Pharmacy",
    year: "2024",
    category: ["E-commerce", "Branding", "WordPress", "Elementor", "WooCommerce"],
    description:
      "A full e-commerce website with branding and visual identity for a pharmacy — from logo to live store.",
    outcome:
      "Delivered complete branding and a live e-commerce store end to end.",
    thumbnail: "/images/projects/safira-hero.png",
    screenshots: [
      { src: "/images/projects/safira-hero.png", caption: "Homepage — hero section and brand identity" },
      { src: "/images/projects/safira-products.png", caption: "Shop — product gallery and category layout" },
      { src: "/images/projects/safira-footer.png", caption: "Footer — contact info and store details" },
    ],
    problem:
      "Safira Pharmacy needed to establish a digital presence that matched the trust and professionalism their customers expect from a healthcare brand. That meant more than a functional website — it meant a visual identity, a consistent brand system, and an e-commerce experience that felt safe, clear, and credible.",
    solution:
      "This project had two distinct phases: brand first, then build.\n\nI developed a visual identity — logo, colour system, and typography — that communicated the pharmacy's values: clean, trustworthy, professional. That visual language then carried through into the website itself, built on WordPress with Elementor for flexibility, WooCommerce for the product catalogue, and custom CSS throughout to tighten the design beyond what Elementor's defaults allowed.\n\nDesign tools — Photoshop and Canva — were used for asset creation and mockups at various stages.",
    technologies: ["WordPress", "Elementor", "WooCommerce", "Custom CSS", "Photoshop", "Canva"],
    challenges: [
      "Brand consistency across every touchpoint. When you're building both the brand and the product that carries it, there's a constant tension between making brand decisions and making build decisions. A colour that looks good in a logo mockup can behave differently against a product card or a checkout page. I learned to test brand decisions in context — not just in isolation.",
      "Responsive design in Elementor. Elementor gives you a lot of layout control, but its responsive behaviour requires careful management. Getting the site to look intentional on mobile — not just \"acceptable\" — meant auditing every section at every breakpoint and making targeted CSS adjustments where the builder couldn't provide what was needed.",
    ],
    lessonsLearned:
      "Building brand and product simultaneously is harder and more rewarding than either alone. The discipline of maintaining consistency — making sure every page feels like it belongs to the same visual system — is something I now treat as a non-negotiable part of any project, not an afterthought.",
    results:
      "Safira Pharmacy launched with a coherent brand identity and a fully functional e-commerce site. The client had a complete digital presence — logo, website, product catalogue, and the ability to manage their own inventory through WooCommerce.",
  },
  {
    id: "global-ecosystem",
    slug: "global-ecosystem",
    title: "Global Ecosystem",
    client: "Global Ecosystem (GES)",
    year: "2024",
    category: ["Platform", "WordPress", "Custom Dev", "AI-Assisted"],
    description:
      "A professional WordPress platform aligned with UN/UNESCO sustainability goals — custom-built with performance and structure in mind.",
    outcome:
      "Custom WordPress theme with 14+ PHP templates, built for a live platform.",
    thumbnail: "/images/projects/ges-hero.png",
    screenshots: [
      { src: "/images/projects/ges-hero.png", caption: "Homepage — hero and platform positioning" },
      { src: "/images/projects/ges-marketplace.png", caption: "Marketplace — knowledge products and community search" },
      { src: "/images/projects/ges-contact.png", caption: "Contact page — form and direct channels" },
      { src: "/images/projects/ges-cards.png", caption: "Platform overview — additional section" },
    ],
    problem:
      "The Global Ecosystem organisation needed a web platform that matched the ambition of its mission. The existing digital footprint didn't reflect the organisation's credibility or scale. They needed something that felt premium, purposeful, and capable of hosting both a public-facing presence and a marketplace for their ecosystem of partners.",
    solution:
      "I built a custom WordPress implementation — no generic theme, no off-the-shelf page builder layout. The homepage was designed with cinematic entrance animations: scroll-triggered sequences, layered typography reveals, and motion that communicates scale without overwhelming the content.\n\nThe marketplace page — a premium section for ecosystem partners and offerings — required custom layout work beyond standard WooCommerce. I used AI tools (Claude, ChatGPT) extensively during the build, directing code generation for complex animation sequences and custom component structures, then refining and debugging the output to production quality.",
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "Claude", "ChatGPT"],
    challenges: [
      "AI code quality at production level. Working with AI-generated code on a project of this complexity required a level of scrutiny I hadn't fully developed on earlier projects. Generated code can be structurally sound but semantically vague — it works, but it doesn't communicate intent clearly to anyone who reads it later (including me, two weeks after writing it). I made a deliberate decision to refactor AI-generated sections for readability and maintainability, not just functionality.",
      "CSS architecture at scale. With multiple custom sections, animation layers, and responsive states, the stylesheet grew complex quickly. I restructured it mid-project using a component-based naming approach — grouping styles by the section they belonged to rather than by property type. This made debugging and iteration significantly faster in the second half of the build.",
    ],
    lessonsLearned:
      "This project pushed my understanding of what \"production-ready\" actually means. A site that works is not the same as a site that holds up under scrutiny — from a developer reading the code, or a user on an unexpected device or network condition. Quality is a discipline, not an outcome.",
    results:
      "The Global Ecosystem platform launched with a homepage that reflects the organisation's credibility, a structured marketplace section, and a codebase that can be extended and maintained. The client received a digital presence that matches the scale of the work they do.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
