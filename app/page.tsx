import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Features from "@/components/Features";
import Value from "@/components/Value";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Business from "@/components/Business";
import Subscription from "@/components/Subscription";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import LegacyScripts from "@/components/LegacyScripts";
import { jsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
      <IconSprite />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <Value />
        <HowItWorks />
        <Plans />
        <Business />
        <Subscription />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <LegacyScripts />
    </>
  );
}
