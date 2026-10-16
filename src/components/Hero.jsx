import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Check, CheckCircle2, Clock, Copy, Globe, Heart, MessageSquare, Share2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('ui'); // 'ui' | 'code'
  const [postLikes, setPostLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [cairoTime, setCairoTime] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  const rawCodeSnippet = `// Optimistic mutation hook
export function useLikePostMutation(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axios.post(\`/posts/\${postId}/like\`),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['post', postId] });
      const previous = queryClient.getQueryData(['post', postId]);
      queryClient.setQueryData(['post', postId], (old: any) => ({
        ...old,
        likesCount: old.likesCount + 1,
        isLiked: true,
      }));
      return { previous };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['post', postId], context?.previous);
    },
  });
};`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(rawCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Live Cairo time
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setCairoTime(timeStr);
      } catch {
        setCairoTime('Alexandria, EG');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    if (hasLiked) {
      setPostLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setPostLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center bg-tech-grid bg-radial-gradient overflow-hidden"
      aria-label="Introduction and Signature Showcase"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#CEFF00]/[0.035] blur-[140px] pointer-events-none rounded-full" aria-hidden="true" />

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Bio & details */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-left">
            
            {/* Role badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-2.5 sm:px-3 py-1.5 rounded-full bg-[#161A23] border border-white/10 text-[10px] sm:text-xs font-mono-code text-[#CEFF00] max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-pulse shrink-0"></span>
              <span className="text-[#F3F5F9] font-medium sm:hidden">Frontend Engineer</span>
              <span className="text-[#8E96A7] sm:hidden">•</span>
              <span className="text-[#CEFF00] sm:hidden">React 19 & DSA</span>
              
              <span className="text-[#F3F5F9] font-medium hidden sm:inline">Creative Frontend Engineer</span>
              <span className="text-[#8E96A7] hidden sm:inline">//</span>
              <span className="hidden sm:inline">React 19 & Algorithmic Problem Solver</span>
            </div>

            {/* Headline */}
            <h1 className="font-display-title text-[22px] min-[360px]:text-[26px] sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.12] max-w-2xl xl:max-w-3xl break-words">
              Thoughtful interfaces. <br className="hidden sm:inline" />
              <span className="text-[#9BA3B4]">Precise engineering.</span> <br />
              <span className="text-[#CEFF00]">Digital experiences</span> that stand apart.
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-base lg:text-lg text-[#9BA3B4] max-w-xl xl:max-w-2xl font-normal leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">{portfolioData.developer.name}</strong>. Computing & Data Science student at Alexandria University and Frontend Engineer specializing in <span className="text-white">React 19</span>, <span className="text-white">TypeScript</span>, and <span className="text-white">TanStack Query</span>, with over 200+ algorithmic problems solved on Codeforces & LeetCode.
            </p>

            {/* Location & time */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-mono-code text-[#9BA3B4] py-2.5 border-y border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" aria-hidden="true" />
                <span>Alexandria, Egypt</span>
              </div>
              <span className="text-[#8E96A7] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9BA3B4] shrink-0" aria-hidden="true" />
                <span>Local Time: <span className="text-white font-semibold">{cairoTime || 'Egypt (UTC+2)'}</span></span>
              </div>
              <span className="text-[#8E96A7] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                <span className="text-[#F3F5F9]">Open to Roles & Internships</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#CEFF00] text-[#0A0C10] font-bold text-sm tracking-wide transition-all hover:bg-[#d8ff33] hover:shadow-[0_0_30px_rgba(206,255,0,0.4)] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Explore Live Projects</span>
                <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#161A23] border border-white/10 text-white font-semibold text-sm hover:bg-[#1E2330] hover:border-white/20 transition-all active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-4 h-4 text-[#9BA3B4] shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Tech stack */}
            <div className="pt-2">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#8E96A7] block mb-2.5">
                Verified Production Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  'React 19', 
                  'TypeScript', 
                  'TanStack Query v5', 
                  'Tailwind CSS v4', 
                  'Framer Motion', 
                  'Zod', 
                  'React Router v7', 
                  'Git'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-2.5 py-1 rounded-md bg-[#10131A] border border-white/[0.08] text-[11px] sm:text-xs font-mono-code text-[#9BA3B4] hover:text-[#CEFF00] hover:border-[#CEFF00]/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive demo */}
          <div className="lg:col-span-5 flex flex-col w-full max-w-full">
            <div className="rounded-2xl bg-[#11141A]/90 border border-white/10 p-3.5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              
              {/* Tab switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4 gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-1 sm:ml-2 font-mono-code text-[11px] sm:text-xs text-[#9BA3B4] truncate">
                    SpheraFeedHook.tsx
                  </span>
                </div>

                <div className="flex items-center p-0.5 rounded-lg bg-[#0A0C10] border border-white/10 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ui')}
                    className={`px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono-code transition-all ${
                      activeTab === 'ui'
                        ? 'bg-[#1E2330] text-[#CEFF00] font-semibold'
                        : 'text-[#9BA3B4] hover:text-white'
                    }`}
                  >
                    Feed
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono-code transition-all ${
                      activeTab === 'code'
                        ? 'bg-[#1E2330] text-[#CEFF00] font-semibold'
                        : 'text-[#9BA3B4] hover:text-white'
                    }`}
                  >
                    Query Hook
                  </button>
                </div>
              </div>

              {/* UI tab */}
              {activeTab === 'ui' ? (
                <div key="ui" className="flex flex-col gap-4 animate-smooth-in">
                  
                  {/* Sphera card */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A0C10] border border-white/[0.08] flex flex-col gap-3 text-left">
                    
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#CEFF00] to-blue-500 text-[#0A0C10] font-bold font-mono-code flex items-center justify-center text-xs shrink-0">
                          EG
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                            <span>Eslam Gamil</span>
                            <span className="px-1.5 py-0.2 rounded bg-[#CEFF00]/10 text-[#CEFF00] text-[9px] font-mono-code">Author</span>
                          </div>
                          <span className="text-[10px] font-mono-code text-[#8E96A7] truncate block">Sphera Social • Live Component</span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono-code bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 shrink-0">
                        Cached
                      </span>
                    </div>

                    <p className="text-xs text-[#F3F5F9] leading-relaxed pt-1">
                      "Building responsive frontend feeds with React 19 & TanStack Query. Optimistic state updates ensure sub-50ms interaction feedback!"
                    </p>

                    {/* Post actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] sm:text-xs font-mono-code gap-1">
                      <button
                        type="button"
                        onClick={handleLike}
                        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border transition-all ${
                          hasLiked 
                            ? 'bg-red-500/10 border-red-500/40 text-red-400 font-bold' 
                            : 'bg-[#161A23] border-white/10 text-[#9BA3B4] hover:text-white hover:border-white/20'
                        }`}
                        aria-label="Like post"
                      >
                        <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-red-400 text-red-400' : ''}`} />
                        <span>{postLikes}</span>
                      </button>

                      <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-[#161A23] border border-white/10 text-[#9BA3B4]">
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                        <span className="hidden xs:inline">18 Comments</span>
                        <span className="xs:hidden">18</span>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-[#161A23] border border-white/10 text-[#9BA3B4]">
                        <Share2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Share</span>
                      </div>
                    </div>

                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-[10px] sm:text-[11px] font-mono-code text-left">
                    <div className="p-2 rounded bg-[#0A0C10]/60 border border-white/[0.04]">
                      <span className="text-[#8E96A7] block">Optimistic Feedback:</span>
                      <span className="text-[#CEFF00] font-medium">Sub-50ms Reaction</span>
                    </div>
                    <div className="p-2 rounded bg-[#0A0C10]/60 border border-white/[0.04]">
                      <span className="text-[#8E96A7] block">Cache Strategy:</span>
                      <span className="text-[#10B981] font-medium">TanStack Query v5</span>
                    </div>
                  </div>

                </div>
              ) : (
                /* Code tab */
                <div key="code" className="rounded-xl bg-[#0A0C10] border border-white/[0.08] p-3 animate-smooth-in flex flex-col text-left">
                  {/* Mini code toolbar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px] font-mono-code">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3178C6]"></span>
                      <span className="text-white font-medium">TypeScript</span>
                      <span className="text-[#8E96A7]">• TanStack Query v5</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopySnippet}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 text-[10px]"
                      aria-label="Copy snippet"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#9BA3B4]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Syntax Highlighted Editor View */}
                  <div className="overflow-x-auto max-h-[300px] overflow-y-auto pr-1">
                    <div className="table w-full font-mono-code text-[11px] leading-[1.65]">
                      
                      {/* Line 01 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">01</span>
                        <span className="table-cell whitespace-pre text-[#8E96A7] italic">// Optimistic mutation hook</span>
                      </div>

                      {/* Line 02 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">02</span>
                        <span className="table-cell whitespace-pre">
                          <span className="text-[#F43F5E] font-medium">export </span>
                          <span className="text-[#F43F5E] font-medium">function </span>
                          <span className="text-[#CEFF00] font-semibold">useLikePostMutation</span>
                          <span className="text-white/60">(</span>
                          <span className="text-[#F3F4F6]">postId</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-[#38BDF8]">string</span>
                          <span className="text-white/60">) {'{'}</span>
                        </span>
                      </div>

                      {/* Line 03 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">03</span>
                        <span className="table-cell whitespace-pre">
                          {'  '}<span className="text-[#F43F5E] font-medium">const </span>
                          <span className="text-[#F3F4F6]">queryClient </span>
                          <span className="text-[#F43F5E]">= </span>
                          <span className="text-[#60A5FA]">useQueryClient</span>
                          <span className="text-white/60">();</span>
                        </span>
                      </div>

                      {/* Line 04 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">04</span>
                        <span className="table-cell whitespace-pre">&nbsp;</span>
                      </div>

                      {/* Line 05 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">05</span>
                        <span className="table-cell whitespace-pre">
                          {'  '}<span className="text-[#F43F5E] font-medium">return </span>
                          <span className="text-[#60A5FA]">useMutation</span>
                          <span className="text-white/60">({'{'}</span>
                        </span>
                      </div>

                      {/* Line 06 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">06</span>
                        <span className="table-cell whitespace-pre">
                          {'    '}<span className="text-[#C084FC]">mutationFn</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-white/60">() </span>
                          <span className="text-[#F43F5E]">=&gt; </span>
                          <span className="text-[#38BDF8]">axios</span>
                          <span className="text-white/60">.</span>
                          <span className="text-[#60A5FA]">post</span>
                          <span className="text-white/60">(`</span>
                          <span className="text-[#34D399]">/posts/</span>
                          <span className="text-[#F43F5E]">${'{'}</span>
                          <span className="text-[#F3F4F6]">postId</span>
                          <span className="text-[#F43F5E]">{'}'}</span>
                          <span className="text-[#34D399]">/like</span>
                          <span className="text-white/60">`),</span>
                        </span>
                      </div>

                      {/* Line 07 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">07</span>
                        <span className="table-cell whitespace-pre">
                          {'    '}<span className="text-[#C084FC]">onMutate</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-[#F43F5E] font-medium">async </span>
                          <span className="text-white/60">() </span>
                          <span className="text-[#F43F5E]">=&gt; </span>
                          <span className="text-white/60">{'{'}</span>
                        </span>
                      </div>

                      {/* Line 08 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">08</span>
                        <span className="table-cell whitespace-pre">
                          {'      '}<span className="text-[#F43F5E] font-medium">await </span>
                          <span className="text-[#38BDF8]">queryClient</span>
                          <span className="text-white/60">.</span>
                          <span className="text-[#60A5FA]">cancelQueries</span>
                          <span className="text-white/60">({'{ '}</span>
                          <span className="text-[#C084FC]">queryKey</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-white/60">[</span>
                          <span className="text-[#34D399]">'post'</span>
                          <span className="text-white/60">, </span>
                          <span className="text-[#F3F4F6]">postId</span>
                          <span className="text-white/60">] {'}'});</span>
                        </span>
                      </div>

                      {/* Line 09 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">09</span>
                        <span className="table-cell whitespace-pre">
                          {'      '}<span className="text-[#F43F5E] font-medium">const </span>
                          <span className="text-[#F3F4F6]">previous </span>
                          <span className="text-[#F43F5E]">= </span>
                          <span className="text-[#38BDF8]">queryClient</span>
                          <span className="text-white/60">.</span>
                          <span className="text-[#60A5FA]">getQueryData</span>
                          <span className="text-white/60">([</span>
                          <span className="text-[#34D399]">'post'</span>
                          <span className="text-white/60">, </span>
                          <span className="text-[#F3F4F6]">postId</span>
                          <span className="text-white/60">]);</span>
                        </span>
                      </div>

                      {/* Line 10 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">10</span>
                        <span className="table-cell whitespace-pre">
                          {'      '}<span className="text-[#38BDF8]">queryClient</span>
                          <span className="text-white/60">.</span>
                          <span className="text-[#60A5FA]">setQueryData</span>
                          <span className="text-white/60">([</span>
                          <span className="text-[#34D399]">'post'</span>
                          <span className="text-white/60">, </span>
                          <span className="text-[#F3F4F6]">postId</span>
                          <span className="text-white/60">], (</span>
                          <span className="text-[#F3F4F6]">old</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-[#38BDF8]">any</span>
                          <span className="text-white/60">) </span>
                          <span className="text-[#F43F5E]">=&gt; </span>
                          <span className="text-white/60">({'{'}</span>
                        </span>
                      </div>

                      {/* Line 11 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">11</span>
                        <span className="table-cell whitespace-pre">
                          {'        '}<span className="text-[#F43F5E]">...</span>
                          <span className="text-[#F3F4F6]">old</span>
                          <span className="text-white/60">,</span>
                        </span>
                      </div>

                      {/* Line 12 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">12</span>
                        <span className="table-cell whitespace-pre">
                          {'        '}<span className="text-[#C084FC]">likesCount</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-[#F3F4F6]">old</span>
                          <span className="text-white/60">.</span>
                          <span className="text-[#C084FC]">likesCount </span>
                          <span className="text-[#F43F5E]">+ </span>
                          <span className="text-[#FB923C] font-semibold">1</span>
                          <span className="text-white/60">,</span>
                        </span>
                      </div>

                      {/* Line 13 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">13</span>
                        <span className="table-cell whitespace-pre">
                          {'        '}<span className="text-[#C084FC]">isLiked</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-[#FB923C] font-semibold">true</span>
                          <span className="text-white/60">,</span>
                        </span>
                      </div>

                      {/* Line 14 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">14</span>
                        <span className="table-cell whitespace-pre">
                          {'      '}<span className="text-white/60">{'}'}));</span>
                        </span>
                      </div>

                      {/* Line 15 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">15</span>
                        <span className="table-cell whitespace-pre">
                          {'      '}<span className="text-[#F43F5E] font-medium">return </span>
                          <span className="text-white/60">{'{ '}</span>
                          <span className="text-[#F3F4F6]">previous</span>
                          <span className="text-white/60"> {'}'};</span>
                        </span>
                      </div>

                      {/* Line 16 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">16</span>
                        <span className="table-cell whitespace-pre">
                          {'    '}<span className="text-white/60">{'}'},</span>
                        </span>
                      </div>

                      {/* Line 17 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">17</span>
                        <span className="table-cell whitespace-pre">
                          {'    '}<span className="text-[#C084FC]">onError</span>
                          <span className="text-[#F43F5E]">: </span>
                          <span className="text-white/60">(</span>
                          <span className="text-[#F3F4F6]">err</span>
                          <span className="text-white/60">, </span>
                          <span className="text-[#8E96A7]">_</span>
                          <span className="text-white/60">, </span>
                          <span className="text-[#F3F4F6]">context</span>
                          <span className="text-white/60">) </span>
                          <span className="text-[#F43F5E]">=&gt; </span>
                          <span className="text-white/60">{'{'}</span>
                        </span>
                      </div>

                      {/* Line 18 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">18</span>
                        <span className="table-cell whitespace-pre">
                          {'      '}<span className="text-[#38BDF8]">queryClient</span>
                          <span className="text-white/60">.</span>
                          <span className="text-[#60A5FA]">setQueryData</span>
                          <span className="text-white/60">([</span>
                          <span className="text-[#34D399]">'post'</span>
                          <span className="text-white/60">, </span>
                          <span className="text-[#F3F4F6]">postId</span>
                          <span className="text-white/60">], </span>
                          <span className="text-[#F3F4F6]">context</span>
                          <span className="text-[#F43F5E]">?.</span>
                          <span className="text-[#C084FC]">previous</span>
                          <span className="text-white/60">);</span>
                        </span>
                      </div>

                      {/* Line 19 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">19</span>
                        <span className="table-cell whitespace-pre">
                          {'    '}<span className="text-white/60">{'}'},</span>
                        </span>
                      </div>

                      {/* Line 20 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">20</span>
                        <span className="table-cell whitespace-pre">
                          {'  '}<span className="text-white/60">{'}'});</span>
                        </span>
                      </div>

                      {/* Line 21 */}
                      <div className="table-row hover:bg-white/[0.03]">
                        <span className="table-cell select-none pr-3 text-right text-[10px] text-[#4B5563]">21</span>
                        <span className="table-cell whitespace-pre text-white/60">{'}'}</span>
                      </div>

                    </div>
                  </div>
                </div>
              )}

              {/* Card footer */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono-code text-[#8E96A7]">
                <span>Status: Verified Architecture</span>
                <span className="text-[#CEFF00]">GitHub: eslam2981</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-xs font-mono-code text-[#8E96A7]">
          <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-[#CEFF00] animate-bounce"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
