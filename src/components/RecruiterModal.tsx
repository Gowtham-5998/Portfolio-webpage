import React from 'react';
import { X, Download, ExternalLink, Briefcase, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { RECRUITER_SUMMARY, CONFIG } from '../data/portfolioData';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject?: (projectId: string) => void;
  onExploreProjects?: () => void;
  onExploreConsulting?: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
  onExploreProjects,
  onExploreConsulting,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="recruiter-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="recruiter-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-stone-900 dark:bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-recruiter-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          aria-label="Close recruiter summary"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with 30-Second Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            30-Second Executive Summary
          </span>
          <span className="text-xs text-stone-400">Recruiter & Hiring Lead Overview</span>
        </div>

        <div className="border-b border-stone-800 pb-5 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100 mb-1 font-display">
            {RECRUITER_SUMMARY.name}
          </h2>
          <p className="text-amber-400 font-medium text-base mb-3">
            {RECRUITER_SUMMARY.currentRole} · <span className="text-stone-300">{RECRUITER_SUMMARY.company}</span>
          </p>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {RECRUITER_SUMMARY.summary}
          </p>
        </div>

        {/* Two-Column Grid: Core Competencies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Card 1: Core Strengths */}
          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
            <div className="flex items-center gap-2 mb-2 text-stone-300 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Core Analytics & BI Strengths
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RECRUITER_SUMMARY.coreStrengths.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded text-xs bg-stone-800 text-stone-200 border border-stone-700/50">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Consulting & Delivery */}
          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
            <div className="flex items-center gap-2 mb-2 text-stone-300 font-semibold text-sm">
              <Briefcase className="w-4 h-4 text-amber-400" />
              Consulting & Delivery Leadership
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RECRUITER_SUMMARY.consulting.map((c) => (
                <span key={c} className="px-2 py-0.5 rounded text-xs bg-stone-800 text-stone-200 border border-stone-700/50">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Emerging AI Expertise */}
          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
            <div className="flex items-center gap-2 mb-2 text-stone-300 font-semibold text-sm">
              <Sparkles className="w-4 h-4 text-sky-400" />
              Emerging AI & Engineering
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RECRUITER_SUMMARY.emergingExpertise.map((ai) => (
                <span key={ai} className="px-2 py-0.5 rounded text-xs bg-stone-800 text-stone-200 border border-stone-700/50">
                  {ai}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Target Direction */}
          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
            <div className="flex items-center gap-2 mb-2 text-stone-300 font-semibold text-sm">
              <ArrowRight className="w-4 h-4 text-purple-400" />
              Deliberate Target Direction
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RECRUITER_SUMMARY.targetDirection.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Featured Projects */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">
            Selected High-Impact Work
          </h3>
          <div className="space-y-2.5">
            {RECRUITER_SUMMARY.selectedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onClose();
                  if (onSelectProject) {
                    onSelectProject(proj.id);
                  } else if (onExploreProjects) {
                    onExploreProjects();
                  }
                }}
                className="group flex items-start justify-between p-3.5 rounded-xl bg-stone-950/40 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-800/50 cursor-pointer transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-stone-100 group-hover:text-amber-300 transition-colors text-sm">
                      {proj.title}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-300">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-normal">{proj.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors shrink-0 mt-1 ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-800">
          <div className="text-xs text-stone-400">
            Current Location: <span className="text-stone-200">Tiger Analytics</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="recruiter-view-resume-btn"
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              View Full Resume
            </button>
            <a
              id="recruiter-connect-linkedin"
              href={CONFIG.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
