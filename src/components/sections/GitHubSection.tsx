import { useState, useEffect } from 'react';
import { Github, ExternalLink, GitBranch, FolderGit2, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

interface GitHubProfileData {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio?: string;
}

export function GitHubSection() {
  const [githubData, setGithubData] = useState<GitHubProfileData | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Bayezidhosen')
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => {
        if (data && data.login) {
          setGithubData({
            login: data.login,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            public_repos: data.public_repos ?? 0,
            followers: data.followers ?? 0,
            following: data.following ?? 0,
            bio: data.bio
          });
        }
      })
      .catch(() => {
        setGithubData(null);
      });
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-100/60 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xl dark:shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: GitHub Profile Info */}
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
              <Github className="w-4 h-4" />
              <span>Open Source & Version Control</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Explore Code & Repositories on GitHub
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I practice transparent development, pushing regular code updates, exploring new frontend libraries, and maintaining public project repositories under <code className="text-cyan-700 dark:text-cyan-400 font-mono font-medium">@Bayezidhosen</code>.
            </p>

            {/* Verified Public Info Badge */}
            {githubData && (
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <strong className="text-slate-900 dark:text-white font-bold tabular-nums">{githubData.public_repos}</strong> Public Repos
                </span>
                <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-500" />
                  <span>GitHub Verified Account</span>
                </span>
              </div>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://github.com/Bayezidhosen?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
            >
              <GitBranch className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>View Repositories</span>
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
            >
              <Github className="w-4 h-4" />
              <span>Visit @Bayezidhosen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
