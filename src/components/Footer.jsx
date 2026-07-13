import { ArrowUp, BriefcaseBusiness, Code2, Mail, MessageCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 font-black text-slate-950">RR</span><div><p className="font-bold text-white">{portfolio.identity.name}</p><p className="text-sm text-slate-500">{portfolio.identity.role}</p></div></div><p className="mt-4 max-w-md text-sm leading-6 text-slate-500">Reliable web applications, enterprise workflows, database solutions, legacy modernization, and long-term technical support.</p></div>
          <div><p className="text-sm font-semibold text-white">Quick links</p><div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">{portfolio.navigation.slice(0, 8).map(([label,id]) => <a key={id} href={`#${id}`} className="text-sm text-slate-500 hover:text-cyan-300">{label}</a>)}</div></div>
          <div><p className="text-sm font-semibold text-white">Connect</p><div className="mt-4 flex gap-2">{[[portfolio.links.email,Mail,'Email'],[portfolio.links.linkedin,BriefcaseBusiness,'LinkedIn'],[portfolio.links.github,Code2,'GitHub'],[portfolio.links.whatsapp,MessageCircle,'WhatsApp']].map(([href,Icon,label]) => <a href={href} key={label} aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan-300/25 hover:text-cyan-300"><Icon size={17} /></a>)}</div></div>
        </div>
        <div className="mt-9 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} {portfolio.identity.name}. All rights reserved.</p><a href="#home" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300">Back to top <ArrowUp size={14} /></a></div>
      </div>
    </footer>
  );
}
