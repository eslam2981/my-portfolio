import { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useEscapeKey } from '../hooks';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isClosing, setIsClosing] = useState(false);

  // Animate out before closing
  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 220);
  }, [isClosing, onClose]);

  // Close on Escape
  useEscapeKey(handleClose, isOpen && !isClosing);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Closed state check
  if (!isOpen && !isClosing) return null;
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-10 overflow-y-auto transition-all duration-200 ease-out ${
        isClosing
          ? 'opacity-0 backdrop-blur-none bg-[#0A0C10]/0 pointer-events-none'
          : 'opacity-100 backdrop-blur-md bg-[#0A0C10]/85'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={handleClose} aria-hidden="true" />

      {/* Dialog card */}
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#10131A] border border-white/15 shadow-2xl z-10 overflow-hidden text-left transition-all duration-200 ${
          isClosing
            ? 'opacity-0 scale-95 translate-y-3 ease-in'
            : 'opacity-100 scale-100 translate-y-0 ease-out animate-scale-in'
        }`}
      >
        
        {/* Header */}
        <div className="p-3.5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-3 sm:gap-4 bg-[#161A23]">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5 font-mono-code text-[11px] sm:text-xs text-[#CEFF00]">
              <span>PROJECT {project.index} //</span>
              <span className="uppercase text-[#9BA3B4]">{project.category}</span>
            </div>
            <h2 id="case-study-title" className="font-display-title text-base xs:text-xl sm:text-3xl font-bold text-white break-words">
              {project.name} — Technical Case Study
            </h2>
            <p className="text-xs sm:text-sm text-[#9BA3B4] mt-1 break-words">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 sm:p-2 rounded-lg bg-[#0A0C10] border border-white/10 text-[#9BA3B4] hover:text-white hover:border-[#CEFF00]/50 transition-colors shrink-0"
            aria-label="Close case study dialog"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-3 sm:px-6 py-2 border-b border-white/[0.08] bg-[#0A0C10] flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Problem' },
            { id: 'architecture', label: 'Architecture & Tech' },
            { id: 'challenges', label: 'Engineering Challenges' },
            { id: 'status', label: 'Verified Status' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-mono-code transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#1E2330] text-[#CEFF00] font-semibold border border-white/10'
                  : 'text-[#9BA3B4] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1 text-xs sm:text-sm text-[#F3F5F9]">
          
          {/* Tab: Overview */}
          {activeTab === 'overview' && (
            <div key="overview" className="space-y-6 animate-smooth-in">
              <div>
                <h3 className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] mb-2">
                  Executive Summary
                </h3>
                <p className="text-[#9BA3B4] leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0C10] border border-white/10 space-y-2">
                <h3 className="font-mono-code text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#CEFF00]" />
                  The Problem & Motivation
                </h3>
                <p className="text-sm text-[#9BA3B4] leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div>
                <h3 className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] mb-2">
                  Demonstrated Role & Responsibility
                </h3>
                <p className="text-[#9BA3B4] leading-relaxed">
                  {caseStudy.role}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {caseStudy.metrics?.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#161A23] border border-white/[0.08]">
                    <span className="text-[11px] font-mono-code text-[#8E96A7] block">{m.label}</span>
                    <span className="text-white font-bold text-sm block mt-0.5">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Architecture */}
          {activeTab === 'architecture' && (
            <div key="architecture" className="space-y-6 animate-smooth-in">
              <div>
                <h3 className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] mb-3">
                  Deliberate Technology Choices & Rationales
                </h3>
                <div className="space-y-3">
                  {caseStudy.techDecisions?.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#0A0C10] border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm">
                        <Cpu className="w-4 h-4 text-[#CEFF00]" />
                        <span>{item.tech}</span>
                      </div>
                      <p className="text-xs text-[#9BA3B4] leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] mb-2">
                  Verified Feature Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights?.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#9BA3B4]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab: Challenges */}
          {activeTab === 'challenges' && (
            <div key="challenges" className="space-y-4 animate-smooth-in">
              <h3 className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] mb-2">
                Technical Roadblocks & Engineering Solutions
              </h3>
              {caseStudy.challenges?.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0A0C10] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono-code text-xs flex items-center justify-center">!</span>
                    <span>Challenge: {item.challenge}</span>
                  </div>
                  <div className="pl-7">
                    <p className="text-xs text-[#9BA3B4] leading-relaxed">
                      <strong className="text-[#CEFF00] font-medium">Engineered Solution: </strong>
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Status */}
          {activeTab === 'status' && (
            <div key="status" className="space-y-6 animate-smooth-in">
              <div className="p-4 rounded-xl bg-[#161A23] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Truthful Project Verification
                  </h4>
                  <p className="text-xs text-[#9BA3B4] leading-relaxed">
                    This project was developed and audited under the Route Academy Front-End curriculum. All described components, state mechanics, and responsive styles correspond to actual code implementations.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] mb-2">
                  Code & Demonstration Access
                </h4>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.links.demo && (
                    <a
                      href={caseStudy.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#CEFF00] text-[#0A0C10] text-xs font-mono-code font-bold hover:bg-[#d8ff33] transition-colors"
                    >
                      <span>Open Live Vercel App</span>
                    </a>
                  )}

                  <a
                    href={caseStudy.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-white hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#CEFF00]" />
                    <span>View GitHub Repository</span>
                  </a>
                </div>
                <span className="block mt-2 text-[11px] font-mono-code text-[#10B981]">
                  ✓ Verified active repository on github.com/eslam2981
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-[#161A23] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-code text-[#9BA3B4]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0"></span>
            <span className="truncate">{project.status}</span>
          </span>
          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:w-auto px-4 py-2 rounded-md bg-[#0A0C10] border border-white/10 text-white hover:text-[#CEFF00] hover:border-[#CEFF00]/40 transition-colors text-center cursor-pointer"
          >
            Close Window (Esc)
          </button>
        </div>

      </div>
    </div>
  );
}
