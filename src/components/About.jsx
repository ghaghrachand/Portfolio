import { Cpu, Zap, Code, ShieldCheck, Award, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Languages & Web',
      icon: <Code className="h-6 w-6 text-purple-400" />,
      skills: ['PHP', 'JavaScript', 'HTML5 & CSS3', 'LLMs Integration']
    },
    {
      title: 'Frameworks & Platforms',
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
      skills: ['Symfony', 'Laravel', 'Pimcore', 'Ext JS']
    },
    {
      title: 'APIs & Databases',
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      skills: ['REST APIs', 'GraphQL', 'MySQL']
    },
    {
      title: 'Tools & Styling',
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      skills: ['Git & GitHub', 'Jira', 'Tailwind CSS', 'Bootstrap']
    }
  ];

  const workExperience = [
    {
      role: 'Senior Software Engineer',
      company: 'Acuvate Software',
      duration: 'Jun 2025 – Present',
      points: [
        'Delivered enterprise PIM solutions for Bajaj Finserv using Pimcore and Symfony.',
        'Implemented GenAI-powered metadata generation and data enrichment workflows.',
        'Built secure API integrations, ADX push mechanisms, and webhook-based automation.',
        'Developed scalable import/export pipelines for product and digital asset management.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Credencys Solutions',
      duration: 'Dec 2022 – Sep 2024',
      points: [
        'Developed and maintained enterprise applications to manage large volumes of business data and digital content.',
        'Automated data export and processing tasks, improving operational efficiency.',
        'Built AI-powered solutions for extracting and processing information from images to automate data entry.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'SNP Techno Services',
      duration: 'Mar 2022 – Dec 2022',
      points: [
        'Developed ERP applications to streamline day-to-day business operations and process management.',
        'Built dynamic forms and reporting modules to support business compliance requirements.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Payveb Resource',
      duration: 'Dec 2019 – Mar 2022',
      points: [
        'Developed web applications, business portals, and admin panels to simplify data management.',
        'Automated email notification processes and enhanced reporting and content management capabilities.'
      ]
    }
  ];

  return (
    <section id="about" className="pt-10 pb-10 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            Enthusiastic and results-driven software developer with a passion for solving complex challenges and building scalable enterprise solutions.
          </p>
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 tracking-wide">
              Who I Am
            </h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              I am a software engineer with over 5 years of professional experience in software development. My technical expertise spans PHP, Symfony, Laravel, Pimcore, MySQL, and REST APIs, with a proven track record of delivering scalable enterprise solutions from requirements gathering to full deployment.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              My experience spans building custom PIM architectures, implementing GenAI integrations, and designing automation pipelines that simplify data processing. I focus on writing clean, maintainable code, working independently, and building trust-based relationships with clients.
            </p>
          </div>

          {/* Quick Info Panel */}
          <div className="lg:col-span-5 glass hover-glow p-8 rounded-2xl border border-slate-200/60 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Profile</h3>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500">Primary Focus</dt>
                <dd className="text-slate-800 font-medium">Backend & PIM Architectures</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500">Core Stack</dt>
                <dd className="text-purple-600 font-semibold text-right">Symfony, Pimcore, MySQL, AI</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500">Current Company</dt>
                <dd className="text-slate-800 font-medium">Acuvate Software</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-slate-500">Location</dt>
                <dd className="text-slate-800 font-medium">Remote / India</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Education & Certifications Grid (Full Horizontal Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 auto-rows-fr">
          <div className="glass hover-glow p-6 rounded-2xl border border-slate-200/60 flex items-start space-x-4 h-full shadow-sm">
            <GraduationCap className="h-6 w-6 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-3">Education</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <span className="text-slate-800 font-semibold text-base">MCA</span> (9.08 CGPA)
                  <span className="block text-sm text-slate-500 mt-0.5">Sandip University</span>
                </div>
                <div>
                  <span className="text-slate-800 font-semibold text-base">BSc IT</span> (8.64 CGPA)
                  <span className="block text-sm text-gray-500 mt-0.5">Indus University</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass hover-glow p-6 rounded-2xl border border-slate-200/60 flex items-start space-x-4 h-full shadow-sm">
            <Award className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-slate-900 font-bold text-lg mb-3">Key Certifications</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-outside pl-4">
                <li>Pimcore Enterprise Developer</li>
                <li>Pimcore Consultant</li>
                <li>Pimcore Senior Developer</li>
                <li>Pimcore Junior Developer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-10">Technical Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass hover-glow p-6 rounded-2xl border border-slate-200/60 flex flex-col h-full shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2 rounded-lg bg-slate-100/50 border border-slate-200">
                  {category.icon}
                </div>
                <h4 className="text-slate-900 font-bold text-lg">{category.title}</h4>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-12 flex items-center justify-center space-x-2">
          <Briefcase className="h-6 w-6 text-purple-600" />
          <span>Work Experience</span>
        </h3>

        <div className="relative border-l border-slate-200 ml-4 md:ml-8 space-y-12">
          {workExperience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-purple-600 border border-[#f8fafc] transition-colors duration-300" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-slate-900 font-bold text-base group-hover:text-purple-600 transition-colors">{exp.role}</h4>
                  <p className="text-purple-600 font-bold text-base mt-1">{exp.company}</p>
                </div>
                <span className="text-base font-semibold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mt-2 md:mt-0 self-start md:self-auto">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2.5 text-slate-600 text-base leading-relaxed">
                {exp.points.map((pt, ptIdx) => (
                  <li key={ptIdx} className="flex items-start">
                    <span className="text-purple-600 mr-2 shrink-0">&bull;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
