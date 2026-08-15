import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Smartphone,
  Apple,
  ShieldAlert,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services, type Service } from "@/data/services";

const iconMap: Record<Service["icon"], typeof Smartphone> = {
  smartphone: Smartphone,
  apple: Apple,
  "shield-alert": ShieldAlert,
  "layout-dashboard": LayoutDashboard,
};

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <div className="border-b border-border">
        <Container className="py-4">
          <nav aria-label="Breadcrumb" className="text-xs text-text-muted">
            <Link href="/" className="hover:text-primary-light">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary-light">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">{service.title}</span>
          </nav>
        </Container>
      </div>

      <section className="border-b border-border bg-grid py-16 text-center sm:py-20">
        <Container>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-gradient sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-lg">
            {service.description}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-text">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-light"
                  aria-hidden="true"
                />
                <span className="text-sm text-text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40 py-14">
        <Container className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <ShieldCheck className="h-7 w-7 text-primary-light" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-text-muted">
            Every engagement includes a dedicated point of contact, transparent
            progress updates, and post-launch support.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-text">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((s) => {
              const RelatedIcon = iconMap[s.icon];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  <Card className="group h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary-light">
                      <RelatedIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1 text-base font-semibold text-text">
                      {s.title}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {s.shortDescription}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 text-center sm:py-20">
        <Container>
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight text-text sm:text-4xl">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-muted">
            Let&apos;s discuss your requirements and next steps.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg" showArrow>
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}