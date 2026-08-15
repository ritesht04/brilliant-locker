import { Lightbulb, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver future-proof device security solutions.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Driven",
    description:
      "Every feature and deployment goes through rigorous testing before reaching your fleet.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We treat your security as our own — transparent communication at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Security Focused",
    description:
      "In device management, security isn't an afterthought — it's built into everything we do.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-border bg-surface/40 py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Your Trusted Device Security Partner"
          description="We combine technical expertise with enterprise-grade reliability to keep your devices secure."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} hover={false} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}