import React from 'react';
import { Database, Cpu, Layers, Shield, ShoppingBag, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Bajaj Finserv Enterprise PIM',
      description: 'Delivered a robust Product Information Management (PIM) solution for Bajaj Finserv. Engineered product structures, digital asset pipelines, and custom provisioning workflows using Pimcore and Symfony.',
      tags: ['Pimcore', 'Symfony', 'MySQL', 'REST APIs', 'GenAI', 'Cron Jobs'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      iconBg: 'from-purple-600 to-indigo-600',
      icon: <Database className="h-10 w-10 text-white" />
    },
    {
      title: 'Yokohama Product Data Platform',
      description: 'Developed automated PIM pipelines for Yokohama to centralize and enrich automotive product catalogs. Built secure integrations, webhook-based workflows, and import/export automation using Symfony.',
      tags: ['Pimcore', 'Symfony', 'MySQL', 'APIs', 'Pimcore Tags'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      iconBg: 'from-blue-600 to-cyan-500',
      icon: <Cpu className="h-10 w-10 text-white" />
    },
    {
      title: 'Valiram Retail PIM Platform',
      description: 'Implemented custom PIM catalog solutions and workflows for Valirams luxury retail catalog. Optimized product categorization, digital asset associations, and automated provisioning models.',
      tags: ['Pimcore', 'Symfony', 'Workflows', 'REST APIs', 'Import & Export', 'GraphQL Queries'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      iconBg: 'from-emerald-600 to-teal-500',
      icon: <ShoppingBag className="h-10 w-10 text-white" />
    },
    {
      title: 'Radian Weapons E-Commerce Backend',
      description: 'Engineered scalable catalog and digital asset pipelines for Radian Weapons e-commerce store. Implemented ADX push mechanisms, automated role mapping, and secure checkout backend flows.',
      tags: ['Pimcore', 'Symfony', 'MySQL', 'Security', 'Yotpo'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      iconBg: 'from-yellow-500 to-amber-600',
      icon: <Shield className="h-10 w-10 text-white" />
    },
    {
      title: 'ERP - Waste Management ',
      description: 'Designed and engineered secure custom API extensions, automated workflows, and scheduled cron jobs for Pimcore platform implementations at SNP Techno Services, boosting data sync reliability.',
      tags: ['Laravel', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Ajax'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      iconBg: 'from-fuchsia-400 to-pink-500',
      icon: <Layers className="h-10 w-10 text-white" />
    },
    {
      title: 'Payveb Custom Portals & Dashboards',
      description: 'Developed custom business management portals, admin control dashboards, and automated email notification modules using PHP Laravel, simplifying core operational tracking.',
      tags: ['PHP', 'HTML5 & CSS3', 'Email Automation', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      iconBg: 'from-slate-400 to-zinc-500',
      icon: <Globe className="h-10 w-10 text-white" />
    }
  ];

  return (
    <section id="projects" className="pt-10 pb-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            My <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">
            A showcase of select enterprise PIM solutions, backend automation platforms, and AI integrations I have built.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass hover-glow flex flex-col rounded-2xl overflow-hidden border border-slate-200/60 h-full group shadow-sm">
              {/* Dynamic Gradient Mockup Header */}
              <div className={`h-48 bg-gradient-to-tr ${project.iconBg} relative flex items-center justify-center p-6 transition-all duration-300 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                <div className="relative z-10 p-4 bg-white/30 rounded-full border border-white/20 shadow-md">
                  {project.icon}
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-slate-700 border border-slate-200">
                  Enterprise Backend
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow text-justify">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom divider line */}
                <div className="border-t border-slate-200/60 mt-auto pt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
