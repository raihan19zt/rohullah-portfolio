import { ArrowUpRight, Eye, Code2, LockKeyhole } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function ProjectVisual({ project, index }) {
  return (
    <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <div className={`absolute inset-0 opacity-80 ${index % 2 === 0 ? 'bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.17),transparent_42%)]' : 'bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.17),transparent_42%)]'}`} />
      <div className="relative h-full rounded-xl border border-white/10 bg-slate-950/80 p-4">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" /></div><span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Project preview</span></div>
        <div className="grid grid-cols-[0.65fr_1.35fr] gap-3">
          <div className="space-y-2">{[1,2,3,4,5].map((item) => <div key={item} className={`h-8 rounded-lg border border-white/5 ${item === 2 ? 'bg-cyan-400/10' : 'bg-white/[0.035]'}`} />)}</div>
          <div><div className="mb-3 h-20 rounded-xl border border-cyan-300/10 bg-gradient-to-br from-cyan-300/10 to-blue-500/5" /><div className="grid grid-cols-2 gap-2">{[1,2,3,4].map((item) => <div key={item} className="h-12 rounded-lg border border-white/5 bg-white/[0.035]" />)}</div><div className="mt-2 h-12 rounded-lg border border-white/5 bg-white/[0.035]" /></div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow="Featured projects" title="Systems designed around workflows, users, and dependable operations." copy="These case-study summaries protect confidential information while showing the type of technical responsibility, system thinking, and business problems I handle." />
        <div className="mt-12 space-y-6">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="glass-card overflow-hidden p-4 sm:p-6">
                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <ProjectVisual project={project} index={index} />
                  <div className="p-2 sm:p-4">
                    <div className="flex flex-wrap items-center gap-3"><span className="eyebrow mb-0">{project.eyebrow}</span>{project.confidential ? <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/15 bg-amber-300/10 px-3 py-1 text-xs text-amber-200"><LockKeyhole size={12} /> Confidential details protected</span> : null}</div>
                    <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3><p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3"><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-300">Problem</p><p className="mt-2 text-sm leading-6 text-slate-400">{project.problem}</p></div><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-300">Solution</p><p className="mt-2 text-sm leading-6 text-slate-400">{project.solution}</p></div><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-300">Outcome</p><p className="mt-2 text-sm leading-6 text-slate-400">{project.outcome}</p></div></div>
                    <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">{item}</span>)}</div>
                    <div className="mt-7 flex flex-wrap gap-3"><a href={project.links.caseStudy} className="primary-button">View Case Study <ArrowUpRight size={16} /></a>{project.links.live ? <a href={project.links.live} className="secondary-button">Live Demo <Eye size={16} /></a> : null}{project.links.source ? <a href={project.links.source} className="secondary-button">Source Code <Code2 size={16} /></a> : null}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
