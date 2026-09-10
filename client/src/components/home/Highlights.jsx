import React from 'react';
import { ShieldCheck, Sparkles, Users, UtensilsCrossed, Clock, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "100% Pure Vegetarian",
    desc: "Strictly vegetarian kitchen with dedicated preparation counters and extensive Jain options available on request.",
    badge: "Pure Veg Certified"
  },
  {
    icon: UtensilsCrossed,
    title: "Signature Punjabi & Chinese",
    desc: "From buttery Paneer Tikka Masala and Kaju Curry to crispy Manchurian and Hakka Noodles crafted by experienced chefs.",
    badge: "30+ Specialties"
  },
  {
    icon: Users,
    title: "Family Dining Ambiance",
    desc: "Spacious, air-conditioned seating with cozy family dining booths and warm hospitality that makes every guest feel at home.",
    badge: "Family AC Hall"
  },
  {
    icon: Sparkles,
    title: "Moderate Price Point",
    desc: "Wholesome, lavish meals for two at approximately ₹400. Premium quality and rich flavors without heavy prices.",
    badge: "₹400 For Two"
  },
  {
    icon: Clock,
    title: "Swift Express Service",
    desc: "Famous across Nana Varachha for lightning-fast table service and freshly packed takeaway parcels.",
    badge: "Fast Turnaround"
  },
  {
    icon: HeartHandshake,
    title: "Galaxy Point Convenience",
    desc: "Conveniently located on Surat-Kamrej Highway with easy parking, direct highway connectivity, and digital payments.",
    badge: "Prime Location"
  }
];

/**
 * Highlights Component
 * Displays the 6 core customer value propositions and reasons why patrons visit Hotel Amiras.
 */
export default function Highlights() {
  return (
    <section className="py-16 bg-[#14100c] border-y border-amber-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Why Surat Loves Amiras
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
            Pure Taste, Unmatched Hospitality
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            Providing delicious memories and authentic vegetarian gastronomy at Galaxy Point, Surat.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400/90 bg-amber-950/60 border border-amber-800/40 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

