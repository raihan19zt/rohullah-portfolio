import { ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Database, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolio } from '../data/portfolio';

function DashboardVisual() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-12 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="glass-card relative overflow-hidden p-3 shadow-glow">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-3">
          <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Production workspace</span>
        </div>
        <div className="grid gap-3 p-3 sm:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300"><Code2 size={20} /></span>
              <div><p className="text-sm font-semibold text-white">System modules</p><p className="text-xs text-slate-500">Stable and maintainable</p></div>
            </div>
            {['Registration workflow', 'Role-based approvals', 'Document verification', 'Licensing records'].map((item, index) => (
              <div key={item} className="mb-2.5 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.035] p-2.5 text-xs text-slate-300">
                <CheckCircle2 size={14} className={index < 3 ? 'text-emerald-400' : 'text-cyan-300'} /> {item}
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] p-4"><Database className="mb-3 text-cyan-300" size={20} /><p className="text-lg font-bold text-white">SQL Server</p><p className="mt-1 text-xs text-slate-400">Accurate data operations</p></div>
              <div className="rounded-xl border border-violet-400/15 bg-violet-400/[0.07] p-4"><ShieldCheck className="mb-3 text-violet-300" size={20} /><p className="text-lg font-bold text-white">Secure roles</p><p className="mt-1 text-xs text-slate-400">Controlled access</p></div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-semibold text-white">Workflow health</p><p className="text-xs text-slate-500">Illustrative interface</p></div><span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">Operational</span></div>
              <div className="flex h-28 items-end gap-2">
                {[35, 58, 42, 74, 67, 88, 78, 95].map((height, index) => <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-blue-600/60 to-cyan-300/80" style={{ height: `${height}%` }} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:min-h-screen lg:pb-24 lg:pt-40">
      <div className="absolute left-1/2 top-20 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-cyan-400/10 opacity-50" />
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            {portfolio.identity.availability}
          </div>
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300"><Sparkles size={16} /> Enterprise-minded development</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-gradient">{portfolio.identity.headline}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{portfolio.identity.subheadline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">View My Work <ArrowRight size={18} /></a>
            <a href="#contact" className="secondary-button">Start a Project <BriefcaseBusiness size={18} /></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {['Enterprise applications', 'Legacy modernization', 'Database solutions'].map((item) => <span className="flex items-center gap-2" key={item}><CheckCircle2 size={15} className="text-cyan-300" />{item}</span>)}
          </div>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={reduceMotion ? {} : { opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <DashboardVisual />
        </motion.div>
      </div>
    </section>
  );
}
