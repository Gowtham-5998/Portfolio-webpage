import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, Filter, ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Analytics',
    'BI',
    'Machine Learning',
    'GenAI',
    'RAG',
    'AI Agents',
    'Architecture',
    'Consulting',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.categories.includes(selectedCategory));
  }, [selectedCategory]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Deployed':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'Prototype':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
      case 'Experiment':
        return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30';
      case 'Case Study':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30';
      default:
        return 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            Practical Engineering & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Building practical solutions across analytics, machine learning and AI. Each project documents architectural reasoning, trade-offs, and iterative problem solving.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-stone-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group flex flex-col justify-between p-6 rounded-2xl border transition-all cursor-pointer ${
                project.featured
                  ? 'bg-white dark:bg-stone-900/90 border-amber-500/40 hover:border-amber-500 shadow-sm'
                  : 'bg-white dark:bg-stone-900/60 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-md'
              }`}
            >
              <div>
                {/* Card Top: Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadgeClass(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stone-400">{project.date}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Category tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.categories.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded text-[11px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech stack & detail trigger */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 mt-2">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-stone-500 dark:text-stone-400"
                    >
                      {tech} ·
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span>{project.isComingSoon ? 'View Planned Scope' : 'Explore Full Case Study'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
