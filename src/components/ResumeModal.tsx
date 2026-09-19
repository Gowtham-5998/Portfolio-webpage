import React from 'react';
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_HISTORY, CONSULTING_TOOLKIT, TECHNICAL_STACK, CONFIG } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-800 mb-8 sticky top-0 bg-stone-900/95 backdrop-blur z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              Executive Profile
            </span>
            <span className="text-xs text-stone-400">Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save
            </button>
            <a
              id="resume-download-btn"
              href={CONFIG.RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Link
            </a>
            <button
              id="close-resume-modal"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors ml-2"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-stone-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 font-display mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg font-medium text-amber-400 mb-3">
              {PERSONAL_INFO.positioning}
            </p>
            <p className="text-sm text-stone-300 leading-relaxed max-w-3xl mb-4">
              {PERSONAL_INFO.coreIdentityQuote}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <span>{PERSONAL_INFO.company}</span>
              <span>•</span>
              <span>{CONFIG.EMAIL_ADDRESS}</span>
              <span>•</span>
              <a
                href={CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                LinkedIn Profile <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href={CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                GitHub Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold tracking-tight text-stone-100 font-display">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-8">
              {EXPERIENCE_HISTORY.map((exp) => (
                <div key={exp.title} className="relative pl-6 border-l-2 border-stone-800">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-stone-900 border-2 border-amber-500" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-stone-100">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-amber-400">
                        {exp.company}
                        {exp.promotionFromPrevious && (
                          <span className="ml-2 text-xs font-normal text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                            Promoted from Senior Business Analyst
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-stone-800 text-stone-300">
                      {exp.period}
                    </span>
                  </div>

                  {/* Groups if Consultant */}
                  {exp.groups && (
                    <div className="space-y-4 mt-4">
                      {exp.groups.map((grp) => (
                        <div key={grp.groupTitle} className="bg-stone-950/40 p-3.5 rounded-xl border border-stone-800/70">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                            {grp.groupTitle}
                          </h4>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
                            {grp.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-400 mt-1">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights if Senior Business Analyst */}
                  {exp.highlights && (
                    <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300 mt-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Consulting & Delivery Toolkit */}
          <div>
            <h2 className="text-base font-bold text-stone-100 uppercase tracking-wider mb-3">
              Consulting & Delivery Toolkit
            </h2>
            <div className="flex flex-wrap gap-2">
              {CONSULTING_TOOLKIT.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-800/80 text-stone-200 border border-stone-700/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div>
            <h2 className="text-base font-bold text-stone-100 uppercase tracking-wider mb-3">
              Technical & Analytical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(TECHNICAL_STACK).map(([category, skills]) => (
                <div key={category} className="p-3 rounded-xl bg-stone-950/50 border border-stone-800">
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[11px] bg-stone-800 text-stone-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Direction Note */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-stone-300">
            <span className="font-semibold text-amber-300">Target Trajectory: </span>
            {PERSONAL_INFO.careerDirection.join(' → ')}. Focused on bridging enterprise analytics, business advisory, and production AI solution architecture.
          </div>
        </div>
      </div>
    </div>
  );
};
