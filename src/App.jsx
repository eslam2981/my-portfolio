import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Skip if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    // Only show once per session
    try {
      return !sessionStorage.getItem('portfolio_intro_seen');
    } catch {
      return false;
    }
  });

  const handleCompleteIntro = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('portfolio_intro_seen', 'true');
    } catch {
      // Storage unavailable fallback
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A0C10] text-[#F3F5F9] font-sans selection:bg-[#CEFF00] selection:text-[#0A0C10]">
        {/* Opening intro screen */}
        <IntroScreen
          isOpen={showIntro}
          onComplete={handleCompleteIntro}
        />

        <Header onReplayIntro={handleReplayIntro} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer onReplayIntro={handleReplayIntro} />
      </div>
    </BrowserRouter>
  );
}
