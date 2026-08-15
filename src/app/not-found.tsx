import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-16 text-center">
      <Container>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
          <ShieldAlert className="h-8 w-8" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-text sm:text-4xl">
          Looks like this page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
          The page you&apos;re looking for may have been moved or doesn&apos;t
          exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            Browse Services
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}