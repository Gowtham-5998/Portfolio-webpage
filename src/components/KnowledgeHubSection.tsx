import React from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, FileText } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';
import { Article } from '../types/portfolio';

interface KnowledgeHubSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const KnowledgeHubSection: React.FC<KnowledgeHubSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="knowledge-hub" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Technical Writing & Synthesis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-3">
            Knowledge Hub
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Practical articles and frameworks exploring the intersection of enterprise analytics, business consulting delivery, and production AI engineering.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-500/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-display mb-2.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3 mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
