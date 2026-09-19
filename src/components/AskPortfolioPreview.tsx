import React, { useState } from 'react';
import { Bot, Sparkles, Send, Layers, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SAMPLE_PORTFOLIO_QUESTIONS, PERSONAL_INFO } from '../data/portfolioData';

export const AskPortfolioPreview: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string>('');
  const [simulatedAnswer, setSimulatedAnswer] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);

  const handleAskQuestion = (question: string) => {
    setActiveQuestion(question);
    setIsAnswering(true);
    setSimulatedAnswer(null);

    // Provide a real contextual synthesis grounded in Gowtham's portfolio
    setTimeout(() => {
      let answer = '';
      if (question.includes('Tiger Analytics')) {
        answer = `At Tiger Analytics, Gowtham serves as a Consultant (promoted from Senior Business Analyst). He operates at the intersection of enterprise analytics and consulting delivery—leading client communication, requirement decomposition, stakeholder alignment, and project cadence while architecting BI and AI initiatives.`;
      } else if (question.includes('RAG') || question.includes('fine-tuning')) {
        answer = `Gowtham prioritizes RAG over fine-tuning for dynamic corporate and portfolio data because RAG enables zero-retraining updates, granular access control/ACLs, verifiable source citations, and lower token-cost overhead. Fine-tuning is reserved strictly for specialized tone or deterministic structural outputs.`;
      } else if (question.includes('analytics into AI')) {
        answer = `Gowtham's transition leverages strong data foundations (SQL, data modeling, BI, KPI definitions) to ensure AI systems aren't just toys, but solve measurable enterprise decisions. He progresses systematically: Analytics → Consulting Delivery → ML → GenAI & RAG → Enterprise AI Architecture.`;
      } else if (question.includes('stakeholder')) {
        answer = `Gowtham uses a structured translation approach: translating high-level executive objectives into technical backlog user stories, establishing weekly transparent milestone tracking in Jira, and maintaining active risk and dependency registers to prevent delivery surprises.`;
      } else {
        answer = `Gowtham R. is a Consultant at Tiger Analytics specializing in SQL, Power BI, Python, GenAI, and AI system design, combining rigorous business consulting delivery with modern LLM architecture.`;
      }
      setSimulatedAnswer(answer);
      setIsAnswering(false);
    }, 450);
  };

  return (
    <section id="ask-portfolio" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/30 dark:bg-stone-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display">
                    Ask My Portfolio
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 animate-pulse">
                    Preview & Prototype
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  Interactive RAG Assistant indexed on Gowtham's projects, experience, philosophy, and case studies
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Planned Stack: LangChain + ChromaDB + Cohere Rerank
            </div>
          </div>

          {/* Interactive Chat Sandbox */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                  Try asking a question:
                </span>

                {/* Sample Prompt Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {SAMPLE_PORTFOLIO_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleAskQuestion(q)}
                      className="text-left px-3 py-1.5 rounded-xl text-xs bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:border-amber-500/50 hover:bg-amber-500/5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Custom Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (activeQuestion.trim()) {
                      handleAskQuestion(activeQuestion);
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={activeQuestion}
                    onChange={(e) => setActiveQuestion(e.target.value)}
                    placeholder="Ask anything about Gowtham's consulting or AI experience..."
                    className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Ask</span>
                  </button>
                </form>
              </div>

              {/* Chat Answer Display */}
              <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 min-h-[110px] flex items-center">
                {isAnswering ? (
                  <div className="flex items-center gap-2 text-xs text-amber-500 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span>Retrieving context chunks from portfolio vector index...</span>
                  </div>
                ) : simulatedAnswer ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400">
                      <Bot className="w-3.5 h-3.5" />
                      <span>Portfolio AI Response (Grounded in Verified Data):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                      {simulatedAnswer}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                    Click a question chip above or type your own question to see how the assistant queries and synthesizes Gowtham's background.
                  </p>
                )}
              </div>
            </div>

            {/* Planned RAG Architecture Diagram Flow */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-stone-50 dark:bg-stone-950/70 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-sky-500" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    Planned Assistant Architecture
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-2">
                    <span className="font-mono text-amber-500 font-bold text-[11px]">01</span>
                    <span className="text-stone-700 dark:text-stone-300">Semantic chunking of portfolioData.ts & markdown docs</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-2">
                    <span className="font-mono text-amber-500 font-bold text-[11px]">02</span>
                    <span className="text-stone-700 dark:text-stone-300">Embeddings stored in Vector DB with metadata filtering</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-2">
                    <span className="font-mono text-amber-500 font-bold text-[11px]">03</span>
                    <span className="text-stone-700 dark:text-stone-300">Hybrid BM25 + Dense vector retrieval with Cohere reranking</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-2">
                    <span className="font-mono text-amber-500 font-bold text-[11px]">04</span>
                    <span className="text-stone-700 dark:text-stone-300">Grounded LLM response with verifiable citations & guardrails</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800/80 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ready for seamless serverless backend integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
