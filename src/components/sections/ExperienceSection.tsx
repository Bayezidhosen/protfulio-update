import { CheckCircle } from 'lucide-react';
import { TIMELINE } from '../../data/portfolio';

export function ExperienceSection() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span className="font-semibold">04. Journey & Growth</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-600 dark:text-slate-400">Development Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Learning, Practice & Trajectory
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base max-w-xl">
            A transparent timeline of hands-on software development, continuous learning, and academic engineering milestones.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 group-hover:scale-125 transition-transform shadow-xs" />

              {/* Period indicator for desktop */}
              <div className="md:absolute md:-left-36 top-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold md:text-right w-28 mb-1 md:mb-0">
                {item.period}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-colors shadow-md dark:shadow-lg space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-300 font-mono mt-0.5 font-medium">
                      {item.focus}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                  {item.keyPoints.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
