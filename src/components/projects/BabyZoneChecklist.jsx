import { useState } from 'react';
import { ExternalLink, Check, Baby, Package } from 'lucide-react';

/** Interactive checklist widget for Baby Zone */
export default function BabyZoneChecklist() {
  const [checklistItems, setChecklistItems] = useState([
    { id: 'b1', name: 'Newborn Cotton Onesies (Pack of 3)', category: 'Newborn', checked: true },
    { id: 'b2', name: 'Baby Swaddle & Receiving Blanket', category: 'Newborn', checked: true },
    { id: 'b3', name: 'Maternity Nursing Robe & Slippers', category: 'Mother', checked: false },
    { id: 'b4', name: 'Hospital ID & Medical Documents Folder', category: 'Hospital', checked: true },
    { id: 'b5', name: 'Pediatrician Approved Sanitizing Wipes', category: 'Newborn', checked: false },
  ]);

  const toggleChecklistItem = (id) => {
    setChecklistItems(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const completedCount = checklistItems.filter(item => item.checked).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <div className="lg:col-span-6 rounded-3xl bg-[#10131A] border border-white/10 p-4 sm:p-8 flex flex-col justify-between shadow-xl">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Baby className="w-4 h-4 text-[#CEFF00] shrink-0" />
            <span className="font-mono-code text-xs text-white font-semibold truncate">
              <span className="hidden sm:inline">Interactive </span>Hospital Bag
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono-code text-xs text-[#CEFF00] font-bold">
              {progressPercent}% Complete
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-[#0A0C10] border border-white/[0.08] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-[#CEFF00] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono-code text-[#9BA3B4]">
            <span>Expectant Parent Checklist:</span>
            <span>{completedCount} of {checklistItems.length} packed</span>
          </div>

          {/* Checklist items */}
          <div className="space-y-2">
            {checklistItems.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleChecklistItem(item.id)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left text-xs font-mono-code flex items-center justify-between gap-2 transition-all ${
                  item.checked
                    ? 'bg-green-500/10 border-green-500/30 text-white'
                    : 'bg-[#161A23] border-white/10 text-[#9BA3B4] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 ${
                    item.checked ? 'bg-[#CEFF00] border-[#CEFF00] text-[#0A0C10]' : 'border-white/20 bg-[#0A0C10]'
                  }`}>
                    {item.checked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className={item.checked ? 'line-through text-[#9BA3B4] break-words text-[11px] sm:text-xs' : 'text-white break-words text-[11px] sm:text-xs'}>
                    {item.name}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-[#0A0C10] text-[#8E96A7] shrink-0">
                  {item.category}
                </span>
              </button>
            ))}
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-[#0A0C10] border border-white/[0.06] flex items-center justify-between text-[11px] sm:text-xs font-mono-code text-[#9BA3B4]">
            <span>Order Tracker:</span>
            <span className="text-white flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-[#CEFF00]" />
              <span>Stage 3: Out for Delivery</span>
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/[0.08] mt-6 flex items-center justify-between text-xs font-mono-code text-[#8E96A7] gap-2">
        <span className="truncate">Demonstrating Real Project Feature</span>
        <a
          href="https://baby-zone-store.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-[#CEFF00] hover:underline flex items-center gap-1 shrink-0 max-w-[140px] sm:max-w-none"
        >
          <span className="truncate">baby-zone.app</span>
          <ExternalLink className="w-3 h-3 shrink-0" />
        </a>
      </div>
    </div>
  );
}
