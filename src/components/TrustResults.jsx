import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';

export default function TrustResults() {
  return (
    <section className="border-y border-white/10 bg-slate-950/35 py-14">
      <div className="container-shell">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Built for real operations</p><h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Technical skill backed by production responsibility.</h2></div>
            <a href="#experience" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">See experience <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.trustSignals.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.055]">
                <p className="font-semibold text-white">{item.title}</p><p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.editableStats.map((stat) => (
            <div className="rounded-2xl border border-dashed border-white/15 bg-slate-950/40 p-5" key={stat.label}>
              <p className="text-xl font-bold text-cyan-200">{stat.value}</p><p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-600">Statistics are intentionally editable placeholders. Replace them only with accurate, verifiable numbers.</p>
      </div>
    </section>
  );
}
