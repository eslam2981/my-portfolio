import { useState } from 'react';
import { ExternalLink, BookOpen, Check } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import { 
  SpheraSimulator, 
  BabyZoneChecklist, 
  LensStudioCard, 
  CompactProjectCard 
} from './projects/index';

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const spheraProject = portfolioData.projects[0];
  const babyZoneProject = portfolioData.projects[1];
  const lensStudioProject = portfolioData.projects[2];
  const quizMasterProject = portfolioData.projects[3];
  const nutriPlanProject = portfolioData.projects[4];

  return (
    <section id="work" className="py-16 sm:py-28 relative bg-[#0A0C10] border-t border-white/[0.08]" aria-label="Selected Projects">
      
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl xl:max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] sm:text-xs text-[#CEFF00] mb-2 uppercase tracking-widest">
              <span>01 // Selected Work</span>
              <span className="text-[#8E96A7]">—</span>
              <span className="text-[#9BA3B4]">Verified Deployed Projects</span>
            </div>
            <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Real code. Live deployments.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#9BA3B4] font-normal leading-relaxed">
              Every project below is an active repository on my GitHub (<strong className="text-white">@eslam2981</strong>) deployed live on Vercel with real users and architecture.
            </p>
          </div>

          <div className="flex items-center gap-2 lg:self-end shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-xs font-mono-code text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>5 Deployed Applications</span>
            </div>
          </div>
        </div>

        {/* Project 01: Sphera Social */}
        <div className="mb-14 sm:mb-20 rounded-3xl bg-[#10131A] border border-white/10 p-3.5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Project info */}
            <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#CEFF00]/10 border border-[#CEFF00]/30 text-[#CEFF00] font-mono-code text-[10px] sm:text-[11px] font-bold uppercase whitespace-nowrap">
                  <span className="sm:hidden">Flagship Social</span>
                  <span className="hidden sm:inline">Flagship Social Network</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-400 font-mono-code text-[10px] sm:text-[11px] flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Live on Vercel
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#9BA3B4] font-mono-code text-[10px] sm:text-[11px] shrink-0 whitespace-nowrap">
                  Project 01
                </span>
              </div>

              <div className="flex items-center gap-3">
                <h3 className="font-display-title text-xl xs:text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Sphera Social
                </h3>
              </div>

              <p className="text-xs sm:text-base text-[#9BA3B4] leading-relaxed">
                A full-featured, responsive social media platform built with React 19, TypeScript, and TanStack Query v5. Features secure JWT authentication, an infinite-scrolling media newsfeed, optimistic post reactions, interactive comments, user profile management, friend connections, and seamless dark mode.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code text-[#9BA3B4]">
                <div className="p-2.5 rounded-lg bg-[#0A0C10] border border-white/[0.06] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                  <span className="break-words">TanStack Query Caching</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0C10] border border-white/[0.06] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                  <span className="break-words">Optimistic Post Reactions</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0C10] border border-white/[0.06] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                  <span className="break-words">JWT Auth & Zod Validation</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0C10] border border-white/[0.06] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                  <span className="break-words">Tailwind v4 & HeroUI</span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['React 19', 'TypeScript', 'Tailwind CSS v4', 'TanStack Query v5', 'Framer Motion', 'HeroUI', 'Zod', 'React Hook Form', 'React Router v7'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#0A0C10] text-xs font-mono-code text-[#F3F5F9] border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08] mt-2">
                <a
                  href="https://sphera-social-amber.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-xs tracking-wider uppercase transition-all hover:bg-[#d8ff33] hover:shadow-[0_0_25px_rgba(206,255,0,0.35)] whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Launch Live App</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(spheraProject)}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#161A23] border border-white/10 text-xs font-mono-code text-white hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <BookOpen className="w-4 h-4 text-[#CEFF00] shrink-0" />
                    <span>Case Study</span>
                  </button>

                  <a
                    href="https://github.com/eslam2981/Sphera-Social"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-[#9BA3B4] hover:text-white hover:border-white/20 transition-colors whitespace-nowrap"
                  >
                    <GithubIcon className="w-4 h-4 shrink-0" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Live simulator */}
            <div className="lg:col-span-6 w-full min-w-0">
              <SpheraSimulator />
            </div>

          </div>

        </div>

        {/* Project 02: Baby Zone Store */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 text-left">
          
          {/* Interactive checklist */}
          <BabyZoneChecklist />

          {/* Project details */}
          <div className="lg:col-span-6 rounded-3xl bg-[#10131A] border border-white/10 p-3.5 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#CEFF00]/10 border border-[#CEFF00]/30 text-[#CEFF00] font-mono-code text-[10px] sm:text-[11px] font-bold whitespace-nowrap">
                  <span className="sm:hidden">PROJECT 02 // E-COMMERCE</span>
                  <span className="hidden sm:inline">PROJECT 02 // KIDS E-COMMERCE</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-400 font-mono-code text-[10px] sm:text-[11px] flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Live on Vercel
                </span>
              </div>

              <h3 className="font-display-title text-xl sm:text-3xl font-extrabold text-white">
                Baby Zone Store
              </h3>

              <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
                A dedicated kids and maternity e-commerce web application featuring 17 age-targeted product categories, an interactive Hospital Bag Checklist with live progress tracking, a 4-stage live order tracking system, quick-view product modals, and reactive cart management with free shipping progress meter.
              </p>

              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-[#0A0C10] border border-white/[0.06] text-xs font-mono-code text-[#9BA3B4]">
                  <strong className="text-white block mb-0.5">Interactive Checklist Utility:</strong>
                  Grouped by Mother, Baby, and Nursery categories, with dynamic completion percentage synced to LocalStorage.
                </div>
                <div className="p-3 rounded-xl bg-[#0A0C10] border border-white/[0.06] text-xs font-mono-code text-[#9BA3B4]">
                  <strong className="text-white block mb-0.5">Live Order Tracking:</strong>
                  Real-time timeline (Order Placed → Preparing → Out for Delivery → Delivered) with dynamic courier updates.
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {['React 19', 'Tailwind CSS', 'React Router v7', 'Context API', 'LocalStorage', 'Lucide React'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#161A23] text-xs font-mono-code text-[#F3F5F9] border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-6 border-t border-white/[0.08] mt-6">
              <a
                href="https://baby-zone-store.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-xs font-mono-code hover:bg-[#d8ff33] transition-colors whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>Visit Live Store</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(babyZoneProject)}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#161A23] border border-white/10 text-white font-semibold text-xs font-mono-code hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 text-[#CEFF00] shrink-0" />
                  <span>Case Study</span>
                </button>

                <a
                  href="https://github.com/eslam2981/baby-zone-store"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-[#9BA3B4] hover:text-white transition-colors whitespace-nowrap"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Project 03: Lens Studio */}
        <LensStudioCard 
          onOpenCaseStudy={() => setSelectedCaseStudy(lensStudioProject)} 
        />

        {/* Projects 04 & 05: QuizMaster & NutriPlan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          <CompactProjectCard
            badgeShort="PROJECT 04 // LOGIC"
            badgeFull="PROJECT 04 // LOGIC & STATE"
            title="QuizMaster — Ultimate Trivia"
            description="Interactive trivia quiz app with dynamic question sequencing, interval countdown timers per question, state machine flow, and defensive lifecycle teardown to prevent memory leaks."
            highlights={[
              "Real-time countdown timer with timeout transitions",
              "Multi-category questions & dynamic score analytics"
            ]}
            technologies={['React', 'JavaScript ES6+', 'Tailwind CSS', 'Timer APIs', 'State Machine']}
            onOpenCaseStudy={() => setSelectedCaseStudy(quizMasterProject)}
            githubUrl="https://github.com/eslam2981/QuizMaster---The-Ultimate-Trivia-Challenge"
          />

          <CompactProjectCard
            badgeShort="PROJECT 05 // HEALTH"
            badgeFull="PROJECT 05 // PRODUCTIVITY & HEALTH"
            title="NutriPlan — Fitness & Nutrition"
            description="Food, nutrition, and workout planning app featuring automated calorie and macronutrient breakdown (proteins, carbs, fats), visual ratios, and workout goal tracking with local persistence."
            highlights={[
              "Instant macro breakdown calculations (Carbs/Protein/Fat)",
              "Custom workout routines with persistent LocalStorage"
            ]}
            technologies={['React', 'JavaScript ES6+', 'Tailwind CSS', 'LocalStorage', 'Analytics UI']}
            onOpenCaseStudy={() => setSelectedCaseStudy(nutriPlanProject)}
            githubUrl="https://github.com/eslam2981/nutriplan-fitness"
          />

        </div>

      </div>

      {/* Case study modal */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudy}
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

    </section>
  );
}
