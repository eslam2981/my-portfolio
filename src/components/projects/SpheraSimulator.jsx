import { useState } from 'react';
import { ExternalLink, Heart, MessageSquare, Send } from 'lucide-react';

/** Mini feed simulator for Sphera Social */
export default function SpheraSimulator() {
  const [spheraLikes, setSpheraLikes] = useState(128);
  const [spheraLiked, setSpheraLiked] = useState(false);
  const [spheraComments, setSpheraComments] = useState([
    { id: 'c1', user: 'Karim Ahmed', text: 'Clean architecture! TanStack Query makes social feeds silky smooth.', time: '10m ago' },
    { id: 'c2', user: 'Nour El-Din', text: 'Love the optimistic updates in Sphera!', time: '2m ago' }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleSpheraLike = () => {
    if (spheraLiked) {
      setSpheraLikes(prev => prev - 1);
      setSpheraLiked(false);
    } else {
      setSpheraLikes(prev => prev + 1);
      setSpheraLiked(true);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    const comment = {
      id: `c_${Date.now()}`,
      user: 'You (Recruiter / Visitor)',
      text: newCommentText.trim(),
      time: 'Just now'
    };
    setSpheraComments(prev => [comment, ...prev]);
    setNewCommentText('');
  };

  return (
    <div className="rounded-2xl bg-[#0A0C10] border border-white/10 p-3.5 sm:p-5 shadow-inner text-left">
      {/* Simulator header */}
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between pb-3 border-b border-white/[0.08] mb-4 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#CEFF00] to-blue-500 flex items-center justify-center text-[#0A0C10] font-bold text-xs font-mono-code shrink-0">
            S
          </div>
          <span className="font-mono-code text-xs text-white font-semibold truncate whitespace-nowrap">
            Sphera Simulator
          </span>
        </div>

        <a
          href="https://sphera-social-amber.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161A23] border border-white/10 text-[10px] sm:text-[11px] font-mono-code text-[#CEFF00] hover:underline shrink-0 whitespace-nowrap"
          title="sphera-social-amber.vercel.app"
        >
          <span>sphera-social.app</span>
          <ExternalLink className="w-3 h-3 shrink-0" />
        </a>
      </div>

      {/* Post preview */}
      <div className="p-3 sm:p-4 rounded-xl bg-[#161A23] border border-white/[0.08] space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
              EG
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white flex items-center gap-1.5 flex-wrap">
                <span className="whitespace-nowrap">Eslam Gamil</span>
                <span className="text-[10px] text-[#CEFF00] font-mono-code font-normal whitespace-nowrap">@eslam2981</span>
              </div>
              <span className="text-[10px] font-mono-code text-[#8E96A7] block whitespace-nowrap">Alexandria • 15m ago</span>
            </div>
          </div>
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#0A0C10] text-[#9BA3B4] border border-white/5 shrink-0 whitespace-nowrap">
            Public
          </span>
        </div>

        <p className="text-xs text-[#F3F5F9] leading-relaxed">
          Excited to ship the new Sphera update! TanStack Query infinite pagination keeps the feed silky smooth while optimistic mutation handles instant like feedback. Test the live simulator below!
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06] text-xs font-mono-code">
          <button
            type="button"
            onClick={handleSpheraLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
              spheraLiked
                ? 'bg-red-500/10 border-red-500/40 text-red-400 font-bold'
                : 'bg-[#0A0C10] border-white/10 text-[#9BA3B4] hover:text-white'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${spheraLiked ? 'fill-red-400 text-red-400' : ''}`} />
            <span>{spheraLikes}</span>
          </button>

          <div className="flex items-center gap-1.5 text-[#9BA3B4]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{spheraComments.length} comments</span>
          </div>
        </div>

        {/* Comments */}
        <div className="pt-2 border-t border-white/[0.06] space-y-2">
          <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#8E96A7] block">
            Live Interaction Thread:
          </span>
          
          <div className="space-y-1.5 max-h-[110px] overflow-y-auto pr-1">
            {spheraComments.map(c => (
              <div key={c.id} className="p-2 rounded-lg bg-[#0A0C10] text-[11px] font-mono-code animate-smooth-in">
                <div className="flex items-center justify-between text-[#9BA3B4] mb-0.5">
                  <span className="text-[#CEFF00] font-semibold">{c.user}</span>
                  <span className="text-[#8E96A7] text-[9px]">{c.time}</span>
                </div>
                <p className="text-white text-xs">{c.text}</p>
              </div>
            ))}
          </div>

          {/* Comment input */}
          <form onSubmit={handleAddComment} className="flex gap-2 pt-1">
            <input
              type="text"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Add your comment to test live state..."
              className="flex-1 px-3 py-1.5 rounded-lg bg-[#0A0C10] border border-white/10 text-xs text-white placeholder-[#8E96A7] focus:outline-none focus:border-[#CEFF00]"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-[#CEFF00] text-[#0A0C10] font-bold text-xs font-mono-code hover:bg-[#d8ff33]"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono-code text-[#8E96A7]">
        <span>Testing Optimistic UI & Local State</span>
        <span className="text-[#10B981]">Status: Operational</span>
      </div>

    </div>
  );
}
