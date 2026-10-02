import type { Metadata } from "next";
import { Target, Eye, Users, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us – EMI Locker & MDM Company in Indore",
  description: `Divine Pay Locker is built by ${SITE.company}, Indore. Learn about our EMI locker and mobile device management (MDM) solutions for mobile retailers across India.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To help mobile retailers and businesses secure their EMI devices and manage device fleets with reliable, enterprise-grade technology, without unnecessary complexity.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted EMI locker and device security partner for growing businesses across India, known for reliability and technical excellence.",
  },
  {
    icon: Users,
    title: "Our Approach",
    description:
      "Transparent communication, agile delivery, and long-term support. We treat every client engagement as a partnership, not a transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-20 text-center sm:py-24">
        <Container>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold text-text-muted backdrop-blur-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-primary-light" aria-hidden="true" />
            About Us
          </div>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-gradient sm:text-5xl">
            About Divine Pay Locker
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Divine Pay Locker is an EMI locker and mobile device management
            solution by {SITE.company}, a full-stack IT company based in
            Indore.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Who We Are"
            title="Building Secure Digital Foundations"
            description={`${SITE.company} was established in 2023 with a focus on device security, mobile application development, and enterprise mobile device management (MDM). Through Divine Pay Locker, we help businesses keep their devices secure, tracked, and under control, including EMI-financed mobile phones.`}
          />
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40 py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="What Drives Us" title="Mission, Vision & Approach" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

      <section className="border-t border-border py-20 text-center sm:py-24">
        <Container>
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight text-text sm:text-4xl">
            Want to Work With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
            Let&apos;s discuss how {SITE.name} can help secure your devices.
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