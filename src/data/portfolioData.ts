import {
  PersonalInfo,
  Project,
  AiLabExperiment,
  ArchitectureItem,
  Article,
  LearningStage,
  LearningLogEntry,
  ExperienceRole,
  PersonalInterest,
} from '../types/portfolio';

export const CONFIG = {
  RESUME_URL: '#resume',
  LINKEDIN_URL: 'https://www.linkedin.com/in/gowtham-r-analytics',
  GITHUB_URL: 'https://github.com/gowtham-r',
  EMAIL_ADDRESS: 'raj.gowtham9895@gmail.com',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Gowtham R.',
  currentRole: 'Consultant',
  company: 'Tiger Analytics',
  positioning: 'Consultant | Analytics | Business Intelligence | AI',
  location: 'Bengaluru / Global Delivery',
  email: CONFIG.EMAIL_ADDRESS,
  linkedinUrl: CONFIG.LINKEDIN_URL,
  githubUrl: CONFIG.GITHUB_URL,
  resumeUrl: CONFIG.RESUME_URL,
  careerDirection: [
    'Analytics',
    'AI Engineering',
    'AI Consulting',
    'AI Solution Architecture',
  ],
  heroHeadline: 'Turning Data Into Decisions. Building Toward AI.',
  heroSubtext1:
    'I’m a Consultant and Analytics Professional with a strong foundation in SQL, Power BI and Business Intelligence, increasingly working across client communication, delivery coordination and project management while expanding into Machine Learning, Generative AI and AI-powered solutions.',
  heroSubtext2:
    'I enjoy connecting business problems, data, technology and people to turn ambiguous requirements into practical solutions.',
  coreIdentityQuote:
    'A business-oriented technology consultant who combines analytics, business understanding, client communication and delivery coordination, while building deeper expertise in Machine Learning, Generative AI and AI-powered solutions.',
  aboutStory: [
    'My career began in analytics and business intelligence, where I developed a strong foundation in SQL, Power BI, data analysis and business problem solving.',
    'As my career has progressed into a Consultant role, my responsibilities have expanded beyond analytical delivery. I increasingly work across client communication, requirement understanding, team coordination, project tracking, status reporting and delivery management — acting as a bridge between business stakeholders and technical teams.',
    'At the same time, I am deliberately expanding my technical capabilities toward Machine Learning, Generative AI, RAG, LLM applications and AI solution architecture.',
    'What interests me most is the intersection of business and technology: understanding the real problem, identifying where data and AI can create value, designing a practical solution, and helping teams turn that solution into something usable.',
    'My long-term goal is to become a technology consultant who can comfortably move across business strategy, analytics, AI and solution architecture.',
  ],
  pillars: [
    {
      number: '01',
      title: 'Analytics',
      subtitle: 'BI & Decision Support',
      description:
        'SQL, Power BI, Business Intelligence, data modeling, semantic layers, and actionable visualization for enterprise decisions.',
      skills: ['SQL', 'Power BI', 'DAX', 'Data Modeling', 'Business Intelligence'],
    },
    {
      number: '02',
      title: 'Consulting',
      subtitle: 'Strategy & Problem Framing',
      description:
        'Business problem solving, requirement discovery, stakeholder communication, and translating ambiguous business needs into executable technology solutions.',
      skills: ['Problem Structuring', 'Stakeholder Alignment', 'Requirements Definition', 'Business-Tech Translation'],
    },
    {
      number: '03',
      title: 'Delivery Leadership',
      subtitle: 'Orchestration & Execution',
      description:
        'Client coordination, team alignment, Jira tracking, status reporting, risk/dependency management, and accountable end-to-end delivery.',
      skills: ['Client Coordination', 'Jira Sprint Tracking', 'Risk & Dependency Management', 'Status Reporting'],
    },
    {
      number: '04',
      title: 'AI',
      subtitle: 'Applied Machine Learning & GenAI',
      description:
        'Machine Learning, Generative AI, RAG pipelines, LLM application engineering, autonomous agents, and scalable solution architecture.',
      skills: ['Machine Learning', 'Generative AI', 'RAG Pipelines', 'LangChain & LangGraph', 'AI Agents'],
    },
  ],
};

export const CURRENTLY_BUILDING = {
  title: 'AI Consulting Copilot',
  tagline: 'Currently Building',
  description:
    'An AI-powered consulting assistant designed to help structure business problems, research domains, generate hypotheses, identify data requirements, evaluate AI opportunities and support solution design.',
  exploring: [
    'RAG',
    'LangChain',
    'LangGraph',
    'AI Agents',
    'LLM Evaluation',
  ],
  projectId: 'ai-consulting-copilot',
};

export const CAREER_EVOLUTION_STEPS = [
  {
    step: '01',
    role: 'Senior Business Analyst',
    status: 'completed',
    type: 'experience',
    badge: 'Foundation',
    description: 'Deep analytical foundation in SQL, Power BI, data analysis, and dashboard solutions.',
  },
  {
    step: '02',
    role: 'Consultant',
    status: 'current',
    type: 'experience',
    badge: 'Current Role · Tiger Analytics',
    description: 'Promoted to Consultant; leading client communication, requirement framing, and delivery.',
  },
  {
    step: '03',
    role: 'Analytics + Consulting',
    status: 'current',
    type: 'core',
    badge: 'Active Focus',
    description: 'Operating at the nexus of data modeling, executive decision support, and client advisory.',
  },
  {
    step: '04',
    role: 'Client & Delivery Leadership',
    status: 'current',
    type: 'core',
    badge: 'Active Focus',
    description: 'Managing dependencies, Jira workflows, team coordination, and delivery milestones.',
  },
  {
    step: '05',
    role: 'Machine Learning',
    status: 'direction',
    type: 'technical',
    badge: 'Career Direction',
    description: 'Predictive modeling, feature engineering, and statistical ML application in business.',
  },
  {
    step: '06',
    role: 'Generative AI',
    status: 'direction',
    type: 'technical',
    badge: 'Career Direction',
    description: 'Prompt engineering, embeddings, LLM orchestration, and enterprise semantic search.',
  },
  {
    step: '07',
    role: 'AI Engineering',
    status: 'direction',
    type: 'technical',
    badge: 'Career Direction',
    description: 'Building robust RAG pipelines, LangChain/LangGraph flows, agent evaluation, and observability.',
  },
  {
    step: '08',
    role: 'AI Consulting',
    status: 'direction',
    type: 'target',
    badge: 'Target Horizon',
    description: 'Advising enterprise leadership on AI feasibility, ROI, domain discovery, and adoption.',
  },
  {
    step: '09',
    role: 'AI Solution Architecture',
    status: 'direction',
    type: 'target',
    badge: 'Long-term North Star',
    description: 'Architecting scalable, secure, multi-agent enterprise AI systems and data ecosystems.',
  },
];

