import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <CTASection />
    </>
  );
}