import React from 'react';
import { Search, Check, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import DishCard from './DishCard';

/**
 * MenuSection Component
 * Homepage food showcase featuring popular bestsellers, live category tabs,
 * bilingual search bar, Jain filter toggle, and link to the full catalog page.
 */
export default function MenuSection({
  menuItems = [],
  categories = ['All'],
  selectedCategory = 'All',
  onSelectCategory,
  searchQuery = '',
  onSearchChange,
  jainOnly = false,
  onToggleJain,
  loading = false,
  onOpenFullMenu,
  onSelectDish
}) {
  return (
    <section id="menu" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Pure Vegetarian Culinary Delights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Popular Specialties & Bestsellers
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3">
            Prepared fresh with authentic Punjabi masalas, charcoal tandoor rotis, and pure dairy paneer.
          </p>
        </div>

        {/* Search & Jain Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#16120e] p-3 sm:p-4 rounded-2xl border border-stone-800">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search dishes in English or ગુજરાતી..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700/80 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Action buttons: Jain Toggle & Full Menu CTA */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
            <button
              onClick={() => onToggleJain(!jainOnly)}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                jainOnly
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-md shadow-emerald-950'
                  : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-emerald-600/50'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Jain Friendly Only</span>
              {jainOnly && <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />}
            </button>

            {onOpenFullMenu && (
              <button
                onClick={onOpenFullMenu}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full Menu (90+)</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-20 text-center text-stone-400">
            <div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Loading authentic dishes from Hotel Amiras kitchen...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && menuItems.length === 0 && (
          <div className="text-center py-16 bg-[#16120e] rounded-3xl border border-stone-800 p-8">
            <div className="w-16 h-16 rounded-full bg-stone-900 flex items-center justify-center mx-auto mb-4 text-stone-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">No matching dishes found</h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-sm mx-auto">
              Try searching with a different keyword or turn off the Jain filter to see our complete pure-veg menu.
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onToggleJain(false);
                onSelectCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-amber-500 text-stone-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dish Cards Grid */}
        {!loading && menuItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.slice(0, 18).map((dish) => (
              <DishCard
                key={dish._id || dish.name}
                dish={dish}
                onSelectDish={onSelectDish}
              />
            ))}
          </div>
        )}

        {/* Explore Full 90+ Items Banner */}
        {onOpenFullMenu && (
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#1c1611] via-[#241c14] to-[#1c1611] border border-amber-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                Full 90+ Item Digital Menu
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Looking for our complete printed menu card?
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Discover all Soups, Koftas, Chinese Gravies, Roti varieties, Biryanis, Salads, and Ice Creams with exact menu card prices.
              </p>
            </div>

            <button
              onClick={onOpenFullMenu}
              className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-amber-500/20 flex-shrink-0 transition-transform hover:scale-105 active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Complete Menu (90+)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
