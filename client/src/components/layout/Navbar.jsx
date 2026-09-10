import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin, Clock, BookOpen } from 'lucide-react';
import VegBadge from '../common/VegBadge';

/**
 * Navbar Component
 * Fixed/sticky header providing branding, notification ticker, desktop & mobile
 * view routing (Home / Full Menu), and direct phone call action.
 */
export default function Navbar({
  currentView = 'home',
  onNavigate
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view, anchor = '') => {
    if (onNavigate) onNavigate(view);
    setMobileMenuOpen(false);
    if (anchor && view === 'home') {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <>
      {/* Top Notification Bar (Desktop only) */}
      <div className="bg-[#1b1510] border-b border-amber-950/60 text-xs py-2 px-4 text-stone-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-amber-400 font-medium">
              <VegBadge className="mr-2" />
              100% Pure Vegetarian Casual Dining
            </span>
            <span className="flex items-center text-stone-400">
              <MapPin className="w-3.5 h-3.5 mr-1 text-amber-500" />
              Galaxy Point, Nana Varachha, Surat
            </span>
            <span className="flex items-center text-stone-400">
              <Clock className="w-3.5 h-3.5 mr-1 text-amber-500" />
              Open Daily: 10:30 AM – 11:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              Kitchen Open Now
            </span>
            <a
              href="tel:+919925264407"
              className="text-amber-400 hover:text-amber-300 transition font-medium flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              +91 99252 64407
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#120f0d]/95 backdrop-blur-md shadow-xl border-b border-amber-900/30 py-3'
            : 'bg-[#120f0d]/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#16120e] rounded-full flex items-center justify-center">
                <span className="text-xl font-bold font-serif text-amber-400 tracking-wider">A</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-serif font-bold text-white tracking-wide group-hover:text-amber-300 transition">
                  Hotel Amiras
                </span>
                <VegBadge />
              </div>
              <p className="text-[11px] text-amber-500/90 font-medium tracking-widest uppercase">
                Pure Veg • Surat
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentView === 'home' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'
              }`}
            >
              Home
            </button>

            {/* Dedicated Full Menu (90+ Dishes) Link */}
            <button
              onClick={() => handleNavClick('menu')}
              className={`relative inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                currentView === 'menu'
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/30'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Menu (90+ Dishes)</span>
            </button>

            <button
              onClick={() => handleNavClick('home', '#about')}
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('home', '#reviews')}
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              Reviews (4.4★)
            </button>
            <button
              onClick={() => handleNavClick('home', '#contact')}
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              Hours & Location
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Direct Call Button (Always accessible) */}
            <a
              href="tel:+919925264407"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 text-xs font-bold transition shadow-md shadow-amber-500/10"
              title="Call Hotel Amiras"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-stone-950" />
              <span>Call Us</span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#16120e] border-b border-amber-950 px-5 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
            <div className="pb-2 border-b border-stone-800 text-xs text-stone-400">
              📍 Galaxy Point, Surat - Kamrej Hwy, Nana Varachha
            </div>
            
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left py-2 font-medium ${
                currentView === 'home' ? 'text-amber-400 font-bold' : 'text-stone-200 hover:text-amber-400'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('menu')}
              className="w-full text-left py-2.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-sm flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Full Menu (All 90+ Dishes)</span>
              </span>
              <span className="text-[10px] bg-amber-500 text-stone-950 px-2 py-0.5 rounded font-black">
                REAL PRICES
              </span>
            </button>

            <button
              onClick={() => handleNavClick('home', '#about')}
              className="w-full text-left py-2 text-stone-200 hover:text-amber-400 font-medium"
            >
              About Hotel Amiras
            </button>
            <button
              onClick={() => handleNavClick('home', '#reviews')}
              className="w-full text-left py-2 text-stone-200 hover:text-amber-400 font-medium"
            >
              Customer Reviews (4.4★)
            </button>
            <button
              onClick={() => handleNavClick('home', '#contact')}
              className="w-full text-left py-2 text-stone-200 hover:text-amber-400 font-medium"
            >
              Directions & Hours (10:30 AM - 11 PM)
            </button>

            <div className="pt-2">
              <a
                href="tel:+919925264407"
                className="w-full py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 99252 64407</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
