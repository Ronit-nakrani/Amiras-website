import React from 'react';
import { Flame, Award, Eye, Camera } from 'lucide-react';
import VegBadge from '../common/VegBadge';

/**
 * DishCard Component
 * Displays a food item in a visual card format with photo, price, Gujarati name,
 * dietary badges, and 5-photo interactive modal trigger.
 */
export default function DishCard({
  dish,
  onSelectDish
}) {
  return (
    <div
      onClick={() => onSelectDish && onSelectDish(dish)}
      className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-950/20 cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-stone-900">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/40" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <span className="bg-stone-950/80 backdrop-blur-sm text-[10px] font-medium text-stone-300 px-2.5 py-0.5 rounded-full border border-stone-700/60">
            {dish.category}
          </span>
        </div>

        {/* 5 Photos Badge */}
        <div className="absolute bottom-2.5 right-3 bg-stone-950/80 backdrop-blur-sm text-[10px] font-bold text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/40 flex items-center space-x-1 shadow">
          <Camera className="w-3 h-3 text-amber-400" />
          <span>5 Photos</span>
        </div>

        {/* Special Status Badges */}
        <div className="absolute top-3 right-3 flex flex-col items-end space-y-1">
          {dish.isBestseller && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider shadow">
              <Award className="w-3 h-3 mr-1" />
              Bestseller
            </span>
          )}
          {dish.isJain && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold">
              Jain Available
            </span>
          )}
        </div>

        {/* Portion Tag */}
        <div className="absolute bottom-2.5 left-3 text-[10px] text-stone-300 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
          {dish.portionSize || 'Serves 1-2'}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Name & Gujarati Name */}
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-0.5">
              <div className="flex items-center space-x-1.5">
                <VegBadge />
                <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                  {dish.name}
                </h3>
              </div>

              {dish.gujaratiName && (
                <p className="text-xs text-amber-300/80 font-medium pl-5 font-sans">
                  {dish.gujaratiName}
                </p>
              )}
            </div>

            {dish.isSpicy && (
              <span title="Spicy Dish" className="text-amber-500 flex-shrink-0">
                <Flame className="w-4 h-4 fill-amber-500" />
              </span>
            )}
          </div>

          {dish.description && (
            <p className="text-stone-400 text-xs mt-2 line-clamp-2 leading-relaxed">
              {dish.description}
            </p>
          )}
        </div>

        {/* Price and Action Section */}
        <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-stone-400 font-medium uppercase">Price</span>
            <div className="text-lg font-bold text-amber-400 font-serif">
              ₹{dish.price}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectDish && onSelectDish(dish);
            }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-stone-800 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-stone-700 hover:border-amber-500 font-bold text-xs transition-all transform active:scale-95 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>5 Photos & Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
