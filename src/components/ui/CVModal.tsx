import { useState } from 'react';
import { X, Download, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cvRawText = `MD BAYEZID HOSSEN
Aspiring Full Stack Web Developer / Frontend Developer
Rangpur Sadar, Rangpur | +880 1608-539080 | bayezidhosen9080@gmail.com
GitHub: https://github.com/Bayezidhosen | LinkedIn: https://www.linkedin.com/in/bayezid-hosen-a4a669387/

PROFESSIONAL SUMMARY
Motivated and aspiring Full Stack Web Developer currently developing practical skills in modern web technologies. Familiar with HTML, CSS, JavaScript, TypeScript, React, and Node.js, with a strong interest in building responsive, user-friendly web applications and continuously improving software development skills.

TECHNICAL SKILLS
- Languages & Web: HTML, CSS, JavaScript, TypeScript
- Frontend: React, Next.js, Tailwind CSS
- Backend: Node.js, MongoDB
- Development Focus: Full Stack Web Development
- Version Control: Git & GitHub, Vite, Three.js

PROJECTS
1. StudioSpace (Live: https://studiospace-1-6vu2pk469-bayezidhosen9080-8729.vercel.app/)
   - Modern digital workspace & creative agency showcase platform.
   - Built with React, Tailwind CSS, responsive architecture, and dark glassmorphism.
2. BazarDor (Staging / Development)
   - Market commodity and daily essentials price monitoring web application.
   - Built with React, TypeScript, and data visualization tables.

EDUCATION
Diploma in Engineering / Polytechnic Studies — Rangpur Polytechnic Institute (2025–2026)

CERTIFICATIONS & TRAINING
Full Stack Development — Training / Course

EXPERIENCE
Junior Developer — Currently building practical experience through continuous learning, coding practice, and personal development projects.

ACHIEVEMENTS & FOCUS
Continuously learning modern web development technologies and building toward a high-performance Full Stack Web Developer career.
References available upon request.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cvRawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([cvRawText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Bayezid_Hossen_Curriculum_Vitae.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-base font-semibold text-slate-900 dark:text-white">Curriculum Vitae</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">MD Bayezid Hossen · Verified Profile Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
              title="Copy CV content"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors shadow-sm"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Top Identity Card */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
            <h1 className="text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight">MD BAYEZID HOSSEN</h1>
            <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mt-0.5">Frontend Developer & Creative Web Developer</p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" /> Rangpur Sadar, Rangpur, Bangladesh</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" /> bayezidhosen9080@gmail.com</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" /> +880 1608-539080</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Professional Summary
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              Motivated and aspiring Full Stack Web Developer currently developing practical skills in modern web technologies. Familiar with HTML, CSS, JavaScript, TypeScript, React, and Node.js, with a strong interest in building responsive, user-friendly web applications and continuously improving software development skills.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Frontend & Web</span>
                <span className="text-sm text-slate-800 dark:text-slate-200 mt-1 block">HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Backend & Database</span>
                <span className="text-sm text-slate-800 dark:text-slate-200 mt-1 block">Node.js, Express basics, MongoDB, RESTful APIs</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Tools & Environment</span>
                <span className="text-sm text-slate-800 dark:text-slate-200 mt-1 block">Git, GitHub, Vite, Three.js / WebGL, Vercel</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Development Focus</span>
                <span className="text-sm text-slate-800 dark:text-slate-200 mt-1 block">Full Stack Web Development & High-performance UI</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Projects</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 dark:text-white">StudioSpace</span>
                  <a
                    href="https://studiospace-1-6vu2pk469-bayezidhosen9080-8729.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 font-medium"
                  >
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Creative agency and digital workspace showcase built with React and Tailwind CSS featuring dynamic project cards, dark theme aesthetics, and responsive layout.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 dark:text-white">BazarDor</span>
                  <span className="text-xs text-amber-600 dark:text-amber-400 font-mono font-medium">In Staging</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Commodity and daily essentials market price monitor with tabular metrics, data analytics, and responsive design.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Education</h3>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <p className="font-semibold text-slate-900 dark:text-white text-sm">Diploma in Engineering / Polytechnic Studies</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Rangpur Polytechnic Institute (2025–2026)</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Certifications & Training</h3>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/50">
                <p className="font-semibold text-slate-900 dark:text-white text-sm">Full Stack Development</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Structured Practical Training / Course</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Source: Verified CV document (/public/assets/aistudio/Untitled_document_c0628121)</span>
          <button onClick={onClose} className="hover:text-slate-900 dark:hover:text-slate-300">Close</button>
        </div>
      </div>
    </div>
  );
}
