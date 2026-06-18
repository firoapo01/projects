"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, ctaNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md focus-visible:outline-none focus-visible:shadow-gold"
      >
        <span
          className={cn(
            "block h-px w-6 bg-[var(--color-text-primary)] transition-transform duration-base ease-standard",
            open && "translate-y-[3.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "block h-px w-6 bg-[var(--color-text-primary)] transition-transform duration-base ease-standard",
            open && "-translate-y-[3.5px] -rotate-45"
          )}
        />
      </button>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-14 z-40 flex flex-col bg-[var(--color-bg-page)] transition-opacity duration-base ease-standard",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col items-center justify-center gap-8 px-5"
        >
          {mainNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "font-display text-2xl transition-colors duration-fast ease-standard",
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={ctaNav.href}
            className="rounded-md bg-sand-700 px-8 py-3 font-body text-base font-medium tracking-wide text-white transition-colors duration-fast ease-standard hover:bg-sand-800"
          >
            {ctaNav.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
