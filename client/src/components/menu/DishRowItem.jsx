import React from 'react';
import { Eye } from 'lucide-react';
import VegBadge from '../common/VegBadge';

/**
 * DishRowItem Component
 * Compact horizontal row layout representing an item in an authentic printed menu card view.
 */
export default function DishRowItem({
  dish,
  onSelectDish
}) {
  return (
    <div
      onClick={() => onSelectDish && onSelectDish(dish)}
      className="py-2.5 px-3 rounded-xl hover:bg-stone-900/60 transition group flex items-center justify-between gap-3 border-b border-stone-800/40 cursor-pointer"
    >
      {/* Dish Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <VegBadge />
          <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition truncate">
            {dish.name}
          </span>
          {dish.isBestseller && (
            <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-950 px-1.5 py-0.2 rounded border border-amber-800/50">
              Star
            </span>
          )}
          {dish.isJain && (
            <span className="text-[9px] text-emerald-400 bg-emerald-950 px-1.5 py-0.2 rounded">
              Jain
            </span>
          )}
        </div>

        {dish.gujaratiName && (
          <p className="text-xs text-stone-400 pl-5 mt-0.5 font-sans">
            {dish.gujaratiName}
          </p>
        )}
      </div>

      {/* Price & Action Button */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        <span className="font-serif font-bold text-amber-400 text-sm sm:text-base">
          ₹{dish.price}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectDish && onSelectDish(dish);
          }}
          className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-amber-500 text-stone-300 hover:text-stone-950 text-xs font-semibold border border-stone-700 hover:border-amber-500 transition flex items-center space-x-1"
        >
          <Eye className="w-3 h-3" />
          <span>View</span>
        </button>
      </div>
    </div>
  );
}
