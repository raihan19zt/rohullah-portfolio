import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal><SectionHeading eyebrow="Frequently asked questions" title="Useful answers before we start." copy="A successful project begins with clear expectations about scope, risk, maintenance, communication, and delivery." /></Reveal>
        <div className="space-y-3">{portfolio.faqs.map(([question, answer], index) => { const active = open === index; return <Reveal key={question}><article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"><button type="button" onClick={() => setOpen(active ? -1 : index)} className="flex w-full items-center justify-between gap-5 p-5 text-left text-base font-semibold text-white sm:p-6" aria-expanded={active}><span>{question}</span><ChevronDown className={`shrink-0 text-cyan-300 transition ${active ? 'rotate-180' : ''}`} /></button>{active ? <div className="border-t border-white/8 px-5 pb-6 pt-4 text-sm leading-7 text-slate-400 sm:px-6">{answer}</div> : null}</article></Reveal>; })}</div>
      </div>
    </section>
  );
}
