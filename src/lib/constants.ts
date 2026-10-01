export const SITE = {
  name: "Divine pay locker",
  company: "Divine pay locker",
  tagline: "Enterprise Device Security & Mobile Device Management",
  url: "https://brilliantlocker.example.com", // apna final domain baad me daal dena
};

export const CONTACT = {
  phone: "9755655975",
  phoneDisplay: "+91 97556 55975",
  phoneHref: "tel:+919755655975",
  whatsappNumber: "919755655975",
  whatsappHref: "https://wa.me/919755655975",
  email: "", // agar business email ho to yahan daal dena
  address: {
    line1: "Ash-12, Bapat Square",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    full: "Ash-12, Bapat Square, Indore, Madhya Pradesh, India",
  },
  map: {
    lat: 22.755351,
    lng: 75.8798535,
    embedUrl:
      "https://www.google.com/maps?q=22.755351,75.8798535&hl=en&z=17&output=embed",
    directionsUrl:
      "https://www.google.com/maps/place/Blacksof/@22.7553535,75.878566,18z/data=!3m1!4b1!4m6!3m5!1s0x396303e8f8a03c4b:0xf2d4ece65f7b392f!8m2!3d22.755351!4d75.8798535",
  },
};

export function buildWhatsappMessage(data: {
  name: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}) {
  const lines = [
    `Naya inquiry — ${SITE.name} website se`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.company ? `Company: ${data.company}` : null,
    data.service ? `Service: ${data.service}` : null,
    `Message: ${data.message}`,
  ].filter(Boolean);

  return encodeURIComponent(lines.join("\n"));
}