import { ArrowDown, Code2, Sparkles, FileText, ArrowRight, Github, Linkedin } from 'lucide-react';
import { HeroScene } from '../three/HeroScene';
import { PERSONAL_INFO } from '../../data/portfolio';

interface HeroSectionProps {
  onOpenCV: () => void;
}

export function HeroSection({ onOpenCV }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[95vh] pt-28 pb-16 flex items-center overflow-hidden">
      {/* Ambient Radial Gradient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[450px] bg-violet-600/15 dark:bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split-screen 2-column Hero layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean Unboxed Kicker Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
              <span className="flex items-center gap-1.5 font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                Frontend Developer
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">Rangpur, Bangladesh</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">Junior Developer</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">{PERSONAL_INFO.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                Building Digital Experiences{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 dark:from-cyan-400 dark:via-sky-300 dark:to-violet-400 bg-clip-text text-transparent">
                  That Inspire.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-cyan-600 dark:text-cyan-300 font-medium">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Body Description */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subheadline} Specialized in crafting seamless user interfaces with React, JavaScript, and Tailwind CSS, backed by clean code and interactive 3D aesthetics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 font-semibold text-sm transition-all hover:border-slate-400 dark:hover:border-slate-600 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900/50 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-slate-800 font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar & Tech Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-slate-500 font-mono">Connect:</span>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                <span>Core Stack:</span>
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold">React</span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-sky-600 dark:text-sky-300 font-semibold">TypeScript</span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-violet-600 dark:text-violet-300 font-semibold">Tailwind</span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-emerald-600 dark:text-emerald-300 font-semibold">Node</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive WebGL Scene */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px] rounded-3xl bg-white/40 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 shadow-xl dark:shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center p-2">
              <HeroScene interactive={true} />
              
              {/* Subtle Corner Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                <span>Three.js Engine</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
