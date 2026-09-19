import React from 'react';
import { Layers, ArrowRight, ShieldCheck, Scale, Cpu, Sparkles } from 'lucide-react';
import { ARCHITECTURES } from '../data/portfolioData';
import { ArchitectureItem } from '../types/portfolio';

interface ArchitectureGalleryProps {
  onSelectArchitecture: (arch: ArchitectureItem) => void;
}

export const ArchitectureGallery: React.FC<ArchitectureGalleryProps> = ({
  onSelectArchitecture,
}) => {
  return (
    <section id="architecture" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            System Design & Trade-Off Analysis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            Architecture Gallery
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Enterprise system design blueprints demonstrating end-to-end thinking: data pipelines, component topology, security boundaries, cost efficiency, and operational scalability.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARCHITECTURES.map((arch) => (
            <div
              key={arch.id}
              onClick={() => onSelectArchitecture(arch)}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-sky-500/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    {arch.badge}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">System Blueprint</span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {arch.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5">
                  {arch.subtitle}
                </p>

                {/* Pipeline preview chips */}
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800/80 mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                    Pipeline Stages Preview:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {arch.diagramFlow.slice(0, 4).map((step, idx) => (
                      <span
                        key={step.step}
                        className="px-2 py-0.5 rounded text-[11px] bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                      >
                        {step.step}. {step.label}
                      </span>
                    ))}
                    {arch.diagramFlow.length > 4 && (
                      <span className="text-[11px] text-stone-400 font-medium">
                        +{arch.diagramFlow.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                <span>Inspect Full Blueprint & Trade-Offs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
