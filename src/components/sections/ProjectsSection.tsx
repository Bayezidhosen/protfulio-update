import { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import { Project } from '../../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span className="font-semibold">03. Selected Works</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-600 dark:text-slate-400">Featured Web Projects</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                Real-World Applications
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-base max-w-xl">
                Explore recent applications developed with modern frontend tools, component-driven architectures, and responsive user experiences.
              </p>
            </div>
            <a
              href="https://github.com/Bayezidhosen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors shrink-0"
            >
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/90 shadow-lg dark:shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Media Showcase with Tilt & Reveal */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.name} Interface Screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Status & Verification Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-200 backdrop-blur-md">
                      Project 0{index + 1}
                    </span>

                    {project.hasPublicDemo ? (
                      <span className="flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Live Demo
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md">
                        <Clock className="w-3 h-3" />
                        Staging / Deployment
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Overlay Action */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-slate-800 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span>Inspect Details</span>
                    </button>
                    {project.hasPublicDemo && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg hover:bg-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Site</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-cyan-600 dark:text-cyan-400 font-mono font-medium">
                      <span>{project.role}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Specifications</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-950/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.hasPublicDemo && project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs transition-colors"
                          title="Staging deployment in progress"
                        >
                          <span>Staging Info</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
