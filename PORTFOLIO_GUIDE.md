# Gowtham R. — Professional Portfolio & Career Platform Guide

Welcome to your living professional portfolio platform. This codebase has been engineered specifically as an extensible, decoupled career operating system that scales with your growth from **Consultant at Tiger Analytics** through **AI Engineering, AI Consulting, and AI Solution Architecture**.

---

## 1. Architectural Overview & Design Philosophy

The architecture completely decouples **Content and Data** from the **Presentation Layer**:

```
src/
├── data/
│   └── portfolioData.ts     <-- SINGLE SOURCE OF TRUTH (All projects, experience, articles, skills)
├── types/
│   └── portfolio.ts         <-- TypeScript interfaces ensuring strict data contracts
├── components/
│   ├── Navbar.tsx           <-- Sticky executive navigation, search trigger, theme toggle
│   ├── Hero.tsx             <-- Executive positioning, core headline, primary CTAs
│   ├── CurrentlyBuilding.tsx<-- Dynamic primary focus banner
│   ├── CareerEvolution.tsx  <-- Visual career trajectory roadmap
│   ├── ProjectsSection.tsx  <-- Filterable case studies with category tags
│   ├── ConsultingDeliverySection.tsx <-- Orchestration model diagram & delivery cards
│   ├── SkillsSection.tsx    <-- Consulting toolkit & categorized technical competencies
│   ├── AiLabSection.tsx     <-- Targeted empirical micro-experiments & benchmarks
│   ├── ArchitectureGallery.tsx <-- System design blueprints & trade-off models
│   ├── KnowledgeHubSection.tsx <-- Technical writing, articles & deep dives
│   ├── LearningJourneySection.tsx <-- Stage-based expansion & chronological monthly log
│   ├── AboutSection.tsx     <-- 4 Pillars, philosophy quote, experience timeline, "How I Think"
│   ├── BeyondWorkSection.tsx<-- Grounded human dimensions & disciplined habits
│   ├── AskPortfolioPreview.tsx <-- Interactive RAG AI Assistant sandbox & architecture
│   ├── ContactSection.tsx   <-- Direct channels & inquiry form
│   ├── Footer.tsx           <-- Living architecture note & fast-track portals
│   ├── RecruiterModal.tsx   <-- 30-second high-density executive summary
│   ├── ResumeModal.tsx      <-- Clean printable CV with direct PDF link
│   ├── ProjectDetailModal.tsx <-- In-depth case study, engineering decisions & iterations
│   ├── ArchitectureModal.tsx <-- Full system blueprint inspection modal
│   ├── ArticleModal.tsx     <-- Markdown-style knowledge hub reader
│   └── SearchModal.tsx      <-- Global Cmd+K index across all portfolio assets
└── App.tsx                  <-- Root state manager, modal orchestrator, keyboard handlers
```

---

## 2. Content Management (How to Update Your Portfolio)

All portfolio content is located in **`src/data/portfolioData.ts`**. You do not need to modify HTML or JSX to update your profile, projects, or articles.

### A. Updating Your Contact Details & Resume Link
At the top of `src/data/portfolioData.ts`:
```typescript
export const CONFIG = {
  RESUME_URL: 'https://your-resume-link.pdf', // Replace with your Google Drive / Dropbox link
  LINKEDIN_URL: 'https://www.linkedin.com/in/gowtham-r-analytics',
  GITHUB_URL: 'https://github.com/gowtham-r',
  EMAIL_ADDRESS: 'gowtham.consulting@example.com',
};
```

### B. Updating "Currently Building"
When your primary project changes, update the `CURRENTLY_BUILDING` object in `src/data/portfolioData.ts`:
```typescript
export const CURRENTLY_BUILDING = {
  tagline: 'Active Sprint',
  title: 'AI Consulting Copilot',
  description: 'An AI-powered consulting assistant designed to help structure business problems...',
  exploring: ['RAG', 'LangChain', 'LangGraph', 'AI Agents', 'LLM Evaluation'],
  projectId: 'ai-consulting-copilot',
};
```

