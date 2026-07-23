import { NavLink } from "../types";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
];

export const ctaNav: NavLink = { label: "Get in Touch", href: "/contact" };

export const footerNav: NavLink[] = [
  { label: "Resume", href: "/resume" },
  { label: "GitHub", href: "https://github.com/firoapo01" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/omnistack-web/" },
  { label: "Email", href: "mailto:abowael0112@gmail.com" },
];

export const brand = {
  name: "OMNISTACK",
  tagline: "Junior Frontend & WordPress Developer",
  legalLine: "© 2025 Abdelrahman Hassan. Built with HTML, CSS & JavaScript.",
};
