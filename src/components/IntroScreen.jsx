import { Terminal, Cpu, GraduationCap, Code2, ArrowRight } from 'lucide-react';
import { useIntroTimer, useEscapeKey } from '../hooks';

export default function IntroScreen({ isOpen, onComplete }) {
  const { progress, stepIndex, isExiting, handleFinish } = useIntroTimer(isOpen, onComplete);

  // Close on Escape
  useEscapeKey(handleFinish, isOpen && !isExiting);

  const steps = [
    {
      title: "Alexandria University",
      detail: "Faculty of Computing & Data Science • GPA 3.66 (Excellent)",
      icon: GraduationCap,
      code: "ACADEMIC_FOUNDATION"
    },
    {
      title: "Problem Solving",
      detail: "200+ Solved Algorithmic Problems on Codeforces & LeetCode",
      icon: Code2,
      code: "ALGORITHMIC_RIGOR"
    },
    {
      title: "Core Stack",
      detail: "React 19 • TypeScript • Tailwind CSS • TanStack Query",
      icon: Cpu,
      code: "MODERN_FRONTEND"
    }
  ];


  if (!isOpen) return null;

  const currentStep = steps[stepIndex] || steps[0];
  const StepIcon = currentStep.icon;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 md:p-10 bg-[#07090E] text-[#F3F5F9] select-none overflow-y-auto transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Intro Screen"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#CEFF00]/[0.045] blur-[160px] pointer-events-none rounded-full" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto gap-2">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#161A23] border border-[#CEFF00]/40 flex items-center justify-center font-mono-code font-bold text-xs text-[#CEFF00] shadow-[0_0_15px_rgba(206,255,0,0.25)] shrink-0">
            EG
          </div>
          <div className="flex flex-col">
            <span className="font-mono-code text-xs text-white font-bold tracking-wider">
              EG // DEV
            </span>
            <span className="font-mono-code text-[9px] sm:text-[10px] text-[#8E96A7]">
              CREATIVE DEVELOPER
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#161A23]/80 border border-white/10 hover:border-[#CEFF00]/50 text-[11px] sm:text-xs font-mono-code text-[#9BA3B4] hover:text-[#CEFF00] transition-all backdrop-blur-sm cursor-pointer shrink-0"
        >
          <span>Skip</span>
          <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-[#8E96A7] group-hover:text-[#CEFF00]">
            ESC
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6 my-auto py-4 sm:py-8">
        
        {/* Terminal tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131A] border border-[#CEFF00]/30 text-[10px] sm:text-xs font-mono-code text-[#CEFF00] shadow-[0_0_20px_rgba(206,255,0,0.15)] max-w-full">
          <Terminal className="w-3.5 h-3.5 animate-pulse shrink-0" />
          <span className="truncate"><span className="hidden xs:inline">SYSTEM_INIT // </span>ESLAM GAMIL EBRAHIM</span>
        </div>

        {/* Name */}
        <div className="space-y-1 sm:space-y-2">
          <h1 className="font-display-title text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Eslam Gamil
          </h1>
          <p className="font-mono-code text-[11px] sm:text-sm text-[#9BA3B4] tracking-wide">
            Front-End Developer • Computer Science & Data Science
          </p>
        </div>

        {/* Credentials card */}
        <div className="w-full rounded-2xl bg-[#10131A]/90 border border-white/10 p-3 sm:p-6 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs font-mono-code gap-2">
            <span className="text-[#CEFF00] flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#CEFF00] animate-ping shrink-0" />
              <span className="truncate">LOG: {currentStep.code}</span>
            </span>
            <span className="text-[#8E96A7] hidden xs:inline shrink-0">VERIFIED CREDENTIALS</span>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#161A23] border border-white/10 text-[#CEFF00] shrink-0">
              <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-bold text-white mb-1 truncate">
                {currentStep.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#9BA3B4] font-mono-code leading-relaxed">
                {currentStep.detail}
              </p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[9.5px] sm:text-[11px] font-mono-code">
          <span className="px-2 sm:px-2.5 py-1 rounded-md bg-[#161A23] border border-white/10 text-[#F3F5F9]">
            Alexandria, Egypt
          </span>
          <span className="px-2 sm:px-2.5 py-1 rounded-md bg-[#161A23] border border-white/10 text-[#F3F5F9]">
            Faculty of Computing & Data Science
          </span>
          <span className="px-2 sm:px-2.5 py-1 rounded-md bg-[#161A23] border border-[#CEFF00]/20 text-[#CEFF00]">
            React 19 • TypeScript • Tailwind CSS
          </span>
        </div>

      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-3">
        <div className="flex items-center justify-between text-xs font-mono-code">
          <span className="text-[#8E96A7] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-pulse" />
            <span className="truncate">INITIALIZING EXPERIENCE</span>
          </span>
          <span className="text-[#CEFF00] font-bold text-sm tracking-wider shrink-0">
            {progress.toString().padStart(2, '0')}%
          </span>
        </div>

        {/* Track */}
        <div className="w-full h-1.5 rounded-full bg-[#161A23] overflow-hidden p-0.5 border border-white/[0.08]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#CEFF00] via-[#d8ff33] to-[#CEFF00] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(206,255,0,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono-code text-[#8E96A7]">
          <span>Eslam Gamil // 2026</span>
          <span className="hidden sm:inline">Press ESC to enter immediately</span>
          <span className="sm:hidden">Tap Skip to enter</span>
        </div>
      </div>
    </div>
  );
}
