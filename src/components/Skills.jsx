import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-space border-y border-white/10 bg-slate-950/35">
      <div className="container-shell">
        <SectionHeading eyebrow="Technical capabilities" title="A stack shaped by real application maintenance and delivery." copy="No arbitrary percentage bars—just the technologies and workflow capabilities I use to solve practical development problems." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.skills.map((group, index) => {
            const Icon = group.icon;
            return <Reveal key={group.title} delay={index * 0.06}><div className="glass-card h-full p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/15 to-violet-400/10 text-cyan-300"><Icon size={23} /></span><h3 className="mt-5 text-xl font-bold text-white">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">{item}</span>)}</div></div></Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
