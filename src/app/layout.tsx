import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/shared/FloatingActions";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = "https://divinepaylocker.in";
const SITE_NAME = "Divine Pay Locker";
const SITE_TITLE =
  "Divine Pay Locker | EMI Locker App & Mobile Device Locking Software India";
const SITE_DESC =
  "Divine Pay Locker is an EMI locker and mobile device management (MDM) solution. Remotely lock phones, track devices, and protect your EMI mobile sales. Based in Indore, serving all India.";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    "Divine Pay Locker",
    "Divine Locker",
    "Pay Locker",
    "EMI Locker",
    "EMI Locker App",
    "Mobile Locker App",
    "EMI Mobile Lock",
    "Remote Mobile Lock",
    "Android MDM India",
    "EMI Locker Indore",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "Brilliant Secure Infosoft LLP" }],
  creator: "Brilliant Secure Infosoft LLP",
  publisher: "Brilliant Secure Infosoft LLP",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divine Pay Locker - EMI Locker App & Mobile Device Locking Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.png"],
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
      <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}