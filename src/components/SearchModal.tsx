import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Layers, BookOpen, FlaskConical, Briefcase, Code, ArrowRight } from 'lucide-react';
import { PROJECTS, ARTICLES, ARCHITECTURES, AI_LAB_EXPERIMENTS, TECHNICAL_STACK, LEARNING_LOG } from '../data/portfolioData';

interface SearchResult {
  id: string;
  type: 'project' | 'article' | 'architecture' | 'lab' | 'skill' | 'log';
  title: string;
  subtitle: string;
  category?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (id: string) => void;
  onSelectArticle: (id: string) => void;
  onSelectArchitecture: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onSelectArticle,
  onSelectArchitecture,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  const allItems: SearchResult[] = useMemo(() => {
    const list: SearchResult[] = [];

    // Projects
    PROJECTS.forEach((p) => {
      list.push({
        id: p.id,
        type: 'project',
        title: p.title,
        subtitle: `${p.status} · ${p.technologies.slice(0, 3).join(', ')}`,
        category: p.categories.join(', '),
      });
    });

    // Articles
    ARTICLES.forEach((a) => {
      list.push({
        id: a.id,
        type: 'article',
        title: a.title,
        subtitle: `${a.category} · ${a.readingTime}`,
        category: a.category,
      });
    });

    // Architecture
    ARCHITECTURES.forEach((arch) => {
      list.push({
        id: arch.id,
        type: 'architecture',
        title: arch.title,
        subtitle: arch.subtitle,
        category: arch.badge,
      });
    });

    // AI Lab
    AI_LAB_EXPERIMENTS.forEach((lab) => {
      list.push({
        id: lab.id,
        type: 'lab',
        title: lab.title,
        subtitle: `${lab.technology} · ${lab.tag}`,
        category: 'AI Lab',
      });
    });

    // Skills
    Object.entries(TECHNICAL_STACK).forEach(([group, skills]) => {
      skills.forEach((skill) => {
        list.push({
          id: `skill-${skill}`,
          type: 'skill',
          title: skill,
          subtitle: `Technical Stack in ${group}`,
          category: group,
        });
      });
    });

    // Learning Log
    LEARNING_LOG.forEach((log) => {
      list.push({
        id: log.id,
        type: 'log',
        title: `Learning Log: ${log.period}`,
        subtitle: log.learned.slice(0, 70) + '...',
        category: 'Learning Log',
      });
    });

    return list;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 8); // show popular default items
    }
    const q = query.toLowerCase();
    return allItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q)
      )
      .slice(0, 15);
  }, [allItems, query]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResult) => {
    onClose();
    if (item.type === 'project') {
      onSelectProject(item.id);
    } else if (item.type === 'article') {
      onSelectArticle(item.id);
    } else if (item.type === 'architecture') {
      onSelectArchitecture(item.id);
    } else if (item.type === 'lab') {
      const el = document.getElementById('ai-lab');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'skill') {
      const el = document.getElementById('technical-skills');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'log') {
      const el = document.getElementById('learning-journey');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'project':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'article':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'architecture':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'lab':
        return <FlaskConical className="w-4 h-4 text-purple-400" />;
      case 'skill':
        return <Code className="w-4 h-4 text-amber-300" />;
      case 'log':
        return <ArrowRight className="w-4 h-4 text-stone-400" />;
    }
  };

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="search-modal-content"
        className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-800 gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            id="global-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, architectures, articles, skills, experiments... (e.g. RAG, SQL, Copilot)"
            className="w-full bg-transparent border-0 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:ring-0"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-stone-400 hover:text-stone-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-stone-800 text-stone-400 rounded border border-stone-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-stone-800/40">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-stone-400 text-sm">
              No matching records found for "{query}". Try "RAG", "SQL", "LangGraph", or "Consulting".
            </div>
          ) : (
            filteredResults.map((res) => (
              <div
                key={`${res.type}-${res.id}`}
                onClick={() => handleSelect(res)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-stone-800/60 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-stone-950 border border-stone-800 group-hover:border-stone-700 transition-colors">
                    {getTypeIcon(res.type)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-100 group-hover:text-amber-300 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-stone-400 leading-tight">{res.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                    {res.type}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="px-4 py-2.5 bg-stone-950/60 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
          <span>Global Portfolio Index</span>
          <span>Click any item to view details directly</span>
        </div>
      </div>
    </div>
  );
};
