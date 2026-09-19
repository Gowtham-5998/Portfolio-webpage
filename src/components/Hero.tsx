import React from 'react';
import { ArrowDown, FileText, Send, Sparkles, Database, BarChart3, Bot, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreWork }) => {
  const techTags = ['SQL', 'Power BI', 'Python', 'ML', 'GenAI', 'RAG', 'AI Agents'];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-stone-200/80 dark:border-stone-800/80">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            CONSULTANT · ANALYTICS · AI
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 font-display leading-[1.1] mb-6">
            Turning Data Into Decisions.{' '}
            <span className="text-amber-600 dark:text-amber-400">Building Toward AI.</span>
          </h1>

          {/* Supporting Paragraph 1 */}
          <p className="text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed max-w-3xl mb-4 font-normal">
            {PERSONAL_INFO.heroSubtext1}
          </p>

          {/* Supporting Paragraph 2 */}
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl mb-8">
            {PERSONAL_INFO.heroSubtext2}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-950 hover:bg-amber-600 dark:hover:bg-amber-400 transition-colors shadow-sm"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="hero-view-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>View Resume</span>
            </button>

            <a
              id="hero-lets-connect-btn"
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Send className="w-4 h-4 text-stone-400" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Display Technology Tags */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800/80">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mr-2">
                Core Stack:
              </span>
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800/80 hover:border-amber-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
