import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import { StickyWhatsApp } from "@/components/site/StickyWhatsApp";

const ContactPage = () => (
  <PageShell
    title="Contact — EWAG Digital Services"
    description="Book a free consultation. Let's automate your growth."
  >
    <div className="relative pt-24 md:pt-32 bg-background">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <Contact hideBackground={true} />
    </div>
    <StickyWhatsApp />
  </PageShell>
);

export default ContactPage;
