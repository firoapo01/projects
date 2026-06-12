import { NavLink } from "./types";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
];

export const ctaNav: NavLink = { label: "Let's Talk", href: "/contact" };

export const footerNav: NavLink[] = [
  { label: "Resume", href: "/resume" },
  { label: "GitHub", href: "https://github.com/abdelrahman-hassan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdelrahman-hassan" },
  { label: "Email", href: "mailto:hello@omnistack.dev" },
];

export const brand = {
  name: "OMNISTACK",
  tagline: "Junior Frontend & WordPress Developer",
  legalLine: "© 2025 Abdelrahman Hassan. Built with HTML, CSS & JavaScript.",
};
