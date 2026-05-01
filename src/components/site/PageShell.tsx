import { ReactNode, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyWhatsApp } from "@/components/site/StickyWhatsApp";

interface PageShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const PageShell = ({ title, description, children }: PageShellProps) => {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
    window.scrollTo({ top: 0 });
  }, [title, description]);

  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <div>{children}</div>
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};
