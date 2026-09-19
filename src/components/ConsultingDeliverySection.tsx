import React from 'react';
import { Handshake, Users, CalendarClock, FileBarChart, ArrowDown, ArrowRight, GitBranch, Target, CheckCircle2 } from 'lucide-react';
import { CONSULTING_DELIVERY } from '../data/portfolioData';

export const ConsultingDeliverySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-amber-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-sky-500" />;
      case 'CalendarClock':
        return <CalendarClock className="w-5 h-5 text-purple-500" />;
      case 'FileBarChart':
        return <FileBarChart className="w-5 h-5 text-emerald-500" />;
      default:
        return <Handshake className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="consulting-delivery" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            Core Consulting Role
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-display mb-4">
            {CONSULTING_DELIVERY.title}
          </h2>
          <blockquote className="p-4 rounded-xl border-l-4 border-amber-500 bg-white dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed italic mb-4">
            "{CONSULTING_DELIVERY.explanation}"
          </blockquote>
        </div>

        {/* Visual Architecture Diagram (CLIENT -> Requirements -> CONSULTANT -> 3 Pillars -> Project Outcome) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-100 dark:border-stone-800">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400">
              The Consulting & Delivery Orchestration Model
            </h3>
            <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
              Gowtham R. · Tiger Analytics
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
            {/* Step 1: CLIENT */}
            <div className="w-full sm:w-80 p-3.5 rounded-xl text-center bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-950 font-bold text-sm shadow">
              <span className="tracking-wide">CLIENT</span>
              <p className="text-[11px] font-normal opacity-80 mt-0.5">Sponsors, Business Stakeholders & Product Owners</p>
            </div>

            <ArrowDown className="w-5 h-5 text-stone-400" />

            {/* Step 2: Requirements / Priorities */}
            <div className="w-full sm:w-96 p-3 rounded-lg text-center bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-800 dark:text-stone-200">
              Requirements / Priorities / Business Context
            </div>

            <ArrowDown className="w-5 h-5 text-stone-400" />

            {/* Step 3: CONSULTANT (Hub) */}
            <div className="w-full sm:w-96 p-4 rounded-xl text-center bg-amber-500 text-stone-950 font-bold text-base shadow-md border-2 border-amber-400">
              <div className="text-xs uppercase tracking-wider opacity-85">Core Orchestrator</div>
              <span>CONSULTANT</span>
              <p className="text-xs font-medium opacity-90 mt-0.5">Translates · Coordinates · Tracks Dependencies</p>
            </div>

            {/* Step 4: Three diverging pillars */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl text-center bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 block mb-0.5">
                  Business Context
                </span>
                <p className="text-[11px] text-stone-600 dark:text-stone-400">
                  Value validation, KPIs & strategic rationale
                </p>
              </div>

              <div className="p-3.5 rounded-xl text-center bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block mb-0.5">
                  Technical Team
                </span>
                <p className="text-[11px] text-stone-600 dark:text-stone-400">
                  Data engineers, BI developers & AI specialists
                </p>
              </div>

              <div className="p-3.5 rounded-xl text-center bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 block mb-0.5">
                  Delivery Discipline
                </span>
                <p className="text-[11px] text-stone-600 dark:text-stone-400">
                  Jira sprints, risk tracking & milestones
                </p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-stone-400" />

            {/* Step 5: Project Outcome */}
            <div className="w-full sm:w-80 p-3.5 rounded-xl text-center bg-emerald-600 text-white font-bold text-sm shadow">
              <span className="tracking-wide">Project Outcome</span>
              <p className="text-[11px] font-normal opacity-90 mt-0.5">Predictable Delivery & Verified Business Impact</p>
            </div>
          </div>
        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONSULTING_DELIVERY.cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/40 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-950 w-fit border border-stone-200 dark:border-stone-800 mb-4">
                  {getIcon(card.icon)}
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-display mb-1">
                  {card.title}
                </h3>

                <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-4">
                  {card.subtitle}
                </p>

                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                  {card.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
