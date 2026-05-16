import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Work } from "@/components/site/Work";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyWhatsApp } from "@/components/site/StickyWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "EWAG Digital Services — Automate. Generate. Grow.";
    const desc = "Premium websites, AI content & automation systems that bring customers to your business automatically.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <Hero />
      <Marquee />
      <WhatWeDo />
      <HowWeHelp />
      <ServicesGrid />
      <Industries />
      <Process />
      <WhyChoose />
      <Work />
      <Contact hideBackground={true} />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;
