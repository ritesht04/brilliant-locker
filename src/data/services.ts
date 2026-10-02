export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: "smartphone" | "apple" | "shield-alert" | "layout-dashboard";
  features: string[];
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "emi-mobile-lock",
    title: "EMI Mobile Lock",
    shortDescription:
      "Divine Pay Locker EMI locker app to remotely lock and protect EMI-financed mobile phones.",
    description:
      "Divine Pay Locker is an EMI locker solution for mobile retailers and finance partners. Remotely lock a device, track its location, and protect your EMI sales from default and device misuse, all from one dashboard.",
    icon: "shield-alert",
    features: [
      "Remote mobile lock and unlock",
      "GPS device tracking",
      "Remote data wipe",
      "App blacklisting",
      "Bulk device dashboard",
      "Android EMI locker app",
    ],
    featured: true,
  },
  {
    slug: "android-development",
    title: "Android Development",
    shortDescription:
      "Native and cross-platform Android apps built for performance and scale.",
    description:
      "We build native Kotlin/Java Android applications along with secure device-management integrations — from consumer apps to enterprise fleet-management tools.",
    icon: "smartphone",
    features: [
      "Native Kotlin & Java development",
      "Play Store deployment",
      "Offline-first architecture",
      "Push notifications & analytics",
    ],
    featured: true,
  },
  {
    slug: "ios-development",
    title: "iOS Development",
    shortDescription:
      "Swift & SwiftUI apps for iPhone and iPad, built to Apple's highest standards.",
    description:
      "From SwiftUI interfaces to Core Data and CloudKit integration, we deliver polished iOS applications ready for App Store submission.",
    icon: "apple",
    features: [
      "Swift & SwiftUI development",
      "App Store submission support",
      "Core Data & CloudKit integration",
      "iPhone & iPad optimized",
    ],
    featured: true,
  },
  {
    slug: "apple-mdm",
    title: "Apple MDM",
    shortDescription:
      "Enterprise-grade management for iPhone and iPad fleets via Apple Business Manager.",
    description:
      "Zero-touch DEP enrollment, configuration profiles, and compliance enforcement — built for organizations that need consistent security across every Apple device.",
    icon: "shield-alert",
    features: [
      "Apple Business Manager / DEP enrollment",
      "Configuration profiles & policies",
      "Remote wipe & lock",
      "Compliance enforcement",
    ],
    featured: true,
  },
  {
    slug: "android-mdm",
    title: "Android MDM",
    shortDescription:
      "Complete Android Enterprise device management — enrollment, policies, and control at scale.",
    description:
      "Zero-touch enrollment, work profiles, kiosk/lockdown modes, and centralized policy control across your entire Android device fleet.",
    icon: "layout-dashboard",
    features: [
      "Android Enterprise enrollment",
      "Work profile / COPE / COBO support",
      "Kiosk & lockdown mode",
      "Bulk policy deployment",
    ],
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);