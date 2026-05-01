import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { WhyChoose } from "@/components/site/WhyChoose";

const Services = () => (
  <PageShell
    title="Services — EWAG Digital Services"
    description="Premium websites, AI content & automation systems built to grow your business."
  >
    <PageHero
      eyebrow="What we offer"
      title={
        <>
          Services that <span className="bg-gradient-brand bg-clip-text text-transparent">drive growth</span>.
        </>
      }
      description="Premium websites, AI content and automation systems — engineered to bring customers to your business automatically."
      crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
    />
    <WhatWeDo />
    <ServicesGrid />
    <HowWeHelp />
    <WhyChoose />
  </PageShell>
);

export default Services;
