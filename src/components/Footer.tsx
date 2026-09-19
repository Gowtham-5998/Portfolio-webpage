import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CONFIG } from '../data/portfolioData';

interface FooterProps {
  onOpenRecruiter: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRecruiter, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-display font-bold text-sm">
                GR
              </div>
              <span className="font-display font-bold text-stone-100 text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              {PERSONAL_INFO.positioning}. Helping enterprises turn complex data and emergent AI into reliable, high-impact business decisions.
            </p>
            <div className="flex items-center gap-3 text-stone-400">
              <a
                href={CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-stone-800 hover:text-amber-400 hover:bg-stone-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-stone-800 hover:text-amber-400 hover:bg-stone-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONFIG.EMAIL_ADDRESS}`}
                className="p-2 rounded-lg bg-stone-800 hover:text-amber-400 hover:bg-stone-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-100">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  Projects & Case Studies
                </a>
              </li>
              <li>
                <a href="#consulting-delivery" className="hover:text-amber-400 transition-colors">
                  Consulting & Delivery
                </a>
              </li>
              <li>
                <a href="#technical-skills" className="hover:text-amber-400 transition-colors">
                  Skills & Toolkit
                </a>
              </li>
              <li>
                <a href="#ai-lab" className="hover:text-amber-400 transition-colors">
                  AI Lab Experiments
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-amber-400 transition-colors">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#knowledge-hub" className="hover:text-amber-400 transition-colors">
                  Knowledge Hub Articles
                </a>
              </li>
              <li>
                <a href="#learning-journey" className="hover:text-amber-400 transition-colors">
                  Learning Journey
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About & Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Portals & Continuous Evolution Note */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-100">
              Executive Fast-Track
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={onOpenRecruiter}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                Recruiter 30-Sec Summary
              </button>
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
              >
                Curriculum Vitae
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800 text-xs text-stone-400 leading-relaxed">
              <span className="text-stone-300 font-medium block mb-1">Living Platform:</span>
              This portfolio is continuously updated as new projects are built, new technologies are learned, and new case studies are published.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with a decoupled living architecture.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
