import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbs: Crumb[];
}

export const PageHero = ({ eyebrow, title, description, crumbs }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="container-x relative pt-36 pb-20 md:pt-40 md:pb-28">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 animate-fade-up">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-paper/60">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={i} className="inline-flex items-center gap-1.5">
                  {c.to && !last ? (
                    <Link to={c.to} className="rounded-full px-2 py-1 transition-colors hover:bg-paper/10 hover:text-paper">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="rounded-full bg-paper/10 px-2 py-1 text-paper">{c.label}</span>
                  )}
                  {!last && <ChevronRight className="h-3.5 w-3.5 text-paper/30" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="max-w-4xl">
          <span className="chip-dark mb-6 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            {eyebrow}
          </span>
          <h1
            className="font-display text-4xl font-bold leading-[1.0] tracking-tight text-balance md:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            {title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
