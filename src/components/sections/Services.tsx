import Link from "next/link";
import { Smartphone, Apple, ShieldAlert, LayoutDashboard, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { services, type Service } from "@/data/services";

const iconMap: Record<Service["icon"], typeof Smartphone> = {
  smartphone: Smartphone,
  apple: Apple,
  "shield-alert": ShieldAlert,
  "layout-dashboard": LayoutDashboard,
};

export default function Services() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Device Security Solutions"
          description="From native app development to enterprise MDM, we help you keep every device secure, tracked, and under control."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link key={service.slug} href={`/services#${service.slug}`}>
                <Card className="group h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">{service.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}