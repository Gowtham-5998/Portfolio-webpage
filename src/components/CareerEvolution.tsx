import React from 'react';
import { CheckCircle2, CircleDot, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { CAREER_EVOLUTION_STEPS } from '../data/portfolioData';

export const CareerEvolution: React.FC = () => {
  return (
    <section id="career-evolution" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            Progression & Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-4">
            Career Evolution
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            A deliberate progression from deep technical analytics into consulting and delivery leadership, systematically expanding into applied AI engineering and enterprise solution architecture.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium mb-8 pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Proven Foundation</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
            <CircleDot className="w-4 h-4" />
            <span>Current Role & Delivery (Tiger Analytics)</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Deliberate Career Direction (In Progress / Future)</span>
          </div>
        </div>

        {/* Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAREER_EVOLUTION_STEPS.map((step, idx) => {
            const isCompleted = step.status === 'completed';
            const isCurrent = step.status === 'current';
            const isDirection = step.status === 'direction';

            return (
              <div
                key={step.role}
                className={`relative p-5 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-amber-500/[0.04] dark:bg-amber-500/[0.06] border-amber-500/40 shadow-sm'
                    : isCompleted
                    ? 'bg-white dark:bg-stone-900/60 border-stone-200 dark:border-stone-800'
                    : 'bg-stone-50/50 dark:bg-stone-950/40 border-stone-200/60 dark:border-stone-800/60'
                }`}
              >
                {/* Step indicator & badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-stone-400 dark:text-stone-500">
                      {step.step}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : isCurrent
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                  {isCurrent && <CircleDot className="w-4 h-4 text-amber-500 shrink-0 animate-pulse" />}
                  {isDirection && <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />}
                </div>

                {/* Role title */}
                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 font-display mb-1.5">
                  {step.role}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Direction Tag for clarity */}
                {isDirection && (
                  <div className="mt-3 pt-2 border-t border-stone-200/50 dark:border-stone-800/50 flex items-center gap-1.5 text-[11px] text-stone-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Career Target & Continuous Learning
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
