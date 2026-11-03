import { useState } from 'react';
import { LayoutGrid, Box, Sparkles } from 'lucide-react';
import { SKILLS } from '../../data/portfolio';
import { SkillsSphere } from '../three/SkillsSphere';

export function SkillsSection() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'orbit'>('cards');

  const filteredSkills = filter === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
              <span className="font-semibold">02. Technologies</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">Toolkit & Frameworks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
              Modern Full-Stack Toolkit
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-base max-w-xl">
              Practical competencies in modern web technologies, focused on building responsive, maintainable frontend architectures and robust web services.
            </p>
          </div>

          {/* Controls: Category Filter + View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter buttons */}
            <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-medium">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('frontend')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'frontend'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setFilter('backend')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'backend'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setFilter('tools')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'tools'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Tools
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('orbit')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  viewMode === 'orbit'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
                title="3D Orbit View"
              >
                <Box className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">3D Orbit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {viewMode === 'orbit' ? (
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xl dark:shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-2 px-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Interactive 3D Skill Tag Cloud
              </span>
              <span>Rotate & spin in real-time</span>
            </div>
            <SkillsSphere />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-white/80 hover:bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900/90 border border-slate-200 hover:border-slate-300 dark:border-slate-800/80 dark:hover:border-slate-700 transition-all duration-300 shadow-md dark:shadow-lg group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm shadow-xs"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}35`,
                      }}
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Subtle bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Note on Transparency & Real Proficiency */}
        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          Focused on genuine application knowledge · No fabricated percentages or superficial metrics
        </div>
      </div>
    </section>
  );
}
