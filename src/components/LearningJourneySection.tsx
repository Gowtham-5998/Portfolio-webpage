import React from 'react';
import { Compass, Calendar, BookOpen, Wrench, Search, ArrowRight, Sparkles } from 'lucide-react';
import { LEARNING_JOURNEY_STAGES, LEARNING_LOG } from '../data/portfolioData';

export const LearningJourneySection: React.FC = () => {
  return (
    <section id="learning-journey" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            Continuous Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            Learning Journey & Progression
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Honest, stage-based technical expansion. Rather than arbitrary percentage bars, competencies are categorized by operational depth and applied practice.
          </p>
        </div>

        {/* 1. Currently Learning: Stages Grid */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400 mb-6">
            Current Technical Depth by Stage
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEARNING_JOURNEY_STAGES.map((stage) => {
              const getStageBadge = (name: string) => {
                switch (name) {
                  case 'Strong Foundation':
                    return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
                  case 'Building':
                    return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30';
                  case 'Deepening':
                    return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
                  case 'Exploring':
                    return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30';
                  default:
                    return 'bg-stone-100 text-stone-600';
                }
              };

              return (
                <div
                  key={stage.stage}
                  className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between"
                >
                  <div>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 border ${getStageBadge(
                        stage.stage
                      )}`}
                    >
                      {stage.stage}
                    </span>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-stone-800">
                    {stage.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Chronological Monthly Learning Log */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200 dark:border-stone-800">
            <div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display">
                Monthly Learning Log
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Transparent monthly log of what was learned, built, discovered, and scheduled next.
              </p>
            </div>
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">
              Updated Monthly
            </span>
          </div>

          <div className="space-y-4">
            {LEARNING_LOG.map((log) => (
              <div
                key={log.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base font-display">
                    {log.period}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
                  {/* Learned */}
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                      Learned
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{log.learned}</p>
                  </div>

                  {/* Built */}
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                      Built
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{log.built}</p>
                  </div>

                  {/* Discovered */}
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                      Discovered / Limitation
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{log.discovered}</p>
                  </div>

                  {/* Next */}
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
                      Next Step
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{log.next}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
