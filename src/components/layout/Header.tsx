"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-text">
          <ShieldCheck className="h-6 w-6 text-primary-light" aria-hidden="true" />
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive("/services") ? "text-primary-light" : "text-text hover:text-primary-light"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 rounded-2xl border border-border bg-surface p-2 shadow-glow">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services#${s.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm text-text-muted hover:bg-surface-light hover:text-text"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-light hover:bg-surface-light"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-primary-light" : "text-text hover:text-primary-light"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Get Started
          </Button>
        </div>

        <MobileNav navLinks={navLinks} />
      </Container>
    </header>
  );
}