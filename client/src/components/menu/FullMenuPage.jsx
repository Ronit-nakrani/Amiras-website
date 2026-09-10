import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowLeft,
  Check,
  Sparkles,
  LayoutGrid,
  ListOrdered,
  Phone
} from 'lucide-react';
import DishCard from './DishCard';
import DishRowItem from './DishRowItem';

/**
 * FullMenuPage Component
 * Full-catalog food browsing experience featuring:
 * - 90+ authentic Hotel Amiras items with real menu card prices
 * - Live category pills (Soups, Paneer, Chinese, Rotis, Pulavs, Desserts)
 * - Dual view modes: Visual Cards Grid vs Classic Printed Restaurant Menu Card
 * - Sorting by price and recommendations
 * - Bilingual search (English & Gujarati)
 */
export default function FullMenuPage({
  menuItems = [],
  categories = ['All'],
  onBackToHome,
  onSelectDish
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [jainOnly, setJainOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high'
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'menu-card'

  // Filter and sort items based on category, Jain flag, search query, and sort order
  const filteredItems = useMemo(() => {
    let list = [...menuItems];

    if (selectedCategory !== 'All') {
      list = list.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (jainOnly) {
      list = list.filter(item => item.isJain === true);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.gujaratiName && item.gujaratiName.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else {
      list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return list;
  }, [menuItems, selectedCategory, jainOnly, searchQuery, sortBy]);

  // Group by category for the authentic printed menu-card view
  const groupedByCategory = useMemo(() => {
    const groups = {};
    filteredItems.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-[#f7f5f0] pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back button */}
        <div className="flex items-center justify-between py-3 mb-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-stone-400 hover:text-amber-400 text-xs sm:text-sm font-semibold transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-stone-400 hidden sm:inline">
              Showing <strong>{filteredItems.length}</strong> of <strong>{menuItems.length}</strong> Dishes
            </span>
            <a
              href="tel:+919925264407"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Hotel</span>
            </a>
          </div>
        </div>

        {/* Page Title & Badges */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Hotel Amiras Printed Menu Card</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Complete Restaurant Menu
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Explore all 90+ pure vegetarian Punjabi, Indo-Chinese, Tandoor, and Dessert dishes with original prices and Gujarati names as served at Galaxy Point, Surat.
          </p>
        </div>

        {/* Filter & Control Bar */}
        <div className="bg-[#17130f] border border-amber-950/60 p-4 rounded-3xl mb-8 shadow-xl space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish name in English or Gujarati (e.g. Paneer, નાન, કઢી, Bhel)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-900 border border-stone-700/80 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Jain Filter Toggle */}
            <div className="md:col-span-3 flex items-center">
              <button
                onClick={() => setJainOnly(!jainOnly)}
                className={`w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all border ${
                  jainOnly
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-md shadow-emerald-950'
                    : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-emerald-600/50'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Jain Friendly Only</span>
                {jainOnly && <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />}
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl bg-stone-900 border border-stone-700 text-xs text-stone-300 focus:outline-none focus:border-amber-500"
              >
                <option value="default">Sort: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* View Mode Switcher (Cards Grid vs Classic Printed Layout) */}
            <div className="md:col-span-2 flex items-center justify-end space-x-1 bg-stone-900 p-1 rounded-2xl border border-stone-800">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition ${
                  viewMode === 'cards'
                    ? 'bg-amber-500 text-stone-950 shadow font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Visual Card Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cards</span>
              </button>
              <button
                onClick={() => setViewMode('menu-card')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 transition ${
                  viewMode === 'menu-card'
                    ? 'bg-amber-500 text-stone-950 shadow font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
                title="Classic Restaurant Menu Card"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Menu Card</span>
              </button>
            </div>
          </div>

          {/* Category Pill Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-stone-800/60">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-stone-900/90 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#16120e] rounded-3xl border border-stone-800 p-8">
            <div className="w-16 h-16 rounded-full bg-stone-900 flex items-center justify-center mx-auto mb-4 text-stone-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">No dishes matched your criteria</h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-sm mx-auto">
              Try searching with another keyword in English or Gujarati, or reset the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setJainOnly(false);
                setSelectedCategory('All');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* VIEW 1: VISUAL CARDS GRID */}
        {viewMode === 'cards' && filteredItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <DishCard
                key={dish._id || dish.name}
                dish={dish}
                onSelectDish={onSelectDish}
              />
            ))}
          </div>
        )}

        {/* VIEW 2: AUTHENTIC RESTAURANT PRINTED MENU CARD VIEW */}
        {viewMode === 'menu-card' && filteredItems.length > 0 && (
          <div className="space-y-10">
            {Object.entries(groupedByCategory).map(([catName, items]) => (
              <div
                key={catName}
                className="bg-[#16120e] rounded-3xl border border-amber-900/30 p-6 sm:p-8 shadow-xl"
              >
                {/* Section Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-900/40">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-400 uppercase tracking-wide">
                      {catName}
                    </h2>
                  </div>
                  <span className="text-xs text-stone-400 bg-stone-900 px-3 py-1 rounded-full border border-stone-800">
                    {items.length} Items
                  </span>
                </div>

                {/* 2-Column Responsive Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {items.map((dish) => (
                    <DishRowItem
                      key={dish._id || dish.name}
                      dish={dish}
                      onSelectDish={onSelectDish}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

