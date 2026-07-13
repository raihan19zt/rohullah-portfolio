import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section id="process" className="section-space border-y border-white/10 bg-slate-950/35">
      <div className="container-shell">
        <SectionHeading eyebrow="My work process" title="Clear stages, transparent progress, and fewer surprises." copy="Clients receive practical planning, regular communication, maintainable implementation, and a delivery process shaped around risk reduction and long-term use." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.process.map(([number, title, text], index) => <Reveal key={number} delay={(index % 4) * 0.05}><article className="glass-card group h-full p-6 transition hover:border-cyan-300/30"><div className="mb-8 flex items-center justify-between"><span className="text-3xl font-black text-white/15 transition group-hover:text-cyan-300/40">{number}</span><span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" /></div><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{text}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
