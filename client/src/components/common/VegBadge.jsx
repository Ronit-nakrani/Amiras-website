import React from 'react';

/**
 * Standard Indian FSSAI green-square-in-circle Pure Vegetarian badge
 * @param {string} className - Optional additional CSS classes
 * @param {string} title - Tooltip title text
 */
export default function VegBadge({ className = '', title = '100% Pure Vegetarian' }) {
  return (
    <span
      className={`veg-badge flex-shrink-0 ${className}`}
      title={title}
      aria-label="Pure Vegetarian"
    >
      <span className="veg-badge-dot" />
    </span>
  );
}

