import React from 'react';
import { LayoutGrid, Rocket, Settings, Code, Bot, History, ExternalLink, Github } from 'lucide-react';
const projects = [
  { name: 'APPS-trufind', status: 'Active', category: 'Production', icon: Rocket, url: 'https://github.com/rullolabs/APPS-trufind' },
  { name: 'APPS-automation', status: 'Active', category: 'Production', icon: Bot, url: 'https://github.com/rullolabs/APPS-automation' },
  { name: 'APPS-web-projects', status: 'Active', category: 'Portfolio', icon: LayoutGrid, url: 'https://github.com/rullolabs/APPS-web-projects' },
  { name: 'AI-tools', status: 'Active', category: 'AI/ML', icon: Bot, url: 'https://github.com/rullolabs/AI-tools' },
  { name: 'CORE-saas-template', status: 'Template', category: 'Infra', icon: Code, url: 'https://github.com/rullolabs/CORE-saas-template' },
  { name: 'CORE-config', status: 'Global', category: 'Infra', icon: Settings, url: 'https://github.com/rullolabs/CORE-config' },
  { name: 'OLD-projects', status: 'Archived', category: 'Archive', icon: History, url: 'https://github.com/rullolabs/OLD-projects' },
  ];
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 font-sans">
    <div className="max-w-7xl mx-auto">
    <header className="mb-12 flex justify-between items-center">
    <div>
    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
    RulloLabs OS
    </h1>h1>
    <p className="text-gray-400 mt-2">Central Project Management & Deployment Dashboard</p>p>
    </div>div>
    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    System Online
    </div>div>
    </header>header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
      <div key={project.name} className="group relative bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <a href={project.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
      <ExternalLink size={18} />
    </a>a>
      </div>div>
      <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
      <project.icon size={24} />
      </div>div>
      <div>
      <h3 className="font-semibold text-lg">{project.name}</h3>h3>
      <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>span>
      </div>div>
      </div>div>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
      <span className={`text-xs px-2 py-1 rounded-md ${
        project.status === 'Active' ? 'bg-green-500/10 text-green-400' : 
        project.status === 'Template' ? 'bg-purple-500/10 text-purple-400' :
        'bg-gray-500/10 text-gray-400'
      }`}>
        {project.status}
      </span>span>
      <div className="flex gap-3">
      <a href={project.url} className="text-gray-400 hover:text-white transition-colors">
      <Github size={18} />
      </a>a>
      </div>div>
      </div>div>
      </div>div>
      ))}
    </div>div>
    </div>div>
    </div>div>
        );
}</div>
