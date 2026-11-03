import { Smartphone, Atom, Globe, Sparkles, Gauge, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/portfolio';

const iconMap: Record<string, any> = {
  Smartphone,
  Atom,
  Globe,
  Sparkles,
  Gauge
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span className="font-semibold">05. Capabilities</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-600 dark:text-slate-400">Development Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Services I Can Deliver
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base max-w-xl">
            Modern frontend and web development capabilities available for remote teams, freelance builds, and collaborative product engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-lg dark:shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Service 0{index + 1}</span>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire for Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
