import React from 'react';
import { Star, Clock, ArrowRight, Award, Sparkles, BookOpen, MapPin } from 'lucide-react';

/**
 * Hero Component
 * Landing section introducing Hotel Amiras, key statistics (4.4★, budget-friendly pricing, hours),
 * calls-to-action (Full Menu / Walk-in), and signature dish visual highlight.
 */
export default function Hero({ onOpenFullMenu }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,119,6,0.18),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

      {/* Decorative backdrop elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline / Pure veg badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Surat’s Beloved Pure Vegetarian Destination</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] text-white">
              Authentic Flavors, <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Pure Vegetarian
              </span>{' '}
              Delight.
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Located at Galaxy Point in Nana Varachha, Hotel Amiras is renowned for generous portions, rich Punjabi curries, charcoal-fresh Butter Naans, and sizzling Indo-Chinese specials — all served in a spacious, clean, and family-friendly ambiance.
            </p>

            {/* Badges & Trust Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Rating Card */}
              <div className="flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-200 shadow-md">
                <div className="flex items-center bg-amber-500 text-stone-950 px-2 py-0.5 rounded font-black text-xs">
                  <span>4.4</span>
                  <Star className="w-3 h-3 fill-stone-950 ml-0.5" />
                </div>
                <div className="text-left text-xs">
                  <div className="font-semibold text-white">Top Rated Restaurant</div>
                  <div className="text-stone-400 text-[11px]">2,400+ Google Reviews</div>
                </div>
              </div>

              {/* Price Range Pill */}
              <div className="flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-200 shadow-md">
                <span className="text-base">💰</span>
                <div className="text-left text-xs">
                  <div className="font-semibold text-white">₹350 – ₹400 for Two</div>
                  <div className="text-emerald-400 text-[11px]">Budget & Family Friendly</div>
                </div>
              </div>

              {/* Hours Pill */}
              <div className="flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-200 shadow-md">
                <Clock className="w-4 h-4 text-amber-400" />
                <div className="text-left text-xs">
                  <div className="font-semibold text-white">10:30 AM – 11:00 PM</div>
                  <div className="text-stone-400 text-[11px]">Open 7 Days a Week</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenFullMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                <span>View Full Menu (90+ Dishes)</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-400 border border-amber-500/40 hover:border-amber-400 font-semibold text-sm tracking-wide transition-all shadow-md"
              >
                <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                <span>Dine-In Walk-ins Welcome</span>
              </a>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Circular Glow Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-950/60 aspect-[4/3] sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=85"
                  alt="Hotel Amiras Signature Paneer Tikka Masala and Tandoori Naan"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Overlay Text Inside Image */}
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider">
                      Signature Duo
                    </span>
                    <span className="text-xs text-amber-300 font-bold">
                      ₹95 + ₹25
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                    Paneer Tikka Masala & Tandoori Butter Nan
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    Char-grilled cottage cheese in spiced makhani gravy with piping hot buttery tandoori naan.
                  </p>
                </div>
              </div>

              {/* Floating Highlight Card 1 */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#1b1510]/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/30 shadow-xl flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 flex items-center justify-center border border-emerald-600/40">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Pure Vegetarian</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Jain Preparation Available</div>
                </div>
              </div>

              {/* Floating Highlight Card 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1b1510]/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/30 shadow-xl flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-950 flex items-center justify-center border border-amber-600/40">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Fast Service & Takeaway</div>
                  <div className="text-[10px] text-stone-400">Piping Hot in 10-15 Mins</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

