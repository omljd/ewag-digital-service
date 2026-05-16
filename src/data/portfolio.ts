export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  result: string;
  tools: string;
  link: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "1",
    category: "Websites",
    title: "Cliniqa Wellness",
    description: "Premium healthcare platform with appointment booking and patient management system",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format",
    result: "+312% inquiries in 60 days",
    tools: "Next.js · TypeScript · TailwindCSS · WhatsApp API",
    link: "#"
  },
  {
    id: "2",
    category: "Landing Pages",
    title: "Estate&Co Launch",
    description: "High-converting real estate landing page with lead qualification and CRM integration",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
    result: "1,400 qualified leads at ₹18 CPL",
    tools: "React · Meta Ads · Google Sheets · CRM Integration",
    link: "#"
  },
  {
    id: "3",
    category: "Automation Systems",
    title: "MentorX Admissions",
    description: "Complete student inquiry automation with WhatsApp flows and real-time CRM sync",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    result: "80% inquiries auto-qualified",
    tools: "WhatsApp Business API · Zapier · Node.js · MongoDB",
    link: "#"
  },
  {
    id: "4",
    category: "Creatives",
    title: "UrbanBites Campaign",
    description: "AI-powered content creation and social media campaign management with performance tracking",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format",
    result: "5.2× ROAS on launch ads",
    tools: "AI Content · Reels · Meta Ads · Analytics",
    link: "#"
  },
  {
    id: "5",
    category: "Funnels",
    title: "FashionHub E-commerce",
    description: "Multi-step sales funnel with cart abandonment recovery and email automation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    result: "2.8× conversion rate increase",
    tools: "Shopify · React · Stripe · Klaviyo",
    link: "#"
  },
  {
    id: "6",
    category: "Websites",
    title: "AnalyticsPro Dashboard",
    description: "Real-time business analytics dashboard with custom reporting and data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    result: "45% reduction in reporting time",
    tools: "Vue.js · D3.js · PostgreSQL · REST API",
    link: "#"
  }
];

export const categories = ["All", "Websites", "Landing Pages", "Automation Systems", "Creatives", "Funnels"];
