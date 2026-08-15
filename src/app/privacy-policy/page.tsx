import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.company} — how we collect, use, and protect your information.`,
};

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you use our contact form, we collect the information you provide directly, such as your name, phone number, company name, and message details. This information is used only to respond to your inquiry and is sent via WhatsApp — we do not store this information on any database or server.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information you provide solely to respond to your inquiries, discuss project requirements, and provide the services you request. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "3. Cookies and Tracking",
    body: `This website does not use tracking cookies or third-party analytics scripts that collect personally identifiable information. Any embedded content (such as Google Maps) may be subject to the privacy policies of the respective third-party provider.`,
  },
  {
    title: "4. Data Security",
    body: `We take reasonable measures to protect information submitted through our website. Since our contact form does not store data on a server or database, information is transmitted directly to our WhatsApp number for direct communication.`,
  },
  {
    title: "5. Third-Party Links",
    body: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites.`,
  },
  {
    title: "6. Children's Privacy",
    body: `Our services are intended for businesses and professionals. We do not knowingly collect information from individuals under the age of 18.`,
  },
  {
    title: "7. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.`,
  },
  {
    title: "8. Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact us at ${CONTACT.phoneDisplay} or via our contact page.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-text sm:text-4xl">
          Privacy Policy
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