export const EXPERIENCE_HISTORY: ExperienceRole[] = [
  {
    title: 'Consultant',
    company: 'Tiger Analytics',
    period: 'January 2026 – Present',
    isCurrent: true,
    promotionFromPrevious: true,
    groups: [
      {
        groupTitle: 'Analytics & Technical',
        bullets: [
          'Analytics and Business Intelligence solution delivery.',
          'Advanced SQL querying, schema analysis, and performance optimization.',
          'Power BI enterprise dashboard design and DAX calculation engineering.',
          'Data analysis and business problem solving for cross-functional initiatives.',
          'Dashboard and analytical solution development aligned with client objectives.',
        ],
      },
      {
        groupTitle: 'Client & Stakeholder Management',
        bullets: [
          'Act as a primary bridge between client stakeholders and technical delivery teams.',
          'Help translate ambiguous client requirements and strategic priorities into actionable engineering work.',
          'Participate in regular client discussions, sprint reviews, and advisory follow-ups.',
          'Communicate project progress, technical questions, dependencies, and potential bottlenecks proactively.',
          'Help align high-level business expectations with day-to-day technical execution.',
        ],
      },
      {
        groupTitle: 'Project & Delivery Management',
        bullets: [
          'Collect regular progress updates across technical and analytical team members.',
          'Coordinate work streams and track dependencies across project activities.',
          'Monitor deliverables, sprint milestones, and delivery timelines.',
          'Track blockers diligently and follow up on open actions to maintain momentum.',
          'Monitor Jira boards, backlog hygiene, and team task completion status.',
          'Prepare and communicate comprehensive project status reports for management.',
          'Help maintain clear visibility into project progress, delivery velocity, and operational risks.',
        ],
      },
      {
        groupTitle: 'Consulting',
        bullets: [
          'Understand core business requirements and underlying operational drivers.',
          'Structure complex, ambiguous business problems into clear analytical frameworks.',
          'Connect business objectives with analytical and technical solution blueprints.',
          'Support evidence-based decision-making through rigorous data analysis.',
          'Coordinate effectively between business sponsors and technical developers.',
        ],
      },
    ],
  },
  {
    title: 'Senior Business Analyst',
    company: 'Tiger Analytics',
    period: 'Previous Role',
    isCurrent: false,
    highlights: [
      'Delivered robust Business Intelligence and data analysis solutions.',
      'Authored complex SQL queries and data models for enterprise reporting.',
      'Developed high-impact Power BI executive dashboards and self-service analytics.',
      'Conducted exploratory data analysis to isolate business trends and anomalies.',
      'Gathered business requirements from operational stakeholders and converted them into technical specifications.',
      'Collaborated cross-functionally to drive business problem solving via data.',
      'Promoted to Consultant following demonstrated excellence in technical execution and client-facing ownership.',
    ],
  },
];

export const CONSULTING_DELIVERY = {
  title: 'Connecting Business, Technology & Delivery',
  explanation:
    'As my role has evolved, I increasingly operate at the intersection of client expectations, business requirements and technical delivery. I help maintain alignment between stakeholders and teams while ensuring progress, dependencies and open actions remain visible.',
  flowNodes: [
    { label: 'CLIENT', role: 'Strategic Stakeholder', desc: 'Sets business priorities, KPIs, and operational challenges' },
    { label: 'Requirements / Priorities', role: 'Translation Layer', desc: 'Raw business needs, domain context, and success criteria' },
    { label: 'CONSULTANT', role: 'Gowtham R. (Tiger Analytics)', desc: 'Structures problem, aligns teams, orchestrates execution' },
    { label: 'Business Context', role: 'Value Validation', desc: 'Ensures the analytical model answers the real commercial questions' },
    { label: 'Technical Team', role: 'Engineering Delivery', desc: 'Coordinates data pipelines, BI models, and AI code implementation' },
    { label: 'Delivery', role: 'Operational Discipline', desc: 'Tracks Jira sprints, dependencies, risks, and milestone velocity' },
    { label: 'Project Outcome', role: 'Verified Business Impact', desc: 'Predictable delivery, production adoption, and clear executive ROI' },
  ],
  cards: [
    {
      title: 'Client Management',
      icon: 'Handshake',
      subtitle: 'Requirements, communication, expectations and follow-ups.',
      details: [
        'Translating complex business needs into clear analytical scopes',
        'Managing client expectations regarding timelines, feasibility, and dependencies',
        'Leading recurring check-ins, sprint reviews, and actionable follow-ups',
        'Maintaining trust through transparent, non-jargon communication',
      ],
    },
    {
      title: 'Team Coordination',
      icon: 'Users',
      subtitle: 'Collecting updates, aligning work and following up on actions.',
      details: [
        'Daily stand-up alignment and unblocking technical roadblocks',
        'Ensuring developers understand the business rationale behind tasks',
        'Facilitating clear handoffs between data, BI, and business teams',
        'Fostering shared accountability for end-to-end deliverables',
      ],
    },
    {
      title: 'Delivery Management',
      icon: 'CalendarClock',
      subtitle: 'Tracking milestones, dependencies, blockers and deliverables.',
      details: [
        'Monitoring delivery milestones against planned schedules',
        'Proactively tracking upstream and downstream data dependencies',
        'Root-cause resolution of blockers before they impact release dates',
        'Maintaining steady sprint velocity and deliverable quality',
      ],
    },
    {
      title: 'Reporting',
      icon: 'FileBarChart',
      subtitle: 'Project status, progress updates, risks and management communication.',
      details: [
        'Authoring executive-level progress and milestone scorecards',
        'Managing Jira tracking boards, sprint burndowns, and task hygiene',
        'Highlighting emerging risks with proactive mitigation proposals',
        'Providing management with clear, accurate status visibility',
      ],
    },
  ],
};

export const CONSULTING_TOOLKIT = [
  'Stakeholder Management',
  'Client Communication',
  'Requirement Gathering',
  'Business Analysis',
  'Team Coordination',
  'Project Tracking',
  'Jira',
  'Status Reporting',
  'Risk Tracking',
  'Dependency Management',
  'Delivery Management',
  'Business-Technology Translation',
];

export const TECHNICAL_STACK = {
  'Analytics & BI': [
    'SQL',
    'Power BI',
    'DAX',
    'Data Modeling',
    'Data Visualization',
    'Business Intelligence',
  ],
  'Programming & Data': [
    'Python',
    'SQL',
    'Data Analysis',
    'Pandas',
    'ETL Pipelines',
  ],
  'Machine Learning': [
    'Machine Learning',
    'Predictive Analytics',
    'Model Evaluation',
    'Feature Engineering',
    'Classification & Regression',
  ],
  'Generative AI': [
    'Generative AI',
    'LLMs',
    'Prompt Engineering',
    'RAG',
    'Embeddings',
    'Vector Databases',
    'LLM Applications',
  ],
  'AI Engineering': [
    'LangChain',
    'LangGraph',
    'AI Agents',
    'Agentic Workflows',
    'AI Evaluation',
    'AI Orchestration',
  ],
  'Emerging Technologies': [
    'MCP (Model Context Protocol)',
    'Multimodal AI',
    'AI Observability',
    'AI Architecture',
    'Reranking Models',
  ],
};

export const LEARNING_JOURNEY_STAGES: LearningStage[] = [
  {
    stage: 'Strong Foundation',
    description: 'Extensively applied in real client enterprise environments and daily consulting delivery.',
    skills: ['SQL', 'Power BI', 'Analytics', 'Business Intelligence', 'Data Modeling', 'DAX'],
  },
  {
    stage: 'Building',
    description: 'Active practical coding, scripting, and statistical predictive modeling.',
    skills: ['Python', 'Machine Learning', 'Generative AI', 'Predictive Modeling', 'Feature Engineering'],
  },
  {
    stage: 'Deepening',
    description: 'Systematic technical experimentation, architecture design, and pipeline benchmarking.',
    skills: ['RAG', 'LangChain', 'LangGraph', 'AI Agents', 'LLM Evaluation', 'Vector Search'],
  },
  {
    stage: 'Exploring',
    description: 'Tracking bleeding-edge protocols, systems paradigms, and enterprise patterns.',
    skills: ['MCP (Model Context Protocol)', 'Multimodal AI', 'AI Architecture', 'AI Observability'],
  },
];

