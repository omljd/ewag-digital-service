import { ArrowUpRight, Globe, Layout, Sparkles, MessageCircle, Magnet, Database, Megaphone, Wrench } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Fast, responsive business websites with modern UI." },
  { icon: Layout, title: "Landing Pages & Funnels", desc: "Campaign pages and offer funnels engineered to convert." },
  { icon: Sparkles, title: "AI Content Creation", desc: "AI-powered copy, creatives and content strategy." },
  { icon: Megaphone, title: "Social Media Creative", desc: "Ad creatives, Instagram visuals and campaign assets." },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Auto-replies, qualification flows and follow-ups." },
  { icon: Magnet, title: "Lead Generation Systems", desc: "Forms, capture journeys and conversion architecture." },
  { icon: Database, title: "CRM & Lead Tracking", desc: "Inquiry tracking, pipelines and follow-up structure." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing updates, performance care and growth support." },
];

export const ServicesGrid = () => {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mb-5">Services</span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl">
            Everything your business needs to <span className="text-brand">grow online</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#contact"
              className="group relative flex flex-col bg-paper p-7 transition-colors hover:bg-paper-muted"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-paper transition-colors group-hover:bg-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{desc}</p>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-ink/30 transition-all group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
