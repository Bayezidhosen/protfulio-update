import { ArrowUp, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-16 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand & Introduction */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-2xl font-bold font-display tracking-tight text-slate-900 dark:text-white flex items-center gap-1 group"
            >
              <span>BAYEZID</span>
              <span className="text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors">.</span>
            </a>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Frontend Developer & Creative Web Developer crafting clean, interactive, and high-performance digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills & Tech</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Journey</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Featured Works & Status */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-200 font-semibold block">
              Featured Works
            </span>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://studiospace-1-6vu2pk469-bayezidhosen9080-8729.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="block p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between text-slate-900 dark:text-white font-medium">
                  <span>StudioSpace</span>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">Live</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Creative agency & digital workspace showcase</p>
              </a>

              <div className="block p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-900 dark:text-white font-medium">
                  <span>BazarDor</span>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold">Staging</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Market commodity price monitoring system</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} MD Bayezid Hossen. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript & Three.js</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
