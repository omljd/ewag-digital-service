import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Industries } from "@/components/site/Industries";
import { Marquee } from "@/components/site/Marquee";

const IndustriesPage = () => (
  <PageShell
    title="Industries — EWAG Digital Services"
    description="We build digital systems for clinics, salons, real estate, e-commerce and more."
  >
    <PageHero
      eyebrow="Industries we serve"
      title={
        <>
          Built for <span className="bg-gradient-brand bg-clip-text text-transparent">every industry</span>.
        </>
      }
      description="Clinics, real estate, coaching, local businesses, startups and consultants — we tailor every system to how leads behave in your industry."
      crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
    />
    <Industries />
    <Marquee />
  </PageShell>
);

export default IndustriesPage;
