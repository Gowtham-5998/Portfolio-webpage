import React from 'react';
import { X, Layers, Cpu, ShieldCheck, DollarSign, Scale, BarChart2, CheckCircle2, ArrowRight } from 'lucide-react';
import { ArchitectureItem } from '../types/portfolio';

interface ArchitectureModalProps {
  architecture: ArchitectureItem | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ architecture, onClose }) => {
  if (!architecture) return null;

  return (
    <div
      id="architecture-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="architecture-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-arch-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          aria-label="Close architecture view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-stone-800 pb-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              {architecture.badge}
            </span>
            <span className="text-xs text-stone-400">System Design Specification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100 font-display mb-2">
            {architecture.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-300">
            {architecture.subtitle}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 mb-6">
          <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
            System Design Challenge & Problem
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {architecture.problem}
          </p>
        </div>

        {/* Visual Architecture Flow */}
        <div className="mb-8 p-5 rounded-xl bg-stone-950/80 border border-stone-800">
          <h3 className="text-xs uppercase tracking-wider text-stone-300 font-semibold mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            Logical Architecture & Pipeline Flow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {architecture.diagramFlow.map((step) => (
              <div
                key={step.step}
                className="p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold text-stone-200">{step.label}</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow & Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Components */}
          <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-400" />
              Core Building Blocks
            </h3>
            <div className="space-y-2.5">
              {architecture.components.map((comp) => (
                <div key={comp.name} className="text-xs border-b border-stone-800/60 pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between text-stone-200 font-medium">
                    <span>{comp.name}</span>
                    <span className="font-mono text-[10px] text-amber-400/90">{comp.tech}</span>
                  </div>
                  <p className="text-stone-400 text-[11px] mt-0.5">{comp.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* End-to-end Data Flow */}
          <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-1.5">
              <ArrowRight className="w-4 h-4 text-purple-400" />
              End-to-End Data Flow
            </h3>
            <ol className="space-y-2 text-xs text-stone-300 list-decimal list-inside">
              {architecture.dataFlow.map((flow, i) => (
                <li key={i} className="leading-normal">
                  <span className="text-stone-300">{flow}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Technology Choices vs Alternatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">
              Technology Rationales
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              {architecture.technologyChoices.map((choice) => (
                <li key={choice.tech}>
                  <span className="font-semibold text-stone-100">{choice.tech}: </span>
                  <span className="text-stone-300">{choice.reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
              Alternatives Considered & Trade-Offs
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              {architecture.alternativesConsidered.map((alt) => (
                <li key={alt.alternative}>
                  <span className="font-semibold text-rose-300">{alt.alternative}: </span>
                  <span className="text-stone-400">{alt.whyNot}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Operational Pillars: Scalability, Security, Cost, Evaluation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mb-1">
              <Scale className="w-3.5 h-3.5 text-sky-400" />
              Scalability
            </div>
            <p className="text-[11px] text-stone-400 leading-tight">{architecture.scalability}</p>
          </div>

          <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Security & Access
            </div>
            <p className="text-[11px] text-stone-400 leading-tight">{architecture.security}</p>
          </div>

          <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              Cost & Efficiency
            </div>
            <p className="text-[11px] text-stone-400 leading-tight">{architecture.cost}</p>
          </div>

          <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-200 mb-1">
              <BarChart2 className="w-3.5 h-3.5 text-purple-400" />
              Evaluation & QA
            </div>
            <p className="text-[11px] text-stone-400 leading-tight">{architecture.evaluation}</p>
          </div>
        </div>

        {/* Architecture Takeaway */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-stone-300">
          <span className="font-semibold text-amber-300">Architecture Lesson: </span>
          {architecture.lessonsLearned}
        </div>
      </div>
    </div>
  );
};
