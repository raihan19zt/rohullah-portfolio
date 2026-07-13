import { ArrowRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function WhyHireMe() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal><div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Why hire me" title="A developer who understands both code and operational consequences." copy="The strongest technical solution is the one that fits the business, protects stability, and remains supportable after launch." /><a href="#contact" className="primary-button mt-8">Request a Consultation <ArrowRight size={17} /></a></div></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">{portfolio.reasons.map((reason, index) => { const Icon = reason.icon; return <Reveal key={reason.title} delay={(index % 2) * 0.05}><article className="glass-card h-full p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon size={21} /></span><h3 className="mt-5 font-bold text-white">{reason.title}</h3><p className="mt-2 text-sm leading-7 text-slate-400">{reason.text}</p></article></Reveal>; })}</div>
        </div>
      </div>
    </section>
  );
}
