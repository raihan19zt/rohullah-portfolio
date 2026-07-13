import { Quote } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-space border-y border-white/10 bg-slate-950/35">
      <div className="container-shell">
        <SectionHeading eyebrow="Testimonials" title="Trust is stronger when it comes from real people." copy="These cards are intentionally marked as placeholders. Replace them with genuine, approved feedback before publishing." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">{portfolio.testimonials.map((item, index) => <Reveal key={index} delay={index * 0.06}><article className="glass-card h-full p-6"><div className="flex items-center justify-between"><Quote className="text-cyan-300" /><span className="rounded-full border border-amber-300/15 bg-amber-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200">Placeholder—not a real testimonial</span></div><blockquote className="mt-7 text-base leading-8 text-slate-300">“{item.quote}”</blockquote><div className="mt-7 border-t border-white/10 pt-5"><p className="font-semibold text-white">{item.name}</p><p className="mt-1 text-sm text-slate-500">{item.role}</p></div></article></Reveal>)}</div>
      </div>
    </section>
  );
}
