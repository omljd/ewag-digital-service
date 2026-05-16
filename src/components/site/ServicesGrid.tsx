import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import * as LucideIcons from "lucide-react";

export const ServicesGrid = () => {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="container-x">
        <div className="mx-auto text-center px-4 md:px-6 lg:px-8">
          <span className="chip mb-5">Services</span>
          <h2 className="font-display text-xl font-bold leading-[1.1] text-balance md:text-3xl lg:text-5xl">
            Everything your business needs to <span className="text-brand">grow online</span>.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon, title, desc }) => {
            const Icon = (LucideIcons as any)[icon] || LucideIcons.Globe;
            return (
              <a
                key={title}
                href="#contact"
                className="group relative flex flex-col bg-paper p-7 transition-colors hover:bg-paper-muted"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-paper border border-ink/10 text-ink transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{desc}</p>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-ink/30 transition-all group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
