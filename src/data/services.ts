export interface Service {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { id: "1", icon: "Globe", title: "Website Development", desc: "Business websites, corporate pages, service-based websites, responsive design, and modern UI." },
  { id: "2", icon: "Layout", title: "Landing Pages & Funnels", desc: "Campaign pages, offer pages, and lead-generation funnels designed to convert." },
  { id: "3", icon: "Sparkles", title: "AI Content Creation", desc: "AI-assisted content support, marketing content ideas, short-form content strategy, and branded assets." },
  { id: "4", icon: "Megaphone", title: "Social Media Creative", desc: "Instagram creatives, ad creatives, campaign graphics, and promotional visuals." },
  { id: "5", icon: "MessageCircle", title: "WhatsApp Automation", desc: "Instant inquiry handling, auto replies, qualification flow, and follow-up support." },
  { id: "6", icon: "Magnet", title: "Lead Generation Systems", desc: "Contact forms, inquiry systems, funnel-based capture, and conversion journey setup." },
  { id: "7", icon: "Database", title: "CRM & Lead Tracking", desc: "Lead collection sheet or system, inquiry tracking, pipeline visibility, and follow-up structure." },
  { id: "8", icon: "Wrench", title: "Maintenance & Support", desc: "Website updates, content edits, performance checks, and ongoing support." },
];
