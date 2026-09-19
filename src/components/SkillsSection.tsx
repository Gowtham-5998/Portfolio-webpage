import React from 'react';
import { Briefcase, Code, Sparkles, Database, Cpu, Layers } from 'lucide-react';
import { CONSULTING_TOOLKIT, TECHNICAL_STACK } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="technical-skills" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <Cpu className="w-3.5 h-3.5 text-amber-500" />
            Capabilities & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            Technical & Consulting Toolkit
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            A balanced professional profile combining enterprise delivery discipline with deep analytical and emerging artificial intelligence engineering competencies.
          </p>
        </div>

        {/* Consulting & Delivery Toolkit */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-display">
                Consulting & Delivery Toolkit
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Core client advisory, requirement decomposition, and operational tracking skills
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {CONSULTING_TOOLKIT.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700/60 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Technical Stack */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400">
              Technical Competencies by Domain
            </h3>
            <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
              Regularly updated as new technologies are mastered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(TECHNICAL_STACK).map(([category, skills]) => {
              const isEmerging = category === 'Emerging Technologies';
              return (
                <div
                  key={category}
                  className={`p-6 rounded-2xl border transition-all ${
                    isEmerging
                      ? 'bg-purple-500/[0.03] dark:bg-purple-500/[0.05] border-purple-500/30'
                      : 'bg-white dark:bg-stone-900/60 border-stone-200 dark:border-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 font-display">
                      {category}
                    </h4>
                    {isEmerging && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        In Flight
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:border-amber-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
