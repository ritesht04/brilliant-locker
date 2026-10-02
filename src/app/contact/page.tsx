import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/sections/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us – EMI Locker Indore",
  description:
    "Contact Divine Pay Locker at Bapat Square, Indore. Call or WhatsApp 9755655975 for an EMI locker app demo, pricing and MDM support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-16 text-center sm:py-20">
        <Container>
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold text-text-muted backdrop-blur-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-primary-light" aria-hidden="true" />
            Contact Us
          </div>
          <h1 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-gradient sm:text-4xl lg:text-5xl">
            Contact Divine Pay Locker
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-lg">
            Want an EMI locker app demo or MDM support? Fill out the form or
            reach our Indore office directly. We usually respond within a few
            hours.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Card hover={false}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-text">Address</h3>
              <p className="text-sm text-text-muted">{CONTACT.address.full}</p>
            </Card>

            <Card hover={false}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-text">Phone</h3>
              <a href={CONTACT.phoneHref} className="text-sm text-text-muted hover:text-primary-light">{CONTACT.phoneDisplay}</a>
            </Card>

            <Card hover={false}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-text">WhatsApp</h3>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary-light">Chat with us</a>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={CONTACT.map.embedUrl}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divine Pay Locker office location on Google Maps"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card hover={false} className="sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-text">
                Send Us a Message
              </h2>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}