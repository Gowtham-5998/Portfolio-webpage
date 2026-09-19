import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, ArrowRight, Layers, HelpCircle, RefreshCw } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Deployed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Prototype':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Experiment':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'Case Study':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-stone-800 text-stone-300 border-stone-700';
    }
  };

  return (
    <div
      id="project-detail-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-content"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-detail-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(
              project.status
            )}`}
          >
            {project.status}
          </span>
          <span className="text-xs text-stone-400">{project.date}</span>
          <div className="flex flex-wrap gap-1.5 ml-auto">
            {project.categories.map((c) => (
              <span
                key={c}
                className="px-2 py-0.5 rounded text-[11px] bg-stone-800 text-stone-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Short Description */}
        <div className="border-b border-stone-800 pb-6 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100 font-display mb-3">
            {project.title}
          </h2>
          <p className="text-base text-stone-300 leading-relaxed max-w-3xl mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 border border-stone-800 text-stone-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* External Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub Repository
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                Technical Case Study
              </a>
            )}
          </div>
        </div>

        {/* Section 1: Problem & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Business Problem & Context
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-emerald-400" />
              Architectural Approach
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">{project.approach}</p>
          </div>
        </div>

        {/* Section 2: Architecture Workflow Flowchart */}
        {project.architectureDiagram && project.architectureDiagram.length > 0 && (
          <div className="mb-8 p-5 rounded-xl bg-stone-950/60 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-stone-300 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              End-to-End Workflow Architecture
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2">
              {project.architectureDiagram.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-xs font-medium text-stone-200 shadow-sm">
                    <span className="text-amber-400 mr-1.5 font-mono text-[11px] font-bold">0{idx + 1}</span>
                    {step}
                  </div>
                  {idx < project.architectureDiagram!.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-stone-500 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Key Features & Contribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-stone-300 font-semibold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Key Capabilities & Features
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-stone-300 font-semibold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              My Direct Contribution
            </h3>
            <ul className="space-y-2">
              {project.myContribution.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 4: Engineering Decisions (Prompt #16) */}
        {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
          <div className="mb-8 p-5 rounded-xl bg-stone-950/80 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              Engineering Decisions & Trade-Off Thinking
            </h3>
            <div className="space-y-4">
              {project.engineeringDecisions.map((dec, idx) => (
                <div key={idx} className="border-b border-stone-800/80 pb-3 last:border-0 last:pb-0">
                  <h4 className="text-sm font-semibold text-stone-100 mb-1 flex items-center gap-1.5">
                    <span className="text-amber-400 font-mono text-xs">Q:</span>
                    {dec.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pl-4 border-l-2 border-amber-500/40">
                    {dec.answer}
                  </p>
                  {dec.alternativesConsidered && (
                    <p className="text-xs text-stone-400 mt-1 pl-4">
                      <span className="text-stone-300 font-medium">Alternative considered: </span>
                      {dec.alternativesConsidered}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: What Didn't Work (Prompt #17) */}
        {project.whatDidntWork && project.whatDidntWork.length > 0 && (
          <div className="mb-8 p-5 rounded-xl bg-stone-950/80 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-rose-400 font-semibold mb-4 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-rose-400" />
              Engineering Iterations: What Didn't Work & What Changed
            </h3>
            <div className="space-y-4">
              {project.whatDidntWork.map((iter, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-stone-900/80 border border-stone-800 space-y-2">
                  <div className="text-xs text-rose-300 flex items-start gap-1.5">
                    <span className="font-semibold uppercase tracking-wider text-rose-400 shrink-0">Failed:</span>
                    <span>{iter.failedApproach}</span>
                  </div>
                  <div className="text-xs text-amber-300 flex items-start gap-1.5">
                    <span className="font-semibold uppercase tracking-wider text-amber-400 shrink-0">Changed:</span>
                    <span>{iter.whatChanged}</span>
                  </div>
                  <div className="text-xs text-emerald-300 flex items-start gap-1.5">
                    <span className="font-semibold uppercase tracking-wider text-emerald-400 shrink-0">Result:</span>
                    <span>{iter.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 6: Results / Metrics & Key Takeaways */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          {project.resultsMetrics && (
            <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800">
              <h3 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                Demonstrated Results & Metrics
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {project.resultsMetrics.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Key Consulting & Technical Takeaway
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed italic">
              "{project.whatILearned}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
