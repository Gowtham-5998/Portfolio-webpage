import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { CareerEvolution } from './components/CareerEvolution';
import { ProjectsSection } from './components/ProjectsSection';
import { ConsultingDeliverySection } from './components/ConsultingDeliverySection';
import { SkillsSection } from './components/SkillsSection';
import { AiLabSection } from './components/AiLabSection';
import { ArchitectureGallery } from './components/ArchitectureGallery';
import { KnowledgeHubSection } from './components/KnowledgeHubSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { AboutSection } from './components/AboutSection';
import { BeyondWorkSection } from './components/BeyondWorkSection';
import { AskPortfolioPreview } from './components/AskPortfolioPreview';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { RecruiterModal } from './components/RecruiterModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';

// Data
import { Project, ArchitectureItem, Article } from './types/portfolio';
import { PROJECTS, ARCHITECTURES, ARTICLES } from './data/portfolioData';

export default function App() {
  // Theme state: default to dark for executive consulting look
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark theme
  });

  // Modals state
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeArchitecture, setActiveArchitecture] = useState<ArchitectureItem | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Sync theme with DOM root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDarkMode]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsRecruiterModalOpen(false);
        setIsResumeModalOpen(false);
        setIsSearchModalOpen(false);
        setActiveProject(null);
        setActiveArchitecture(null);
        setActiveArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenProjectById = (id: string) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) {
      setActiveProject(found);
    }
  };

  const handleOpenArticleById = (id: string) => {
    const found = ARTICLES.find((a) => a.id === id);
    if (found) {
      setActiveArticle(found);
    }
  };

  const handleOpenArchitectureById = (id: string) => {
    const found = ARCHITECTURES.find((arch) => arch.id === id);
    if (found) {
      setActiveArchitecture(found);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans transition-colors duration-200 selection:bg-amber-500 selection:text-stone-950">
      {/* 1. Global Navigation Bar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenRecruiterView={() => setIsRecruiterModalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      <main>
        {/* 2. Executive Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onExploreWork={() => {
            const el = document.getElementById('projects');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Currently Building Banner */}
        <CurrentlyBuilding
          onViewProject={(projectId) => handleOpenProjectById(projectId)}
        />

        {/* 4. Career Evolution Timeline */}
        <CareerEvolution />

        {/* 5. Projects with category filter & case studies */}
        <ProjectsSection onSelectProject={(project) => setActiveProject(project)} />

        {/* 6. Connecting Business, Technology & Delivery (Consulting & Delivery) */}
        <ConsultingDeliverySection />

        {/* 7. Technical & Consulting Skills Toolkit */}
        <SkillsSection />

        {/* 8. AI Lab (Targeted Micro-Experiments & Empirical Benchmarks) */}
        <AiLabSection />

        {/* 9. Architecture Gallery (System Design & Trade-Off Analysis) */}
        <ArchitectureGallery
          onSelectArchitecture={(arch) => setActiveArchitecture(arch)}
        />

        {/* 10. Knowledge Hub (Technical Articles) */}
        <KnowledgeHubSection
          onSelectArticle={(art) => setActiveArticle(art)}
        />

        {/* 11. Learning Journey & Chronological Monthly Log */}
        <LearningJourneySection />

        {/* 12. About Gowtham, 4 Pillars, Philosophy & Experience */}
        <AboutSection />

        {/* 13. Beyond the Work (Personal Disciplines & Grounded Interests) */}
        <BeyondWorkSection />

        {/* 14. Ask My Portfolio (Interactive AI Assistant Preview) */}
        <AskPortfolioPreview />

        {/* 15. Let's Connect & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* 16. Executive Footer */}
      <Footer
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* MODALS */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
        onOpenResume={() => {
          setIsRecruiterModalOpen(false);
          setIsResumeModalOpen(true);
        }}
        onExploreProjects={() => {
          setIsRecruiterModalOpen(false);
          const el = document.getElementById('projects');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreConsulting={() => {
          setIsRecruiterModalOpen(false);
          const el = document.getElementById('consulting-delivery');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <ArchitectureModal
        architecture={activeArchitecture}
        onClose={() => setActiveArchitecture(null)}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProject={handleOpenProjectById}
        onSelectArticle={handleOpenArticleById}
        onSelectArchitecture={handleOpenArchitectureById}
      />
    </div>
  );
}
