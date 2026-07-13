import { CheckCircle2, MapPin } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow="Professional experience" title="Hands-on responsibility for enterprise workflows and production systems." copy="My work combines development, database operations, troubleshooting, modernization, deployment support, and direct understanding of how teams use software every day." />
        <div className="relative mt-12 border-l border-cyan-300/20 pl-7 sm:pl-10">
          {portfolio.experience.map((item) => (
            <Reveal key={item.company}>
              <div className="relative"><span className="absolute -left-[36px] top-7 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.55)] sm:-left-[48px]" /><article className="glass-card p-6 sm:p-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">{item.period}</p><h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3><p className="mt-1 text-lg text-slate-300">{item.company}</p></div><span className="inline-flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> {portfolio.identity.location}</span></div><p className="mt-6 max-w-4xl leading-8 text-slate-300">{item.summary}</p><div className="mt-7 grid gap-3 md:grid-cols-2">{item.highlights.map((highlight) => <div key={highlight} className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-300" /><p className="text-sm leading-6 text-slate-400">{highlight}</p></div>)}</div></article></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
