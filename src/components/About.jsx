import { CheckCircle2, Database, ShieldCheck, Workflow } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="glass-card relative overflow-hidden p-7 sm:p-9">
              <div className="mb-8 flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-600 text-xl font-black text-slate-950">RR</span><div><p className="font-bold text-white">{portfolio.identity.name}</p><p className="text-sm text-slate-400">{portfolio.identity.role}</p></div></div>
              <p className="text-xl font-semibold leading-8 text-white">“Reliable software is not only about writing code. It is about understanding the workflow, protecting the data, and making the system easier to operate.”</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[['Workflow thinking', Workflow], ['Data accuracy', Database], ['Controlled access', ShieldCheck], ['Stable delivery', CheckCircle2]].map(([label, Icon]) => <div key={label} className="rounded-xl border border-white/10 bg-slate-950/50 p-4"><Icon size={20} className="mb-3 text-cyan-300" /><p className="text-sm font-semibold text-slate-200">{label}</p></div>)}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="About me" title="A practical developer for systems that cannot afford careless decisions." copy={portfolio.identity.intro} />
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
            <p>I work on real-world applications where reliability, accuracy, security, and maintainability are essential—not optional. My experience includes complex codebases, database-driven workflows, role-based systems, document processes, reporting, and production troubleshooting.</p>
            <p>I am comfortable entering an existing system, understanding how it actually works, identifying the root cause of problems, and improving it without breaking the operations people already depend on. That includes legacy modernization, SQL Server work, interface improvements, deployment support, and ongoing maintenance.</p>
            <p>My approach is straightforward: understand the business need, communicate clearly, build the right level of solution, and leave the codebase more stable and maintainable than I found it.</p>
          </div>
          <a href="#contact" className="primary-button mt-8">Discuss Your Project</a>
        </Reveal>
      </div>
    </section>
  );
}
