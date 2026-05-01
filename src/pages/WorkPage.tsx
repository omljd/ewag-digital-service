import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Work } from "@/components/site/Work";
import { Marquee } from "@/components/site/Marquee";

const WorkPage = () => (
  <PageShell
    title="Work — EWAG Digital Services"
    description="Selected work and case studies from EWAG Digital Services."
  >
    <PageHero
      eyebrow="Selected work"
      title={
        <>
          Real systems. <span className="bg-gradient-brand bg-clip-text text-transparent">Real results.</span>
        </>
      }
      description="A look at the websites, funnels and automation systems we've shipped — and the measurable lift they delivered."
      crumbs={[{ label: "Home", to: "/" }, { label: "Work" }]}
    />
    <Work />
    <Marquee />
  </PageShell>
);

export default WorkPage;
