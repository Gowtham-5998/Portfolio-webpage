import React from 'react';
import { User, Briefcase, Award, CheckCircle2, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_HISTORY, HOW_I_THINK_PRINCIPLES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 mb-3">
            <User className="w-3.5 h-3.5 text-amber-500" />
            Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            About Gowtham
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            {PERSONAL_INFO.positioning}. Dedicated to bridging the gap between ambiguous business needs and dependable data and AI systems.
          </p>
        </div>

        {/* 4 Professional Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PERSONAL_INFO.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 block mb-2">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-display mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Philosophy Quote Banner */}
        <div className="mb-16 p-8 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10 text-amber-500">
            <Lightbulb className="w-48 h-48" />
          </div>
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 block">
              Core Consulting Philosophy
            </span>
            <blockquote className="text-lg sm:text-xl font-medium leading-relaxed mb-4 font-display">
              "{PERSONAL_INFO.coreIdentityQuote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-sm">
                GR
              </div>
              <div>
                <span className="font-bold text-sm block leading-none">{PERSONAL_INFO.name}</span>
                <span className="text-xs text-stone-400">Consultant, Tiger Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-amber-500" />
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-display">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_HISTORY.map((exp) => (
              <div
                key={exp.title}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4 pb-4 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display">
                      {exp.title}
                    </h4>
                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-0.5">
                      {exp.company}
                      {exp.promotionFromPrevious && (
                        <span className="ml-2.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          Promoted from Senior Business Analyst
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                    {exp.period}
                  </span>
                </div>

                {/* Groups */}
                {exp.groups && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {exp.groups.map((group) => (
                      <div
                        key={group.groupTitle}
                        className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800"
                      >
                        <h5 className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-2.5">
                          {group.groupTitle}
                        </h5>
                        <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                          {group.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-500 mt-0.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                {exp.highlights && (
                  <div className="mt-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-2.5">
                      Key Impact & Scope
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How I Think Section (Prompt #21) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-display">
              How I Think & Operate
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOW_I_THINK_PRINCIPLES.map((principle) => (
              <div
                key={principle.principle}
                className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 block mb-1">
                    {principle.number}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 font-display mb-2">
                    {principle.principle}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {principle.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
