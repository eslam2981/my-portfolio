import { useState } from 'react';
import { Target, ShieldAlert, Eye, CodeSquare, Flame, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Principles() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const icons = [
    <Target className="w-5 h-5 text-[#CEFF00]" />,
    <ShieldAlert className="w-5 h-5 text-[#CEFF00]" />,
    <Eye className="w-5 h-5 text-[#CEFF00]" />,
    <CodeSquare className="w-5 h-5 text-[#CEFF00]" />,
    <Flame className="w-5 h-5 text-[#CEFF00]" />
  ];

  return (
    <section id="principles" className="py-16 sm:py-28 relative bg-[#0A0C10] border-t border-white/[0.08]" aria-label="Engineering Principles">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl xl:max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] sm:text-xs text-[#CEFF00] mb-2 uppercase tracking-widest">
              <span>03 // Engineering Principles</span>
              <span className="text-[#8E96A7]">—</span>
              <span className="text-[#9BA3B4]">Guiding Development Philosophy</span>
            </div>
            <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Standards that shape my code.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#9BA3B4] font-normal leading-relaxed">
              These are the foundational commitments I strive to honor across every component, state architecture, and interaction I build.
            </p>
          </div>

          <div className="flex items-center gap-2 lg:self-end shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-xs font-mono-code text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>5 Core Pillars</span>
            </div>
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 sm:space-y-4 text-left">
          {portfolioData.principles.map((p, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={p.number}
                className={`p-3.5 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#121620] border-[#CEFF00]/40 shadow-[0_0_30px_rgba(206,255,0,0.08)]'
                    : 'bg-[#10131A] border-white/10 hover:border-white/20'
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  
                  <div className="flex items-start gap-3 sm:gap-6 min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0A0C10] border border-white/10 shrink-0">
                      {icons[idx]}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#CEFF00]">
                          {p.number} //
                        </span>
                      </div>
                      <h3 className="font-display-title text-base sm:text-2xl font-bold text-white mb-1 flex items-center gap-2 break-words">
                        <span>{p.title}</span>
                        {isExpanded && (
                          <span className="inline-block w-2 h-2 rounded-full bg-[#CEFF00] animate-ping shrink-0" />
                        )}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono-code text-[#9BA3B4] break-words">
                        {p.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-[#0A0C10] border border-white/10 text-[#9BA3B4] shrink-0 mt-1">
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#CEFF00]' : ''}`} />
                  </div>

                </div>

                {/* Expanded details */}
                <div
                  className="accordion-wrapper"
                  data-open={isExpanded ? 'true' : 'false'}
                  aria-hidden={!isExpanded}
                >
                  <div className="accordion-inner">
                    <div className="mt-6 pt-6 border-t border-white/[0.08] sm:pl-14 text-sm text-[#9BA3B4] leading-relaxed">
                      <p className="max-w-3xl xl:max-w-4xl">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