export const LEARNING_LOG: LearningLogEntry[] = [
  {
    id: 'log-2026-09',
    period: 'September 2026',
    learned: 'RAG fundamentals, vector similarity search, chunking strategies, and LangChain retriever abstractions.',
    built: 'Document Q&A prototype with semantic retrieval and source attribution.',
    discovered: 'Fixed chunking without semantic overlap causes critical context loss on multi-page tabular reports.',
    next: 'Benchmark contextual compression, reciprocal rank fusion (RRF), and TruLens/Ragas evaluation.',
  },
  {
    id: 'log-2026-08',
    period: 'August 2026',
    learned: 'Stateful workflow graphs using LangGraph, cyclical agent patterns, and conditional edge routing.',
    built: 'Multi-step hypothesis generator for business problem framing.',
    discovered: 'Autonomous agent loops require strict guardrail conditions to prevent degenerative prompt cycling.',
    next: 'Integrate tool inspection and structured output validation with Pydantic.',
  },
  {
    id: 'log-2026-07',
    period: 'July 2026',
    learned: 'Embedding models trade-offs (dimensions vs inference latency), dense vs sparse vector search.',
    built: 'Benchmarking script comparing text-embedding-3-small against local sentence-transformers.',
    discovered: 'Domain-specific consulting acronyms fail in standard embeddings without specialized query expansion.',
    next: 'Test hybrid BM25 + dense embedding retrieval pipelines.',
  },
  {
    id: 'log-2026-06',
    period: 'June 2026',
    learned: 'LLM evaluation metrics: Faithfulness, Answer Relevance, Context Recall, and Semantic Precision.',
    built: 'Automated test suite using golden Q&A dataset for enterprise domain queries.',
    discovered: 'Subjective human evaluations drift rapidly; automated LLM-as-a-judge requires rigorous few-shot calibration.',
    next: 'Construct end-to-end evaluation harness into the AI Consulting Copilot.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-consulting-copilot',
    title: 'AI Consulting Copilot',
    categories: ['GenAI', 'Consulting', 'RAG', 'AI Agents'],
    technologies: ['Python', 'LLM', 'RAG', 'LangChain', 'LangGraph', 'Vector DB', 'Pydantic'],
    status: 'Prototype',
    featured: true,
    date: '2026',
    shortDescription:
      'An AI-powered consulting assistant designed to help structure business problems, research domains, generate hypotheses, identify data requirements, evaluate AI opportunities and support solution design.',
    problem:
      'When consulting teams initiate engagements, domain research, problem structuring, and hypothesis formulation consume dozens of manual hours. Junior analysts often struggle to balance broad industry patterns with specific analytical requirements, resulting in misaligned project scopes.',
    approach:
      'Designed a phased consulting workflow engine: Business Problem Framing → Domain Retrieval → Exploratory Analysis → Hypothesis Generation → AI Feasibility Scoring → Solution Architecture Drafting → Executive Recommendations.',
    architectureDiagram: [
      'Client Problem Input',
      'Domain Knowledge RAG (Industry Taxonomy)',
      'Hypothesis Formulation Agent (LangGraph)',
      'Data Requirement Synthesizer',
      'AI Opportunity Evaluator (ROI & Feasibility)',
      'Structured Consulting Brief Output',
    ],
    keyFeatures: [
      'Problem Decomposition Engine: Deconstructs ambiguous client briefs into MECE issue trees.',
      'Domain-Specific RAG: Retrieves industry benchmarks, KPI libraries, and common analytical traps.',
      'Hypothesis Generator: Produces testable business hypotheses linked directly to potential data tables.',
      'AI Feasibility Scorer: Evaluates whether a problem requires classical BI, predictive ML, or Generative AI.',
      'Structured Brief Exporter: Formats output for senior stakeholder alignment meetings.',
    ],
    myContribution: [
      'Conceptualized the end-to-end consulting framework based on real client advisory workflows.',
      'Designed the multi-stage LangGraph workflow ensuring strict state transitions between stages.',
      'Curated prompt templates specifically optimized for business clarity rather than generic conversational chat.',
      'Implemented structured output schemas enforcing data-source linkage for every generated hypothesis.',
    ],
    challenges: [
      'Preventing generic hallucinations: Early iterations generated high-level platitudes instead of quantifiable business drivers.',
      'Balancing agent autonomy with predictable output structure required for consulting deliverables.',
    ],
    engineeringDecisions: [
      {
        question: 'Why RAG instead of fine-tuning?',
        answer:
          'Consulting frameworks and industry benchmarks update frequently. RAG enables dynamic ingestion of new client documents, industry research, and corporate taxonomy without re-training costs or risks of outdated parametric memory.',
        alternativesConsidered: 'Fine-tuning a smaller open-source model was evaluated, but discarded due to high dataset maintenance overhead and inability to cite specific source documents.',
      },
      {
        question: 'Why LangGraph over simple sequential chains?',
        answer:
          'Consulting problem framing is inherently non-linear. When an initial hypothesis lacks available data sources, the system must loop back and refine the problem definition. LangGraph supports stateful cyclical graphs with conditional edge branching.',
      },
      {
        question: 'Why structured Pydantic schemas for LLM responses?',
        answer:
          'Free-text LLM responses fail enterprise integration. By enforcing strict JSON schemas for hypotheses, KPIs, and data requirements, the output can be directly fed into Jira boards, Power BI models, and slide decks.',
      },
      {
        question: 'What happens when retrieval confidence is low?',
        answer:
          'The system flags the specific hypothesis with an explicit "Insufficient Domain Evidence" warning, prompting the consultant for manual input rather than fabricating industry benchmarks.',
      },
    ],
    whatDidntWork: [
      {
        failedApproach: 'Single-prompt generation attempting to output problem statement, hypotheses, and AI recommendations all in one shot.',
        whatChanged: 'Decomposed the pipeline into a 5-step LangGraph state machine with validation gates between problem framing and solutioning.',
        result: 'Output specificity improved dramatically; eliminated generic fluff and grounded every hypothesis in measurable KPIs.',
      },
      {
        failedApproach: 'Naive vector similarity search over unstructured consulting PDFs.',
        whatChanged: 'Adopted chunking with metadata enrichment (industry, document section, KPI tags) and hybrid BM25 + dense retrieval.',
        result: 'Precision of retrieved industry benchmarks increased from ~55% to 88%.',
      },
    ],
    whatILearned:
      'Technology in consulting is only as good as the problem definition. Building this copilot reinforced that structuring the prompt around business consulting logic (MECE, hypothesis-led inquiry) is far more critical than simply picking the newest foundational model.',
    resultsMetrics: [
      'Reduced initial domain discovery briefing draft time from 6 hours to ~35 minutes.',
      'Standardized hypothesis format across 100% of generated consulting briefs.',
      'Built as modular architecture ready for private enterprise vector store ingestion.',
    ],
    githubUrl: '#',
    demoUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 'enterprise-bi-semantic-layer',
    title: 'Enterprise Analytics & Semantic BI Platform',
    categories: ['Analytics', 'BI', 'Consulting'],
    technologies: ['SQL', 'Power BI', 'DAX', 'Data Modeling', 'Star Schema', 'ETL'],
    status: 'Case Study',
    date: '2025 – 2026',
    shortDescription:
      'Production-grade business intelligence architecture harmonizing disparate data sources into a centralized semantic model and executive Power BI suites for enterprise decision-makers.',
    problem:
      'Fragmented departmental reporting resulted in conflicting KPI definitions, slow dashboard load times (>45 seconds), and heavy dependency on ad-hoc manual Excel extracts.',
    approach:
      'Engineered a star-schema dimensional model in SQL and Power BI, consolidated metric definitions in a centralized DAX semantic layer, and conducted stakeholder alignment workshops.',
    architectureDiagram: [
      'Transactional Source Systems',
      'SQL Staging & Dimensional Modeling',
      'Centralized Power BI Semantic Model',
      'Role-Based Executive Dashboards',
    ],
    keyFeatures: [
      'Robust Star Schema with optimized dimension-fact relationships and surrogate keys.',
      'Time-intelligence DAX measures supporting dynamic Year-over-Year, MTD, and variance calculations.',
      'Row-Level Security (RLS) ensuring strict regional data privacy.',
      'Sub-second query performance via composite models and aggregations.',
    ],
    myContribution: [
      'Authored optimized SQL transformations and complex DAX calculation logic.',
      'Collaborated directly with client business heads to establish single-source-of-truth KPI definitions.',
      'Mentored junior analysts on dimensional modeling best practices and DAX performance tuning.',
    ],
    challenges: [
      'Resolving historical discrepancies across ERP and CRM records required deep data profiling and cross-functional stakeholder negotiations.',
    ],
    engineeringDecisions: [
      {
        question: 'Why Star Schema instead of flat tables?',
        answer:
          'Star schemas minimize memory footprint in the VertiPaq engine, enable bi-directional cross-filtering where strictly needed, and guarantee blazing performance for executive slice-and-dice.',
      },
    ],
    whatDidntWork: [
      {
        failedApproach: 'Initial use of calculated columns for high-cardinality date filters.',
        whatChanged: 'Re-engineered logic into purely in-memory dynamic DAX measures and calendar dimension lookup tables.',
        result: 'Decreased model file size by 62% and refreshed 4x faster.',
      },
    ],
    whatILearned:
      'Technical elegance means nothing if business stakeholders do not trust the number. 80% of successful BI delivery is stakeholder consensus on metric definitions.',
    resultsMetrics: [
      'Accelerated dashboard load times from 45+ seconds to under 2.1 seconds.',
      'Eliminated 12 redundant spreadsheets across 4 business departments.',
      'Adopted by executive leadership for weekly operational reviews.',
    ],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'rag-document-intelligence',
    title: 'Domain-Grounded RAG Document Engine',
    categories: ['RAG', 'GenAI', 'AI Engineering'],
    technologies: ['Python', 'LangChain', 'ChromaDB', 'OpenAI/Gemini', 'Reranker', 'FastAPI'],
    status: 'Prototype',
    date: '2026',
    shortDescription:
      'Enterprise document question-answering system combining recursive chunking, hybrid vector retrieval, and reranking to query complex policy documents without hallucination.',
    problem:
      'Standard LLM chat interfaces hallucinate facts or cite non-existent clauses when queried on multi-page internal compliance and consulting guidelines.',
    approach:
      'Constructed a pipeline utilizing document layout extraction, semantic chunking with overlap, vector indexing, cross-encoder reranking, and citation verification.',
    keyFeatures: [
      'Hybrid BM25 + dense semantic vector search.',
      'Cross-encoder reranking stage filtering top-K candidates before prompt injection.',
      'Strict context-grounded prompt guardrails with page-level citations.',
    ],
    myContribution: [
      'Built and benchmarked the retrieval evaluation suite using sample enterprise policies.',
      'Analyzed chunking trade-offs and integrated cross-encoder rerankers.',
    ],
    challenges: [
      'Handling nested markdown tables and bullet hierarchies without breaking semantic continuity.',
    ],
    engineeringDecisions: [
      {
        question: 'Why add a reranker after vector search?',
        answer:
          'Dense vector retrieval is great at broad conceptual similarity, but poor at exact keyword and clause precision. A cross-encoder reranker re-scores the top 20 candidates down to the top 4 most factually relevant snippets, drastically reducing context window noise and hallucination.',
      },
    ],
    whatDidntWork: [
      {
        failedApproach: 'Naive 1000-character fixed-length chunking.',
        whatChanged: 'Implemented layout-aware recursive chunking with markdown header splitting.',
        result: 'Context recall increased from 61% to 89% on benchmark queries.',
      },
    ],
    whatILearned:
      'Retrieval quality is the primary ceiling of RAG performance. Improving retrieval through reranking produces far better answers than swapping to a larger foundation model.',
    resultsMetrics: [
      'Zero unsupported claims in 50-question golden evaluation test.',
      'Sub-2-second end-to-end response latency on local vector storage.',
    ],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'predictive-churn-ml',
    title: 'Customer Churn & Retention Analytics',
    categories: ['Machine Learning', 'Analytics'],
    technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'SHAP', 'SQL', 'Pandas'],
    status: 'Experiment',
    date: '2025',
    shortDescription:
      'Machine learning model identifying high-risk customer segments with explainable SHAP feature attribution to inform proactive retention campaigns.',
    problem:
      'Business teams lacked early-warning signals for customer attrition, reacting only after subscriptions were cancelled.',
    approach:
      'Engineered behavioral recency, frequency, and monetary (RFM) features from historical transaction logs; trained XGBoost classifier; used SHAP values for business explainability.',
    keyFeatures: [
      'Feature engineering capturing rolling 30/60/90-day activity drops.',
      'Class imbalance handling via stratified sampling and precision-recall threshold tuning.',
      'SHAP summary visualizations explaining top risk factors per individual customer.',
    ],
    myContribution: [
      'Extracted and prepared raw transactional data using complex SQL aggregations.',
      'Trained, validated, and evaluated model performance curves (ROC-AUC & PR-AUC).',
      'Synthesized technical model coefficients into commercial retention recommendations.',
    ],
    challenges: [
      'Extreme class imbalance (under 4% churn rate) meant accuracy was misleading; tuned model for recall at fixed precision threshold.',
    ],
    whatILearned:
      'Explainability is mandatory in consulting. Stakeholders will not take action on a black-box model without seeing the concrete behavioral triggers behind individual predictions.',
    resultsMetrics: [
      '0.84 ROC-AUC on holdout test dataset.',
      'Isolated top 3 operational drivers of churn for product team intervention.',
    ],
    githubUrl: '#',
  },
  {
    id: 'multi-agent-research-flow',
    title: 'Autonomous Research & Synthesis Agent',
    categories: ['AI Agents', 'LangChain', 'GenAI'],
    technologies: ['LangGraph', 'Python', 'Tavily API', 'Pydantic', 'FastAPI'],
    status: 'Experiment',
    date: '2026',
    shortDescription:
      'Multi-agent workflow coordinating research, fact-checking, and report synthesis agents with human-in-the-loop review capabilities.',
    problem:
      'Manual competitor and market landscape analysis requires searching disparate web sources, filtering noise, and compiling structured comparisons.',
    approach:
      'Created specialized agent nodes: Planner Agent, Web Search Agent, Fact-Check Critic, and Synthesis Editor orchestrated via LangGraph state.',
    keyFeatures: [
      'Cyclical feedback loop between Fact-Check Critic and Search Agent.',
      'Strict citation grounding verifying external web links.',
      'Human-in-the-loop interrupt points for scope revision before final report drafting.',
    ],
    myContribution: [
      'Defined agent state contracts and cyclical transition conditions.',
      'Implemented safety limiters to avoid infinite looping and API budget depletion.',
    ],
    challenges: [
      'Preventing agents from drifting off-topic during recursive search iterations.',
    ],
    whatILearned:
      'Agents require tight operational guardrails. A specialized graph with deterministic fallback branches is dramatically more reliable than an open-ended autonomous agent.',
    resultsMetrics: [
      'Completed 4-source synthesized market overviews in <90 seconds.',
      'Zero cyclic loops after implementing max-depth recursion limits.',
    ],
    githubUrl: '#',
  },
  {
    id: 'enterprise-ai-platform-architecture',
    title: 'Enterprise AI Knowledge Platform Architecture',
    categories: ['Architecture', 'GenAI', 'Consulting'],
    technologies: ['System Design', 'RAG', 'Vector Database', 'API Gateway', 'Security'],
    status: 'Case Study',
    date: '2026',
    shortDescription:
      'Comprehensive system architecture design for an enterprise-wide AI platform incorporating multi-tenant RAG, role-based access control, caching, and observability.',
    problem:
      'Enterprise clients face fragmented AI adoption with isolated shadow-IT LLM experiments, security vulnerabilities, and uncontrolled API expenditures.',
    approach:
      'Designed a blueprint combining centralized API Gateway, vector store clustering, semantic caching, token rate-limiting, and OpenTelemetry logging.',
    keyFeatures: [
      'Semantic Cache layer avoiding redundant LLM calls on recurring enterprise queries.',
      'Document-level access control matching enterprise Active Directory permissions.',
      'Model-agnostic routing switching dynamically between cost-effective and high-reasoning models.',
    ],
    myContribution: [
      'Developed the architecture diagrams and trade-off analysis matrix.',
      'Mapped compliance and security controls to GDPR and enterprise data governance guidelines.',
    ],
    challenges: [
      'Balancing high-throughput vector search latency with granular document-level permission filtering.',
    ],
    whatILearned:
      'Enterprise AI architecture is 30% model selection and 70% plumbing: security, data governance, caching, monitoring, and legacy system integration.',
    resultsMetrics: [
      'Projected 40% reduction in API token spend via semantic caching in architecture simulation.',
      'Full compliance mapping for enterprise deployment.',
    ],
    caseStudyUrl: '#',
  },
  // Future project placeholders for categories to accommodate future growth
  {
    id: 'future-multimodal-analytics',
    title: 'Multimodal Chart & Report Analyzer',
    categories: ['AI Agents', 'GenAI'],
    technologies: ['Multimodal AI', 'Vision Models', 'Python', 'Power BI'],
    status: 'Experiment',
    date: 'Coming Soon',
    shortDescription:
      'Automated visual audit engine interpreting charts, screenshots, and visual dashboards to extract numerical trends and audit design compliance.',
    problem: 'Future experiment evaluating multimodal vision models for automated dashboard auditing and report anomaly detection.',
    approach: 'Planned integration of vision-language models with structured KPI validation schemas.',
    keyFeatures: ['Chart type classification', 'Visual anomaly detection', 'Automated executive summary generation'],
    myContribution: ['Architectural design and initial feasibility research.'],
    challenges: ['Pending dataset collation.'],
    whatILearned: 'Exploring early papers on visual reasoning for corporate charts.',
    isComingSoon: true,
  },
];

