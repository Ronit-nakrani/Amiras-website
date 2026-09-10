import React, { useState, useEffect } from 'react';
import {
  X,
  Flame,
  Award,
  Phone,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  Info
} from 'lucide-react';
import VegBadge from '../common/VegBadge';

// Curated complementary gallery photos by cuisine category
const CATEGORY_GALLERIES = {
  'Paneer & Kaju': [
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85'
  ],
  'Vegetable Curries': [
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=85'
  ],
  'Chinese Rice & Noodles': [
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85'
  ],
  'Starters': [
    'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=85'
  ],
  'Roti & Naan': [
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1000&q=85'
  ],
  'Rice, Pulav & Biryani': [
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85'
  ],
  'Cold Drinks & Ice Cream': [
    'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85'
  ],
  'default': [
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=85'
  ]
};

/**
 * DishDetailModal Component
 * Interactive modal showing a 5-photo presentation of a single selected dish,
 * bilingual Gujarati & English title, real menu price, spice meter, chef pairing recommendation,
 * and direct phone call CTA.
 */
export default function DishDetailModal({ dish, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!dish) return null;

  // Build array of 5 images starting with the dish's primary image
  const categoryPool = CATEGORY_GALLERIES[dish.category] || CATEGORY_GALLERIES['default'];
  const galleryImages = [
    dish.image,
    ...categoryPool.filter(img => img !== dish.image).slice(0, 4)
  ];
  while (galleryImages.length < 5) {
    galleryImages.push(categoryPool[galleryImages.length % categoryPool.length]);
  }

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getPairingRecommendation = () => {
    if (dish.category === 'Paneer & Kaju' || dish.category === 'Vegetable Curries' || dish.category === 'Kofta Dishes') {
      return 'Tandoori Butter Nan (₹25) & Masala Butter Milk (₹20)';
    }
    if (dish.category === 'Dal & Tadka') {
      return 'Jira Rice (₹65) & Rosted Papad (₹13)';
    }
    if (dish.category === 'Starters' || dish.category === 'Chinese Gravy') {
      return 'Veg. Hakka Noodles (₹90) or Veg. Fried Rice (₹80)';
    }
    if (dish.category === 'Chinese Rice & Noodles') {
      return 'Paneer Chilly Dry (₹95) & Sweet Corn Soup (₹60)';
    }
    if (dish.category === 'Roti & Naan') {
      return 'Paneer Tikka Masala (₹95) or Kaju Curry (₹105)';
    }
    return 'Hotel Amiras Signature Punjabi Thali Combination';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 flex items-center justify-center animate-fadeIn">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-[#16120e] border border-amber-900/50 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl z-10 animate-scaleUp flex flex-col md:flex-row max-h-[92vh]">
        
        {/* Close Button Top-Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-950/80 hover:bg-stone-900 text-stone-300 hover:text-white border border-stone-700 flex items-center justify-center transition shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: 5-IMAGE INTERACTIVE GALLERY */}
        <div className="md:w-1/2 bg-[#120e0b] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-800">
          
          {/* Main Large Image Display */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-950 border border-stone-800/80 group">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`${dish.name} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
            />
            
            {/* Image Index Pill */}
            <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-stone-300 font-semibold border border-stone-700">
              Photo {activeImageIndex + 1} of {galleryImages.length}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 5 Clickable Thumbnails */}
          <div className="mt-4 pt-2">
            <div className="text-[11px] text-stone-400 font-medium mb-2 flex items-center justify-between">
              <span>5 Angles & Preparations:</span>
              <span className="text-amber-400">Click photo to preview</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImageIndex === idx
                      ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/30 ring-2 ring-amber-400/20'
                      : 'border-stone-800 opacity-60 hover:opacity-100 hover:border-stone-600'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {activeImageIndex === idx && (
                    <div className="absolute inset-0 bg-amber-500/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: DISH DETAILS & DESCRIPTION */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-4">
            
            {/* Category & Badge header */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                {dish.category}
              </span>

              {dish.isBestseller && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider">
                  <Award className="w-3 h-3 mr-1" />
                  Bestseller
                </span>
              )}

              {dish.isJain && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-[10px] font-bold">
                  Jain Available
                </span>
              )}
            </div>

            {/* Bilingual Title */}
            <div>
              <div className="flex items-center space-x-2.5">
                <VegBadge />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                  {dish.name}
                </h2>
              </div>
              
              {dish.gujaratiName && (
                <p className="text-sm font-sans font-medium text-amber-300 mt-1 pl-6">
                  {dish.gujaratiName}
                </p>
              )}
            </div>

            {/* Price Display */}
            <div className="flex items-baseline space-x-3 py-2 border-y border-stone-800/80">
              <span className="text-3xl font-serif font-bold text-amber-400">
                ₹{dish.price}
              </span>
              <span className="text-xs text-stone-400 font-medium">
                Official Menu Price • Pure Veg
              </span>
              <span className="text-xs text-stone-500 ml-auto font-mono">
                {dish.portionSize || 'Serves 1-2'}
              </span>
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5 flex items-center">
                <Info className="w-3.5 h-3.5 mr-1 text-amber-400" />
                About This Dish
              </h4>
              <p className="text-stone-300 text-sm leading-relaxed">
                {dish.description || 'Authentic pure vegetarian delicacy prepared fresh in Hotel Amiras kitchen using premium spices, fresh cottage cheese, and traditional culinary techniques.'}
              </p>
            </div>

            {/* Spice & Dietary Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-xs space-y-1">
                <div className="text-stone-400">Dietary Standard</div>
                <div className="font-semibold text-emerald-400 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5" />
                  100% Pure Veg
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-xs space-y-1">
                <div className="text-stone-400">Spice Level</div>
                <div className="font-semibold text-amber-300 flex items-center">
                  {dish.isSpicy ? (
                    <>
                      <Flame className="w-3.5 h-3.5 text-amber-500 mr-1 fill-amber-500" />
                      Medium - Spicy
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1" />
                      Mild & Flavorful
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Chef's Pairing Recommendation */}
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 text-xs">
              <div className="text-amber-400 font-bold flex items-center mb-1">
                <UtensilsCrossed className="w-3.5 h-3.5 mr-1.5" />
                Chef's Recommended Pairing:
              </div>
              <p className="text-stone-300">
                Best enjoyed with <strong className="text-white">{getPairingRecommendation()}</strong>.
              </p>
            </div>

          </div>

          {/* FOOTER ACTION: DIRECT CALL TO HOTEL AMIRAS */}
          <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:+919925264407"
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 transition-all transform active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Order / Inquire (+91 99252 64407)</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-semibold transition"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

