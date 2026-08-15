import type { Metadata } from "next";
import {
  Smartphone,
  Apple,
  ShieldAlert,
  LayoutDashboard,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services, type Service } from "@/data/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${SITE.company}'s services — Android development, iOS development, Apple MDM, and Android MDM for enterprise device security.`,
};

const iconMap: Record<Service["icon"], typeof Smartphone> = {
  smartphone: Smartphone,
  apple: Apple,
  "shield-alert": ShieldAlert,
  "layout-dashboard": LayoutDashboard,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-20 text-center sm:py-24">
        <Container>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold text-text-muted backdrop-blur-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-primary-light" aria-hidden="true" />
            Our Services
          </div>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-gradient sm:text-5xl">
            Development &amp; Device Management, Built Right
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            From native app development to enterprise MDM, explore how we help
            businesses build and secure their device fleets.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.slug}
                id={service.slug}
                style={{ scrollMarginTop: "96px" }}
              >
                <Card hover={false} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-text">
                      {service.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                      What&apos;s Included
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 rounded-xl border border-border bg-surface-light p-3.5"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary-light"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="border-t border-border py-20 text-center sm:py-24">
        <Container>
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight text-text sm:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
            Talk to us — we&apos;ll help you figure out the right fit for your
            business.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg" showArrow>
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}