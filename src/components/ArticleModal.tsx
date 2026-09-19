import React from 'react';
import { X, Clock, Calendar, Tag, BookOpen, ExternalLink, Github } from 'lucide-react';
import { Article } from '../types/portfolio';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="article-modal-content"
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-article-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-100 font-display mb-4">
          {article.title}
        </h2>

        {/* Summary Card */}
        <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 text-sm text-stone-300 italic mb-8">
          "{article.summary}"
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed border-b border-stone-800 pb-8 mb-6">
          {article.content.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Tech tags & links */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {article.technologies.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-xs bg-stone-800 text-stone-300">
                #{t}
              </span>
            ))}
          </div>

          {article.githubUrl && (
            <a
              href={article.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code / Experiments
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
