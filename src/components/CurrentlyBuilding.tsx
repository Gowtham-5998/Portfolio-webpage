import React from 'react';
import { ArrowRight, Sparkles, Compass, Flame } from 'lucide-react';
import { CURRENTLY_BUILDING } from '../data/portfolioData';

interface CurrentlyBuildingProps {
  onViewProject: (projectId: string) => void;
}

export const CurrentlyBuilding: React.FC<CurrentlyBuildingProps> = ({ onViewProject }) => {
  return (
    <section className="py-8 bg-stone-100/70 dark:bg-stone-900/40 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 shadow-sm hover:border-amber-500/40 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              {/* Dynamic Tag */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  {CURRENTLY_BUILDING.tagline}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400">Primary Technical Focus</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-2">
                {CURRENTLY_BUILDING.title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                {CURRENTLY_BUILDING.description}
              </p>

              {/* Currently Exploring Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
                  Currently exploring:
                </span>
                {CURRENTLY_BUILDING.exploring.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="shrink-0">
              <button
                id="currently-building-view-btn"
                onClick={() => onViewProject(CURRENTLY_BUILDING.projectId)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium transition-colors shadow-sm"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
