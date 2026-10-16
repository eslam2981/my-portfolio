import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

/** 404 fallback page */
export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#10131A] border border-white/10 shadow-2xl">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#CEFF00]/10 border border-[#CEFF00]/30 flex items-center justify-center text-[#CEFF00]">
          <Terminal className="w-6 h-6" />
        </div>
        <span className="font-mono-code text-xs text-[#CEFF00] font-bold uppercase tracking-widest block mb-2">
          ERROR 404 // ROUTE NOT FOUND
        </span>
        <h1 className="font-display-title text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Page Does Not Exist
        </h1>
        <p className="text-xs sm:text-sm text-[#9BA3B4] mb-6 leading-relaxed">
          The requested path is outside the verified application perimeter. Navigate back to the home terminal.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-xs font-mono-code hover:bg-[#d8ff33] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </main>
  );
}
