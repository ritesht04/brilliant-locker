import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function EmiLockerInfo() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="What is an EMI Locker?"
          title="EMI Locker App for Mobile Retailers"
        />
        <div className="mt-8 flex flex-col gap-4 text-left text-base leading-relaxed text-text-muted">
          <p>
            An EMI locker is software installed on a phone sold on EMI. It lets
            the seller or finance partner lock the device remotely if
            payments are missed, and unlock it once the payment is cleared.
          </p>
          <p>
            Divine Pay Locker is our EMI locker and pay locker solution. From a
            single dashboard you can lock or unlock devices, track their
            location with GPS, blacklist apps, and wipe data remotely if a
            device is lost. It is built for mobile retailers and businesses in
            Indore and across India.
          </p>
          <p>
            Along with the EMI locker app, we also provide Android MDM and
            Apple MDM so that businesses can manage their complete device fleet
            in one place.
          </p>
        </div>
      </Container>
    </section>
  );
}