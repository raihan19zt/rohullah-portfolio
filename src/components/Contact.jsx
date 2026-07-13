import { useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const initialForm = {
  name: '',
  email: '',
  company: '',
  type: '',
  budget: '',
  message: '',
};

const contactDetails = {
  email: 'rohullahraihan1@gmail.com',
  phone: '+93 772 659 329',
  location: 'Kabul, Afghanistan',

  links: {
    email: 'mailto:rohullahraihan1@gmail.com',
    linkedin:
      'https://www.linkedin.com/in/rohullah-raihan-a84475222',
    github: 'https://github.com/raihan19zt',
    whatsapp: 'https://wa.me/93772659329',
  },
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const update = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }));
    }

    if (status) {
      setStatus('');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.type) {
      nextErrors.type = 'Please choose a project type.';
    }

    if (form.message.trim().length < 20) {
      nextErrors.message =
        'Please provide at least 20 characters about the project.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('');
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio project inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company || 'Not provided'}`,
        `Project type: ${form.type}`,
        `Estimated budget: ${form.budget || 'Not decided'}`,
        '',
        'Project description:',
        form.message,
      ].join('\n')
    );

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;

    setStatus(
      'Your email application should now open with the project details prepared.'
    );
  };

  const socialLinks = [
    {
      href: contactDetails.links.email,
      icon: Mail,
      label: 'Email',
      external: false,
    },
    {
      href: contactDetails.links.linkedin,
      icon: BriefcaseBusiness,
      label: 'LinkedIn',
      external: true,
    },
    {
      href: contactDetails.links.github,
      icon: Code2,
      label: 'GitHub',
      external: true,
    },
    {
      href: contactDetails.links.whatsapp,
      icon: MessageCircle,
      label: 'WhatsApp',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section-space border-t border-white/10 bg-slate-950/35"
    >
      <div className="container-shell">
        <div className="overflow-hidden rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_35%),rgba(255,255,255,0.035)] p-6 shadow-glow sm:p-9 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Start a conversation"
                title="Have a Project in Mind? Let’s Build It Properly."
                copy="Tell me what you are building, improving, or trying to fix. I will focus on the real requirements, technical risks, and the most practical next step."
              />

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <a
                  href={contactDetails.links.email}
                  className="flex items-center gap-3 transition hover:text-cyan-200"
                >
                  <Mail
                    className="shrink-0 text-cyan-300"
                    size={18}
                  />

                  <span>{contactDetails.email}</span>
                </a>

                <a
                  href={contactDetails.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition hover:text-cyan-200"
                >
                  <Phone
                    className="shrink-0 text-cyan-300"
                    size={18}
                  />

                  <span>{contactDetails.phone}</span>
                </a>

                <p className="flex items-center gap-3">
                  <MapPin
                    className="shrink-0 text-cyan-300"
                    size={18}
                  />

                  <span>{contactDetails.location}</span>
                </p>

                <p className="flex items-center gap-3">
                  <CheckCircle2
                    className="shrink-0 text-emerald-300"
                    size={18}
                  />

                  <span>
                    I usually respond within one business day.
                  </span>
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map(
                  ({
                    href,
                    icon: Icon,
                    label,
                    external,
                  }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="secondary-button px-4 py-2.5"
                      aria-label={`Contact Rohullah through ${label}`}
                    >
                      <Icon size={17} />
                      {label}
                    </a>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={submit}
                noValidate
                className="glass-card p-5 sm:p-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    error={errors.name}
                    placeholder="Your name"
                    autoComplete="name"
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    error={errors.email}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />

                  <Field
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={update}
                    placeholder="Company or organization"
                    autoComplete="organization"
                  />

                  <SelectField
                    label="Project type"
                    name="type"
                    value={form.type}
                    onChange={update}
                    error={errors.type}
                    options={[
                      'Custom web application',
                      'Existing system improvement',
                      'ASP.NET / SQL Server',
                      'Laravel / React',
                      'Database work',
                      'Bug fixing / troubleshooting',
                      'Maintenance and support',
                      'Other',
                    ]}
                  />

                  <SelectField
                    label="Estimated budget"
                    name="budget"
                    value={form.budget}
                    onChange={update}
                    options={[
                      'Not decided yet',
                      'Under $1,000',
                      '$1,000–$3,000',
                      '$3,000–$10,000',
                      '$10,000+',
                      'Ongoing contract',
                    ]}
                  />

                  <div className="sm:col-span-2">
                    <label
                      className="mb-2 block text-sm font-medium text-slate-200"
                      htmlFor="message"
                    >
                      Project description
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={update}
                      placeholder="Describe your goals, current system, main problem, desired result, and any important deadline."
                      className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-300/25 ${
                        errors.message
                          ? 'border-rose-400/60'
                          : 'border-white/10 focus:border-cyan-300/40'
                      }`}
                    />

                    {errors.message ? (
                      <p className="mt-2 text-xs text-rose-300">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className="primary-button mt-6 w-full sm:w-auto"
                >
                  Send Project Inquiry
                  <ArrowRight size={17} />
                </button>

                {status ? (
                  <p className="mt-4 rounded-xl border border-emerald-300/15 bg-emerald-300/10 p-3 text-xs leading-6 text-emerald-100">
                    {status}
                  </p>
                ) : null}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, ...props }) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-slate-200"
        htmlFor={props.name}
      >
        {label}
      </label>

      <input
        id={props.name}
        {...props}
        className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-300/25 ${
          error
            ? 'border-rose-400/60'
            : 'border-white/10 focus:border-cyan-300/40'
        }`}
      />

      {error ? (
        <p className="mt-2 text-xs text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  options,
  error,
  ...props
}) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-slate-200"
        htmlFor={props.name}
      >
        {label}
      </label>

      <select
        id={props.name}
        {...props}
        className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-cyan-300/25 ${
          error
            ? 'border-rose-400/60'
            : 'border-white/10 focus:border-cyan-300/40'
        }`}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error ? (
        <p className="mt-2 text-xs text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