### C. Adding a New Project or Case Study
Add a new object to the `PROJECTS` array in `src/data/portfolioData.ts`:
```typescript
{
  id: 'my-new-project-slug',
  title: 'Project Title',
  categories: ['GenAI', 'RAG', 'Consulting'],
  technologies: ['Python', 'LangChain', 'ChromaDB', 'FastAPI'],
  status: 'Deployed', // 'Prototype' | 'Experiment' | 'Deployed' | 'Case Study'
  date: '2026',
  shortDescription: '1-2 sentence executive summary.',
  problem: 'What business or operational pain point did this solve?',
  approach: 'How did you architect the solution?',
  architectureDiagram: ['Input Source', 'Extraction', 'Vector DB', 'Reranker', 'LLM Output'],
  keyFeatures: ['Feature 1', 'Feature 2'],
  myContribution: ['Architected pipeline', 'Benchmarked retrieval'],
  challenges: ['Challenge and resolution'],
  engineeringDecisions: [
    {
      question: 'Why RAG instead of fine-tuning?',
      answer: 'Needed live zero-retraining updates with strict document-level ACLs.',
      alternativesConsidered: 'LoRA fine-tuning'
    }
  ],
  whatDidntWork: [
    {
      failedApproach: 'Initial naive 1000-char chunking',
      whatChanged: 'Switched to markdown header-aware semantic chunking',
      result: 'Context recall jumped from 61% to 89%'
    }
  ],
  whatILearned: 'Key architectural insight.',
  resultsMetrics: ['Sub-2s response time', 'Zero unsupported assertions in benchmark tests'],
  githubUrl: 'https://github.com/your-username/repo',
  demoUrl: 'https://your-demo.com'
}
```

### D. Adding a New AI Lab Micro-Experiment
Add an entry to the `AI_LAB_EXPERIMENTS` array:
```typescript
{
  id: 'lab-reranking-benchmark',
  title: 'Cross-Encoder Reranker Benchmark',
  technology: 'Cohere Rerank 3 / BGE-Reranker-Large',
  tag: 'RAG & Retrieval',
  date: '2026',
  question: 'Does cross-encoder reranking improve accuracy enough to justify +120ms latency?',
  experiment: 'Evaluated 100 domain questions against 10,000 PDF documents with and without cross-encoder.',
  result: 'Precision@3 increased from 64% to 88% with a 110ms p95 latency increase.',
  whatILearned: 'Reranking is the single highest ROI optimization in RAG pipelines.',
  githubUrl: 'https://github.com/gowtham-r/rag-reranking-benchmark'
}
```

### E. Adding a Monthly Learning Log Entry
Add a new record to `LEARNING_LOG`:
```typescript
{
  id: 'log-october-2026',
  period: 'October 2026',
  learned: 'LangGraph multi-agent cyclical state machines and checkpointing.',
  built: 'Human-in-the-loop review agent for consulting proposal drafts.',
  discovered: 'Agent loops require deterministic max-turn interrupts to prevent budget exhaustion.',
  next: 'Implement RAG evaluation with Ragas framework on real client benchmark sets.'
}
```

---

## 3. Future "Ask My Portfolio" Interactive RAG Integration

The frontend already features an interactive preview and sample queries under `#ask-portfolio`. When you are ready to connect a live LLM backend:

1. **Embedding Generation**: Run a script that reads `src/data/portfolioData.ts` and converts each project, article, and experience item into Markdown chunks with metadata tags (`type`, `title`, `date`).
2. **Vector Index**: Ingest embeddings into ChromaDB, Pinecone, or Firestore Vector Search.
3. **Backend Route**: Create a `/api/ask-portfolio` POST endpoint accepting `{ question: string }`.
4. **Retrieval**: Perform hybrid dense + lexical search, pass the top 4 chunks through a reranker, and synthesize the answer using Gemini Flash (`gemini-2.5-flash`).
5. **Connect App**: In `src/components/AskPortfolioPreview.tsx`, replace `setTimeout` with `await fetch('/api/ask-portfolio', ...)`!

---

## 4. Keyboard Shortcuts & Accessibility

- **`Cmd + K` or `Ctrl + K`**: Opens the instant global search modal, indexing all projects, architectures, articles, skills, and learning logs.
- **`Esc`**: Closes any active modal dialog.
- **Theme Switcher**: Top navbar sun/moon button toggles between high-contrast dark executive mode and warm daylight theme, automatically stored in `localStorage`.
- **`Print / Save` in Resume Modal**: Formatted clean styling for printing or saving directly to PDF.
