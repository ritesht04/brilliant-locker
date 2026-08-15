import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.company} — terms and conditions for using our website and services.`,
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.`,
  },
  {
    title: "2. Use of Website",
    body: `This website is provided for informational purposes to help you learn about ${SITE.company}'s services. You agree not to misuse this website or attempt to gain unauthorized access to any part of it.`,
  },
  {
    title: "3. Services",
    body: `${SITE.company} provides device security, mobile device management (MDM), and app development services as described on this website. Specific engagement terms, pricing, and deliverables are agreed upon separately with each client.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content on this website, including text, graphics, logos, and design, is the property of ${SITE.company} unless otherwise stated, and may not be reproduced without permission.`,
  },
  {
    title: "5. Limitation of Liability",
    body: `${SITE.company} is not liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on the information provided herein.`,
  },
  {
    title: "6. Third-Party Services",
    body: `Our contact form redirects submissions to WhatsApp for communication. Your use of WhatsApp is subject to WhatsApp's own terms of service and privacy policy.`,
  },
  {
    title: "7. Changes to These Terms",
    body: `We reserve the right to update these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the revised terms.`,
  },
  {
    title: "8. Contact Us",
    body: `For questions about these Terms of Service, please contact us at ${CONTACT.phoneDisplay} or via our contact page.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-text sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: January 2026
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 text-lg font-semibold text-text">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}