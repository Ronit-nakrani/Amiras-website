import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import VegBadge from '../common/VegBadge';

/**
 * Footer Component
 * Provides comprehensive restaurant info, address at Galaxy Point Surat,
 * operational hours, cuisine highlights, and navigation links.
 */
export default function Footer() {
  return (
    <footer className="bg-[#0b0907] border-t border-amber-950/40 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-serif font-bold text-base">
                A
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-wide">
                Hotel Amiras
              </span>
              <VegBadge />
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Surat's premier pure-vegetarian casual dining restaurant. Dedicated to authentic Punjabi richness, flavorful Indo-Chinese delicacies, and warm Gujarati hospitality.
            </p>
            <div className="pt-1 text-amber-400 font-semibold text-xs">
              ⭐ 4.4 / 5.0 (2,400+ Verified Reviews)
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-amber-400 transition">Complete Menu</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition">Our Story & Hygiene</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition">Customer Reviews</a></li>
              <li><a href="tel:+919925264407" className="hover:text-amber-400 transition">Call Hotel Amiras</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Timings & Directions</a></li>
            </ul>
          </div>

          {/* Cuisines & Signature Specialities */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Specialities
            </h4>
            <ul className="space-y-2">
              <li>Paneer Tikka Masala & Naan</li>
              <li>Slow Simmered Dal Makhani</li>
              <li>Kaju Curry (Kathiyawadi / Punjabi)</li>
              <li>Veg Crispy & Paneer Chilli</li>
              <li>Surti Masala Chaas & Mango Lassi</li>
              <li>Sizzling Brownie with Ice Cream</li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">
              Find Hotel Amiras
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Galaxy Point, Surat - Kamrej Hwy, Nana Varachha, Surat 395013</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+919925264407" className="text-stone-300 hover:text-amber-400 transition font-mono">
                  +91 99252 64407
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Open Daily: 10:30 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Hotel Amiras Surat. All rights reserved. 100% Pure Vegetarian.</p>
          <div className="flex items-center space-x-4 text-xs">
            <span>Approx ₹400 for Two</span>
            <span>•</span>
            <span>Galaxy Point, Nana Varachha</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

