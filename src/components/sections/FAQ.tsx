import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What is an EMI locker?",
    a: "An EMI locker is software installed on a phone sold on EMI. It allows the seller to lock the device remotely if EMI payments are missed and unlock it after payment.",
  },
  {
    q: "What is Divine Pay Locker?",
    a: "Divine Pay Locker is an EMI locker and mobile device management solution by Brilliant Secure Infosoft LLP, Indore. It offers remote lock, GPS tracking, remote data wipe and a bulk device dashboard.",
  },
  {
    q: "How does the EMI locker app work?",
    a: "The EMI locker app is installed on the customer's phone at the time of sale. The retailer then manages the device from a dashboard and can lock or unlock it remotely.",
  },
  {
    q: "Who can use Divine Pay Locker?",
    a: "Mobile retailers, finance partners and businesses that sell or manage phones on EMI or need to control a fleet of devices.",
  },
  {
    q: "Do you provide Android and Apple MDM?",
    a: "Yes. Along with the EMI locker app we provide Android MDM and Apple MDM for managing business device fleets.",
  },
  {
    q: "How can I get a demo of Divine Pay Locker?",
    a: "Call or WhatsApp us on 9755655975 or use the contact form on this website. Our team in Indore will get back to you.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-border bg-surface-light p-4"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-text sm:text-base">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}