import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-slate-950/80 shadow-lg shadow-black/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
        <img
  src="/rohullah-profile.jpg"
  alt="Rohullah Raihan"
  className="h-10 w-10 rounded-xl border border-white/15 object-cover object-top shadow-lg"
/>
          <span>
            <span className="block text-sm font-bold text-white">{portfolio.identity.name}</span>
            <span className="block text-xs text-slate-400">{portfolio.identity.shortRole}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {portfolio.navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a href="#contact" className="primary-button px-4 py-2.5">Hire Me <ArrowUpRight size={16} /></a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 pb-6 backdrop-blur-xl xl:hidden">
          <div className="container-shell grid gap-1 px-0 pt-4">
            {portfolio.navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-slate-200 hover:bg-white/[0.06]">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="primary-button mt-3">Hire Me <ArrowUpRight size={16} /></a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
