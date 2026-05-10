import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-footer py-16 text-ink">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 lg:gap-16">
          <div className="sm:col-span-2 md:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-paper font-display font-bold text-lg">E</span>
              <span className="font-display text-xl font-bold tracking-tight">EWAG<span className="text-brand">.</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-base text-ink/60 leading-relaxed">
              Websites · AI Content · Automation. We build intelligent systems that bring
              customers to your business automatically.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://wa.me/8766910241" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-paper">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <FooterCol 
            title="Pages" 
            items={[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Industries", to: "/industries" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Contact", to: "/contact" }
            ]} 
          />
          <FooterCol 
            title="Services" 
            items={[
              { label: "Websites", to: "/services" },
              { label: "Landing Pages", to: "/services" },
              { label: "AI Content", to: "/services" },
              { label: "Automation", to: "/services" },
              { label: "Lead Generation", to: "/services" },
              { label: "CRM Setup", to: "/services" }
            ]} 
          />
          <FooterCol 
            title="Legal" 
            items={[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Refund Policy", to: "/privacy" }
            ]} 
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 text-sm text-ink/50 md:flex-row">
          <p>© {new Date().getFullYear()} EWAG Digital Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="font-medium text-ink/40">Automate. Generate. Grow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30">{title}</h4>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="text-sm font-medium text-ink/60 transition-all hover:translate-x-1 hover:text-brand inline-block">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
