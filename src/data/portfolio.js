import {
  AppWindow,
  Blocks,
  BriefcaseBusiness,
  Bug,
  ChartNoAxesCombined,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  Workflow,
  Wrench,
} from 'lucide-react';

export const portfolio = {
  identity: {
    name: 'Rohullah Raihan',
    role: 'Full-Stack Web Developer',
    shortRole: 'Full-Stack Developer',
    email: 'YOUR_EMAIL@example.com',
    phone: 'YOUR_WHATSAPP_NUMBER',
    location: 'Kabul, Afghanistan · Available worldwide',
    availability: 'Available for freelance, remote, and contract projects',
    headline: 'Building Reliable Web Systems That Solve Real Business Problems.',
    subheadline:
      'I design, build, modernize, and maintain secure web applications for organizations that need dependable software, accurate data, and workflows that keep working under real-world pressure.',
    intro:
      'I am a practical, solution-focused full-stack developer with hands-on experience in enterprise systems, government workflows, legacy applications, databases, and production support.',
  },

  links: {
    email: 'mailto:YOUR_EMAIL@example.com',
    linkedin: '#replace-with-linkedin',
    github: '#replace-with-github',
    whatsapp: '#replace-with-whatsapp',
    resume: '#replace-with-resume',
  },

  navigation: [
    ['Home', 'home'],
    ['About', 'about'],
    ['Services', 'services'],
    ['Projects', 'projects'],
    ['Skills', 'skills'],
    ['Experience', 'experience'],
    ['Process', 'process'],
    ['Testimonials', 'testimonials'],
    ['Contact', 'contact'],
  ],

  trustSignals: [
    { title: 'Enterprise systems', text: 'Production applications built around complex operational workflows.' },
    { title: 'Government workflows', text: 'Experience with registration, review, approval, licensing, and reporting.' },
    { title: 'Database-driven work', text: 'SQL Server design, queries, stored procedures, validation, and data quality.' },
    { title: 'Legacy modernization', text: 'Careful improvements that protect existing business-critical functionality.' },
    { title: 'Production support', text: 'Troubleshooting, deployment, maintenance, and issue resolution under pressure.' },
    { title: 'Long-term thinking', text: 'Maintainable code and practical architecture instead of temporary patches.' },
  ],

  editableStats: [
    { value: '[Add years]', label: 'Professional experience' },
    { value: '[Add number]', label: 'Systems or modules delivered' },
    { value: '[Add number]', label: 'Production issues resolved' },
    { value: '[Add number]', label: 'Databases or workflows improved' },
  ],

  services: [
    {
      icon: AppWindow,
      title: 'Custom Web Applications',
      text: 'Purpose-built web systems that fit your exact workflows, reduce manual work, and support future growth.',
    },
    {
      icon: Workflow,
      title: 'Enterprise Systems',
      text: 'Structured applications for registrations, approvals, licensing, document handling, reporting, and role-based operations.',
    },
    {
      icon: ServerCog,
      title: 'ASP.NET & SQL Server',
      text: 'Reliable development and maintenance for business-critical Microsoft-stack applications and databases.',
    },
    {
      icon: Layers3,
      title: 'Laravel & React',
      text: 'Modern web experiences with maintainable backend architecture, reusable interfaces, and API-ready design.',
    },
    {
      icon: RefreshCcw,
      title: 'Legacy Modernization',
      text: 'Improve outdated systems carefully—cleaner code, stronger interfaces, better maintainability, and lower operational risk.',
    },
    {
      icon: Database,
      title: 'Database Optimization',
      text: 'Better schemas, queries, procedures, validation, and reporting so your application stays accurate and responsive.',
    },
    {
      icon: PanelsTopLeft,
      title: 'Admin Dashboards',
      text: 'Clear operational dashboards that help teams manage records, decisions, tasks, and reporting efficiently.',
    },
    {
      icon: Bug,
      title: 'Bug Fixing & Troubleshooting',
      text: 'Root-cause analysis and focused fixes for difficult issues in code, deployment, databases, and production environments.',
    },
    {
      icon: Network,
      title: 'API Development',
      text: 'Secure integrations that connect systems, reduce duplicate work, and keep data moving reliably.',
    },
    {
      icon: LifeBuoy,
      title: 'Maintenance & Support',
      text: 'Ongoing technical support that keeps applications stable, secure, documented, and ready for change.',
    },
  ],

  projects: [
    {
      eyebrow: 'Enterprise platform',
      title: 'Afghanistan Medical Council Management System',
      summary:
        'An enterprise application supporting doctor registration, review workflows, licensing, document management, role-based access, and operational reporting.',
      problem:
        'Multiple teams needed one dependable system to manage sensitive records, approvals, documents, and licensing tasks without losing control of the process.',
      solution:
        'Maintained and improved a structured multi-role platform, strengthened workflows, resolved production issues, modernized interfaces, and improved legacy code safely.',
      outcome:
        'A more maintainable and reliable operational system that supports real organizational workflows while protecting existing functionality.',
      stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
      features: ['Multi-role workflow', 'Doctor registration', 'Approval process', 'Licensing', 'Document verification', 'Reporting'],
      image: '/projects/amc-system.jpg',
      links: { caseStudy: '#contact', live: '', source: '' },
      confidential: true,
    },
    {
      eyebrow: 'Public service portal',
      title: 'Doctor Registration Portal',
      summary:
        'A public-facing workflow where doctors submit personal, professional, and documentary information for administrative review.',
      problem:
        'Applicants needed a clear way to provide complete information and documents while staff required consistent data for review and follow-up.',
      solution:
        'Developed and supported multi-step forms, validation, secure storage, upload workflows, and a user-focused interface connected to administrative processing.',
      outcome:
        'A clearer submission process with more structured data, stronger validation, and smoother movement into the internal review workflow.',
      stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
      features: ['Multi-step forms', 'File uploads', 'Validation', 'Secure storage', 'Responsive UI', 'Review workflow'],
      image: '/projects/registration-portal.jpg',
      links: { caseStudy: '#contact', live: '', source: '' },
      confidential: true,
    },
    {
      eyebrow: 'Operations dashboard',
      title: 'Enterprise Admin Dashboard',
      summary:
        'A role-aware workspace for administrators, quality-control staff, and licensing teams to manage records, decisions, status tracking, and reports.',
      problem:
        'Operational users needed faster access to the right tasks, statuses, records, and actions without navigating fragmented interfaces.',
      solution:
        'Improved dashboard structure, status visibility, role-specific operations, search, data access, and administrative workflows.',
      outcome:
        'More focused daily operations, faster record handling, and clearer visibility across workflow stages.',
      stack: ['C#', 'SQL Server', 'JavaScript', 'Bootstrap', 'Role-based access'],
      features: ['Role dashboards', 'Status tracking', 'Approvals', 'Search', 'Reports', 'Data management'],
      image: '/projects/admin-dashboard.jpg',
      links: { caseStudy: '#contact', live: '', source: '' },
      confidential: true,
    },
    {
      eyebrow: 'Editable project',
      title: 'Custom Business Management System',
      summary:
        'Replace this card with a future client project, private business application, SaaS product, or internal management system.',
      problem: 'Describe the client’s real operational or technical problem here.',
      solution: 'Explain the system, workflow, architecture, or improvement you delivered.',
      outcome: 'Add a real, measurable, non-confidential result when available.',
      stack: ['Replace', 'With', 'Real', 'Technologies'],
      features: ['Feature one', 'Feature two', 'Feature three', 'Feature four'],
      image: '/projects/custom-system.jpg',
      links: { caseStudy: '#contact', live: '', source: '' },
      confidential: false,
    },
  ],

  skills: [
    { title: 'Backend', icon: Code2, items: ['C#', 'ASP.NET Web Forms', 'Laravel', 'PHP', 'REST APIs'] },
    { title: 'Frontend', icon: PanelsTopLeft, items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
    { title: 'Database', icon: Database, items: ['SQL Server', 'Database design', 'Stored procedures', 'Query optimization', 'Data migration'] },
    { title: 'Tools & Workflow', icon: GitBranch, items: ['Git', 'Visual Studio', 'VS Code', 'IIS', 'Deployment', 'Debugging', 'Production support'] },
  ],

  experience: [
    {
      period: 'Current role',
      company: 'Afghanistan Medical Council',
      role: 'Full-Stack Web Developer',
      summary:
        'Developing, maintaining, and improving enterprise applications that support doctor registration, approval workflows, licensing, document management, reporting, and multi-role operations.',
      highlights: [
        'Maintain production systems where data accuracy, stability, and continuity are essential.',
        'Improve legacy ASP.NET Web Forms code while preserving critical business functionality.',
        'Design and troubleshoot SQL Server queries, procedures, relationships, and reporting logic.',
        'Support administrators, quality-control staff, and licensing teams through role-based workflows.',
        'Resolve production issues, modernize interfaces, support deployments, and improve maintainability.',
      ],
    },
  ],

  process: [
    ['01', 'Discovery & requirements', 'Understand the business problem, users, current workflow, constraints, and desired result.'],
    ['02', 'Planning & architecture', 'Define scope, milestones, technical structure, risks, and the most practical delivery path.'],
    ['03', 'UI & database design', 'Shape the user flow, data model, permissions, validation, and operational experience.'],
    ['04', 'Development', 'Build in maintainable stages with clear progress and attention to existing systems.'],
    ['05', 'Testing & QA', 'Test workflows, permissions, data accuracy, edge cases, responsiveness, and production readiness.'],
    ['06', 'Deployment', 'Prepare configuration, backups, release steps, and a controlled launch process.'],
    ['07', 'Maintenance & support', 'Monitor, troubleshoot, improve, document, and support the system after launch.'],
  ],

  reasons: [
    { icon: BriefcaseBusiness, title: 'Real enterprise experience', text: 'I work with production systems, operational users, sensitive records, and business-critical workflows.' },
    { icon: Wrench, title: 'Practical problem-solving', text: 'I focus on the real source of a problem and build solutions that work in the current environment.' },
    { icon: Blocks, title: 'Legacy-system confidence', text: 'I can improve existing software without forcing an expensive or risky rewrite.' },
    { icon: Gauge, title: 'Stability and maintainability', text: 'My goal is software that remains understandable, supportable, and dependable after delivery.' },
    { icon: ShieldCheck, title: 'Accuracy and security mindset', text: 'I treat validation, permissions, data integrity, and controlled access as core requirements.' },
    { icon: ChartNoAxesCombined, title: 'Business-focused delivery', text: 'Technical decisions are connected to time savings, workflow improvement, and operational value.' },
    { icon: LifeBuoy, title: 'Post-launch support', text: 'I stay focused on what happens after release: stability, fixes, changes, and long-term use.' },
    { icon: LockKeyhole, title: 'Responsible communication', text: 'I communicate clearly, protect confidential information, and avoid exaggerated promises.' },
  ],

  testimonials: [
    {
      placeholder: true,
      quote: 'Replace this with a real statement from a manager, colleague, or client about your reliability, technical work, or problem-solving.',
      name: 'Real person’s name',
      role: 'Real role or relationship',
    },
    {
      placeholder: true,
      quote: 'Replace this with verified feedback describing a specific project, result, or experience working with you.',
      name: 'Real person’s name',
      role: 'Real company or position',
    },
    {
      placeholder: true,
      quote: 'Replace this with authentic feedback about communication, maintenance, delivery quality, or technical support.',
      name: 'Real person’s name',
      role: 'Real company or position',
    },
  ],

  faqs: [
    ['What types of projects do you accept?', 'I work on custom web applications, enterprise systems, admin portals, database-driven platforms, API integrations, legacy modernization, troubleshooting, and long-term maintenance.'],
    ['Can you improve an existing system?', 'Yes. Existing systems are a major part of my work. I can analyze the current architecture, identify risks, fix issues, improve interfaces, optimize database logic, and modernize selected areas without an unnecessary rewrite.'],
    ['Do you work with legacy ASP.NET applications?', 'Yes. I have hands-on experience with ASP.NET Web Forms, C#, SQL Server, production troubleshooting, and careful improvements inside legacy enterprise codebases.'],
    ['Can you design and optimize SQL Server databases?', 'Yes. I can help with schemas, relationships, stored procedures, query performance, validation, reporting, migrations, and data-quality issues.'],
    ['Do you offer long-term maintenance?', 'Yes. I can provide ongoing maintenance, bug fixing, feature development, deployment support, monitoring, and production troubleshooting.'],
    ['Can you work remotely with international clients?', 'Yes. I am open to remote freelance, contract, consulting, and long-term development work with clients and teams internationally.'],
    ['How do you estimate project cost and timeline?', 'I first review the scope, workflows, integrations, technical risks, required quality level, and delivery priorities. I then provide a practical breakdown rather than an unreliable guess.'],
    ['Do you provide post-launch support?', 'Yes. Post-launch support can include fixes, improvements, documentation, deployment assistance, monitoring, database work, and ongoing feature development.'],
  ],
};
