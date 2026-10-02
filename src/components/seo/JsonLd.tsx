const SITE_URL = "https://divinepaylocker.in";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Divine Pay Locker",
  alternateName: ["Divine Locker", "DivinePay Locker"],
  legalName: "Brilliant Secure Infosoft LLP",
  url: SITE_URL,
  description:
    "Divine Pay Locker is an EMI locker and mobile device management (MDM) solution for remote mobile locking, device tracking and EMI device protection.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ash-12, Bapat Square",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.755351,
    longitude: 75.8798535,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9755655975",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Divine Pay Locker",
  alternateName: ["Divine Locker", "DivinePay Locker"],
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}