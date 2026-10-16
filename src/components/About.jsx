import { Award, CheckCircle, GraduationCap, Code2, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { education, achievements } = portfolioData.developer;

  return (
    <section id="about" className="py-16 sm:py-28 relative bg-[#0A0C10] border-t border-white/[0.08]" aria-label="About and Background">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl xl:max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] sm:text-xs text-[#CEFF00] mb-2 uppercase tracking-widest">
              <span>04 // About</span>
              <span className="text-[#8E96A7]">—</span>
              <span className="text-[#9BA3B4]">Computer Science & Practical Training</span>
            </div>
            <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Engineering with scientific depth.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#9BA3B4] font-normal leading-relaxed">
              Bridging rigorous computer science theory with production-grade frontend engineering and certified industry tracks.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 lg:self-end shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-[11px] sm:text-xs font-mono-code text-[#CEFF00]">
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span className="break-words">Alexandria University</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-[11px] sm:text-xs font-mono-code text-blue-400">
              <Trophy className="w-3.5 h-3.5 shrink-0" />
              <span className="break-words">CS & Data Science</span>
            </div>
          </div>
        </div>

        {/* Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start text-left">
          
          {/* Bio */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-[#9BA3B4] leading-relaxed text-sm sm:text-base">
            <p className="font-display-title text-base sm:text-2xl text-white font-semibold leading-snug break-words">
              "{portfolioData.about.lead}"
            </p>

            {portfolioData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-base">
                {p}
              </p>
            ))}

            {/* Problem solving */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#10131A] border border-white/10 space-y-3 pt-3.5 sm:pt-4">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between pb-2 border-b border-white/[0.06] gap-1.5">
                <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-wider text-[#CEFF00] flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 shrink-0" />
                  <span>Competitive Programming</span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono-code text-[#10B981] font-semibold shrink-0">
                  200+ Solved
                </span>
              </div>
              <p className="text-xs text-[#9BA3B4] leading-relaxed">
                Active problem solver on <strong>Codeforces</strong> and <strong>LeetCode</strong> with proven fluency in data structures (Linked Lists, Binary Trees, Graphs) and algorithmic analysis (time/space complexity).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs font-mono-code text-[#F3F5F9] pt-1">
                {achievements.focusAreas.map((area, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#0A0C10] border border-white/[0.04] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-[#CEFF00] shrink-0" />
                    <span className="text-[11px] break-words">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & tracks */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* University */}
            <div className="rounded-3xl bg-[#10131A] border border-white/10 p-4 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#CEFF00]/10 border border-[#CEFF00]/30 text-[#CEFF00] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display-title text-sm sm:text-base font-bold text-white break-words">
                      {education.university}
                    </h3>
                    <span className="font-mono-code text-[11px] sm:text-xs text-[#9BA3B4] break-words block">
                      {education.faculty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#8E96A7]">Timeline:</span>
                  <span className="text-white font-medium">{education.timeline}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#8E96A7]">Academic Standing:</span>
                  <span className="text-[#CEFF00] font-bold">GPA: {education.gpa}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#8E96A7]">Department:</span>
                  <span className="text-[#F3F5F9]">{education.department}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0A0C10] border border-white/[0.06] text-xs font-mono-code text-[#9BA3B4]">
                <span className="text-white font-medium block mb-1">Academic Core:</span>
                OOP, Data Structures, Algorithms, Discrete Mathematics, Java & C++ Systems.
              </div>
            </div>

            {/* Training tracks */}
            <div className="rounded-3xl bg-[#10131A] border border-white/10 p-6 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display-title text-sm font-bold text-white">
                    Professional Development Tracks
                  </h4>
                  <span className="font-mono-code text-[11px] text-[#8E96A7]">
                    National & Academy Programs
                  </span>
                </div>
              </div>

              {/* DEPI */}
              <div className="p-3.5 rounded-xl bg-[#0A0C10] border border-white/[0.06] space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-xs font-bold text-white font-mono-code">
                    Digital Egypt Pioneers Initiative (DEPI)
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 whitespace-nowrap shrink-0">
                    2025
                  </span>
                </div>
                <p className="text-[11px] text-[#9BA3B4] leading-relaxed">
                  Ministry of Communications & Information Technology (MCIT) intensive React track, modern JS, scalable architecture, and UI/UX best practices.
                </p>
              </div>

              {/* Route Academy */}
              <div className="p-3.5 rounded-xl bg-[#0A0C10] border border-white/[0.06] space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-xs font-bold text-white font-mono-code">
                    Route Academy Front-End Track
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#CEFF00]/10 text-[#CEFF00] whitespace-nowrap shrink-0">
                    React Focus
                  </span>
                </div>
                <p className="text-[11px] text-[#9BA3B4] leading-relaxed">
                  Hands-on frontend development with a focus on React, component-driven design, TypeScript, and state management.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
