import Link from "next/link";
import { ShieldCheck, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { SITE, CONTACT } from "@/lib/constants";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8.25z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2H21l-6.6 7.54L22 22h-6.2l-4.86-6.36L5.34 22H2.56l7.06-8.07L2 2h6.34l4.4 5.82L18.24 2zm-1.09 18h1.7L7.02 3.9h-1.8L17.15 20z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.38.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-text">
            <ShieldCheck className="h-6 w-6 text-primary-light" aria-hidden="true" />
            {SITE.name}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {SITE.company} delivers enterprise-grade device security and mobile device management solutions — remote locking, tracking, and fleet management for businesses.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2 text-text-muted hover:border-primary-light hover:text-primary-light">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="Twitter / X" className="rounded-full border border-border p-2 text-text-muted hover:border-primary-light hover:text-primary-light">
              <XIcon />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-full border border-border p-2 text-text-muted hover:border-primary-light hover:text-primary-light">
              <GithubIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-text-muted hover:text-primary-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">Services</h3>
          <ul className="flex flex-col gap-3">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-text-muted hover:text-primary-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">Contact</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-2.5 text-sm text-text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" aria-hidden="true" />
              <span>{CONTACT.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-text-muted">
              <Phone className="h-4 w-4 shrink-0 text-primary-light" aria-hidden="true" />
              <a href={CONTACT.phoneHref} className="hover:text-primary-light">
                {CONTACT.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-text-muted sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {SITE.company}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}