import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { motion, useReducedMotion } from 'framer-motion';
import { portfolio } from '../data/portfolio';

function ProfileVisual() {
  const profilePhoto =
    portfolio.identity.photo || '/rohullah-profile.jpg';

  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Background glow */}
      <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-8 top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -left-10 bottom-16 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Decorative background grid */}
      <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Main profile card */}
      <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-glow sm:p-4">
        <div className="relative overflow-hidden rounded-[1.55rem] bg-slate-900">
          <img
            src={profilePhoto}
            alt={`${portfolio.identity.name} — ${portfolio.identity.role}`}
            className="aspect-[4/5] w-full object-cover object-top"
          />

          {/* Image overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for projects
          </div>

          {/* Name and role */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              {portfolio.identity.name}
            </p>

            <p className="mt-1 text-sm font-semibold text-cyan-300 sm:text-base">
              {portfolio.identity.role}
            </p>

            <p className="mt-3 flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
              <MapPin size={15} className="text-cyan-300" />
              Kabul, Afghanistan · Available worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Floating technology card */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="absolute -left-5 top-28 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/85 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-left-12"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
          <Code2 size={19} />
        </span>

        <div>
          <p className="text-xs font-bold text-white">
            Full-Stack Development
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Reliable business systems
          </p>
        </div>
      </motion.div>

      {/* Floating database card */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -right-4 top-1/2 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/85 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-right-12"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
          <Database size={19} />
        </span>

        <div>
          <p className="text-xs font-bold text-white">
            SQL Server
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Accurate data solutions
          </p>
        </div>
      </motion.div>

      {/* Floating secure systems card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-emerald-300/15 bg-slate-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
      >
        <ShieldCheck size={18} className="text-emerald-300" />

        <div>
          <p className="text-xs font-bold text-white">
            Enterprise & Government Systems
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Secure, stable and maintainable
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-screen lg:pb-28 lg:pt-40"
    >
      {/* Large background circle */}
      <div className="absolute left-1/2 top-20 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-cyan-400/10 opacity-50" />

      <div className="container-shell grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Hero content */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.65,
          }}
        >
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            {portfolio.identity.availability}
          </div>

          {/* Small heading */}
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles size={16} />
            Enterprise-minded development
          </p>

          {/* Main heading */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-gradient">
              {portfolio.identity.headline}
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {portfolio.identity.subheadline}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              View My Work
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Start a Project
              <BriefcaseBusiness size={18} />
            </a>
          </div>

          {/* Services highlights */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {[
              'Enterprise applications',
              'Legacy modernization',
              'Database solutions',
            ].map((item) => (
              <span
                className="flex items-center gap-2"
                key={item}
              >
                <CheckCircle2
                  size={15}
                  className="text-cyan-300"
                />

                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.96,
                }
          }
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="pb-6 sm:pb-10"
        >
          <ProfileVisual />
        </motion.div>
      </div>
    </section>
  );
}
