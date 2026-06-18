"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mainNav, ctaNav, brand } from "@/data/navigation";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-14 md:h-16 transition-colors duration-slow ease-standard border-b",
        scrolled
          ? "bg-[var(--color-bg-page)] border-[var(--color-border-default)] shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-xl items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-wide text-[var(--color-text-primary)]"
        >
          {brand.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {mainNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative font-body text-sm font-medium transition-colors duration-fast ease-standard",
                  isActive
                    ? "text-sand-800"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                )}
              >
                {link.label}
                {isActive ? (
                  <span
                    className="absolute -bottom-[2px] left-0 h-px w-full bg-current"
                  />
                ) : (
                  <motion.span
                    className="absolute -bottom-[2px] left-0 h-px w-full bg-current"
                    style={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </Link>
            );
          })}
          <motion.a
            href={ctaNav.href}
            className="rounded-md bg-sand-700 px-5 py-2 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast ease-standard hover:bg-sand-800 focus-visible:outline-none focus-visible:shadow-gold"
            whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(180, 150, 80, 0.3)" }}
            whileTap={{ y: 0, boxShadow: "none" }}
            transition={{ duration: 0.2 }}
          >
            {ctaNav.label}
          </motion.a>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
