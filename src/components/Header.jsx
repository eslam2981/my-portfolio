import { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollSpy, useEscapeKey } from '../hooks';

export default function Header({ onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosingMobileMenu, setIsClosingMobileMenu] = useState(false);

  const navLinks = useMemo(() => [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Principles', href: '#principles', id: 'principles' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ], []);

  const sectionIds = useMemo(() => ['work', 'capabilities', 'principles', 'about', 'contact'], []);
  const { activeSection, isScrolled } = useScrollSpy(sectionIds, 200, 30);

  const handleOpenMobileMenu = () => {
    setIsClosingMobileMenu(false);
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = useCallback(() => {
    if (isClosingMobileMenu) return;
    setIsClosingMobileMenu(true);
    setTimeout(() => {
      setIsClosingMobileMenu(false);
      setMobileMenuOpen(false);
    }, 220);
  }, [isClosingMobileMenu]);

  // Close on Escape
  useEscapeKey(handleCloseMobileMenu, mobileMenuOpen && !isClosingMobileMenu);

  // Prevent background scroll
  useEffect(() => {
    if (mobileMenuOpen || isClosingMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, isClosingMobileMenu]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#CEFF00] focus:text-[#0A0C10] focus:font-semibold focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0C10]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white transition-opacity hover:opacity-90 min-w-0"
            aria-label="Eslam Gamil - Return to top"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center font-mono-code font-bold text-xs sm:text-sm tracking-wider text-[#CEFF00] group-hover:border-[#CEFF00]/50 transition-colors shrink-0">
              EG
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className="font-display-title font-bold text-xs sm:text-base tracking-tight text-white flex items-center gap-1.5 truncate">
                <span className="hidden sm:inline">{portfolioData.developer.name}</span>
                <span className="sm:hidden">{portfolioData.developer.shortName}</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CEFF00] shrink-0"></span>
              </span>
              <span className="font-mono-code text-[10px] sm:text-[11px] text-[#9BA3B4] tracking-wider uppercase truncate">
                Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#161A23]/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full shadow-inner" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white/10 text-[#CEFF00] font-semibold shadow-sm'
                      : 'text-[#9BA3B4] hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Status and CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onReplayIntro && (
              <button
                type="button"
                onClick={onReplayIntro}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 hover:border-[#CEFF00]/40 text-xs font-mono-code text-[#9BA3B4] hover:text-[#CEFF00] transition-all active:scale-95 cursor-pointer"
                title="Replay intro animation"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CEFF00]" aria-hidden="true" />
                <span>Intro</span>
              </button>
            )}

            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#161A23] border border-white/[0.08] text-xs font-mono-code text-[#9BA3B4]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CEFF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CEFF00]"></span>
              </span>
              <span>Available for hire</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#CEFF00] text-[#0A0C10] font-semibold text-xs tracking-wide transition-all hover:bg-[#d8ff33] hover:shadow-[0_0_20px_rgba(206,255,0,0.35)] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => {
                if (mobileMenuOpen) {
                  handleCloseMobileMenu();
                } else {
                  handleOpenMobileMenu();
                }
              }}
              className="p-2 rounded-lg bg-[#161A23] border border-white/10 text-white hover:text-[#CEFF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CEFF00] flex items-center justify-center cursor-pointer transition-all active:scale-95"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-dialog"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className={`absolute transition-all duration-300 ease-out transform ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-75'}`}>
                  <X className="w-5 h-5" />
                </span>
                <span className={`absolute transition-all duration-300 ease-out transform ${mobileMenuOpen ? '-rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
                  <Menu className="w-5 h-5" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {(mobileMenuOpen || isClosingMobileMenu) && (
        <div
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className={`fixed inset-0 z-50 lg:hidden bg-[#0A0C10]/98 backdrop-blur-2xl overflow-y-auto overscroll-contain select-none ${
            isClosingMobileMenu
              ? 'animate-menu-exit pointer-events-none'
              : 'animate-menu-enter'
          }`}
        >
          <div className="min-h-full flex flex-col justify-between p-4 xs:p-5 sm:p-6 max-w-lg mx-auto w-full">
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#CEFF00] text-[#0A0C10] font-mono-code font-bold flex items-center justify-center text-xs shrink-0">
                    EG
                  </div>
                  <span className="font-display-title font-bold text-white text-sm sm:text-base truncate">
                    {portfolioData.developer.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCloseMobileMenu}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#161A23] text-[#9BA3B4] hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <nav className="mt-4 sm:mt-6 flex flex-col gap-1.5 sm:gap-2.5" aria-label="Mobile Primary Navigation">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={handleCloseMobileMenu}
                    style={{ animationDelay: `${idx * 40 + 40}ms` }}
                    className="animate-nav-item flex items-center justify-between py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl text-base sm:text-lg font-medium text-white hover:bg-white/5 hover:text-[#CEFF00] border border-transparent hover:border-white/10 transition-colors"
                  >
                    <span className="flex items-center gap-2.5 sm:gap-3">
                      <span className="font-mono-code text-xs text-[#8E96A7]">0{idx + 1} //</span>
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#9BA3B4]" />
                  </a>
                ))}
              </nav>
            </div>

            <div 
              style={{ animationDelay: '260ms' }}
              className="animate-nav-item pt-4 sm:pt-6 border-t border-white/10 flex flex-col gap-2.5 sm:gap-3 mt-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#9BA3B4]">
                <span className="w-2 h-2 rounded-full bg-[#CEFF00]"></span>
                <span>Available for Frontend Roles</span>
              </div>
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={() => {
                    handleCloseMobileMenu();
                    onReplayIntro();
                  }}
                  className="w-full py-2 sm:py-2.5 rounded-xl bg-[#161A23] border border-white/10 hover:border-[#CEFF00]/40 text-xs font-mono-code text-[#F3F5F9] hover:text-[#CEFF00] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#CEFF00]" />
                  <span>Replay Opening Intro</span>
                </button>
              )}
              <a
                href="#contact"
                onClick={handleCloseMobileMenu}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-center text-xs sm:text-sm shadow-[0_0_25px_rgba(206,255,0,0.3)] hover:bg-[#d8ff33] transition-all"
              >
                Initiate Dialogue
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
