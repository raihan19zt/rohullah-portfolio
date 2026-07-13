import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="services" className="section-space border-y border-white/10 bg-slate-950/35">
      <div className="container-shell">
        <SectionHeading eyebrow="Services" title="Development support connected to business outcomes." copy="From new systems to difficult legacy fixes, every service is focused on reducing friction, improving reliability, and helping your team work more effectively." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.05}>
                <article className="group glass-card h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.065]">
                  <div className="mb-5 flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300"><Icon size={22} /></span><ArrowUpRight size={18} className="text-slate-600 transition group-hover:text-cyan-300" /></div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
