import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { WhyChoose } from "@/components/site/WhyChoose";

const ProcessPage = () => (
  <PageShell
    title="Process — EWAG Digital Services"
    description="Our proven 5-step process to design, automate and grow your business online."
  >
    <PageHero
      eyebrow="How we work"
      title={
        <>
          A clear path to a <span className="bg-gradient-brand bg-clip-text text-transparent">growth engine</span>.
        </>
      }
      description="Five focused steps — from understanding your business to automating follow-up and scaling what works."
      crumbs={[{ label: "Home", to: "/" }, { label: "Process" }]}
    />
    <Process />
    <WhyChoose />
  </PageShell>
);

export default ProcessPage;
