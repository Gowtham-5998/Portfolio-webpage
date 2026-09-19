import React from 'react';
import { FlaskConical, Github, HelpCircle, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { AI_LAB_EXPERIMENTS } from '../data/portfolioData';

export const AiLabSection: React.FC = () => {
  return (
    <section id="ai-lab" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            Empirical R&D & Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            AI Lab
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Targeted technical micro-experiments and empirical benchmarks answering specific engineering questions across retrieval, agent loops, chunking, and evaluation.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {AI_LAB_EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between hover:border-purple-500/40 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    {exp.tag}
                  </span>
                  <span className="text-xs text-stone-400">{exp.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 font-display mb-2">
                  {exp.title}
                </h3>

                <p className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-4">
                  Tech: {exp.technology}
                </p>

                {/* Question */}
                <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 mb-4">
                  <div className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                    <HelpCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-0.5">
                        Research Question:
                      </span>
                      <span>{exp.question}</span>
                    </div>
                  </div>
                </div>

                {/* Setup & Result */}
                <div className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 mb-4">
                  <div>
                    <span className="font-semibold text-stone-900 dark:text-stone-200">Experiment Setup: </span>
                    {exp.experiment}
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Observed Result: </span>
                    {exp.result}
                  </div>
                </div>

                {/* Takeaway */}
                <div className="p-3 rounded-lg bg-amber-500/[0.05] border border-amber-500/20 text-xs text-stone-700 dark:text-stone-300">
                  <span className="font-semibold text-amber-600 dark:text-amber-400">Engineering Takeaway: </span>
                  {exp.whatILearned}
                </div>
              </div>

              {/* Footer with link */}
              {exp.githubUrl && (
                <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex justify-end">
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Benchmark Script</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
