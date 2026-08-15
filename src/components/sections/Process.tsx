import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your fleet size, security goals, and technical requirements through detailed consultation.",
  },
  {
    number: "02",
    title: "Setup & Enrollment",
    description:
      "Device enrollment, policy configuration, and dashboard setup tailored to your organization.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "Rollout across your device fleet with real-time monitoring and status tracking throughout.",
  },
  {
    number: "04",
    title: "Support & Monitoring",
    description:
      "Ongoing monitoring, support, and policy updates to keep your fleet secure long-term.",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title="Our Proven Process"
          description="A structured approach that ensures secure, reliable deployment every time."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-primary-light/40">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-border lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mb-2 text-base font-semibold text-text">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}