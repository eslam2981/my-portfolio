import { BookOpen } from 'lucide-react';
import { GithubIcon } from '../Icons';

/** Reusable project card for 2-column grid */
export default function CompactProjectCard({
  badgeShort,
  badgeFull,
  title,
  description,
  highlights = [],
  technologies = [],
  onOpenCaseStudy,
  githubUrl
}) {
  return (
    <div className="rounded-3xl bg-[#10131A] border border-white/10 p-3.5 sm:p-8 flex flex-col justify-between gap-6 shadow-xl hover:border-white/20 transition-all">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[#CEFF00]/10 border border-[#CEFF00]/30 text-[#CEFF00] font-mono-code text-[10px] sm:text-[11px] font-bold whitespace-nowrap">
            <span className="sm:hidden">{badgeShort}</span>
            <span className="hidden sm:inline">{badgeFull}</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-mono-code border border-blue-500/20 shrink-0 whitespace-nowrap">
            Verified GitHub
          </span>
        </div>

        <div>
          <h3 className="font-display-title text-lg sm:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9BA3B4] leading-relaxed">
            {description}
          </p>
        </div>

        {highlights.length > 0 && (
          <div className="p-3 rounded-xl bg-[#0A0C10] border border-white/[0.06] text-xs font-mono-code text-[#9BA3B4] space-y-1">
            <div className="text-white font-semibold">Engineered Highlights:</div>
            {highlights.map((highlight, index) => (
              <div key={index} className="text-green-400">
                ✓ {highlight}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          {technologies.map(t => (
            <span key={t} className="px-2.5 py-1 rounded bg-[#0A0C10] text-[11px] font-mono-code text-[#9BA3B4] border border-white/[0.08]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/[0.08]">
        <button
          type="button"
          onClick={onOpenCaseStudy}
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#161A23] border border-white/10 text-white font-semibold text-xs font-mono-code hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors whitespace-nowrap cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-[#CEFF00] shrink-0" />
          <span>Case Study</span>
        </button>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#0A0C10] border border-white/10 text-xs font-mono-code text-[#9BA3B4] hover:text-white transition-colors whitespace-nowrap"
        >
          <GithubIcon className="w-4 h-4 shrink-0" />
          <span>GitHub Repo</span>
        </a>
      </div>
    </div>
  );
}
