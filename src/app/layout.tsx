import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/shared/FloatingActions";
import { SITE } from "@/lib/constants";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Brilliant Locker by BRILLIANT SECURE INFOSOFT LLP delivers enterprise-grade Android & Apple MDM, remote device locking, GPS tracking, and remote data wipe for secure device fleet management.",
  keywords: ["MDM", "Mobile Device Management", "Android MDM", "Apple MDM", "remote device lock", "device tracking", "Brilliant Locker"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Enterprise-grade device security and MDM solutions — remote locking, tracking, and fleet management.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Enterprise-grade device security and MDM solutions — remote locking, tracking, and fleet management.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}