export const AI_LAB_EXPERIMENTS: AiLabExperiment[] = [
  {
    id: 'lab-rag-chunk-size',
    title: 'RAG Chunk Size & Overlap vs. Retrieval Quality',
    technology: 'LangChain · ChromaDB · sentence-transformers',
    date: 'September 2026',
    tag: 'RAG Optimization',
    question: 'How does varying chunk size (256, 512, 1024 tokens) and overlap (10% vs 25%) impact answer faithfulness and context recall on dense technical documentation?',
    experiment:
      'Indexed 8 enterprise technical manuals across 6 chunking permutations. Tested 60 domain questions with automated TruLens evaluation for context relevance and groundedness.',
    result:
      '512-token chunks with 20% overlap delivered the optimal balance: 91% context relevance with minimal extraneous noise. 1024-token chunks degraded precision by introducing irrelevant adjacent sections.',
    whatILearned:
      'Chunk size cannot be arbitrarily chosen. It must mirror the semantic density of the source corpus. Smaller chunks with parent-document retrievers outperform large monolithic chunks every time.',
    githubUrl: '#',
  },
  {
    id: 'lab-langchain-tools',
    title: 'Tool-Calling Reliability & Fallback Strategies',
    technology: 'LangChain · Python · Pydantic',
    date: 'August 2026',
    tag: 'LangChain',
    question: 'How reliably do medium-tier LLMs invoke complex multi-parameter JSON tools, and what prompt formatting minimizes argument hallucinations?',
    experiment:
      'Ran 120 simulated queries invoking SQL generator and calculator tools. Tested raw string prompts, OpenAI function calling schemas, and Pydantic-enforced structured tools.',
    result:
      'Pydantic tool declarations combined with retry parsers achieved 99.2% valid tool call execution, compared to 78% for freeform text prompts.',
    whatILearned:
      'Never trust unstructured LLM tool calling in production. Always enforce typed schemas with client-side validation loops before executing the downstream function.',
    githubUrl: '#',
  },
  {
    id: 'lab-langgraph-state',
    title: 'Stateful Agent Loops & Cycle Termination',
    technology: 'LangGraph · StateMachine',
    date: 'August 2026',
    tag: 'LangGraph',
    question: 'Can cyclical reflection agents improve answer quality without falling into non-terminating critique loops?',
    experiment:
      'Constructed a 2-agent Writer-Critic loop in LangGraph. Tested unconditional feedback loops vs. score-bounded conditional edges (stopping when Critic score >= 8/10 or iterations == 3).',
    result:
      'Score-bounded loops improved response clarity in 84% of cases and guaranteed 100% deterministic termination within 3 iterations.',
    whatILearned:
      'Every stateful graph must have strict circuit breakers: max iteration guards, timeout limits, and fallback deterministic paths.',
    githubUrl: '#',
  },
  {
    id: 'lab-embeddings-benchmark',
    title: 'Comparing Dense Embeddings on Business Consulting Terminology',
    technology: 'Vector Search · Cosine Similarity',
    date: 'July 2026',
    tag: 'Embeddings',
    question: 'Do general-purpose embedding models properly capture corporate business terminology (e.g., EBITDA, CAGR, MECE, RACI)?',
    experiment:
      'Computed cosine distance between 40 pairs of business concepts across 3 embedding models: text-embedding-3-small, BAAI/bge-large-en, and all-MiniLM-L6-v2.',
    result:
      'BGE-large and OpenAI text-embedding-3 achieved high semantic grouping for business acronyms; smaller models frequently confused domain acronyms with generic word stems.',
    whatILearned:
      'Domain vocabulary matters. For niche enterprise vocabularies, query expansion or hybrid search with BM25 keyword matching is essential to prevent semantic drift.',
    githubUrl: '#',
  },
  {
    id: 'lab-llm-eval-metrics',
    title: 'Automated LLM Evaluation vs. Human Assessment',
    technology: 'Ragas · TruLens · LLM-as-a-judge',
    date: 'June 2026',
    tag: 'LLM Evaluation',
    question: 'How closely does automated LLM-as-a-judge (GPT-4o-mini evaluating faithfulness) correlate with human domain-expert ratings?',
    experiment:
      'Evaluated 50 generated Q&A pairs with both human scoring (1-5 scale) and automated Ragas Faithfulness scores.',
    result:
      'Achieved Pearson correlation of r = 0.81 after providing 3 few-shot scoring examples and strict grading rubrics to the judge model.',
    whatILearned:
      'LLM judges without clear rubrics are overly lenient. Providing few-shot edge cases is mandatory to calibrate automated evaluations for real regression testing.',
    githubUrl: '#',
  },
];

