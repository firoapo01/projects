export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string[];
  description: string;
  outcome?: string;
  thumbnail?: string;
  screenshots?: ProjectScreenshot[];
  problem: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  lessonsLearned?: string;
  results: string;
  links?: ProjectLink[];
  images?: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  whatItIncludes: string[];
  idealClients: string;
  deliverables: string[];
  benefits?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  heading: string;
  description: string;
  purpose: string;
  yourInvolvement: string;
  deliverable: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}
