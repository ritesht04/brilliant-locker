import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 50% -10%, rgba(37,99,235,0.35), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--color-bg) 95%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center py-12 text-center sm:py-16 lg:py-20">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold text-text-muted backdrop-blur-sm">
          <ShieldCheck className="h-4 w-4 text-primary-light" aria-hidden="true" />
          Trusted Device Security Partner
        </div>

        <h1 className="max-w-2xl text-3xl font-bold leading-[1.15] text-gradient sm:text-4xl lg:text-5xl">
          Secure &amp; Manage Every{" "}
          <span className="text-gradient-accent">Device</span>, From One
          Dashboard
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
          {SITE.company} delivers enterprise-grade remote locking, GPS
          tracking, and Android &amp; Apple MDM — built to keep your device
          fleet secure and under control.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="/contact" size="lg" showArrow className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
            Explore Services
          </Button>
        </div>

        <p className="mt-5 text-xs font-medium uppercase tracking-wider text-text-muted/70">
          Enterprise-ready &nbsp;•&nbsp; Secure by design &nbsp;•&nbsp; Built for scale
        </p>
      </Container>
    </section>
  );
}