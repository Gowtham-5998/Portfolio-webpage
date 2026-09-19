import React from 'react';
import { Compass, BookOpen, Users, Sliders, Activity, HeartHandshake } from 'lucide-react';
import { BEYOND_WORK_ITEMS } from '../data/portfolioData';

export const BeyondWorkSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-sky-500" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-purple-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-500" />;
      default:
        return <Compass className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="beyond-work" className="py-16 sm:py-20 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-500" />
            Human Dimension
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-2">
            Beyond the Work
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
            Disciplines, personal habits, and continuous learning systems that shape everyday professional focus and perspective.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BEYOND_WORK_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm"
            >
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-950 w-fit border border-stone-200 dark:border-stone-800 mb-3.5">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-display mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
