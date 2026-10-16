import { useState } from 'react';
import { Code, Layout, Wrench, Compass, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Capabilities() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = portfolioData.capabilities;

  const categoryIcons = {
    "Frontend Core & Frameworks": <Code className="w-4 h-4 text-[#CEFF00]" />,
    "Styling & Design Systems": <Layout className="w-4 h-4 text-[#CEFF00]" />,
    "Engineering Discipline & Tooling": <Wrench className="w-4 h-4 text-[#CEFF00]" />,
    "Active Focus & Expansion": <Compass className="w-4 h-4 text-[#CEFF00]" />
  };

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(c => c.category === selectedCategory);

  return (
    <section id="capabilities" className="py-16 sm:py-28 relative bg-[#0A0C10] border-t border-white/[0.08]" aria-label="Capabilities and Technical Focus">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 text-left">
          <div className="max-w-2xl xl:max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px] sm:text-xs text-[#CEFF00] mb-2 uppercase tracking-widest">
              <span>02 // Capabilities</span>
              <span className="text-[#8E96A7]">—</span>
              <span className="text-[#9BA3B4]">Evidence-Based Technical Focus</span>
            </div>
            <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Skills anchored in real code.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#9BA3B4] font-normal leading-relaxed">
              No arbitrary percentage bars or vanity rankings. Every technology listed here corresponds to completed projects, diploma coursework, or active exploration.
            </p>
          </div>

          <div className="flex items-center gap-2 lg:self-end shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-xs font-mono-code text-[#CEFF00]">
              <span>Verified Skill Matrix</span>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 text-left">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-[#CEFF00] text-[#0A0C10] font-bold shadow-[0_0_15px_rgba(206,255,0,0.3)]'
                : 'bg-[#161A23] text-[#9BA3B4] hover:text-white border border-white/[0.08]'
            }`}
          >
            All Capabilities ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all whitespace-nowrap ${
                selectedCategory === cat.category
                  ? 'bg-[#CEFF00] text-[#0A0C10] font-bold shadow-[0_0_15px_rgba(206,255,0,0.3)]'
                  : 'bg-[#161A23] text-[#9BA3B4] hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-3.5 sm:p-8 rounded-2xl bg-[#10131A] border border-white/10 hover:border-white/20 transition-all shadow-xl flex flex-col justify-between animate-smooth-in"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#161A23] border border-white/10 shrink-0">
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h3 className="font-display-title text-base sm:text-xl font-bold text-white">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#9BA3B4] mb-5 sm:mb-6 leading-relaxed">
                  {group.summary}
                </p>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => {
                    const isCore = skill.level === 'Core Production';
                    const isDiploma = skill.level === 'Diploma Verified';

                    return (
                      <div
                        key={skill.name}
                        className="p-2.5 sm:p-3 rounded-xl bg-[#0A0C10] border border-white/[0.06] hover:border-white/15 transition-colors flex flex-col gap-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${
                              isCore ? 'text-[#CEFF00]' : isDiploma ? 'text-blue-400' : 'text-purple-400'
                            }`} />
                            <span className="text-[11px] sm:text-xs font-bold text-white font-mono-code break-words">
                              {skill.name}
                            </span>
                          </div>

                          <span className={`text-[9px] sm:text-[10px] font-mono-code px-1.5 sm:px-2 py-0.5 rounded uppercase font-semibold shrink-0 whitespace-nowrap tracking-wider ${
                            isCore
                              ? 'bg-[#CEFF00]/10 text-[#CEFF00] border border-[#CEFF00]/30'
                              : isDiploma
                              ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                              : 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                          }`}>
                            <span className="sm:hidden">{isCore ? 'Core' : isDiploma ? 'Diploma' : 'Track'}</span>
                            <span className="hidden sm:inline">{skill.level}</span>
                          </span>
                        </div>

                        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 pl-5 sm:pl-6 text-[10px] sm:text-[11px] font-mono-code">
                          <span className="text-[#8E96A7] shrink-0 text-[10px]">
                            Evidence:
                          </span>
                          <span className="text-[#9BA3B4] bg-white/5 px-2 py-0.5 rounded break-words leading-relaxed text-[10px] sm:text-[11px]">
                            {skill.evidence}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category footer */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono-code text-[#8E96A7]">
                <span className="break-words">Status: Fully Verified Curriculum</span>
                <span className="text-[#CEFF00] shrink-0 font-semibold">{group.skills.length} Demonstrated Areas</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
