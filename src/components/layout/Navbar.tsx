"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mainNav, ctaNav, brand } from "@/data/navigation";
import { cn } from "@/lib/utils";
import DesertButton from "@/components/DesertButton";
import MobileNav from "./MobileNav";

const underlineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

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
              <motion.div
                key={link.href}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative"
              >
                <Link
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
                </Link>
                {isActive ? (
                  <>
                    <span className="absolute -bottom-[2px] left-0 h-px w-full bg-current" />
                    <motion.span
                      className="absolute -top-[6px] left-1/2"
                      style={{
                        translateX: "-50%",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent)",
                      }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                ) : (
                  <motion.span
                    className="absolute -bottom-[2px] left-1/2 h-px w-full bg-current"
                    style={{ translateX: "-50%", originX: "50%" }}
                    variants={underlineVariants}
                    transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                )}
              </motion.div>
            );
          })}
          <DesertButton href={ctaNav.href} className="px-5 py-2 focus-visible:outline-none focus-visible:shadow-gold">
            {ctaNav.label}
          </DesertButton>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
