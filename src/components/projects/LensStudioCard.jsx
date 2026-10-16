import { ExternalLink, BookOpen } from 'lucide-react';
import { GithubIcon } from '../Icons';

/** Project 03 showcase card */
export default function LensStudioCard({ onOpenCaseStudy }) {
  return (
    <div className="mb-12 rounded-3xl bg-[#10131A] border border-white/10 p-3.5 sm:p-8 flex flex-col xl:flex-row xl:items-center justify-between gap-6 text-left shadow-xl hover:border-white/20 transition-all">
      <div className="space-y-3 max-w-2xl min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#CEFF00] font-mono-code text-[10px] sm:text-[11px] font-bold whitespace-nowrap">
            <span className="sm:hidden">PROJECT 03 // SHOWCASE</span>
            <span className="hidden sm:inline">PROJECT 03 // CREATIVE VISUAL SHOWCASE</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-mono-code flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Live on Vercel
          </span>
        </div>

        <h3 className="font-display-title text-xl sm:text-2xl font-bold text-white">
          Lens Studio
        </h3>

        <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
          An editorial photography and visual storytelling web experience featuring asymmetric typography grids, jitter-free image rendering with strict aspect-ratio containers, and fluid responsiveness from mobile to 4K displays.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {['JavaScript ES6+', 'Modern CSS Grid', 'Vite', 'Zero CLS Layouts', 'Vercel'].map(t => (
            <span key={t} className="px-2.5 py-1 rounded bg-[#0A0C10] text-[11px] font-mono-code text-[#9BA3B4] border border-white/[0.08]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
        <a
          href="https://lens-studio-alpha.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-xs font-mono-code tracking-wider uppercase hover:bg-[#d8ff33] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          <span>Launch Live App</span>
        </a>

        <button
          type="button"
          onClick={onOpenCaseStudy}
          className="px-4 py-3 rounded-xl bg-[#161A23] border border-white/10 text-xs font-mono-code text-white hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-[#CEFF00] shrink-0" />
          <span>Case Study</span>
        </button>

        <a
          href="https://github.com/eslam2981/lens-studio"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-3 rounded-xl bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-[#9BA3B4] hover:text-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <GithubIcon className="w-4 h-4 shrink-0" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
