import { useState, useEffect } from 'react';
import { MapPin, GraduationCap, Compass, Lightbulb, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

export function AboutSection() {
  const [bdTime, setBdTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Bangladesh is Asia/Dhaka (GMT+6)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setBdTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span className="font-semibold">01. Introduction</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-600 dark:text-slate-400">Background & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Crafting with Precision & Curiosity
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base max-w-2xl">
            A developer dedicated to modern frontend craftsmanship, combining clean software principles with immersive user interfaces.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Professional Biography & Philosophy (Spans 8 cols) */}
          <div className="md:col-span-8 p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-lg dark:shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                <Compass className="w-4 h-4" />
                <span className="font-semibold">Biography & Philosophy</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Turning complex problems into elegant, human-centered interfaces.
              </h3>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-3">
                <p>
                  {PERSONAL_INFO.bio.split('\n\n')[0]}
                </p>
                <p>
                  {PERSONAL_INFO.bio.split('\n\n')[1]}
                </p>
              </div>
            </div>

            {/* Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 relative z-10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">01. Simplicity</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">Clean code structures and straightforward component hierarchies.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">02. Interactivity</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">Subtle motion, tactile micro-feedback, and 3D depth.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">03. Performance</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">Fast asset delivery, lightweight bundle footprints, zero layout shifts.</p>
              </div>
            </div>

            {/* Subtle Gradient Backdrop */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card 2: Developer Portrait (Spans 4 cols) */}
          <div className="md:col-span-4 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-lg dark:shadow-xl overflow-hidden relative group">
            <div className="h-full min-h-[380px] w-full relative">
              <img
                src="/src/assets/images/bayezid_profile_portrait_1793724263287.jpg"
                alt="MD Bayezid Hossen Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono text-cyan-300 block mb-1">Developer Portrait</span>
                <h4 className="text-lg font-bold text-white font-display">Bayezid Hossen</h4>
                <p className="text-xs text-slate-200">Frontend & Full-Stack Aspirant</p>
              </div>
            </div>
          </div>

          {/* Card 3: Location & Local Time (Spans 4 cols) */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-lg dark:shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </span>
                <span className="text-xs font-mono text-slate-500">GMT +6:00</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Rangpur, Bangladesh</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {PERSONAL_INFO.locationDetails} · Available for remote work worldwide and collaborative engineering teams.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs text-slate-600 dark:text-slate-400">Local Time (BDT)</span>
              </div>
              <span className="text-sm font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                {bdTime || 'Loading...'}
              </span>
            </div>
          </div>

          {/* Card 4: Education & Technical Training (Spans 4 cols) */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-lg dark:shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic & Training</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Engineering Studies</h3>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60">
                  <p className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.education.degree}</p>
                  <p className="text-cyan-600 dark:text-cyan-400 text-[11px] mt-0.5 font-medium">{PERSONAL_INFO.education.institution}</p>
                  <p className="text-slate-500 text-[11px] font-mono mt-0.5">{PERSONAL_INFO.education.timeline}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60">
                  <p className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.certification.title}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">{PERSONAL_INFO.certification.type}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Problem-Solving & Architecture Visual (Spans 4 cols) */}
          <div className="md:col-span-4 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-lg dark:shadow-xl overflow-hidden relative group p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Problem-Solving Approach</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Systematic & Iterative</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Breaking complex UI challenges into modular components, isolating state, and writing maintainable code that scales.
              </p>
            </div>

            <div className="mt-4 relative h-28 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/60">
              <img
                src="/src/assets/images/bento_tech_geometry_1793724265147.jpg"
                alt="Systematic Tech Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[11px] font-mono text-white px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/60">
                  Modular Component Logic
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
