import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(500px circle at 50% 0%, rgba(37,99,235,0.35), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight text-text sm:text-4xl">
              Ready to Secure Your Device Fleet?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
              Let&apos;s discuss your requirements and set up device security
              that scales with your business.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" showArrow>
                Get Free Consultation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Browse Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}