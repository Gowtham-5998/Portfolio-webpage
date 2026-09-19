export type ProjectStatus = 'Experiment' | 'Prototype' | 'Deployed' | 'Case Study';

export type ProjectCategory =
  | 'All'
  | 'Analytics'
  | 'BI'
  | 'Machine Learning'
  | 'GenAI'
  | 'RAG'
  | 'AI Agents'
  | 'Architecture'
  | 'Consulting'
  | 'AI Engineering'
  | 'LangChain';

export interface EngineeringDecision {
  question: string;
  answer: string;
  alternativesConsidered?: string;
}

export interface ProjectFailureIteration {
  failedApproach: string;
  whatChanged: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  categories: ProjectCategory[];
  technologies: string[];
  status: ProjectStatus;
  shortDescription: string;
  date: string;
  featured?: boolean;
  
  // Detailed case study information
  problem: string;
  approach: string;
  architectureDiagram?: string[];
  keyFeatures: string[];
  myContribution: string[];
  challenges: string[];
  
  // Real-world engineering reasoning & iteration
  engineeringDecisions?: EngineeringDecision[];
  whatDidntWork?: ProjectFailureIteration[];
  whatILearned: string;
  resultsMetrics?: string[];
  
  // Links (configurable placeholders)
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  isComingSoon?: boolean;
}

export interface AiLabExperiment {
  id: string;
  title: string;
  technology: string;
  date: string;
  tag: string;
  question: string;
  experiment: string;
  result: string;
  whatILearned: string;
  githubUrl?: string;
}

export interface ArchitectureItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  problem: string;
  diagramFlow: { step: string; label: string; desc: string }[];
  components: { name: string; role: string; tech: string }[];
  dataFlow: string[];
  technologyChoices: { tech: string; reason: string }[];
  alternativesConsidered: { alternative: string; whyNot: string }[];
  tradeOffs: string[];
  scalability: string;
  security: string;
  cost: string;
  evaluation: string;
  lessonsLearned: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  summary: string;
  content: string[];
  relatedProjects?: string[];
  technologies: string[];
  githubUrl?: string;
}

export interface LearningStage {
  stage: 'Strong Foundation' | 'Building' | 'Deepening' | 'Exploring';
  description: string;
  skills: string[];
}

export interface LearningLogEntry {
  id: string;
  period: string; // e.g. "September 2026"
  learned: string;
  built: string;
  discovered: string;
  next: string;
}

export interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  promotionFromPrevious?: boolean;
  groups?: {
    groupTitle: string;
    bullets: string[];
  }[];
  highlights?: string[];
}

export interface PersonalInterest {
  title: string;
  description: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  currentRole: string;
  company: string;
  positioning: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  careerDirection: string[];
  heroHeadline: string;
  heroSubtext1: string;
  heroSubtext2: string;
  aboutStory: string[];
  coreIdentityQuote: string;
  pillars: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    skills: string[];
  }[];
}
