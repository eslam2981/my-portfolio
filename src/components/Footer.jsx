import { ArrowUp, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onReplayIntro }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] border-t border-white/10 pt-16 pb-12 text-left" role="contentinfo">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] items-start">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#161A23] border border-white/15 flex items-center justify-center font-mono-code font-bold text-sm text-[#CEFF00]">
                EG
              </div>
              <div>
                <span className="font-display-title font-bold text-white text-base block">
                  {portfolioData.developer.name}
                </span>
                <span className="font-mono-code text-xs text-[#9BA3B4]">
                  Frontend Developer & Creative Technologist
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8E96A7] max-w-sm font-mono-code leading-relaxed">
              Crafting responsive, accessible web interfaces backed by modern component architecture and Route Academy diploma standards.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] block mb-2">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
              <a href="#work" className="text-[#9BA3B4] hover:text-white transition-colors">01 // Work</a>
              <a href="#capabilities" className="text-[#9BA3B4] hover:text-white transition-colors">02 // Capabilities</a>
              <a href="#principles" className="text-[#9BA3B4] hover:text-white transition-colors">03 // Principles</a>
              <a href="#about" className="text-[#9BA3B4] hover:text-white transition-colors">04 // About</a>
              <a href="#contact" className="text-[#9BA3B4] hover:text-white transition-colors">05 // Contact</a>
              <a href="#hero" className="text-[#9BA3B4] hover:text-white transition-colors">Top // Top of Page</a>
            </div>
          </div>

          {/* Location info */}
          <div className="md:col-span-3 space-y-3 text-left md:text-right">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#CEFF00] block mb-2">
              Base Coordinates
            </span>
            <p className="text-xs font-mono-code text-[#9BA3B4]">
              Alexandria, Egypt • UTC+2 (EET)
            </p>
            <p className="text-xs font-mono-code text-[#8E96A7]">
              Open for Remote & Local Opportunities
            </p>

            <div className="flex items-center justify-start md:justify-end gap-2 mt-2">
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161A23] border border-white/10 text-xs font-mono-code text-[#9BA3B4] hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors"
                  aria-label="Replay intro"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#CEFF00]" />
                  <span>Replay Intro</span>
                </button>
              )}

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161A23] border border-white/10 text-xs font-mono-code text-white hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-code text-[#8E96A7]">
          <div>
            © {currentYear} {portfolioData.developer.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