export const ARCHITECTURES: ArchitectureItem[] = [
  {
    id: 'production-rag-architecture',
    title: 'Production Enterprise RAG System',
    subtitle: 'From Naive Vector Search to Resilient Enterprise Retrieval',
    badge: 'Production RAG',
    problem:
      'Basic vector search fails on enterprise document formats, produces hallucinations when documents lack relevant context, and leaks sensitive departmental information.',
    diagramFlow: [
      { step: '01', label: 'Ingestion & Parsing', desc: 'Layout-aware document chunking, metadata enrichment (RLS tags, source, author)' },
      { step: '02', label: 'Hybrid Vector Index', desc: 'Dense vector embeddings + Sparse BM25 index stored in segregated collections' },
      { step: '03', label: 'Query Preprocessing', desc: 'Query rewriting, hyde expansion, and tenant permission filtering' },
      { step: '04', label: 'Cross-Encoder Rerank', desc: 'Re-scores top 25 hybrid results down to top 4 high-precision snippets' },
      { step: '05', label: 'Guarded Generation', desc: 'Strict context grounding prompt with page citation enforcement' },
      { step: '06', label: 'Post-Eval & Audit', desc: 'Hallucination check & latency/token logging in OpenTelemetry' },
    ],
    components: [
      { name: 'Document Parser', role: 'Layout extraction & table serialization', tech: 'Unstructured / PyMuPDF' },
      { name: 'Vector Store', role: 'Dense embedding storage & similarity search', tech: 'ChromaDB / Qdrant / Pinecone' },
      { name: 'Sparse Search', role: 'Exact keyword & acronym retrieval', tech: 'BM25 / Elasticsearch' },
      { name: 'Cross-Encoder', role: 'High-precision passage reranking', tech: 'BGE-Reranker-Large' },
      { name: 'LLM Orchestrator', role: 'Context assembly & prompt guardrails', tech: 'LangChain / LlamaIndex' },
      { name: 'Telemetry Engine', role: 'Latency, token cost & audit tracing', tech: 'OpenTelemetry / Phoenix' },
    ],
    dataFlow: [
      'User issues business query via secure client application.',
      'API Gateway attaches verified user identity and Department Access Control tokens.',
      'Query Expansion generates sub-queries for acronyms and specific domain terms.',
      'Hybrid Retriever queries both dense vector embeddings and BM25 index under tenant security filter.',
      'Cross-Encoder Reranker merges and ranks candidate snippets based on semantic relevance.',
      'Prompt Generator constructs structured prompt with system guardrails and cited passages.',
      'LLM generates streaming response with exact footnote citations.',
      'Evaluation hook checks generated response for faithfulness before returning to client.',
    ],
    technologyChoices: [
      { tech: 'Hybrid Retrieval', reason: 'Dense search handles synonyms while BM25 guarantees finding exact corporate project codes and invoice IDs.' },
      { tech: 'Cross-Encoder Reranking', reason: 'Dramatically reduces context window noise, reducing LLM token costs and eliminating hallucinations.' },
      { tech: 'Metadata Filtering', reason: 'Enforces enterprise Row-Level Security at the database layer before embeddings are retrieved.' },
    ],
    alternativesConsidered: [
      { alternative: 'Naive Vector Retrieval', whyNot: 'Missed 35% of exact keyword queries and generated hallucinated explanations when context was thin.' },
      { alternative: 'Full Model Fine-Tuning', whyNot: 'Prohibitive retraining cost, lack of document citations, and high risk of outdated data.' },
    ],
    tradeOffs: [
      'Latency vs. Precision: Adding a reranker introduces ~80ms overhead, but boosts answer faithfulness by over 30%.',
      'Ingestion Complexity: Hybrid parsing takes longer during batch indexing, but query-time search is instant.',
    ],
    scalability: 'Horizontally scalable vector database clusters with read-replicas; stateless API workers managed via container orchestration.',
    security: 'End-to-end TLS, document-level Active Directory ACL filtering, and zero-data-retention agreements with LLM providers.',
    cost: 'Semantic caching of high-frequency questions cuts external LLM API costs by up to 35%.',
    evaluation: 'Continuous synthetic benchmark regression testing using Ragas metrics (Faithfulness, Context Recall, Answer Relevance).',
    lessonsLearned: 'RAG is 80% data preparation and retrieval engineering. The foundation model is simply the synthesizer at the end of a disciplined pipeline.',
  },
  {
    id: 'agentic-rag-architecture',
    title: 'Agentic RAG & Dynamic Problem Solving',
    subtitle: 'Autonomous Routing, Tool Use & Iterative Verification',
    badge: 'Agentic RAG',
    problem:
      'Single-shot RAG fails when questions require multi-hop reasoning, data lookups across multiple databases, or verification of preliminary findings.',
    diagramFlow: [
      { step: '01', label: 'Problem Classifier', desc: 'Evaluates if query needs direct answer, document retrieval, or SQL execution' },
      { step: '02', label: 'Plan & Decompose', desc: 'Breaks complex consulting inquiry into discrete sub-tasks' },
      { step: '03', label: 'Tool Invocation', desc: 'Selects and executes specialized tools (Vector Search, SQL, Web, Math)' },
      { step: '04', label: 'Reflection & Critique', desc: 'Evaluates whether retrieved data sufficiently answers the sub-problem' },
      { step: '05', label: 'Synthesis & Action', desc: 'Aggregates multi-source evidence into structured consulting deliverable' },
    ],
    components: [
      { name: 'State Manager', role: 'Maintains working memory & conversation state', tech: 'LangGraph' },
      { name: 'Router Agent', role: 'Directs intent to appropriate tool specialist', tech: 'Structured LLM Router' },
      { name: 'SQL Query Tool', role: 'Translates natural language to verified SQL', tech: 'Text-to-SQL + Read-Only DB' },
      { name: 'Document Tool', role: 'Executes RAG pipeline on internal knowledge base', tech: 'Hybrid Vector Retriever' },
      { name: 'Critic Agent', role: 'Validates completeness and flags missing evidence', tech: 'Self-Reflection Node' },
    ],
    dataFlow: [
      'Executive prompt enters State Machine: "Compare Q2 customer acquisition cost in Region A with policy limits."',
      'Planner identifies two distinct sub-problems: 1) Extract financial numbers from SQL, 2) Retrieve policy limits from PDF repository.',
      'SQL Agent queries database, validates schema, and returns aggregated CAC metrics.',
      'Document Agent executes semantic search on internal policy manual.',
      'Critic Node verifies that both data points were successfully retrieved and mathematically comparable.',
      'Synthesizer generates structured executive comparison with full provenance.',
    ],
    technologyChoices: [
      { tech: 'LangGraph State Machines', reason: 'Provides explicit state persistence, cycle control, and reproducible audit trails.' },
      { tech: 'Read-Only SQL Replica', reason: 'Guarantees analytical agent safety with zero possibility of accidental database mutation.' },
    ],
    alternativesConsidered: [
      { alternative: 'ReAct Agent (Unconstrained)', whyNot: 'Prone to open-ended wandering and unpredictable API costs.' },
    ],
    tradeOffs: [
      'Execution Speed vs. Thoroughness: Multi-agent routing takes 3–5 seconds compared to 1 second for standard RAG, but answers complex multi-hop queries accurately.',
    ],
    scalability: 'Task queue workers with asynchronous task polling for complex multi-minute research queries.',
    security: 'Sandboxed execution environment for SQL and calculation tools with strict parameter sanitization.',
    cost: 'Token budgets enforced per query to prevent runaway recursive calls.',
    evaluation: 'Task completion rate, step efficiency, and hallucination rate across 100 enterprise benchmark queries.',
    lessonsLearned: 'Bounded agentic workflows with deterministic graph topologies deliver enterprise reliability, while unbounded agents remain toys.',
  },
  {
    id: 'ai-copilot-architecture',
    title: 'Consulting Copilot Workflow Architecture',
    subtitle: 'Structured Business Problem Structuring & AI Solution Mapping',
    badge: 'AI Copilot',
    problem:
      'Consultants need to rapidly analyze client briefs, identify business bottlenecks, evaluate whether AI is appropriate, and draft technical architectures.',
    diagramFlow: [
      { step: '01', label: 'Brief Ingestion', desc: 'Deconstructs client notes, interview transcripts, and strategic goals' },
      { step: '02', label: 'MECE Framework', desc: 'Builds mutually exclusive issue trees mapped to business drivers' },
      { step: '03', label: 'Data Requirement Mapping', desc: 'Identifies required ERP/CRM/BI data sources and telemetry' },
      { step: '04', label: 'AI Feasibility Filter', desc: 'Determines whether rule-based BI, predictive ML, or GenAI is best' },
      { step: '05', label: 'Solution Blueprinting', desc: 'Drafts target architecture, timeline, and delivery risk matrix' },
    ],
    components: [
      { name: 'Framing Agent', role: 'Deconstructs ambiguous problem statements', tech: 'Prompted LLM' },
      { name: 'Domain Taxonomy DB', role: 'Stores industry metrics, KPIs & common traps', tech: 'Vector Store + Graph' },
      { name: 'Feasibility Scorer', role: 'Calculates complexity, data readiness, and ROI', tech: 'Decision Matrix + LLM' },
      { name: 'Deliverable Formatter', role: 'Outputs Markdown briefs, Jira backlogs & slides', tech: 'Template Engine' },
    ],
    dataFlow: [
      'Consultant inputs raw client discovery notes.',
      'System runs MECE decomposition identifying key operational bottlenecks.',
      'System queries Domain Taxonomy to match industry KPIs.',
      'AI Feasibility Engine evaluates technical prerequisites (data volume, latency, accuracy tolerance).',
      'Copilot generates structured consulting brief with recommended tech stack and delivery roadmap.',
    ],
    technologyChoices: [
      { tech: 'Pydantic Models', reason: 'Enforces strict data contracts for every intermediate step of the consulting analysis.' },
      { tech: 'Markdown Templates', reason: 'Allows instant conversion of generated analysis into client-ready presentation formats.' },
    ],
    alternativesConsidered: [
      { alternative: 'Generic Chat Interface', whyNot: 'Lacked consistency and produced conversational prose unusable in executive slide decks.' },
    ],
    tradeOffs: [
      'Structure vs. Freeform Exploration: Rigid templates require more disciplined user input, but produce 10x higher quality deliverables.',
    ],
    scalability: 'Client-side SPA caching with serverless API workers for synthesis steps.',
    security: 'Zero enterprise client data logged or retained for external model training.',
    cost: 'High token efficiency by breaking tasks into targeted, context-optimized prompts.',
    evaluation: 'Consultant time-saved metrics and review feedback from senior leadership.',
    lessonsLearned: 'The most valuable AI tools are those that mirror proven human methodologies rather than inventing arbitrary new workflows.',
  },
  {
    id: 'ai-analytics-platform',
    title: 'Modern AI-Powered Analytics Platform',
    subtitle: 'Bridging Enterprise BI Warehouses with Natural Language Intelligence',
    badge: 'AI Analytics',
    problem:
      'Business stakeholders want to ask questions in plain English, but direct Text-to-SQL on raw data lakes produces syntax errors and wrong business logic.',
    diagramFlow: [
      { step: '01', label: 'Natural Language Query', desc: 'User asks: "What was our operating margin variance last quarter?"' },
      { step: '02', label: 'Semantic Layer Lookup', desc: 'Maps terms to verified DAX/SQL metric definitions and schemas' },
      { step: '03', label: 'Validated Query Generation', desc: 'Constructs syntactically validated SQL against curated semantic models' },
      { step: '04', label: 'Execution & Guardrails', desc: 'Executes on read-replica warehouse with query timeout constraints' },
      { step: '05', label: 'Visualization & Narrative', desc: 'Auto-generates charts and executive summary explaining drivers' },
    ],
    components: [
      { name: 'Semantic Catalog', role: 'Maintains single-source-of-truth business metrics', tech: 'Semantic Layer / dbt' },
      { name: 'Schema Linker', role: 'Selects relevant tables without polluting context', tech: 'Vector Schema Index' },
      { name: 'SQL Validator', role: 'Parses AST and validates joins before running', tech: 'SQLGlot / Parser' },
      { name: 'Insight Synthesizer', role: 'Generates narrative explanation of data trends', tech: 'LLM Narrative Generator' },
    ],
    dataFlow: [
      'User types business question.',
      'Semantic catalog resolves "operating margin" to `[Total Revenue] - [COGS] - [OPEX]`.',
      'System retrieves table schema and verifies join pathways.',
      'SQL validator ensures query is read-only, properly grouped, and throttled.',
      'Database executes query; results are formatted into interactive visual chart with narrative drivers.',
    ],
    technologyChoices: [
      { tech: 'Semantic Layer Intermediary', reason: 'Prevents the LLM from inventing metric calculations by binding it to approved business formulas.' },
      { tech: 'AST SQL Validation', reason: 'Blocks malicious or computationally destructive queries prior to warehouse execution.' },
    ],
    alternativesConsidered: [
      { alternative: 'Direct LLM to Raw SQL', whyNot: 'Hallucinated join conditions and calculated gross margin incorrectly in 40% of test runs.' },
    ],
    tradeOffs: [
      'Requires upfront semantic model curation, but guarantees 100% mathematical fidelity for executive reporting.',
    ],
    scalability: 'Elastic compute query engines with query result caching.',
    security: 'Strict column-level and row-level security propagation based on user OAuth tokens.',
    cost: 'Significant compute savings by running verified queries instead of trial-and-error retry loops.',
    evaluation: 'Query accuracy benchmark against 200 certified financial reports.',
    lessonsLearned: 'LLMs should not calculate business metrics; they should orchestrate the retrieval of certified metrics calculated by deterministic engines.',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'bridging-business-and-ai-consulting',
    title: 'Translating Business Ambiguity into Technical Execution: A Consultant’s Perspective',
    date: 'September 2026',
    category: 'Consulting',
    readingTime: '5 min read',
    summary:
      'Why the most critical skill in enterprise analytics and AI isn’t model training — it’s structuring ambiguous business problems, managing stakeholder expectations, and driving delivery discipline.',
    technologies: ['Consulting', 'Stakeholder Management', 'Delivery Leadership', 'Analytics'],
    content: [
      'In technology consulting, projects rarely fail because a model had 2% lower accuracy or a query was sub-optimal. They fail because the engineering team built the right answer to the wrong question.',
      'As my career has evolved from Senior Business Analyst to Consultant, my daily focus has shifted toward the translation layer: acting as a bridge between business stakeholders who speak in terms of revenue, risks, and operational bottlenecks, and technical teams who speak in terms of schemas, latency, and APIs.',
      'A successful engagement requires three foundational pillars:',
      '1. Structuring the Unstructured: Business problems always start vague: "Our reporting is slow" or "Can we use AI here?" The consultant’s job is to apply frameworks (like MECE issue trees) to isolate the root commercial driver before a single line of code is written.',
      '2. Managing Dependencies and Expectations: Delivery leadership is about keeping momentum transparent. Using Jira actively, tracking upstream data blockers, and communicating trade-offs early prevents the "surprise delay" at milestone reviews.',
      '3. Business-Technology Synthesis: The best solution is not the most complex one; it is the simplest architecture that solves the problem reliably, fits the organization’s operational readiness, and can be maintained long after the project concludes.',
      'As AI becomes ubiquitous, this translation ability becomes even more vital. Organizations don’t just need people who can call an API; they need professionals who can evaluate where AI creates real economic value versus where classical analytics remains superior.',
    ],
  },
  {
    id: 'rag-retrieval-engineering-lessons',
    title: 'Beyond Naive Vector Search: What Real-World RAG Experiments Taught Me',
    date: 'August 2026',
    category: 'RAG & GenAI',
    readingTime: '7 min read',
    summary:
      'A deep dive into why standard cosine similarity fails on enterprise documents, and how chunking strategies, hybrid search, and cross-encoder reranking transform retrieval quality.',
    technologies: ['RAG', 'LangChain', 'Embeddings', 'Vector Databases', 'Evaluation'],
    content: [
      'When you first build a basic RAG demo, it feels like magic: throw a PDF into a vector store, ask a question, and get an answer. But the moment you test it on enterprise documents — quarterly financial filings, technical manuals, contracts — the cracks appear.',
      'Here are the core engineering insights derived from running controlled RAG experiments in my AI Lab:',
      '1. Fixed Chunking Destroys Context: Chunking purely by character length splits sentences, breaks tables, and detaches bullet points from their headers. Layout-aware chunking with metadata enrichment is non-negotiable.',
      '2. Dense Search Is Weak on Exact Terms: Dense embeddings are great at finding "conceptual similarities" (e.g., linking "automobile" to "vehicle"). But if your user asks for "Section 4.2(b) of Master Services Agreement 2024", dense search often fails. Hybrid search (dense vector + BM25 keyword) solves this by combining semantic intent with lexical precision.',
      '3. The Unsung Hero: Cross-Encoder Reranking: Vector search only looks at the distance between pre-computed embeddings. A cross-encoder takes the query and document together, passing them through an attention mechanism to produce a true relevance score. Adding a reranker consistently increased our context recall from 65% to nearly 90%.',
      '4. Continuous Evaluation: You cannot improve what you cannot measure. Setting up automated evaluation pipelines (testing Faithfulness and Context Relevance) provides the empirical feedback loop needed to tune chunk sizes with confidence.',
    ],
  },
  {
    id: 'analytics-to-ai-evolution',
    title: 'From SQL & Power BI to Generative AI: Evolution Rather than Reinvention',
    date: 'July 2026',
    category: 'Analytics & AI',
    readingTime: '6 min read',
    summary:
      'Why a deep background in business intelligence, SQL data modeling, and enterprise reporting provides an unfair advantage when designing modern AI and LLM solutions.',
    technologies: ['SQL', 'Power BI', 'Machine Learning', 'GenAI', 'Architecture'],
    content: [
      'There is a common misconception that moving into Generative AI and Machine Learning requires abandoning your analytics foundation. In reality, deep experience in SQL and Business Intelligence is the most valuable foundation you can have.',
      'Here is why:',
      '1. Understanding Ground Truth: Analytics teaches you to respect data quality. You know how easily data gets corrupted, how definitions drift, and how dangerous a wrong calculation is. This healthy skepticism is essential when building AI systems that are prone to hallucination.',
      '2. Data Modeling Principles Still Apply: An embedding space is simply a high-dimensional vector space. The principles of data partitioning, indexing, schema design, and query performance optimization that you learn in SQL directly inform how you design vector stores and retrieval pipelines.',
      '3. Executive Alignment: In BI, you learn how leaders consume information — they want bottom-line takeaways, trends, and drivers, not raw dumps. When designing LLM outputs and AI agents, knowing how to format structured, decision-ready answers is what differentiates an enterprise tool from an experimental toy.',
      'Progressing from Analytics to AI is not a pivot; it is a natural progression of adding more sophisticated tools to an already battle-tested problem-solving framework.',
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Start With the Problem',
    description: 'Technology should solve a real business problem. Never implement AI or complex architectures just because they are new. The value lies in the business outcome, not the tool.',
  },
  {
    number: '02',
    title: 'Data Before Assumptions',
    description: 'Good decisions begin with evidence. Whether profiling an enterprise SQL warehouse or auditing an LLM retrieval failure, trust empirical data over intuition.',
  },
  {
    number: '03',
    title: 'Connect Business & Technology',
    description: 'A good solution must make sense to both the business and technical teams. Clear translation, transparent trade-offs, and realistic milestones build enduring trust.',
  },
  {
    number: '04',
    title: 'Design for Reality',
    description: 'Usability, scalability, cost, security and maintainability matter. A theoretical solution that fails enterprise security, costs too much to run, or cannot be maintained is not a solution.',
  },
  {
    number: '05',
    title: 'Learn by Building',
    description: 'The fastest way to understand technology is to build with it, test it, and understand where it fails. Real mastery comes from hands-on experimentation, debugging limitations, and documenting trade-offs.',
  },
];

export const PERSONAL_INTERESTS: PersonalInterest[] = [
  {
    title: 'Cars',
    description: 'Driving dynamics, automotive technology, ownership economics and long-term value.',
    iconName: 'Car',
  },
  {
    title: 'Technology',
    description: 'AI, gadgets, applications and emerging technology.',
    iconName: 'Cpu',
  },
  {
    title: 'Travel',
    description: 'Exploration, local experiences and flexible itineraries.',
    iconName: 'Compass',
  },
  {
    title: 'Gaming',
    description: 'Retro gaming, consoles and modern games.',
    iconName: 'Gamepad2',
  },
  {
    title: 'Photography',
    description: 'Mobile photography and visual storytelling.',
    iconName: 'Camera',
  },
  {
    title: 'Learning',
    description: 'AI, system design, consulting and new technical ideas.',
    iconName: 'BookOpen',
  },
];

export const HOW_I_THINK_PRINCIPLES = [
  {
    number: '01',
    principle: 'Start with the decision, not the data',
    explanation:
      'Data without a clear business decision in mind leads to bloated dashboards and unused reports. Always identify who makes the decision, what actions it triggers, and what economic value is generated.',
  },
  {
    number: '02',
    principle: 'Understand the workflow before applying AI',
    explanation:
      'AI is an accelerator for human decision-making, not a magic replacement for broken business processes. Map the end-to-end task journey first to know where an LLM creates genuine leverage versus added risk.',
  },
  {
    number: '03',
    principle: 'Simplicity before complexity',
    explanation:
      'Never reach for an agentic multi-node graph when a deterministic SQL query or standard semantic search solves the client challenge. Reliability and explainability beat unnecessary algorithmic complexity every single time.',
  },
  {
    number: '04',
    principle: 'Delivery is as important as technical capability',
    explanation:
      'The most sophisticated model has zero ROI if it never ships or if stakeholders lack faith in its outputs. Active stakeholder communication, dependency tracking, and transparent Jira sprints turn prototypes into production systems.',
  },
  {
    number: '05',
    principle: 'Continuous curiosity and empirical testing',
    explanation:
      'Technology changes fast, but foundational principles stay constant. Read technical papers, test benchmarks in the AI Lab, measure failure cases empirically, and stay relentlessly curious about the art of the possible.',
  },
];

export const SAMPLE_PORTFOLIO_QUESTIONS: string[] = [
  "What is Gowtham's role at Tiger Analytics?",
  "Why choose RAG instead of fine-tuning for enterprise docs?",
  "How does Gowtham's analytics background translate into AI solutions?",
  "How does Gowtham manage client expectations and delivery in consulting?",
];

export const BEYOND_WORK_ITEMS = [
  {
    icon: 'BookOpen',
    title: 'Continuous Learning Systems',
    desc: 'Reading deeply across AI system design, enterprise strategy, and technology management.',
  },
  {
    icon: 'Users',
    title: 'Mentoring & Peer Knowledge Sharing',
    desc: 'Helping junior analysts navigate data modeling, SQL optimization, and consulting storytelling.',
  },
  {
    icon: 'Sliders',
    title: 'Personal Productivity & Workflows',
    desc: 'Optimizing personal task cadences, structured notes, and intentional daily engineering habits.',
  },
  {
    icon: 'Activity',
    title: 'Physical Health & Mental Stamina',
    desc: 'Balancing intense analytical focus with cardiovascular fitness and structured recovery.',
  },
];

export const RECRUITER_SUMMARY = {
  name: 'Gowtham R.',
  currentRole: 'Consultant',
  company: 'Tiger Analytics',
  summary:
    'Consultant and Analytics Professional combining deep foundations in SQL, Power BI, and Business Intelligence with active client communication, delivery leadership, and deliberate expansion into Machine Learning, Generative AI, RAG, and AI Solution Architecture.',
  coreStrengths: ['Analytics', 'SQL', 'Power BI', 'Business Intelligence', 'Data Modeling', 'DAX'],
  consulting: ['Client Communication', 'Stakeholder Management', 'Delivery Coordination', 'Jira', 'Reporting', 'Requirement Framing'],
  emergingExpertise: ['Machine Learning', 'GenAI', 'RAG Pipelines', 'LangChain', 'LangGraph', 'AI Agents', 'LLM Evaluation'],
  targetDirection: ['AI Consulting', 'AI Solutions', 'AI Solution Architecture'],
  selectedProjects: [
    {
      id: 'ai-consulting-copilot',
      title: 'AI Consulting Copilot',
      tag: 'GenAI & RAG Prototype',
      desc: 'Autonomous consulting assistant structuring business briefs into MECE hypotheses & AI feasibility scores.',
    },
    {
      id: 'enterprise-bi-semantic-layer',
      title: 'Enterprise Analytics & Semantic BI',
      tag: 'Production Analytics Case Study',
      desc: 'Centralized semantic model & executive Power BI suite cutting load times from 45s to 2s.',
    },
    {
      id: 'rag-document-intelligence',
      title: 'Domain-Grounded RAG Engine',
      tag: 'AI Engineering Prototype',
      desc: 'Hybrid BM25 + dense retrieval with cross-encoder reranking achieving zero hallucinations.',
    },
  ],
};
