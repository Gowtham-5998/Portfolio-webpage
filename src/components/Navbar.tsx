import React, { useState } from 'react';
import { Search, Sun, Moon, Sparkles, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onOpenRecruiterView: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  onOpenSearch,
  onOpenRecruiterView,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Consulting & Delivery', href: '#consulting-delivery' },
    { label: 'Skills', href: '#technical-skills' },
    { label: 'AI Lab', href: '#ai-lab' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Knowledge Hub', href: '#knowledge-hub' },
    { label: 'Journey', href: '#learning-journey' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-stone-100 flex items-center justify-center text-stone-100 dark:text-stone-950 font-display font-bold text-sm tracking-tight group-hover:bg-amber-500 transition-colors">
            GR
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-stone-900 dark:text-stone-100 text-sm tracking-tight leading-none group-hover:text-amber-500 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
              Consultant · Tiger Analytics
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-stone-600 dark:text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Search Button */}
          <button
            id="nav-search-btn"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
            title="Search portfolio (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-stone-400" />
            <span className="hidden md:inline">Search...</span>
            <kbd className="hidden md:inline-block px-1 py-0.5 text-[9px] font-mono bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors border border-transparent hover:border-stone-200 dark:hover:border-stone-700"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          {/* View Resume Button */}
          <button
            id="nav-view-resume-btn"
            onClick={onOpenResume}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Recruiter View CTA */}
          <button
            id="nav-recruiter-btn"
            onClick={onOpenRecruiterView}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Recruiter View</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-search-btn"
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            id="mobile-theme-btn"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden px-4 pt-2 pb-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterView();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 text-center flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              Recruiter View
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-semibold bg-stone-200 dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-center flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
