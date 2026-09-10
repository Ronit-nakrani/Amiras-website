import React from 'react';
import { Check, Sparkles } from 'lucide-react';

/**
 * AboutSection Component
 * Tells the story and values of Hotel Amiras: pure vegetarian heritage,
 * fresh cottage cheese (paneer), charcoal tandoor, hygienic kitchen standards, and family atmosphere.
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#120e0b] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-amber-900/30 shadow-xl h-48 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Hotel Amiras Rich Dal Makhani"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-900/30 shadow-xl h-36 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80"
                  alt="Hotel Amiras Tandoori Butter Naan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden border border-amber-900/30 shadow-xl h-36 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
                  alt="Hotel Amiras Veg Crispy Indo Chinese"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-900/30 shadow-xl h-48 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80"
                  alt="Hotel Amiras Sizzling Brownie with Vanilla Gelato"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nana Varachha’s Dining Landmark</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              A Tradition of Flavor, Generosity & Surat Hospitality
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Hotel Amiras was founded with a genuine passion for authentic North Indian and Indo-Chinese food. Situated conveniently at Galaxy Point along the Surat-Kamrej Highway in Nana Varachha, we have become the go-to spot for family get-togethers, weekend celebrations, and weekday comfort dining.
            </p>

            <p className="text-stone-400 text-sm leading-relaxed">
              From our famous <strong>Paneer Tikka Masala</strong> simmered with rich aromatics to piping hot <strong>Butter Naans</strong> fresh from our charcoal tandoor, every recipe is cooked from scratch using wholesome ingredients, pure desi ghee, and daily-sourced cottage cheese.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Strictly 100% Pure Vegetarian',
                'Dedicated Jain Kitchen Options',
                'Hearty Portions (~₹400 for Two)',
                'Spacious Air-Conditioned Hall',
                'Fast Table Turnaround & Service',
                'Hygienic Takeaway Packaging'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-stone-200 text-xs sm:text-sm">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats highlight banner */}
            <div className="p-4 rounded-2xl bg-[#19140f] border border-amber-900/30 flex items-center justify-around text-center pt-5">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">4.4★</div>
                <div className="text-[11px] text-stone-400 mt-0.5">2,400+ Reviews</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">100%</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Pure Vegetarian</div>
              </div>
              <div className="w-px h-10 bg-stone-800" />
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">₹400</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Avg for Two</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

